(()=>{var Ne=(e,t,r=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{o.setAttribute(n,String(t[n]))}),r.length&&r.forEach(n=>{let u=Ne(...n);o.appendChild(u)}),o},Ue=([e,t,r])=>Ne(e,t,r);var ft=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),lt=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",nt=e=>e.flatMap(lt).map(r=>r.trim()).filter(Boolean).filter((r,o,n)=>n.indexOf(r)===o).join(" "),ut=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,o)=>r.toUpperCase()+o.toLowerCase()),ee=(e,{nameAttr:t,icons:r,attrs:o})=>{let n=e.getAttribute(t);if(n==null)return;let u=ut(n),a=r[u];if(!a)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let l=ft(e),[p,i,m]=a,x={...i,"data-lucide":n,...o,...l},h=nt(["lucide",`lucide-${n}`,l,o]);h&&Object.assign(x,{class:h});let Z=Ue([p,x,m]);return e.parentNode?.replaceChild(Z,e)};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var te=["svg",d,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var re=["svg",d,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var oe=["svg",d,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var ae=["svg",d,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var se=["svg",d,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];var fe=["svg",d,[["path",{d:"M20 6 9 17l-5-5"}]]];var le=["svg",d,[["path",{d:"m15 18-6-6 6-6"}]]];var ne=["svg",d,[["path",{d:"m9 18 6-6-6-6"}]]];var j=["svg",d,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];var ue=["svg",d,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];var G=["svg",d,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];var ie=["svg",d,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var de=["svg",d,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];var pe=["svg",d,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];var me=["svg",d,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];var xe=["svg",d,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];var ce=["svg",d,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var he=["svg",d,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];var ge=["svg",d,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var we=["svg",d,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var be=["svg",d,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var ze=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(n=>ee(n,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){let n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(u=>ee(u,{nameAttr:"icon-name",icons:e,attrs:r})))}};var D=[{id:1,width:6,height:5,player:[1,1],walls:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[5,1],[0,2],[5,2],[0,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4]],boxes:[[3,2],[3,3]],goals:[[4,2],[2,3]],trees:[],xsb:`########
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
#########`}];var C={playerUp:"./assets/playerUp.png",playerDown:"./assets/playerDown.png",playerLeft:"./assets/playerLeft.png",playerRight:"./assets/playerRight.png",floor:"./assets/floor.png",wall:"./assets/wall.png",box:"./assets/box.png",boxGoal:"./assets/boxGoal.png",goal:"./assets/goal.png",tree:"./assets/tree.png",catalogExit:"./assets/catalogExit.mp3",push:"./assets/push.wav",win:"./assets/win.mp3",menu:"./assets/menu.mp3",catalogMusic:"./assets/catalogMusic.mp3",extraMusic:"./assets/extraMusic.mp3",gameMusic:"./assets/gameMusic.mp3",gameStart:"./assets/gameStart.mp3"};var V=class extends TypeError{constructor(t){super(`Invalid Sokoban level: ${t.map(r=>r.message).join("; ")}`),this.name="SokobanLevelValidationError",this.issues=Object.freeze([...t])}};function ye(e){if(typeof e!="object"||e===null||Array.isArray(e))return null;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null?e:null}function g(e,t,r){return Object.freeze({code:e,path:t,message:r})}function S(e){return Number.isSafeInteger(e)&&!Object.is(e,-0)}function Se(e,t,r,o,n){if(!Array.isArray(e))return n.push(g(r,t,`${t} must be a dense array of cell keys.`)),null;let u=[],a=new Set;for(let l=0;l<e.length;l++){let p=`${t}[${l}]`;if(!(l in e)){n.push(g(r,p,`${p} must not be sparse.`));continue}let i=e[l];if(!S(i)||i<0||o!==null&&i>=o){n.push(g("invalid-cell-key",p,`${p} must be inside the board.`));continue}if(a.has(i)){n.push(g("duplicate-cell-key",p,`${p} duplicates cell key ${i}.`));continue}a.add(i),u.push(i)}return u.sort((l,p)=>l-p),u}function He(e,t){for(let r of e)if(t.has(r))return r;return null}function it(e,t,r){let o=r%e,n=Math.floor(r/e);return o===0||n===0||o===e-1||n===t-1}function dt(e,t){return Object.freeze({board:Object.freeze({width:e.width,height:e.height,walls:Object.freeze([...e.walls]),goals:Object.freeze([...e.goals])}),state:Object.freeze({player:t.player,boxes:Object.freeze([...t.boxes])})})}function W(e){let t=[],r=ye(e);if(!r)return Object.freeze({ok:!1,issues:Object.freeze([g("invalid-level","$","Level must be a plain object.")])});let o=ye(r.board),n=ye(r.state);if(o||t.push(g("invalid-board","$.board","$.board must be a plain object.")),n||t.push(g("invalid-state","$.state","$.state must be a plain object.")),!o||!n)return Object.freeze({ok:!1,issues:Object.freeze(t)});let u=o.width,a=o.height;(!S(u)||u<=0)&&t.push(g("invalid-width","$.board.width","Width must be a positive safe integer.")),(!S(a)||a<=0)&&t.push(g("invalid-height","$.board.height","Height must be a positive safe integer."));let l=null;if(S(u)&&u>0&&S(a)&&a>0){let h=u*a;Number.isSafeInteger(h)?l=h:t.push(g("board-too-large","$.board","Board cell count must be a safe integer."))}let p=Se(o.walls,"$.board.walls","invalid-walls",l,t),i=Se(o.goals,"$.board.goals","invalid-goals",l,t),m=Se(n.boxes,"$.state.boxes","invalid-boxes",l,t),x=n.player;if((!S(x)||x<0||l!==null&&x>=l)&&t.push(g("invalid-player","$.state.player","Player must be inside the board.")),p&&i&&m&&S(u)&&S(a)&&S(x)&&x>=0&&l!==null){let h=new Set(p),Z=new Set(m),qe=He(i,h),Ie=He(m,h);if(qe!==null&&t.push(g("wall-goal-overlap","$.board.goals",`Goal ${qe} overlaps a wall.`)),h.has(x)&&t.push(g("wall-player-overlap","$.state.player",`Player ${x} overlaps a wall.`)),Ie!==null&&t.push(g("wall-box-overlap","$.state.boxes",`Box ${Ie} overlaps a wall.`)),Z.has(x)&&t.push(g("player-box-overlap","$.state.player",`Player ${x} overlaps a box.`)),m.length===0&&t.push(g("no-boxes","$.state.boxes","Level must contain at least one box.")),m.length!==i.length&&t.push(g("box-goal-count-mismatch","$.state.boxes",`Box count ${m.length} must equal goal count ${i.length}.`)),t.length===0){for(let T=0;T<l;T++)if(it(u,a,T)&&!h.has(T)){t.push(g("open-boundary","$.board.walls",`Boundary cell ${T} must be a wall.`));break}}if(t.length===0)return Object.freeze({ok:!0,level:dt({width:u,height:a,walls:p,goals:i},{player:x,boxes:m})})}return Object.freeze({ok:!1,issues:Object.freeze(t)})}function b(e){let t=W(e);if(!t.ok)throw new V(t.issues);return t.level}var K=Object.freeze(["up","right","down","left"]),pt=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function mt(e){return typeof e=="string"&&K.includes(e)}function Ve(e){let t=b(e);return{level:t,walls:new Set(t.board.walls),goals:new Set(t.board.goals),boxes:new Set(t.state.boxes)}}function je(e,t,r){let{width:o,height:n}=e.board,u=t%o,a=Math.floor(t/o),[l,p]=pt[r],i=u+l,m=a+p;return i<0||i>=o||m<0||m>=n?null:i+m*o}function M(e,t){return Object.freeze({ok:!1,code:e,direction:t})}function Ge(e){return Object.freeze(e)}function O(e,t){let r=Ve(e);if(!mt(t))return M("invalid-direction",null);let{level:o,walls:n,boxes:u}=r,a=o.state.player,l=je(o,a,t);if(l===null)return M("outside-board",t);if(n.has(l))return M("wall",t);if(!u.has(l)){let x=b({board:o.board,state:{player:l,boxes:o.state.boxes}});return Object.freeze({ok:!0,level:x,move:Ge({kind:"walk",direction:t,playerFrom:a,playerTo:l})})}let p=je(o,l,t);if(p===null)return M("box-outside-board",t);if(n.has(p))return M("box-wall",t);if(u.has(p))return M("box-box",t);let i=o.state.boxes.map(x=>x===l?p:x),m=b({board:o.board,state:{player:l,boxes:i}});return Object.freeze({ok:!0,level:m,move:Ge({kind:"push",direction:t,playerFrom:a,playerTo:l,boxFrom:l,boxTo:p})})}function B(e){let{level:t,goals:r}=Ve(e);return t.state.boxes.every(o=>r.has(o))}var We=[[0,-1],[1,0],[0,1],[-1,0]],xt=[...We,[1,-1],[1,1],[-1,1],[-1,-1]];function Ke(e,t){return Object.freeze({id:e,forEachNeighbor(r,o,n){for(let u=0;u<t.length;u++){let[a,l]=t[u];n(r+a,o+l,a!==0&&l!==0?Math.SQRT2:1,u)}},distance(r,o,n,u){let a=Math.abs(n-r),l=Math.abs(u-o);return t.length===4?a+l:a+l+(Math.SQRT2-2)*Math.min(a,l)}})}var Xe=Ke("rect4",We),_e=Ke("rect8",xt);var c;(function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.UpRight=4]="UpRight",e[e.DownRight=5]="DownRight",e[e.DownLeft=6]="DownLeft",e[e.UpLeft=7]="UpLeft"})(c||(c={}));var oo=[c.Right,c.Down],ao=[c.Right,c.Down,c.DownRight,c.DownLeft],ct=[c.Up,c.Right,c.Down,c.Left],ht=[c.Up,c.Right,c.Down,c.Left,c.UpRight,c.DownRight,c.DownLeft,c.UpLeft];var _o=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});var ba=Object.freeze({up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]});function k(e,t,r,o){return Object.freeze({code:e,line:t,column:r,message:o})}function E(e){return Object.freeze({ok:!1,issues:Object.freeze(e)})}function Ct(e){let t=e.replace(/^\uFEFF/,"").replace(/\r\n?/g,`
`).split(`
`);for(;t[0]==="";)t.shift();for(;t[t.length-1]==="";)t.pop();return t}function Me(e){if(typeof e!="string")return E([k("empty-level",1,1,"Level notation must be a string.")]);let t=Ct(e);if(t.length===0||t[0]?.length===0)return E([k("empty-level",1,1,"Level notation must not be empty.")]);let r=t[0].length,o=[];for(let i=0;i<t.length;i++)t[i].length!==r&&o.push(k("ragged-row",i+1,Math.min(t[i].length,r)+1,`Row ${i+1} has width ${t[i].length}; expected ${r}.`));if(o.length>0)return E(o);let n=[],u=[],a=[],l=-1;for(let i=0;i<t.length;i++)for(let m=0;m<r;m++){let x=t[i][m],h=m+i*r;switch(x){case"#":n.push(h);break;case".":u.push(h);break;case"$":a.push(h);break;case"*":a.push(h),u.push(h);break;case"@":case"+":l!==-1?o.push(k("multiple-players",i+1,m+1,"Level must contain exactly one player.")):l=h,x==="+"&&u.push(h);break;case" ":break;default:o.push(k("unknown-symbol",i+1,m+1,`Unknown Sokoban symbol ${JSON.stringify(x)}.`))}}if(l===-1&&o.push(k("missing-player",1,1,"Level must contain one player.")),o.length>0)return E(o);let p=W({board:{width:r,height:t.length,walls:n,goals:u},state:{player:l,boxes:a}});return p.ok?Object.freeze({ok:!0,level:p.level}):E(p.issues.map(i=>k(i.code,1,1,i.message)))}var _=class{constructor(t){let r=Me(t.xsb);if(!r.ok)throw Error(`Invalid level ${t.id}`);this.id=t.id,this.initial=r.level,this.restart()}get solved(){return B(this.level)}get onGoals(){return this.level.state.boxes.filter(t=>this.level.board.goals.includes(t)).length}snapshot(){return{level:this.level,moves:this.moves,pushes:this.pushes,facing:this.facing}}restore(t){Object.assign(this,t)}move(t){if(this.paused||this.solved)return{ok:!1,code:"inactive"};let r=O(this.level,t);return r.ok&&(this.history.push(this.snapshot()),this.future=[],this.level=r.level,this.moves++,r.move.kind==="push"&&this.pushes++,this.facing=t),r}undo(){return this.paused||!this.history.length?!1:(this.future.push(this.snapshot()),this.restore(this.history.pop()),!0)}redo(){return this.paused||!this.future.length?!1:(this.history.push(this.snapshot()),this.restore(this.future.pop()),!0)}restart(){this.level=this.initial,this.moves=0,this.pushes=0,this.facing="down",this.history=[],this.future=[],this.paused=!1}serialize(){let t=r=>({state:r.level.state,moves:r.moves,pushes:r.pushes,facing:r.facing});return{id:this.id,...t(this.snapshot()),history:this.history.map(t),future:this.future.map(t)}}resume(t){let r=a=>{if(!Number.isSafeInteger(a.moves)||a.moves<0||!Number.isSafeInteger(a.pushes)||a.pushes<0||a.pushes>a.moves||!["up","down","left","right"].includes(a.facing))throw Error("Invalid saved counters");return{level:b({board:this.initial.board,state:a.state}),moves:a.moves,pushes:a.pushes,facing:a.facing}};if(t.id!==this.id||!Array.isArray(t.history)||!Array.isArray(t.future))throw Error("Invalid saved game");let o=r(t),n=t.history.map(r),u=t.future.map(r);this.restore(o),this.history=n,this.future=u}};var vt={ArrowUp:ae,ArrowDown:te,ArrowLeft:re,ArrowRight:oe,ChevronLeft:le,ChevronRight:ne,Undo2:he,Redo2:xe,RotateCcw:ce,Pause:pe,Play:me,Grid2x2:G,VolumeX:we,Volume2:ge,Maximize:ie,Minimize:de,Footprints:ue,Box:se,CircleCheck:j,Check:fe,X:be},s=e=>document.getElementById(e),tt="sokoban-web-v1",R={},w=!0,J,Le=!0;try{let e=JSON.parse(localStorage.getItem(tt)||"{}");e.records&&typeof e.records=="object"&&!Array.isArray(e.records)&&(R=e.records),w=e.muted!==!1,J=e.current}catch{Le=!1}var f,y,P,I=0,Pe,Ze,v=new Map,$e={push:new Audio(C.push),win:new Audio(C.win)},rt={game:new Audio(C.gameMusic),catalog:new Audio(C.catalogMusic)};for(let e of Object.values(rt))e.loop=!0,e.volume=.18,e.preload="none";$e.push.volume=.16;$e.win.volume=.32;function Fe(e){if(w)return;let t=$e[e];t.currentTime=0,t.play().catch(()=>{})}function Q(){let e=s("catalog").classList.contains("open")?"catalog":"game";for(let[t,r]of Object.entries(rt))w||document.hidden||f?.paused||f?.solved||t!==e?r.pause():r.play().catch(()=>{})}function N(e){s("catalog").classList.toggle("open",e),s("catalog-toggle").setAttribute("aria-expanded",String(e)),Q()}function U(){clearTimeout(Pe);try{localStorage.setItem(tt,JSON.stringify({records:R,muted:w,current:f.serialize()}))}catch{Le=!1}}function z(){clearTimeout(Pe),Pe=setTimeout(U,180)}function L(e){clearTimeout(Ze),s("status").textContent=e,e&&(Ze=setTimeout(()=>s("status").textContent="",2600))}function Te(){ze({icons:vt})}function $(e,t,r){e.innerHTML=`<i data-lucide="${t}"></i>`,e.title=r,e.setAttribute("aria-label",r),Te()}function q(e){return Number.isFinite(R[e]?.moves)}function De(){let e=D.filter(r=>q(r.id)).length;s("completed-count").textContent=e,s("completion-percent").textContent=`${e*2}%`,s("completion-bar").style.width=`${e*2}%`,document.querySelectorAll("[data-page]").forEach(r=>r.setAttribute("aria-selected",String(Number(r.dataset.page)===I)));let t=document.createDocumentFragment();for(let r of D.slice(I*25,I*25+25)){let o=document.createElement("button");o.className=`level-cell${q(r.id)?" completed":""}${f.id===r.id?" active":""}`,o.textContent=String(r.id).padStart(2,"0"),o.setAttribute("aria-label",`\u7B2C ${r.id} \u5173${q(r.id)?"\uFF0C\u5DF2\u901A\u5173":""}`),o.setAttribute("aria-current",f.id===r.id?"true":"false"),o.addEventListener("click",()=>H(r.id)),t.append(o)}s("level-grid").replaceChildren(t),s("personal-best").textContent=q(f.id)?`\u672C\u5173\u6700\u4F73 ${R[f.id].moves} \u6B65`:"\u8FD8\u672A\u901A\u5173"}function Y(e){let t=document.createElement("img");return t.src=C[e],t.alt="",t.draggable=!1,t}function Re(e,t,r){e.style.setProperty("--x",t),e.style.setProperty("--y",r)}function kt(){let e=s("board"),t=f.level.board.width,r=new Set(f.level.board.walls),o=new Set(f.level.board.goals),n=document.createDocumentFragment();for(let u=0;u<y.height;u++)for(let a=0;a<y.width;a++){let l=(u+1)*t+a+1,p=document.createElement("div");if(p.className=`tile${r.has(l)?" wall":o.has(l)?" goal":""}`,Re(p,a,u),p.append(Y(r.has(l)?"wall":"floor")),o.has(l)){let i=Y("goal");i.className="goal-image",p.append(i)}n.append(p)}P=document.createElement("div"),P.className="piece player",P.append(Y("playerDown")),n.append(P),e.replaceChildren(n),v.clear(),Oe()}function Oe(){if(!y)return;let e=s("board-stage"),t=window.matchMedia("(max-width:680px)").matches;if(t){let n=e.getBoundingClientRect().top+window.scrollY,u=document.querySelector(".bottom-controls").offsetHeight,a=(e.clientWidth-24)*y.height/y.width+24,l=window.innerHeight-n-u-24,p=Math.ceil(Math.max(160,Math.min(a,l)));e.style.height!==`${p}px`&&(e.style.height=`${p}px`)}else e.style.height="";let r=Math.floor(Math.min((e.clientWidth-(t?24:40))/y.width,(e.clientHeight-(t?24:44))/y.height,66)),o=s("board");o.style.setProperty("--cell",`${Math.max(12,r)}px`),o.style.width=`${Math.max(12,r)*y.width}px`,o.style.height=`${Math.max(12,r)*y.height}px`}function F(e){let t=f.level.board.width,r=s("board"),o=new Set(f.level.board.goals);if(e?.kind==="push"){let a=v.get(e.boxFrom);a&&(v.delete(e.boxFrom),v.set(e.boxTo,a))}let n=new Set(f.level.state.boxes);for(let[a,l]of v)n.has(a)||(l.remove(),v.delete(a));for(let a of f.level.state.boxes){let l=v.get(a);l||(l=document.createElement("div"),l.className="piece crate",l.append(Y(o.has(a)?"boxGoal":"box")),r.append(l),v.set(a,l)),Re(l,a%t-1,Math.floor(a/t)-1);let p=C[o.has(a)?"boxGoal":"box"];l.firstChild.getAttribute("src")!==p&&(l.firstChild.src=p)}let u=f.level.state.player;Re(P,u%t-1,Math.floor(u/t)-1),P.firstChild.src=C[`player${f.facing[0].toUpperCase()+f.facing.slice(1)}`],s("moves").textContent=f.moves,s("pushes").textContent=f.pushes,s("goals").textContent=`${f.onGoals} / ${f.level.state.boxes.length}`,s("board").setAttribute("aria-label",`\u7B2C ${f.id} \u5173\uFF0C${f.moves} \u6B65\uFF0C${f.onGoals} \u4E2A\u7BB1\u5B50\u5F52\u4F4D\uFF0C\u5171 ${f.level.state.boxes.length} \u4E2A`),s("undo").disabled=!f.history.length||f.paused,s("redo").disabled=!f.future.length||f.paused,document.querySelectorAll("[data-direction]").forEach(a=>a.disabled=f.paused||f.solved),s("pause").disabled=f.solved,s("pause-cover").hidden=!f.paused,Q()}function H(e,t){let r=D.find(o=>o.id===e)||D[0];if(y=r,f=new _(r),t)try{f.resume(t)}catch{L("\u5B58\u6863\u5DF2\u91CD\u7F6E")}I=Math.floor((r.id-1)/25),N(!1),s("success").open&&s("success").close(),s("level-number").textContent=String(r.id).padStart(2,"0"),s("previous").disabled=r.id===1,s("next").disabled=r.id===50,$(s("pause"),"pause","\u6682\u505C"),kt(),F(),De(),z()}function ot(){let e=R[f.id];(!q(f.id)||f.moves<e.moves||f.moves===e.moves&&f.pushes<e.pushes)&&(R[f.id]={moves:f.moves,pushes:f.pushes}),U(),De(),Fe("win"),s("success-stats").textContent=`\u7B2C ${String(f.id).padStart(2,"0")} \u5173 \xB7 ${f.moves} \u6B65 \xB7 ${f.pushes} \u6B21\u63A8\u52A8`,s("success-next").innerHTML=f.id===50?'\u8FD4\u56DE\u9009\u5173 <i data-lucide="grid-2x2"></i>':'\u4E0B\u4E00\u5173 <i data-lucide="arrow-right"></i>',Te(),s("success").showModal()}function Be(e){if(s("success").open||s("catalog").classList.contains("open"))return;let t=f.move(e);t.ok&&(L(""),F(t.move),z(),f.solved?ot():t.move.kind==="push"&&Fe("push"))}function at(){f.undo()&&(L(""),F(),z())}function st(){f.redo()&&(F(),z(),f.solved&&ot())}function Ee(){f.solved||(f.paused=!f.paused,$(s("pause"),f.paused?"play":"pause",f.paused?"\u7EE7\u7EED":"\u6682\u505C"),F())}s("undo").addEventListener("click",at);s("redo").addEventListener("click",st);s("restart").addEventListener("click",()=>{f.restart(),L(""),$(s("pause"),"pause","\u6682\u505C"),F(),z()});s("previous").addEventListener("click",()=>H(f.id-1));s("next").addEventListener("click",()=>H(f.id+1));s("pause").addEventListener("click",Ee);s("resume").addEventListener("click",Ee);s("success-close").addEventListener("click",()=>s("success").close());s("success-next").addEventListener("click",()=>{f.id<50?H(f.id+1):(s("success").close(),N(!0))});s("sound").addEventListener("click",()=>{w=!w,s("sound").setAttribute("aria-pressed",String(!w)),$(s("sound"),w?"volume-x":"volume-2",w?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548"),w||Fe("push"),Q(),U()});s("fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{L("\u5F53\u524D\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301\u5168\u5C4F")}});document.addEventListener("fullscreenchange",()=>$(s("fullscreen"),document.fullscreenElement?"minimize":"maximize",document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F"));s("catalog-toggle").setAttribute("aria-expanded","false");s("catalog-toggle").addEventListener("click",()=>N(!s("catalog").classList.contains("open")));s("catalog-close").addEventListener("click",()=>N(!1));document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>{I=Number(e.dataset.page),De()}));document.querySelectorAll("[data-direction]").forEach(e=>e.addEventListener("click",()=>Be(e.dataset.direction)));var et={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey||["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||s("success").open)return;if(s("catalog").classList.contains("open")){e.key==="Escape"&&N(!1);return}let t=e.key.length===1?e.key.toLowerCase():e.key;et[t]?(e.preventDefault(),Be(et[t])):t==="z"?(e.preventDefault(),at()):t==="y"?(e.preventDefault(),st()):t==="r"&&!e.repeat?(e.preventDefault(),s("restart").click()):t==="Escape"&&!e.repeat&&(e.preventDefault(),Ee())});var A;s("board-stage").addEventListener("pointerdown",e=>{e.pointerType==="mouse"||f.paused||f.solved||(A={x:e.clientX,y:e.clientY,id:e.pointerId},e.isTrusted&&s("board-stage").setPointerCapture(e.pointerId))});s("board-stage").addEventListener("pointerup",e=>{if(!A||A.id!==e.pointerId)return;let t=e.clientX-A.x,r=e.clientY-A.y;A=null,!(Math.max(Math.abs(t),Math.abs(r))<24)&&Be(Math.abs(t)>Math.abs(r)?t>0?"right":"left":r>0?"down":"up")});s("board-stage").addEventListener("pointercancel",()=>A=null);window.addEventListener("pagehide",U);document.addEventListener("visibilitychange",()=>{document.hidden&&U(),Q()});new ResizeObserver(Oe).observe(s("board-stage"));window.addEventListener("resize",Oe);$(s("sound"),w?"volume-x":"volume-2",w?"\u5F00\u542F\u97F3\u6548":"\u5173\u95ED\u97F3\u6548");s("sound").setAttribute("aria-pressed",String(!w));H(Number.isInteger(J?.id)?J.id:1,J);Le||L("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8FDB\u5EA6");Te();})();
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
