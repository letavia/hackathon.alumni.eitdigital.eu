/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/media_library/js/media_library.view.js. */
(function($,Drupal){Drupal.behaviors.MediaLibrarySelectAll={attach:function attach(context){var $view=$('.js-media-library-view[data-view-display-id="page"]',context).once('media-library-select-all');if($view.length&&$view.find('.js-media-library-item').length){var $checkbox=$(Drupal.theme('checkbox')).on('click',function(_ref){var currentTarget=_ref.currentTarget,$checkboxes=$(currentTarget).closest('.js-media-library-view').find('.js-media-library-item input[type="checkbox"]');$checkboxes.prop('checked',$(currentTarget).prop('checked')).trigger('change');var announcement=$(currentTarget).prop('checked')?Drupal.t('All @count items selected',{'@count':$checkboxes.length}):Drupal.t('Zero items selected');Drupal.announce(announcement)}),$label=$('<label class="media-library-select-all"></label>').text(Drupal.t('Select all media'));$label.prepend($checkbox);$view.find('.js-media-library-item').first().before($label)}}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/modules/media_library/js/media_library.view.js. */