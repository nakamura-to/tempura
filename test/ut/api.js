TestCase('api', {

  'setUp': function () {
    this.html = function (id) {
      return document.getElementById(id).innerHTML;
    };
  },

  'test version': function () {
    assertNotUndefined(tempura.version);
  },

  'test prepare and render': function () {
    /*:DOC +=
     <div id="template">
     {{name}} is {{age}} years old.
     </div>
     <div id="result">
     hoge is 20 years old.
     </div>
     */
    var template = tempura.prepare(this.html('template'));
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  },

  'test prepare and render: it should use a "pipes" option prior to a "pipes" setting': function () {
    /*:DOC +=
     <div id="template">
     {{name|enclose}} is {{age}} years old.
     </div>
     <div id="result">
     [hoge] is 20 years old.
     </div>
     */
    tempura.settings.pipes.enclose = function (value) {
      return '%' + value + '%';
    };
    var options = {
      pipes: {
        enclose: function (value) {
          return '[' + value + ']';
        }
      }
    };
    var template = tempura.prepare(this.html('template'), options);
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  },

  'IGNORE test prepare and render: it should use a "pipes" setting, if a "pipes" option does not exist': function () {
    /*:DOC +=
     <div id="template">
     {{name|enclose}} is {{age}} years old.
     </div>
     <div id="result">
     [hoge] is 20 years old.
     </div>
     */
    tempura.settings.pipes.enclose = function (value) {
      return '[' + value + ']';
    };
    var template = tempura.prepare(this.html('template'));
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  },

  'IGNORE test prepare and render: it should use a "noSuchValue" option prior to a "noSuchValue" setting': function () {
    /*:DOC +=
     <div id="template">
     {{hoge}} is {{age}} years old.
     </div>
     <div id="result">
     [hoge is not found] is 20 years old.
     </div>
     */
    tempura.setSettings.noSuchValue = function (name) {
      return undefined;
    };
    var options = {
      noSuchValue: function (name) {
        return '[' + name + ' is not found]';
      }
    };
    var template = tempura.prepare(this.html('template'), options);
    var result = template.render({age: 20});
    assertSame(this.html('result'), result);
  },

  'test prepare and render: it should use a "noSuchValue" setting, if a "noSuchValue" option does not exitst': function () {
    /*:DOC +=
     <div id="template">
     {{hoge}} is {{age}} years old.
     </div>
     <div id="result">
     [hoge is not found] is 20 years old.
     </div>
     */
    tempura.settings.noSuchValue = function (name) {
      return '[' + name + ' is not found]';
    };
    var template = tempura.prepare(this.html('template'));
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  },

  'IGNORE test prepare and render: it should use a "noSuchPipe" option prior to a "noSuchPipe" setting': function () {
    /*:DOC +=
     <div id="template">
     {{name|foo}} is {{age}} years old.
     </div>
     <div id="result">
     [foo,0,hoge] is 20 years old.
     </div>
     */
    tempura.setSettings({
      noSuchPipe: function (name, index, value) {
        return undefined;
      }
    });
    var options = {
      noSuchPipe: function (name, index, value) {
        return '[' + name + ',' + index + ',' + value + ']';
      }
    };
    var template = tempura.prepare(this.html('template'), options);
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  },

  'IGNORE test prepare and render: it should use a "noSuchPipe" setting, if a "noSuchPipe" option does not exitst': function () {
    /*:DOC +=
     <div id="template">
     {{name|foo}} is {{age}} years old.
     </div>
     <div id="result">
     [foo,0,hoge] is 20 years old.
     </div>
     */
    tempura.setSettings({
      noSuchPipe: function (name, index, value) {
        return '[' + name + ',' + index + ',' + value + ']';
      }
    });
    var template = tempura.prepare(this.html('template'));
    var result = template.render({name: 'hoge', age: 20});
    assertSame(this.html('result'), result);
  }

});