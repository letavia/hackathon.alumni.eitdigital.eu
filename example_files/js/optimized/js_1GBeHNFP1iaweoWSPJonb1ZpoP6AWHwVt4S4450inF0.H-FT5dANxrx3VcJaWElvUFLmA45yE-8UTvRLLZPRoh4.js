/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/tabledrag.js. */
(function($){var prototype=Drupal.tableDrag.prototype;Drupal.tableDrag=function(table,tableSettings){var self=this,$table=$(table);this.$table=$(table);this.table=table;this.tableSettings=tableSettings;this.dragObject=null;this.rowObject=null;this.oldRowElement=null;this.oldY=0;this.changed=false;this.maxDepth=0;this.rtl=$(this.table).css('direction')==='rtl'?-1:1;this.striping=$(this.table).data('striping')===1;this.scrollSettings={amount:4,interval:50,trigger:70};this.scrollInterval=null;this.scrollY=0;this.windowHeight=0;this.indentEnabled=false;for(var group in tableSettings)if(tableSettings.hasOwnProperty(group))for(var n in tableSettings[group])if(tableSettings[group].hasOwnProperty(n)){if(tableSettings[group][n].relationship==='parent')this.indentEnabled=true;if(tableSettings[group][n].limit>0)this.maxDepth=tableSettings[group][n].limit};if(this.indentEnabled){this.indentCount=1;var indent=Drupal.theme('tableDragIndentation'),testRow=$('<tr/>').addClass('draggable').appendTo(table),testCell=$('<td/>').appendTo(testRow).prepend(indent).prepend(indent),$indentation=testCell.find('.js-indentation');this.indentAmount=$indentation.get(1).offsetLeft-$indentation.get(0).offsetLeft;testRow.remove()};$table.find('> tr.draggable, > tbody > tr.draggable').each(function(){self.makeDraggable(this)});var $button=$(Drupal.theme('btn-sm',{'class':['tabledrag-toggle-weight'],title:Drupal.t('Re-order rows by numerical weight instead of dragging.'),'data-toggle':'tooltip'}));$button.on('click',$.proxy(function(e){e.preventDefault();this.toggleColumns()},this)).wrap('<div class="tabledrag-toggle-weight-wrapper"></div>').parent();$table.before($button);self.initColumns();$(document).on('touchmove',function(event){return self.dragRow(event.originalEvent.touches[0],self)});$(document).on('touchend',function(event){return self.dropRow(event.originalEvent.touches[0],self)});$(document).on('mousemove pointermove',function(event){return self.dragRow(event,self)});$(document).on('mouseup pointerup',function(event){return self.dropRow(event,self)});$(window).on('storage',$.proxy(function(e){if(e.originalEvent.key==='Drupal.tableDrag.showWeight'){showWeight=JSON.parse(e.originalEvent.newValue);this.displayColumns(showWeight)}},this))};Drupal.tableDrag.prototype=prototype;Drupal.tableDrag.prototype.makeDraggable=function(item){var self=this,$item=$(item);$item.find('td:first-of-type').find('a').addClass('menu-item__link');var handle=$('<a href="#" class="tabledrag-handle"/>'),$indentationLast=$item.find('td:first-of-type').find('.js-indentation').eq(-1);if($indentationLast.length){$indentationLast.after(handle);self.indentCount=Math.max($item.find('.js-indentation').length,self.indentCount)}else $item.find('td').eq(0).prepend(handle);handle.attr('title',Drupal.t('Drag to re-order')).attr('data-toggle','tooltip').append(Drupal.theme('bootstrapIcon','move'));handle.on('mousedown touchstart pointerdown',function(event){event.preventDefault();if(event.originalEvent.type==='touchstart')event=event.originalEvent.touches[0];self.dragStart(event,self,item)});handle.on('click',function(e){e.preventDefault()});handle.on('focus',function(){self.safeBlur=true});handle.on('blur',function(event){if(self.rowObject&&self.safeBlur)self.dropRow(event,self)});handle.on('keydown',function(event){if(event.keyCode!==9&&!self.rowObject)self.rowObject=new self.row(item,'keyboard',self.indentEnabled,self.maxDepth,true);var keyChange=false,groupHeight;switch(event.keyCode){case 37:case 63234:keyChange=true;self.rowObject.indent(-1*self.rtl);break;case 38:case 63232:var $previousRow=$(self.rowObject.element).prev('tr:first-of-type'),previousRow=$previousRow.get(0);while(previousRow&&$previousRow.is(':hidden')){$previousRow=$(previousRow).prev('tr:first-of-type');previousRow=$previousRow.get(0)};if(previousRow){self.safeBlur=false;self.rowObject.direction='up';keyChange=true;if($(item).is('.tabledrag-root')){groupHeight=0;while(previousRow&&$previousRow.find('.js-indentation').length){$previousRow=$(previousRow).prev('tr:first-of-type');previousRow=$previousRow.get(0);groupHeight+=$previousRow.is(':hidden')?0:previousRow.offsetHeight};if(previousRow){self.rowObject.swap('before',previousRow);window.scrollBy(0,-groupHeight)}}else if(self.table.tBodies[0].rows[0]!==previousRow||$previousRow.is('.draggable')){self.rowObject.swap('before',previousRow);self.rowObject.interval=null;self.rowObject.indent(0);window.scrollBy(0,-parseInt(item.offsetHeight,10))};handle.trigger('focus')};break;case 39:case 63235:keyChange=true;self.rowObject.indent(self.rtl);break;case 40:case 63233:var $nextRow=$(self.rowObject.group).eq(-1).next('tr:first-of-type'),nextRow=$nextRow.get(0);while(nextRow&&$nextRow.is(':hidden')){$nextRow=$(nextRow).next('tr:first-of-type');nextRow=$nextRow.get(0)};if(nextRow){self.safeBlur=false;self.rowObject.direction='down';keyChange=true;if($(item).is('.tabledrag-root')){groupHeight=0;var nextGroup=new self.row(nextRow,'keyboard',self.indentEnabled,self.maxDepth,false);if(nextGroup){$(nextGroup.group).each(function(){groupHeight+=$(this).is(':hidden')?0:this.offsetHeight});var nextGroupRow=$(nextGroup.group).eq(-1).get(0);self.rowObject.swap('after',nextGroupRow);window.scrollBy(0,parseInt(groupHeight,10))}}else{self.rowObject.swap('after',nextRow);self.rowObject.interval=null;self.rowObject.indent(0);window.scrollBy(0,parseInt(item.offsetHeight,10))};handle.trigger('focus')};break};if(self.rowObject&&self.rowObject.changed===true){$(item).addClass('drag');if(self.oldRowElement)$(self.oldRowElement).removeClass('drag-previous');self.oldRowElement=item;if(self.striping===true)self.restripeTable();self.onDrag()};if(keyChange)return false});handle.on('keypress',function(event){switch(event.keyCode){case 37:case 38:case 39:case 40:return false}})};Drupal.tableDrag.prototype.row.prototype.markChanged=function(){var $cell=$('td:first',this.element),$target=$($cell.find('.file-size').get(0)||$cell.find('.file').get(0)||$cell.find('.tabledrag-handle').get(0));if(!$cell.find('.tabledrag-changed').length)$target.after(' '+Drupal.theme('tableDragChangedMarker')+' ')};$.extend(Drupal.theme,{tableDragChangedMarker:function(){return Drupal.theme('bootstrapIcon','warning-sign',{'class':['tabledrag-changed','text-warning']})},tableDragChangedWarning:function(){return'<div class="tabledrag-changed-warning alert alert-sm alert-warning messages warning">'+Drupal.theme('tableDragChangedMarker')+' '+Drupal.t('You have unsaved changes.')+'</div>'}})})(jQuery)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/themes/contrib/bootstrap/js/misc/tabledrag.js. */