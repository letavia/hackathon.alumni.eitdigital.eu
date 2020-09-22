/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/core/modules/menu_ui/menu_ui.admin.js. */
(function($,Drupal){Drupal.behaviors.menuUiChangeParentItems={attach:function attach(context,settings){var $menu=$('#edit-menu').once('menu-parent');if($menu.length){Drupal.menuUiUpdateParentList();$menu.on('change','input',Drupal.menuUiUpdateParentList)}}};Drupal.menuUiUpdateParentList=function(){var $menu=$('#edit-menu'),values=[];$menu.find('input:checked').each(function(){values.push(Drupal.checkPlain($.trim($(this).val())))});$.ajax({url:window.location.protocol+'//'+window.location.host+Drupal.url('admin/structure/menu/parents'),type:'POST',data:{'menus[]':values},dataType:'json',success:function success(options){var $select=$('#edit-menu-parent'),selected=$select.val();$select.children().remove();var totalOptions=0;Object.keys(options||{}).forEach(function(machineName){$select.append($('<option '+(machineName===selected?' selected="selected"':'')+'></option>').val(machineName).text(options[machineName]));totalOptions++});$select.closest('div').toggle(totalOptions>0).attr('hidden',totalOptions===0)}})}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/core/modules/menu_ui/menu_ui.admin.js. */