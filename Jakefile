var util = require('util');
var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var tempura = require('./lib/tempura');
var pkg = JSON.parse(fs.readFileSync('./package.json').toString());

var SRC_DIR = './src';
var DIST_DIR = './dist';
var LIB_DIR = './lib';
var TEMPLATES_DIR = './templates';

var PEGJS_FILE = SRC_DIR + '/tempura.pegjs';
var GENERATED_PARSER_FILE = DIST_DIR + 'generated.parser.js';
var TEMPURA_FILE = DIST_DIR + '/tempura-' + pkg.version + '.js';
var TEMPURA_MIN_FILE = DIST_DIR + '/tempura-' + pkg.version + '.min.js';
var TEMPURA_RUNTIME_FILE = DIST_DIR + '/tempura.runtime-' + pkg.version + '.js';
var TEMPURA_RUNTIME_MIN_FILE = DIST_DIR + '/tempura.runtime-' + pkg.version + '.min.js';

var PRELUDE_FILE = LIB_DIR + '/internal/prelude.js';
var PARSER_FILE = LIB_DIR + '/internal/parser.js';
var COMPILER_FILE = LIB_DIR + '/internal/compiler.js';
var CORE_FILE = LIB_DIR + '/internal/core.js';
var API_FILE = LIB_DIR + '/api.js';

var PARSER_TEMPLATE_FILE = TEMPLATES_DIR + '/parser.tempura';
var HEADER_TEMPLATE_FILE = TEMPLATES_DIR + '/header.tempura';
var TEMPURA_TEMPLATE_FILE = TEMPLATES_DIR + '/tempura.tempura';
var TEMPURA_RUNTIME_TEMPLATE_FILE = TEMPLATES_DIR + '/tempura.runtime.tempura';

var mkdirUnlessExists = function (dir)  {
  try {
    fs.statSync(dir);
  } catch (e) {
    fs.mkdirSync(dir, 0755);
  }
};

var cleanDir = function (dir) {
  fs.readdirSync(dir).every(function (file) {
    var file = dir + '/' + file;
    var stats = fs.statSync(file);
    if (stats.isDirectory()) {
      removeDir(file);
    } else {
      fs.unlinkSync(file);
    }
    return true;
  });
};

var removeDir = function (dir) {
  fs.readdirSync(dir).every(function (file) {
    var file = dir + '/' + file;
    var stats = fs.statSync(file);
    if (stats.isDirectory()) {
      removeDir(file);
    } else {
      fs.unlinkSync(file);
    }
    return true;
  });
  fs.rmdirSync(dir);
};

task('clean', function () {
  mkdirUnlessExists(DIST_DIR);
  cleanDir(DIST_DIR);
});

task('makeParser', ['clean'], function () {
  var process = childProcess.spawn('pegjs', ['-e', 'var parser', PEGJS_FILE, GENERATED_PARSER_FILE]);
  process.on('exit', function () {
    var template = tempura.prepare(fs.readFileSync(PARSER_TEMPLATE_FILE, 'utf-8'));
    var data = {parser: fs.readFileSync(GENERATED_PARSER_FILE, 'utf-8')};
    var content = template.render(data);
    fs.writeFileSync(PARSER_FILE, content, 'utf-8');
    fs.unlinkSync(GENERATED_PARSER_FILE);
    complete();
  });
}, {async: true});

task('updateVersion', ['clean'], function () {
  var content = fs.readFileSync(API_FILE, 'utf-8');
  content = content.replace(/(tempura.version = ').+?(';)/g, '$1' + pkg.version + '$2');
  fs.writeFileSync(API_FILE, content, 'utf-8');
});

task('test', ['makeParser', 'updateVersion'], function () {
  var process = childProcess.execFile('./test/node/run.js', function (error, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    if (error != null) {
      console.error('error: ' + error);
    }
  });
  process.on('exit', function () {
    complete();
  });
}, {async: true});

task('build', ['test'], function () {
  var options = {
    templates: {
      header: fs.readFileSync(HEADER_TEMPLATE_FILE, 'utf-8')
    }
  };
  var template = tempura.prepare(fs.readFileSync(TEMPURA_TEMPLATE_FILE, 'utf-8'), options);
  var data = {
    preludeName: PRELUDE_FILE,
    prelude: fs.readFileSync(PRELUDE_FILE, 'utf-8'),
    parserName: PARSER_FILE,
    parser: fs.readFileSync(PARSER_FILE, 'utf-8'),
    compilerName: COMPILER_FILE,
    compiler: fs.readFileSync(COMPILER_FILE, 'utf-8'),
    coreName: CORE_FILE,
    core: fs.readFileSync(CORE_FILE, 'utf-8'),
    apiName: API_FILE,
    api: fs.readFileSync(API_FILE, 'utf-8'),
    pkg: pkg
  };
  var content = template.render(data);
  fs.writeFileSync(TEMPURA_FILE, content, 'utf-8');
  template = tempura.prepare(fs.readFileSync(TEMPURA_RUNTIME_TEMPLATE_FILE, 'utf-8'), options);
  content = template.render(data);
  fs.writeFileSync(TEMPURA_RUNTIME_FILE, content, 'utf-8');
});

task('minify', ['build'], function () {
  var uglify = function(dest, src) {
    return childProcess.spawn('uglifyjs', ['-o', dest, src]);
  }
  var process = uglify(TEMPURA_MIN_FILE, TEMPURA_FILE);
  process.on('exit', function () {
    var process = uglify(TEMPURA_RUNTIME_MIN_FILE, TEMPURA_RUNTIME_FILE);
    process.on('exit', function () { complete(); });
  });
}, {async: true});

task('dist', ['minify'], function () {
  console.log('dist task done.');
});

task('default', ['dist']);


