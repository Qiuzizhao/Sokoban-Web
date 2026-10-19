(()=>{var Ge=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{o.setAttribute(n,String(t[n]))}),r.length&&r.forEach(n=>{let u=Ge(...n);o.appendChild(u)}),o},Ve=([e,t,r])=>Ge(e,t,r);var dt=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),pt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",mt=e=>e.flatMap(pt).map(r=>r.trim()).filter(Boolean).filter((r,o,n)=>n.indexOf(r)===o).join(" "),xt=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),se=(e,{nameAttr:t,icons:r,attrs:o})=>{let n=e.getAttribute(t);if(n==null)return;let u=xt(n),a=r[u];if(!a)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let l=dt(e),[p,d,m]=a,x={...d,"data-lucide":n,...o,...l},h=mt(["lucide",`lucide-${n}`,l,o]);h&&Object.assign(x,{class:h});let ae=Ve([p,x,m]);return e.parentNode?.replaceChild(ae,e)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var fe=["svg",i,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var le=["svg",i,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var ne=["svg",i,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var ue=["svg",i,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var ie=["svg",i,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var de=["svg",i,[["path",{d:"M20 6 9 17l-5-5"}]]];var pe=["svg",i,[["path",{d:"m15 18-6-6 6-6"}]]];var me=["svg",i,[["path",{d:"m9 18 6-6-6-6"}]]];var G=["svg",i,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var xe=["svg",i,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var V=["svg",i,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var ce=["svg",i,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var he=["svg",i,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var ge=["svg",i,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var we=["svg",i,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];var be=["svg",i,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];var ye=["svg",i,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var Se=["svg",i,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var Ce=["svg",i,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var ve=["svg",i,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var ke=["svg",i,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var Ae=["svg",i,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var We=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(n=>se(n,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){let n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(u=>se(u,{nameAttr:"icon-name",icons:e,attrs:r})))}};var b=[{id:1,width:6,height:5,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4]],boxes:[[3,2],[3,3]],goals:[[4,2],[2,3]],trees:[],xsb:`########
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
#########`}];var k={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var W=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function Me(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function g(e,t,r){return Object.freeze({code:e,path:t,message:r})}function v(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function Pe(e,t,r,o,n){if(!Array.isArray(e))return n.push(g(r,t,`${t} must be a dense array of cell keys.`)),null;let u=[],a=new Set;for(let l=0;l<e.length;l++){let p=`${t}[${l}]`;if(!(l in e)){n.push(g(r,p,`${p} must not be sparse.`));continue}let d=e[l];if(!v(d)||d<0||o!==null&&d>=o){n.push(g("invalid-cell-key",p,`${p} must be inside the board.`));continue}if(a.has(d)){n.push(g("duplicate-cell-key",p,`${p} duplicates cell key ${d}.`));continue}a.add(d),u.push(d)}return u.sort((l,p)=>l-p),u}function Ke(e,t){for(let r of e)if(t.has(r))return r;return null}function ct(e,t,r){let o=r%e,n=Math.floor(r/e);return o===0||n===0||o===e-1||n===t-1}function ht(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function K(e){let t=[],r=Me(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([g("invalid-level","$","Level must be a plain object.")])});let o=Me(r.board),n=Me(r.state);if(o||t.push(g("invalid-board","$.board","$.board must be a plain object.")),n||t.push(g("invalid-state","$.state","$.state must be a plain object.")),!o||!n)return Object.freeze({ok:!1,issues:Object.freeze(t)});let u=o.width,a=o.height;(!v(u)||u<=0)&&t.push(g("invalid-width","$.board.width","Width must be a positive safe integer.")),(!v(a)||a<=0)&&t.push(g("invalid-height","$.board.height","Height must be a positive safe integer."));let l=null;if(v(u)&&u>0&&v(a)&&a>0){let h=u*a;Number.isSafeInteger(h)?l=h:t.push(g("board-too-large","$.board","Board cell count must be a safe integer."))}let p=Pe(o.walls,"$.board.walls","invalid-walls",l,t),d=Pe(o.goals,"$.board.goals","invalid-goals",l,t),m=Pe(n.boxes,"$.state.boxes","invalid-boxes",l,t),x=n.player;if((!v(x)||x<0||l!==null&&x>=l)&&t.push(g("invalid-player","$.state.player","Player must be inside the board.")),p&&d&&m&&v(u)&&v(a)&&v(x)&&x>=0&&l!==null){let h=new Set(p),ae=new Set(m),He=Ke(d,h),je=Ke(m,h);if(He!==null&&t.push(g("wall-goal-overlap","$.board.goals",`Goal ${He} overlaps a wall.`)),h.has(x)&&t.push(g("wall-player-overlap","$.state.player",`Player ${x} overlaps a wall.`)),je!==null&&t.push(g("wall-box-overlap","$.state.boxes",`Box ${je} overlaps a wall.`)),ae.has(x)&&t.push(g("player-box-overlap","$.state.player",`Player ${x} overlaps a box.`)),m.length===0&&t.push(g("no-boxes","$.state.boxes","Level must contain at least one box.")),m.length!==d.length&&t.push(g("box-goal-count-mismatch","$.state.boxes",`Box count ${m.length} must equal goal count ${d.length}.`)),t.length===0){for(let D=0;D<l;D++)if(ct(u,a,D)&&!h.has(D)){t.push(g("open-boundary","$.board.walls",`Boundary cell ${D} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:ht({width:u,height:a,walls:p,goals:d},{player:x,boxes:m})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function S(e){let t=K(e);if(!t.ok)throw new W(t.issues);return t.level}var X=Object.freeze(["up","right","down","left"]),gt=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function wt(e){return typeof e=="string"&&X.includes(e)}function Je(e){let t=S(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function Xe(e,t,r){let{width:o,height:n}=e.board,u=t%o,a=Math.floor(t/o),[l,p]=gt[r],d=u+l,m=a+p;return d<0||d>=o||m<0||m>=n?null:d+m*o}function L(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function _e(e){return Object.freeze(e)}function O(e,t){let r=Je(e);if(!wt(t))return L("invalid-direction",null);let{level:o,walls:n,boxes:u}=r,a=o.state.player,l=Xe(o,a,t);if(l===null)return L("outside-board",t);if(n.has(l))return L("wall",t);if(!u.has(l)){let x=S({board:o.board,state:{player:l,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:x,move:_e({kind:"walk",direction:t,playerFrom:a,playerTo:l})})}let p=Xe(o,l,t);if(p===null)return L("box-outside-board",t);if(n.has(p))return L("box-wall",t);if(u.has(p))return L("box-box",t);let d=o.state.boxes.map(x=>x===l?p:x),m=S({board:o.board,state:{player:l,boxes:d}});return Object.freeze({ok:!0,level:m,move:_e({kind:"push",direction:t,playerFrom:a,playerTo:l,boxFrom:l,boxTo:p})})}function E(e){let{level:t,goals:r}=Je(e);return t.state.boxes.every(o=>r.has(o))}var Ye=[[0,-1],[1,0],[0,1],[-1,0]],bt=[...Ye,[1,-1],[1,1],[-1,1],[-1,-1]];function Qe(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,n){for(let u=0;u<t.length;u++){let[a,l]=t[u];n(r+a,o+l,a!==0&&l!==0?Math.SQRT2:1,u)}},distance(r,o,n,u){let a=Math.abs(n-r),l=Math.abs(u-o);return t.length===4?a+l:a+l+(Math.SQRT2-2)*Math.min(a,l)}})}var Ze=Qe("rect4",Ye),et=Qe("rect8",bt);var c;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(c||(c={}));var po=[c.Right,c.Down],mo=[c.Right,c.Down,c.DownRight,c.DownLeft],yt=[c.Up,c.Right,c.Down,c.Left],St=[c.Up,c.Right,c.Down,c.Left,c.UpRight,c.DownRight,c.DownLeft,c.UpLeft];var oa=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var Pa=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function M(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function B(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function Pt(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function Te(e){if(typeof e!="string")return B([M("empty-level",1,1,"Level notation must be a string.")]);let t=Pt(e);if(t.length===0||t[0]?.length===0)return B([M("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let d=0;d<t.length;d++)t[d].length!==r&&o.push(M("ragged-row",d+1,Math.min(t[d].length,r)+1,`Row ${d+1} has width ${t[d].length}; expected ${r}.`));if(o.length>0)return B(o);let n=[],u=[],a=[],l=-1;for(let d=0;d<t.length;d++)for(let m=0;m<r;m++){let x=t[d][m],h=m+d*r;switch(x){case"#":n.push(h);break;case".":u.push(h);break;case"$":a.push(h);break;case"*":a.push(h),u.push(h);break;case"@":case"+":l!==-1?o.push(M("multiple-players",d+1,m+1,"Level must contain exactly one player.")):l=h,x==="+"&&u.push(h);break;case" ":break;default:o.push(M("unknown-symbol",d+1,m+1,`Unknown Sokoban symbol ${JSON.stringify(x)}.`))}}if(l===-1&&o.push(M("missing-player",1,1,"Level must contain one player.")),o.length>0)return B(o);let p=K({board:{width:r,height:t.length,walls:n,goals:u},state:{player:l,boxes:a}});return p.ok?Object.freeze({ok:!0,level:p.level}):B(p.issues.map(d=>M(d.code,1,1,d.message)))}var J=class{constructor(t){let r=Te(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return E(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.paused||this.solved)return{ok:!1,code:"inactive"};let r=O(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.paused||!this.history.length?!1:(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0)}redo(){return this.paused||!this.future.length?!1:(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0)}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[],this.paused=!1}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=a=>{if(!Number.isSafeInteger(a.moves)||a.moves<0||!Number.isSafeInteger(a.pushes)||a.pushes<0||a.pushes>a.moves||!["up","down","left","right"].includes(a.facing))throw Error("Invalid saved counters");return{level:S({board:this.initial.board,state:a.state}),moves:a.moves,pushes:a.pushes,facing:a.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),n=t.history.map(r),u=t.future.map(r);this.restore(o),this.history=n,this.future=u}};function Y(e,t){let r=e[t]?.moves;return Number.isSafeInteger(r)&&r>=0}function Q(e,t){return t.find(r=>!Y(e,r.id))?.id}function Z(e,t,r){return t.some(o=>o.id===r)&&(Y(e,r)||r===Q(e,t))}function q(e,t,r,o){let n=t.filter(a=>Z(e,t,a.id)),u=n.findIndex(a=>a.id===r);return u<0?void 0:n[u+o]?.id}var Rt={ArrowUp:ue,ArrowDown:fe,ArrowLeft:le,ArrowRight:ne,ChevronLeft:pe,ChevronRight:me,Undo2:Ce,Redo2:ye,RotateCcw:Se,Pause:we,Play:be,Grid2x2:V,VolumeX:ke,Volume2:ve,Maximize:he,Minimize:ge,Footprints:xe,Box:ie,CircleCheck:G,Check:de,LockKeyhole:ce,X:Ae},f=e=>document.getElementById(e),ft="sokoban-web-v1",w={},y=!0,ee,Ee=!0;try{let e=JSON.parse(localStorage.getItem(ft)||"{}");e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(w=e.records),y=e.muted!==!1,ee=e.current}catch{Ee=!1}var s,C,$,N=0,De,at,A=new Map,Be={push:new Audio(k.push),win:new Audio(k.win)},lt={game:new Audio(k.gameMusic),catalog:new Audio(k.catalogMusic)};for(let e of Object.values(lt))e.loop=!0,e.volume=.18,e.preload="none";Be.push.volume=.16;Be.win.volume=.32;function qe(e){if(y)return;let t=Be[e];t.currentTime=0,t.play().catch(()=>{})}function re(){let e=f("catalog").classList.contains("open")?"catalog":"game";for(let[t,r]of Object.entries(lt))y||document.hidden||s?.paused||s?.solved||t!==e?r.pause():r.play().catch(()=>{})}function U(e){f("catalog").classList.toggle("open",e),f("catalog-toggle").setAttribute("aria-expanded",String(e)),re()}function z(){clearTimeout(De);try{localStorage.setItem(ft,JSON.stringify({records:w,muted:y,current:s.serialize()}))}catch{Ee=!1}}function H(){clearTimeout(De),De=setTimeout(z,180)}function R(e){clearTimeout(at),f("status").textContent=e,e&&(at=setTimeout(()=>f("status").textContent="",2600))}function oe(){We({icons:Rt})}function F(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),oe()}function I(e){return Y(w,e)}function Ie(){let e=b.filter(r=>I(r.id)).length;f("completed-count").textContent=e,f("completion-percent").textContent=`${e*2}%`,f("completion-bar").style.width=`${e*2}%`,document.querySelectorAll("[data-page]").forEach(r=>r.setAttribute("aria-selected",String(Number(r.dataset.page)===N)));let t=document.createDocumentFragment();for(let r of b.slice(N*25,N*25+25)){let o=document.createElement("button"),n=!Z(w,b,r.id);if(o.className=`level-cell${I(r.id)?" completed":""}${s.id===r.id?" active":""}`,o.textContent=String(r.id).padStart(2,"0"),o.disabled=n,n){let u=document.createElement("i");u.dataset.lucide="lock-keyhole",u.className="lock-icon",o.append(u),o.title=`\u5148\u5B8C\u6210\u7B2C ${Q(w,b)} \u5173`}o.setAttribute("aria-label",`\u7B2C ${r.id} \u5173${n?"\uFF0C\u672A\u89E3\u9501":I(r.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),o.setAttribute("aria-current",s.id===r.id?"true":"false"),o.addEventListener("click",()=>j(r.id)),t.append(o)}f("level-grid").replaceChildren(t),f("personal-best").textContent=I(s.id)?`\u672C\u5173\u6700\u4F73 ${w[s.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173",f("previous").disabled=q(w,b,s.id,-1)===void 0,f("next").disabled=q(w,b,s.id,1)===void 0,oe()}function te(e){let t=document.createElement("img");return t.src=k[e],t.alt="",t.draggable=!1,t}function Oe(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}function Lt(){let e=f("board"),t=s.level.board.width,r=new Set(s.level.board.walls),o=new Set(s.level.board.goals),n=document.createDocumentFragment();for(let u=0;u<C.height;u++)for(let a=0;a<C.width;a++){let l=(u+1)*t+a+1,p=document.createElement("div");if(p.className=`tile${r.has(l)?" wall":o.has(l)?" goal":""}`,Oe(p,a,u),p.append(te(r.has(l)?"wall":"floor")),o.has(l)){let d=te("goal");d.className="goal-image",p.append(d)}n.append(p)}$=document.createElement("div"),$.className="piece player",$.append(te("playerDown")),n.append($),e.replaceChildren(n),A.clear(),Ne()}function Ne(){if(!C)return;let e=f("board-stage"),t=window.matchMedia("(max-width:680px)").matches;if(t){let n=e.getBoundingClientRect().top+window.scrollY,u=document.querySelector(".bottom-controls").offsetHeight,a=(e.clientWidth-24)*C.height/C.width+24,l=window.innerHeight-n-u-24,p=Math.ceil(Math.max(160,Math.min(a,l)));e.style.height!==`${p}px`&&(e.style.height=`${p}px`)}else e.style.height="";let r=Math.floor(Math.min((e.clientWidth-(t?24:40))/C.width,(e.clientHeight-(t?24:44))/C.height,66)),o=f("board");o.style.setProperty("--cell",`${Math.max(12,r)}px`),o.style.width=`${Math.max(12,r)*C.width}px`,o.style.height=`${Math.max(12,r)*C.height}px`}function T(e){let t=s.level.board.width,r=f("board"),o=new Set(s.level.board.goals);if(e?.kind==="push"){let a=A.get(e.boxFrom);a&&(A.delete(e.boxFrom),A.set(e.boxTo,a))}let n=new Set(s.level.state.boxes);for(let[a,l]of A)n.has(a)||(l.remove(),A.delete(a));for(let a of s.level.state.boxes){let l=A.get(a);l||(l=document.createElement("div"),l.className="piece crate",l.append(te(o.has(a)?"boxGoal":"box")),r.append(l),A.set(a,l)),Oe(l,a%t-1,Math.floor(a/t)-1);let p=k[o.has(a)?"boxGoal":"box"];l.firstChild.getAttribute("src")!==p&&(l.firstChild.src=p)}let u=s.level.state.player;Oe($,u%t-1,Math.floor(u/t)-1),$.firstChild.src=k[`player${s.facing[0].toUpperCase()+s.facing.slice(1)}`],f("moves").textContent=s.moves,f("pushes").textContent=s.pushes,f("goals").textContent=`${s.onGoals} / ${s.level.state.boxes.length}`,f("board").setAttribute("aria-label",`\u7B2C ${s.id} \u5173\uFF0C${s.moves} \u6B65\uFF0C${s.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${s.level.state.boxes.length} \u4E2A`),f("undo").disabled=!s.history.length||s.paused,f("redo").disabled=!s.future.length||s.paused,document.querySelectorAll("[data-direction]").forEach(a=>a.disabled=s.paused||s.solved),f("pause").disabled=s.solved,f("pause-cover").hidden=!s.paused,re()}function j(e,t){if(!Z(w,b,e)){if(s){R("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501");return}e=Q(w,b)||b[0].id,t=void 0}let r=b.find(o=>o.id===e);if(C=r,s=new J(r),t)try{s.resume(t)}catch{R("\u5B58\u6863\u5DF2\u91CD\u7F6E")}N=Math.floor((r.id-1)/25),U(!1),f("success").open&&f("success").close(),f("level-number").textContent=String(r.id).padStart(2,"0"),F(f("pause"),"pause","\u6682\u505C"),Lt(),T(),Ie(),H()}function nt(){let e=w[s.id];(!I(s.id)||s.moves<e.moves||s.moves===e.moves&&s.pushes<e.pushes)&&(w[s.id]={moves:s.moves,pushes:s.pushes}),z(),Ie(),qe("win"),f("success-stats").textContent=`\u7B2C ${String(s.id).padStart(2,"0")} \u5173 \xB7 ${s.moves} \u6B65 \xB7 ${s.pushes} \u6B21\u63A8\u52A8`,f("success-next").innerHTML=s.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',oe(),f("success").showModal()}function Ue(e){if(f("success").open||f("catalog").classList.contains("open"))return;let t=s.move(e);t.ok&&(R(""),T(t.move),H(),s.solved?nt():t.move.kind==="push"&&qe("push"))}function ut(){s.undo()&&(R(""),T(),H())}function it(){s.redo()&&(T(),H(),s.solved&&nt())}function ze(){s.solved||(s.paused=!s.paused,F(f("pause"),s.paused?"play":"pause",s.paused?"\u7EE7\u7EED":"\u6682\u505C"),T())}f("undo").addEventListener("click",ut);f("redo").addEventListener("click",it);f("restart").addEventListener("click",()=>{s.restart(),R(""),F(f("pause"),"pause","\u6682\u505C"),T(),H()});f("previous").addEventListener("click",()=>j(q(w,b,s.id,-1)));f("next").addEventListener("click",()=>j(q(w,b,s.id,1)));f("pause").addEventListener("click",ze);f("resume").addEventListener("click",ze);f("success-close").addEventListener("click",()=>f("success").close());f("success-next").addEventListener("click",()=>{s.id<50?j(s.id+1):(f("success").close(),U(!0))});f("sound").addEventListener("click",()=>{y=!y,f("sound").setAttribute("aria-pressed",String(!y)),F(f("sound"),y?"volume-x":"volume-2",y?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),y||qe("push"),re(),z()});f("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{R("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>F(f("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));f("catalog-toggle").setAttribute("aria-expanded","false");f("catalog-toggle").addEventListener("click",()=>U(!f("catalog").classList.contains("open")));f("catalog-close").addEventListener("click",()=>U(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{N=Number(e.dataset.page),Ie()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>Ue(e.dataset.direction)));var st={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||f("success").open)return;if(f("catalog").classList.contains("open")){e.key==="Escape"&&U(!1);return}let t=e.key.length===1?e.key.toLowerCase():e.key;st[t]?(e.preventDefault(),Ue(st[t])):t==="z"?(e.preventDefault(),ut()):t==="y"?(e.preventDefault(),it()):t==="r"&&!e.repeat?(e.preventDefault(),f("restart").click()):t==="Escape"&&!e.repeat&&(e.preventDefault(),ze())});var P;f("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||s.paused||s.solved||(P={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&f("board-stage").setPointerCapture(e.pointerId))});f("board-stage").addEventListener("pointerup",e=>{if(!P||P.id!==e.pointerId)return;let t=e.clientX-P.x,r=e.clientY-P.y;P=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&Ue(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});f("board-stage").addEventListener("pointercancel",()=>P=null);window.addEventListener("pagehide",z);document.addEventListener("visibilitychange",()=>{document.hidden&&z(),re()});new ResizeObserver(Ne).observe(f("board-stage"));window.addEventListener("resize",Ne);F(f("sound"),y?"volume-x":"volume-2",y?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");f("sound").setAttribute("aria-pressed",String(!y));j(Number.isInteger(ee?.id)?ee.id:1,ee);Ee||R("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");oe();})();
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
