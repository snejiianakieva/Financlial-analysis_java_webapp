/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){"use strict";a.jqx.jqxWidget("jqxFormattedInput","",{}),a.extend(a.jqx._jqxFormattedInput.prototype,{defineInstance:function(){var b={width:null,height:null,radix:10,decimalNotation:"default",value:"0",min:"-9223372036854775808",max:"9223372036854775807",upperCase:!1,spinButtons:!0,spinButtonsStep:1,dropDown:!1,dropDownWidth:null,popupZIndex:2e4,placeHolder:"",roundedCorners:!0,disabled:!1,rtl:!1,changeType:null,template:"",_opened:!1,$popup:a("<ul></ul>"),item:'<li><a href="#"></a></li>',events:["open","close","change","radixChange"]};return this===a.jqx._jqxFormattedInput.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(){var a=this;a._Long(),a._regex={2:new RegExp(/([0-1])/),8:new RegExp(/([0-7])/),10:new RegExp(/([0-9\-])/),16:new RegExp(/([0-9]|[a-f])/i)},a.render()},render:function(){var b=this;if(b._radixNumber=b._getRadix(b.radix),""!==b.value&&(b._number=new b.longObj.math.Long.fromString(b.value.toString(),b._radixNumber)),b.baseHost&&(b.host=b.baseHost,b.element=b.host[0]),"div"===this.element.nodeName.toLowerCase()){this.baseHost=this.element;var c=this.host.find("input"),d=!1;if(a.each(c,function(){var b=this.type;if(null===b||"text"===b||"textarea"===b)return c=a(this),d=!0,!1}),!d)throw new Error("jqxFormattedInput: Missing Text Input in the Input Group");if(c.length>0){this.baseHost=a(this.element);var e=this.host.data();this.host=c,this.element=c[0],this.host.data(e),this.baseHost.addClass(this.toThemeProperty("jqx-widget")),this.baseHost.addClass(this.toThemeProperty("jqx-rc-all")),this.baseHost.addClass(this.toThemeProperty("jqx-input-group"));var f=this.baseHost.children();a.each(f,function(c){if(a(this).addClass(b.toThemeProperty("jqx-input-group-addon")),a(this).removeClass(b.toThemeProperty("jqx-rc-all")),0===c&&a(this).addClass(b.toThemeProperty("jqx-rc-l")),c===f.length-1&&a(this).addClass(b.toThemeProperty("jqx-rc-r")),this!==b.element&&a(this).addClass(b.toThemeProperty("jqx-fill-state-normal")),"div"===this.nodeName.toLowerCase()){b.appendSpinButtons=function(c){b._spinButtonsContainer=a(c),b._spinButtonsContainer.addClass(b.toThemeProperty("jqx-formatted-input-spin-buttons-container"));var d='<div class="'+b.toThemeProperty("jqx-fill-state-normal jqx-formatted-input-spin-button")+'"><div class="'+b.toThemeProperty("jqx-input-icon")+'"></div></div>';b._upbutton=a(d),b._spinButtonsContainer.append(b._upbutton),b._downbutton=a(d),b._spinButtonsContainer.append(b._downbutton),b._upArrow=b._upbutton.find("div"),b._upArrow.addClass(b.toThemeProperty("jqx-icon-arrow-up")),b._downArrow=b._downbutton.find("div"),b._downArrow.addClass(b.toThemeProperty("jqx-icon-arrow-down")),b.template&&(b._upbutton.addClass(b.toThemeProperty("jqx-"+b.template)),b._downbutton.addClass(b.toThemeProperty("jqx-"+b.template))),b._spinButtonsStepLong=new b.longObj.math.Long.fromNumber(b.spinButtonsStep)};var d=function(c){b._addon=a(c),b._addon.addClass(b.toThemeProperty("jqx-formatted-input-addon")),b._arrow||(b._arrow=a('<div class="'+b.toThemeProperty("jqx-icon")+" "+b.toThemeProperty("jqx-icon-arrow-down")+'"></div>'),b._arrow.appendTo(b._addon)),b.template&&b._addon.addClass(b.toThemeProperty("jqx-"+b.template))};b.rtl===!1?b._spinButtonsContainer||b.spinButtons!==!0?b._addon||b.dropDown!==!0||2!==c&&(1!==c||b.spinButtons!==!1)||d(this):b.appendSpinButtons(this):b._addon||b.dropDown!==!0?b._spinButtonsContainer||b.spinButtons!==!0||1!==c&&(0!==c||b.dropDown!==!1)||(b.appendSpinButtons(this),b._spinButtonsContainer.addClass(b.toThemeProperty("jqx-formatted-input-spin-buttons-container-rtl")),b.dropDown===!0&&b._addon.addClass(b.toThemeProperty("jqx-formatted-input-addon-rtl"))):(d(this),b.spinButtons===!0&&b._addon.addClass(b.toThemeProperty("jqx-formatted-input-addon-rtl")))}})}}b._inputAndAddon=b.host,b.baseHost&&(b._spinButtonsContainer&&(b._inputAndAddon=b._inputAndAddon.add(b._spinButtonsContainer)),b._addon&&(b._inputAndAddon=b._inputAndAddon.add(b._addon))),b.removeHandlers(),this.addHandlers(),this.rtl&&this.host.addClass(this.toThemeProperty("jqx-rtl")),this.host.attr("role","textbox"),a.jqx.aria(this,"aria-autocomplete","both"),a.jqx.aria(this,"aria-disabled",this.disabled),a.jqx.aria(this,"aria-readonly",!1),a.jqx.aria(this,"aria-multiline",!1),a.jqx.aria(this,"aria-haspopup",!0),""!==b.value&&null!==b.value?(b.upperCase===!0?b.host.addClass(b.toThemeProperty("jqx-formatted-input-upper-case")):b.host.addClass(b.toThemeProperty("jqx-formatted-input-lower-case")),10===b._radixNumber&&"exponential"===b.decimalNotation?b.element.value=b._getDecimalNotation("exponential"):b.element.value=b.value):b._spinButtonsContainer&&b._spinButtonsContainer.addClass(b.toThemeProperty("jqx-fill-state-disabled")),10!==b._radixNumber&&"-9223372036854775808"===b.min.toString()?b._minLong=new b.longObj.math.Long.fromNumber(b.min):b._setMinMax("min"),10!==b._radixNumber&&"9223372036854775807"===b.max.toString()?b._maxLong=new b.longObj.math.Long.fromNumber(b.max):b._setMinMax("max")},_refreshClasses:function(b){var c=b?"addClass":"removeClass";this.host[c](this.toThemeProperty("jqx-widget-content")),this.host[c](this.toThemeProperty("jqx-input")),this.host[c](this.toThemeProperty("jqx-formatted-input")),this.host[c](this.toThemeProperty("jqx-widget")),this.$popup[c](this.toThemeProperty("jqx-popup")),a.jqx.browser.msie&&this.$popup[c](this.toThemeProperty("jqx-noshadow")),this.$popup[c](this.toThemeProperty("jqx-input-popup")),this.$popup[c](this.toThemeProperty("jqx-menu")),this.$popup[c](this.toThemeProperty("jqx-menu-vertical")),this.$popup[c](this.toThemeProperty("jqx-menu-dropdown")),this.$popup[c](this.toThemeProperty("jqx-widget")),this.$popup[c](this.toThemeProperty("jqx-widget-content")),this.roundedCorners?(this.host[c](this.toThemeProperty("jqx-rc-all")),this.$popup[c](this.toThemeProperty("jqx-rc-all")),this.baseHost&&(this.baseHost[c](this.toThemeProperty("jqx-rc-all")),this.rtl===!1?(this.host[c](this.toThemeProperty("jqx-rc-l")),this._addon&&this._addon[c](this.toThemeProperty("jqx-rc-r"))):(this.host[c](this.toThemeProperty("jqx-rc-r")),this._addon&&this._addon[c](this.toThemeProperty("jqx-rc-l"))))):(this.host.removeClass(this.toThemeProperty("jqx-rc-all")),this.$popup.removeClass(this.toThemeProperty("jqx-rc-all")),this.baseHost&&(this.baseHost.removeClass(this.toThemeProperty("jqx-rc-all")),this.rtl===!1?(this.host.removeClass(this.toThemeProperty("jqx-rc-l")),this.dropDown?this._addon.removeClass(this.toThemeProperty("jqx-rc-r")):this.spinButtons&&this._spinButtonsContainer.removeClass(this.toThemeProperty("jqx-rc-r"))):(this.host.removeClass(this.toThemeProperty("jqx-rc-r")),this.dropDown?this._addon.removeClass(this.toThemeProperty("jqx-rc-l")):this.spinButtons&&this._spinButtonsContainer.removeClass(this.toThemeProperty("jqx-rc-l"))))),this.disabled?(this.host[c](this.toThemeProperty("jqx-fill-state-disabled")),this.baseHost&&(this._spinButtonsContainer&&this._spinButtonsContainer[c](this.toThemeProperty("jqx-fill-state-disabled")),this._addon&&this._addon[c](this.toThemeProperty("jqx-fill-state-disabled")))):(this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),this.baseHost&&""!==this.value&&null!==this.value&&(this._spinButtonsContainer&&this._spinButtonsContainer.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),this._addon&&this._addon.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))))},selectAll:function(){var a=this.host;setTimeout(function(){if("selectionStart"in a[0])a[0].focus(),a[0].setSelectionRange(0,a[0].value.length);else{var b=a[0].createTextRange();b.collapse(!0),b.moveEnd("character",a[0].value.length),b.moveStart("character",0),b.select()}},10)},selectLast:function(){var a=this.host;this.selectStart(a[0].value.length)},selectFirst:function(){this.selectStart(0)},selectStart:function(a){var b=this.host;setTimeout(function(){if("selectionStart"in b[0])b[0].focus(),b[0].setSelectionRange(a,a);else{var c=b[0].createTextRange();c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select()}},10)},focus:function(){try{this.host.focus();var a=this;setTimeout(function(){a.host.focus()},25)}catch(a){}},refresh:function(){var b=this;if(this._refreshClasses(!1),this._refreshClasses(!0),this.baseHost){if(this.width&&this.baseHost.width(this.width),this.height){this.baseHost.height(this.height);var c=0,d=this.baseHost.height()-2;a.jqx.browser.msie&&a.jqx.browser.version<8&&this.baseHost.css("display","inline-block"),a.each(this.baseHost.children(),function(){a(this).css("height","100%"),a.jqx.browser.msie&&a.jqx.browser.version<8&&a(this).css("height",d+"px"),this!==b.element&&(c+=a(this).outerWidth())});var e="string"==typeof b.width&&"%"===b.width.charAt(b.width.length-1)?1:0;if(this.host.css("width",this.baseHost.width()-c-e+"px"),a.jqx.browser.msie&&a.jqx.browser.version<9){b._spinButtonsContainer&&(b.rtl===!1||b.rtl===!0&&b._addon)&&b._spinButtonsContainer.css("border-left-width","0"),b._addon&&(b.rtl===!1?b._addon.css("border-left-width","0"):b._spinButtonsContainer||b._addon.css("border-right-width","0"));var f=0;if(a.jqx.browser.version<8){var g=0,h=parseInt(b.host.css("border-left-width"),10)+parseInt(b.host.css("border-right-width"),10),i=parseInt(b.host.css("padding-left"),10)+parseInt(b.host.css("padding-right"),10);b._spinButtonsContainer&&(h+=parseInt(b._spinButtonsContainer.css("border-left-width"),10)+parseInt(b._spinButtonsContainer.css("border-right-width"),10),i+=parseInt(b._spinButtonsContainer.css("padding-left"),10)+parseInt(b._spinButtonsContainer.css("padding-right"),10),b._addon||(g=2)),b._addon&&(h+=parseInt(b._addon.css("border-left-width"),10)+parseInt(b._addon.css("border-right-width"),10),i+=parseInt(b._addon.css("padding-left"),10)+parseInt(b._addon.css("padding-right"),10),b._spinButtonsContainer||(g=2)),b.host.width(b.host.width()-(i+h)-g),f=6}b.host.height(b.baseHost.height()-(parseInt(b.host.css("border-top-width"),10)+parseInt(b.host.css("border-bottom-width"),10)+parseInt(b.host.css("padding-top"),10)+parseInt(b.host.css("padding-bottom"),10)+f));var j=b.host.height()+"px";b.host.css("min-height",j),b.host.css("line-height",j)}}}else this.width&&this.host.width(this.width),this.height&&this.host.height(this.height);this.host.attr("disabled",this.disabled),this.host.attr("placeholder")||this._refreshPlaceHolder()},_refreshPlaceHolder:function(){if("placeholder"in this.element)this.host.attr("placeHolder",this.placeHolder);else{var a=this;""===this.element.value&&(this.element.value=this.placeHolder,this.host.focus(function(){a.element.value===a.placeHolder&&(a.element.value="")}),this.host.blur(function(){""!==a.element.value&&a.element.value!==a.placeHolder||(a.element.value=a.placeHolder)}))}},destroy:function(){this.removeHandlers(),this.baseHost?(a.jqx.utilities.resize(this.baseHost,null,!0),this.baseHost.remove()):(a.jqx.utilities.resize(this.host,null,!0),this.host.remove()),this.$popup&&this.$popup.remove()},propertyChangedHandler:function(b,c,d,e){function f(a,c){var d=b.host.width(),e=a.outerWidth();c===!1?(b.host.width(d+e),a.hide(),b.rtl===!0&&(b.spinButtons===!0&&b._spinButtonsContainer.addClass(b.toThemeProperty("jqx-formatted-input-spin-buttons-container-rtl-border")),b.dropDown===!0&&b._addon.removeClass(b.toThemeProperty("jqx-formatted-input-addon-rtl")))):(b.host.width(d-e),a.show(),b.rtl===!0&&b.spinButtons===!0&&b.dropDown===!0&&(b._spinButtonsContainer.removeClass(b.toThemeProperty("jqx-formatted-input-spin-buttons-container-rtl-border")),b._addon.addClass(b.toThemeProperty("jqx-formatted-input-addon-rtl"))))}function g(c,d){if(d===!0){var e=a("<div></div>");if(b.baseHost){var f=b.baseHost.children("div");b.rtl===!1&&"spinButtons"===c||b.rtl===!0&&"dropDown"===c?f.before(e):f.after(e),b.render(),b.host.width(b.host.width()-e.outerWidth())}else{var g=b.element.id;b.host.removeAttr("id"),b.host.wrap('<div id="'+g+'" style="display: inline-block;"></div>');var h=a("#"+g);b.rtl===!1?h.append(e):h.prepend(e);var i=b.host.data();i.jqxFormattedInput.host=h,i.jqxFormattedInput.element=h[0],b.baseHost=h,b.baseHost.data(i),b.render(),b.refresh()}}}return"placeHolder"===c?void b._refreshPlaceHolder():("template"==c&&b.template&&(b._upbutton.removeClass(b.toThemeProperty("jqx-"+d)),b._downbutton.removeClass(b.toThemeProperty("jqx-"+d)),b._addon.removeClass(b.toThemeProperty("jqx-"+d)),b._upbutton.addClass(b.toThemeProperty("jqx-"+b.template)),b._downbutton.addClass(b.toThemeProperty("jqx-"+b.template)),b._addon.addClass(b.toThemeProperty("jqx-"+b.template))),"theme"===c?void a.jqx.utilities.setTheme(d,e,b.host):("disabled"===c&&a.jqx.aria(b,"aria-disabled",b.disabled),"value"===c&&d.toString().toUpperCase()!==e.toString().toUpperCase()?void b.val(e):d!==e&&"radix"===c?void b._changeRadix(e):(d!==e&&"decimalNotation"===c&&10===b._radixNumber&&("exponential"===e?b.element.value=b._getDecimalNotation("exponential"):b.element.value=b._number.toString(10)),d===e||"min"!==c&&"max"!==c?d!==e&&"upperCase"===c&&""!==b.element.value?void(e===!0?(b.host.removeClass(b.toThemeProperty("jqx-formatted-input-lower-case")),b.host.addClass(b.toThemeProperty("jqx-formatted-input-upper-case"))):(b.host.removeClass(b.toThemeProperty("jqx-formatted-input-upper-case")),b.host.addClass(b.toThemeProperty("jqx-formatted-input-lower-case")))):"spinButtons"===c?d!==e?void(b._spinButtonsContainer?f(b._spinButtonsContainer,e):g("spinButtons",e)):void 0:(d!==e&&"spinButtonsStep"===c&&(b._spinButtonsStepLong=new b.longObj.math.Long.fromNumber(e)),"dropDown"===c?d!==e?void(b._addon?f(b._addon,e):g("dropDown",e)):void 0:void b.refresh()):(b._setMinMax(c),b._validateValue(b.value,!0),void(b.value=b.element.value)))))},select:function(a,b,c){var d=this;c||(c=d.$popup.find(".jqx-fill-state-pressed").attr("data-value")),d._changeRadix(parseInt(c,10)),d._setMaxLength(!0),d.close()},val:function(b){var c=this;if(!b&&""!==b||"object"==typeof b&&a.isEmptyObject(b)===!0||"binary"===b||"octal"===b||"decimal"===b||"exponential"===b||"scientific"===b||"engineering"===b||"hexadecimal"===b){if(!b||"object"==typeof b&&a.isEmptyObject(b)===!0)return c.element.value;if("exponential"===b||"scientific"===b||"engineering"===b)return c._getDecimalNotation(b);var d=c._getRadix(b);return c._number.toString(d)}if(b=b.toString(),b.toUpperCase()!==c.element.value.toString().toUpperCase()){var e=c.element.value;c.upperCase===!0&&(b=b.toUpperCase());for(var f=b.split(""),g=0;g<f.length;g++)if(!c._regex[""+c._radixNumber].test(f[g]))return;var h=c._validateValue(b,!0);return c._raiseEvent("2",{value:h,oldValue:e,radix:c._radixNumber}),c.value=h,h}return b},_changeRadix:function(a){var b=this,c=b._getRadix(a),d=""!==b.value?b._number.toString(c):"",e=b.radix,f=b.value;b.radix=a,b._radixNumber=c,b.element.value=d,b.value=d,this._raiseEvent("3",{radix:a,oldRadix:e,value:d,oldValue:f})},_raiseEvent:function(b,c){void 0===c&&(c={owner:null});var d=this.events[b];c.owner=this;var e=new a.Event(d);e.owner=this,2==b&&(c.type=this.changeType,this.changeType=null),e.args=c,e.preventDefault&&e.preventDefault();var f;return f=this.baseHost?this.baseHost.trigger(e):this.host.trigger(e)},open:function(){var b=this;if(b._setPopupOptions(),b._render(b._popupOptions),!a.jqx.isHidden(this.host)){var c;if(c=b.baseHost?a.extend({},b.baseHost.coord(!0),{height:b.baseHost[0].offsetHeight}):a.extend({},b.host.coord(!0),{height:b.host[0].offsetHeight}),0===this.$popup.parent().length){var d=this.element.id+"_popup";this.$popup[0].id=d,a.jqx.aria(this,"aria-owns",d)}this.$popup.appendTo(a(document.body)).css({position:"absolute",zIndex:this.popupZIndex,top:c.top+c.height,left:c.left}).show();var e=0,f=this.$popup.children();return a.each(f,function(){e+=a(this).outerHeight(!0)-1}),this.$popup.height(e),this._opened=!0,b.baseHost&&(b._addon.addClass(b.toThemeProperty("jqx-fill-state-pressed jqx-combobox-arrow-selected")),b._arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-selected"))),this._raiseEvent("0",{popup:this.$popup}),a.jqx.aria(this,"aria-expanded",!0),this}},close:function(){var b=this;return this.$popup.hide(),this._opened=!1,b.baseHost&&(b._addon.removeClass(b.toThemeProperty("jqx-fill-state-pressed jqx-combobox-arrow-selected")),b._arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-selected"))),this._raiseEvent("1",{popup:this.$popup}),a.jqx.aria(this,"aria-expanded",!1),this},_render:function(b){var c=this;b=a(b).map(function(b,d){var e,f=d;switch(b){case 0:e=2;break;case 1:e=8;break;case 2:e=10;break;case 3:e=16}b=a(c.item).attr("data-value",e),b.find("a").html(f).attr("data-value",e);var g="";return c.rtl&&(g=" "+c.toThemeProperty("jqx-rtl")+" "+c.toThemeProperty("jqx-formatted-input-item-rtl")),b[0].className=c.toThemeProperty("jqx-item")+" "+c.toThemeProperty("jqx-menu-item")+" "+c.toThemeProperty("jqx-formatted-input-item")+" "+c.toThemeProperty("jqx-rc-all")+g,b[0]});var d;switch(c._radixNumber){case 2:d=0;break;case 8:d=1;break;case 10:d=2;break;case 16:d=3}if(b.eq(d).addClass(this.toThemeProperty("jqx-fill-state-pressed")),this.$popup.html(b),this.dropDownWidth)this.$popup.width(this.dropDownWidth);else if(c.baseHost){var e="string"==typeof c.width&&"%"===c.width.charAt(c.width.length-1)?1:0;this.$popup.width(this.baseHost.outerWidth()-6-e)}else this.$popup.width(this.host.outerWidth()-6);return this},next:function(){var b=this.$popup.find(".jqx-fill-state-pressed").removeClass(this.toThemeProperty("jqx-fill-state-pressed")),c=b.next();c.length||(c=a(this.$popup.find("li")[0])),c.addClass(this.toThemeProperty("jqx-fill-state-pressed"))},prev:function(){var a=this.$popup.find(".jqx-fill-state-pressed").removeClass(this.toThemeProperty("jqx-fill-state-pressed")),b=a.prev();b.length||(b=this.$popup.find("li").last()),b.addClass(this.toThemeProperty("jqx-fill-state-pressed"))},addHandlers:function(){var b=this;if(this.addHandler(this.host,"focus",a.proxy(this.onFocus,this)),this.addHandler(this.host,"blur",a.proxy(this.onBlur,this)),this.addHandler(this.host,"keypress",a.proxy(this.keypress,this)),this.addHandler(this.host,"keyup",a.proxy(this.keyup,this)),this.addHandler(this.host,"keydown",a.proxy(this.keydown,this)),this.addHandler(this.$popup,"mousedown",a.proxy(this.click,this)),this.host.on?this.$popup.on("mouseenter","li",a.proxy(this.mouseenter,this)):this.$popup.bind("mouseenter","li",a.proxy(this.mouseenter,this)),this.addHandler(this.host,"change",function(a){a.stopPropagation(),a.preventDefault()}),b.baseHost){var c=b.baseHost.attr("id");if(b._spinButtonsContainer){var d=b._upbutton.add(b._downbutton);b.addHandler(b._upbutton,"mousedown.jqxFormattedInputSpinButtonUp"+c,function(){b.disabled||""===b.value||null===b.value||(b._upbutton.addClass(b.toThemeProperty("jqx-fill-state-pressed")),b.changeType="mouse",b._incrementOrDecrement("add"))}),b.addHandler(b._upbutton,"mouseup.jqxFormattedInputSpinButtonUp"+c,function(){b.disabled||""===b.value||null===b.value||b._upbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed"))}),b.addHandler(b._downbutton,"mousedown.jqxFormattedInputSpinButtonDown"+c,function(){b.disabled||""===b.value||null===b.value||(b.changeType="mouse",b._downbutton.addClass(b.toThemeProperty("jqx-fill-state-pressed")),b._incrementOrDecrement("subtract"))}),b.addHandler(b._downbutton,"mouseup.jqxFormattedInputSpinButtonDown"+c,function(){b.disabled||""===b.value||null===b.value||b._downbutton.removeClass(b.toThemeProperty("jqx-fill-state-pressed"))}),b.addHandler(d,"mouseenter.jqxFormattedInputSpinButtons"+c,function(c){if(!b.disabled&&""!==b.value&&null!==b.value){var d=a(c.target);d.hasClass("jqx-icon-arrow-up")||d.children().hasClass("jqx-icon-arrow-up")?(b._upbutton.addClass(b.toThemeProperty("jqx-fill-state-hover")),b._upArrow.addClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))):(b._downbutton.addClass(b.toThemeProperty("jqx-fill-state-hover")),b._downArrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover")))}}),b.addHandler(d,"mouseleave.jqxFormattedInputSpinButtons"+c,function(c){if(!b.disabled&&""!==b.value&&null!==b.value){var d=a(c.target);d.hasClass("jqx-icon-arrow-up")||d.children().hasClass("jqx-icon-arrow-up")?(b._upbutton.removeClass(b.toThemeProperty("jqx-fill-state-hover")),b._upArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up-hover"))):(b._downbutton.removeClass(b.toThemeProperty("jqx-fill-state-hover")),b._downArrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover")))}}),b.addHandler(a("body"),"mouseup.jqxFormattedInputSpinButtons"+c,function(){b._upbutton.add(b._downbutton).removeClass(b.toThemeProperty("jqx-fill-state-pressed"))})}b._addon&&(b.addHandler(b._addon,"click.jqxFormattedInputAddon"+c,function(){b.disabled||(b._opened?b.close():b.open())}),b.addHandler(b._addon,"mouseenter.jqxFormattedInputAddon"+c,function(){b.disabled||""===b.value||null===b.value||(b._addon.addClass(b.toThemeProperty("jqx-fill-state-hover jqx-combobox-arrow-hover")),b._arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover")))}),b.addHandler(b._addon,"mouseleave.jqxFormattedInputAddon"+c,function(){b.disabled||""===b.value||null===b.value||(b._addon.removeClass(b.toThemeProperty("jqx-fill-state-hover jqx-combobox-arrow-hover")),b._arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover")))}),b.addHandler(b._addon.add(b._arrow),"blur.jqxFormattedInputAddon"+c,function(){b._opened&&!b.disabled&&b.close()})),a.jqx.utilities.resize(b.baseHost,function(){b._opened===!0&&b.close();var a=0;b._spinButtonsContainer&&(a+=b._spinButtonsContainer.outerWidth()),b._addon&&(a+=b._addon.outerWidth()),b.host.css("width",b.baseHost.width()-a-1)})}},removeHandlers:function(){var b=this;if(this.removeHandler(this.host,"focus",a.proxy(this.onFocus,this)),this.removeHandler(this.host,"blur",a.proxy(this.onBlur,this)),this.removeHandler(this.host,"keypress",a.proxy(this.keypress,this)),this.removeHandler(this.host,"keyup",a.proxy(this.keyup,this)),this.removeHandler(this.host,"keydown",a.proxy(this.keydown,this)),this.removeHandler(this.$popup,"mousedown",a.proxy(this.click,this)),this.host.off?this.$popup.off("mouseenter","li",a.proxy(this.mouseenter,this)):this.$popup.unbind("mouseenter","li",a.proxy(this.mouseenter,this)),b.baseHost){var c=b.baseHost.attr("id");if(b._spinButtonsContainer){var d=b._upbutton.add(b._downbutton);b.removeHandler(b._upbutton,"mousedown.jqxFormattedInputSpinButtonUp"+c),b.removeHandler(b._upbutton,"mouseup.jqxFormattedInputSpinButtonUp"+c),b.removeHandler(b._downbutton,"mousedown.jqxFormattedInputSpinButtonDown"+c),b.removeHandler(b._downbutton,"mouseup.jqxFormattedInputSpinButtonDown"+c),b.removeHandler(d,"mouseenter.jqxFormattedInputSpinButtons"+c),b.removeHandler(d,"mouseleave.jqxFormattedInputSpinButtons"+c),b.removeHandler(a("body"),"mouseup.jqxFormattedInputSpinButtons"+c)}b._addon&&(b.removeHandler(b._addon,"click.jqxFormattedInputAddon"+c),b.removeHandler(b._addon,"mouseenter.jqxFormattedInputAddon"+c),b.removeHandler(b._addon,"mouseleave.jqxFormattedInputAddon"+c),b.removeHandler(b._addon.add(b._arrow),"blur.jqxFormattedInputAddon"+c))}},move:function(a){if(this._opened){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()}},keydown:function(b){var c=this;c.changeType="keyboard",this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b);var d=b.charCode?b.charCode:b.which,e=String.fromCharCode(d);if(d>=96&&d<=105&&(e=d-96,d-=48),b.altKey===!0){if(40===d)return void(c._addon&&this.open());if(38===d)return void(c._addon&&this.close())}if(b.ctrlKey===!0){if(67===d)return;if(65===d)return void c.selectAll()}var f=[8,9,13,37,38,39,40,46,88],g=c._regex[""+c._radixNumber];if(!(f.indexOf(d)!==-1||g.test(e)||g.test(b.key)||g.test(b.char)))return b.preventDefault(),!1;var h=c.host[0].selectionStart,i=c.host[0].selectionEnd-h,j=this._getCaretPosition(this.host[0]),k=this.element.value,l=k.split("");if(8===d)i>0?l.splice(h,i):l.splice(j-1,1);else if(46===d)i>0?l.splice(h,i):l.splice(j,1);else if(88===d)b.ctrlKey===!0?i>0&&l.splice(h,i):b.preventDefault();else if(189===d)"-"===l[0]?(l.splice(0,1),c._minus=!1):(l.splice(0,0,"-"),c._minus=!0),b.preventDefault();else{var m=f.indexOf(d)===-1?e:"";i>0?(l.splice(h,i),l.splice(h,0,m)):l.splice(j,0,m)}if(l=l.join(""),l!==k){var n=c._validateValue(l,!1);n===!1?c._inputAndAddon.addClass(c.toThemeProperty("jqx-input-invalid")):c._inputAndAddon.removeClass(c.toThemeProperty("jqx-input-invalid"))}},keypress:function(a){var b=this;b.suppressKeyPressRepeat||b.move(a)},keyup:function(a){var b=this;switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:this._opened?this.select(a,this):b._change();break;case 27:if(!this._opened)return;this.close();break;case 189:10===b._radixNumber&&(b._minus===!0?b.element.value="-"+b.element.value:b.element.value=b.element.value.slice(1))}a.stopPropagation(),a.preventDefault(),""!==b.element.value?(b.upperCase?b.host.addClass(b.toThemeProperty("jqx-formatted-input-upper-case")):b.host.addClass(b.toThemeProperty("jqx-formatted-input-lower-case")),b._spinButtonsContainer&&b._spinButtonsContainer.removeClass(b.toThemeProperty("jqx-fill-state-disabled"))):(b.host.removeClass(b.toThemeProperty("jqx-formatted-input-upper-case jqx-formatted-input-lower-case")),b._spinButtonsContainer&&b._spinButtonsContainer.addClass(b.toThemeProperty("jqx-fill-state-disabled")))},_getCaretPosition:function(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"===a.selectionStart)&&(b=a.selectionStart);return b},onBlur:function(){var a=this;a._opened&&a.close(),a._setMaxLength(),a._inputAndAddon.removeClass(a.toThemeProperty("jqx-fill-state-focus")),a._change(),10===a._radixNumber&&"exponential"===a.decimalNotation&&(a.element.value=a._getDecimalNotation("exponential")),a._refreshPlaceHolder()},onFocus:function(){var a=this;a._setMaxLength(!0),a._inputAndAddon.addClass(a.toThemeProperty("jqx-fill-state-focus")),10===a._radixNumber&&"exponential"===a.decimalNotation&&(a.element.value=a._number.toString(10))},click:function(b){b.stopPropagation(),b.preventDefault();var c=a(b.target).attr("data-value");this.select(b,this,c)},mouseenter:function(b){this.$popup.find(".jqx-fill-state-pressed").removeClass(this.toThemeProperty("jqx-fill-state-pressed")),a(b.currentTarget).addClass(this.toThemeProperty("jqx-fill-state-pressed"))},_change:function(){var a=this,b=a.value,c=a._validateValue(a.element.value,!0);a._inputAndAddon.removeClass(a.toThemeProperty("jqx-input-invalid")),c.toUpperCase()!==b.toString().toUpperCase()&&(a._raiseEvent("2",{value:c,oldValue:b,radix:a._radixNumber}),a.value=c)},_getRadix:function(a){switch(a){case 10:case"decimal":return 10;case 2:case"binary":return 2;case 8:case"octal":return 8;case 16:case"hexadecimal":return 16}},_setPopupOptions:function(){var a=this;a._popupOptions=new Array,""!==a.value?(a._popupOptions.push(a._number.toString(2)+" <em>(BIN)</em>"),a._popupOptions.push(a._number.toString(8)+" <em>(OCT)</em>"),a._popupOptions.push(a._number.toString(10)+" <em>(DEC)</em>"),a._popupOptions.push(a._number.toString(16)+" <em>(HEX)</em>")):(a._popupOptions.push("BIN"),a._popupOptions.push("OCT"),a._popupOptions.push("DEC"),a._popupOptions.push("HEX"))},_validateValue:function(a,b){var c=this;if(""!==a){var d=new c.longObj.math.Long.fromString(a.toString(),c._radixNumber);if(d.lessThan(c._minLong)){if(b){c._number=c._minLong;var e=c._minLong.toString(c._radixNumber);return 16===c._radixNumber&&c.upperCase===!0&&(e=e.toUpperCase()),c.element.value=e,e}return!1}if(d.greaterThan(c._maxLong)){if(b){c._number=c._maxLong;var f=c._maxLong.toString(c._radixNumber);return 16===c._radixNumber&&c.upperCase===!0&&(f=f.toUpperCase()),c.element.value=f,f}return!1}return!b||(c._number=d,c.element.value=a,a)}return!b||(c.element.value="",a)},_getNegativeDecimal:function(a,b){var c=a;if(8===b){for(var d=new Array,e=0;e<11;e++){for(var f=parseInt(a.charAt(e),8).toString(2);3!==f.length;)f="0"+f;d.push(f)}c=d.join(""),"0"===c.charAt(0)&&(c=c.slice(1))}else if(16===b){for(var g=new Array,h=0;h<8;h++){for(var i=parseInt(a.charAt(h),16).toString(2);4!==i.length;)i="0"+i;g.push(i)}c=g.join("")}for(var j="",k=0;k<c.length;k++){var l="1"===c.charAt(k)?"0":"1";j+=l}return j=(parseInt(j,2)+1)*-1},_setMaxLength:function(a){var b,c=this;if(a===!0)switch(c._radixNumber){case 2:b=64;break;case 8:b=22;break;case 10:b=20;break;case 16:b=16}else b=524288;c.host.attr("maxlength",b)},_setMinMax:function(a){var b=this;b["_"+a+"Long"]=new b.longObj.math.Long.fromString(b[a].toString(),b._radixNumber)},_getDecimalNotation:function(a){function b(a){if("0"===a)return parseInt(a,10).toExponential();var b;"-"===a.charAt(0)?(b="-",a=a.slice(1,a.length)):b="";for(var c=a.length-1;"0"===a.charAt(a.length-1);)a=a.slice(0,a.length-1);var d=a.slice(1,a.length);return""!==d&&(d="."+d),b+""+a.charAt(0)+d+"e+"+c}function c(a){var b=a.indexOf("e"),c=a.slice(b+1),d=a.slice(0,b+1);return d=d.replace("e","×10"),d+=e._toSuperScript(c),d=d.replace("+","")}function d(a){var b=a.indexOf("e"),c=a.slice(b+1),d=a.slice(0,b),f=parseInt(c,10)%3;d*=Math.pow(10,f);var g=a.slice(0,b).length-f-2;g>=0&&(d=d.toFixed(g));var h=d+"×10"+e._toSuperScript((parseInt(c,10)-f).toString());return h}var e=this,f=e._number.toString(10),g=b(f);return"scientific"===a?c(g):"engineering"===a?d(g):g},_toSuperScript:function(a,b){for(var c="-0123456789",d="⁻⁰¹²³⁴⁵⁶⁷⁸⁹",e="",f=0;f<a.length;f++)if(b===!0){var g=d.indexOf(a.charAt(f));e+=g!==-1?c[g]:a[f]}else{var h=c.indexOf(a.charAt(f));e+=h!==-1?d[h]:a[f]}return e},_incrementOrDecrement:function(a){var b=this;b._number.toString(b._radixNumber)!==b.element.value&&(b._number=new b.longObj.math.Long.fromString(b.element.value,b._radixNumber)),b._number=b._number[a](b._spinButtonsStepLong),b.element.value=b._number.toString(b._radixNumber),b._change()},_negativeBinary:function(a,b){var c="";for(a=a.slice(1,a.length);a.length<64;)a="0"+a;for(var d=0;d<a.length;d++){var e="1"===a.charAt(d)?"0":"1";c+=e}for(var f=!0,g="",h=c.length-1;h>=0;h--){var i,j=c.charAt(h);"0"===j?f===!0?(i="1",f=!1):i="0":i=f===!0?"0":"1",g=i+""+g}switch(b){case 2:return g;case 8:g="00"+g;for(var k="",l=22;l>=1;l--){var m=g[3*l-3]+""+g[3*l-2]+g[3*l-1];k=parseInt(m,2).toString(8)+""+k}return k;case 16:for(var n="",o=16;o>=1;o--){var p=g[4*o-4]+""+g[4*o-3]+g[4*o-2]+g[4*o-1];n=parseInt(p,2).toString(16)+""+n}return n}},_Long:function(){var a=this;a.longObj=new Object;var b=a.longObj;b.math=new Object,b.math.Long=new Object,b.math.Long=function(a,b){this.lowBits=0|a,this.highBits=0|b},b.math.Long.IntCache={},b.math.Long.fromInt=function(a){if(-128<=a&&a<128){var c=b.math.Long.IntCache[a];if(c)return c}var d=new b.math.Long(0|a,a<0?-1:0);return-128<=a&&a<128&&(b.math.Long.IntCache[a]=d),d},b.math.Long.fromNumber=function(a){return isNaN(a)||!isFinite(a)?b.math.Long.ZERO:a<=-b.math.Long.TWO_PWR_63_DBL_?b.math.Long.MIN_VALUE:a+1>=b.math.Long.TWO_PWR_63_DBL_?b.math.Long.MAX_VALUE:a<0?b.math.Long.fromNumber(-a).negate():new b.math.Long(a%b.math.Long.TWO_PWR_32_DBL_|0,a/b.math.Long.TWO_PWR_32_DBL_|0)},b.math.Long.fromBits=function(a,c){return new b.math.Long(a,c)},b.math.Long.fromString=function(a,c){if(0===a.length)throw new Error("number format error: empty string");var d=c||10;if(d<2||36<d)throw new Error("radix out of range: "+d);if("-"===a.charAt(0))return b.math.Long.fromString(a.substring(1),d).negate();if(a.indexOf("-")>=0)throw new Error('number format error: interior "-" character: '+a);for(var e=b.math.Long.fromNumber(Math.pow(d,8)),f=b.math.Long.ZERO,g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),i=parseInt(a.substring(g,g+h),d);if(h<8){var j=b.math.Long.fromNumber(Math.pow(d,h));f=f.multiply(j).add(b.math.Long.fromNumber(i))}else f=f.multiply(e),f=f.add(b.math.Long.fromNumber(i))}return f},b.math.Long.TWO_PWR_16_DBL_=65536,b.math.Long.TWO_PWR_24_DBL_=1<<24,
b.math.Long.TWO_PWR_32_DBL_=b.math.Long.TWO_PWR_16_DBL_*b.math.Long.TWO_PWR_16_DBL_,b.math.Long.TWO_PWR_31_DBL_=b.math.Long.TWO_PWR_32_DBL_/2,b.math.Long.TWO_PWR_48_DBL_=b.math.Long.TWO_PWR_32_DBL_*b.math.Long.TWO_PWR_16_DBL_,b.math.Long.TWO_PWR_64_DBL_=b.math.Long.TWO_PWR_32_DBL_*b.math.Long.TWO_PWR_32_DBL_,b.math.Long.TWO_PWR_63_DBL_=b.math.Long.TWO_PWR_64_DBL_/2,b.math.Long.ZERO=b.math.Long.fromInt(0),b.math.Long.ONE=b.math.Long.fromInt(1),b.math.Long.NEG_ONE=b.math.Long.fromInt(-1),b.math.Long.MAX_VALUE=b.math.Long.fromBits(-1,2147483647),b.math.Long.MIN_VALUE=b.math.Long.fromBits(0,-2147483648),b.math.Long.TWO_PWR_24_=b.math.Long.fromInt(1<<24),b.math.Long.prototype.toInt=function(){return this.lowBits},b.math.Long.prototype.toNumber=function(){return this.highBits*b.math.Long.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},b.math.Long.prototype.toString=function(c){var d=c||10;if(d<2||36<d)throw new Error("radix out of range: "+d);if(this.isZero())return"0";var e,f;if(this.isNegative()){if(this.equals(b.math.Long.MIN_VALUE)){var g=b.math.Long.fromNumber(d),h=this.div(g);return e=h.multiply(g).subtract(this),h.toString(d)+e.toInt().toString(d)}switch(d){case 2:case 8:case 16:return f="-"+this.negate().toString(2),a._negativeBinary(f,d);default:return f="-"+this.negate().toString(d)}}var i=b.math.Long.fromNumber(Math.pow(d,6));for(e=this,f="";;){var j=e.div(i),k=e.subtract(j.multiply(i)).toInt(),l=k.toString(d);if(e=j,e.isZero())return l+f;for(;l.length<6;)l="0"+l;f=""+l+f}},b.math.Long.prototype.getHighBits=function(){return this.highBits},b.math.Long.prototype.getLowBits=function(){return this.lowBits},b.math.Long.prototype.getLowBitsUnsigned=function(){return this.lowBits>=0?this.lowBits:b.math.Long.TWO_PWR_32_DBL_+this.lowBits},b.math.Long.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(b.math.Long.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var a=0!==this.highBits?this.highBits:this.lowBits,c=31;c>0&&0===(a&1<<c);c--);return 0!==this.highBits?c+33:c+1},b.math.Long.prototype.isZero=function(){return 0===this.highBits&&0===this.lowBits},b.math.Long.prototype.isNegative=function(){return this.highBits<0},b.math.Long.prototype.isOdd=function(){return 1===(1&this.lowBits)},b.math.Long.prototype.equals=function(a){return this.highBits===a.highBits&&this.lowBits===a.lowBits},b.math.Long.prototype.notEquals=function(a){return this.highBits!==a.highBits||this.lowBits!==a.lowBits},b.math.Long.prototype.lessThan=function(a){return this.compare(a)<0},b.math.Long.prototype.lessThanOrEqual=function(a){return this.compare(a)<=0},b.math.Long.prototype.greaterThan=function(a){return this.compare(a)>0},b.math.Long.prototype.greaterThanOrEqual=function(a){return this.compare(a)>=0},b.math.Long.prototype.compare=function(a){if(this.equals(a))return 0;var b=this.isNegative(),c=a.isNegative();return b&&!c?-1:!b&&c?1:this.subtract(a).isNegative()?-1:1},b.math.Long.prototype.negate=function(){return this.equals(b.math.Long.MIN_VALUE)?b.math.Long.MIN_VALUE:this.not().add(b.math.Long.ONE)},b.math.Long.prototype.add=function(a){var c=this.highBits>>>16,d=65535&this.highBits,e=this.lowBits>>>16,f=65535&this.lowBits,g=a.highBits>>>16,h=65535&a.highBits,i=a.lowBits>>>16,j=65535&a.lowBits,k=0,l=0,m=0,n=0;return n+=f+j,m+=n>>>16,n&=65535,m+=e+i,l+=m>>>16,m&=65535,l+=d+h,k+=l>>>16,l&=65535,k+=c+g,k&=65535,b.math.Long.fromBits(m<<16|n,k<<16|l)},b.math.Long.prototype.subtract=function(a){return this.add(a.negate())},b.math.Long.prototype.multiply=function(a){if(this.isZero())return b.math.Long.ZERO;if(a.isZero())return b.math.Long.ZERO;if(this.equals(b.math.Long.MIN_VALUE))return a.isOdd()?b.math.Long.MIN_VALUE:b.math.Long.ZERO;if(a.equals(b.math.Long.MIN_VALUE))return this.isOdd()?b.math.Long.MIN_VALUE:b.math.Long.ZERO;if(this.isNegative())return a.isNegative()?this.negate().multiply(a.negate()):this.negate().multiply(a).negate();if(a.isNegative())return this.multiply(a.negate()).negate();if(this.lessThan(b.math.Long.TWO_PWR_24_)&&a.lessThan(b.math.Long.TWO_PWR_24_))return b.math.Long.fromNumber(this.toNumber()*a.toNumber());var c=this.highBits>>>16,d=65535&this.highBits,e=this.lowBits>>>16,f=65535&this.lowBits,g=a.highBits>>>16,h=65535&a.highBits,i=a.lowBits>>>16,j=65535&a.lowBits,k=0,l=0,m=0,n=0;return n+=f*j,m+=n>>>16,n&=65535,m+=e*j,l+=m>>>16,m&=65535,m+=f*i,l+=m>>>16,m&=65535,l+=d*j,k+=l>>>16,l&=65535,l+=e*i,k+=l>>>16,l&=65535,l+=f*h,k+=l>>>16,l&=65535,k+=c*j+d*i+e*h+f*g,k&=65535,b.math.Long.fromBits(m<<16|n,k<<16|l)},b.math.Long.prototype.div=function(a){if(a.isZero())throw new Error("division by zero");if(this.isZero())return b.math.Long.ZERO;var c,d;if(this.equals(b.math.Long.MIN_VALUE)){if(a.equals(b.math.Long.ONE)||a.equals(b.math.Long.NEG_ONE))return b.math.Long.MIN_VALUE;if(a.equals(b.math.Long.MIN_VALUE))return b.math.Long.ONE;var e=this.shiftRight(1);if(c=e.div(a).shiftLeft(1),c.equals(b.math.Long.ZERO))return a.isNegative()?b.math.Long.ONE:b.math.Long.NEG_ONE;d=this.subtract(a.multiply(c));var f=c.add(d.div(a));return f}if(a.equals(b.math.Long.MIN_VALUE))return b.math.Long.ZERO;if(this.isNegative())return a.isNegative()?this.negate().div(a.negate()):this.negate().div(a).negate();if(a.isNegative())return this.div(a.negate()).negate();var g=b.math.Long.ZERO;for(d=this;d.greaterThanOrEqual(a);){c=Math.max(1,Math.floor(d.toNumber()/a.toNumber()));for(var h=Math.ceil(Math.log(c)/Math.LN2),i=h<=48?1:Math.pow(2,h-48),j=b.math.Long.fromNumber(c),k=j.multiply(a);k.isNegative()||k.greaterThan(d);)c-=i,j=b.math.Long.fromNumber(c),k=j.multiply(a);j.isZero()&&(j=b.math.Long.ONE),g=g.add(j),d=d.subtract(k)}return g},b.math.Long.prototype.modulo=function(a){return this.subtract(this.div(a).multiply(a))},b.math.Long.prototype.not=function(){return b.math.Long.fromBits(~this.lowBits,~this.highBits)},b.math.Long.prototype.and=function(a){return b.math.Long.fromBits(this.lowBits&a.lowBits,this.highBits&a.highBits)},b.math.Long.prototype.or=function(a){return b.math.Long.fromBits(this.lowBits|a.lowBits,this.highBits|a.highBits)},b.math.Long.prototype.xor=function(a){return b.math.Long.fromBits(this.lowBits^a.lowBits,this.highBits^a.highBits)},b.math.Long.prototype.shiftLeft=function(a){if(a&=63,0===a)return this;var c=this.lowBits;if(a<32){var d=this.highBits;return b.math.Long.fromBits(c<<a,d<<a|c>>>32-a)}return b.math.Long.fromBits(0,c<<a-32)},b.math.Long.prototype.shiftRight=function(a){if(a&=63,0===a)return this;var c=this.highBits;if(a<32){var d=this.lowBits;return b.math.Long.fromBits(d>>>a|c<<32-a,c>>a)}return b.math.Long.fromBits(c>>a-32,c>=0?0:-1)},b.math.Long.prototype.shiftRightUnsigned=function(a){if(a&=63,0===a)return this;var c=this.highBits;if(a<32){var d=this.lowBits;return b.math.Long.fromBits(d>>>a|c<<32-a,c>>>a)}return 32===a?b.math.Long.fromBits(c,0):b.math.Long.fromBits(c>>>a-32,0)}}})}(jqxBaseFramework);
