/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/tour/js/tour.js. */
(function($,Backbone,Drupal,document){var queryString=decodeURI(window.location.search);Drupal.behaviors.tour={attach:function attach(context){$('body').once('tour').each(function(){var model=new Drupal.tour.models.StateModel();new Drupal.tour.views.ToggleTourView({el:$(context).find('#toolbar-tab-tour'),model:model});model.on('change:isActive',function(model,isActive){$(document).trigger(isActive?'drupalTourStarted':'drupalTourStopped')}).set('tour',$(context).find('ol#tour'));if(/tour=?/i.test(queryString))model.set('isActive',true)})}};Drupal.tour=Drupal.tour||{models:{},views:{}};Drupal.tour.models.StateModel=Backbone.Model.extend({defaults:{tour:[],isActive:false,activeTour:[]}});Drupal.tour.views.ToggleTourView=Backbone.View.extend({events:{click:'onClick'},initialize:function initialize(){this.listenTo(this.model,'change:tour change:isActive',this.render);this.listenTo(this.model,'change:isActive',this.toggleTour)},render:function render(){this.$el.toggleClass('hidden',this._getTour().length===0);var isActive=this.model.get('isActive');this.$el.find('button').toggleClass('is-active',isActive).prop('aria-pressed',isActive);return this},toggleTour:function toggleTour(){if(this.model.get('isActive')){var $tour=this._getTour();this._removeIrrelevantTourItems($tour,this._getDocument());var that=this,close=Drupal.t('Close');if($tour.find('li').length){$tour.joyride({autoStart:true,postRideCallback:function postRideCallback(){that.model.set('isActive',false)},template:{link:'<a href="#close" class="joyride-close-tip" aria-label="'+close+'">&times;</a>',button:'<a href="#" class="button button--primary joyride-next-tip"></a>'}});this.model.set({isActive:true,activeTour:$tour})}}else{this.model.get('activeTour').joyride('destroy');this.model.set({isActive:false,activeTour:[]})}},onClick:function onClick(event){this.model.set('isActive',!this.model.get('isActive'));event.preventDefault();event.stopPropagation()},_getTour:function _getTour(){return this.model.get('tour')},_getDocument:function _getDocument(){return $(document)},_removeIrrelevantTourItems:function _removeIrrelevantTourItems($tour,$document){var removals=false,tips=/tips=([^&]+)/.exec(queryString);$tour.find('li').each(function(){var $this=$(this),itemId=$this.attr('data-id'),itemClass=$this.attr('data-class');if(tips&&!$(this).hasClass(tips[1])){removals=true;$this.remove();return};if(!itemId&&!itemClass||itemId&&$document.find('#'+itemId).length||itemClass&&$document.find('.'+itemClass).length)return;removals=true;$this.remove()});if(removals){var total=$tour.find('li').length;if(!total)this.model.set({tour:[]});$tour.find('li').each(function(index){var progress=Drupal.t('!tour_item of !total',{'!tour_item':index+1,'!total':total});$(this).find('.tour-progress').text(progress)}).eq(-1).attr('data-text',Drupal.t('End tour'))}}})})(jQuery,Backbone,Drupal,document)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/tour/js/tour.js. */