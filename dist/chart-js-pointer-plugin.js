!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={id:"dataPointer",beforeDraw:function(e){e.chart.config.options.plugins.dataPointer.enable&&this.drawPointers(e)},drawPointers:function(e){var t=e.ctx,r=e.chart.config.options.plugins.dataPointer,n=r.data,o=r.fontSize,i=r.fontFamily,a=r.pointer,l=r.color,u=r.defaultColor,f=String();f=f.concat(o,"px"," ",i);var c=e.scales["x-axis-0"],s=e.scales["y-axis-0"];t.save(),n.forEach(function(e,r,n){var i=c.getPixelForValue(e),d=s.getPixelForTick(r)-s.options.barThickness/2-o/2;Array.isArray(l)&&void 0!==l[r]?t.fillStyle=l[r]:t.fillStyle=u,t.font=f,t.textAlign="center",t.textBaseline="middle",t.fillText(a,i,d)}),t.restore()}};Chart.defaults.global.plugins.dataPointer={enable:!1,data:[],fontSize:15,fontFamily:"Arial",pointer:"*",label:"",defaultColor:"#A9A9A9",color:[]},Chart.plugins.register(n)}]);