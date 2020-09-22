/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/quickedit/js/views/FieldToolbarView.js. */
(function($,_,Backbone,Drupal){Drupal.quickedit.FieldToolbarView=Backbone.View.extend({$editedElement:null,editorView:null,_id:null,initialize:function initialize(options){this.$editedElement=options.$editedElement;this.editorView=options.editorView;this.$root=this.$el;this._id='quickedit-toolbar-for-'+this.model.id.replace(/[/[\]]/g,'_');this.listenTo(this.model,'change:state',this.stateChange)},render:function render(){this.setElement($(Drupal.theme('quickeditFieldToolbar',{id:this._id})));this.$el.prependTo(this.$root);return this},stateChange:function stateChange(model,state){var from=model.previous('state'),to=state;switch(to){case'inactive':break;case'candidate':if(from!=='inactive'&&from!=='highlighted'){this.$el.remove();this.setElement()};break;case'highlighted':break;case'activating':this.render();if(this.editorView.getQuickEditUISettings().fullWidthToolbar)this.$el.addClass('quickedit-toolbar-fullwidth');if(this.editorView.getQuickEditUISettings().unifiedToolbar)this.insertWYSIWYGToolGroups();break;case'active':break;case'changed':break;case'saving':break;case'saved':break;case'invalid':break}},insertWYSIWYGToolGroups:function insertWYSIWYGToolGroups(){this.$el.append(Drupal.theme('quickeditToolgroup',{id:this.getFloatedWysiwygToolgroupId(),classes:['wysiwyg-floated','quickedit-animate-slow','quickedit-animate-invisible','quickedit-animate-delay-veryfast'],buttons:[]})).append(Drupal.theme('quickeditToolgroup',{id:this.getMainWysiwygToolgroupId(),classes:['wysiwyg-main','quickedit-animate-slow','quickedit-animate-invisible','quickedit-animate-delay-veryfast'],buttons:[]}));this.show('wysiwyg-floated');this.show('wysiwyg-main')},getId:function getId(){return'quickedit-toolbar-for-'+this._id},getFloatedWysiwygToolgroupId:function getFloatedWysiwygToolgroupId(){return'quickedit-wysiwyg-floated-toolgroup-for-'+this._id},getMainWysiwygToolgroupId:function getMainWysiwygToolgroupId(){return'quickedit-wysiwyg-main-toolgroup-for-'+this._id},_find:function _find(toolgroup){return this.$el.find('.quickedit-toolgroup.'+toolgroup)},show:function show(toolgroup){var $group=this._find(toolgroup);$group.on(Drupal.quickedit.util.constants.transitionEnd,function(event){$group.off(Drupal.quickedit.util.constants.transitionEnd)});window.setTimeout(function(){$group.removeClass('quickedit-animate-invisible')},0)}})})(jQuery,_,Backbone,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/quickedit/js/views/FieldToolbarView.js. */