/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/media_library/js/media_library.click_to_select.js. */
(function($,Drupal){Drupal.behaviors.ClickToSelect={attach:function attach(context){$('.js-click-to-select-trigger',context).once('media-library-click-to-select').on('click',function(event){event.preventDefault();var $input=$(event.currentTarget).closest('.js-click-to-select').find('.js-click-to-select-checkbox input');$input.prop('checked',!$input.prop('checked')).trigger('change')});$('.js-click-to-select-checkbox input',context).once('media-library-click-to-select').on('change',function(_ref){var currentTarget=_ref.currentTarget;$(currentTarget).closest('.js-click-to-select').toggleClass('checked',$(currentTarget).prop('checked'))}).on('focus blur',function(_ref2){var currentTarget=_ref2.currentTarget,type=_ref2.type;$(currentTarget).closest('.js-click-to-select').toggleClass('is-focus',type==='focus')});$('.js-click-to-select-trigger, .js-click-to-select-checkbox',context).once('media-library-click-to-select-hover').on('mouseover mouseout',function(_ref3){var currentTarget=_ref3.currentTarget,type=_ref3.type;$(currentTarget).closest('.js-click-to-select').toggleClass('is-hover',type==='mouseover')})}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/media_library/js/media_library.click_to_select.js. */