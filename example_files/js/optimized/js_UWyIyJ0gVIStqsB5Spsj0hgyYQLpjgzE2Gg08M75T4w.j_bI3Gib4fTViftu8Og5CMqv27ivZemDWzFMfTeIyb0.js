/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/quickedit/js/models/BaseModel.js. */
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};(function(Drupal,Backbone){Drupal.quickedit.BaseModel=Backbone.Model.extend({initialize:function initialize(options){this.__initialized=true;return Backbone.Model.prototype.initialize.call(this,options)},set:function set(key,val,options){if(this.__initialized)if((typeof key==='undefined'?'undefined':_typeof(key))==='object'){key.validate=true}else{if(!options)options={};options.validate=true};return Backbone.Model.prototype.set.call(this,key,val,options)}})})(Drupal,Backbone)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/quickedit/js/models/BaseModel.js. */