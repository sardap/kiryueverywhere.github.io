(function(e){function t(t){for(var n,s,i=t[0],r=t[1],l=t[2],h=0,m=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/kiryueverywhere/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=r;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0530":function(e,t,a){},"0b5e":function(e,t,a){"use strict";a("987f")},"54e2":function(e,t,a){"use strict";a("0530")},"987f":function(e,t,a){},b41f:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const o=Object(n["g"])("h2",null,"🗺️ KIRYU EVERYWHERE! 🗺️",-1),c=Object(n["g"])("br",null,null,-1),s=Object(n["g"])("h3",null,[Object(n["g"])("a",{href:"https://forms.gle/L1vSvZaWFRmz6Vug7"},"Fill out this Survey To help out!")],-1),i={class:"location_select"},r=Object(n["g"])("h2",null,"Location Selector",-1),l=["value"],u=Object(n["g"])("h3",null,"THIS HAS NOTHING TO DO WITH SEGA",-1),h=Object(n["g"])("h3",null,[Object(n["h"])("MADE BY "),Object(n["g"])("a",{href:"paul@sarda.dev"},"paul@sarda.dev")],-1),m={key:1},g=Object(n["g"])("h2",{class:"emergency_font"},[Object(n["h"])(" This is bad please email "),Object(n["g"])("a",{href:"paul@sarda.dev"},"paul@sarda.dev"),Object(n["h"])(" and tell him he forgot to update the site. ")],-1),_=[g],b={key:2},d={for:"debug_checkbox"},p={key:3},k=Object(n["g"])("p",null,"Select location",-1),y=Object(n["g"])("br",null,null,-1),O=Object(n["g"])("br",null,null,-1);function j(e,t,a,g,j,f){const x=Object(n["u"])("Game"),w=Object(n["u"])("DialogWrapper");return Object(n["o"])(),Object(n["f"])("div",null,[o,e.location_number<=e.location_count?(Object(n["o"])(),Object(n["f"])("div",{key:e.location_number},[Object(n["g"])("h3",null,"LOCATION #"+Object(n["x"])(e.location_number),1),Object(n["g"])("p",null,Object(n["x"])(e.getGameName().toUpperCase()),1),Object(n["i"])(x,{map:e.getMap(),number:e.location_number,threshold:e.getThreshold(),target:e.getTarget(),debug_mode:e.debug_mode,on_complete:e.onComplete()},null,8,["map","number","threshold","target","debug_mode","on_complete"]),c,Object(n["g"])("button",{onClick:t[0]||(t[0]=t=>e.openStats()),class:"stats"},"📈Stats📈"),s,Object(n["g"])("div",i,[r,Object(n["D"])(Object(n["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.location_number=t)},[(Object(n["o"])(!0),Object(n["f"])(n["a"],null,Object(n["t"])(e.max_location_number,e=>(Object(n["o"])(),Object(n["f"])("option",{key:e,value:e}," #"+Object(n["x"])(e),9,l))),128))],512),[[n["z"],e.location_number]])]),u,h])):(Object(n["o"])(),Object(n["f"])("div",m,_)),Object(n["i"])(w),e.dev_possible?(Object(n["o"])(),Object(n["f"])("div",b,[Object(n["D"])(Object(n["g"])("input",{type:"checkbox",id:"debug_checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.debug_mode=t)},null,512),[[n["y"],e.debug_mode]]),Object(n["g"])("label",d,"Debug Mode: "+Object(n["x"])(e.debug_mode),1)])):Object(n["e"])("",!0),e.debug_mode?(Object(n["o"])(),Object(n["f"])("div",p,[k,Object(n["D"])(Object(n["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.location_number=t)},null,512),[[n["A"],e.location_number]]),y,O,Object(n["g"])("button",{onClick:t[4]||(t[4]=t=>e.resetCookie())},"Reset Cookie"),Object(n["g"])("p",null,"Cookie: "+Object(n["x"])(e.current_cookie),1)])):Object(n["e"])("",!0)])}const f=e=>(Object(n["r"])("data-v-57b2a874"),e=e(),Object(n["p"])(),e),x={class:"game"},w=["src"],v=f(()=>Object(n["g"])("br",null,null,-1)),z={class:"buttons"},S={key:0},Y={key:1},T={key:0},C=f(()=>Object(n["g"])("h2",null,"YOU WON",-1)),I={key:1},$=f(()=>Object(n["g"])("h2",null,"YOU LOST",-1)),M=f(()=>Object(n["g"])("h3",null,"TRY AGAIN TOMORROW!",-1)),L=[$,M],E=f(()=>Object(n["g"])("br",null,null,-1)),D={key:2},N={key:3},U=["src"],R=["src"],W={key:4};function K(e,t,a,o,c,s){return Object(n["o"])(),Object(n["f"])("div",x,[Object(n["g"])("img",{src:`${e.public_path}images/games/${e.number}/${e.active_pic}.webp`,class:"game_image"},null,8,w),v,Object(n["g"])("div",z,[Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:t[0]||(t[0]=t=>e.showLocationImage(1)),class:Object(n["m"])(e.getClassForLocationImage(1))}," 1 ",2),Object(n["g"])("button",{onClick:t[1]||(t[1]=t=>e.showLocationImage(2)),class:Object(n["m"])(e.getClassForLocationImage(2))}," 2 ",2),Object(n["g"])("button",{onClick:t[2]||(t[2]=t=>e.showLocationImage(3)),class:Object(n["m"])(e.getClassForLocationImage(3))}," 3 ",2),Object(n["g"])("button",{onClick:t[3]||(t[3]=t=>e.showLocationImage(4)),class:Object(n["m"])(e.getClassForLocationImage(4))}," 4 ",2)])]),"playing"==this.getState()?(Object(n["o"])(),Object(n["f"])("div",S,[Object(n["g"])("h3",null,Object(n["x"])(e.guessesLeftCount())+" GUESSES LEFT",1)])):(Object(n["o"])(),Object(n["f"])("div",Y,["win"==this.getState()?(Object(n["o"])(),Object(n["f"])("div",T,[C,Object(n["g"])("h3",null,"WITH "+Object(n["x"])(e.guessesLeftCount())+" GUESSES LEFT",1)])):Object(n["e"])("",!0),"lose"==this.getState()?(Object(n["o"])(),Object(n["f"])("div",I,L)):Object(n["e"])("",!0),Object(n["g"])("h3",null,"NEXT LOCATION IN "+Object(n["x"])(e.countdownUntilTomorrow),1)])),Object(n["g"])("canvas",{id:"canvas",onClick:t[4]||(t[4]=(...t)=>e.canvasClick&&e.canvasClick(...t))}),E,"playing"==this.getState()?(Object(n["o"])(),Object(n["f"])("div",D,[Object(n["g"])("button",{class:Object(n["m"])(null==this.selected_x?"submit disabled":"submit"),onClick:t[5]||(t[5]=(...t)=>e.submitButton&&e.submitButton(...t))}," SUBMIT ",2)])):(Object(n["o"])(),Object(n["f"])("div",N,[Object(n["g"])("button",{onClick:t[6]||(t[6]=(...t)=>e.shareClick&&e.shareClick(...t)),class:"submit"},Object(n["x"])(this.share_text),1)])),Object(n["g"])("img",{id:"map",src:`${e.public_path}maps/${e.map}.webp`,hidden:"true"},null,8,U),Object(n["g"])("img",{id:"target_icon",src:this.public_path+"images/blad_kiryu.webp",hidden:"true"},null,8,R),e.debug_mode?(Object(n["o"])(),Object(n["f"])("div",W,[Object(n["g"])("p",null,"DEBUG X:"+Object(n["x"])(this.click_debug_x),1),Object(n["g"])("p",null,"DEBUG Y:"+Object(n["x"])(this.click_debug_y),1)])):Object(n["e"])("",!0)])}var F,P=a("9ab4"),A=a("ce1f");function B(e,t){const a=t+"=",n=decodeURIComponent(e.cookie),o=n.split(";");for(let c=0;c<o.length;c++){let e=o[c];while(" "==e.charAt(0))e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return""}(function(e){e[e["NotFinal"]=0]="NotFinal",e[e["Win"]=1]="Win",e[e["Lose"]=2]="Lose"})(F||(F={}));const G="guesses";function H(e){const t=new Date;t.setTime(t.getTime());const a="expires="+t.toUTCString();e.cookie=G+"={};"+a}function V(e){const t=B(e,G);return""!=t?JSON.parse(t):{guesses:{}}}function J(e,t){const a=V(e),n=a.guesses;return t in n?n[t]:[]}function X(e,t,a,n,o){const c=V(e);t in c.guesses||(c.guesses[t]=[]),c.guesses[t].push({x_per:a,y_per:n,final_guess:o});const s=new Date;s.setTime(s.getTime()+31536e8);const i="expires="+s.toUTCString();e.cookie=G+"="+JSON.stringify(c)+";"+i}const Z=4;let q=class extends A["b"]{};q=Object(P["a"])([Object(A["a"])({props:{map:String,number:Number,target:{x:Number,y:Number},threshold:Number,debug_mode:Boolean,on_complete:Function},data(){return{active_pic:1,canvas:null,selected_x:null,selected_y:null,center_x:null,center_y:null,guesses:[],state:"playing",share_text:"SHARE!",image_width:null,image_height:null,click_debug_x:null,click_debug_y:null,canvas_init:!1,public_path:"/kiryueverywhere/",countdownUntilTomorrow:"",countdownUntilTomorrowTimer:null}},mounted(){var e=document.getElementById("canvas");this.canvas=e.getContext("2d"),this.timer=setInterval(()=>{this.draw()},250),this.countdownUntilTomorrowTimer=setInterval(()=>{this.countdownUntilTomorrow=this.countDownUntilNextLocation()},1e3)},beforeDestroy(){clearInterval(this.timer),clearInterval(this.countdownUntilTomorrowTimer)},methods:{countDownUntilNextLocation(){let e=new Date;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0);t.setTime(t.getTime()+864e5);const a=t.getTime()-e.getTime(),n=Math.floor(a%864e5/36e5),o=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3);return`${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},getState(){const e=J(document,this.number);for(const t of e){if(t.final_guess==F.Win)return"win";if(t.final_guess==F.Lose)return"lose"}return"playing"},guessesLeftCount(){return Z-J(document,this.number).length},unlockedImage(){const e=J(document,this.number).length+1;return Math.min(e,Z)},showLocationImage(e){(e<=this.unlockedImage()||"playing"!=this.getState())&&(this.active_pic=e)},unlockNext(){this.active_pic=Math.min(this.unlockedImage()+1,Z)},getClassForLocationImage(e){return this.active_pic==e?"game_btn_active":this.unlockedImage()>=e?"game_btn_unlocked":"playing"!=this.getState()?"game_btn_unlocked_completed":"game_btn_inactive"},percentAsPos(e,t){return{x:e/100*this.image_width+this.center_x,y:t/100*this.image_height+this.center_y}},posAsPercent(e){return{x:(e.x-this.center_x)/this.image_width*100,y:(e.y-this.center_y)/this.image_height*100}},correctGuess(e){const t=this.posAsPercent({x:e.x,y:e.y}),a=Math.abs(t.x-this.target.x),n=Math.abs(t.y-this.target.y),o=document.getElementById("map");return this.click_debug_x=`px:${t.x} sx:${this.selected_x} cx:${this.center_x} iw:${o.width}`,this.click_debug_y=`py:${t.y} sy:${this.selected_y} cy:${this.center_y} ih:${o.height}`,a<=this.threshold&&n<=this.threshold},shareClick(){let e=`#KIRYU_EVERYWHERE #${this.number} 🗺️\n`;const t=J(document,this.number);for(let n=0;n<t.length;n++){const a=Math.abs(t[n].x_per-this.target.x),o=Math.abs(t[n].y_per-this.target.y);let c;c=t[n].final_guess==F.Win?"🟢":"🔴",e+=`\n#${n+1}\t${c} distance:${(a+o).toFixed(2)}`}for(let n=0;n<this.guessesLeftCount();n++)e+=`\n#${n+1+t.length}\t⚫`;e+="\n\n",e+="https://sardap.github.io/kiryueverywhere/",navigator.clipboard.writeText(e),this.share_text="COPPIED!";let a=setInterval(()=>{this.share_text="SHARE!",clearInterval(a)},250)},submitButton(){if(null==this.selected_x||null==this.selected_y)return;const e=this.posAsPercent({x:this.selected_x,y:this.selected_y});console.log(`CLICK ${e.x}% ${e.y}%`);const t=Math.abs(e.x-this.target.x),a=Math.abs(e.y-this.target.y),n=document.getElementById("map");this.click_debug_x=`px:${e.x} sx:${this.selected_x} cx:${this.center_x} iw:${n.width}`,this.click_debug_y=`py:${e.y} sy:${this.selected_y} cy:${this.center_y} ih:${n.height}`;const o=J(document,this.number).length;let c=F.NotFinal;this.correctGuess({x:this.selected_x,y:this.selected_y})?(console.log("win!"),c=F.Win):this.guessesLeftCount()-1==0?(console.log("lose!"),c=F.Lose):(console.log("unlock next! "+o),this.unlockNext(),console.log(`failure!: dist_x:${t}, dist_y:${a}, threshold:${this.threshold}`)),X(document,this.number,e.x,e.y,c),this.selected_x=null,this.selected_y=null,this.draw()},canvasClick(e){"playing"==this.getState()&&(this.selected_x=e.offsetX,this.selected_y=e.offsetY,this.draw())},drawMap(){let e=this.canvas;const t=e.canvas.width,a=e.canvas.height;e.clearRect(0,0,t,a);const n=document.getElementById("map"),o=Math.min(t/n.width,a/n.height);this.image_width=n.width*o,this.image_height=n.height*o;const c=t/2-this.image_width/2,s=a/2-this.image_height/2;this.center_x=t/2,this.center_y=a/2,e.drawImage(n,c,s,this.image_width,this.image_height)},draw(){let e=this.canvas;if(e.clearRect(0,0,e.width,e.height),!this.canvas_init){this.canvas_init=!0;const t=.8*window.innerWidth,a=.5*window.innerHeight;e.canvas.width=t,e.canvas.height=a}this.drawMap();const t=J(document,this.number),a=.05*e.canvas.height;for(const n of t){const t=this.percentAsPos(n.x_per,n.y_per),o=Math.abs(n.x_per-this.target.x),c=Math.abs(n.y_per-this.target.y);e.beginPath();let s="";if(o<=this.threshold&&c<=this.threshold)s="green";else{const e=o+c;s=e<3.5*this.threshold?"#FF0000":"#8B0000"}e.strokeStyle=s,e.rect(t.x-a/2,t.y-a/2,a,a),e.stroke()}if(this.selected_x&&this.selected_y&&(e.beginPath(),e.strokeStyle="Black",e.rect(this.selected_x-a/2,this.selected_y-a/2,a,a),e.stroke()),"playing"!=this.getState()){const t=document.getElementById("target_icon"),n=this.percentAsPos(this.target.x,this.target.y);e.beginPath(),e.drawImage(t,n.x-a/2,n.y-a/2,a,a),e.stroke()}}}})],q);var Q=q,ee=(a("54e2"),a("6b0d")),te=a.n(ee);const ae=te()(Q,[["render",K],["__scopeId","data-v-57b2a874"]]);var ne=ae;const oe={1:{map:"yakuza_3_kamuro_map",target:{x:-42,y:-17}},2:{map:"yakuza_kiwami_map",target:{x:16,y:46}},3:{map:"yakuza_0_osaka_map",target:{x:21,y:-29}},4:{map:"yakuza_kiwami_2_osaka_map",target:{x:-12,y:-4}},5:{map:"yakuza_3_rykyu_map",target:{x:2,y:32}},6:{map:"yakuza_0_kamuro_map",target:{x:-38,y:4}},7:{map:"yakuza_kiwami_map",target:{x:2,y:39}},8:{map:"yakuza_3_kamuro_map",target:{x:-30,y:23}},9:{map:"yakuza_3_rykyu_map",target:{x:15,y:13}},10:{map:"yakuza_kiwami_2_osaka_map",target:{x:38,y:-30}},11:{map:"yakuza_0_kamuro_map",target:{x:-3,y:-13}},12:{map:"yakuza_3_rykyu_map",target:{x:-12,y:21}},13:{map:"yakuza_kiwami_map",target:{x:9,y:40}},14:{map:"yakuza_kiwami_2_kamuro_map",target:{x:-24,y:8}},15:{map:"yakuza_0_osaka_map",target:{x:-3,y:10.991379310344826}}},ce={yakuza_0_kamuro_map:{threshold:7,game_name:"Yakuza 0",plain_name:"Yakuza 0 Kamurocho"},yakuza_0_osaka_map:{threshold:7,game_name:"Yakuza 0",plain_name:"Yakuza 0 Sotenbori"},yakuza_kiwami_map:{threshold:7,game_name:"Yakuza Kiwami",plain_name:"Yakuza Kiwami Kamurocho"},yakuza_kiwami_2_kamuro_map:{threshold:7,game_name:"Yakuza Kiwami 2",plain_name:"Yakuza Kiwami 2 Kamurocho"},yakuza_kiwami_2_osaka_map:{threshold:7,game_name:"Yakuza Kiwami 2",plain_name:"Yakuza Kiwami 2 Kamurocho"},yakuza_3_kamuro_map:{threshold:7,game_name:"Yakuza 3",plain_name:"Yakuza 3 Kamurocho"},yakuza_3_rykyu_map:{threshold:7,game_name:"Yakuza 3",plain_name:"Yakuza 3 Ryukyu"},yakuza_4_kamuro_streets_map:{threshold:7,game_name:"Yakuza 4",plain_name:"Yakuza 4 Kamurocho Streets"},yakuza_4_kamuro_underground_map:{threshold:7,game_name:"Yakuza 4",plain_name:"Yakuza 4 Kamurocho Underground"},yakuza_4_kamuro_rooftops_map:{threshold:7,game_name:"Yakuza 4",plain_name:"Yakuza 4 Kamurocho Rooftops"},yakuza_dead_souls_kamuro_streets_map:{threshold:7,game_name:"Yakuza Dead Souls",plain_name:"Yakuza Dead Souls Kamurocho Streets"},yakuza_5_kamuro_map:{threshold:7,game_name:"Yakuza 5",plain_name:"Yakuza 5 Kamurocho"},yakuza_5_osaka_map:{threshold:7,game_name:"Yakuza 5",plain_name:"Yakuza 5 Sotenbori"},yakuza_5_fukuoka_map:{threshold:7,game_name:"Yakuza 5",plain_name:"Yakuza 5 Fukuoka"},yakuza_5_sapporo_map:{threshold:7,game_name:"Yakuza 5",plain_name:"Yakuza 5 Sapporo"},yakuza_5_nagoya_map:{threshold:7,game_name:"Yakuza 5",plain_name:"Yakuza 5 Nagoya"},yakuza_6_onomichi_map:{threshold:7,game_name:"Yakuza 6",plain_name:"Yakuza 5 Onomichi"}};var se=a("998b");const ie=e=>(Object(n["r"])("data-v-7129d983"),e=e(),Object(n["p"])(),e),re={class:"dialog"},le={class:"center"},ue=ie(()=>Object(n["g"])("h2",null,"Your stats!",-1)),he=ie(()=>Object(n["g"])("hr",null,null,-1)),me=ie(()=>Object(n["g"])("hr",null,null,-1)),ge=ie(()=>Object(n["g"])("h3",null,"Map breakdown",-1));function _e(e,t,a,o,c,s){return Object(n["o"])(),Object(n["f"])("div",re,[Object(n["g"])("div",le,[ue,he,Object(n["g"])("p",null,Object(n["x"])(e.getWinRate())+"% Win rate",1),Object(n["g"])("p",null,"Since location:"+Object(n["x"])(e.stats.first_location),1),Object(n["g"])("p",null,"Current Streak:"+Object(n["x"])(e.current_streak),1),me,ge,(Object(n["o"])(!0),Object(n["f"])(n["a"],null,Object(n["t"])(e.getMapBreakdown(),e=>(Object(n["o"])(),Object(n["f"])("div",{key:e.name,class:"map_breakdown_entry"},[Object(n["g"])("p",null,[Object(n["g"])("b",null,Object(n["x"])(e.name),1)]),Object(n["g"])("p",null,Object(n["x"])(e.tally.correct/(e.tally.incorrect+e.tally.correct)*100)+"%, 🟢"+Object(n["x"])(e.tally.correct)+" 🔴"+Object(n["x"])(e.tally.incorrect),1)]))),128)),Object(n["g"])("button",{onClick:t[0]||(t[0]=t=>e.closeDialog()),class:"btn"},"Okay")])])}function be(e){const t=xe(),a=new Map;let n=-1;for(let o=0;o<=t;o++)if(-1==n&&o in e&&(n=o),o in e){const t=oe[o];t.map in a||a.set(t.map,{correct:0,incorrect:0});const n=a.get(t.map),c=e[o];for(let e=0;e<c.length;e++)c[e].final_guess==F.Win?n.correct++:c[e].final_guess==F.Lose&&n.incorrect++}return{first_location:n,location_count:a}}function de(e){for(let t=0;t<e.length;t++)if(e[t].final_guess==F.Win)return!0;return!1}function pe(e){const t=xe();for(let a=t;a>0;a--){if(!(a in e))return t-a;if(!de(e[a]))return t-a}return 0}var ke=Object(n["j"])({props:{},setup(){function e(){return!0}return{returnValue:e,closeDialog:se["b"]}},data(){const e=V(document).guesses;return{guesses:e,stats:be(e),current_streak:pe(e)}},methods:{getWinRate(){let e=0,t=0;for(const[a,n]of this.stats.location_count)e+=n.correct,t+=n.incorrect;return e/(e+t)*100},getMapBreakdown(){const e=[];for(const[t,a]of this.stats.location_count)e.push({name:ce[t].plain_name,tally:a});return e}}});a("0b5e");const ye=te()(ke,[["render",_e],["__scopeId","data-v-7129d983"]]);var Oe=ye;async function je(){return await Object(se["c"])(Oe)}const fe=new Date(2022,6,28,0,0,0);function xe(){const e=new Date,t=864e5,a=e.getTime(),n=fe.getTime();return Math.floor(Math.abs((a-n)/t))}var we=Object(n["j"])({components:{Game:ne,DialogWrapper:se["a"]},data(){const e=xe();return{show:!1,debug_mode:!1,current_cookie:V(document),max_location_number:e,location_number:e,location_count:Object.keys(oe).length,dev_possible:!1}},methods:{openStats:async()=>{await je()?console.log("YES"):console.log("NO")},onComplete(){console.log("Jobs done")},resetCookie(){H(document)},getMap(){return oe[this.location_number].map},getTarget(){return oe[this.location_number].target},getGameName(){return ce[oe[this.location_number].map].game_name},getThreshold(){return ce[oe[this.location_number].map].threshold}}});a("db0a");const ve=te()(we,[["render",j]]);var ze=ve;Object(n["c"])(ze).mount("#app")},db0a:function(e,t,a){"use strict";a("b41f")}});
//# sourceMappingURL=app.d0308e49.js.map