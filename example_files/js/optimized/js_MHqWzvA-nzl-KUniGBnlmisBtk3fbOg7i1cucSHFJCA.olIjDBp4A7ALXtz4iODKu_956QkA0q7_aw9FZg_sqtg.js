/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/autocomplete.js. */
(function($,Drupal){'use strict';$(document).on('autocompleteselect','.form-autocomplete',function(e){$(e.target).trigger('change.formUpdated')});$.widget('ui.autocomplete',$.ui.autocomplete,{_search:function(value){this.pending++;Drupal.Ajax.prototype.glyphiconStart(this.element);this.cancelSearch=false;this.source({term:value},this._response())},_response:function(){var index=++this.requestIndex;return $.proxy(function(content){if(index===this.requestIndex)this.__response(content);this.pending--;if(!this.pending)Drupal.Ajax.prototype.glyphiconStop(this.element)},this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/autocomplete.js. */