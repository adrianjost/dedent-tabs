"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=dedent;function dedent(a){for(var b="string"==typeof a?[a]:a.raw,c="",d=0;d<b.length;d++)c+=b[d].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),d<(1>=arguments.length?0:arguments.length-1)&&(c+=1>d+1||arguments.length<=d+1?void 0:arguments[d+1]);var e=c.split("\n"),f=null;if(e.forEach(function(a){var b=Math.min,c=a.match(/^(\s+)\S+/);if(c){var d=c[1].length;f=f?b(f,d):d}}),null!==f){var g=f,h=[" ","\t"];c=e.map(function(a){return h.includes(a[0])?a.slice(g):a}).join("\n")}return c.trim().replace(/\\n/g,"\n")}