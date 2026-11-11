(()=>{var ut=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),r.length&&r.forEach(a=>{let n=ut(...a);o.appendChild(n)}),o},it=([e,t,r])=>ut(e,t,r);var zt=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),Nt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",Ut=e=>e.flatMap(Nt).map(r=>r.trim()).filter(Boolean).filter((r,o,a)=>a.indexOf(r)===o).join(" "),Ht=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),ke=(e,{nameAttr:t,icons:r,attrs:o})=>{let a=e.getAttribute(t);if(a==null)return;let n=Ht(a),l=r[n];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let f=zt(e),[u,i,x]=l,c={...i,"data-lucide":a,...o,...f},d=Ut(["lucide",`lucide-${a}`,f,o]);d&&Object.assign(c,{class:d});let g=it([u,c,x]);return e.parentNode?.replaceChild(g,e)};var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Me=["svg",p,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var Ae=["svg",p,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var Pe=["svg",p,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var Re=["svg",p,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var Le=["svg",p,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var Fe=["svg",p,[["path",{d:"M20 6 9 17l-5-5"}]]];var Te=["svg",p,[["path",{d:"m15 18-6-6 6-6"}]]];var De=["svg",p,[["path",{d:"m9 18 6-6-6-6"}]]];var te=["svg",p,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var Oe=["svg",p,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var re=["svg",p,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var Be=["svg",p,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var Ee=["svg",p,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var qe=["svg",p,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var $e=["svg",p,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var Ie=["svg",p,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var ze=["svg",p,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var Ne=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var Ue=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var He=["svg",p,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var dt=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
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
#########`}];var F={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var oe=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function je(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function b(e,t,r){return Object.freeze({code:e,path:t,message:r})}function T(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function Ve(e,t,r,o,a){if(!Array.isArray(e))return a.push(b(r,t,`${t} must be a dense array of cell keys.`)),null;let n=[],l=new Set;for(let f=0;f<e.length;f++){let u=`${t}[${f}]`;if(!(f in e)){a.push(b(r,u,`${u} must not be sparse.`));continue}let i=e[f];if(!T(i)||i<0||o!==null&&i>=o){a.push(b("invalid-cell-key",u,`${u} must be inside the board.`));continue}if(l.has(i)){a.push(b("duplicate-cell-key",u,`${u} duplicates cell key ${i}.`));continue}l.add(i),n.push(i)}return n.sort((f,u)=>f-u),n}function pt(e,t){for(let r of e)if(t.has(r))return r;return null}function jt(e,t,r){let o=r%e,a=Math.floor(r/e);return o===0||a===0||o===e-1||a===t-1}function Vt(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function ae(e){let t=[],r=je(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([b("invalid-level","$","Level must be a plain object.")])});let o=je(r.board),a=je(r.state);if(o||t.push(b("invalid-board","$.board","$.board must be a plain object.")),a||t.push(b("invalid-state","$.state","$.state must be a plain object.")),!o||!a)return Object.freeze({ok:!1,issues:Object.freeze(t)});let n=o.width,l=o.height;(!T(n)||n<=0)&&t.push(b("invalid-width","$.board.width","Width must be a positive safe integer.")),(!T(l)||l<=0)&&t.push(b("invalid-height","$.board.height","Height must be a positive safe integer."));let f=null;if(T(n)&&n>0&&T(l)&&l>0){let d=n*l;Number.isSafeInteger(d)?f=d:t.push(b("board-too-large","$.board","Board cell count must be a safe integer."))}let u=Ve(o.walls,"$.board.walls","invalid-walls",f,t),i=Ve(o.goals,"$.board.goals","invalid-goals",f,t),x=Ve(a.boxes,"$.state.boxes","invalid-boxes",f,t),c=a.player;if((!T(c)||c<0||f!==null&&c>=f)&&t.push(b("invalid-player","$.state.player","Player must be inside the board.")),u&&i&&x&&T(n)&&T(l)&&T(c)&&c>=0&&f!==null){let d=new Set(u),g=new Set(x),v=pt(i,d),R=pt(x,d);if(v!==null&&t.push(b("wall-goal-overlap","$.board.goals",`Goal ${v} overlaps a wall.`)),d.has(c)&&t.push(b("wall-player-overlap","$.state.player",`Player ${c} overlaps a wall.`)),R!==null&&t.push(b("wall-box-overlap","$.state.boxes",`Box ${R} overlaps a wall.`)),g.has(c)&&t.push(b("player-box-overlap","$.state.player",`Player ${c} overlaps a box.`)),x.length===0&&t.push(b("no-boxes","$.state.boxes","Level must contain at least one box.")),x.length!==i.length&&t.push(b("box-goal-count-mismatch","$.state.boxes",`Box count ${x.length} must equal goal count ${i.length}.`)),t.length===0){for(let A=0;A<f;A++)if(jt(n,l,A)&&!d.has(A)){t.push(b("open-boundary","$.board.walls",`Boundary cell ${A} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:Vt({width:n,height:l,walls:u,goals:i},{player:c,boxes:x})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function P(e){let t=ae(e);if(!t.ok)throw new oe(t.issues);return t.level}var se=Object.freeze(["up","right","down","left"]),Gt=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function Wt(e){return typeof e=="string"&&se.includes(e)}function ct(e){let t=P(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function mt(e,t,r){let{width:o,height:a}=e.board,n=t%o,l=Math.floor(t/o),[f,u]=Gt[r],i=n+f,x=l+u;return i<0||i>=o||x<0||x>=a?null:i+x*o}function z(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function xt(e){return Object.freeze(e)}function j(e,t){let r=ct(e);if(!Wt(t))return z("invalid-direction",null);let{level:o,walls:a,boxes:n}=r,l=o.state.player,f=mt(o,l,t);if(f===null)return z("outside-board",t);if(a.has(f))return z("wall",t);if(!n.has(f)){let c=P({board:o.board,state:{player:f,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:c,move:xt({kind:"walk",direction:t,playerFrom:l,playerTo:f})})}let u=mt(o,f,t);if(u===null)return z("box-outside-board",t);if(a.has(u))return z("box-wall",t);if(n.has(u))return z("box-box",t);let i=o.state.boxes.map(c=>c===f?u:c),x=P({board:o.board,state:{player:f,boxes:i}});return Object.freeze({ok:!0,level:x,move:xt({kind:"push",direction:t,playerFrom:l,playerTo:f,boxFrom:f,boxTo:u})})}function V(e){let{level:t,goals:r}=ct(e);return t.state.boxes.every(o=>r.has(o))}var ht=[[0,-1],[1,0],[0,1],[-1,0]],Kt=[...ht,[1,-1],[1,1],[-1,1],[-1,-1]];function gt(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,a){for(let n=0;n<t.length;n++){let[l,f]=t[n];a(r+l,o+f,l!==0&&f!==0?Math.SQRT2:1,n)}},distance(r,o,a,n){let l=Math.abs(a-r),f=Math.abs(n-o);return t.length===4?l+f:l+f+(Math.SQRT2-2)*Math.min(l,f)}})}var wt=gt("rect4",ht),bt=gt("rect8",Kt);var w;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(w||(w={}));var Bo=[w.Right,w.Down],Eo=[w.Right,w.Down,w.DownRight,w.DownLeft],Xt=[w.Up,w.Right,w.Down,w.Left],Qt=[w.Up,w.Right,w.Down,w.Left,w.UpRight,w.DownRight,w.DownLeft,w.UpLeft];var Ma=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var Qa=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function B(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function G(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function tr(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function Qe(e){if(typeof e!="string")return G([B("empty-level",1,1,"Level notation must be a string.")]);let t=tr(e);if(t.length===0||t[0]?.length===0)return G([B("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let i=0;i<t.length;i++)t[i].length!==r&&o.push(B("ragged-row",i+1,Math.min(t[i].length,r)+1,`Row ${i+1} has width ${t[i].length}; expected ${r}.`));if(o.length>0)return G(o);let a=[],n=[],l=[],f=-1;for(let i=0;i<t.length;i++)for(let x=0;x<r;x++){let c=t[i][x],d=x+i*r;switch(c){case"#":a.push(d);break;case".":n.push(d);break;case"$":l.push(d);break;case"*":l.push(d),n.push(d);break;case"@":case"+":f!==-1?o.push(B("multiple-players",i+1,x+1,"Level must contain exactly one player.")):f=d,c==="+"&&n.push(d);break;case" ":break;default:o.push(B("unknown-symbol",i+1,x+1,`Unknown Sokoban symbol ${JSON.stringify(c)}.`))}}if(f===-1&&o.push(B("missing-player",1,1,"Level must contain one player.")),o.length>0)return G(o);let u=ae({board:{width:r,height:t.length,walls:a,goals:n},state:{player:f,boxes:l}});return u.ok?Object.freeze({ok:!0,level:u.level}):G(u.issues.map(i=>B(i.code,1,1,i.message)))}var W=class{constructor(t){let r=Qe(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return V(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.solved)return{ok:!1,code:"inactive"};let r=j(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.history.length?(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0):!1}redo(){return this.future.length?(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0):!1}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[]}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=l=>{if(!Number.isSafeInteger(l.moves)||l.moves<0||!Number.isSafeInteger(l.pushes)||l.pushes<0||l.pushes>l.moves||!["up","down","left","right"].includes(l.facing))throw Error("Invalid saved counters");return{level:P({board:this.initial.board,state:l.state}),moves:l.moves,pushes:l.pushes,facing:l.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),a=t.history.map(r),n=t.future.map(r);this.restore(o),this.history=a,this.future=n}};function K(e,t){let r=e[t]?.moves;return Number.isSafeInteger(r)&&r>=0}function le(e,t){return t.find(r=>!K(e,r.id))?.id}function ne(e,t,r){return t.some(o=>o.id===r)&&(K(e,r)||r===le(e,t))}function X(e,t,r,o){let a=t.filter(l=>ne(e,t,l.id)),n=a.findIndex(l=>l.id===r);return n<0?void 0:a[n+o]?.id}var Je={1:13,2:34,3:23,4:27,5:33,6:79,7:89,8:25,9:37,10:59,11:32,12:45,13:26,14:33,15:28,16:34,17:38,18:37,19:30,20:31,21:20,22:31,23:45,24:48,25:170,26:32,27:58,28:7,29:62,30:58,31:54,32:26,33:58,34:65,35:37,36:43,37:37,38:48,39:66,40:53,41:60,42:53,43:75,44:75,45:40,46:25,47:28,48:59,49:48,50:63};var vt=["#f3aa19","#ee5e63","#a062d5","#278fe0","#2baf78","#ed7d32"];var kt=window.matchMedia("(prefers-reduced-motion: reduce)"),E,Ze;function Mt(){return vt[Math.floor(Math.random()*vt.length)]}function k(){E&&(cancelAnimationFrame(Ze),E.remove(),E=void 0,document.body.classList.remove("win-celebrating"),window.removeEventListener("resize",k),document.removeEventListener("visibilitychange",k))}function At(){if(k(),kt.matches||document.hidden)return;let e=window.innerWidth,t=window.innerHeight,r=Math.min(window.devicePixelRatio||1,1.5,2560/Math.max(e,t)),o=document.createElement("canvas");o.width=Math.ceil(e*r),o.height=Math.ceil(t*r);let a=o.getContext("2d");if(!a)return;let n=Math.max(.65,Math.min(1.35,t/720)),l=[];for(let x of[-1,1])for(let c=0;c<38;c++)l.push({x:x===1?e*.06:e*.94,y:t*.86,vx:x*e*(.13+Math.random()*.36),vy:-t*(.55+Math.random()*.64),size:(6+Math.random()*7)*n,angle:Math.random()*Math.PI,spin:x*(2+Math.random()*8),color:Mt(),delay:Math.random()*.18});let f=[];for(let[x,c,d]of[[.23,.25,.08],[.77,.23,.3],[.5,.15,.55]]){let g=Mt();for(let v=0;v<32;v++){let R=(v+Math.random()*.65)*Math.PI/16,A=(75+Math.random()*110)*n;f.push({x:x*e,y:c*t,delay:d,life:.68+Math.random()*.55,vx:Math.cos(R)*A,vy:Math.sin(R)*A,color:v%5===0?"#ffca52":g})}}E=o,E.className="victory-canvas",E.setAttribute("aria-hidden","true"),document.body.append(E),document.body.classList.add("win-celebrating"),window.addEventListener("resize",k),document.addEventListener("visibilitychange",k),a.scale(r,r),a.lineCap="round";let u=performance.now();function i(x){let c=(x-u)/1e3;if(c>=2.35||kt.matches){k();return}a.clearRect(0,0,e,t);for(let d of f){let g=c-d.delay;if(g<0||g>=d.life)continue;let v=g*(1-.28*g),R=d.x+d.vx*v,A=d.y+d.vy*v+38*n*g*g,nt=Math.min(.105,g);a.globalAlpha=.94*(1-g/d.life),a.strokeStyle=d.color,a.lineWidth=2.6*n,a.beginPath(),a.moveTo(R-d.vx*nt,A-(d.vy+76*n*g)*nt),a.lineTo(R,A),a.stroke()}for(let d of l){let g=c-d.delay;if(g<0)continue;let v=d.x+d.vx*(1-Math.exp(-1.6*g))/1.6,R=d.y+d.vy*g+t*.64*g*g;a.globalAlpha=Math.min(.95,(2.35-c)*2.4),a.fillStyle=d.color,a.save(),a.translate(v,R),a.rotate(d.angle+d.spin*g),a.scale(.28+.72*Math.abs(Math.cos(d.angle+g*7)),1),a.fillRect(-d.size/2,-d.size/3,d.size,d.size*.66),a.restore()}Ze=requestAnimationFrame(i)}Ze=requestAnimationFrame(i)}var ue={salt:"SSv5gScR7qN7RuaADEv2OA==",iterations:6e5,paths:{1:"/dRxPgrBcdX4Z9NhRZneeEC0SNTkaCg8S6u98SmyVtvtmaEAPFWejvs=",2:"JBssNLhh8AFxhkkg1zwZTRKBLqS1sDN2j1EtJJgUP1dHcv0LfBx+VR58rcZdAcvbfvmIhEhQPjhTa/HNTpk=",3:"PVDofVBRslr+4aRsJPBPZtEMQzXBOXE72Sfv7fOJsp9s/owaRXkCUEmicAdhiMS9bnFD",4:"ShLz/DvrQfQJwTA9b2x8DlLYEnnzoedJYwmwaQM4maC3B+oNHOTgwIxi2rjW+EL9/kUKfSTgWw==",5:"BFNnyIK6Px9cSbv8EjdreTSV/VW1UKmRFJTZT7Je1EHd/42gW+kAAi+R4mzdAollHgPg/V13map8etut1w==",6:"ojdykBT2RtMSC7ZGNrRBalQjOb+Ugj24zg+KcSN+mKPKB0uOTk6lC7dtpIAQrfnk4IiGD/x2NsgmCCsNvIMMAvzxTM5HP+7q7lD5uYWbc1LhLtOwtLgyfhdHE5cWTVBmAYeBTlPzy4MVBQ8=",7:"CiSqFHu4SKDAGs32/vdeX+XHmTbl/g+zHG5BNRVnVkgut0MSSCmkFoWr12qYnxRPWFRH/pVfZifnDxoenz9fBE9lzmnKlvx8dARYviCTOpXrV2etp9n/zzlKFjYDAvLCFBZU4V/DwGRVUzvhHhNhuzrkJmEq",8:"Xz7YgUVt/LRgX4tBb064W01TvXX+VRH+BGR8OqovQtXZM9pUfhnqVCR9HWZjfDH9X0fF00c=",9:"uY7lYDUtxs1sqYCtPnO03pri3DCpLX0iAxIvwX1/7XS6wBFJm5+IJmyKACHckO+NVLIjz9cJ29Cpg+I8ms2hO+o=",10:"vJ+piUilfljcIuP7yMEtx/bcMoqYSxCZ6jIbBWv862clU9LNYymGhXkdnfqnH3FOsJP61SoyADtzBrfJBa+awm3u9FZf1ZjLgWmcY4ZQhY/bur7XN1X9",11:"g5axJx1AgkL+VLhNkcXxnraCW3882PAm3s8fynaNJoh7VsLmYU6jVQ9+7LKtbNto+tUmxrUZj78O6Vc0",12:"3ATPjpYLoYvtT3MidXFE4tGYRfYt/bIMZpmszBEcRkwH+8U9Zw+O5thqzxhnh1IWGlJhGfWgmf8WOXqEBBuzZ/vxcTilVr8hBQ==",13:"Dg1Ho0I22FMvmTMWQuN/DvH9nvaqtpiaoBXSoZzoN6qPe5SmQdNZpY3fY0QXGttq/VGVg8ek",14:"zsn8YK/VZYVdkWXIWXxs/RFeXOoFhCXrAH88WhwDxBmG0CBrJI4mFG6gWWJWd3v+KTT+UmuHrQB2wIMScg==",15:"J9OZSoI0z71/wvzhcL/RZ1fClJTL6QBQ1P7qVLy9vj0QoInoQr6yYt11EaluG1bRT7A8fda8l/I=",16:"u0xhYon+gqkxfHID5OF8WNm4raY5qzC2dMRfJ/wQfm5hMzWAcoD6yN3pr6LOHOmxR375jT2M4XbBgvxARfg=",17:"tnj9vciNYwzh/EbKxD5d3fK9+TBVdiNTm25PdPtpKJDQGqPz6k4p9HA7pFZxAFVO3C+OdqkDNniktaId2N9Ucdpp",18:"6eFsMRMsa7L0yd87ItWohHZRapeFEi2V4s2RNX4lcykZhYDFULqECaZwrqvC0l52XhMn8xtn5GcmutdGuwvBbOg=",19:"qR4F6VXTAAIxUzSFknCHvqj6rxD2b/Tia7wsm+gC8KIiUQOAhWLZcoO1t6tr7h9yVpyI5nbWR6tN8Q==",20:"/WZB1c89QMhQkHyk3KL35UZOsaI3efphuguGbsgezX0zdEjYucb5JiIq9FPn2q1rJSwxOIhzqz2elK8=",21:"6L4HRFOjlUQBh7hGyTodJ55ven7UdVsjnrMOrJ6cRlfnSwjqN+JDgT0y787edZai",22:"1DgR7cWuNBC6OFKv1oH86Y+sitb6axysuR3ZGozfhgbxVGpbLpHsVEqRdP3SnVLtnIz2CoVzLVQMofA=",23:"qMO2EqGfF1DaWfPbgWnhOwva10MycQKHUydpUiL5cJCMizAXgkMxw0VZ9uL9StU6LD9FL659VbWXB3LNS7aXRYj6Z8V/QS2dFg==",24:"AkZDGYY/FNDm2WX6W8hG4tQDzQJsnamVqGr3vqC4I/ZfHJue1vvHDIEEBWzGbYahhERBeYOyNg7JYeuAZlUf2T9mgjWHPg4dEH5v+A==",25:"Rumar7AXWCH+Iwb/TcB5tRQ9Tpg1bVObC9XLzJAT56Vv9keVgVu3oH8i/mKn+4txZYhUVdA+aWlDNlieo3MRlBaZPV1Ci95OySGomruLqfmtZu/RxkWrZC5Gqk0nLdtoOOMxiUFvUUixoEjlIvIk+u7HssP2ZpzdeSID3NmGQKUh+82BrkaHiqOXWzhVyfMKLe8btw9TkeIwE1F1Ofk+0iIfP1mdXf11mXmuW2vj0r1bchrGvgeZTYvijFFVjBHUioHe3XUs",26:"m1gZ10iLmiRqwUnaRHwZS80tzmOgvdnZQ9IpmVvCc1gyo/EhS60WHhw26rCTxHkzzUtp6ephNJ7E4Ljx",27:"vXlXl3ARcO72VWtfjFWzsMF1zO9wGRgtlNCAOx5XyWgX7QqOM6TMQCCSSIBUPK8VJsNG1fBR4fxa8VuOCM69bHg5IemPUiSRup1qeO4r7USigg/7OfM=",28:"cajjTRooeEvSCYcAq7V/lQ/LXp5AbPsnNVSlxUuapJXM3h8=",29:"1ivDnPrZnWhjJiWE4tYObgoJAsjG6BA//SB9z5M9Sf9NN9JvHisdAsWmd27dFBJ6JJyWdrXtzTaIjGFi8Z37bo/tMvlzrODCi0WUawuFMk0yZK6hmS06IIxX",30:"XFFmaQf5P/fibWR7rgXHrltsBuEU7GdP5MLmLWKyj588iS9s/17pbCIy6jllk9T//wNy+VCpm4Mi42rNGFw4PGlz143jJh5FkaRTZnpZHjAhpfb9ss8=",31:"rh4ZrgSDwhw4BiqGR5chSKk96s49jdFSWxiKLAzzh8EWFZ7oKLrgUu1cPH9141nJxS+xzfxPrb7zPkjMPsOk8jyGyC79P29zt2SLDSIFgKvX7g==",32:"KZl8uEaDvo9SjYQWDNXJLC5cPtiSNT3uOPYm19KkBdUIiyVY1ZGs352W76SpETey2KftWgfS",33:"0CMmrvrAectQ0ObuTb+xlKxwz81zS/hbeTnESNeBUcHoFHgM5HoEOkp/VJePdu5bdL8thxjxc9oow1YswLFVk3MqmJBw6VhJA3NlgVlXq1xvkIJh720=",34:"5BHaPv+D4P0aWjuGCJ6F+E/9ifmyq4I0Wlqg+QhgHwIIfvixOOBuowAoLRo5nFQq4T6V9DKx+IYuQJl6jN8vbFhwTlMWLbplFxt8J9gsV8zxMlL4M7842Nvx0r+/",35:"0jNBOqQJZM+/0beLIJUVAknSzBu2oYUzO1reR85VHM1q9GSld/+ut9Tw6PZ5JCynTdKzRpiu2EofSD5V1MpKjiY=",36:"3YRyMo3HUVBGgbRSGa7dw9/w+Q6c9XOxuAHDKKOKHOypytrDO1inCUPM+cV7mhsNNT3obNGtqyfgOUHLdqLc1kNVVG2HgCQ=",37:"ImqvUjxI6qa3js/33zVUD/tSTDFk+2AtIOs034eewgpBMYPie5/qQVSn08Bl97SFe3SQKjaIK88ldWVmNEiQ88Y=",38:"+J8RMgLQCO8Q5vb8wyACJUEgHh5dSicGvmmmDvQtqK/I+zctsmzZXLjUIuvqSm8bVdQl8w2cCZYfKwsee3tnmbeN94QW8/1nXl6c3A==",39:"vkF6K/bWRfzuGx2DEmau8TIacc0qbHwhxGk+wUhtHdulPej5qWbT7mdwSd0ab/IWNuittpPvP+xwx/uZyTwMUxxeF3SczHQCKlSVt4nbY7vWgfvEZzyUHb7E7VTP/Q==",40:"05dbRL/k66UmtP59ls/cqhFuf/pOtGI7NFpIysi5UQo/wZNhB7RLYzgxV9s40/I2Fd7FXBfKEHff6LdSk9Pdutp56w8tdT+WSEq9PTWuEnQr",41:"Atx2/gP5fggGVS0+eQIAaEefJOMz1ArG2LRCF1nNQIYlhXEUCWSJCdeZzoI6UtaZfl9feUI0NG3iXW/BfX1XazwRMjV3eTi+Bda+dDYScGHxvdYFdghq5A==",42:"tjznCXHtCoU5NW/SFpjieyDnsDkbotWVd6/ga0CIg+IFmgMMdd48hSxEdEMnGNGJ2//ctvu7YOSDqjaUmL0CW02rqnO8Ht1dxwoLRuC+EVjM",43:"HxCC2see2ffbCyQ0pwh2qPmvw1OIH69PKtA7nyoJNXrv7KnKLSUHy3O1dpzmsrswi3OSARp7tLK8Mt0GcsfHI6zgJqcGnk+0VKVqov+mQ/Z+su5CTII8vefqeRM9z5aUIAsgQSN/jg==",44:"pRQifFDRSzDIqMoFaLRiRg4Qn8D8PNG8UHuqcSUDI2QPKQSa9TYbK2Sirft7oJTSnZW682AUE/TTz/6PIMzLpW9ADfQSQWUaeTcluoXLrfqCl+CN0vtVKbdhMruRj9MCZUAG0JPUYQ==",45:"UwyOfZFz9Y94B0s1zbAvMHSWt6T3OV4BNsnovGktKecREIVK27FOp0dvcrsiSGcILYZ/s4J/8ksxj2Hql9aVr29CBFI=",46:"nRFCDwm51Nz0DGerdk4kPFsQ5E3Y9icKrUJNCdq08MhbxIj7vF5tOjz0/reSTsi2gv2oolw=",47:"QsL+nY0R/6zwPHrGmRg6Sci8uEQFqbe6jPpHyzxVZZ8KDz+/Q8m6ezq4TGPsUTVRQQ5AeH8JMcY=",48:"RLyo528WTnPwPl2SxtXAA7tGrCdiGI/AXgBP49wr/4iAwrAC104G4xNnhxuAGAjb0SFJFETK0vyBQ4izcvtBj8my3PB1sY8gtFjdD6yRq3OKw9y0VrMQ",49:"le0H0E940j/1cmdryOzvf3CppT8XKS6RofE0+Va/VUPWG1j9hW9Xlc4llRFiZ+/SHfM5c7Xnl4EVw5wlYuMq6Dckv9zhjdrUqTHYjA==",50:"AM0fq8pw8j/vddjhZB5l4BglkzrbRZSBnnIj6sc/2vhxSuxxMese5r1otm7Nr8ruA6Gz0Kt0rvD4oURKgoKdW/M+8NPkOxj1Fs2C+uof7Z2x9IGBk5VDhoKgwQ=="}};var rr={u:"up",r:"right",d:"down",l:"left"},Pt=e=>Uint8Array.from(atob(e),t=>t.charCodeAt(0));async function Rt(e,t){let r=window.crypto.subtle,o=new TextEncoder,a=await r.importKey("raw",o.encode(t),"PBKDF2",!1,["deriveKey"]),n=await r.deriveKey({name:"PBKDF2",salt:Pt(ue.salt),iterations:ue.iterations,hash:"SHA-256"},a,{name:"AES-GCM",length:256},!1,["decrypt"]),l=Pt(ue.paths[e]),f=await r.decrypt({name:"AES-GCM",iv:l.slice(0,12),additionalData:o.encode(String(e))},n,l.slice(12));return Array.from(new TextDecoder().decode(f),u=>rr[u])}var or={ArrowUp:Re,ArrowDown:Me,ArrowLeft:Ae,ArrowRight:Pe,ChevronLeft:Te,ChevronRight:De,Undo2:ze,Redo2:$e,RotateCcw:Ie,Grid2x2:re,VolumeX:Ue,Volume2:Ne,Maximize:Ee,Minimize:qe,Footprints:Oe,Box:Le,CircleCheck:te,Check:Fe,LockKeyhole:Be,X:He},s=e=>document.getElementById(e),H=y.length===1,me=H?"sokoban-first-level-v1":"sokoban-web-v1",xe=window.matchMedia("(max-width:680px)"),S={},C=!0,ie,et=!0,U=0,q=0,de=!1;function tt(e){try{return JSON.parse(e)||{}}catch{return{}}}function rt(e){return Number.isSafeInteger(e.currentVersion)&&e.currentVersion>0?e.currentVersion:0}try{let e=tt(localStorage.getItem(me));e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(S=e.records),C=e.muted!==!1,ie=e.current,U=rt(e)}catch{et=!1}var m,M,N,Z=0,Ye,Lt,h,Q=0,O=new Map,ot={push:new Audio(F.push),win:new Audio(F.win)},Tt=H?{game:new Audio(F.gameMusic)}:{game:new Audio(F.gameMusic),catalog:new Audio(F.catalogMusic)};for(let e of Object.values(Tt))e.loop=!0,e.volume=.18,e.preload="none";ot.push.volume=.16;ot.win.volume=.32;function at(e){if(C)return;let t=ot[e];t.currentTime=0,t.play().catch(()=>{})}function ce(){let e=he()?"catalog":"game";for(let[t,r]of Object.entries(Tt))C||document.hidden||m?.solved||t!==e?r.pause():r.play().catch(()=>{})}function he(){return!H&&xe.matches&&s("catalog").classList.contains("open")}function I(e){e=e&&!H&&xe.matches,s("catalog").classList.toggle("open",e),s("catalog-toggle").setAttribute("aria-expanded",String(e)),e&&h?.playing&&Ce(),ce()}function Dt(e,t){let r=S[e];return J(e)&&!(t.moves<r.moves||t.moves===r.moves&&t.pushes<(r.pushes??1/0))?!1:(S[e]=t,!0)}function Ot(e){let t=!1;if(e)for(let{id:r}of y)K(e,r)&&Dt(r,e[r])&&(t=!0);t&&we()}function Y(){if(clearTimeout(Ye),!(!q&&!de))try{let e=tt(localStorage.getItem(me)),t=rt(e),r=q>=t&&q>0;Ot(e.records);let o=r?q:t;localStorage.setItem(me,JSON.stringify({records:S,muted:de?C:e.muted!==!1,current:r?m.serialize():e.current,currentVersion:o})),U=Math.max(U,o),q=0,de=!1}catch{et=!1}}function _(){q=Math.max(Date.now(),U+1,q+1),clearTimeout(Ye),Ye=setTimeout(Y,180)}function L(e){clearTimeout(Lt),s("status").textContent=e,e&&(Lt=setTimeout(()=>s("status").textContent="",2600))}function ge(){dt({icons:or})}function st(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),ge()}function J(e){return K(S,e)}function we(){let e=y.filter(o=>J(o.id)).length;s("completed-count").textContent=e;let t=Math.round(e/y.length*100);s("completion-percent").textContent=`${t}%`,s("completion-bar").style.width=`${t}%`,document.querySelectorAll("[data-page]").forEach(o=>o.setAttribute("aria-selected",String(Number(o.dataset.page)===Z)));let r=document.createDocumentFragment();for(let o of y.slice(Z*25,Z*25+25)){let a=document.createElement("button"),n=!ne(S,y,o.id);if(a.className=`level-cell${J(o.id)?" completed":""}${m.id===o.id?" active":""}`,a.textContent=String(o.id).padStart(2,"0"),a.disabled=n,n){let l=document.createElement("i");l.dataset.lucide="lock-keyhole",l.className="lock-icon",a.append(l),a.title=`\u5148\u5B8C\u6210\u7B2C ${le(S,y)} \u5173`}a.setAttribute("aria-label",`\u7B2C ${o.id} \u5173${n?"\uFF0C\u672A\u89E3\u9501":J(o.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),a.setAttribute("aria-current",m.id===o.id?"true":"false"),a.addEventListener("click",()=>ee(o.id)),r.append(a)}s("level-grid").replaceChildren(r),s("personal-best").textContent=J(m.id)?`\u672C\u5173\u6700\u4F73 ${S[m.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173",s("previous").disabled=X(S,y,m.id,-1)===void 0,s("next").disabled=X(S,y,m.id,1)===void 0,ge()}function pe(e){let t=document.createElement("img");return t.src=F[e],t.alt="",t.draggable=!1,t}function _e(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}function be(e=m){let t=s("board"),r=e.level.board.width,o=new Set(e.level.board.walls),a=new Set(e.level.board.goals),n=document.createDocumentFragment();for(let l=0;l<M.height;l++)for(let f=0;f<M.width;f++){let u=(l+1)*r+f+1,i=document.createElement("div");if(i.className=`tile${o.has(u)?" wall":a.has(u)?" goal":""}`,_e(i,f,l),i.append(pe(o.has(u)?"wall":"floor")),a.has(u)){let x=pe("goal");x.className="goal-image",i.append(x)}n.append(i)}N=document.createElement("div"),N.className="piece player",N.append(pe("playerDown")),n.append(N),t.replaceChildren(n),O.clear(),ft()}function ft(){if(!M)return;let e=s("board-stage"),t=xe.matches;if(t){let a=e.getBoundingClientRect().top+window.scrollY,n=document.querySelector(".bottom-controls").offsetHeight,l=(e.clientWidth-24)*M.height/M.width+24,f=window.innerHeight-a-n-24,u=Math.ceil(Math.max(160,Math.min(l,f)));e.style.height!==`${u}px`&&(e.style.height=`${u}px`)}else e.style.height="";let r=Math.max(1,Math.floor(Math.min((e.clientWidth-(t?24:32))/M.width,(e.clientHeight-(t?24:36))/M.height,t?66:96))),o=s("board");o.style.setProperty("--cell",`${r}px`),o.style.width=`${r*M.width}px`,o.style.height=`${r*M.height}px`}function D(e,t=m){let r=t.level.board.width,o=s("board"),a=new Set(t.level.board.goals);if(e?.kind==="push"){let f=O.get(e.boxFrom);f&&(O.delete(e.boxFrom),O.set(e.boxTo,f))}let n=new Set(t.level.state.boxes);for(let[f,u]of O)n.has(f)||(u.remove(),O.delete(f));for(let f of n){let u=O.get(f);u||(u=document.createElement("div"),u.className="piece crate",u.append(pe(a.has(f)?"boxGoal":"box")),o.append(u),O.set(f,u)),_e(u,f%r-1,Math.floor(f/r)-1);let i=F[a.has(f)?"boxGoal":"box"];u.firstChild.getAttribute("src")!==i&&(u.firstChild.src=i)}let l=t.level.state.player;_e(N,l%r-1,Math.floor(l/r)-1),N.firstChild.src=F[`player${t.facing[0].toUpperCase()+t.facing.slice(1)}`],s("moves").textContent=t.moves,s("pushes").textContent=t.pushes,s("goals").textContent=`${t.onGoals} / ${n.size}`,s("board").setAttribute("aria-label",`\u7B2C ${t.id} \u5173\uFF0C${t.moves} \u6B65\uFF0C${t.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${n.size} \u4E2A`),t===m&&(s("undo").disabled=!m.history.length,s("redo").disabled=!m.future.length,document.querySelectorAll("[data-direction]").forEach(f=>f.disabled=m.solved),ce())}function ee(e,t,r=!0){if(!ne(S,y,e)){if(m){L("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501");return}e=le(S,y)||y[0].id,t=void 0}let o=y.find(a=>a.id===e);if(ve(!1),M=o,m=new W(o),t)try{m.resume(t)}catch{L("\u5B58\u6863\u5DF2\u91CD\u7F6E")}Z=Math.floor((o.id-1)/25),I(!1),k(),s("success").open&&s("success").close(),s("level-number").textContent=String(o.id).padStart(2,"0"),s("optimal-moves").textContent=Je[o.id],be(),D(),we(),r&&_()}function Bt(e=!1){Dt(m.id,{moves:m.moves,pushes:m.pushes}),Y(),we(),at("win"),H?e&&L("\u5168\u90E8\u5F52\u4F4D\uFF01"):(s("success-stats").textContent=`\u7B2C ${String(m.id).padStart(2,"0")} \u5173 \xB7 ${m.moves} \u6B65 \xB7 ${m.pushes} \u6B21\u63A8\u52A8`,s("success-next").innerHTML=m.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',ge(),s("success").showModal()),e&&At()}function lt(e){if(h||s("solution-lock").open||s("success").open||he())return;let t=m.move(e);t.ok&&(L(""),D(t.move),_(),m.solved?Bt(!0):t.move.kind==="push"&&at("push"))}function Et(){h||m.undo()&&(k(),L(""),D(),_())}function qt(){h||m.redo()&&(D(),_(),m.solved&&Bt())}function $t(e){let t=s("solution-controls");t.hidden=!e,t.parentElement.classList.toggle("is-demonstrating",e),document.querySelector(".tools").hidden=e,document.querySelector(".dpad").hidden=e,s("show-solution").disabled=e}function ye(){let{view:e,steps:t,playing:r}=h,o=e.moves===t.length;s("solution-progress").textContent=`${o?"\u6F14\u793A\u5B8C\u6210":"\u6700\u4F18\u89E3\u6F14\u793A"} \xB7 ${e.moves} / ${t.length} \u6B65`,s("solution-play").textContent=r?"\u6682\u505C\u6F14\u793A":o?"\u91CD\u64AD":"\u7EE7\u7EED\u6F14\u793A",s("solution-step").disabled=o}function Se(){h.timer=setTimeout(It,Number(s("solution-speed").value))}function Ce(){clearTimeout(h.timer),h.playing=!1,ye()}function It(){let{view:e,steps:t}=h;if(e.moves>=t.length)return;let r=e.move(t[e.moves]);if(!r.ok){ve(),L("\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF");return}D(r.move,e),e.moves===t.length&&(h.playing=!1),ye(),h.playing&&Se()}function ve(e=!0){h&&(clearTimeout(h.timer),h=void 0,$t(!1),e&&(be(),D(),s("show-solution").focus()))}s("show-solution").addEventListener("click",()=>{Q++,s("solution-form").reset(),s("solution-error").textContent="",s("solution-unlock").disabled=!1,s("solution-lock").showModal()});s("solution-cancel").addEventListener("click",()=>s("solution-lock").close());s("solution-form").addEventListener("submit",async e=>{e.preventDefault();let t=s("solution-lock"),r=s("solution-password"),o=s("solution-error"),a=s("solution-unlock");if(a.disabled)return;if(!window.crypto||!window.crypto.subtle){o.textContent="\u8BF7\u901A\u8FC7 HTTPS \u6216\u672C\u5730\u6587\u4EF6\u6253\u5F00\u8BFE\u4EF6\u3002";return}let n=++Q,l=M;a.disabled=!0,o.textContent="\u6B63\u5728\u9A8C\u8BC1\u2026";let f=r.value;r.value="";let u;try{u=await Rt(l.id,f)}catch{n===Q&&t.open&&(o.textContent="\u5BC6\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u8BD5\u3002",r.focus());return}finally{n===Q&&(a.disabled=!1)}if(!(n!==Q||!t.open||l!==M)){if(u.length!==Je[l.id]||u.some(i=>!i)){o.textContent="\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF\u3002";return}t.close(),I(!1),k(),L(""),h={view:new W(l),steps:u,playing:!0},$t(!0),be(h.view),D(void 0,h.view),ye(),s("solution-play").focus(),Se()}});s("solution-play").addEventListener("click",()=>{if(h.playing){Ce();return}let{view:e,steps:t}=h;e.moves===t.length&&(e.restart(),be(e),D(void 0,e)),h.playing=!0,ye(),Se()});s("solution-step").addEventListener("click",()=>{Ce(),It()});s("solution-speed").addEventListener("change",()=>{h.playing&&(clearTimeout(h.timer),Se())});s("solution-exit").addEventListener("click",()=>ve());s("undo").addEventListener("click",Et);s("redo").addEventListener("click",qt);s("restart").addEventListener("click",()=>{h||(k(),m.restart(),L(""),D(),_())});s("previous").addEventListener("click",()=>ee(X(S,y,m.id,-1)));s("next").addEventListener("click",()=>ee(X(S,y,m.id,1)));s("success").addEventListener("close",()=>{s("success").open||k()});s("success-close").addEventListener("click",()=>s("success").close());s("success-next").addEventListener("click",()=>{H?(s("success").close(),s("restart").click()):m.id<50?ee(m.id+1):(s("success").close(),I(!0))});s("sound").addEventListener("click",()=>{C=!C,de=!0,s("sound").setAttribute("aria-pressed",String(!C)),st(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),C||at("push"),ce(),Y()});s("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{L("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>st(s("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));s("catalog-toggle").setAttribute("aria-expanded","false");s("catalog-toggle").addEventListener("click",()=>I(!he()));s("catalog-close").addEventListener("click",()=>I(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{Z=Number(e.dataset.page),we()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>lt(e.dataset.direction)));var Ft={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||s("success").open||s("solution-lock").open)return;if(he()){e.key==="Escape"&&I(!1);return}if(h){e.key==="Escape"&&ve();return}let t=e.key.length===1?e.key.toLowerCase():e.key;Ft[t]?(e.preventDefault(),lt(Ft[t])):t==="z"?(e.preventDefault(),Et()):t==="y"?(e.preventDefault(),qt()):t==="r"&&!e.repeat&&(e.preventDefault(),s("restart").click())});var $;s("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||h||m.solved||($={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&s("board-stage").setPointerCapture(e.pointerId))});s("board-stage").addEventListener("pointerup",e=>{if(!$||$.id!==e.pointerId)return;let t=e.clientX-$.x,r=e.clientY-$.y;$=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&lt(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});s("board-stage").addEventListener("pointercancel",()=>$=null);window.addEventListener("pagehide",Y);document.addEventListener("visibilitychange",()=>{document.hidden&&(h&&Ce(),Y()),ce()});window.addEventListener("storage",e=>{if(e.key!==me||e.storageArea!==localStorage)return;let t=tt(e.newValue);U=Math.max(U,rt(t)),Ot(t.records)});new ResizeObserver(ft).observe(s("board-stage"));window.addEventListener("resize",()=>{!xe.matches&&s("catalog").classList.contains("open")&&I(!1),ft()});st(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");s("sound").setAttribute("aria-pressed",String(!C));ee(Number.isInteger(ie?.id)?ie.id:1,ie,!1);et||L("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");ge();})();
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
