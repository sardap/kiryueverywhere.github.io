(function(t){function e(e){for(var i,a,l=e[0],r=e[1],h=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);o&&o(e);while(d.length)d.shift()();return n.push.apply(n,h||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==c[r]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},c={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/kiryueverywhere/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var o=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"54e2":function(t,e,s){},7974:function(t,e,s){},"8b21":function(t,e,s){"use strict";s("7974")},cd49:function(t,e,s){"use strict";s.r(e);var i=s("7a23");const c=Object(i["d"])("h2",null,"🗺️ KIRYU EVERYWHERE! 🗺️",-1);function n(t,e,s,n,a,l){const r=Object(i["l"])("Game");return Object(i["g"])(),Object(i["c"])("div",null,[c,Object(i["d"])("h3",null,"LOCATION #"+Object(i["m"])(this.active_game),1),Object(i["e"])(r,{map:t.getMap(),number:this.active_game,threshold:t.getThreshold(),target:t.getTarget()},null,8,["map","number","threshold","target"])])}var a=s("9ab4"),l=s("ce1f");const r=t=>(Object(i["j"])("data-v-5ee6070a"),t=t(),Object(i["h"])(),t),h={class:"game"},o=["src"],u=r(()=>Object(i["d"])("br",null,null,-1)),d={class:"buttons"},b={key:0},g={key:1},_={key:2},m=r(()=>Object(i["d"])("h3",null,"YOU LOST",-1)),p=[m],y=r(()=>Object(i["d"])("br",null,null,-1)),O=r(()=>Object(i["d"])("br",null,null,-1)),v={key:3},j={key:4},f=["src"];function k(t,e,s,c,n,a){return Object(i["g"])(),Object(i["c"])("div",h,[Object(i["d"])("img",{src:`/pictures/games/${t.number}/${t.active_pic}.webp`,class:"game_pic"},null,8,o),u,Object(i["d"])("div",d,[Object(i["d"])("div",null,[Object(i["d"])("button",{onClick:e[0]||(e[0]=e=>t.showPic(1)),class:Object(i["f"])(t.getClass(1))},"1",2),Object(i["d"])("button",{onClick:e[1]||(e[1]=e=>t.showPic(2)),class:Object(i["f"])(t.getClass(2))},"2",2),Object(i["d"])("button",{onClick:e[2]||(e[2]=e=>t.showPic(3)),class:Object(i["f"])(t.getClass(3))},"3",2),Object(i["d"])("button",{onClick:e[3]||(e[3]=e=>t.showPic(4)),class:Object(i["f"])(t.getClass(4))},"4",2)])]),"playing"==this.state?(Object(i["g"])(),Object(i["c"])("div",b,[Object(i["d"])("h3",null,Object(i["m"])(t.guessesLeftCount())+" GUESSES LEFT",1)])):Object(i["b"])("",!0),"win"==this.state?(Object(i["g"])(),Object(i["c"])("div",g,[Object(i["d"])("h3",null,"YOU WON WITH "+Object(i["m"])(t.guessesLeftCount())+" GUESSES LEFT",1)])):Object(i["b"])("",!0),"lose"==this.state?(Object(i["g"])(),Object(i["c"])("div",_,p)):Object(i["b"])("",!0),y,Object(i["d"])("canvas",{id:"canvas",onClick:e[4]||(e[4]=(...e)=>t.canvasClick&&t.canvasClick(...e))}),O,"playing"==this.state?(Object(i["g"])(),Object(i["c"])("div",v,[Object(i["d"])("button",{class:Object(i["f"])(null==this.selected_x?"submit disabled":"submit"),onClick:e[5]||(e[5]=(...e)=>t.submitButton&&t.submitButton(...e))}," SUBMIT ",2)])):(Object(i["g"])(),Object(i["c"])("div",j,[Object(i["d"])("button",{onClick:e[6]||(e[6]=(...e)=>t.shareClick&&t.shareClick(...e)),class:"submit"},Object(i["m"])(this.share_text),1)])),Object(i["d"])("img",{id:"map",src:`/maps/${t.map}.webp`,hidden:"true"},null,8,f),Object(i["d"])("div",null,[Object(i["d"])("p",null,"DEBUG X:"+Object(i["m"])(this.click_debug_x),1),Object(i["d"])("p",null,"DEBUG Y:"+Object(i["m"])(this.click_debug_y),1)])])}const x=4;let w=class extends l["b"]{};w=Object(a["a"])([Object(l["a"])({props:{map:String,number:Number,target:{x:Number,y:Number},threshold:Number},data(){return{active_pic:1,unlocked_pic:1,canvas:null,selected_x:null,selected_y:null,center_x:null,center_y:null,guesses:[],state:"playing",share_text:"SHARE!",image_width:null,image_height:null,click_debug_x:null,click_debug_y:null,canvas_init:!1}},mounted(){var t=document.getElementById("canvas");this.canvas=t.getContext("2d"),this.timer=setInterval(()=>{this.draw()},250)},beforeDestroy(){clearInterval(this.timer)},methods:{guessesLeftCount(){return x+1-this.guesses.length},showPic(t){(t<=this.unlocked_pic||"playing"!=this.state)&&(this.active_pic=t)},unlockNext(){this.unlocked_pic+1<=x&&(this.unlocked_pic++,this.active_pic=this.unlocked_pic)},getClass(t){return this.active_pic==t?"game_btn_active":this.unlocked_pic>=t?"game_btn_unlocked":"playing"!=this.state?"game_btn_unlocked_completed":"game_btn_inactive"},posAsPercent(t){document.getElementById("map");return{x:(t.x-this.center_x)/this.image_width*100,y:(t.y-this.center_y)/this.image_height*100}},shareClick(){let t=`#KIRYU_EVERYWHERE #${this.number}\n\n`;t+="🗺️";for(let s=0;s<this.unlocked_pic-1;s++)t+=" 🟥";t+=" 🟩";for(let s=0;s<x-this.unlocked_pic;s++)t+=" ⬛";t+="\n\n",t+="https://kiryueverywhere.github.io",navigator.clipboard.writeText(t),this.share_text="COPPIED!";let e=setInterval(()=>{this.share_text="SHARE!",clearInterval(e)},250)},submitButton(){if(null==this.selected_x||null==this.selected_y)return;const t=this.posAsPercent({x:this.selected_x,y:this.selected_y});console.log(`CLICK ${t.x}% ${t.y}%`);const e=Math.abs(t.x-this.target.x),s=Math.abs(t.y-this.target.y),i=e+s,c=document.getElementById("map");this.click_debug_x=`px:${t.x} sx:${this.selected_x} cx:${this.center_x} iw:${c.width}`,this.click_debug_y=`py:${t.y} sy:${this.selected_y} cy:${this.center_y} ih:${c.height}`,e<=this.threshold&&s<=this.threshold?(console.log("win!"),this.state="win"):this.guesses.length+1>=x+1?(console.log("lose!"),this.state="lose"):(console.log("unlock next! "+this.guesses.length),this.unlockNext(),console.log(`failure!: dist_x:${e}, dist_y:${s}, dist:${i} threshold:${this.threshold}`)),this.guesses.push({x:this.selected_x,y:this.selected_y,dist_x:e,dist_y:s}),this.selected_x=null,this.selected_y=null,this.draw()},canvasClick(t){"playing"==this.state&&(this.selected_x=t.offsetX,this.selected_y=t.offsetY,this.draw())},drawMap(){let t=this.canvas;const e=t.canvas.width,s=t.canvas.height,i=document.getElementById("map"),c=Math.min(e/i.width,s/i.height);this.image_width=i.width*c,this.image_height=i.height*c;const n=e/2-this.image_width/2,a=s/2-this.image_height/2;this.center_x=e/2,this.center_y=s/2,t.drawImage(i,n,a,this.image_width,this.image_height)},draw(){let t=this.canvas;if(t.clearRect(0,0,t.width,t.height),!this.canvas_init){this.canvas_init=!0;const e=.8*window.innerWidth,s=.5*window.innerHeight;t.canvas.width=e,t.canvas.height=s}this.drawMap();const e=.05*t.canvas.height;for(const s of this.guesses){t.beginPath();let i="";if(s.dist_x<=this.threshold&&s.dist_y<=this.threshold)i="green";else{const t=s.dist_x+s.dist_y;i=t<3.5*this.threshold?"#FF0000":"#8B0000"}t.strokeStyle=i,t.rect(s.x-e/2,s.y-e/2,e,e),t.stroke()}this.selected_x&&this.selected_y&&(t.beginPath(),t.strokeStyle="Black",t.rect(this.selected_x-e/2,this.selected_y-e/2,e,e),t.stroke())}}})],w);var C=w,E=(s("8b21"),s("6b0d")),P=s.n(E);const S=P()(C,[["render",k],["__scopeId","data-v-5ee6070a"]]);var $=S;const I={yakuza_3_kamuro_map:{threshold:5}},T={1:{map:"yakuza_3_kamuro_map",target:{x:-42,y:-17}},2:{map:"yakuza_3_kamuro_map",target:{x:-.08586762075134168,y:-.034048257372654156}}},M=new Date("2022-07-28");function B(){let t=new Date;const e=t.getTime(),s=M.getTime();return Math.round((e-s)/864e5)}let R=class extends l["b"]{};R=Object(a["a"])([Object(l["a"])({components:{Game:$},data(){return{active_game:B()}},methods:{getMap(){return console.log(this.active_game),T[this.active_game].map},getTarget(){return console.log(this.active_game),T[this.active_game].target},getThreshold(){return console.log(this.active_game),I[T[this.active_game].map].threshold}}})],R);var U=R;s("fccd");const L=P()(U,[["render",n]]);var N=L;Object(i["a"])(N).mount("#app")},fccd:function(t,e,s){"use strict";s("54e2")}});
//# sourceMappingURL=app.34a0010c.js.map