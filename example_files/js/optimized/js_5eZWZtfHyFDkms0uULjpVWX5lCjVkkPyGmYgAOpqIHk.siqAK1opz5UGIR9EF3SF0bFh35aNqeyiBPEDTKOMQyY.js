/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/text/text.js. */
(function($){'use strict';Drupal.behaviors.textSummary={attach:function(context,settings){$(context).find('.js-text-summary').once('text-summary').each(function(){var $widget=$(this).closest('.js-text-format-wrapper'),$summary=$widget.find('.js-text-summary-wrapper'),$summaryLabel=$summary.find('label').eq(0),$full=$widget.find('.js-text-full').closest('.js-form-item'),$fullLabel=$full.find('label').eq(0);if($fullLabel.length===0)$fullLabel=$('<label></label>').prependTo($full);var $link=$('<span class="field-edit-link"><button type="button" class="link link-edit-summary btn btn-default btn-xs pull-right" data-toggle="button" aria-pressed="false" autocomplete="off">'+Drupal.t('Hide summary')+'</button></span>'),$button=$link.find('button'),toggleClick=true;$link.on('click',function(e){if(toggleClick){$summary.hide();$button.html(Drupal.t('Edit summary'));$fullLabel.before($link)}else{$summary.show();$button.html(Drupal.t('Hide summary'));$summaryLabel.before($link)};e.preventDefault();toggleClick=!toggleClick});$summaryLabel.before($link);if($widget.find('.js-text-summary').val()===''){$link.trigger('click')}else $link.addClass('active')})}}})(jQuery)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/text/text.js. */