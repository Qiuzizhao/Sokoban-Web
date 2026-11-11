(()=>{var bt=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),r.length&&r.forEach(a=>{let l=bt(...a);o.appendChild(l)}),o},yt=([e,t,r])=>bt(e,t,r);var rr=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),or=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",ar=e=>e.flatMap(or).map(r=>r.trim()).filter(Boolean).filter((r,o,a)=>a.indexOf(r)===o).join(" "),sr=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),Ee=(e,{nameAttr:t,icons:r,attrs:o})=>{let a=e.getAttribute(t);if(a==null)return;let l=sr(a),f=r[l];if(!f)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let n=rr(e),[u,i,c]=f,x={...i,"data-lucide":a,...o,...n},d=ar(["lucide",`lucide-${a}`,n,o]);d&&Object.assign(x,{class:d});let g=yt([u,x,c]);return e.parentNode?.replaceChild(g,e)};var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Oe=["svg",p,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var Be=["svg",p,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var qe=["svg",p,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var $e=["svg",p,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var Ie=["svg",p,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var Ne=["svg",p,[["path",{d:"M20 6 9 17l-5-5"}]]];var ze=["svg",p,[["path",{d:"m15 18-6-6 6-6"}]]];var Ue=["svg",p,[["path",{d:"m9 18 6-6-6-6"}]]];var ne=["svg",p,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var He=["svg",p,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var ie=["svg",p,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var je=["svg",p,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var Ge=["svg",p,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var Ve=["svg",p,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var We=["svg",p,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var Ke=["svg",p,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var Xe=["svg",p,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var Qe=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var Je=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var Ye=["svg",p,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var St=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>Ee(a,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){let a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(l=>Ee(l,{nameAttr:"icon-name",icons:e,attrs:r})))}};var y=[{id:1,width:6,height:5,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4]],boxes:[[3,2],[3,3]],goals:[[4,2],[2,3]],trees:[],xsb:`########
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
#########`}];var D={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var ue=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function Ze(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function b(e,t,r){return Object.freeze({code:e,path:t,message:r})}function T(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function _e(e,t,r,o,a){if(!Array.isArray(e))return a.push(b(r,t,`${t} must be a dense array of cell keys.`)),null;let l=[],f=new Set;for(let n=0;n<e.length;n++){let u=`${t}[${n}]`;if(!(n in e)){a.push(b(r,u,`${u} must not be sparse.`));continue}let i=e[n];if(!T(i)||i<0||o!==null&&i>=o){a.push(b("invalid-cell-key",u,`${u} must be inside the board.`));continue}if(f.has(i)){a.push(b("duplicate-cell-key",u,`${u} duplicates cell key ${i}.`));continue}f.add(i),l.push(i)}return l.sort((n,u)=>n-u),l}function Ct(e,t){for(let r of e)if(t.has(r))return r;return null}function fr(e,t,r){let o=r%e,a=Math.floor(r/e);return o===0||a===0||o===e-1||a===t-1}function lr(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function de(e){let t=[],r=Ze(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([b("invalid-level","$","Level must be a plain object.")])});let o=Ze(r.board),a=Ze(r.state);if(o||t.push(b("invalid-board","$.board","$.board must be a plain object.")),a||t.push(b("invalid-state","$.state","$.state must be a plain object.")),!o||!a)return Object.freeze({ok:!1,issues:Object.freeze(t)});let l=o.width,f=o.height;(!T(l)||l<=0)&&t.push(b("invalid-width","$.board.width","Width must be a positive safe integer.")),(!T(f)||f<=0)&&t.push(b("invalid-height","$.board.height","Height must be a positive safe integer."));let n=null;if(T(l)&&l>0&&T(f)&&f>0){let d=l*f;Number.isSafeInteger(d)?n=d:t.push(b("board-too-large","$.board","Board cell count must be a safe integer."))}let u=_e(o.walls,"$.board.walls","invalid-walls",n,t),i=_e(o.goals,"$.board.goals","invalid-goals",n,t),c=_e(a.boxes,"$.state.boxes","invalid-boxes",n,t),x=a.player;if((!T(x)||x<0||n!==null&&x>=n)&&t.push(b("invalid-player","$.state.player","Player must be inside the board.")),u&&i&&c&&T(l)&&T(f)&&T(x)&&x>=0&&n!==null){let d=new Set(u),g=new Set(c),v=Ct(i,d),R=Ct(c,d);if(v!==null&&t.push(b("wall-goal-overlap","$.board.goals",`Goal ${v} overlaps a wall.`)),d.has(x)&&t.push(b("wall-player-overlap","$.state.player",`Player ${x} overlaps a wall.`)),R!==null&&t.push(b("wall-box-overlap","$.state.boxes",`Box ${R} overlaps a wall.`)),g.has(x)&&t.push(b("player-box-overlap","$.state.player",`Player ${x} overlaps a box.`)),c.length===0&&t.push(b("no-boxes","$.state.boxes","Level must contain at least one box.")),c.length!==i.length&&t.push(b("box-goal-count-mismatch","$.state.boxes",`Box count ${c.length} must equal goal count ${i.length}.`)),t.length===0){for(let A=0;A<n;A++)if(fr(l,f,A)&&!d.has(A)){t.push(b("open-boundary","$.board.walls",`Boundary cell ${A} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:lr({width:l,height:f,walls:u,goals:i},{player:x,boxes:c})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function P(e){let t=de(e);if(!t.ok)throw new ue(t.issues);return t.level}var pe=Object.freeze(["up","right","down","left"]),nr=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function ir(e){return typeof e=="string"&&pe.includes(e)}function Mt(e){let t=P(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function vt(e,t,r){let{width:o,height:a}=e.board,l=t%o,f=Math.floor(t/o),[n,u]=nr[r],i=l+n,c=f+u;return i<0||i>=o||c<0||c>=a?null:i+c*o}function j(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function kt(e){return Object.freeze(e)}function q(e,t){let r=Mt(e);if(!ir(t))return j("invalid-direction",null);let{level:o,walls:a,boxes:l}=r,f=o.state.player,n=vt(o,f,t);if(n===null)return j("outside-board",t);if(a.has(n))return j("wall",t);if(!l.has(n)){let x=P({board:o.board,state:{player:n,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:x,move:kt({kind:"walk",direction:t,playerFrom:f,playerTo:n})})}let u=vt(o,n,t);if(u===null)return j("box-outside-board",t);if(a.has(u))return j("box-wall",t);if(l.has(u))return j("box-box",t);let i=o.state.boxes.map(x=>x===n?u:x),c=P({board:o.board,state:{player:n,boxes:i}});return Object.freeze({ok:!0,level:c,move:kt({kind:"push",direction:t,playerFrom:f,playerTo:n,boxFrom:n,boxTo:u})})}function J(e){let{level:t,goals:r}=Mt(e);return t.state.boxes.every(o=>r.has(o))}var At=[[0,-1],[1,0],[0,1],[-1,0]],ur=[...At,[1,-1],[1,1],[-1,1],[-1,-1]];function Pt(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,a){for(let l=0;l<t.length;l++){let[f,n]=t[l];a(r+f,o+n,f!==0&&n!==0?Math.SQRT2:1,l)}},distance(r,o,a,l){let f=Math.abs(a-r),n=Math.abs(l-o);return t.length===4?f+n:f+n+(Math.SQRT2-2)*Math.min(f,n)}})}var Lt=Pt("rect4",At),Rt=Pt("rect8",ur);var w;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(w||(w={}));var _o=[w.Right,w.Down],ea=[w.Right,w.Down,w.DownRight,w.DownLeft],dr=[w.Up,w.Right,w.Down,w.Left],pr=[w.Up,w.Right,w.Down,w.Left,w.UpRight,w.DownRight,w.DownLeft,w.UpLeft];var Ga=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var cs=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function $(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function Y(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function wr(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function at(e){if(typeof e!="string")return Y([$("empty-level",1,1,"Level notation must be a string.")]);let t=wr(e);if(t.length===0||t[0]?.length===0)return Y([$("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let i=0;i<t.length;i++)t[i].length!==r&&o.push($("ragged-row",i+1,Math.min(t[i].length,r)+1,`Row ${i+1} has width ${t[i].length}; expected ${r}.`));if(o.length>0)return Y(o);let a=[],l=[],f=[],n=-1;for(let i=0;i<t.length;i++)for(let c=0;c<r;c++){let x=t[i][c],d=c+i*r;switch(x){case"#":a.push(d);break;case".":l.push(d);break;case"$":f.push(d);break;case"*":f.push(d),l.push(d);break;case"@":case"+":n!==-1?o.push($("multiple-players",i+1,c+1,"Level must contain exactly one player.")):n=d,x==="+"&&l.push(d);break;case" ":break;default:o.push($("unknown-symbol",i+1,c+1,`Unknown Sokoban symbol ${JSON.stringify(x)}.`))}}if(n===-1&&o.push($("missing-player",1,1,"Level must contain one player.")),o.length>0)return Y(o);let u=de({board:{width:r,height:t.length,walls:a,goals:l},state:{player:n,boxes:f}});return u.ok?Object.freeze({ok:!0,level:u.level}):Y(u.issues.map(i=>$(i.code,1,1,i.message)))}var Z=class{constructor(t){let r=at(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return J(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.solved)return{ok:!1,code:"inactive"};let r=q(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.history.length?(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0):!1}redo(){return this.future.length?(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0):!1}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[]}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=f=>{if(!Number.isSafeInteger(f.moves)||f.moves<0||!Number.isSafeInteger(f.pushes)||f.pushes<0||f.pushes>f.moves||!["up","down","left","right"].includes(f.facing))throw Error("Invalid saved counters");return{level:P({board:this.initial.board,state:f.state}),moves:f.moves,pushes:f.pushes,facing:f.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),a=t.history.map(r),l=t.future.map(r);this.restore(o),this.history=a,this.future=l}};function _(e,t){let r=e[t]?.moves;return Number.isSafeInteger(r)&&r>=0}function ce(e,t){return t.find(r=>!_(e,r.id))?.id}function xe(e,t,r){return t.some(o=>o.id===r)&&(_(e,r)||r===ce(e,t))}function ee(e,t,r,o){let a=t.filter(f=>xe(e,t,f.id)),l=a.findIndex(f=>f.id===r);return l<0?void 0:a[l+o]?.id}var st={1:13,2:34,3:23,4:27,5:33,6:79,7:89,8:25,9:37,10:59,11:32,12:45,13:26,14:33,15:28,16:34,17:38,18:37,19:30,20:31,21:20,22:31,23:45,24:48,25:170,26:32,27:58,28:7,29:62,30:58,31:54,32:26,33:58,34:65,35:37,36:43,37:37,38:48,39:66,40:53,41:60,42:53,43:75,44:75,45:40,46:25,47:28,48:59,49:48,50:63};var Et=["#f3aa19","#ee5e63","#a062d5","#278fe0","#2baf78","#ed7d32"];var Ot=window.matchMedia("(prefers-reduced-motion: reduce)"),I,ft;function Bt(){return Et[Math.floor(Math.random()*Et.length)]}function k(){I&&(cancelAnimationFrame(ft),I.remove(),I=void 0,document.body.classList.remove("win-celebrating"),window.removeEventListener("resize",k),document.removeEventListener("visibilitychange",k))}function qt(){if(k(),Ot.matches||document.hidden)return;let e=window.innerWidth,t=window.innerHeight,r=Math.min(window.devicePixelRatio||1,1.5,2560/Math.max(e,t)),o=document.createElement("canvas");o.width=Math.ceil(e*r),o.height=Math.ceil(t*r);let a=o.getContext("2d");if(!a)return;let l=Math.max(.65,Math.min(1.35,t/720)),f=[];for(let c of[-1,1])for(let x=0;x<38;x++)f.push({x:c===1?e*.06:e*.94,y:t*.86,vx:c*e*(.13+Math.random()*.36),vy:-t*(.55+Math.random()*.64),size:(6+Math.random()*7)*l,angle:Math.random()*Math.PI,spin:c*(2+Math.random()*8),color:Bt(),delay:Math.random()*.18});let n=[];for(let[c,x,d]of[[.23,.25,.08],[.77,.23,.3],[.5,.15,.55]]){let g=Bt();for(let v=0;v<32;v++){let R=(v+Math.random()*.65)*Math.PI/16,A=(75+Math.random()*110)*l;n.push({x:c*e,y:x*t,delay:d,life:.68+Math.random()*.55,vx:Math.cos(R)*A,vy:Math.sin(R)*A,color:v%5===0?"#ffca52":g})}}I=o,I.className="victory-canvas",I.setAttribute("aria-hidden","true"),document.body.append(I),document.body.classList.add("win-celebrating"),window.addEventListener("resize",k),document.addEventListener("visibilitychange",k),a.scale(r,r),a.lineCap="round";let u=performance.now();function i(c){let x=(c-u)/1e3;if(x>=2.35||Ot.matches){k();return}a.clearRect(0,0,e,t);for(let d of n){let g=x-d.delay;if(g<0||g>=d.life)continue;let v=g*(1-.28*g),R=d.x+d.vx*v,A=d.y+d.vy*v+38*l*g*g,wt=Math.min(.105,g);a.globalAlpha=.94*(1-g/d.life),a.strokeStyle=d.color,a.lineWidth=2.6*l,a.beginPath(),a.moveTo(R-d.vx*wt,A-(d.vy+76*l*g)*wt),a.lineTo(R,A),a.stroke()}for(let d of f){let g=x-d.delay;if(g<0)continue;let v=d.x+d.vx*(1-Math.exp(-1.6*g))/1.6,R=d.y+d.vy*g+t*.64*g*g;a.globalAlpha=Math.min(.95,(2.35-x)*2.4),a.fillStyle=d.color,a.save(),a.translate(v,R),a.rotate(d.angle+d.spin*g),a.scale(.28+.72*Math.abs(Math.cos(d.angle+g*7)),1),a.fillRect(-d.size/2,-d.size/3,d.size,d.size*.66),a.restore()}ft=requestAnimationFrame(i)}ft=requestAnimationFrame(i)}var he={salt:"tGAhgq8jv+M9IqI3G/aOUA==",iterations:6e5,paths:{1:"wkQW5nYBMbUtbWiZWXXP6CfrdC0iLkBOaCUbyes7RaQJ+gy/SprIiC8=",2:"ex9sttYOiAR0qxPR3cjCEmKKqhEfTWXwV+vUew6cdEW68pFbXZ8k6sx9PAdoFimHqaYl3hQ9sojV+5wg/Tc=",3:"I+kP37F3fjVJJ6HTjrgAhAU4oyf3kdAGb6WvETpC2XzWxfEDGVF9qK+nGqIxz0GCHyM7",4:"HaCPMonESjHgoNds1SD6BD24jRPmaspSJiVMCBcB0OR5qxqFGW6nSVBq4+qTMDAsrb7MXSjfzw==",5:"bftDD7qCgYsgB9rpmVJyWaIdMs+ffz9PGYr8VNXG8fLsgR21gjAKQKJ5QrfcrOLjOsaNeDJmE2ksQ5tv6A==",6:"/8cNfqB2FEXJ518lXZbOb70E6JP5Au/Fa8JJzY4tt8ZiK2EQBAFtMFnFN4oe6qJdYFMyv8k7QgiKwgqkwQFevnEQjuqhwiNAkyYbkZbkJ7Mv00DxnZ1xMn4qzSN3eRvv5GsTSNoIIRZifDE=",7:"2cHTmgE7UYevFrrJXc3Hw+zd4y/i322XWC+SCWWkSM6/9iVHwNkAiC38GKdjubbCybYuPXL0nKRfNUHV9b9LEyEq42D98hf9+Tn5rFcuNIbuBP0d6sCdE7d8aL/OANaIFuJ+bQ9pKuMLYXoeONupDLD1g59Q",8:"HfPeHrdUnLL1UbeTzy9LYbeQXHw05sX10PO0rDfO8DuccnozZdkvHzBaEanh7eXgw2OVOwo=",9:"O3V3X7fJ3IfKDVOoe1NSKpazPxfH2NZ7IYenKIHP0n0jbA15dSO26+858Ti023OvCjp+DVvvvwOrNMp2ulKDFfY=",10:"91RvXPMlrzTRJO58Xvm5fEVizgPJNSd7bwJGld5r/2YNjKPUasIOQ9YonnAY0n8LMuRnZiKf6tnHlcIcwEhNpYLbKnocpb00obPKx2rdti2mo8a0rFGR",11:"74SNrw+sSC0Qmat73fjYjGDlQiRmbPUB4ZLR8FbSJ/1vhwW5iKhsFwcMyZB5dVUNgXbLpwXfBfs7S1T7",12:"G/o4yikV7fJCS7O+ZyXiEn7Cwh5k6sceN/UnIEOmasdIwLiJlU1f/JKgtE9TShyHGHzw8Gr7EoDsg1kn9590j6BWjx05kiWV5A==",13:"ngR5dk799IvLgKZ/OwAcIp2PgQ/dHLJx+57tCXu8WxEbEY6CTrh8zg0EIW4EtzOFEv3fWavR",14:"pDRlT1Dqs+TCjx1H5+Raks9B9kd6TFWR1LQyC5YjQEAaLDe2MIf1YEScOOeNP7JAyPCXD4KHcWXqFcpjdg==",15:"wiUweD3Q8y++mgV1mtp/BAlpxsldUuosz2cYSfhObVyZtIHrNKTLc0AWDlfLIL38Ohz8vn5YN7o=",16:"lyDRDNLXMvefbwqCd+PwvwiNpMYzeFqV2n4728RZ3ONb4rmIE7hC6SHs0l+h7mfuz5cp/xdQFQ29X3rnjfI=",17:"C0Oda3LQd0I7Rba3RtUzb28ryay/zG39vv37tF+l650aoCKmroXrgWBf2i5RDPNt3sQJ+I8dWDqOPaUcY+8jQ4O/",18:"idi+amQHeuM7FHVTeiQG6OJJi6Suss79LZXLrrT3PGUPdsHMsJnIIzJ7Aneb4TY7irM6CA//cTSueHMtRcKvA+U=",19:"79PifTsOGTd7RRw0ohegduzl45S4feTG2rEXvK6gRvfDXv6nyK+HFvMaZlBN2aid7oKTP+Xd+b8XAg==",20:"N5ZyTmue/T0ywiiZ6EQgLHAWz8BNPG2fPBzIkXcx3ZGp+i9MkN62u/xx2F+ArNlpDwTcXaotc0VFCvM=",21:"gln6irijKh7EKsva+pbr6kwOpDzR/pez7C18qUdD3noO0EYv8uPl2uLANJG3SOqf",22:"9FFi5cHOkAgaUMsoF4FPdAzWkSHjUEsAW4PboUNIpJi558GAdxL2WVwQL2e0In+4nR686u6mAXMJl3A=",23:"smKeiyr0Hy2dCh21IYQbwjnsX1OFbGBgKJXw1pqA6oS5t5TQTHmNq7vEdILIlpNAXjJPTljPnbpNyYfgY6Chky1Ps0bYkfA6IA==",24:"7bGCjBBM/ASph4Knf2Q9jyalmu3y0H4J/Um7aTtlB3gD5u0Dtq/u6G+kFaskgBQcYPy200TQvfEUqqYZvjtSBNnukU5YE+hie8Huzg==",25:"ftTzbpq4ZKvNGst2Uvudg2wFutl7rTzJIwLaF2hBQx18cfjEkh8YuQBTPYwGUdzyEFOywSwReDuE7L3FBwLb4bjVblHvikcr1x9hRvYtXffNk+f58LTDLBnfrM9iS2vKgEEQdabgCR+4jzDqqorUAD+hlY8feCAI/W2mDf9InXsb28jo6lwVgKAFO7VmoDSrtWruzaalGlCI8zyb+u71xLSFosd2YZS0XidBegJ02kKfPxc+fDSd4FD15rcyItO1GD6A40t9",26:"5KWovA/XsdDh/EbOp4Q1GHSmp8sgb0/o9c5yWEhith6XwOc2ZaXDZSGdfurPnuikeXq5MJYVlB1xA1Jj",27:"hjYM8I6Md4S/jnG8/WwR+eSizWT+hswP/SgURKunZFJN8S0T7WJU04dLDmLcZqFAD4Bav9DIFKAY1mWaP7gF4WBC0GrfmHy32iBzjdHDxAz4ybNGVWA=",28:"tb45PD6m5QK8AwVizosiDSL3nO6IgmG2db3RkoenKqm8bRM=",29:"j8bPSvP69GIH3ltnC4Q1SlyKAZswreU9MpZAsiY64PlMPKIs/fu/6WG0AH1S/aLmrvOFnhWQFFdPhgkyJwI21uXR44uKiou9dvDo3I9+WctPzmYrVjcWHvCN",30:"QjffZTa/L1BHtuKg3G1Ofruvyr5OuCGyV2KjqUoAm09OQGrYCmbhLKwMj/IU/7BrMBr9d1aqAHM2JLJTOeOfITLe05xO+VIiJRnLWa7vn3p7cjdD2NQ=",31:"Qi7FVL4D0JgPQO5Hn8vQvMUSyXtBpvDlff71Lmj6ScxF43Yy3jwcnGFw+7hSc9eqMSj+OgJVSTd8IJmYz0wqUBYhMj6iBWiEQWB1qg4MNbFxuA==",32:"Xx6m/medmNRVWtaFntHFsGy9uO/VLFR85y6JnHl+p0zxyqPYqpWoTaUuoOPFkgDMFLg7so6E",33:"sNqdrqEiBNeF8U3O0GhCBcm2qPB+WWF9dvExcR49lk0YAwp2In+VpLimuMkh+MsURDfcQZ7V6GowGCa4Qd35HCP6Vfobwr58Demz5DflUQzDF+wMd1M=",34:"/44kRXrT9QIN14tfIXErERAsywYaCqrAoQ+4Zzem222ak2RO8vqieKqM6zQdff5FuI2+gcY3WOUhhRPIOWrKoEnNSV9KyqlhNpJ51oef6fTjQ5xnWX6d9CQxJOA4",35:"UfG9Z3PFwPJ54WBdM71uKtVeEOJ63+LLDppdBXJfs6rA1lpGW4lDqCvc6nyB9ImbZ/xQxaVFMeW+yFqORCK3/Rg=",36:"5yYCYAReXo0ElEQif3RjLs+ENLgTSrvBZWtBOIvyzJ1q9UVqt0Rgrtxyc9pOZ4WGEEvMetfCsW4moZEnGAoRoj8Z5Wl5DVk=",37:"omCwzR16pjFKyMQmqPt7KWKx4TH1cJ/8PHP+ScFiHKZzZssvgZ+y+q9zC09s8PIlBKrbrtlV1oC7sD7WyByDLEk=",38:"TjtD4a/CrmGlNcy2mYARJuKVAtJseAYBeDUOBUXzPfEWHtlrCrt3Sbkczx8gPLm75imlcLc5+ctfhXoOMSU+0Ghw/Syic8/fUzJFeg==",39:"k2UbOBWi4x9OrgZPeEpYoI/m0r6N4NcM9HpBReUoNOxNfc0GwBH87CSfAh77X0A48Gh7UZuPyow78wU1v7eqIalmBmP2mG8QqZ7CWEglbMDJWnhNJanS0aZzfcQdZw==",40:"zSs1p+fyscv5+p8+F/ovbT/k1fW5XJpGJ93rRtMIMhrKeR5HKF9TdBQiprLDy0THblxfqMk5NFvbd+hGnad1ZFv605YVzFpMGnkl9S9TAiK8",41:"oIKTovhb23nl7JaIaA1sZ0tAUjvJjwOd03Hfkucl3AoAnXuv4eIHz+J4/VtEmSU29R6J4IC8W6oCZRySiQvleDhB3R0+yB3fg4+EyeQAHNjFwM1T9zdV3g==",42:"Q0EIrKf3ynYbZ+fHl1F0G2ryRUirk7c64XjvsLx7wPmwkczENf18v7Q4yi2Ve+WnhgifUl5ZsAEwLnGHYdGcww2mQq9iQc2XNa1SDv9+GF6K",43:"5wuP6RQ75Qs28Ql7eS+cYrpGrYidjFm2Z6Or59ipFrmjQHrNLCZWg3/y2eheCHwvQ9Fp7hUCsQI+tr931BuLXFC2TBMSm1U34kKHkClhzPrpLPh/087HY93BD113erXPuG3rgj3ecw==",44:"aDdgpWOMQmT2Ufdq/PERnYfTGBtp9HGt9CP0b2lDcXBiArW14tFK1YZ5z4Cdjpt+hXe90HnE6a5SpFcmV8Y8VXff8StBp3EUZO6+elnPZsUIDPvryyTq5V51CD2m1ZmNh/DXlKwETg==",45:"kx6RZRfQjiVI1VrkGPAMjzVMuC34yHSvEvEPnV6yqyEiVtpMBDSXHskDWdnrkM5zTt4TxJw5UsPCXitu94jIVI/6BTA=",46:"B/qF4XaKQDGT2Un33FynOGyZA8smNEiD+aGVdOzXF9yxggIOSM9wbulVoWPlDZtbeczTo2Y=",47:"6grObnuGtFTS92X1hvl+vH5RiMtopOiH06jAcg6Mdd+ulfXtC+1JKwD9MccvZeqEHJHqFMBnE/Q=",48:"Aa8FugFATPYVNHrIWXNXChvLD3DO3PMlx0IiEhLg+HQohqd7EkuIUs6RAfwcmKWSN+5MMEV/Bpj2PagqWRAi1pazZNmDKOoy0gf6sCRDRL1GoxZzpq17",49:"VbDzrf6rpa5bnHyncRYxnow9l3SAKVDtuUH4Ypd0LYvI1zp5KL9DEyPMefH6lGdIgFShGJCPxRt1hMaHpc8QvV9xsrrabWdL9DvaNA==",50:"itMTDP6twK4EBgKnF4gdrxM6ntwDVzP3v4msP9XGULsowQ0lwpb8FHzcNZFdj2acVR1mAQ2iIco2zTQKbjnvgqwh1LUOxKJ+llcsKc7ZD36243z6KjTLmquukg=="}};var br={u:"up",r:"right",d:"down",l:"left"},$t=e=>Uint8Array.from(atob(e),t=>t.charCodeAt(0));async function It(e,t){let r=window.crypto.subtle,o=new TextEncoder,a=await r.importKey("raw",o.encode(t),"PBKDF2",!1,["deriveKey"]),l=await r.deriveKey({name:"PBKDF2",salt:$t(he.salt),iterations:he.iterations,hash:"SHA-256"},a,{name:"AES-GCM",length:256},!1,["decrypt"]),f=$t(he.paths[e]),n=await r.decrypt({name:"AES-GCM",iv:f.slice(0,12),additionalData:o.encode(String(e))},l,f.slice(12));return Array.from(new TextDecoder().decode(n),u=>br[u])}var Nt=e=>`${e.player}:${e.boxes.slice().sort((t,r)=>t-r).join(",")}`,E=new Map,lt,zt,G,V;function N(){clearTimeout(zt),G&&G.terminate(),G=void 0}function Ut(){N(),V&&URL.revokeObjectURL(V),V=void 0,lt=void 0,E.clear()}function Ht(e,t,r){N(),e!==lt&&(lt=e,E.clear());let o=Nt(t.state);if(E.has(o)){r(E.get(o));return}r({status:"searching"}),zt=setTimeout(()=>{let a;try{V||(V=URL.createObjectURL(new Blob([`(()=>{var U=["up","right","down","left"];function _(g,{maxExpanded:j=1/0,maxStates:F=1/0,maxMs:H=1/0}={}){var T;let J=Date.now(),{width:c,height:v,walls:L,goals:m}=g.board,f=c*v,N=new Set(L),p=Array.from({length:f},(o,t)=>{let n=t%c,e=Math.floor(t/c);return[e>0?t-c:-1,n+1<c?t+1:-1,e+1<v?t+c:-1,n>0?t-1:-1].map(r=>N.has(r)?-1:r)}),O=m.map(o=>{let t=Array(f).fill(1/0),n=[o];t[o]=0;for(let e=0;e<n.length;e++){let r=n[e];for(let a=0;a<4;a++){let s=p[r][a];s<0||p[s][a]<0||t[s]!==1/0||(t[s]=t[r]+1,n.push(s))}}return t}),I=new Map,C=o=>String.fromCharCode(...o);function q(o,t){if(I.has(t))return I.get(t);let n=Array(1<<m.length).fill(1/0);n[0]=0;for(let r=0;r<n.length-1;r++){if(n[r]===1/0)continue;let a=0;for(let s=r;s;s&=s-1)a++;for(let s=0;s<m.length;s++){if(r&1<<s)continue;let h=r|1<<s;n[h]=Math.min(n[h],n[r]+O[s][o[a]])}}let e=n[n.length-1];return I.set(t,e),e}let i=[],k=(o,t)=>o.f<t.f||o.f===t.f&&o.g>t.g;function D(o){let t=i.length;for(i.push(o);t;){let n=t-1>>1;if(!k(o,i[n]))break;i[t]=i[n],t=n}i[t]=o}function P(){let o=i[0],t=i.pop();if(i.length){let n=0;for(;n*2+1<i.length;){let e=n*2+1;if(e+1<i.length&&k(i[e+1],i[e])&&e++,!k(i[e],t))break;i[n]=i[e],n=e}i[n]=t}return o}let d=new Uint8Array(f),l=new Int16Array(f),A=new Int16Array(f),K=new Int16Array(f),z=new Int8Array(f);function B(o,t){d.fill(0),l.fill(-1);for(let e of o)d[e]=1;let n=1;A[0]=t,l[t]=0;for(let e=0;e<n;e++){let r=A[e];for(let a=0;a<4;a++){let s=p[r][a];s<0||d[s]||l[s]>=0||(A[n++]=s,l[s]=l[r]+1,K[s]=r,z[s]=a)}}}let y=g.state,E=C(y.boxes),G=E+String.fromCharCode(y.player),b=new Map([[G,0]]),M=q(y.boxes,E);if(M===1/0)return{status:"unsolvable"};D({...y,key:G,g:0,h:M,f:M});let u=0;for(;i.length;){let o=P();if(o.g===b.get(o.key)){if(o.h===0){let t=[];for(let n=o;n.parent;n=n.parent){t.push(U[n.dir]),B(n.parent.boxes,n.parent.player);for(let e=n.stand;e!==n.parent.player;e=K[e])t.push(U[z[e]])}return t.reverse(),{status:"solved",moves:o.g,path:t,expanded:u}}if(u>=j||b.size>=F||(u&1023)===0&&Date.now()-J>=H)return{status:"limit",expanded:u};u++,B(o.boxes,o.player);for(let t of o.boxes)for(let n=0;n<4;n++){let e=p[t][n],r=p[t][(n+2)%4];if(e<0||r<0||d[e]||l[r]<0)continue;let a=o.boxes.map(x=>x===t?e:x).sort((x,Q)=>x-Q),s=C(a),h=s+String.fromCharCode(t),w=o.g+l[r]+1;if(w>=((T=b.get(h))!=null?T:1/0))continue;let S=q(a,s);S!==1/0&&(b.set(h,w),D({boxes:a,player:t,key:h,g:w,h:S,f:w+S,parent:o,dir:n,stand:r}))}}}return{status:"unsolvable",expanded:u}}self.onmessage=({data:g})=>{try{self.postMessage(_(g,{maxExpanded:9e5,maxStates:14e5,maxMs:12e3}))}catch{self.postMessage({status:"error"})}};})();
`],{type:"text/javascript"}))),a=new Worker(V),G=a,a.onmessage=({data:l})=>{if(G===a){if(N(),E.size>4096&&E.clear(),l.status==="solved"){let f=t;for(let[n,u]of l.path.entries())E.set(Nt(f.state),{status:"solved",direction:u,remaining:l.path.length-n}),f=q(f,u).level}else l.status==="unsolvable"&&E.set(o,l);r(E.get(o)||l)}},a.onerror=()=>{G===a&&(N(),r({status:"error"}))},a.postMessage(t)}catch{N(),r({status:"error"})}},45)}var yr={ArrowUp:$e,ArrowDown:Oe,ArrowLeft:Be,ArrowRight:qe,ChevronLeft:ze,ChevronRight:Ue,Undo2:Xe,Redo2:We,RotateCcw:Ke,Grid2x2:ie,VolumeX:Je,Volume2:Qe,Maximize:Ge,Minimize:Ve,Footprints:He,Box:Ie,CircleCheck:ne,Check:Ne,LockKeyhole:je,X:Ye},s=e=>document.getElementById(e),Q=y.length===1,ye=Q?"sokoban-first-level-v1":"sokoban-web-v1",Ce=window.matchMedia("(max-width:680px)"),S={},C=!0,ge,it=!0,X=0,z=0,we=!1;function ut(e){try{return JSON.parse(e)||{}}catch{return{}}}function dt(e){return Number.isSafeInteger(e.currentVersion)&&e.currentVersion>0?e.currentVersion:0}try{let e=ut(localStorage.getItem(ye));e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(S=e.records),C=e.muted!==!1,ge=e.current,X=dt(e)}catch{it=!1}var m,M,K,oe=0,nt,jt,h,te=0,Vt,pt=!1,F,ae,B=new Map,mt={push:new Audio(D.push),win:new Audio(D.win)},Wt=Q?{game:new Audio(D.gameMusic)}:{game:new Audio(D.gameMusic),catalog:new Audio(D.catalogMusic)};for(let e of Object.values(Wt))e.loop=!0,e.volume=.18,e.preload="none";mt.push.volume=.16;mt.win.volume=.32;function ct(e){if(C)return;let t=mt[e];t.currentTime=0,t.play().catch(()=>{})}function ve(){let e=ke()?"catalog":"game";for(let[t,r]of Object.entries(Wt))C||document.hidden||m?.solved||t!==e?r.pause():r.play().catch(()=>{})}function ke(){return!Q&&Ce.matches&&s("catalog").classList.contains("open")}function H(e){e=e&&!Q&&Ce.matches,s("catalog").classList.toggle("open",e),s("catalog-toggle").setAttribute("aria-expanded",String(e)),e&&h?.playing&&De(),ve()}function Kt(e,t){let r=S[e];return re(e)&&!(t.moves<r.moves||t.moves===r.moves&&t.pushes<(r.pushes??1/0))?!1:(S[e]=t,!0)}function Xt(e){let t=!1;if(e)for(let{id:r}of y)_(e,r)&&Kt(r,e[r])&&(t=!0);t&&Ae()}function se(){if(clearTimeout(nt),!(!z&&!we))try{let e=ut(localStorage.getItem(ye)),t=dt(e),r=z>=t&&z>0;Xt(e.records);let o=r?z:t;localStorage.setItem(ye,JSON.stringify({records:S,muted:we?C:e.muted!==!1,current:r?m.serialize():e.current,currentVersion:o})),X=Math.max(X,o),z=0,we=!1}catch{it=!1}}function fe(){z=Math.max(Date.now(),X+1,z+1),clearTimeout(nt),nt=setTimeout(se,180)}function L(e,t=2600){clearTimeout(jt),s("status").classList.remove("is-hint"),s("status").textContent=e,e&&t&&(jt=setTimeout(()=>s("status").textContent="",t))}function Me(){St({icons:yr})}function xt(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),Me()}function re(e){return _(S,e)}function Ae(){let e=y.filter(o=>re(o.id)).length;s("completed-count").textContent=e;let t=Math.round(e/y.length*100);s("completion-percent").textContent=`${t}%`,s("completion-bar").style.width=`${t}%`,document.querySelectorAll("[data-page]").forEach(o=>o.setAttribute("aria-selected",String(Number(o.dataset.page)===oe)));let r=document.createDocumentFragment();for(let o of y.slice(oe*25,oe*25+25)){let a=document.createElement("button"),l=!xe(S,y,o.id);if(a.className=`level-cell${re(o.id)?" completed":""}${m.id===o.id?" active":""}`,a.textContent=String(o.id).padStart(2,"0"),a.disabled=l,l){let f=document.createElement("i");f.dataset.lucide="lock-keyhole",f.className="lock-icon",a.append(f),a.title=`\u5148\u5B8C\u6210\u7B2C ${ce(S,y)} \u5173`}a.setAttribute("aria-label",`\u7B2C ${o.id} \u5173${l?"\uFF0C\u672A\u89E3\u9501":re(o.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),a.setAttribute("aria-current",m.id===o.id?"true":"false"),a.addEventListener("click",()=>le(o.id)),r.append(a)}s("level-grid").replaceChildren(r),s("personal-best").textContent=re(m.id)?`\u672C\u5173\u6700\u4F73 ${S[m.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173",s("previous").disabled=ee(S,y,m.id,-1)===void 0,s("next").disabled=ee(S,y,m.id,1)===void 0,Me()}function be(e){let t=document.createElement("img");return t.src=D[e],t.alt="",t.draggable=!1,t}function Se(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}var Sr={up:{label:"\u5411\u4E0A",dx:0,dy:-1,angle:-90},right:{label:"\u5411\u53F3",dx:1,dy:0,angle:0},down:{label:"\u5411\u4E0B",dx:0,dy:1,angle:90},left:{label:"\u5411\u5DE6",dx:-1,dy:0,angle:180}};function W(e){let t=s("status");!e&&!t.classList.contains("is-hint")||(L(e,0),t.classList.toggle("is-hint",!!e))}function Cr(e){if(e.status==="searching"){W("A* \u6B63\u5728\u8BA1\u7B97\u2026");return}if(e.status==="unsolvable"){W("\u5F53\u524D\u68CB\u5C40\u65E0\u89E3\uFF0C\u53EF\u4EE5\u64A4\u56DE\u6216\u91CD\u5F00");return}if(e.status==="limit"){W("\u5DF2\u8FBE\u5230\u641C\u7D22\u4E0A\u9650\uFF0C\u53EF\u64A4\u56DE\u6216\u6362\u4E00\u6B65\u518D\u8BD5");return}if(e.status!=="solved"){W("\u6682\u65F6\u65E0\u6CD5\u8BA1\u7B97 A* \u63D0\u793A");return}let{label:t,dx:r,dy:o,angle:a}=Sr[e.direction],{board:l,state:f}=m.level;F=document.createElement("span"),F.className="hint-marker",F.setAttribute("aria-hidden","true"),F.innerHTML="<span><b>\u279C</b></span>",F.style.setProperty("--hint-angle",`${a}deg`),Se(F,f.player%l.width-1+r,Math.floor(f.player/l.width)-1+o),s("board").append(F),ae=document.querySelector(`[data-direction="${e.direction}"]`),ae.classList.add("is-hint"),W(`A* \u5EFA\u8BAE${t} \xB7 \u6700\u5C11\u8FD8\u9700 ${e.remaining} \u6B65`)}function Pe(){if(F&&F.remove(),ae&&ae.classList.remove("is-hint"),F=ae=void 0,!pt||h||m.solved||document.hidden){N(),W("");return}Ht(m.id,m.level,Cr)}function Qt(e){pt=e,s("hint-toggle").setAttribute("aria-pressed",String(e)),e||Ut(),Pe()}function Le(e=m){let t=s("board"),r=e.level.board.width,o=new Set(e.level.board.walls),a=new Set(e.level.board.goals),l=document.createDocumentFragment();for(let f=0;f<M.height;f++)for(let n=0;n<M.width;n++){let u=(f+1)*r+n+1,i=document.createElement("div");if(i.className=`tile${o.has(u)?" wall":a.has(u)?" goal":""}`,Se(i,n,f),i.append(be(o.has(u)?"wall":"floor")),a.has(u)){let c=be("goal");c.className="goal-image",i.append(c)}l.append(i)}K=document.createElement("div"),K.className="piece player",K.append(be("playerDown")),l.append(K),t.replaceChildren(l),B.clear(),ht()}function ht(){if(!M)return;let e=s("board-stage"),t=Ce.matches;if(t){let a=e.getBoundingClientRect().top+window.scrollY,l=document.querySelector(".bottom-controls").offsetHeight,f=(e.clientWidth-24)*M.height/M.width+24,n=window.innerHeight-a-l-24,u=Math.ceil(Math.max(160,Math.min(f,n)));e.style.height!==`${u}px`&&(e.style.height=`${u}px`)}else e.style.height="";let r=Math.max(1,Math.floor(Math.min((e.clientWidth-(t?24:32))/M.width,(e.clientHeight-(t?24:36))/M.height,t?66:96))),o=s("board");o.style.setProperty("--cell",`${r}px`),o.style.width=`${r*M.width}px`,o.style.height=`${r*M.height}px`}function O(e,t=m){let r=t.level.board.width,o=s("board"),a=new Set(t.level.board.goals);if(e?.kind==="push"){let n=B.get(e.boxFrom);n&&(B.delete(e.boxFrom),B.set(e.boxTo,n))}let l=new Set(t.level.state.boxes);for(let[n,u]of B)l.has(n)||(u.remove(),B.delete(n));for(let n of l){let u=B.get(n);u||(u=document.createElement("div"),u.className="piece crate",u.append(be(a.has(n)?"boxGoal":"box")),o.append(u),B.set(n,u)),Se(u,n%r-1,Math.floor(n/r)-1);let i=D[a.has(n)?"boxGoal":"box"];u.firstChild.getAttribute("src")!==i&&(u.firstChild.src=i)}let f=t.level.state.player;Se(K,f%r-1,Math.floor(f/r)-1),K.firstChild.src=D[`player${t.facing[0].toUpperCase()+t.facing.slice(1)}`],s("moves").textContent=t.moves,s("pushes").textContent=t.pushes,s("goals").textContent=`${t.onGoals} / ${l.size}`,s("board").setAttribute("aria-label",`\u7B2C ${t.id} \u5173\uFF0C${t.moves} \u6B65\uFF0C${t.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${l.size} \u4E2A`),t===m&&(s("undo").disabled=!m.history.length,s("redo").disabled=!m.future.length,document.querySelectorAll("[data-direction]").forEach(n=>n.disabled=m.solved),ve(),Pe())}function le(e,t,r=!0){if(!xe(S,y,e)){if(m){L("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501");return}e=ce(S,y)||y[0].id,t=void 0}let o=y.find(a=>a.id===e);if(Te(!1),M=o,m=new Z(o),t)try{m.resume(t)}catch{L("\u5B58\u6863\u5DF2\u91CD\u7F6E")}oe=Math.floor((o.id-1)/25),H(!1),k(),s("success").open&&s("success").close(),s("level-number").textContent=String(o.id).padStart(2,"0"),s("optimal-moves").textContent=st[o.id],Le(),O(),Ae(),r&&fe()}function Jt(e=!1){Kt(m.id,{moves:m.moves,pushes:m.pushes}),se(),Ae(),ct("win"),Q?e&&L("\u5168\u90E8\u5F52\u4F4D\uFF01"):(s("success-stats").textContent=`\u7B2C ${String(m.id).padStart(2,"0")} \u5173 \xB7 ${m.moves} \u6B65 \xB7 ${m.pushes} \u6B21\u63A8\u52A8`,s("success-next").innerHTML=m.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',Me(),s("success").showModal()),e&&qt()}function gt(e){if(h||s("solution-lock").open||s("success").open||ke())return;let t=m.move(e);t.ok&&(L(""),O(t.move),fe(),m.solved?Jt(!0):t.move.kind==="push"&&ct("push"))}function Yt(){h||m.undo()&&(k(),L(""),O(),fe())}function Zt(){h||m.redo()&&(O(),fe(),m.solved&&Jt())}function _t(e){let t=s("solution-controls");t.hidden=!e,t.parentElement.classList.toggle("is-demonstrating",e),document.querySelector(".tools").hidden=e,document.querySelector(".dpad").hidden=e,s("show-solution").disabled=e,s("hint-toggle").disabled=e}function Re(){let{view:e,steps:t,playing:r}=h,o=e.moves===t.length;s("solution-progress").textContent=`${o?"\u6F14\u793A\u5B8C\u6210":"\u6700\u4F18\u89E3\u6F14\u793A"} \xB7 ${e.moves} / ${t.length} \u6B65`,s("solution-play").textContent=r?"\u6682\u505C\u6F14\u793A":o?"\u91CD\u64AD":"\u7EE7\u7EED\u6F14\u793A",s("solution-step").disabled=o}function Fe(){h.timer=setTimeout(er,Number(s("solution-speed").value))}function De(){clearTimeout(h.timer),h.playing=!1,Re()}function er(){let{view:e,steps:t}=h;if(e.moves>=t.length)return;let r=e.move(t[e.moves]);if(!r.ok){Te(),L("\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF");return}O(r.move,e),e.moves===t.length&&(h.playing=!1),Re(),h.playing&&Fe()}function Te(e=!0){h&&(clearTimeout(h.timer),h=void 0,_t(!1),e&&(Le(),O(),s("show-solution").focus()))}function tr(e){Vt=e,te++,s("solution-form").reset(),s("solution-error").textContent="",s("solution-unlock").disabled=!1,s("solution-title").textContent=e==="hint"?"A* \u8F85\u52A9":"\u6700\u4F18\u89E3\u6F14\u793A",s("solution-password-label").textContent=e==="hint"?"\u8F85\u52A9\u5BC6\u7801":"\u6F14\u793A\u5BC6\u7801",s("solution-unlock").textContent=e==="hint"?"\u89E3\u9501\u5E76\u5F00\u542F":"\u89E3\u9501\u5E76\u64AD\u653E",s("solution-lock").showModal()}s("show-solution").addEventListener("click",()=>tr("demo"));s("hint-toggle").addEventListener("click",()=>{pt?Qt(!1):tr("hint")});s("solution-cancel").addEventListener("click",()=>s("solution-lock").close());s("solution-form").addEventListener("submit",async e=>{e.preventDefault();let t=s("solution-lock"),r=s("solution-password"),o=s("solution-error"),a=s("solution-unlock");if(a.disabled)return;if(!window.crypto||!window.crypto.subtle){o.textContent="\u8BF7\u901A\u8FC7 HTTPS \u6216\u672C\u5730\u6587\u4EF6\u6253\u5F00\u8BFE\u4EF6\u3002";return}let l=++te,f=M,n=Vt;a.disabled=!0,o.textContent="\u6B63\u5728\u9A8C\u8BC1\u2026";let u=r.value;r.value="";let i;try{i=await It(f.id,u)}catch{l===te&&t.open&&(o.textContent="\u5BC6\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u8BD5\u3002",r.focus());return}finally{l===te&&(a.disabled=!1)}if(!(l!==te||!t.open||f!==M)){if(i.length!==st[f.id]||i.some(c=>!c)){o.textContent="\u672C\u5173\u89E3\u6CD5\u6570\u636E\u6709\u8BEF\u3002";return}if(t.close(),H(!1),n==="hint"){Qt(!0),s("hint-toggle").focus();return}k(),L(""),h={view:new Z(f),steps:i,playing:!0},Pe(),_t(!0),Le(h.view),O(void 0,h.view),Re(),s("solution-play").focus(),Fe()}});s("solution-play").addEventListener("click",()=>{if(h.playing){De();return}let{view:e,steps:t}=h;e.moves===t.length&&(e.restart(),Le(e),O(void 0,e)),h.playing=!0,Re(),Fe()});s("solution-step").addEventListener("click",()=>{De(),er()});s("solution-speed").addEventListener("change",()=>{h.playing&&(clearTimeout(h.timer),Fe())});s("solution-exit").addEventListener("click",()=>Te());s("undo").addEventListener("click",Yt);s("redo").addEventListener("click",Zt);s("restart").addEventListener("click",()=>{h||(k(),m.restart(),L(""),O(),fe())});s("previous").addEventListener("click",()=>le(ee(S,y,m.id,-1)));s("next").addEventListener("click",()=>le(ee(S,y,m.id,1)));s("success").addEventListener("close",()=>{s("success").open||k()});s("success-close").addEventListener("click",()=>s("success").close());s("success-next").addEventListener("click",()=>{Q?(s("success").close(),s("restart").click()):m.id<50?le(m.id+1):(s("success").close(),H(!0))});s("sound").addEventListener("click",()=>{C=!C,we=!0,s("sound").setAttribute("aria-pressed",String(!C)),xt(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),C||ct("push"),ve(),se()});s("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{L("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>xt(s("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));s("catalog-toggle").setAttribute("aria-expanded","false");s("catalog-toggle").addEventListener("click",()=>H(!ke()));s("catalog-close").addEventListener("click",()=>H(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{oe=Number(e.dataset.page),Ae()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>gt(e.dataset.direction)));var Gt={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||s("success").open||s("solution-lock").open)return;if(ke()){e.key==="Escape"&&H(!1);return}if(h){e.key==="Escape"&&Te();return}let t=e.key.length===1?e.key.toLowerCase():e.key;Gt[t]?(e.preventDefault(),gt(Gt[t])):t==="z"?(e.preventDefault(),Yt()):t==="y"?(e.preventDefault(),Zt()):t==="r"&&!e.repeat&&(e.preventDefault(),s("restart").click())});var U;s("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||h||m.solved||(U={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&s("board-stage").setPointerCapture(e.pointerId))});s("board-stage").addEventListener("pointerup",e=>{if(!U||U.id!==e.pointerId)return;let t=e.clientX-U.x,r=e.clientY-U.y;U=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&gt(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});s("board-stage").addEventListener("pointercancel",()=>U=null);window.addEventListener("pagehide",se);document.addEventListener("visibilitychange",()=>{document.hidden&&(h&&De(),se()),ve(),Pe()});window.addEventListener("storage",e=>{if(e.key!==ye||e.storageArea!==localStorage)return;let t=ut(e.newValue);X=Math.max(X,dt(t)),Xt(t.records)});new ResizeObserver(ht).observe(s("board-stage"));window.addEventListener("resize",()=>{!Ce.matches&&s("catalog").classList.contains("open")&&H(!1),ht()});xt(s("sound"),C?"volume-x":"volume-2",C?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");s("sound").setAttribute("aria-pressed",String(!C));le(Number.isInteger(ge?.id)?ge.id:1,ge,!1);it||L("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");Me();})();
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
