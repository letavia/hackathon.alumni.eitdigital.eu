/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/core/misc/machine-name.js. */
(function($,Drupal,drupalSettings){Drupal.behaviors.machineName={attach:function attach(context,settings){var self=this,$context=$(context),timeout=null,xhr=null
function clickEditHandler(e){var data=e.data;data.$wrapper.removeClass('visually-hidden');data.$target.trigger('focus');data.$suffix.hide();data.$source.off('.machineName')}
function machineNameHandler(e){var data=e.data,options=data.options,baseValue=$(e.target).val(),rx=new RegExp(options.replace_pattern,'g'),expected=baseValue.toLowerCase().replace(rx,options.replace).substr(0,options.maxlength);if(xhr&&xhr.readystate!==4){xhr.abort();xhr=null};if(timeout){clearTimeout(timeout);timeout=null};if(baseValue.toLowerCase()!==expected){timeout=setTimeout(function(){xhr=self.transliterate(baseValue,options).done(function(machine){self.showMachineName(machine.substr(0,options.maxlength),data)})},300)}else self.showMachineName(expected,data)};Object.keys(settings.machineName).forEach(function(sourceId){var options=settings.machineName[sourceId],$source=$context.find(sourceId).addClass('machine-name-source').once('machine-name'),$target=$context.find(options.target).addClass('machine-name-target'),$suffix=$context.find(options.suffix),$wrapper=$target.closest('.js-form-item');if(!$source.length||!$target.length||!$suffix.length||!$wrapper.length)return;if($target.hasClass('error'))return;options.maxlength=$target.attr('maxlength');$wrapper.addClass('visually-hidden');var machine=$target.val(),$preview=$('<span class="machine-name-value">'+options.field_prefix+Drupal.checkPlain(machine)+options.field_suffix+'</span>');$suffix.empty();if(options.label)$suffix.append('<span class="machine-name-label">'+options.label+': </span>');$suffix.append($preview);if($target.is(':disabled'))return;var eventData={$source:$source,$target:$target,$suffix:$suffix,$wrapper:$wrapper,$preview:$preview,options:options};if(machine===''&&$source.val()!=='')self.transliterate($source.val(),options).done(function(machineName){self.showMachineName(machineName.substr(0,options.maxlength),eventData)});var $link=$('<span class="admin-link"><button type="button" class="link">'+Drupal.t('Edit')+'</button></span>').on('click',eventData,clickEditHandler);$suffix.append($link);if($target.val()==='')$source.on('formUpdated.machineName',eventData,machineNameHandler).trigger('formUpdated.machineName');$target.on('invalid',eventData,clickEditHandler)})},showMachineName:function showMachineName(machine,data){var settings=data.options;if(machine!==''){if(machine!==settings.replace){data.$target.val(machine);data.$preview.html(settings.field_prefix+Drupal.checkPlain(machine)+settings.field_suffix)};data.$suffix.show()}else{data.$suffix.hide();data.$target.val(machine);data.$preview.empty()}},transliterate:function transliterate(source,settings){return $.get(Drupal.url('machine_name/transliterate'),{text:source,langcode:drupalSettings.langcode,replace_pattern:settings.replace_pattern,replace_token:settings.replace_token,replace:settings.replace,lowercase:true})}}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/core/misc/machine-name.js. */