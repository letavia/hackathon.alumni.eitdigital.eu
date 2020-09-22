/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/themes/contrib/bootstrap/js/drupal.bootstrap.js. */
(function(_,$,Drupal,drupalSettings){'use strict';var Bootstrap={processedOnce:{},settings:drupalSettings.bootstrap||{}};Bootstrap.checkPlain=function(str){return str&&Drupal.checkPlain(str)||''};Bootstrap.createPlugin=function(id,plugin,noConflict){if($.fn[id]!==void(0))return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.',{'@id':id});if(typeof plugin!=='function')return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin',{'@id':id,'@plugin':plugin});this.pluginNoConflict(id,plugin,noConflict);$.fn[id]=plugin};Bootstrap.diffObjects=function(objects){var args=Array.prototype.slice.call(arguments);return _.pick(args[0],_.difference.apply(_,_.map(args,function(obj){return Object.keys(obj)})))};Bootstrap.eventMap={Event:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvent:/^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,KeyboardEvent:/^(?:key(?:down|press|up))$/,TouchEvent:/^(?:touch(?:start|end|move|cancel))$/};Bootstrap.extendPlugin=function(id,callback){if(typeof $.fn[id]!=='function')return this.fatal('Specified jQuery plugin identifier does not exist: @id',{'@id':id});if(typeof callback!=='function')return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback',{'@id':id,'@callback':callback});var constructor=$.fn[id]&&$.fn[id].Constructor||$.fn[id],plugin=callback.apply(constructor,[this.settings]);if(!$.isPlainObject(plugin))return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj',{'@obj':plugin});this.wrapPluginConstructor(constructor,plugin,true);return $.fn[id]};Bootstrap.superWrapper=function(parent,fn){return function(){var previousSuper=this.super;this.super=parent;var ret=fn.apply(this,arguments);if(previousSuper){this.super=previousSuper}else delete this.super;return ret}};Bootstrap.fatal=function(message,args){if(this.settings.dev&&console.warn){for(var name in args)if(args.hasOwnProperty(name)&&typeof args[name]==='object')args[name]=JSON.stringify(args[name]);Drupal.throwError(new Error(Drupal.formatString(message,args)))};return false};Bootstrap.intersectObjects=function(objects){var args=Array.prototype.slice.call(arguments);return _.pick(args[0],_.intersection.apply(_,_.map(args,function(obj){return Object.keys(obj)})))};Bootstrap.normalizeObject=function(obj){if(!$.isPlainObject(obj))return obj;for(var k in obj)if(typeof obj[k]==='string'){if(obj[k]==='true'){obj[k]=true}else if(obj[k]==='false'){obj[k]=false}else if(obj[k].match(/^[\d-.]$/))obj[k]=parseFloat(obj[k])}else if($.isPlainObject(obj[k]))obj[k]=Bootstrap.normalizeObject(obj[k]);return obj};Bootstrap.once=function(id,callback){if(this.processedOnce[id])return this;callback.call(this,this.settings);this.processedOnce[id]=true;return this};Bootstrap.option=function(key,value){var options=$.isPlainObject(key)?$.extend({},key):{};if(arguments.length===0)return $.extend({},this.options);if(typeof key==="string"){var parts=key.split('.');key=parts.shift();var obj=options;if(parts.length){for(var i=0;i<parts.length-1;i++){obj[parts[i]]=obj[parts[i]]||{};obj=obj[parts[i]]};key=parts.pop()};if(arguments.length===1)return obj[key]===void(0)?null:obj[key];obj[key]=value};$.extend(true,this.options,options)};Bootstrap.pluginNoConflict=function(id,plugin,noConflict){if(plugin.noConflict===void(0)&&(noConflict===void(0)||noConflict)){var old=$.fn[id];plugin.noConflict=function(){$.fn[id]=old;return this}}};Bootstrap.relayEvent=function(target,name,stopPropagation){return function(e){if(stopPropagation===void(0)||stopPropagation)e.stopPropagation();var $target=$(target),parts=name.split('.').filter(Boolean),type=parts.shift();e.target=$target[0];e.currentTarget=$target[0];e.namespace=parts.join('.');e.type=type;$target.trigger(e)}};Bootstrap.replacePlugin=function(id,callback,noConflict){if(typeof $.fn[id]!=='function')return this.fatal('Specified jQuery plugin identifier does not exist: @id',{'@id':id});if(typeof callback!=='function')return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback',{'@callback':callback});var constructor=$.fn[id]&&$.fn[id].Constructor||$.fn[id],plugin=callback.apply(constructor,[this.settings]);if(typeof plugin!=='function')return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin',{'@id':id,'@plugin':plugin});this.wrapPluginConstructor(constructor,plugin);this.pluginNoConflict(id,plugin,noConflict);$.fn[id]=plugin};Bootstrap.simulate=function(element,type,options){var ret=true;if(element instanceof $){element.each(function(){if(!Bootstrap.simulate(this,type,options))ret=false});return ret};if(!(element instanceof HTMLElement))this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.',{'@type':typeof element});if(typeof $.simulate==='function'){new $.simulate(element,type,options);return true};var event,ctor,types=[].concat(type);for(var i=0,l=types.length;i<l;i++){type=types[i];for(var name in this.eventMap)if(this.eventMap[name].test(type)){ctor=name;break};if(!ctor)throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: '+type);var opts={bubbles:true,cancelable:true};if(ctor==='KeyboardEvent'||ctor==='MouseEvent')$.extend(opts,{ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1});if(ctor==='MouseEvent')$.extend(opts,{button:0,pointerX:0,pointerY:0,view:window});if(options)$.extend(opts,options);if(typeof window[ctor]==='function'){event=new window[ctor](type,opts);if(!element.dispatchEvent(event))ret=false}else if(document.createEvent){event=document.createEvent(ctor);event.initEvent(type,opts.bubbles,opts.cancelable);if(!element.dispatchEvent(event))ret=false}else if(typeof element.fireEvent==='function'){event=$.extend(document.createEventObject(),opts);if(!element.fireEvent('on'+type,event))ret=false}else if(typeof element[type])element[type]()};return ret};Bootstrap.stripHtml=function(html){if(html instanceof $){html=html.html()}else if(html instanceof Element)html=html.innerHTML;var tmp=document.createElement('DIV');tmp.innerHTML=html;return(tmp.textContent||tmp.innerText||'').replace(/^[\s\n\t]*|[\s\n\t]*$/,'')};Bootstrap.unsupported=function(type,name,value){Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value',{'@type':type,'@name':name,'@value':typeof value==='object'?JSON.stringify(value):value})};Bootstrap.warn=function(message,args){if(this.settings.dev&&console.warn)console.warn(Drupal.formatString(message,args))};Bootstrap.wrapPluginConstructor=function(constructor,plugin,extend){var proto=constructor.prototype,option=this.option;if(proto.option===void(0))proto.option=function(){return option.apply(this,arguments)};if(extend){if(plugin.prototype!==void(0))for(var key in plugin.prototype){if(!plugin.prototype.hasOwnProperty(key))continue;var value=plugin.prototype[key];if(typeof value==='function'){proto[key]=this.superWrapper(proto[key]||function(){},value)}else proto[key]=$.isPlainObject(value)?$.extend(true,{},proto[key],value):value};delete plugin.prototype;for(key in plugin){if(!plugin.hasOwnProperty(key))continue;value=plugin[key];if(typeof value==='function'){constructor[key]=this.superWrapper(constructor[key]||function(){},value)}else constructor[key]=$.isPlainObject(value)?$.extend(true,{},constructor[key],value):value}}};Drupal.bootstrap=Drupal.bootstrap||Bootstrap})(window._,window.jQuery,window.Drupal,window.drupalSettings)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/themes/contrib/bootstrap/js/drupal.bootstrap.js. */