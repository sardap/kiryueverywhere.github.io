(function(e){function t(t){for(var a,s,i=t[0],r=t[1],l=t[2],h=0,g=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&g.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(g.length)g.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/kiryueverywhere/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=r;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0530":function(e,t,n){},"0b5e":function(e,t,n){"use strict";n("987f")},"54e2":function(e,t,n){"use strict";n("0530")},"5ee2":function(e,t,n){},"987f":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o=Object(a["g"])("h2",null,"🗺️ KIRYU EVERYWHERE! 🗺️",-1),c={key:0},s=Object(a["g"])("br",null,null,-1),i=Object(a["g"])("h3",null,"THIS HAS NOTHING TO DO WITH SEGA",-1),r=Object(a["g"])("h3",null,[Object(a["h"])("MADE BY "),Object(a["g"])("a",{href:"paul@sarda.dev"},"paul@sarda.dev")],-1),l={key:1},u=Object(a["g"])("h2",{class:"emergency_font"},[Object(a["h"])(" This is bad please email "),Object(a["g"])("a",{href:"paul@sarda.dev"},"paul@sarda.dev"),Object(a["h"])(" and tell him he forgot to update the site. ")],-1),h=[u],g={for:"debug_checkbox"},b={key:2},m=Object(a["g"])("p",null,"Select location",-1),d=Object(a["g"])("br",null,null,-1),_=Object(a["g"])("br",null,null,-1);function p(e,t,n,u,p,O){const y=Object(a["u"])("Game"),j=Object(a["u"])("DialogWrapper");return Object(a["o"])(),Object(a["f"])("div",null,[o,this.game_found?(Object(a["o"])(),Object(a["f"])("div",c,[Object(a["g"])("h3",null,"LOCATION #"+Object(a["x"])(this.location_number),1),Object(a["g"])("p",null,Object(a["x"])(e.getGameName().toUpperCase()),1),Object(a["i"])(y,{map:e.getMap(),number:this.location_number,threshold:e.getThreshold(),target:e.getTarget(),debug_mode:this.debug_mode,on_complete:e.onComplete()},null,8,["map","number","threshold","target","debug_mode","on_complete"]),s,Object(a["g"])("button",{onClick:t[0]||(t[0]=t=>e.openStats()),class:"stats"},"📈Stats📈"),i,r])):(Object(a["o"])(),Object(a["f"])("div",l,h)),Object(a["i"])(j),Object(a["g"])("div",null,[Object(a["C"])(Object(a["g"])("input",{type:"checkbox",id:"debug_checkbox","onUpdate:modelValue":t[1]||(t[1]=t=>e.debug_mode=t)},null,512),[[a["y"],e.debug_mode]]),Object(a["g"])("label",g,"Debug Mode: "+Object(a["x"])(e.debug_mode),1)]),e.debug_mode?(Object(a["o"])(),Object(a["f"])("div",b,[m,Object(a["C"])(Object(a["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.location_number=t)},null,512),[[a["z"],e.location_number]]),d,_,Object(a["g"])("button",{onClick:t[3]||(t[3]=t=>e.resetCookie())},"Reset Cookie"),Object(a["g"])("p",null,"Cookie: "+Object(a["x"])(this.current_cookie),1)])):Object(a["e"])("",!0)])}var O=n("9ab4"),y=n("ce1f");const j=e=>(Object(a["r"])("data-v-57b2a874"),e=e(),Object(a["p"])(),e),f={class:"game"},k=["src"],x=j(()=>Object(a["g"])("br",null,null,-1)),w={class:"buttons"},v={key:0},S={key:1},C={key:0},I=j(()=>Object(a["g"])("h2",null,"YOU WON",-1)),T={key:1},$=j(()=>Object(a["g"])("h2",null,"YOU LOST",-1)),M=j(()=>Object(a["g"])("h3",null,"TRY AGAIN TOMORROW!",-1)),z=[$,M],E=j(()=>Object(a["g"])("br",null,null,-1)),L={key:2},Y={key:3},N=["src"],U=["src"],D={key:4};function W(e,t,n,o,c,s){return Object(a["o"])(),Object(a["f"])("div",f,[Object(a["g"])("img",{src:`${e.public_path}images/games/${e.number}/${e.active_pic}.webp`,class:"game_image"},null,8,k),x,Object(a["g"])("div",w,[Object(a["g"])("div",null,[Object(a["g"])("button",{onClick:t[0]||(t[0]=t=>e.showLocationImage(1)),class:Object(a["m"])(e.getClassForLocationImage(1))}," 1 ",2),Object(a["g"])("button",{onClick:t[1]||(t[1]=t=>e.showLocationImage(2)),class:Object(a["m"])(e.getClassForLocationImage(2))}," 2 ",2),Object(a["g"])("button",{onClick:t[2]||(t[2]=t=>e.showLocationImage(3)),class:Object(a["m"])(e.getClassForLocationImage(3))}," 3 ",2),Object(a["g"])("button",{onClick:t[3]||(t[3]=t=>e.showLocationImage(4)),class:Object(a["m"])(e.getClassForLocationImage(4))}," 4 ",2)])]),"playing"==this.getState()?(Object(a["o"])(),Object(a["f"])("div",v,[Object(a["g"])("h3",null,Object(a["x"])(e.guessesLeftCount())+" GUESSES LEFT",1)])):(Object(a["o"])(),Object(a["f"])("div",S,["win"==this.getState()?(Object(a["o"])(),Object(a["f"])("div",C,[I,Object(a["g"])("h3",null,"WITH "+Object(a["x"])(e.guessesLeftCount())+" GUESSES LEFT",1)])):Object(a["e"])("",!0),"lose"==this.getState()?(Object(a["o"])(),Object(a["f"])("div",T,z)):Object(a["e"])("",!0),Object(a["g"])("h3",null,"NEXT LOCATION IN "+Object(a["x"])(e.countdownUntilTomorrow),1)])),Object(a["g"])("canvas",{id:"canvas",onClick:t[4]||(t[4]=(...t)=>e.canvasClick&&e.canvasClick(...t))}),E,"playing"==this.getState()?(Object(a["o"])(),Object(a["f"])("div",L,[Object(a["g"])("button",{class:Object(a["m"])(null==this.selected_x?"submit disabled":"submit"),onClick:t[5]||(t[5]=(...t)=>e.submitButton&&e.submitButton(...t))}," SUBMIT ",2)])):(Object(a["o"])(),Object(a["f"])("div",Y,[Object(a["g"])("button",{onClick:t[6]||(t[6]=(...t)=>e.shareClick&&e.shareClick(...t)),class:"submit"},Object(a["x"])(this.share_text),1)])),Object(a["g"])("img",{id:"map",src:`${e.public_path}maps/${e.map}.webp`,hidden:"true"},null,8,N),Object(a["g"])("img",{id:"target_icon",src:this.public_path+"images/blad_kiryu.webp",hidden:"true"},null,8,U),e.debug_mode?(Object(a["o"])(),Object(a["f"])("div",D,[Object(a["g"])("p",null,"DEBUG X:"+Object(a["x"])(this.click_debug_x),1),Object(a["g"])("p",null,"DEBUG Y:"+Object(a["x"])(this.click_debug_y),1)])):Object(a["e"])("",!0)])}var P;function R(e,t){const n=t+"=",a=decodeURIComponent(e.cookie),o=a.split(";");for(let c=0;c<o.length;c++){let e=o[c];while(" "==e.charAt(0))e=e.substring(1);if(0==e.indexOf(n))return e.substring(n.length,e.length)}return""}(function(e){e[e["NotFinal"]=0]="NotFinal",e[e["Win"]=1]="Win",e[e["Lose"]=2]="Lose"})(P||(P={}));const B="guesses";function A(e){const t=new Date;t.setTime(t.getTime());const n="expires="+t.toUTCString();e.cookie=B+"={};"+n}function F(e){const t=R(e,B);return""!=t?JSON.parse(t):{guesses:{}}}function K(e,t){const n=F(e),a=n.guesses;return t in a?a[t]:[]}function G(e,t,n,a,o){const c=F(e);t in c.guesses||(c.guesses[t]=[]),c.guesses[t].push({x_per:n,y_per:a,final_guess:o});const s=new Date;s.setTime(s.getTime()+31536e8);const i="expires="+s.toUTCString();e.cookie=B+"="+JSON.stringify(c)+";"+i}const H=4;let J=class extends y["b"]{};J=Object(O["a"])([Object(y["a"])({props:{map:String,number:Number,target:{x:Number,y:Number},threshold:Number,debug_mode:Boolean,on_complete:Function},data(){return{active_pic:1,canvas:null,selected_x:null,selected_y:null,center_x:null,center_y:null,guesses:[],state:"playing",share_text:"SHARE!",image_width:null,image_height:null,click_debug_x:null,click_debug_y:null,canvas_init:!1,public_path:"/kiryueverywhere/",countdownUntilTomorrow:"",countdownUntilTomorrowTimer:null}},mounted(){var e=document.getElementById("canvas");this.canvas=e.getContext("2d"),this.timer=setInterval(()=>{this.draw()},250),this.countdownUntilTomorrowTimer=setInterval(()=>{this.countdownUntilTomorrow=this.countDownUntilNextLocation()},1e3)},beforeDestroy(){clearInterval(this.timer),clearInterval(this.countdownUntilTomorrowTimer)},methods:{countDownUntilNextLocation(){let e=new Date;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0);t.setTime(t.getTime()+864e5);const n=t.getTime()-e.getTime(),a=Math.floor(n%864e5/36e5),o=Math.floor(n%36e5/6e4),c=Math.floor(n%6e4/1e3);return`${a.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},getState(){const e=K(document,this.number);for(const t of e){if(t.final_guess==P.Win)return"win";if(t.final_guess==P.Lose)return"lose"}return"playing"},guessesLeftCount(){return H-K(document,this.number).length},unlockedImage(){const e=K(document,this.number).length+1;return Math.min(e,H)},showLocationImage(e){(e<=this.unlockedImage()||"playing"!=this.getState())&&(this.active_pic=e)},unlockNext(){this.active_pic=Math.min(this.unlockedImage()+1,H)},getClassForLocationImage(e){return this.active_pic==e?"game_btn_active":this.unlockedImage()>=e?"game_btn_unlocked":"playing"!=this.getState()?"game_btn_unlocked_completed":"game_btn_inactive"},percentAsPos(e,t){return{x:e/100*this.image_width+this.center_x,y:t/100*this.image_height+this.center_y}},posAsPercent(e){return{x:(e.x-this.center_x)/this.image_width*100,y:(e.y-this.center_y)/this.image_height*100}},correctGuess(e){const t=this.posAsPercent({x:e.x,y:e.y}),n=Math.abs(t.x-this.target.x),a=Math.abs(t.y-this.target.y),o=document.getElementById("map");return this.click_debug_x=`px:${t.x} sx:${this.selected_x} cx:${this.center_x} iw:${o.width}`,this.click_debug_y=`py:${t.y} sy:${this.selected_y} cy:${this.center_y} ih:${o.height}`,n<=this.threshold&&a<=this.threshold},shareClick(){let e=`#KIRYU_EVERYWHERE #${this.number} 🗺️\n`;const t=K(document,this.number);for(let a=0;a<t.length;a++){const n=Math.abs(t[a].x_per-this.target.x),o=Math.abs(t[a].y_per-this.target.y);let c;c=t[a].final_guess==P.Win?"🟢":"🔴",e+=`\n#${a+1}\t${c} distance:${(n+o).toFixed(2)}`}for(let a=0;a<this.guessesLeftCount();a++)e+=`\n#${a+1+t.length}\t⚫`;e+="\n\n",e+="https://sardap.github.io/kiryueverywhere/",navigator.clipboard.writeText(e),this.share_text="COPPIED!";let n=setInterval(()=>{this.share_text="SHARE!",clearInterval(n)},250)},submitButton(){if(null==this.selected_x||null==this.selected_y)return;const e=this.posAsPercent({x:this.selected_x,y:this.selected_y});console.log(`CLICK ${e.x}% ${e.y}%`);const t=Math.abs(e.x-this.target.x),n=Math.abs(e.y-this.target.y),a=document.getElementById("map");this.click_debug_x=`px:${e.x} sx:${this.selected_x} cx:${this.center_x} iw:${a.width}`,this.click_debug_y=`py:${e.y} sy:${this.selected_y} cy:${this.center_y} ih:${a.height}`;const o=K(document,this.number).length;let c=P.NotFinal;this.correctGuess({x:this.selected_x,y:this.selected_y})?(console.log("win!"),c=P.Win):this.guessesLeftCount()-1==0?(console.log("lose!"),c=P.Lose):(console.log("unlock next! "+o),this.unlockNext(),console.log(`failure!: dist_x:${t}, dist_y:${n}, threshold:${this.threshold}`)),G(document,this.number,e.x,e.y,c),this.selected_x=null,this.selected_y=null,this.draw()},canvasClick(e){"playing"==this.getState()&&(this.selected_x=e.offsetX,this.selected_y=e.offsetY,this.draw())},drawMap(){let e=this.canvas;const t=e.canvas.width,n=e.canvas.height;e.clearRect(0,0,t,n);const a=document.getElementById("map"),o=Math.min(t/a.width,n/a.height);this.image_width=a.width*o,this.image_height=a.height*o;const c=t/2-this.image_width/2,s=n/2-this.image_height/2;this.center_x=t/2,this.center_y=n/2,e.drawImage(a,c,s,this.image_width,this.image_height)},draw(){let e=this.canvas;if(e.clearRect(0,0,e.width,e.height),!this.canvas_init){this.canvas_init=!0;const t=.8*window.innerWidth,n=.5*window.innerHeight;e.canvas.width=t,e.canvas.height=n}this.drawMap();const t=K(document,this.number),n=.05*e.canvas.height;for(const a of t){const t=this.percentAsPos(a.x_per,a.y_per),o=Math.abs(a.x_per-this.target.x),c=Math.abs(a.y_per-this.target.y);e.beginPath();let s="";if(o<=this.threshold&&c<=this.threshold)s="green";else{const e=o+c;s=e<3.5*this.threshold?"#FF0000":"#8B0000"}e.strokeStyle=s,e.rect(t.x-n/2,t.y-n/2,n,n),e.stroke()}if(this.selected_x&&this.selected_y&&(e.beginPath(),e.strokeStyle="Black",e.rect(this.selected_x-n/2,this.selected_y-n/2,n,n),e.stroke()),"playing"!=this.getState()){const t=document.getElementById("target_icon"),a=this.percentAsPos(this.target.x,this.target.y);e.beginPath(),e.drawImage(t,a.x-n/2,a.y-n/2,n,n),e.stroke()}}}})],J);var V=J,X=(n("54e2"),n("6b0d")),q=n.n(X);const Q=q()(V,[["render",W],["__scopeId","data-v-57b2a874"]]);var Z=Q;const ee={1:{map:"yakuza_3_kamuro_map",target:{x:-42,y:-17}},2:{map:"yakuza_kiwami_map",target:{x:16,y:46}},3:{map:"yakuza_0_osaka_map",target:{x:21,y:-29}},4:{map:"yakuza_kiwami_2_osaka_map",target:{x:-12,y:-4}},5:{map:"yakuza_3_rykyu_map",target:{x:2,y:32}},6:{map:"yakuza_0_kamuro_map",target:{x:-38,y:4}},7:{map:"yakuza_kiwami_map",target:{x:2,y:39}},8:{map:"yakuza_3_kamuro_map",target:{x:-30,y:23}}},te={yakuza_0_kamuro_map:{threshold:5,game_name:"Yakuza 0",plain_name:"Yakuza 0 Kamurocho"},yakuza_0_osaka_map:{threshold:5,game_name:"Yakuza 0",plain_name:"Yakuza 0 Sotenbori"},yakuza_kiwami_map:{threshold:5,game_name:"Yakuza Kiwami",plain_name:"Yakuza Kiwami Kamurocho"},yakuza_kiwami_2_kamuro_map:{threshold:5,game_name:"Yakuza Kiwami 2",plain_name:"Yakuza Kiwami 2 Kamurocho"},yakuza_kiwami_2_osaka_map:{threshold:5,game_name:"Yakuza Kiwami 2",plain_name:"Yakuza Kiwami 2 Kamurocho"},yakuza_3_kamuro_map:{threshold:5,game_name:"Yakuza 3",plain_name:"Yakuza 3 Kamurocho"},yakuza_3_rykyu_map:{threshold:3,game_name:"Yakuza 3",plain_name:"Yakuza 3 Ryukyu"}};var ne=n("998b");const ae=e=>(Object(a["r"])("data-v-7129d983"),e=e(),Object(a["p"])(),e),oe={class:"dialog"},ce={class:"center"},se=ae(()=>Object(a["g"])("h2",null,"Your stats!",-1)),ie=ae(()=>Object(a["g"])("hr",null,null,-1)),re=ae(()=>Object(a["g"])("hr",null,null,-1)),le=ae(()=>Object(a["g"])("h3",null,"Map breakdown",-1));function ue(e,t,n,o,c,s){return Object(a["o"])(),Object(a["f"])("div",oe,[Object(a["g"])("div",ce,[se,ie,Object(a["g"])("p",null,Object(a["x"])(e.getWinRate())+"% Win rate",1),Object(a["g"])("p",null,"Since location:"+Object(a["x"])(e.stats.first_location),1),Object(a["g"])("p",null,"Current Streak:"+Object(a["x"])(e.current_streak),1),re,le,(Object(a["o"])(!0),Object(a["f"])(a["a"],null,Object(a["t"])(e.getMapBreakdown(),e=>(Object(a["o"])(),Object(a["f"])("div",{key:e.name,class:"map_breakdown_entry"},[Object(a["g"])("p",null,[Object(a["g"])("b",null,Object(a["x"])(e.name),1)]),Object(a["g"])("p",null,Object(a["x"])(e.tally.correct/(e.tally.incorrect+e.tally.correct)*100)+"%, 🟢"+Object(a["x"])(e.tally.correct)+" 🔴"+Object(a["x"])(e.tally.incorrect),1)]))),128)),Object(a["g"])("button",{onClick:t[0]||(t[0]=t=>e.closeDialog()),class:"btn"},"Okay")])])}function he(e){const t=ye(),n=new Map;let a=-1;for(let o=0;o<=t;o++)if(-1==a&&o in e&&(a=o),o in e){const t=ee[o];t.map in n||n.set(t.map,{correct:0,incorrect:0});const a=n.get(t.map),c=e[o];for(let e=0;e<c.length;e++)c[e].final_guess==P.Win?a.correct++:c[e].final_guess==P.Lose&&a.incorrect++}return{first_location:a,location_count:n}}function ge(e){for(let t=0;t<e.length;t++)if(e[t].final_guess==P.Win)return!0;return!1}function be(e){const t=ye();for(let n=t;n>0;n--){if(!(n in e))return t-n;if(!ge(e[n]))return t-n}return 0}var me=Object(a["j"])({props:{},setup(){function e(){return!0}return{returnValue:e,closeDialog:ne["b"]}},data(){const e=F(document).guesses;return{guesses:e,stats:he(e),current_streak:be(e)}},methods:{getWinRate(){let e=0,t=0;for(const[n,a]of this.stats.location_count)e+=a.correct,t+=a.incorrect;return e/(e+t)*100},getMapBreakdown(){const e=[];for(const[t,n]of this.stats.location_count)e.push({name:te[t].plain_name,tally:n});return e}}});n("0b5e");const de=q()(me,[["render",ue],["__scopeId","data-v-7129d983"]]);var _e=de;async function pe(){return await Object(ne["c"])(_e)}const Oe=new Date(2022,6,28,0,0,0);function ye(){const e=new Date,t=864e5,n=e.getTime(),a=Oe.getTime();return Math.floor(Math.abs((n-a)/t))}let je=class extends y["b"]{};je=Object(O["a"])([Object(y["a"])({components:{Game:Z,DialogWrapper:ne["a"]},data(){const e=ye();return{show:!1,debug_mode:!1,current_cookie:F(document),location_number:e,game_found:Object.keys(ee).length>=e}},methods:{openStats:async()=>{await pe()?console.log("YES"):console.log("NO")},onComplete(){console.log("Jobs done")},resetCookie(){A(document)},getMap(){return ee[this.location_number].map},getTarget(){return ee[this.location_number].target},getGameName(){return te[ee[this.location_number].map].game_name},getThreshold(){return te[ee[this.location_number].map].threshold}}})],je);var fe=je;n("d8cc");const ke=q()(fe,[["render",p]]);var xe=ke;Object(a["c"])(xe).mount("#app")},d8cc:function(e,t,n){"use strict";n("5ee2")}});
//# sourceMappingURL=app.8b973e73.js.map