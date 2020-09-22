/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/contextual/js/views/AuralView.js. */
(function(Drupal,Backbone){Drupal.contextual.AuralView=Backbone.View.extend({initialize:function initialize(options){this.options=options;this.listenTo(this.model,'change',this.render);this.render()},render:function render(){var isOpen=this.model.get('isOpen');this.$el.find('.contextual-links').prop('hidden',!isOpen);this.$el.find('.trigger').text(Drupal.t('@action @title configuration options',{'@action':!isOpen?this.options.strings.open:this.options.strings.close,'@title':this.model.get('title')})).attr('aria-pressed',isOpen)}})})(Drupal,Backbone)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/contextual/js/views/AuralView.js. */