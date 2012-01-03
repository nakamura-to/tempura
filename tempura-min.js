// tempura.js 0.0.4-dev12
// tempura is simple templating library in javascript.
// For all details and documentation:
// http://nakamura-to.github.com/tempura/
//noinspection ThisExpressionReferencesGlobalObjectJS
(function(a){"use strict";var b=function(){var a={parse:function(a,c){function j(a,b,c){var d=a,e=c-a.length;for(var f=0;f<e;f++)d=b+d;return d}function k(a){var b=a.charCodeAt(0);if(b<=255)var c="x",d=2;else var c="u",d=4;return"\\"+c+j(b.toString(16).toUpperCase(),"0",d)}function l(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,k)+'"'}function m(a){if(e<g)return;e>g&&(g=e,h=[]),h.push(a)}function n(){var b="Program@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e,h=o();if(h!==null){var j=[],k=o();while(k!==null){j.push(k);var k=o()}if(j!==null)var l=[h,j];else{var l=null;e=g}}else{var l=null;e=g}var n=l!==null?function(a,b){var c=[a],d,e=b.length;for(d=0;d<e;d++)c.push(b[d]);return{type:"type_program",statements:c}}(l[0],l[1]):null;if(n!==null)var p=n;else{var p=null;e=d}if(p!==null)var q=p;else{var r=e;if(a.substr(e,0)===""){var s="";e+=0}else{var s=null;f&&m('""')}var t=s!==null?function(){return{type:"type_program",statements:[]}}():null;if(t!==null)var u=t;else{var u=null;e=r}if(u!==null)var q=u;else var q=null}return i[b]={nextPos:e,result:q},q}function o(){var a="Statement@"+e,b=i[a];if(b)return e=b.nextPos,b.result;var c=p();if(c!==null)var d=c;else{var f=q();if(f!==null)var d=f;else{var g=r();if(g!==null)var d=g;else{var h=s();if(h!==null)var d=h;else{var j=u();if(j!==null)var d=j;else{var k=v();if(k!==null)var d=k;else var d=null}}}}}return i[a]={nextPos:e,result:d},d}function p(){var b="Block@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e;if(a.substr(e,3)==="{{#"){var h="{{#";e+=3}else{var h=null;f&&m('"{{#"')}if(h!==null){var j=y();if(j!==null){var k=w();if(k!==null){var l=y();if(l!==null){if(a.substr(e,2)==="}}"){var o="}}";e+=2}else{var o=null;f&&m('"}}"')}if(o!==null){var p=n();if(p!==null){if(a.substr(e,3)==="{{/"){var q="{{/";e+=3}else{var q=null;f&&m('"{{/"')}if(q!==null){var r=y();if(r!==null){var s=w();if(s!==null){var t=y();if(t!==null){if(a.substr(e,2)==="}}"){var u="}}";e+=2}else{var u=null;f&&m('"}}"')}if(u!==null)var v=[h,j,k,l,o,p,q,r,s,t,u];else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}var x=v!==null?function(a,b,c){return C(a,c),{type:"type_block",name:a,program:b}}(v[2],v[5],v[8]):null;if(x!==null)var z=x;else{var z=null;e=d}return i[b]={nextPos:e,result:z},z}function q(){var b="Inverse@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e;if(a.substr(e,3)==="{{^"){var h="{{^";e+=3}else{var h=null;f&&m('"{{^"')}if(h!==null){var j=y();if(j!==null){var k=w();if(k!==null){var l=y();if(l!==null){if(a.substr(e,2)==="}}"){var o="}}";e+=2}else{var o=null;f&&m('"}}"')}if(o!==null){var p=n();if(p!==null){if(a.substr(e,3)==="{{/"){var q="{{/";e+=3}else{var q=null;f&&m('"{{/"')}if(q!==null){var r=y();if(r!==null){var s=w();if(s!==null){var t=y();if(t!==null){if(a.substr(e,2)==="}}"){var u="}}";e+=2}else{var u=null;f&&m('"}}"')}if(u!==null)var v=[h,j,k,l,o,p,q,r,s,t,u];else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}}else{var v=null;e=g}var x=v!==null?function(a,b,c){return C(a,c),{type:"type_inverse",name:a,program:b}}(v[2],v[5],v[8]):null;if(x!==null)var z=x;else{var z=null;e=d}return i[b]={nextPos:e,result:z},z}function r(){var b="Partial@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e;if(a.substr(e,3)==="{{@"){var h="{{@";e+=3}else{var h=null;f&&m('"{{@"')}if(h!==null){var j=y();if(j!==null){var k=w();if(k!==null){var l=e,n=z();if(n!==null){var o=[];while(n!==null){o.push(n);var n=z()}}else var o=null;if(o!==null){var p=w();if(p!==null)var q=[o,p];else{var q=null;e=l}}else{var q=null;e=l}var r=q!==null?q:"";if(r!==null){var s=y();if(s!==null){if(a.substr(e,2)==="}}"){var t="}}";e+=2}else{var t=null;f&&m('"}}"')}if(t!==null)var u=[h,j,k,r,s,t];else{var u=null;e=g}}else{var u=null;e=g}}else{var u=null;e=g}}else{var u=null;e=g}}else{var u=null;e=g}}else{var u=null;e=g}var v=u!==null?function(a,b){return{type:"type_partial",name:a,context:b[1]}}(u[2],u[3]):null;if(v!==null)var x=v;else{var x=null;e=d}return i[b]={nextPos:e,result:x},x}function s(){var b="Mustache@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e;if(a.substr(e,2)==="{{"){var h="{{";e+=2}else{var h=null;f&&m('"{{"')}if(h!==null){var j=y();if(j!==null){var k=w();if(k!==null){var l=t();if(l!==null){var n=y();if(n!==null){if(a.substr(e,2)==="}}"){var o="}}";e+=2}else{var o=null;f&&m('"}}"')}if(o!==null)var p=[h,j,k,l,n,o];else{var p=null;e=g}}else{var p=null;e=g}}else{var p=null;e=g}}else{var p=null;e=g}}else{var p=null;e=g}}else{var p=null;e=g}var q=p!==null?function(a,b){return{type:"type_mustache",name:a,processors:b,escape:!0}}(p[2],p[3]):null;if(q!==null)var r=q;else{var r=null;e=d}if(r!==null)var s=r;else{var u=e,v=e;if(a.substr(e,3)==="{{{"){var x="{{{";e+=3}else{var x=null;f&&m('"{{{"')}if(x!==null){var z=y();if(z!==null){var A=w();if(A!==null){var B=t();if(B!==null){var C=y();if(C!==null){if(a.substr(e,3)==="}}}"){var D="}}}";e+=3}else{var D=null;f&&m('"}}}"')}if(D!==null)var E=[x,z,A,B,C,D];else{var E=null;e=v}}else{var E=null;e=v}}else{var E=null;e=v}}else{var E=null;e=v}}else{var E=null;e=v}}else{var E=null;e=v}var F=E!==null?function(a,b){return{type:"type_mustache",name:a,processors:b,escape:!1}}(E[2],E[3]):null;if(F!==null)var G=F;else{var G=null;e=u}if(G!==null)var s=G;else var s=null}return i[b]={nextPos:e,result:s},s}function t(){var b="Pipeline@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=[],h=e,j=y();if(j!==null){if(a.substr(e,1)==="|"){var k="|";e+=1}else{var k=null;f&&m('"|"')}if(k!==null){var l=y();if(l!==null){var n=x();if(n!==null)var o=[j,k,l,n];else{var o=null;e=h}}else{var o=null;e=h}}else{var o=null;e=h}}else{var o=null;e=h}while(o!==null){g.push(o);var h=e,j=y();if(j!==null){if(a.substr(e,1)==="|"){var k="|";e+=1}else{var k=null;f&&m('"|"')}if(k!==null){var l=y();if(l!==null){var n=x();if(n!==null)var o=[j,k,l,n];else{var o=null;e=h}}else{var o=null;e=h}}else{var o=null;e=h}}else{var o=null;e=h}}var p=g!==null?function(a){var b=[],c,d=a.length;for(c=0;c<d;c++)b.push(a[c][3]);return b}(g):null;if(p!==null)var q=p;else{var q=null;e=d}if(q!==null)var r=q;else{var s=e,t=e,u=[],v=u!==null?function(){return[]}():null;if(v!==null)var w=v;else{var w=null;e=s}if(w!==null)var r=w;else var r=null}return i[b]={nextPos:e,result:r},r}function u(){var b="Comment@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e;if(a.substr(e,3)==="{{!"){var h="{{!";e+=3}else{var h=null;f&&m('"{{!"')}if(h!==null){var j=[],k=e,l=e,n=f;f=!1;if(a.substr(e,2)==="}}"){var o="}}";e+=2}else{var o=null;f&&m('"}}"')}f=n;if(o===null)var p="";else{var p=null;e=l}if(p!==null){if(a.length>e){var q=a.charAt(e);e++}else{var q=null;f&&m("any character")}if(q!==null)var r=[p,q];else{var r=null;e=k}}else{var r=null;e=k}while(r!==null){j.push(r);var k=e,l=e,n=f;f=!1;if(a.substr(e,2)==="}}"){var o="}}";e+=2}else{var o=null;f&&m('"}}"')}f=n;if(o===null)var p="";else{var p=null;e=l}if(p!==null){if(a.length>e){var q=a.charAt(e);e++}else{var q=null;f&&m("any character")}if(q!==null)var r=[p,q];else{var r=null;e=k}}else{var r=null;e=k}}if(j!==null){if(a.substr(e,2)==="}}"){var s="}}";e+=2}else{var s=null;f&&m('"}}"')}if(s!==null)var t=[h,j,s];else{var t=null;e=g}}else{var t=null;e=g}}else{var t=null;e=g}var u=t!==null?function(a){var b="",c,d=a.length;for(c=0;c<d;c++)b+=a[c][1];return{type:"type_comment",comment:b}}(t[1]):null;if(u!==null)var v=u;else{var v=null;e=d}return i[b]={nextPos:e,result:v},v}function v(){var b="Content@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e,h=e,j=f;f=!1;if(a.substr(e,2)==="{{"){var k="{{";e+=2}else{var k=null;f&&m('"{{"')}f=j;if(k===null)var l="";else{var l=null;e=h}if(l!==null){if(a.length>e){var n=a.charAt(e);e++}else{var n=null;f&&m("any character")}if(n!==null)var o=[l,n];else{var o=null;e=g}}else{var o=null;e=g}if(o!==null){var p=[];while(o!==null){p.push(o);var g=e,h=e,j=f;f=!1;if(a.substr(e,2)==="{{"){var k="{{";e+=2}else{var k=null;f&&m('"{{"')}f=j;if(k===null)var l="";else{var l=null;e=h}if(l!==null){if(a.length>e){var n=a.charAt(e);e++}else{var n=null;f&&m("any character")}if(n!==null)var o=[l,n];else{var o=null;e=g}}else{var o=null;e=g}}}else var p=null;var q=p!==null?function(a){var b="",c,d=a.length;for(c=0;c<d;c++)b+=a[c][1];return{type:"type_content",content:b}}(p):null;if(q!==null)var r=q;else{var r=null;e=d}return i[b]={nextPos:e,result:r},r}function w(){var b="Path@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e,g=e,h=x();if(h!==null){var j=[],k=e;if(a.substr(e,1)==="."){var l=".";e+=1}else{var l=null;f&&m('"."')}if(l!==null){var n=x();if(n!==null)var o=[l,n];else{var o=null;e=k}}else{var o=null;e=k}while(o!==null){j.push(o);var k=e;if(a.substr(e,1)==="."){var l=".";e+=1}else{var l=null;f&&m('"."')}if(l!==null){var n=x();if(n!==null)var o=[l,n];else{var o=null;e=k}}else{var o=null;e=k}}if(j!==null)var p=[h,j];else{var p=null;e=g}}else{var p=null;e=g}var q=p!==null?function(a,b){var c=[a],d,e=b.length;for(d=0;d<e;d++)c.push(b[d][1]);return{type:"type_name",path:c.join("."),segments:c}}(p[0],p[1]):null;if(q!==null)var r=q;else{var r=null;e=d}return i[b]={nextPos:e,result:r},r}function x(){var b="Id@"+e,c=i[b];if(c)return e=c.nextPos,c.result;var d=e;if(a.substr(e).match(/^[a-zA-Z0-9_$-%@!]/)!==null){var g=a.charAt(e);e++}else{var g=null;f&&m("[a-zA-Z0-9_$-%@!]")}if(g!==null){var h=[];while(g!==null){h.push(g);if(a.substr(e).match(/^[a-zA-Z0-9_$-%@!]/)!==null){var g=a.charAt(e);e++}else{var g=null;f&&m("[a-zA-Z0-9_$-%@!]")}}}else var h=null;var j=h!==null?function(a){return a.join("")}(h):null;if(j!==null)var k=j;else{var k=null;e=d}return i[b]={nextPos:e,result:k},k}function y(){var a="_@"+e,b=i[a];if(b)return e=b.nextPos,b.result;var c=[],d=z();while(d!==null){c.push(d);var d=z()}return i[a]={nextPos:e,result:c},c}function z(){var b="Whitespace@"+e,c=i[b];if(c)return e=c.nextPos,c.result;if(a.substr(e).match(/^[ 	\n\r]/)!==null){var d=a.charAt(e);e++}else{var d=null;f&&m("[ \t\\n\\r]")}return i[b]={nextPos:e,result:d},d}function A(){function b(a){a.sort();var b=null,c=[];for(var d=0;d<a.length;d++)a[d]!==b&&(c.push(a[d]),b=a[d]);switch(c.length){case 0:return"end of input";case 1:return c[0];default:return c.slice(0,c.length-1).join(", ")+" or "+c[c.length-1]}}var c=b(h),d=Math.max(e,g),f=d<a.length?l(a.charAt(d)):"end of input";return"Expected "+c+" but "+f+" found."}function B(){var b=1,c=1,d=!1;for(var e=0;e<g;e++){var f=a.charAt(e);f==="\n"?(d||b++,c=1,d=!1):f==="\r"|f==="\u2028"||f==="\u2029"?(b++,c=1,d=!0):(c++,d=!1)}return{line:b,column:c}}function C(a,c){if(a.path!==c.path){var d=B();throw new b.SyntaxError(a.path+" doesn't match "+c.path,d.line,d.column)}}var d={Block:p,Comment:u,Content:v,Id:x,Inverse:q,Mustache:s,Partial:r,Path:w,Pipeline:t,Program:n,Statement:o,Whitespace:z,_:y};if(c!==undefined){if(d[c]===undefined)throw new Error("Invalid rule name: "+l(c)+".")}else c="Program";var e=0,f=!0,g=0,h=[],i={},D=d[c]();if(D===null||e!==a.length){var E=B();throw new this.SyntaxError(A(),E.line,E.column)}return D},toSource:function(){return this._source}};return a.SyntaxError=function(a,b,c){this.name="SyntaxError",this.message=a,this.line=b,this.column=c},a.SyntaxError.prototype=Error.prototype,a}(),c={toString:Object.prototype.toString,isObject:function(a){return a===Object(a)},isArray:function(){return Array.isArray?Array.isArray:function(a){return c.toString.call(a)==="[object Array]"}}(),extend:function(a){var b=arguments.length,c,d,e;if(a==null)return a;for(c=1;c<b;c++){d=arguments[c];if(d!=null)for(e in d)a[e]===void 0&&(a[e]=d[e])}return a}},d=function(){var a,c;a=function(a){this.opcodes=[],this.context=a||{allEnvironments:[]},this.index=this.context.allEnvironments.length,this.name="program"+this.index,this.context.allEnvironments.push(this)},a.OPCODE_PARAM_LENGTH_MAP={op_append:0,op_appendContent:1,op_applyProcessor:2,op_applyPrePipeline:1,op_applyPostPipeline:1,op_escape:0,op_escapeAndAppendContent:1,op_evaluateValue:1,op_lookupFromContext:1,op_lookupFromTmp:1,op_invokePartial:1,op_invokeProgram:1,op_invokeProgramInverse:1},a.prototype={compile:function(a){var b=a.statements,c,d,e=b.length,f;for(d=0;d<e;d++)c=b[d],f=this[c.type](c,b[d+1]),f&&d++;return this},compileProgram:function(b){var c=new a(this.context);return c.compile(b)},pushOpcode:function(a,b,c){this.opcodes.push(a),b!==void 0&&this.opcodes.push(b),c!==void 0&&this.opcodes.push(c)},type_block:function(a){var b=this.compileProgram(a.program),c=a.name;this.type_name(c),this.pushOpcode("op_evaluateValue",c.path),this.pushOpcode("op_invokeProgram",b.name),this.pushOpcode("op_append")},type_inverse:function(a){var b=this.compileProgram(a.program),c=a.name;this.type_name(c),this.pushOpcode("op_evaluateValue",c.path),this.pushOpcode("op_invokeProgramInverse",b.name),this.pushOpcode("op_append")},type_partial:function(a){var b=a.name,c=a.context;c?this.type_name(c):this.type_name(b),this.pushOpcode("op_invokePartial",b.path),this.pushOpcode("op_append")},type_mustache:function(a,b){var c=a.processors,d,e=c.length,f=a.name,g=f.path;this.type_name(f),this.pushOpcode("op_evaluateValue",g),this.pushOpcode("op_applyPrePipeline",g);for(d=0;d<e;d++)this.pushOpcode("op_applyProcessor",c[d],g);this.pushOpcode("op_applyPostPipeline",g);if(a.escape){if(b&&b.type==="type_content")return this.pushOpcode("op_escapeAndAppendContent",b.content),!0;this.pushOpcode("op_escape")}return this.pushOpcode("op_append"),!1},type_content:function(a){this.pushOpcode("op_appendContent",a.content)},type_comment:function(){},type_name:function(a){var b=a.segments,c,d=b.length;this.pushOpcode("op_lookupFromContext",b[0]);for(c=1;c<d;c++)this.pushOpcode("op_lookupFromTmp",b[c])}},c=function(a){this.environment=a,this.name=a.name,this.allEnvironments=a.context.allEnvironments,this.source=[""],this.tmpVarSlot=0,this.tmpVars=[]},c.ROOT_CONTEXT="$root",c.PARENT_CONTEXT="$parent",c.THIS_CONTEXT="$this",c.INDEX="$index",c.HAS_NEXT="$hasNext",c.prototype={lookup:function(a,b){return a+'["'+b+'"]'},appendToBuffer:function(a){this.source.push("buffer += "+a+";")},quoteString:function(){var a={"\\":"\\\\",'"':'\\"',"\n":"\\n","\r":"\\r"};return function(b){return'"'+b.replace(/[\\"\n\r]/g,function(b){return a[b]})+'"'}}(),compileDescendants:function(){var a=[],b=this.allEnvironments,d,e=b.length,f,g,h;for(d=1;d<e;d++)f=b[d],g=new c(f),h=g.compileSubProgram(),a.push(h);return a},execOpcodes:function(){var b=this.environment.opcodes,c,d=b.length,e,f,g,h;for(c=0;c<d;){e=b[c],h=[],g=a.OPCODE_PARAM_LENGTH_MAP[e];for(c++,f=0;c<d&&f<g;c++,f++)h.push(b[c]);this[e].apply(this,h)}},generate:function(a,b){var c;return this.source[0]=this.source[0]+'var tmp, buffer = "", templateContext = this, '+"escape = this.escape, handleBlock = this.handleBlock, handleInverse = this.handleInverse, "+"handlePartial = this.handlePartial, noSuchValue = this.noSuchValue, "+"noSuchPartial = this.noSuchPartial, noSuchProcessor = this.noSuchProcessor, "+"prePipeline = this.prePipeline, postPipeline = this.postPipeline, processors = this.processors, processor, partials = this.partials, partial;"+"\n\n"+a.join("\n\n")+"\n",this.source.push("return buffer;"),c="  "+this.source.join("\n  "),b?new Function("context, contextStack, index, hasNext",c):"function (context, contextStack, index, hasNext) {\n"+c+"\n"+"}"},compile:function(a){var b=this.compileDescendants();return this.execOpcodes(),this.generate(b,a)},generateSubProgram:function(){var a,b="  ";return this.source[0]=this.source[0]+'var tmp, buffer = "";',this.source.push("return buffer;"),a="  "+b+this.source.join("\n  "+b),b+"function "+this.name+" (context, contextStack, index, hasNext) {\n"+a+"\n"+b+"}"},compileSubProgram:function(){return this.execOpcodes(),this.generateSubProgram()},op_invokeProgram:function(a){this.source.push("tmp = handleBlock(context, contextStack, tmp, "+a+");")},op_invokeProgramInverse:function(a){this.source.push("tmp = handleInverse(context, contextStack, tmp, "+a+");")},op_invokePartial:function(a,b){this.source.push("partial = "+this.lookup("partials",a)+";"),this.source.push('if (typeof partial == null) { tmp = noSuchPartial.call("'+a+'"); }'),this.source.push("else { tmp = handlePartial(context, contextStack, tmp, partial, templateContext); }")},op_applyProcessor:function(a,b){this.source.push("processor = "+this.lookup("context",a)+";"),this.source.push('if (typeof processor === "function") { tmp = processor.call(context, tmp, "'+b+'", index, hasNext); }'),this.source.push("else { processor = "+this.lookup("processors",a)+";"),this.source.push('  if (typeof processor === "function") { tmp = processor.call(context, tmp, "'+b+'", index, hasNext); }'),this.source.push('  else { tmp = noSuchProcessor.call(context, "'+a+'", tmp, "'+b+'"); }}')},op_applyPrePipeline:function(a){this.source.push('tmp = prePipeline.call(context, tmp, "'+a+'", index, hasNext);')},op_applyPostPipeline:function(a){this.source.push('tmp = postPipeline.call(context, tmp, "'+a+'", index, hasNext);')},op_escape:function(){this.source.push("tmp = escape(tmp);")},op_escapeAndAppendContent:function(a){a=this.quoteString(a),this.appendToBuffer("escape(tmp) + "+a)},op_append:function(){this.appendToBuffer("tmp")},op_appendContent:function(a){a=this.quoteString(a),this.appendToBuffer(a)},op_evaluateValue:function(a){this.source.push('if (typeof tmp === "function") { tmp = tmp.call(context); }'),this.source.push('else if (tmp === void 0) { tmp = noSuchValue.call(context, "'+a+'"); }')},op_lookupFromContext:function(a){switch(a){case c.ROOT_CONTEXT:this.source.push("tmp = contextStack[0];");break;case c.PARENT_CONTEXT:this.source.push("tmp = contextStack[contextStack.length - 2];");break;case c.THIS_CONTEXT:this.source.push("tmp = context;");break;case c.INDEX:this.source.push("tmp = index;");break;case c.HAS_NEXT:this.source.push("tmp = hasNext;");break;default:this.source.push("tmp = "+this.lookup("context",a)+";")}},op_lookupFromTmp:function(a){this.source.push("tmp = (tmp == null) ? tmp : "+this.lookup("tmp",a)+";")}};var d=function(a){try{return b.parse(a)}catch(c){throw c.name==="SyntaxError"?new Error(c.message+" line="+c.line+". column="+c.column+".\n"+a):c}},e=function(b){var e=d(b),f=new a,g=f.compile(e),h=new c(g);return h.compile(!0)};return{Compiler:a,JsCompiler:c,parse:d,compile:e}}(),e={escape:function(){var a={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"};return function(b){return b==null?"":(b=String(b),b.replace(/[&"'<>]/g,function(b){return a[b]}))}}(),handleBlock:function(a,b,d,e){var f="",g,h,i;if(c.isArray(d)){h=d.length;for(g=0;g<h;g++)i=d[g],b.push(i),f+=e(i,b,g,g+1<h),b.pop()}else c.isObject(d)?(b.push(d),f=e(d,b),b.pop()):d&&(f=e(a,b));return f},handleInverse:function(a,b,d,e){var f="";return d?c.isArray(d)&&d.length===0&&(f=e(a,b)):f=e(a,b),f},handlePartial:function(a,b,c,e,f){var g=d.compile(e);return f.handleBlock(a,b,c,function(a,b,c,d){return g.call(f,a,b,c,d)})},prepare:function(a,b){var c=d.compile(a),f={escape:e.escape,handleBlock:e.handleBlock,handleInverse:e.handleInverse,handlePartial:e.handlePartial,noSuchValue:b.noSuchValue,noSuchPartial:b.noSuchPartial,noSuchProcessor:b.noSuchProcessor,prePipeline:b.prePipeline,postPipeline:b.postPipeline,partials:b.partials,processors:b.processors},g=function(a,b,d,e){return c.call(f,a,b,d,e)};return{render:function(a){return f.handleBlock(a,[a],a,g)}}}},f={name:"tempura",version:"0.0.4-dev12",settings:{partials:{},processors:{},prePipeline:function(a,b,c,d){return a},postPipeline:function(a,b,c,d){return a==null?"":a},noSuchValue:function(a){return},noSuchPartial:function(a){return},noSuchProcessor:function(a,b,c){return b}},prepare:function(a,b){var d={};if(a==null)throw new Error('the "source" must be string.');b=b||{},d.noSuchValue=b.noSuchValue||this.settings.noSuchValue,d.noSuchPartial=b.noSuchPartial||this.settings.noSuchPartial,d.noSuchProcessor=b.noSuchProcessor||this.settings.noSuchProcessor,d.prePipeline=b.prePipeline||this.settings.prePipeline,d.postPipeline=b.postPipeline||this.settings.postPipeline,d.partials=c.extend({},b.partials,this.settings.partials),d.processors=c.extend({},b.processors,this.settings.processors);if(typeof d.noSuchValue!="function")throw new Error('the "noSuchValue" option or setting must be function.');if(typeof d.noSuchProcessor!="function")throw new Error('the "noSuchProcessor" option or setting must be function.');if(typeof d.prePipeline!="function")throw new Error('the "prePipeline" option or setting must be function.');if(typeof d.postPipeline!="function")throw new Error('the "postPipeline" option or setting must be function.');return e.prepare(a,d)},internal:{parser:b,util:c,compiler:d,core:e}};typeof module!="undefined"?module.exports=f:typeof define=="function"&&define.amd?define("tempura",function(){return f}):a.tempura=f})(this);