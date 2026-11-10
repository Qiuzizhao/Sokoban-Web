(()=>{var _e=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{o.setAttribute(a,String(t[a]))}),r.length&&r.forEach(a=>{let u=_e(...a);o.appendChild(u)}),o},Je=([e,t,r])=>_e(e,t,r);var St=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),Ct=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",vt=e=>e.flatMap(Ct).map(r=>r.trim()).filter(Boolean).filter((r,o,a)=>a.indexOf(r)===o).join(" "),kt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),ie=(e,{nameAttr:t,icons:r,attrs:o})=>{let a=e.getAttribute(t);if(a==null)return;let u=kt(a),s=r[u];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let n=St(e),[m,i,c]=s,x={...i,"data-lucide":a,...o,...n},d=vt(["lucide",`lucide-${a}`,n,o]);d&&Object.assign(x,{class:d});let h=Je([m,x,c]);return e.parentNode?.replaceChild(h,e)};var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var de=["svg",p,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var pe=["svg",p,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var me=["svg",p,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var xe=["svg",p,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var ce=["svg",p,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var he=["svg",p,[["path",{d:"M20 6 9 17l-5-5"}]]];var ge=["svg",p,[["path",{d:"m15 18-6-6 6-6"}]]];var we=["svg",p,[["path",{d:"m9 18 6-6-6-6"}]]];var _=["svg",p,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var be=["svg",p,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var J=["svg",p,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var ye=["svg",p,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var Se=["svg",p,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var Ce=["svg",p,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var ve=["svg",p,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];var ke=["svg",p,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];var Me=["svg",p,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var Ae=["svg",p,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var Pe=["svg",p,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var Re=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var Le=["svg",p,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var $e=["svg",p,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var Ye=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(a=>ie(a,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){let a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(u=>ie(u,{nameAttr:"icon-name",icons:e,attrs:r})))}};var b=[{id:1,width:6,height:5,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4]],boxes:[[3,2],[3,3]],goals:[[4,2],[2,3]],trees:[],xsb:`########
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
#########`}];var R={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var Y=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function Fe(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function w(e,t,r){return Object.freeze({code:e,path:t,message:r})}function L(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function Te(e,t,r,o,a){if(!Array.isArray(e))return a.push(w(r,t,`${t} must be a dense array of cell keys.`)),null;let u=[],s=new Set;for(let n=0;n<e.length;n++){let m=`${t}[${n}]`;if(!(n in e)){a.push(w(r,m,`${m} must not be sparse.`));continue}let i=e[n];if(!L(i)||i<0||o!==null&&i>=o){a.push(w("invalid-cell-key",m,`${m} must be inside the board.`));continue}if(s.has(i)){a.push(w("duplicate-cell-key",m,`${m} duplicates cell key ${i}.`));continue}s.add(i),u.push(i)}return u.sort((n,m)=>n-m),u}function Qe(e,t){for(let r of e)if(t.has(r))return r;return null}function Mt(e,t,r){let o=r%e,a=Math.floor(r/e);return o===0||a===0||o===e-1||a===t-1}function At(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function Q(e){let t=[],r=Fe(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([w("invalid-level","$","Level must be a plain object.")])});let o=Fe(r.board),a=Fe(r.state);if(o||t.push(w("invalid-board","$.board","$.board must be a plain object.")),a||t.push(w("invalid-state","$.state","$.state must be a plain object.")),!o||!a)return Object.freeze({ok:!1,issues:Object.freeze(t)});let u=o.width,s=o.height;(!L(u)||u<=0)&&t.push(w("invalid-width","$.board.width","Width must be a positive safe integer.")),(!L(s)||s<=0)&&t.push(w("invalid-height","$.board.height","Height must be a positive safe integer."));let n=null;if(L(u)&&u>0&&L(s)&&s>0){let d=u*s;Number.isSafeInteger(d)?n=d:t.push(w("board-too-large","$.board","Board cell count must be a safe integer."))}let m=Te(o.walls,"$.board.walls","invalid-walls",n,t),i=Te(o.goals,"$.board.goals","invalid-goals",n,t),c=Te(a.boxes,"$.state.boxes","invalid-boxes",n,t),x=a.player;if((!L(x)||x<0||n!==null&&x>=n)&&t.push(w("invalid-player","$.state.player","Player must be inside the board.")),m&&i&&c&&L(u)&&L(s)&&L(x)&&x>=0&&n!==null){let d=new Set(m),h=new Set(c),C=Qe(i,d),A=Qe(c,d);if(C!==null&&t.push(w("wall-goal-overlap","$.board.goals",`Goal ${C} overlaps a wall.`)),d.has(x)&&t.push(w("wall-player-overlap","$.state.player",`Player ${x} overlaps a wall.`)),A!==null&&t.push(w("wall-box-overlap","$.state.boxes",`Box ${A} overlaps a wall.`)),h.has(x)&&t.push(w("player-box-overlap","$.state.player",`Player ${x} overlaps a box.`)),c.length===0&&t.push(w("no-boxes","$.state.boxes","Level must contain at least one box.")),c.length!==i.length&&t.push(w("box-goal-count-mismatch","$.state.boxes",`Box count ${c.length} must equal goal count ${i.length}.`)),t.length===0){for(let v=0;v<n;v++)if(Mt(u,s,v)&&!d.has(v)){t.push(w("open-boundary","$.board.walls",`Boundary cell ${v} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:At({width:u,height:s,walls:m,goals:i},{player:x,boxes:c})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function k(e){let t=Q(e);if(!t.ok)throw new Y(t.issues);return t.level}var Z=Object.freeze(["up","right","down","left"]),Pt=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function Rt(e){return typeof e=="string"&&Z.includes(e)}function tt(e){let t=k(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function Ze(e,t,r){let{width:o,height:a}=e.board,u=t%o,s=Math.floor(t/o),[n,m]=Pt[r],i=u+n,c=s+m;return i<0||i>=o||c<0||c>=a?null:i+c*o}function E(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function et(e){return Object.freeze(e)}function N(e,t){let r=tt(e);if(!Rt(t))return E("invalid-direction",null);let{level:o,walls:a,boxes:u}=r,s=o.state.player,n=Ze(o,s,t);if(n===null)return E("outside-board",t);if(a.has(n))return E("wall",t);if(!u.has(n)){let x=k({board:o.board,state:{player:n,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:x,move:et({kind:"walk",direction:t,playerFrom:s,playerTo:n})})}let m=Ze(o,n,t);if(m===null)return E("box-outside-board",t);if(a.has(m))return E("box-wall",t);if(u.has(m))return E("box-box",t);let i=o.state.boxes.map(x=>x===n?m:x),c=k({board:o.board,state:{player:n,boxes:i}});return Object.freeze({ok:!0,level:c,move:et({kind:"push",direction:t,playerFrom:s,playerTo:n,boxFrom:n,boxTo:m})})}function z(e){let{level:t,goals:r}=tt(e);return t.state.boxes.every(o=>r.has(o))}var rt=[[0,-1],[1,0],[0,1],[-1,0]],Lt=[...rt,[1,-1],[1,1],[-1,1],[-1,-1]];function ot(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,a){for(let u=0;u<t.length;u++){let[s,n]=t[u];a(r+s,o+n,s!==0&&n!==0?Math.SQRT2:1,u)}},distance(r,o,a,u){let s=Math.abs(a-r),n=Math.abs(u-o);return t.length===4?s+n:s+n+(Math.SQRT2-2)*Math.min(s,n)}})}var at=ot("rect4",rt),st=ot("rect8",Lt);var g;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(g||(g={}));var Co=[g.Right,g.Down],vo=[g.Right,g.Down,g.DownRight,g.DownLeft],$t=[g.Up,g.Right,g.Down,g.Left],Ft=[g.Up,g.Right,g.Down,g.Left,g.UpRight,g.DownRight,g.DownLeft,g.UpLeft];var ma=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var qa=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function T(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function U(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function qt(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function qe(e){if(typeof e!="string")return U([T("empty-level",1,1,"Level notation must be a string.")]);let t=qt(e);if(t.length===0||t[0]?.length===0)return U([T("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let i=0;i<t.length;i++)t[i].length!==r&&o.push(T("ragged-row",i+1,Math.min(t[i].length,r)+1,`Row ${i+1} has width ${t[i].length}; expected ${r}.`));if(o.length>0)return U(o);let a=[],u=[],s=[],n=-1;for(let i=0;i<t.length;i++)for(let c=0;c<r;c++){let x=t[i][c],d=c+i*r;switch(x){case"#":a.push(d);break;case".":u.push(d);break;case"$":s.push(d);break;case"*":s.push(d),u.push(d);break;case"@":case"+":n!==-1?o.push(T("multiple-players",i+1,c+1,"Level must contain exactly one player.")):n=d,x==="+"&&u.push(d);break;case" ":break;default:o.push(T("unknown-symbol",i+1,c+1,`Unknown Sokoban symbol ${JSON.stringify(x)}.`))}}if(n===-1&&o.push(T("missing-player",1,1,"Level must contain one player.")),o.length>0)return U(o);let m=Q({board:{width:r,height:t.length,walls:a,goals:u},state:{player:n,boxes:s}});return m.ok?Object.freeze({ok:!0,level:m.level}):U(m.issues.map(i=>T(i.code,1,1,i.message)))}var te=class{constructor(t){let r=qe(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return z(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.paused||this.solved)return{ok:!1,code:"inactive"};let r=N(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.paused||!this.history.length?!1:(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0)}redo(){return this.paused||!this.future.length?!1:(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0)}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[],this.paused=!1}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=s=>{if(!Number.isSafeInteger(s.moves)||s.moves<0||!Number.isSafeInteger(s.pushes)||s.pushes<0||s.pushes>s.moves||!["up","down","left","right"].includes(s.facing))throw Error("Invalid saved counters");return{level:k({board:this.initial.board,state:s.state}),moves:s.moves,pushes:s.pushes,facing:s.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),a=t.history.map(r),u=t.future.map(r);this.restore(o),this.history=a,this.future=u}};function re(e,t){let r=e[t]?.moves;return Number.isSafeInteger(r)&&r>=0}function oe(e,t){return t.find(r=>!re(e,r.id))?.id}function ae(e,t,r){return t.some(o=>o.id===r)&&(re(e,r)||r===oe(e,t))}function H(e,t,r,o){let a=t.filter(s=>ae(e,t,s.id)),u=a.findIndex(s=>s.id===r);return u<0?void 0:a[u+o]?.id}var ut={1:13,2:34,3:23,4:27,5:33,6:79,7:89,8:25,9:37,10:59,11:32,12:45,13:26,14:33,15:28,16:34,17:38,18:37,19:30,20:31,21:20,22:31,23:45,24:48,25:170,26:32,27:58,28:7,29:62,30:58,31:54,32:26,33:58,34:65,35:37,36:43,37:37,38:48,39:66,40:53,41:60,42:53,43:75,44:75,45:40,46:25,47:28,48:59,49:48,50:63};var it=["#f3aa19","#ee5e63","#a062d5","#278fe0","#2baf78","#ed7d32"];var dt=window.matchMedia("(prefers-reduced-motion: reduce)"),D,Ie;function pt(){return it[Math.floor(Math.random()*it.length)]}function M(){D&&(cancelAnimationFrame(Ie),D.remove(),D=void 0,document.body.classList.remove("win-celebrating"),window.removeEventListener("resize",M),document.removeEventListener("visibilitychange",M))}function mt(){if(M(),dt.matches||document.hidden)return;let e=window.innerWidth,t=window.innerHeight,r=Math.min(window.devicePixelRatio||1,1.5,2560/Math.max(e,t)),o=document.createElement("canvas");o.width=Math.ceil(e*r),o.height=Math.ceil(t*r);let a=o.getContext("2d");if(!a)return;let u=Math.max(.65,Math.min(1.35,t/720)),s=[];for(let c of[-1,1])for(let x=0;x<38;x++)s.push({x:c===1?e*.06:e*.94,y:t*.86,vx:c*e*(.13+Math.random()*.36),vy:-t*(.55+Math.random()*.64),size:(6+Math.random()*7)*u,angle:Math.random()*Math.PI,spin:c*(2+Math.random()*8),color:pt(),delay:Math.random()*.18});let n=[];for(let[c,x,d]of[[.23,.25,.08],[.77,.23,.3],[.5,.15,.55]]){let h=pt();for(let C=0;C<32;C++){let A=(C+Math.random()*.65)*Math.PI/16,v=(75+Math.random()*110)*u;n.push({x:c*e,y:x*t,delay:d,life:.68+Math.random()*.55,vx:Math.cos(A)*v,vy:Math.sin(A)*v,color:C%5===0?"#ffca52":h})}}D=o,D.className="victory-canvas",D.setAttribute("aria-hidden","true"),document.body.append(D),document.body.classList.add("win-celebrating"),window.addEventListener("resize",M),document.addEventListener("visibilitychange",M),a.scale(r,r),a.lineCap="round";let m=performance.now();function i(c){let x=(c-m)/1e3;if(x>=2.35||dt.matches){M();return}a.clearRect(0,0,e,t);for(let d of n){let h=x-d.delay;if(h<0||h>=d.life)continue;let C=h*(1-.28*h),A=d.x+d.vx*C,v=d.y+d.vy*C+38*u*h*h,Xe=Math.min(.105,h);a.globalAlpha=.94*(1-h/d.life),a.strokeStyle=d.color,a.lineWidth=2.6*u,a.beginPath(),a.moveTo(A-d.vx*Xe,v-(d.vy+76*u*h)*Xe),a.lineTo(A,v),a.stroke()}for(let d of s){let h=x-d.delay;if(h<0)continue;let C=d.x+d.vx*(1-Math.exp(-1.6*h))/1.6,A=d.y+d.vy*h+t*.64*h*h;a.globalAlpha=Math.min(.95,(2.35-x)*2.4),a.fillStyle=d.color,a.save(),a.translate(C,A),a.rotate(d.angle+d.spin*h),a.scale(.28+.72*Math.abs(Math.cos(d.angle+h*7)),1),a.fillRect(-d.size/2,-d.size/3,d.size,d.size*.66),a.restore()}Ie=requestAnimationFrame(i)}Ie=requestAnimationFrame(i)}var It={ArrowUp:xe,ArrowDown:de,ArrowLeft:pe,ArrowRight:me,ChevronLeft:ge,ChevronRight:we,Undo2:Pe,Redo2:Me,RotateCcw:Ae,Pause:ve,Play:ke,Grid2x2:J,VolumeX:Le,Volume2:Re,Maximize:Se,Minimize:Ce,Footprints:be,Box:ce,CircleCheck:_,Check:he,LockKeyhole:ye,X:$e},f=e=>document.getElementById(e),le=b.length===1,ht=le?"sokoban-first-level-v1":"sokoban-web-v1",y={},S=!0,se,Ue=!0;try{let e=JSON.parse(localStorage.getItem(ht)||"{}");e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(y=e.records),S=e.muted!==!1,se=e.current}catch{Ue=!1}var l,P,B,G=0,Ne,xt,$=new Map,He={push:new Audio(R.push),win:new Audio(R.win)},gt=le?{game:new Audio(R.gameMusic)}:{game:new Audio(R.gameMusic),catalog:new Audio(R.catalogMusic)};for(let e of Object.values(gt))e.loop=!0,e.volume=.18,e.preload="none";He.push.volume=.16;He.win.volume=.32;function je(e){if(S)return;let t=He[e];t.currentTime=0,t.play().catch(()=>{})}function ne(){let e=f("catalog").classList.contains("open")?"catalog":"game";for(let[t,r]of Object.entries(gt))S||document.hidden||l?.paused||l?.solved||t!==e?r.pause():r.play().catch(()=>{})}function V(e){f("catalog").classList.toggle("open",e),f("catalog-toggle").setAttribute("aria-expanded",String(e)),ne()}function W(){clearTimeout(Ne);try{localStorage.setItem(ht,JSON.stringify({records:y,muted:S,current:l.serialize()}))}catch{Ue=!1}}function K(){clearTimeout(Ne),Ne=setTimeout(W,180)}function F(e){clearTimeout(xt),f("status").textContent=e,e&&(xt=setTimeout(()=>f("status").textContent="",2600))}function ue(){Ye({icons:It})}function q(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),ue()}function j(e){return re(y,e)}function Ge(){let e=b.filter(o=>j(o.id)).length;f("completed-count").textContent=e;let t=Math.round(e/b.length*100);f("completion-percent").textContent=`${t}%`,f("completion-bar").style.width=`${t}%`,document.querySelectorAll("[data-page]").forEach(o=>o.setAttribute("aria-selected",String(Number(o.dataset.page)===G)));let r=document.createDocumentFragment();for(let o of b.slice(G*25,G*25+25)){let a=document.createElement("button"),u=!ae(y,b,o.id);if(a.className=`level-cell${j(o.id)?" completed":""}${l.id===o.id?" active":""}`,a.textContent=String(o.id).padStart(2,"0"),a.disabled=u,u){let s=document.createElement("i");s.dataset.lucide="lock-keyhole",s.className="lock-icon",a.append(s),a.title=`\u5148\u5B8C\u6210\u7B2C ${oe(y,b)} \u5173`}a.setAttribute("aria-label",`\u7B2C ${o.id} \u5173${u?"\uFF0C\u672A\u89E3\u9501":j(o.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),a.setAttribute("aria-current",l.id===o.id?"true":"false"),a.addEventListener("click",()=>X(o.id)),r.append(a)}f("level-grid").replaceChildren(r),f("personal-best").textContent=j(l.id)?`\u672C\u5173\u6700\u4F73 ${y[l.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173",f("previous").disabled=H(y,b,l.id,-1)===void 0,f("next").disabled=H(y,b,l.id,1)===void 0,ue()}function fe(e){let t=document.createElement("img");return t.src=R[e],t.alt="",t.draggable=!1,t}function ze(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}function Nt(){let e=f("board"),t=l.level.board.width,r=new Set(l.level.board.walls),o=new Set(l.level.board.goals),a=document.createDocumentFragment();for(let u=0;u<P.height;u++)for(let s=0;s<P.width;s++){let n=(u+1)*t+s+1,m=document.createElement("div");if(m.className=`tile${r.has(n)?" wall":o.has(n)?" goal":""}`,ze(m,s,u),m.append(fe(r.has(n)?"wall":"floor")),o.has(n)){let i=fe("goal");i.className="goal-image",m.append(i)}a.append(m)}B=document.createElement("div"),B.className="piece player",B.append(fe("playerDown")),a.append(B),e.replaceChildren(a),$.clear(),Ve()}function Ve(){if(!P)return;let e=f("board-stage"),t=window.matchMedia("(max-width:680px)").matches;if(t){let a=e.getBoundingClientRect().top+window.scrollY,u=document.querySelector(".bottom-controls").offsetHeight,s=(e.clientWidth-24)*P.height/P.width+24,n=window.innerHeight-a-u-24,m=Math.ceil(Math.max(160,Math.min(s,n)));e.style.height!==`${m}px`&&(e.style.height=`${m}px`)}else e.style.height="";let r=Math.max(1,Math.floor(Math.min((e.clientWidth-(t?24:32))/P.width,(e.clientHeight-(t?24:36))/P.height,t?66:96))),o=f("board");o.style.setProperty("--cell",`${r}px`),o.style.width=`${r*P.width}px`,o.style.height=`${r*P.height}px`}function I(e){let t=l.level.board.width,r=f("board"),o=new Set(l.level.board.goals);if(e?.kind==="push"){let s=$.get(e.boxFrom);s&&($.delete(e.boxFrom),$.set(e.boxTo,s))}let a=new Set(l.level.state.boxes);for(let[s,n]of $)a.has(s)||(n.remove(),$.delete(s));for(let s of l.level.state.boxes){let n=$.get(s);n||(n=document.createElement("div"),n.className="piece crate",n.append(fe(o.has(s)?"boxGoal":"box")),r.append(n),$.set(s,n)),ze(n,s%t-1,Math.floor(s/t)-1);let m=R[o.has(s)?"boxGoal":"box"];n.firstChild.getAttribute("src")!==m&&(n.firstChild.src=m)}let u=l.level.state.player;ze(B,u%t-1,Math.floor(u/t)-1),B.firstChild.src=R[`player${l.facing[0].toUpperCase()+l.facing.slice(1)}`],f("moves").textContent=l.moves,f("pushes").textContent=l.pushes,f("goals").textContent=`${l.onGoals} / ${l.level.state.boxes.length}`,f("board").setAttribute("aria-label",`\u7B2C ${l.id} \u5173\uFF0C${l.moves} \u6B65\uFF0C${l.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${l.level.state.boxes.length} \u4E2A`),f("undo").disabled=!l.history.length||l.paused,f("redo").disabled=!l.future.length||l.paused,document.querySelectorAll("[data-direction]").forEach(s=>s.disabled=l.paused||l.solved),f("pause").disabled=l.solved,f("pause-cover").hidden=!l.paused,ne()}function X(e,t){if(!ae(y,b,e)){if(l){F("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501");return}e=oe(y,b)||b[0].id,t=void 0}let r=b.find(o=>o.id===e);if(P=r,l=new te(r),t)try{l.resume(t)}catch{F("\u5B58\u6863\u5DF2\u91CD\u7F6E")}G=Math.floor((r.id-1)/25),V(!1),M(),f("success").open&&f("success").close(),f("level-number").textContent=String(r.id).padStart(2,"0"),f("optimal-moves").textContent=ut[r.id],q(f("pause"),"pause","\u6682\u505C"),Nt(),I(),Ge(),K()}function wt(e=!1){let t=y[l.id];(!j(l.id)||l.moves<t.moves||l.moves===t.moves&&l.pushes<t.pushes)&&(y[l.id]={moves:l.moves,pushes:l.pushes}),W(),Ge(),je("win"),le?e&&F("\u5168\u90E8\u5F52\u4F4D\uFF01"):(f("success-stats").textContent=`\u7B2C ${String(l.id).padStart(2,"0")} \u5173 \xB7 ${l.moves} \u6B65 \xB7 ${l.pushes} \u6B21\u63A8\u52A8`,f("success-next").innerHTML=l.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',ue(),f("success").showModal()),e&&mt()}function We(e){if(f("success").open||f("catalog").classList.contains("open"))return;let t=l.move(e);t.ok&&(F(""),I(t.move),K(),l.solved?wt(!0):t.move.kind==="push"&&je("push"))}function bt(){l.undo()&&(M(),F(""),I(),K())}function yt(){l.redo()&&(I(),K(),l.solved&&wt())}function Ke(){l.solved||(l.paused=!l.paused,q(f("pause"),l.paused?"play":"pause",l.paused?"\u7EE7\u7EED":"\u6682\u505C"),I())}f("undo").addEventListener("click",bt);f("redo").addEventListener("click",yt);f("restart").addEventListener("click",()=>{M(),l.restart(),F(""),q(f("pause"),"pause","\u6682\u505C"),I(),K()});f("previous").addEventListener("click",()=>X(H(y,b,l.id,-1)));f("next").addEventListener("click",()=>X(H(y,b,l.id,1)));f("pause").addEventListener("click",Ke);f("resume").addEventListener("click",Ke);f("success").addEventListener("close",()=>{f("success").open||M()});f("success-close").addEventListener("click",()=>f("success").close());f("success-next").addEventListener("click",()=>{le?(f("success").close(),f("restart").click()):l.id<50?X(l.id+1):(f("success").close(),V(!0))});f("sound").addEventListener("click",()=>{S=!S,f("sound").setAttribute("aria-pressed",String(!S)),q(f("sound"),S?"volume-x":"volume-2",S?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),S||je("push"),ne(),W()});f("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{F("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>q(f("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));f("catalog-toggle").setAttribute("aria-expanded","false");f("catalog-toggle").addEventListener("click",()=>V(!f("catalog").classList.contains("open")));f("catalog-close").addEventListener("click",()=>V(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{G=Number(e.dataset.page),Ge()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>We(e.dataset.direction)));var ct={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||f("success").open)return;if(f("catalog").classList.contains("open")){e.key==="Escape"&&V(!1);return}let t=e.key.length===1?e.key.toLowerCase():e.key;ct[t]?(e.preventDefault(),We(ct[t])):t==="z"?(e.preventDefault(),bt()):t==="y"?(e.preventDefault(),yt()):t==="r"&&!e.repeat?(e.preventDefault(),f("restart").click()):t==="Escape"&&!e.repeat&&(e.preventDefault(),Ke())});var O;f("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||l.paused||l.solved||(O={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&f("board-stage").setPointerCapture(e.pointerId))});f("board-stage").addEventListener("pointerup",e=>{if(!O||O.id!==e.pointerId)return;let t=e.clientX-O.x,r=e.clientY-O.y;O=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&We(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});f("board-stage").addEventListener("pointercancel",()=>O=null);window.addEventListener("pagehide",W);document.addEventListener("visibilitychange",()=>{document.hidden&&W(),ne()});new ResizeObserver(Ve).observe(f("board-stage"));window.addEventListener("resize",Ve);q(f("sound"),S?"volume-x":"volume-2",S?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");f("sound").setAttribute("aria-pressed",String(!S));X(Number.isInteger(se?.id)?se.id:1,se);Ue||F("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");ue();})();
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
lucide/dist/esm/icons/pause.js:
lucide/dist/esm/icons/play.js:
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
