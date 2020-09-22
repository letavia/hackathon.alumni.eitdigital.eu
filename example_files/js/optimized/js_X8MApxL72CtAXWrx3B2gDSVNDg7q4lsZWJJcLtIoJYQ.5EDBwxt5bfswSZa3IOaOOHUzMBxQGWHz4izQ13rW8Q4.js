/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/core/modules/contextual/js/models/StateModel.js. */
(function(Drupal,Backbone){Drupal.contextual.StateModel=Backbone.Model.extend({defaults:{title:'',regionIsHovered:false,hasFocus:false,isOpen:false,isLocked:false},toggleOpen:function toggleOpen(){var newIsOpen=!this.get('isOpen');this.set('isOpen',newIsOpen);if(newIsOpen)this.focus();return this},close:function close(){this.set('isOpen',false);return this},focus:function focus(){this.set('hasFocus',true);var cid=this.cid;this.collection.each(function(model){if(model.cid!==cid)model.close().blur()});return this},blur:function blur(){if(!this.get('isOpen'))this.set('hasFocus',false);return this}})})(Drupal,Backbone)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/core/modules/contextual/js/models/StateModel.js. */