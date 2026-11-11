(()=>{var ut=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),r.length&&r.forEach(a=>{let n=ut(...a);o.appendChild(n)}),o},it=([e,t,r])=>ut(e,t,r);var Nt=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),zt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Ut=e=>e.flatMap(zt).map(r=>r.trim()).filter(Boolean).filter((r,o,a)=>a.indexOf(r)===o).join(" "),Ht=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),ke=(e,{nameAttr:t,icons:r,attrs:o})=>{let a=e.getAttribute(t);if(a==null)return;let n=Ht(a),l=r[n];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let f=Nt(e),[u,i,c]=l,x={...i,"data-lucide":a,...o,...f},d=Ut(["lucide",`lucide-${a}`,f,o]);d&&Object.assign(x,{class:d});let g=it([u,x,c]);return e.parentNode?.replaceChild(g,e)};var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Me=["svg",p,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var Ae=["svg",p,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var Pe=["svg",p,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var Re=["svg",p,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var Le=["svg",p,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var Fe=["svg",p,[["path",{d:"M20 6 9 17l-5-5"}]]];var De=["svg",p,[["path",{d:"m15 18-6-6 6-6"}]]];var Te=["svg",p,[["path",{d:"m9 18 6-6-6-6"}]]];var te=["svg",p,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var Ee=["svg",p,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var re=["svg",p,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var Oe=["svg",p,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var Be=["svg",p,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var qe=["svg",p,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var $e=["svg",p,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var Ie=["svg",p,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var Ne=["svg",p,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var ze=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var Ue=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var He=["svg",p,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var dt=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>ke(a,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){let a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(n=>ke(n,{nameAttr:"icon-name",icons:e,attrs:r})))}};var y=[{id:1,width:6,height:5,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4]],boxes:[[3,2],[3,3]],goals:[[4,2],[2,3]],trees:[],xsb:`########
########
##@   ##
##  $.##
## .$ ##
########
########`},{id:2,width:6,height:6,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[4,1],[0,1],[5,1],[0,2],[5,2],[0,3],[3,3],[5,3],[0,4],[5,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[2,2],[3,2]],goals:[[1,2],[3,2]],trees:[],xsb:`########
###### #
##@  ###
##.$* ##
##  # ##
##    ##
########
########`},{id:3,width:7,height:6,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,1],[0,1],[5,1],[0,2],[6,2],[0,3],[2,3],[6,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[2,2],[3,2]],goals:[[3,3],[5,3]],trees:[],xsb:`#########
####### #
##@   ###
## $$  ##
## #. .##
##     ##
#########
#########`},{id:4,width:8,height:8,player:[4,6],walls:[[2,0],[3,0],[4,0],[1,1],[4,1],[5,1],[6,1],[7,1],[1,2],[7,2],[0,3],[4,3],[6,3],[0,4],[6,4],[0,5],[7,5],[1,6],[6,6],[2,7],[3,7],[4,7],[5,7],[6,7]],boxes:[[5,3],[2,4],[3,5],[4,5]],goals:[[2,1],[3,1],[4,2],[5,4]],trees:[],xsb:`##########
#  ###   #
# #..#####
# #  .  ##
##   #$# #
## $  .# #
##  $$  ##
# #  @ # #
#  ##### #
##########`},{id:5,width:8,height:8,player:[4,6],walls:[[2,0],[3,0],[4,0],[1,1],[4,1],[5,1],[6,1],[7,1],[1,2],[7,2],[0,3],[4,3],[7,3],[0,4],[3,4],[7,4],[0,5],[7,5],[0,6],[6,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],boxes:[[5,3],[2,4],[3,5],[4,5]],goals:[[2,1],[3,1],[5,4],[1,6]],trees:[],xsb:`##########
#  ###   #
# #..#####
# #     ##
##   #$ ##
## $# . ##
##  $$  ##
##.  @ # #
# ###### #
##########`},{id:6,width:10,height:8,player:[8,1],walls:[[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[2,1],[3,1],[6,1],[9,1],[2,2],[6,2],[9,2],[2,3],[9,3],[2,4],[5,4],[6,4],[9,4],[0,5],[1,5],[2,5],[6,5],[8,5],[9,5],[0,6],[8,6],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]],boxes:[[3,3],[5,3],[7,3],[4,4],[4,5]],goals:[[1,6],[2,6],[3,6],[4,6],[5,6]],trees:[],xsb:`############
#   ########
#  ##  # @##
#  #   #  ##
#  #$ $ $ ##
#  # $##  ##
#### $ # ###
##.....  # #
########## #
############`},{id:7,width:9,height:7,player:[4,5],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[0,1],[7,1],[0,2],[5,2],[7,2],[8,2],[0,3],[4,3],[8,3],[0,4],[1,4],[8,4],[1,5],[8,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6]],boxes:[[3,2],[2,3],[6,3],[2,4],[4,4],[6,4]],goals:[[1,1],[2,1],[3,1],[4,1],[5,1],[6,1]],trees:[],xsb:`###########
######### #
##......# #
##  $ # ###
## $ # $ ##
###$ $ $ ##
# #  @   ##
# #########
###########`},{id:8,width:7,height:7,player:[2,1],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[1,1],[5,1],[6,1],[0,2],[3,2],[6,2],[0,3],[6,3],[0,4],[6,4],[0,5],[1,5],[5,5],[6,5],[1,6],[2,6],[3,6],[4,6],[5,6]],boxes:[[2,3],[4,3],[3,3]],goals:[[3,3],[3,4],[3,5]],trees:[],xsb:`#########
# ##### #
###@  ###
##  #  ##
## $*$ ##
##  .  ##
### . ###
# ##### #
#########`},{id:9,width:8,height:6,player:[5,3],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[6,1],[7,1],[0,2],[7,2],[0,3],[7,3],[0,4],[3,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[2,3],[3,3],[4,3]],goals:[[4,2],[5,2],[5,4]],trees:[],xsb:`##########
#######  #
##    ####
##   .. ##
## $$$@ ##
##  # . ##
##########
##########`},{id:10,width:8,height:7,player:[6,4],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[1,1],[5,1],[6,1],[7,1],[0,2],[3,2],[7,2],[0,3],[3,3],[5,3],[7,3],[0,4],[7,4],[0,5],[5,5],[6,5],[7,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6]],boxes:[[2,4],[5,2],[5,4]],goals:[[2,1],[2,4],[6,4]],trees:[],xsb:`##########
# #####  #
###.  ####
##  # $ ##
##  # # ##
## *  $+##
##    ####
#######  #
##########`},{id:11,width:7,height:6,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[6,1],[0,2],[3,2],[6,2],[6,3],[0,3],[0,4],[5,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[2,1],[2,2],[2,3]],goals:[[2,1],[4,3],[1,4]],trees:[],xsb:`#########
####### #
##@*  ###
## $#  ##
## $ . ##
##.   ###
####### #
#########`},{id:12,width:8,height:6,player:[5,4],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[1,1],[6,1],[7,1],[0,2],[7,2],[0,3],[2,3],[7,3],[0,4],[4,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[4,3],[5,3],[6,3]],goals:[[2,2],[3,2],[6,4]],trees:[],xsb:`##########
# ###### #
###    ###
## ..   ##
## # $$$##
##   #@.##
##########
##########`},{id:13,width:7,height:6,player:[2,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[6,1],[0,2],[6,2],[0,3],[4,3],[6,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[3,1],[1,2],[4,2]],goals:[[1,1],[3,1],[3,4]],trees:[],xsb:`#########
####### #
##.@* ###
##$  $ ##
##   # ##
##  .  ##
#########
#########`},{id:14,width:7,height:7,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[2,2],[5,2],[6,2],[0,3],[2,3],[6,3],[0,4],[4,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[3,2],[3,4],[3,5]],goals:[[4,1],[3,1],[3,5]],trees:[],xsb:`#########
####### #
##@ ..# #
## #$ ###
## #   ##
##  $# ##
##  *  ##
#########
#########`},{id:15,width:7,height:7,player:[1,5],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[2,2],[5,2],[4,2],[6,2],[0,3],[6,3],[0,4],[3,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[1,3],[3,3],[4,4]],goals:[[2,3],[1,3],[5,5]],trees:[],xsb:`#########
######  #
##   #  #
## # ####
##*.$  ##
##  #$ ##
##@   .##
#########
#########`},{id:16,width:7,height:6,player:[5,1],walls:[[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[1,1],[2,1],[6,1],[0,2],[4,2],[6,2],[0,3],[6,3],[0,4],[5,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[3,2],[4,3],[2,4]],goals:[[1,2],[3,2],[3,4]],trees:[],xsb:`#########
#  ######
####  @##
##. *# ##
##   $ ##
## $. ###
####### #
#########`},{id:17,width:8,height:6,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[6,1],[0,2],[7,2],[6,2],[0,3],[2,3],[7,3],[0,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[3,2],[4,2],[3,3]],goals:[[2,2],[4,2],[4,3]],trees:[],xsb:`##########
#######  #
##@   ## #
## .$* ###
## #$.  ##
##      ##
##########
##########`},{id:18,width:7,height:7,player:[5,5],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[2,2],[0,2],[5,2],[6,2],[0,3],[6,3],[0,4],[6,4],[0,5],[3,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[2,4],[4,4],[3,4]],goals:[[3,1],[3,2],[3,3]],trees:[],xsb:`#########
####### #
##  . # #
## #. ###
##  .  ##
## $$$ ##
##  # @##
#########
#########`},{id:19,width:7,height:6,player:[5,4],walls:[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[4,1],[5,1],[6,1],[6,2],[0,2],[0,3],[4,3],[6,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[4,2],[3,3],[4,4]],goals:[[4,2],[5,2],[3,4]],trees:[],xsb:`#########
#####   #
##  #####
##   *.##
##  $# ##
##  .$@##
#########
#########`},{id:20,width:8,height:6,player:[3,3],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[7,1],[0,2],[4,2],[7,2],[0,3],[2,3],[7,3],[0,4],[4,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[2,2],[3,2],[4,3]],goals:[[3,1],[5,2],[3,4]],trees:[],xsb:`##########
######## #
##  .  ###
## $$#. ##
## #@$  ##
##  .#  ##
##########
##########`},{id:21,width:7,height:7,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[6,1],[5,1],[0,2],[6,2],[0,3],[1,3],[6,3],[0,4],[4,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[2,2],[3,2],[4,2]],goals:[[3,3],[5,3],[4,3]],trees:[],xsb:`#########
####### #
##@   ###
## $$$ ##
### ...##
##   # ##
##     ##
#########
#########`},{id:22,width:7,height:7,player:[4,3],walls:[[0,0],[1,0],[2,0],[3,0],[0,1],[3,1],[4,1],[0,2],[4,2],[5,2],[0,3],[5,3],[6,3],[0,4],[3,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[1,3],[3,3],[4,4]],goals:[[1,4],[3,5],[5,5]],trees:[],xsb:`#########
#####   #
##  ##  #
##   ## #
##$ $@###
##. #$ ##
##  . .##
#########
#########`},{id:23,width:6,height:6,player:[4,2],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[3,3],[0,4],[5,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[1,2],[3,2],[2,2]],goals:[[4,1],[1,3],[3,4]],trees:[],xsb:`########
########
##   .##
##$$$@##
##. # ##
##  . ##
########
########`},{id:24,width:8,height:6,player:[1,4],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[7,1],[0,2],[2,2],[4,2],[7,2],[0,3],[7,3],[0,4],[4,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[5,2],[3,3],[4,3]],goals:[[1,3],[4,3],[6,4]],trees:[],xsb:`##########
######## #
##     ###
## # #$ ##
##. $*  ##
##@  # .##
##########
##########`},{id:25,width:11,height:9,player:[8,7],walls:[[1,0],[3,0],[2,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[1,1],[4,1],[5,1],[9,1],[1,2],[9,2],[1,3],[4,3],[5,3],[6,3],[9,3],[1,4],[3,4],[7,4],[9,4],[0,5],[1,5],[3,5],[7,5],[9,5],[10,5],[0,6],[10,6],[0,7],[6,7],[10,7],[0,8],[10,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8]],boxes:[[5,2],[2,3],[8,3],[2,6],[5,6],[8,6]],goals:[[4,4],[5,4],[6,4],[4,5],[5,5],[6,5]],trees:[],xsb:`#############
# ######### #
# #  ##   # #
# #   $   # #
# #$ ### $# #
# # #...# # #
### #...# ###
## $  $  $ ##
##     # @ ##
#############
#############`},{id:26,width:7,height:6,player:[1,2],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[6,1],[0,2],[3,2],[6,2],[0,3],[6,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[4,2],[4,3],[3,4]],goals:[[4,2],[4,4],[5,4]],trees:[],xsb:`#########
####### #
##    ###
##@ #* ##
##   $ ##
##  $..##
#########
#########`},{id:27,width:8,height:6,player:[2,4],walls:[[3,0],[4,0],[5,0],[6,0],[7,0],[0,1],[1,1],[2,1],[3,1],[7,1],[0,2],[7,2],[0,3],[7,3],[0,4],[5,4],[6,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[3,2],[4,3],[5,3]],goals:[[5,1],[4,3],[5,3]],trees:[],xsb:`##########
#   ######
##### . ##
##  $   ##
##   ** ##
## @  ####
#######  #
##########`},{id:28,width:8,height:6,player:[6,2],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[1,1],[6,1],[7,1],[0,2],[7,2],[0,3],[7,3],[2,3],[0,4],[4,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[4,2],[5,2],[5,3]],goals:[[5,1],[4,3],[3,3]],trees:[],xsb:`##########
# ###### #
###   .###
##   $$@##
## #..$ ##
##   #  ##
##########
##########`},{id:29,width:8,height:7,player:[5,4],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,0],[0,1],[6,1],[0,2],[4,2],[7,2],[6,2],[7,3],[2,3],[0,3],[4,4],[7,4],[0,4],[0,5],[4,5],[7,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6]],boxes:[[2,2],[3,3],[5,3]],goals:[[3,1],[1,3],[3,4]],trees:[],xsb:`##########
######## #
##  .  # #
## $ # ###
##.#$ $ ##
##  .#@ ##
##   #  ##
##########
##########`},{id:30,width:7,height:7,player:[5,5],walls:[[1,0],[2,0],[3,0],[4,0],[0,1],[6,1],[4,1],[5,1],[6,2],[0,2],[2,2],[0,3],[6,3],[0,4],[3,4],[6,4],[4,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[4,2],[3,3],[2,5]],goals:[[1,1],[3,3],[2,5]],trees:[],xsb:`#########
# ####  #
##.  ####
## # $ ##
##  *  ##
##  ## ##
## *  @##
#########
#########`},{id:31,width:8,height:6,player:[3,2],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[6,0],[5,0],[0,1],[6,1],[7,1],[0,2],[2,2],[4,2],[7,2],[0,3],[7,3],[4,4],[0,4],[7,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[4,3],[3,3],[2,3]],goals:[[1,3],[5,3],[5,4]],trees:[],xsb:`##########
######## #
##     ###
## #@#  ##
##.$$$. ##
##   #. ##
##########
##########`},{id:32,width:7,height:6,player:[1,1],walls:[[1,0],[2,0],[3,0],[0,0],[0,1],[6,1],[5,1],[3,1],[4,1],[6,2],[0,2],[0,3],[4,3],[6,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[1,2],[2,2],[2,3]],goals:[[2,1],[1,3],[3,4]],trees:[],xsb:`#########
#####   #
##@.#####
##$$   ##
##.$ # ##
##  .  ##
#########
#########`},{id:33,width:7,height:7,player:[4,5],walls:[[1,0],[2,0],[3,0],[0,0],[4,0],[0,1],[4,1],[0,2],[2,2],[4,2],[5,2],[6,2],[0,3],[6,3],[0,4],[6,4],[4,4],[0,5],[6,5],[3,6],[4,6],[5,6],[6,6],[0,6],[1,6],[2,6]],boxes:[[3,3],[4,3],[3,5]],goals:[[1,3],[1,4],[3,5]],trees:[],xsb:`#########
######  #
##   #  #
## # ####
##. $$ ##
##.  # ##
##  *@ ##
#########
#########`},{id:34,width:8,height:6,player:[5,4],walls:[[1,0],[2,0],[3,0],[5,0],[4,0],[6,0],[1,1],[0,1],[6,1],[7,1],[0,2],[7,2],[0,3],[2,3],[4,3],[7,3],[0,4],[7,4],[6,4],[3,5],[4,5],[5,5],[6,5],[0,5],[1,5],[2,5]],boxes:[[3,2],[4,2],[5,2]],goals:[[2,1],[6,2],[1,4]],trees:[],xsb:`##########
# ###### #
###.   ###
##  $$$.##
## # #  ##
##.   @###
######## #
##########`},{id:35,width:7,height:6,player:[1,4],walls:[[1,0],[2,0],[3,0],[5,0],[4,0],[0,1],[1,1],[5,1],[6,1],[0,2],[6,2],[0,3],[2,3],[6,3],[0,4],[5,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5]],boxes:[[3,2],[4,2],[2,2]],goals:[[2,1],[1,2],[5,3]],trees:[],xsb:`#########
# ##### #
###.  ###
##.$$$ ##
## #  .##
##@   ###
####### #
#########`},{id:36,width:7,height:7,player:[5,5],walls:[[1,0],[2,0],[3,0],[5,0],[4,0],[0,0],[6,0],[5,1],[6,1],[0,1],[4,1],[0,2],[5,2],[6,2],[6,3],[0,3],[2,3],[6,4],[0,4],[4,4],[0,5],[1,5],[6,5],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[4,3],[2,4],[3,4]],goals:[[1,2],[3,3],[3,5]],trees:[],xsb:`#########
#########
##   ####
##.   ###
## #.$ ##
## $$# ##
### . @##
# #######
#########`},{id:37,width:7,height:7,player:[5,5],walls:[[1,0],[2,0],[3,0],[5,0],[4,0],[1,1],[5,1],[0,2],[1,2],[3,2],[5,2],[0,3],[5,3],[6,3],[6,4],[0,4],[2,4],[6,5],[0,5],[2,6],[0,6],[1,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[3,3],[4,4],[3,5]],goals:[[4,1],[4,2],[3,5]],trees:[],xsb:`#########
# ##### #
# #  .# #
### #.# #
##  $ ###
## # $ ##
##  * @##
#########
#########`},{id:38,width:7,height:7,player:[2,5],walls:[[1,0],[2,0],[3,0],[0,0],[4,0],[0,1],[5,1],[4,1],[0,2],[2,2],[5,2],[6,2],[0,3],[6,3],[6,4],[0,4],[3,4],[6,5],[0,5],[2,6],[0,6],[1,6],[3,6],[4,6],[5,6],[6,6]],boxes:[[3,2],[3,3],[3,5],[2,4]],goals:[[1,3],[3,3],[3,5],[1,5]],trees:[],xsb:`#########
######  #
##   ## #
## #$ ###
##. *  ##
## $#  ##
##.@*  ##
#########
#########`},{id:39,width:8,height:7,player:[2,1],walls:[[1,0],[2,0],[3,0],[4,0],[1,1],[4,1],[5,1],[6,1],[7,1],[0,2],[1,2],[7,2],[0,3],[5,3],[7,3],[0,4],[2,4],[7,4],[0,5],[4,5],[5,5],[6,5],[7,5],[0,6],[1,6],[2,6],[3,6],[4,6]],boxes:[[3,3],[2,2],[3,2]],goals:[[4,4],[5,4],[6,4]],trees:[],xsb:`##########
# ####   #
# #@ #####
###$$   ##
##  $ # ##
## # ...##
##   #####
######   #
##########`},{id:40,width:8,height:6,player:[1,1],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[6,0],[5,0],[6,1],[7,1],[5,1],[0,1],[7,2],[0,2],[2,2],[7,3],[0,3],[5,3],[7,4],[0,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[3,1],[2,3],[3,3]],goals:[[3,1],[1,3],[4,3]],trees:[],xsb:`##########
######## #
##@ * ####
## #    ##
##.$$.# ##
##      ##
##########
##########`},{id:41,width:8,height:7,player:[1,2],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[6,0],[5,0],[6,1],[7,1],[0,1],[0,2],[7,2],[4,2],[2,3],[7,3],[0,3],[4,4],[7,4],[0,4],[0,5],[4,5],[7,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6]],boxes:[[2,2],[3,3],[4,3]],goals:[[3,1],[4,1],[1,5]],trees:[],xsb:`##########
######## #
##  .. ###
##@$ #  ##
## #$$  ##
##   #  ##
##.  #  ##
##########
##########`},{id:42,width:8,height:7,player:[5,1],walls:[[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[7,1],[0,2],[1,2],[7,2],[0,3],[7,3],[7,4],[0,4],[4,4],[2,4],[0,5],[5,5],[4,5],[7,5],[6,5],[1,6],[2,6],[3,6],[4,6],[0,6]],boxes:[[4,1],[3,2],[5,2],[4,2]],goals:[[3,1],[3,2],[2,3],[3,5]],trees:[],xsb:`##########
# ###### #
##  .$@###
### *$$ ##
## .    ##
## # #  ##
##  .#####
######   #
##########`},{id:43,width:8,height:6,player:[1,3],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[0,1],[4,1],[6,1],[7,1],[5,1],[0,2],[7,2],[0,3],[7,3],[3,3],[0,4],[7,4],[1,5],[0,5],[2,5],[4,5],[3,5],[6,5],[5,5],[7,5]],boxes:[[1,2],[2,2],[2,3]],goals:[[1,1],[3,1],[2,4]],trees:[],xsb:`##########
######   #
##. .#####
##$$    ##
##@$#   ##
## .    ##
##########
##########`},{id:44,width:8,height:6,player:[1,1],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[5,0],[0,1],[6,1],[5,1],[7,1],[0,2],[3,2],[7,2],[7,3],[0,3],[4,4],[7,4],[0,4],[0,5],[2,5],[4,5],[3,5],[6,5],[5,5],[7,5],[1,5]],boxes:[[2,3],[4,2],[4,3]],goals:[[2,3],[3,3],[2,4]],trees:[],xsb:`##########
#######  #
##@   ####
##  #$  ##
## *.$  ##
## . #  ##
##########
##########`},{id:45,width:7,height:6,player:[5,3],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[5,0],[0,1],[6,1],[5,1],[6,2],[0,2],[6,3],[4,3],[0,3],[0,4],[6,4],[1,5],[0,5],[2,5],[4,5],[3,5],[6,5],[5,5]],boxes:[[3,1],[4,2],[4,4],[1,3]],goals:[[2,1],[5,2],[1,4],[3,4]],trees:[],xsb:`#########
####### #
## .$ ###
##   $.##
##$  #@##
##. .$ ##
#########
#########`},{id:46,width:7,height:7,player:[5,1],walls:[[3,0],[4,0],[5,0],[6,0],[1,1],[2,1],[3,1],[6,1],[0,2],[1,2],[6,2],[0,3],[5,3],[6,3],[0,4],[2,4],[5,4],[0,5],[5,5],[0,6],[1,6],[3,6],[2,6],[5,6],[4,6]],boxes:[[3,2],[4,2],[3,3],[2,5]],goals:[[2,2],[5,2],[4,4],[4,5]],trees:[],xsb:`#########
#   #####
# ### @##
###.$$.##
##  $ ###
## # .# #
## $ .# #
####### #
#########`},{id:47,width:7,height:6,player:[4,1],walls:[[3,0],[4,0],[5,0],[2,0],[1,1],[2,1],[0,1],[6,1],[5,1],[0,2],[6,2],[0,3],[2,3],[6,3],[0,4],[6,4],[6,5],[0,5],[1,5],[3,5],[2,5],[5,5],[4,5]],boxes:[[4,2],[3,2],[3,3]],goals:[[3,1],[5,4],[1,4]],trees:[],xsb:`#########
#  #### #
####.@###
##  $$ ##
## #$  ##
##.   .##
#########
#########`},{id:48,width:8,height:6,player:[1,3],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[5,1],[6,1],[7,1],[7,2],[0,2],[0,3],[3,3],[5,3],[7,3],[7,4],[0,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]],boxes:[[2,2],[2,3],[4,2]],goals:[[3,1],[2,2],[4,4]],trees:[],xsb:`##########
######   #
##  .#####
## * $  ##
##@$# # ##
##   .  ##
##########
##########`},{id:49,width:7,height:7,player:[1,5],walls:[[1,0],[2,0],[3,0],[4,0],[1,1],[6,1],[4,1],[5,1],[0,2],[1,2],[6,2],[0,3],[6,3],[0,4],[2,4],[6,4],[0,5],[4,5],[5,5],[6,5],[2,6],[3,6],[4,6],[0,6],[1,6]],boxes:[[4,2],[2,3],[3,3]],goals:[[3,2],[3,4],[5,4]],trees:[],xsb:`#########
# ####  #
# #  ####
### .$ ##
## $$  ##
## #. .##
##@  ####
######  #
#########`},{id:50,width:7,height:6,player:[1,1],walls:[[1,0],[2,0],[3,0],[4,0],[0,0],[5,0],[0,1],[5,1],[6,1],[0,2],[6,2],[0,3],[6,3],[4,3],[0,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]],boxes:[[2,1],[1,2],[2,2],[3,2]],goals:[[2,1],[1,3],[4,4],[5,4]],trees:[],xsb:`#########
####### #
##@*  ###
##$$$  ##
##.  # ##
##   ..##
#########
#########`}];var F={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var oe=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function je(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function b(e,t,r){return Object.freeze({code:e,path:t,message:r})}function D(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function Ge(e,t,r,o,a){if(!Array.isArray(e))return a.push(b(r,t,`${t} must be a dense array of cell keys.`)),null;let n=[],l=new Set;for(let f=0;f<e.length;f++){let u=`${t}[${f}]`;if(!(f in e)){a.push(b(r,u,`${u} must not be sparse.`));continue}let i=e[f];if(!D(i)||i<0||o!==null&&i>=o){a.push(b("invalid-cell-key",u,`${u} must be inside the board.`));continue}if(l.has(i)){a.push(b("duplicate-cell-key",u,`${u} duplicates cell key ${i}.`));continue}l.add(i),n.push(i)}return n.sort((f,u)=>f-u),n}function pt(e,t){for(let r of e)if(t.has(r))return r;return null}function jt(e,t,r){let o=r%e,a=Math.floor(r/e);return o===0||a===0||o===e-1||a===t-1}function Gt(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function ae(e){let t=[],r=je(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([b("invalid-level","$","Level must be a plain object.")])});let o=je(r.board),a=je(r.state);if(o||t.push(b("invalid-board","$.board","$.board must be a plain object.")),a||t.push(b("invalid-state","$.state","$.state must be a plain object.")),!o||!a)return Object.freeze({ok:!1,issues:Object.freeze(t)});let n=o.width,l=o.height;(!D(n)||n<=0)&&t.push(b("invalid-width","$.board.width","Width must be a positive safe integer.")),(!D(l)||l<=0)&&t.push(b("invalid-height","$.board.height","Height must be a positive safe integer."));let f=null;if(D(n)&&n>0&&D(l)&&l>0){let d=n*l;Number.isSafeInteger(d)?f=d:t.push(b("board-too-large","$.board","Board cell count must be a safe integer."))}let u=Ge(o.walls,"$.board.walls","invalid-walls",f,t),i=Ge(o.goals,"$.board.goals","invalid-goals",f,t),c=Ge(a.boxes,"$.state.boxes","invalid-boxes",f,t),x=a.player;if((!D(x)||x<0||f!==null&&x>=f)&&t.push(b("invalid-player","$.state.player","Player must be inside the board.")),u&&i&&c&&D(n)&&D(l)&&D(x)&&x>=0&&f!==null){let d=new Set(u),g=new Set(c),v=pt(i,d),R=pt(c,d);if(v!==null&&t.push(b("wall-goal-overlap","$.board.goals",`Goal ${v} overlaps a wall.`)),d.has(x)&&t.push(b("wall-player-overlap","$.state.player",`Player ${x} overlaps a wall.`)),R!==null&&t.push(b("wall-box-overlap","$.state.boxes",`Box ${R} overlaps a wall.`)),g.has(x)&&t.push(b("player-box-overlap","$.state.player",`Player ${x} overlaps a box.`)),c.length===0&&t.push(b("no-boxes","$.state.boxes","Level must contain at least one box.")),c.length!==i.length&&t.push(b("box-goal-count-mismatch","$.state.boxes",`Box count ${c.length} must equal goal count ${i.length}.`)),t.length===0){for(let A=0;A<f;A++)if(jt(n,l,A)&&!d.has(A)){t.push(b("open-boundary","$.board.walls",`Boundary cell ${A} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:Gt({width:n,height:l,walls:u,goals:i},{player:x,boxes:c})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function P(e){let t=ae(e);if(!t.ok)throw new oe(t.issues);return t.level}var se=Object.freeze(["up","right","down","left"]),Vt=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function Wt(e){return typeof e=="string"&&se.includes(e)}function xt(e){let t=P(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function mt(e,t,r){let{width:o,height:a}=e.board,n=t%o,l=Math.floor(t/o),[f,u]=Vt[r],i=n+f,c=l+u;return i<0||i>=o||c<0||c>=a?null:i+c*o}function N(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function ct(e){return Object.freeze(e)}function j(e,t){let r=xt(e);if(!Wt(t))return N("invalid-direction",null);let{level:o,walls:a,boxes:n}=r,l=o.state.player,f=mt(o,l,t);if(f===null)return N("outside-board",t);if(a.has(f))return N("wall",t);if(!n.has(f)){let x=P({board:o.board,state:{player:f,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:x,move:ct({kind:"walk",direction:t,playerFrom:l,playerTo:f})})}let u=mt(o,f,t);if(u===null)return N("box-outside-board",t);if(a.has(u))return N("box-wall",t);if(n.has(u))return N("box-box",t);let i=o.state.boxes.map(x=>x===f?u:x),c=P({board:o.board,state:{player:f,boxes:i}});return Object.freeze({ok:!0,level:c,move:ct({kind:"push",direction:t,playerFrom:l,playerTo:f,boxFrom:f,boxTo:u})})}function G(e){let{level:t,goals:r}=xt(e);return t.state.boxes.every(o=>r.has(o))}var ht=[[0,-1],[1,0],[0,1],[-1,0]],Kt=[...ht,[1,-1],[1,1],[-1,1],[-1,-1]];function gt(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,a){for(let n=0;n<t.length;n++){let[l,f]=t[n];a(r+l,o+f,l!==0&&f!==0?Math.SQRT2:1,n)}},distance(r,o,a,n){let l=Math.abs(a-r),f=Math.abs(n-o);return t.length===4?l+f:l+f+(Math.SQRT2-2)*Math.min(l,f)}})}var wt=gt("rect4",ht),bt=gt("rect8",Kt);var w;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(w||(w={}));var Oo=[w.Right,w.Down],Bo=[w.Right,w.Down,w.DownRight,w.DownLeft],Xt=[w.Up,w.Right,w.Down,w.Left],Qt=[w.Up,w.Right,w.Down,w.Left,w.UpRight,w.DownRight,w.DownLeft,w.UpLeft];var Ma=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var Qa=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function O(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function V(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function tr(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function Qe(e){if(typeof e!="string")return V([O("empty-level",1,1,"Level notation must be a string.")]);let t=tr(e);if(t.length===0||t[0]?.length===0)return V([O("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let i=0;i<t.length;i++)t[i].length!==r&&o.push(O("ragged-row",i+1,Math.min(t[i].length,r)+1,`Row ${i+1} has width ${t[i].length}; expected ${r}.`));if(o.length>0)return V(o);let a=[],n=[],l=[],f=-1;for(let i=0;i<t.length;i++)for(let c=0;c<r;c++){let x=t[i][c],d=c+i*r;switch(x){case"#":a.push(d);break;case".":n.push(d);break;case"$":l.push(d);break;case"*":l.push(d),n.push(d);break;case"@":case"+":f!==-1?o.push(O("multiple-players",i+1,c+1,"Level must contain exactly one player.")):f=d,x==="+"&&n.push(d);break;case" ":break;default:o.push(O("unknown-symbol",i+1,c+1,`Unknown Sokoban symbol ${JSON.stringify(x)}.`))}}if(f===-1&&o.push(O("missing-player",1,1,"Level must contain one player.")),o.length>0)return V(o);let u=ae({board:{width:r,height:t.length,walls:a,goals:n},state:{player:f,boxes:l}});return u.ok?Object.freeze({ok:!0,level:u.level}):V(u.issues.map(i=>O(i.code,1,1,i.message)))}var W=class{constructor(t){let r=Qe(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return G(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.solved)return{ok:!1,code:"inactive"};let r=j(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.history.length?(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0):!1}redo(){return this.future.length?(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0):!1}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[]}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=l=>{if(!Number.isSafeInteger(l.moves)||l.moves<0||!Number.isSafeInteger(l.pushes)||l.pushes<0||l.pushes>l.moves||!["up","down","left","right"].includes(l.facing))throw Error("Invalid saved counters");return{level:P({board:this.initial.board,state:l.state}),moves:l.moves,pushes:l.pushes,facing:l.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),a=t.history.map(r),n=t.future.map(r);this.restore(o),this.history=a,this.future=n}};function K(e,t){let r=e[t]?.moves;return Number.isSafeInteger(r)&&r>=0}function le(e,t){return t.find(r=>!K(e,r.id))?.id}function ne(e,t,r){return t.some(o=>o.id===r)&&(K(e,r)||r===le(e,t))}function X(e,t,r,o){let a=t.filter(l=>ne(e,t,l.id)),n=a.findIndex(l=>l.id===r);return n<0?void 0:a[n+o]?.id}var Je={1:13,2:34,3:23,4:27,5:33,6:79,7:89,8:25,9:37,10:59,11:32,12:45,13:26,14:33,15:28,16:34,17:38,18:37,19:30,20:31,21:20,22:31,23:45,24:48,25:170,26:32,27:58,28:7,29:62,30:58,31:54,32:26,33:58,34:65,35:37,36:43,37:37,38:48,39:66,40:53,41:60,42:53,43:75,44:75,45:40,46:25,47:28,48:59,49:48,50:63};var vt=["#f3aa19","#ee5e63","#a062d5","#278fe0","#2baf78","#ed7d32"];var kt=window.matchMedia("(prefers-reduced-motion: reduce)"),B,Ye;function Mt(){return vt[Math.floor(Math.random()*vt.length)]}function k(){B&&(cancelAnimationFrame(Ye),B.remove(),B=void 0,document.body.classList.remove("win-celebrating"),window.removeEventListener("resize",k),document.removeEventListener("visibilitychange",k))}function At(){if(k(),kt.matches||document.hidden)return;let e=window.innerWidth,t=window.innerHeight,r=Math.min(window.devicePixelRatio||1,1.5,2560/Math.max(e,t)),o=document.createElement("canvas");o.width=Math.ceil(e*r),o.height=Math.ceil(t*r);let a=o.getContext("2d");if(!a)return;let n=Math.max(.65,Math.min(1.35,t/720)),l=[];for(let c of[-1,1])for(let x=0;x<38;x++)l.push({x:c===1?e*.06:e*.94,y:t*.86,vx:c*e*(.13+Math.random()*.36),vy:-t*(.55+Math.random()*.64),size:(6+Math.random()*7)*n,angle:Math.random()*Math.PI,spin:c*(2+Math.random()*8),color:Mt(),delay:Math.random()*.18});let f=[];for(let[c,x,d]of[[.23,.25,.08],[.77,.23,.3],[.5,.15,.55]]){let g=Mt();for(let v=0;v<32;v++){let R=(v+Math.random()*.65)*Math.PI/16,A=(75+Math.random()*110)*n;f.push({x:c*e,y:x*t,delay:d,life:.68+Math.random()*.55,vx:Math.cos(R)*A,vy:Math.sin(R)*A,color:v%5===0?"#ffca52":g})}}B=o,B.className="victory-canvas",B.setAttribute("aria-hidden","true"),document.body.append(B),document.body.classList.add("win-celebrating"),window.addEventListener("resize",k),document.addEventListener("visibilitychange",k),a.scale(r,r),a.lineCap="round";let u=performance.now();function i(c){let x=(c-u)/1e3;if(x>=2.35||kt.matches){k();return}a.clearRect(0,0,e,t);for(let d of f){let g=x-d.delay;if(g<0||g>=d.life)continue;let v=g*(1-.28*g),R=d.x+d.vx*v,A=d.y+d.vy*v+38*n*g*g,nt=Math.min(.105,g);a.globalAlpha=.94*(1-g/d.life),a.strokeStyle=d.color,a.lineWidth=2.6*n,a.beginPath(),a.moveTo(R-d.vx*nt,A-(d.vy+76*n*g)*nt),a.lineTo(R,A),a.stroke()}for(let d of l){let g=x-d.delay;if(g<0)continue;let v=d.x+d.vx*(1-Math.exp(-1.6*g))/1.6,R=d.y+d.vy*g+t*.64*g*g;a.globalAlpha=Math.min(.95,(2.35-x)*2.4),a.fillStyle=d.color,a.save(),a.translate(v,R),a.rotate(d.angle+d.spin*g),a.scale(.28+.72*Math.abs(Math.cos(d.angle+g*7)),1),a.fillRect(-d.size/2,-d.size/3,d.size,d.size*.66),a.restore()}Ye=requestAnimationFrame(i)}Ye=requestAnimationFrame(i)}var ue={salt:"tGAhgq8jv+M9IqI3G/aOUA==",iterations:6e5,paths:{1:"wkQW5nYBMbUtbWiZWXXP6CfrdC0iLkBOaCUbyes7RaQJ+gy/SprIiC8=",2:"ex9sttYOiAR0qxPR3cjCEmKKqhEfTWXwV+vUew6cdEW68pFbXZ8k6sx9PAdoFimHqaYl3hQ9sojV+5wg/Tc=",3:"I+kP37F3fjVJJ6HTjrgAhAU4oyf3kdAGb6WvETpC2XzWxfEDGVF9qK+nGqIxz0GCHyM7",4:"HaCPMonESjHgoNds1SD6BD24jRPmaspSJiVMCBcB0OR5qxqFGW6nSVBq4+qTMDAsrb7MXSjfzw==",5:"bftDD7qCgYsgB9rpmVJyWaIdMs+ffz9PGYr8VNXG8fLsgR21gjAKQKJ5QrfcrOLjOsaNeDJmE2ksQ5tv6A==",6:"/8cNfqB2FEXJ518lXZbOb70E6JP5Au/Fa8JJzY4tt8ZiK2EQBAFtMFnFN4oe6qJdYFMyv8k7QgiKwgqkwQFevnEQjuqhwiNAkyYbkZbkJ7Mv00DxnZ1xMn4qzSN3eRvv5GsTSNoIIRZifDE=",7:"2cHTmgE7UYevFrrJXc3Hw+zd4y/i322XWC+SCWWkSM6/9iVHwNkAiC38GKdjubbCybYuPXL0nKRfNUHV9b9LEyEq42D98hf9+Tn5rFcuNIbuBP0d6sCdE7d8aL/OANaIFuJ+bQ9pKuMLYXoeONupDLD1g59Q",8:"HfPeHrdUnLL1UbeTzy9LYbeQXHw05sX10PO0rDfO8DuccnozZdkvHzBaEanh7eXgw2OVOwo=",9:"O3V3X7fJ3IfKDVOoe1NSKpazPxfH2NZ7IYenKIHP0n0jbA15dSO26+858Ti023OvCjp+DVvvvwOrNMp2ulKDFfY=",10:"91RvXPMlrzTRJO58Xvm5fEVizgPJNSd7bwJGld5r/2YNjKPUasIOQ9YonnAY0n8LMuRnZiKf6tnHlcIcwEhNpYLbKnocpb00obPKx2rdti2mo8a0rFGR",11:"74SNrw+sSC0Qmat73fjYjGDlQiRmbPUB4ZLR8FbSJ/1vhwW5iKhsFwcMyZB5dVUNgXbLpwXfBfs7S1T7",12:"G/o4yikV7fJCS7O+ZyXiEn7Cwh5k6sceN/UnIEOmasdIwLiJlU1f/JKgtE9TShyHGHzw8Gr7EoDsg1kn9590j6BWjx05kiWV5A==",13:"ngR5dk799IvLgKZ/OwAcIp2PgQ/dHLJx+57tCXu8WxEbEY6CTrh8zg0EIW4EtzOFEv3fWavR",14:"pDRlT1Dqs+TCjx1H5+Raks9B9kd6TFWR1LQyC5YjQEAaLDe2MIf1YEScOOeNP7JAyPCXD4KHcWXqFcpjdg==",15:"wiUweD3Q8y++mgV1mtp/BAlpxsldUuosz2cYSfhObVyZtIHrNKTLc0AWDlfLIL38Ohz8vn5YN7o=",16:"lyDRDNLXMvefbwqCd+PwvwiNpMYzeFqV2n4728RZ3ONb4rmIE7hC6SHs0l+h7mfuz5cp/xdQFQ29X3rnjfI=",17:"C0Oda3LQd0I7Rba3RtUzb28ryay/zG39vv37tF+l650aoCKmroXrgWBf2i5RDPNt3sQJ+I8dWDqOPaUcY+8jQ4O/",18:"idi+amQHeuM7FHVTeiQG6OJJi6Suss79LZXLrrT3PGUPdsHMsJnIIzJ7Aneb4TY7irM6CA//cTSueHMtRcKvA+U=",19:"79PifTsOGTd7RRw0ohegduzl45S4feTG2rEXvK6gRvfDXv6nyK+HFvMaZlBN2aid7oKTP+Xd+b8XAg==",20:"N5ZyTmue/T0ywiiZ6EQgLHAWz8BNPG2fPBzIkXcx3ZGp+i9MkN62u/xx2F+ArNlpDwTcXaotc0VFCvM=",21:"gln6irijKh7EKsva+pbr6kwOpDzR/pez7C18qUdD3noO0EYv8uPl2uLANJG3SOqf",22:"9FFi5cHOkAgaUMsoF4FPdAzWkSHjUEsAW4PboUNIpJi558GAdxL2WVwQL2e0In+4nR686u6mAXMJl3A=",23:"smKeiyr0Hy2dCh21IYQbwjnsX1OFbGBgKJXw1pqA6oS5t5TQTHmNq7vEdILIlpNAXjJPTljPnbpNyYfgY6Chky1Ps0bYkfA6IA==",24:"7bGCjBBM/ASph4Knf2Q9jyalmu3y0H4J/Um7aTtlB3gD5u0Dtq/u6G+kFaskgBQcYPy200TQvfEUqqYZvjtSBNnukU5YE+hie8Huzg==",25:"ftTzbpq4ZKvNGst2Uvudg2wFutl7rTzJIwLaF2hBQx18cfjEkh8YuQBTPYwGUdzyEFOywSwReDuE7L3FBwLb4bjVblHvikcr1x9hRvYtXffNk+f58LTDLBnfrM9iS2vKgEEQdabgCR+4jzDqqorUAD+hlY8feCAI/W2mDf9InXsb28jo6lwVgKAFO7VmoDSrtWruzaalGlCI8zyb+u71xLSFosd2YZS0XidBegJ02kKfPxc+fDSd4FD15rcyItO1GD6A40t9",26:"5KWovA/XsdDh/EbOp4Q1GHSmp8sgb0/o9c5yWEhith6XwOc2ZaXDZSGdfurPnuikeXq5MJYVlB1xA1Jj",27:"hjYM8I6Md4S/jnG8/WwR+eSizWT+hswP/SgURKunZFJN8S0T7WJU04dLDmLcZqFAD4Bav9DIFKAY1mWaP7gF4WBC0GrfmHy32iBzjdHDxAz4ybNGVWA=",28:"tb45PD6m5QK8AwVizosiDSL3nO6IgmG2db3RkoenKqm8bRM=",29:"j8bPSvP69GIH3ltnC4Q1SlyKAZswreU9MpZAsiY64PlMPKIs/fu/6WG0AH1S/aLmrvOFnhWQFFdPhgkyJwI21uXR44uKiou9dvDo3I9+WctPzmYrVjcWHvCN",30:"QjffZTa/L1BHtuKg3G1Ofruvyr5OuCGyV2KjqUoAm09OQGrYCmbhLKwMj/IU/7BrMBr9d1aqAHM2JLJTOeOfITLe05xO+VIiJRnLWa7vn3p7cjdD2NQ=",31:"Qi7FVL4D0JgPQO5Hn8vQvMUSyXtBpvDlff71Lmj6ScxF43Yy3jwcnGFw+7hSc9eqMSj+OgJVSTd8IJmYz0wqUBYhMj6iBWiEQWB1qg4MNbFxuA==",32:"Xx6m/medmNRVWtaFntHFsGy9uO/VLFR85y6JnHl+p0zxyqPYqpWoTaUuoOPFkgDMFLg7so6E",33:"sNqdrqEiBNeF8U3O0GhCBcm2qPB+WWF9dvExcR49lk0YAwp2In+VpLimuMkh+MsURDfcQZ7V6GowGCa4Qd35HCP6Vfobwr58Demz5DflUQzDF+wMd1M=",34:"/44kRXrT9QIN14tfIXErERAsywYaCqrAoQ+4Zzem222ak2RO8vqieKqM6zQdff5FuI2+gcY3WOUhhRPIOWrKoEnNSV9KyqlhNpJ51oef6fTjQ5xnWX6d9CQxJOA4",35:"UfG9Z3PFwPJ54WBdM71uKtVeEOJ63+LLDppdBXJfs6rA1lpGW4lDqCvc6nyB9ImbZ/xQxaVFMeW+yFqORCK3/Rg=",36:"5yYCYAReXo0ElEQif3RjLs+ENLgTSrvBZWtBOIvyzJ1q9UVqt0Rgrtxyc9pOZ4WGEEvMetfCsW4moZEnGAoRoj8Z5Wl5DVk=",37:"omCwzR16pjFKyMQmqPt7KWKx4TH1cJ/8PHP+ScFiHKZzZssvgZ+y+q9zC09s8PIlBKrbrtlV1oC7sD7WyByDLEk=",38:"TjtD4a/CrmGlNcy2mYARJuKVAtJseAYBeDUOBUXzPfEWHtlrCrt3Sbkczx8gPLm75imlcLc5+ctfhXoOMSU+0Ghw/Syic8/fUzJFeg==",39:"k2UbOBWi4x9OrgZPeEpYoI/m0r6N4NcM9HpBReUoNOxNfc0GwBH87CSfAh77X0A48Gh7UZuPyow78wU1v7eqIalmBmP2mG8QqZ7CWEglbMDJWnhNJanS0aZzfcQdZw==",40:"zSs1p+fyscv5+p8+F/ovbT/k1fW5XJpGJ93rRtMIMhrKeR5HKF9TdBQiprLDy0THblxfqMk5NFvbd+hGnad1ZFv605YVzFpMGnkl9S9TAiK8",41:"oIKTovhb23nl7JaIaA1sZ0tAUjvJjwOd03Hfkucl3AoAnXuv4eIHz+J4/VtEmSU29R6J4IC8W6oCZRySiQvleDhB3R0+yB3fg4+EyeQAHNjFwM1T9zdV3g==",42:"Q0EIrKf3ynYbZ+fHl1F0G2ryRUirk7c64XjvsLx7wPmwkczENf18v7Q4yi2Ve+WnhgifUl5ZsAEwLnGHYdGcww2mQq9iQc2XNa1SDv9+GF6K",43:"5wuP6RQ75Qs28Ql7eS+cYrpGrYidjFm2Z6Or59ipFrmjQHrNLCZWg3/y2eheCHwvQ9Fp7hUCsQI+tr931BuLXFC2TBMSm1U34kKHkClhzPrpLPh/087HY93BD113erXPuG3rgj3ecw==",44:"aDdgpWOMQmT2Ufdq/PERnYfTGBtp9HGt9CP0b2lDcXBiArW14tFK1YZ5z4Cdjpt+hXe90HnE6a5SpFcmV8Y8VXff8StBp3EUZO6+elnPZsUIDPvryyTq5V51CD2m1ZmNh/DXlKwETg==",45:"kx6RZRfQjiVI1VrkGPAMjzVMuC34yHSvEvEPnV6yqyEiVtpMBDSXHskDWdnrkM5zTt4TxJw5UsPCXitu94jIVI/6BTA=",46:"B/qF4XaKQDGT2Un33FynOGyZA8smNEiD+aGVdOzXF9yxggIOSM9wbulVoWPlDZtbeczTo2Y=",47:"6grObnuGtFTS92X1hvl+vH5RiMtopOiH06jAcg6Mdd+ulfXtC+1JKwD9MccvZeqEHJHqFMBnE/Q=",48:"Aa8FugFATPYVNHrIWXNXChvLD3DO3PMlx0IiEhLg+HQohqd7EkuIUs6RAfwcmKWSN+5MMEV/Bpj2PagqWRAi1pazZNmDKOoy0gf6sCRDRL1GoxZzpq17",49:"VbDzrf6rpa5bnHyncRYxnow9l3SAKVDtuUH4Ypd0LYvI1zp5KL9DEyPMefH6lGdIgFShGJCPxRt1hMaHpc8QvV9xsrrabWdL9DvaNA==",50:"itMTDP6twK4EBgKnF4gdrxM6ntwDVzP3v4msP9XGULsowQ0lwpb8FHzcNZFdj2acVR1mAQ2iIco2zTQKbjnvgqwh1LUOxKJ+llcsKc7ZD36243z6KjTLmquukg=="}};var rr={u:"up",r:"right",d:"down",l:"left"},Pt=e=>Uint8Array.from(atob(e),t=>t.charCodeAt(0));async function Rt(e,t){let r=window.crypto.subtle,o=new TextEncoder,a=await r.importKey("raw",o.encode(t),"PBKDF2",!1,["deriveKey"]),n=await r.deriveKey({name:"PBKDF2",salt:Pt(ue.salt),iterations:ue.iterations,hash:"SHA-256"},a,{name:"AES-GCM",length:256},!1,["decrypt"]),l=Pt(ue.paths[e]),f=await r.decrypt({name:"AES-GCM",iv:l.slice(0,12),additionalData:o.encode(String(e))},n,l.slice(12));return Array.from(new TextDecoder().decode(f),u=>rr[u])}var or={ArrowUp:Re,ArrowDown:Me,ArrowLeft:Ae,ArrowRight:Pe,ChevronLeft:De,ChevronRight:Te,Undo2:Ne,Redo2:$e,RotateCcw:Ie,Grid2x2:re,VolumeX:Ue,Volume2:ze,Maximize:Be,Minimize:qe,Footprints:Ee,Box:Le,CircleCheck:te,Check:Fe,LockKeyhole:Oe,X:He},s=e=>document.getElementById(e),H=y.length===1,me=H?"sokoban-first-level-v1":"sokoban-web-v1",ce=window.matchMedia("(max-width:680px)"),S={},C=!0,ie,et=!0,U=0,q=0,de=!1;function tt(e){try{return JSON.parse(e)||{}}catch{return{}}}function rt(e){return Number.isSafeInteger(e.currentVersion)&&e.currentVersion>0?e.currentVersion:0}try{let e=tt(localStorage.getItem(me));e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(S=e.records),C=e.muted!==!1,ie=e.current,U=rt(e)}catch{et=!1}var m,M,z,Y=0,Ze,Lt,h,Q=0,E=new Map,ot={push:new Audio(F.push),win:new Audio(F.win)},Dt=H?{game:new Audio(F.gameMusic)}:{game:new Audio(F.gameMusic),catalog:new Audio(F.catalogMusic)};for(let e of Object.values(Dt))e.loop=!0,e.volume=.18,e.preload="none";ot.push.volume=.16;ot.win.volume=.32;function at(e){if(C)return;let t=ot[e];t.currentTime=0,t.play().catch(()=>{})}function xe(){let e=he()?"catalog":"game";for(let[t,r]of Object.entries(Dt))C||document.hidden||m?.solved||t!==e?r.pause():r.play().catch(()=>{})}function he(){return!H&&ce.matches&&s("catalog").classList.contains("open")}function I(e){e=e&&!H&&ce.matches,s("catalog").classList.toggle("open",e),s("catalog-toggle").setAttribute("aria-expanded",String(e)),e&&h?.playing&&Ce(),xe()}function Tt(e,t){let r=S[e];return J(e)&&!(t.moves<r.moves||t.moves===r.moves&&t.pushes<(r.pushes??1/0))?!1:(S[e]=t,!0)}function Et(e){let t=!1;if(e)for(let{id:r}of y)K(e,r)&&Tt(r,e[r])&&(t=!0);t&&we()}function Z(){if(clearTimeout(Ze),!(!q&&!de))try{let e=tt(localStorage.getItem(me)),t=rt(e),r=q>=t&&q>0;Et(e.records);let o=r?q:t;localStorage.setItem(me,JSON.stringify({records:S,muted:de?C:e.muted!==!1,current:r?m.serialize():e.current,currentVersion:o})),U=Math.max(U,o),q=0,de=!1}catch{et=!1}}function _(){q=Math.max(Date.now(),U+1,q+1),clearTimeout(Ze),Ze=setTimeout(Z,180)}function L(e){clearTimeout(Lt),s("status").textContent=e,e&&(Lt=setTimeout(()=>s("status").textContent="",2600))}function ge(){dt({icons:or})}function st(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),ge()}function J(e){return K(S,e)}function we(){let e=y.filter(o=>J(o.id)).length;s("completed-count").textContent=e;let t=Math.round(e/y.length*100);s("completion-percent").textContent=`${t}%`,s("completion-bar").style.width=`${t}%`,document.querySelectorAll("[data-page]").forEach(o=>o.setAttribute("aria-selected",String(Number(o.dataset.page)===Y)));let r=document.createDocumentFragment();for(let o of y.slice(Y*25,Y*25+25)){let a=document.createElement("button"),n=!ne(S,y,o.id);if(a.className=`level-cell${J(o.id)?" completed":""}${m.id===o.id?" active":""}`,a.textContent=String(o.id).padStart(2,"0"),a.disabled=n,n){let l=document.createElement("i");l.dataset.lucide="lock-keyhole",l.className="lock-icon",a.append(l),a.title=`\u5148\u5B8C\u6210\u7B2C ${le(S,y)} \u5173`}a.setAttribute("aria-label",`\u7B2C ${o.id} \u5173${n?"\uFF0C\u672A\u89E3\u9501":J(o.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),a.setAttribute("aria-current",m.id===o.id?"true":"false"),a.addEventListener("click",()=>ee(o.id)),r.append(a)}s("level-grid").replaceChildren(r),s("personal-best").textContent=J(m.id)?`\u672C\u5173\u6700\u4F73 ${S[m.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173",s("previous").disabled=X(S,y,m.id,-1)===void 0,s("next").disabled=X(S,y,m.id,1)===void 0,ge()}function pe(e){let t=document.createElement("img");return t.src=F[e],t.alt="",t.draggable=!1,t}function _e(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}function be(e=m){let t=s("board"),r=e.level.board.width,o=new Set(e.level.board.walls),a=new Set(e.level.board.goals),n=document.createDocumentFragment();for(let l=0;l<M.height;l++)for(let f=0;f<M.width;f++){let u=(l+1)*r+f+1,i=document.createElement("div");if(i.className=`tile${o.has(u)?" wall":a.has(u)?" goal":""}`,_e(i,f,l),i.append(pe(o.has(u)?"wall":"floor")),a.has(u)){let c=pe("goal");c.className="goal-image",i.append(c)}n.append(i)}z=document.createElement("div"),z.className="piece player",z.append(pe("playerDown")),n.append(z),t.replaceChildren(n),E.clear(),ft()}function ft(){if(!M)return;let e=s("board-stage"),t=ce.matches;if(t){let a=e.getBoundingClientRect().top+window.scrollY,n=document.querySelector(".bottom-controls").offsetHeight,l=(e.clientWidth-24)*M.height/M.width+24,f=window.innerHeight-a-n-24,u=Math.ceil(Math.max(160,Math.min(l,f)));e.style.height!==`${u}px`&&(e.style.height=`${u}px`)}else e.style.height="";let r=Math.max(1,Math.floor(Math.min((e.clientWidth-(t?24:32))/M.width,(e.clientHeight-(t?24:36))/M.height,t?66:96))),o=s("board");o.style.setProperty("--cell",`${r}px`),o.style.width=`${r*M.width}px`,o.style.height=`${r*M.height}px`}function T(e,t=m){let r=t.level.board.width,o=s("board"),a=new Set(t.level.board.goals);if(e?.kind==="push"){let f=E.get(e.boxFrom);f&&(E.delete(e.boxFrom),E.set(e.boxTo,f))}let n=new Set(t.level.state.boxes);for(let[f,u]of E)n.has(f)||(u.remove(),E.delete(f));for(let f of n){let u=E.get(f);u||(u=document.createElement("div"),u.className="piece crate",u.append(pe(a.has(f)?"boxGoal":"box")),o.append(u),E.set(f,u)),_e(u,f%r-1,Math.floor(f/r)-1);let i=F[a.has(f)?"boxGoal":"box"];u.firstChild.getAttribute("src")!==i&&(u.firstChild.src=i)}let l=t.level.state.player;_e(z,l%r-1,Math.floor(l/r)-1),z.firstChild.src=F[`player${t.facing[0].toUpperCase()+t.facing.slice(1)}`],s("moves").textContent=t.moves,s("pushes").textContent=t.pushes,s("goals").textContent=`${t.onGoals} / ${n.size}`,s("board").setAttribute("aria-label",`\u7B2C ${t.id} \u5173\uFF0C${t.moves} \u6B65\uFF0C${t.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${n.size} \u4E2A`),t===m&&(s("undo").disabled=!m.history.length,s("redo").disabled=!m.future.length,document.querySelectorAll("[data-direction]").forEach(f=>f.disabled=m.solved),xe())}function ee(e,t,r=!0){if(!ne(S,y,e)){if(m){L("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501");return}e=le(S,y)||y[0].id,t=void 0}let o=y.find(a=>a.id===e);if(ve(!1),M=o,m=new W(o),t)try{m.resume(t)}catch{L("\u5B58\u6863\u5DF2\u91CD\u7F6E")}Y=Math.floor((o.id-1)/25),I(!1),k(),s("success").open&&s("success").close(),s("level-number").textContent=String(o.id).padStart(2,"0"),s("optimal-moves").textContent=Je[o.id],be(),T(),we(),r&&_()}function Ot(e=!1){Tt(m.id,{moves:m.moves,pushes:m.pushes}),Z(),we(),at("win"),H?e&&L("\u5168\u90E8\u5F52\u4F4D\uFF01"):(s("success-stats").textContent=`\u7B2C ${String(m.id).padStart(2,"0")} \u5173 \xB7 ${m.moves} \u6B65 \xB7 ${m.pushes} \u6B21\u63A8\u52A8`,s("success-next").innerHTML=m.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',ge(),s("success").showModal()),e&&At()}function lt(e){if(h||s("solution-lock").open||s("success").open||he())return;let t=m.move(e);t.ok&&(L(""),T(t.move),_(),m.solved?Ot(!0):t.move.kind==="push"&&at("push"))}function Bt(){h||m.undo()&&(k(),L(""),T(),_())}function qt(){h||m.redo()&&(T(),_(),m.solved&&Ot())}function $t(e){let t=s("solution-controls");t.hidden=!e,t.parentElement.classList.toggle("is-demonstrating",e),document.querySelector(".tools").hidden=e,document.querySelector(".dpad").hidden=e,s("show-solution").disabled=e}function ye(){let{view:e,steps:t,playing:r}=h,o=e.moves===t.length;s("solution-progress").textContent=`${o?"\u6F14\u793A\u5B8C\u6210":"\u6700\u4F18\u89E3\u6F14\u793A"} \xB7 ${e.moves} / ${t.length} \u6B65`,s("solution-play").textContent=r?"\u6682\u505C\u6F14\u793A":o?"\u91CD\u64AD":"\u7EE7\u7EED\u6F14\u793A",s("solution-step").disabled=o}function Se(){h.timer=setTimeout(It,Number(s("solution-speed").value))}function Ce(){clearTimeout(h.timer),h.playing=!1,ye()}function It(){let{view:e,steps:t}=h;if(e.moves>=t.length)return;let r=e.move(t[e.moves]);if(!r.ok){ve(),L("\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF");return}T(r.move,e),e.moves===t.length&&(h.playing=!1),ye(),h.playing&&Se()}function ve(e=!0){h&&(clearTimeout(h.timer),h=void 0,$t(!1),e&&(be(),T(),s("show-solution").focus()))}s("show-solution").addEventListener("click",()=>{Q++,s("solution-form").reset(),s("solution-error").textContent="",s("solution-unlock").disabled=!1,s("solution-lock").showModal()});s("solution-cancel").addEventListener("click",()=>s("solution-lock").close());s("solution-form").addEventListener("submit",async e=>{e.preventDefault();let t=s("solution-lock"),r=s("solution-password"),o=s("solution-error"),a=s("solution-unlock");if(a.disabled)return;if(!window.crypto||!window.crypto.subtle){o.textContent="\u8BF7\u901A\u8FC7 HTTPS \u6216\u672C\u5730\u6587\u4EF6\u6253\u5F00\u8BFE\u4EF6\u3002";return}let n=++Q,l=M;a.disabled=!0,o.textContent="\u6B63\u5728\u9A8C\u8BC1\u2026";let f=r.value;r.value="";let u;try{u=await Rt(l.id,f)}catch{n===Q&&t.open&&(o.textContent="\u5BC6\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u8BD5\u3002",r.focus());return}finally{n===Q&&(a.disabled=!1)}if(!(n!==Q||!t.open||l!==M)){if(u.length!==Je[l.id]||u.some(i=>!i)){o.textContent="\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF\u3002";return}t.close(),I(!1),k(),L(""),h={view:new W(l),steps:u,playing:!0},$t(!0),be(h.view),T(void 0,h.view),ye(),s("solution-play").focus(),Se()}});s("solution-play").addEventListener("click",()=>{if(h.playing){Ce();return}let{view:e,steps:t}=h;e.moves===t.length&&(e.restart(),be(e),T(void 0,e)),h.playing=!0,ye(),Se()});s("solution-step").addEventListener("click",()=>{Ce(),It()});s("solution-speed").addEventListener("change",()=>{h.playing&&(clearTimeout(h.timer),Se())});s("solution-exit").addEventListener("click",()=>ve());s("undo").addEventListener("click",Bt);s("redo").addEventListener("click",qt);s("restart").addEventListener("click",()=>{h||(k(),m.restart(),L(""),T(),_())});s("previous").addEventListener("click",()=>ee(X(S,y,m.id,-1)));s("next").addEventListener("click",()=>ee(X(S,y,m.id,1)));s("success").addEventListener("close",()=>{s("success").open||k()});s("success-close").addEventListener("click",()=>s("success").close());s("success-next").addEventListener("click",()=>{H?(s("success").close(),s("restart").click()):m.id<50?ee(m.id+1):(s("success").close(),I(!0))});s("sound").addEventListener("click",()=>{C=!C,de=!0,s("sound").setAttribute("aria-pressed",String(!C)),st(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),C||at("push"),xe(),Z()});s("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{L("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>st(s("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));s("catalog-toggle").setAttribute("aria-expanded","false");s("catalog-toggle").addEventListener("click",()=>I(!he()));s("catalog-close").addEventListener("click",()=>I(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{Y=Number(e.dataset.page),we()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>lt(e.dataset.direction)));var Ft={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||s("success").open||s("solution-lock").open)return;if(he()){e.key==="Escape"&&I(!1);return}if(h){e.key==="Escape"&&ve();return}let t=e.key.length===1?e.key.toLowerCase():e.key;Ft[t]?(e.preventDefault(),lt(Ft[t])):t==="z"?(e.preventDefault(),Bt()):t==="y"?(e.preventDefault(),qt()):t==="r"&&!e.repeat&&(e.preventDefault(),s("restart").click())});var $;s("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||h||m.solved||($={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&s("board-stage").setPointerCapture(e.pointerId))});s("board-stage").addEventListener("pointerup",e=>{if(!$||$.id!==e.pointerId)return;let t=e.clientX-$.x,r=e.clientY-$.y;$=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&lt(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});s("board-stage").addEventListener("pointercancel",()=>$=null);window.addEventListener("pagehide",Z);document.addEventListener("visibilitychange",()=>{document.hidden&&(h&&Ce(),Z()),xe()});window.addEventListener("storage",e=>{if(e.key!==me||e.storageArea!==localStorage)return;let t=tt(e.newValue);U=Math.max(U,rt(t)),Et(t.records)});new ResizeObserver(ft).observe(s("board-stage"));window.addEventListener("resize",()=>{!ce.matches&&s("catalog").classList.contains("open")&&I(!1),ft()});st(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");s("sound").setAttribute("aria-pressed",String(!C));ee(Number.isInteger(ie?.id)?ie.id:1,ie,!1);et||L("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");ge();})();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/arrow-down.js:
lucide/dist/esm/icons/arrow-left.js:
lucide/dist/esm/icons/arrow-right.js:
lucide/dist/esm/icons/arrow-up.js:
lucide/dist/esm/icons/box.js:
lucide/dist/esm/icons/check.js:
lucide/dist/esm/icons/chevron-left.js:
lucide/dist/esm/icons/chevron-right.js:
lucide/dist/esm/icons/circle-check.js:
lucide/dist/esm/icons/footprints.js:
lucide/dist/esm/icons/grid-2x2.js:
lucide/dist/esm/icons/lock-keyhole.js:
lucide/dist/esm/icons/maximize.js:
lucide/dist/esm/icons/minimize.js:
lucide/dist/esm/icons/redo-2.js:
lucide/dist/esm/icons/rotate-ccw.js:
lucide/dist/esm/icons/undo-2.js:
lucide/dist/esm/icons/volume-2.js:
lucide/dist/esm/icons/volume-x.js:
lucide/dist/esm/icons/x.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
