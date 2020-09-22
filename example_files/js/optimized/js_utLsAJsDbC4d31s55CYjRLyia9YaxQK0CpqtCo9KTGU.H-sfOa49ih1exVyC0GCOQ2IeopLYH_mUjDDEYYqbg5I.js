/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/progress.js. */
(function($,Drupal){'use strict';Drupal.theme.progressBar=function(id){return'<div class="progress-wrapper" aria-live="polite"><div class="message"></div><div id ="'+id+'" class="progress progress-striped active"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="percentage"></span></div></div><div class="progress-label"></div></div>'};$.extend(Drupal.ProgressBar.prototype,{setProgress:function(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('.progress-bar').css('width',percentage+'%').attr('aria-valuenow',percentage);$(this.element).find('.percentage').html(percentage+'%')};if(message){message=message.replace(/<br\/>&nbsp;|\s*$/,'');$('.message',this.element).html(message)};if(label)$('.progress-label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this)},displayError:function(string){var error=$('<div class="alert alert-block alert-error"><button class="close" data-dismiss="alert">&times;</button><h4>'+Drupal.t('Error message')+'</h4></div>').append(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/progress.js. */