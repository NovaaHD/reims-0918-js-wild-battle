(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.f721e8eb.svg"},43:function(e,t,a){e.exports=a(98)},50:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),s=(a(48),a(50),a(15)),o=a(16),i=a(17),m=a(18),u=a(19),d=a(2),f=(a(34),a(37)),b=a.n(f),p=function(){return r.a.createElement(b.a,{className:"bgParticle",params:{particles:{number:{value:200,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}})},E=Object(n.createContext)(),h=(a(56),a(8)),y=function(e){return e.sort(function(e,t){return t.win-e.win})},g=function(e){var t=[],a=function(e){for(var t={},a=0;a<e.length;a++)void 0===t[e[a].winner.nickname]?t[e[a].winner.nickname]={win:1,lose:0}:t[e[a].winner.nickname].win+=1,void 0===t[e[a].loser.nickname]?t[e[a].loser.nickname]={win:0,lose:1}:t[e[a].loser.nickname].lose+=1;return t}(e);return Object.keys(a).map(function(e,n){t.push({name:e,win:a[e].win,lose:a[e].lose})}),t},N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,e.state.history.length>0&&r.a.createElement("div",{className:"ranking-table"},r.a.createElement(h.a,{from:{opacity:0},to:{opacity:1},config:{delay:200}},function(e){return r.a.createElement("h2",{style:e,className:"text-center"},"RANKING")}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(0,-50px,0)"},to:{opacity:1,transform:"translate3d(0,0,0)"},config:{delay:200}},function(e){return r.a.createElement("tr",{style:e,className:"table-head"},r.a.createElement("td",null,"Rank"),r.a.createElement("td",null,"Player"),r.a.createElement("td",null,"Win"),r.a.createElement("td",null,"Lose"))}),r.a.createElement(h.b,{keys:y(g(e.state.history)).map(function(e,t){return t}),from:{opacity:0,transform:"translate3d(0,-50px,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0,scale:0},delay:300},y(g(e.state.history)).map(function(e,t){return function(a){return r.a.createElement("tr",{style:a},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.win),r.a.createElement("td",null,e.lose))}}))))))})}}]),t}(n.Component),k=(a(58),function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement("div",{className:"historic-table"},r.a.createElement(h.a,{from:{opacity:0},to:{opacity:1},config:{delay:200}},function(e){return r.a.createElement("h2",{style:e,className:"text-center"},"HISTORIC")}),r.a.createElement(d.o,{className:"text-center h5"},r.a.createElement(h.b,{keys:e.state.history.slice(0).reverse().map(function(e,t){return t}),from:{opacity:0,transform:"translate3d(100px,0,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0,scale:0},delay:300},e.state.history.slice(0).reverse().map(function(e,t){return function(a){return r.a.createElement(d.p,{style:a,className:"border-dark p-0 mb-2 player",key:t},r.a.createElement(d.b,{inverse:!0},r.a.createElement(d.h,{className:"text-secondary date"},e.date),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(d.g,{className:"winner"},r.a.createElement("span",null,e.winner.nickname," : "),e.winner.score),r.a.createElement(d.g,{className:"loser"},r.a.createElement("span",null,e.loser.nickname," : "),e.loser.score))))}}))))})}),v=a(100),x=function(){return r.a.createElement(d.k,{fluid:!0,id:"statsSection"},r.a.createElement(d.q,null,r.a.createElement(d.i,{xs:"12 pl-5"},r.a.createElement(v.a,{to:"/"},r.a.createElement(d.a,{className:"button-style mt-3 ml-5"},"Back"))),r.a.createElement(d.i,{sm:{size:4,offset:1}},r.a.createElement(N,null)),r.a.createElement(d.i,{sm:{size:4,offset:2}},r.a.createElement(k,null))))},S=a(39),w=a.n(S),C=function(e){var t=e.imageHero,a=e.nameHero,n=e.heroData;return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(w.a,{to:"#heroesListSection",beforeAnimate:function(){return e.toggle(n)}},r.a.createElement(d.b,{className:"list-heroes"},r.a.createElement(d.e,{top:!0,width:"100%",src:t,alt:"Card image cap"}),r.a.createElement(d.c,null,r.a.createElement(d.h,{className:"cardTitleHero"},a," "))))})},j=function(e){var t=e.indexHero,a=e.selectedHeroOfList,n=e.battle;return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(d.b,{className:void 0!==t?e.state.battle[e.state.battle.round.currentPlayer].deck[t].used?"battleCard p-2":"battleCard p-2 unUsed":"battleCard p-2"},r.a.createElement(d.h,{className:"text-center battleCardTitle"},a.name),r.a.createElement(d.e,{top:!0,width:"100%",src:a.image.url,alt:"Card image cap"}),"true"!==n?r.a.createElement(d.c,{className:"pb-0 pt-2 battleCardBody"},r.a.createElement(d.q,null,r.a.createElement(d.i,{className:"text-center responsive-card"},r.a.createElement("i",{className:"fas fa-dumbbell"}),r.a.createElement("p",{className:"mb-0"},a.powerstats.strength)),r.a.createElement(d.i,{className:"text-center responsive-card"},r.a.createElement("i",{className:"fas fa-bolt"}),r.a.createElement("p",{className:"mb-0"},a.powerstats.speed)),r.a.createElement(d.i,{className:"text-center responsive-card"},r.a.createElement("i",{className:"fas fa-book"}),r.a.createElement("p",{className:"mb-0"},a.powerstats.intelligence)),r.a.createElement(d.i,{className:"text-center responsive-card"},r.a.createElement("i",{className:"fas fa-shield-alt"}),r.a.createElement("p",{className:"mb-0"},a.powerstats.durability)))):""))})},O=function(e){var t=e.selectedHeroOfList;return r.a.createElement("div",null,r.a.createElement("h3",null,t.name),""!==t.biography["full-name"]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Full Name"),":"," ",t.biography["full-name"]),"No alter egos found."!==t.biography["alter-egos"]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Alter-Egos"),":"," ",t.biography["alter-egos"]),"-"!==t.biography.aliases[0]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Aliases"),":"," ",t.biography.aliases.map(function(e,a){return a===t.biography.aliases.length-1?"".concat(e):"".concat(e," - ")})),"-"!==t.biography["place-of-birth"]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Place of Birth"),":"," ",t.biography["place-of-birth"]),"-"!==t.biography["first-appearance"]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"First appearance"),":"," ",t.biography["first-appearance"]),"null"!==t.biography.publisher&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Publisher"),":"," ",t.biography.publisher),""!==t.biography.alignement&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Alignement"),":"," ",t.biography.alignment),"-"!==t.connections["group-affiliation"]&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Group affiliation"),":"," ",t.connections["group-affiliation"]),"-"!==t.connections.relatives&&r.a.createElement("p",null,r.a.createElement("span",{className:"itemTitleBiography"},"Relatives"),":"," ",t.connections.relatives))},_=(a(67),function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement("section",{id:"heroesListSection"},r.a.createElement(d.k,{fluid:!0},r.a.createElement(d.q,null,r.a.createElement(d.i,{xs:"12"},r.a.createElement(v.a,{to:"/"},r.a.createElement(d.a,{className:"mt-3 button-style"},"Back"))),r.a.createElement("h2",{className:"mr-3"},"Heroes List"),r.a.createElement(d.l,{className:"ml-auto"},r.a.createElement(d.m,null,r.a.createElement(d.n,{onChange:function(t){return e.handleSearchListChange(t)},value:e.state.searchInputHeroList,type:"search",name:"searchCard",placeholder:"Search a card"})))),r.a.createElement(d.j,{isOpen:e.state.collapse},e.state.isCollapse&&r.a.createElement(d.q,null,r.a.createElement(d.i,{xs:{size:12,offset:0},sm:{size:4,offset:0},md:{size:3,offset:1},className:"mt-5"},r.a.createElement(j,{selectedHeroOfList:e.state.selectedHeroOfList})),r.a.createElement(d.i,{xs:{size:12,offset:0},sm:{size:7,offset:1},md:{size:7,offset:1}},r.a.createElement(O,{selectedHeroOfList:e.state.selectedHeroOfList})))),r.a.createElement(d.q,null,e.state.battle.heroes.filter(function(t){return t.name.toLowerCase().includes(e.state.searchInputHeroList.toLowerCase())}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e){return r.a.createElement(d.i,{key:e.id,className:"heroFrameAngle my-3",xs:"4",md:"3",lg:"2"},r.a.createElement(C,{heroeId:e.id,imageHero:e.image.url,nameHero:e.name,heroData:e}))}))))})}),H=a(40),F=a.n(H),L=(a(69),function(){return r.a.createElement("header",{className:"container-fluid"},r.a.createElement(d.q,null,r.a.createElement(d.i,{className:"logo",xs:{size:4,offset:4}},r.a.createElement("img",{src:F.a,className:"d-block logo mx-auto",alt:"logo"}))))}),z=(a(71),function(){return r.a.createElement("nav",{className:"navHome"},r.a.createElement(d.q,null,r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0px,0,0)"},config:{delay:50}},function(e){return r.a.createElement(d.i,{style:e,xs:{size:"2",offset:"9"}},r.a.createElement(v.a,{style:{fontSize:"20px"},className:"text-light border p-2 rounded",to:"/Help"},r.a.createElement("i",{className:"fas fa-info-circle"})," How to Play?"))})),r.a.createElement(d.d,{className:"justify-content-center mx-auto mt-5"},r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0px,0,0)"},config:{delay:50}},function(e){return r.a.createElement(d.i,{style:e,md:"5",lg:"3",className:"mb-2"},r.a.createElement(v.a,{to:"/Battle"},r.a.createElement(d.b,{className:"startfight"},r.a.createElement(d.c,{className:"m-3"},r.a.createElement(d.h,{className:"glitch"},"Start a Battle"),r.a.createElement(d.f,null,"Find a Friend & Win!")))))}),r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0px,0,0)"},config:{delay:100}},function(e){return r.a.createElement(d.i,{style:e,md:"5",lg:"3",className:"mb-2"},r.a.createElement(v.a,{to:"/Stats"},r.a.createElement(d.b,{className:"history"},r.a.createElement(d.c,{className:"m-3"},r.a.createElement(d.h,null,"Stats"),r.a.createElement(d.f,null,"History & Rankings")))))}),r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0px,0,0)"},config:{delay:150}},function(e){return r.a.createElement(d.i,{style:e,md:"5",lg:"3",className:"mb-2"},r.a.createElement(v.a,{to:"/HeroesListing"},r.a.createElement(d.b,{className:"list"},r.a.createElement(d.c,{className:"m-3"},r.a.createElement(d.h,null,"Heroes List"),r.a.createElement(d.f,null,"About your Heroes")))))})))}),P=function(){return r.a.createElement("div",{className:"help-section"},r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0px,0,0)"},config:{delay:50}},function(e){return r.a.createElement("div",{style:e},r.a.createElement(d.q,{className:"d-flex justify-content-center"},r.a.createElement(d.i,{className:"align-right justify-content-end mb-2 pl-0 pb-4",style:{borderBottom:"1px solid #fff"},xs:{size:"8"}},r.a.createElement(v.a,{style:{fontSize:"20px",textDecoration:"none"},className:"text-light border p-2 rounded",to:"/"},r.a.createElement("i",{class:"fas fa-arrow-circle-left"})," Back to Home")),r.a.createElement(d.i,{className:"p-0",xs:{size:8}},r.a.createElement("p",null,'The Wild Battle is a WebApp programmed in React. You can play with your favourite Hero in a "Card Game". It\'s a turn by turn game and for each round you have to pick a card. Your choice must take into account the "Random Stat". Indeed at the beginning of a round, a stat is drawn by lot to determined with which stat heroes will fight. For instance, if the Strength is choosen, and if your card have a better strength stat than your opponent\'s, you win the round, and the best of the five rounds, you win the match.'),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement("span",null,"1"),"Start a Battle"),r.a.createElement("p",null,"Each player will fill in an input with his nickname. This nickname need to have at least three characters."),r.a.createElement("p",null,"When the two players' nicknames are checked, the fight can begin!")),r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement("span",null,"2"),"Transition Phase"),r.a.createElement("p",null,"At the beginning of each round there will be a transition. The player who doesn't play must not look at the screen."),r.a.createElement("p",null,'The current player press the "Ready button" when he\'s ready.')),r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement("span",null,"3"),"Battle Phase"),r.a.createElement("p",null,"The deck of each player is generated at the first round. The two players receive six random hero cards with four stats :"," ",r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-dumbbell"})," Strength,")," ",r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-bolt"})," Speed"),","," ",r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-book"})," Intelligence and"," ",r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-shield-alt"})," Durability."))),r.a.createElement("p",null,'Each round, a "Stat" is generated, that will influenced the card\'s choice of the players. Maybe the best card he has....or a weaker card to not sacrifice a good option for the next rounds.')),r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement("span",null,"4"),"Final Score"),r.a.createElement("p",null,"After five rounds the Battle ends and the winner is determined. The result is saved and the ranking refreshed with the new datas."))))))}))},B=(a(73),function(){return r.a.createElement("footer",{className:"mt-5 container-fluid fixed-bottom"},r.a.createElement(d.q,{className:""},r.a.createElement(d.i,{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("a",{href:"#",className:"d-block mr-2"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{href:"#",className:"d-block mr-5"},r.a.createElement("i",{className:"fab fa-twitter-square"}))),r.a.createElement("div",null,r.a.createElement("a",{href:"#",className:"mr-2"},"About"),r.a.createElement("a",{href:"#"},"Legal Mentions")))))}),T=(a(75),function(e){var t=e.name,a=e.title;return r.a.createElement(d.i,{xs:{size:10},md:{size:3},className:"my-auto"},r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:e.state.battle[t].nicknameChecked?"nicknameChecked":void 0},a,": ",e.state.battle[t].nickname),!e.state.battle[t].nicknameChecked&&r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement(d.n,{type:"text",name:t,placeholder:"Enter Your Nickname",className:"mr-2",onChange:function(a){return e.handleChangeNickname(a,t)},onKeyPress:function(a){return e.onPressEnterNicknameChecked(a,t,e.state.battle[t].nickname.length)},value:e.state.battle[t].nickname}),e.state.battle[t].nickname.length>2&&r.a.createElement("span",{onClick:function(){return e.submitCheck(t)}},r.a.createElement("i",{className:"far fa-check-circle fa-2x btnNickname"}))),0<e.state.battle[t].nickname.length?e.state.battle[t].nickname.length<3?r.a.createElement("div",{className:"text-danger"},"Your nickname must have at least 3 characters"):r.a.createElement("div",{className:"text-success"},"Your nickname is valid"):r.a.createElement("div",null,"\xa0")))}))}),W=a(24),I=(a(77),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={sec:3},a.countdown=a.countdown.bind(Object(W.a)(Object(W.a)(a))),a.calculateCountdown=a.calculateCountdown.bind(Object(W.a)(Object(W.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"countdown",value:function(){var e=this;this.interval=setInterval(function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()},1e3)}},{key:"calculateCountdown",value:function(){var e=this.state.sec,t={sec:0};return e-=1,t.sec=e,0===e&&this.stop(),t}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){this.countdown()}},{key:"render",value:function(){var e=this.state;return r.a.createElement(d.i,{className:"my-auto text-center",xs:"12",md:"4"},e.sec>0&&r.a.createElement("div",null,r.a.createElement("strong",{className:"pulsate-css FontBangers"},e.sec)),0===e.sec&&r.a.createElement(E,null,function(e){return r.a.createElement("h3",{className:"FontBangers fight"},r.a.createElement("span",{onClick:function(){return e.initialisationAndStartCombat()}},"FIGHT"))}))}}]),t}(r.a.Component)),q=(a(79),function(){return r.a.createElement(d.k,{fluid:!0,id:"usernameSection"},r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(d.q,null,r.a.createElement(d.i,{xs:"12",className:"pl-5"},r.a.createElement(v.a,{to:"/"},r.a.createElement(d.a,{className:"button-style mt-3 ml-5"},r.a.createElement("span",null,"Back"))))),r.a.createElement(d.q,{style:{minHeight:"60vh"},className:"d-flex justify-content-around"},r.a.createElement(T,{name:"player_1",title:"Player 1"}),e.state.battle.player_1.nicknameChecked&&e.state.battle.player_2.nicknameChecked&&r.a.createElement(I,null),r.a.createElement(T,{name:"player_2",title:"Player 2"})))}))}),A=function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0}},function(t){return r.a.createElement("div",{style:t},r.a.createElement("div",{style:{styles:t},className:"battle-transition d-flex flex-column justify-content-center text-align-center"},r.a.createElement(d.q,null,r.a.createElement("h2",{className:"mx-auto",style:{fontSize:"150px"}},"Round ",e.state.battle.round.roundNumber)),r.a.createElement(d.q,null,r.a.createElement("h3",{style:{fontSize:"50px"},className:"mx-auto"},e.state.battle[e.state.battle.round.currentPlayer].nickname,"'s turn")),r.a.createElement(d.q,null,r.a.createElement("h3",{className:"mx-auto"},"Score: ",e.state.battle.player_1.score," -"," ",e.state.battle.player_2.score)),r.a.createElement(d.q,null,r.a.createElement(d.a,{className:"button-style",onClick:function(){return e.handleChangeTransition()}},"I'm ready !"))))})})},R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.k,{fluid:!0,id:"CombatInit",style:{height:"60vh"}},r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"mt-5"},r.a.createElement(h.a,{from:{opacity:0},to:{opacity:1},leave:{opacity:0}},function(t){return r.a.createElement("h2",{className:"text-center",style:t},"Fight on",r.a.createElement("br",null),r.a.createElement("span",{className:"mr-3"},0===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-dumbbell"}):1===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-bolt"}):2===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-book"}):r.a.createElement("i",{className:"fas fa-shield-alt"})),e.state.battle.stats[e.state.battle.round.randomStat],r.a.createElement("span",{className:"ml-3"},0===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-dumbbell"}):1===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-bolt"}):2===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-book"}):r.a.createElement("i",{className:"fas fa-shield-alt"})))})),e.state.battle[e.state.battle.round.currentPlayer].deck.length>0&&r.a.createElement(d.q,{className:"battle-deck justify-content-center",style:{minHeight:"80%"}},r.a.createElement(h.b,{keys:e.state.battle[e.state.battle.round.currentPlayer].deck.map(function(e){return e.id}),from:{opacity:0,transform:"translate3d(-100px,0,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0,scale:0},delay:300},e.state.battle[e.state.battle.round.currentPlayer].deck.map(function(t,a){return function(n){return r.a.createElement(d.i,{className:"mt-5",style:n,xs:"6",md:"4",lg:"2",onClick:function(){e.selectHero(t.id)},key:t.id},r.a.createElement(j,{indexHero:a,selectedHeroOfList:t}))}}))))}))}}]),t}(n.Component),D=function(){return r.a.createElement(E,null,function(e){return r.a.createElement(n.Fragment,null,e.state.battle.round.transition?r.a.createElement(A,null):r.a.createElement(R,null))})},M=(a(81),function(e){var t=e.player1,a=e.player2;return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,e.state.battle.round.roundWinner===t?r.a.createElement("h2",{className:"win"},"WIN"):e.state.battle.round.roundWinner===a?r.a.createElement("h2",{className:"lose"},"LOSE"):r.a.createElement("h2",null," "))})}),Y=function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(d.q,null,r.a.createElement(d.i,{xs:"12"},r.a.createElement(h.a,{from:{opacity:0},to:{opacity:1},leave:{opacity:0}},function(t){return r.a.createElement("h2",{className:"text-center",style:t},"Fight on",r.a.createElement("br",null),r.a.createElement("span",{className:"mr-3"},0===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-dumbbell"}):1===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-bolt"}):2===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-book"}):r.a.createElement("i",{className:"fas fa-shield-alt"})),e.state.battle.stats[e.state.battle.round.randomStat],r.a.createElement("span",{className:"ml-3"},0===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-dumbbell"}):1===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-bolt"}):2===e.state.battle.round.randomStat?r.a.createElement("i",{className:"fas fa-book"}):r.a.createElement("i",{className:"fas fa-shield-alt"})))}))),r.a.createElement(d.q,{className:"d-flex justify-content-around"},r.a.createElement(h.b,{config:{tension:170,friction:6},from:{opacity:0,transform:"translate3d(-100px,0,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0}},function(t){return r.a.createElement(d.i,{style:t,className:"text-center px-5",xs:"3"},r.a.createElement("h2",null,e.state.battle.player_1.nickname),r.a.createElement(j,{className:"position:relative",battle:"true",selectedHeroOfList:e.state.battle.player_1.selectedCard[0]}),r.a.createElement(M,{player1:1,player2:2}))}),r.a.createElement(d.i,{className:"text-center",xs:"3"},r.a.createElement(d.q,{style:{marginTop:"22%"},className:"d-flex justify-content-around align-items-center"},0!==e.state.battle.round.roundWinner?r.a.createElement(d.i,{xs:"3"},r.a.createElement(h.a,{config:{tension:170,friction:7},from:{fontSize:"0vw"},to:{fontSize:"4vw"}},function(t){return r.a.createElement("h2",{style:t},e.state.battle.player_1.selectedCard[0].powerstats[e.state.battle.stats[e.state.battle.round.randomStat].toLowerCase()])})):"",r.a.createElement(d.i,{xs:"6"},r.a.createElement(h.b,{config:{tension:170,friction:7},from:{fontSize:"0vw"},enter:{fontSize:"12vw"},leave:{opacity:0}},function(e){return r.a.createElement("h2",{style:e},"VS")})),0!==e.state.battle.round.roundWinner?r.a.createElement(d.i,{xs:"3"},r.a.createElement(h.a,{config:{tension:170,friction:7},from:{fontSize:"0vw"},to:{fontSize:"4vw"}},function(t){return r.a.createElement("h2",{style:t},e.state.battle.player_2.selectedCard[0].powerstats[e.state.battle.stats[e.state.battle.round.randomStat].toLowerCase()])})):""),r.a.createElement(d.q,{className:"d-flex justify-content-center"},r.a.createElement(d.i,{xs:"12"},3===e.state.battle.round.roundWinner?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"135px",color:"#cecece",textShadow:"3px 3px #646464"}},"Draw"):r.a.createElement("h2",null," "))),r.a.createElement(d.q,{className:"d-flex justify-content-center"},r.a.createElement(d.i,{xs:"12"},0===e.state.battle.round.roundWinner?r.a.createElement(d.a,{className:"button-style",onClick:function(){return e.hasWonRound(e.state.battle.player_1.selectedCard[0].powerstats[e.state.battle.stats[e.state.battle.round.randomStat].toLowerCase()],e.state.battle.player_2.selectedCard[0].powerstats[e.state.battle.stats[e.state.battle.round.randomStat].toLowerCase()])}},"Result"):3===e.state.battle.round.roundWinner?r.a.createElement(d.a,{className:"button-style",onClick:function(){return e.setNewFight()}},"Fight Again"):5!==e.state.battle.round.roundNumber?r.a.createElement(d.a,{className:"button-style",onClick:function(){return e.getToNextRound()}},"Next round"):r.a.createElement(d.a,{className:"button-style",onClick:function(){e.setStorage(e.state.battle.player_1,e.state.battle.player_2),e.getToFinalScore()}},"Final Score")))),r.a.createElement(h.b,{config:{tension:170,friction:6},from:{opacity:0,transform:"translate3d(100px,0,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0}},function(t){return r.a.createElement(d.i,{style:t,className:"text-center px-5",xs:"3"},r.a.createElement("h2",null,e.state.battle.player_2.nickname),r.a.createElement(j,{className:"position:relative",battle:"true",selectedHeroOfList:e.state.battle.player_2.selectedCard[0]}),r.a.createElement(M,{player1:2,player2:1}))})))})},K=function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(h.a,{from:{opacity:0,transform:"translate3d(-100px,0,0)"},to:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0}},function(t){return r.a.createElement("div",{style:t},r.a.createElement("div",{style:{height:"calc(100vh - 164px)",styles:t},className:"battle-transition d-flex flex-column justify-content-center text-align-center"},r.a.createElement(n.Fragment,null,r.a.createElement("i",{className:"fas fa-trophy fa-10x mx-auto text-light"}),e.state.battle.player_1.score>e.state.battle.player_2.score?r.a.createElement("h2",{style:{fontSize:"150px",textAlign:"center"}},e.state.battle.player_1.nickname," WIN"):r.a.createElement("h2",{style:{fontSize:"150px",textAlign:"center"}},e.state.battle.player_2.nickname," WIN"),r.a.createElement(d.q,{className:"d-flex justify-content-center"},r.a.createElement(d.i,{xs:"3"},r.a.createElement(d.a,{className:"button-style",onClick:function(){return e.setRematch()}},"Rematch?")," "),r.a.createElement(d.i,{xs:"3",className:"ml-5"},r.a.createElement(v.a,{to:"/"},r.a.createElement(d.a,{className:"button-style",onClick:function(){e.resetAllDataBattle()}},"Go to Home")))))))})})},G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(n.Fragment,null,0===e.state.battle.round.roundNumber?r.a.createElement(q,null):e.state.battle.round.roundFinished?e.state.battle.round.matchFinished?r.a.createElement(K,null):r.a.createElement(Y,null):r.a.createElement(D,null))}))}}]),t}(n.Component),U=a(102),J=a(103),Q=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(L,null),r.a.createElement(d.k,{fluid:!0},r.a.createElement(U.a,null,r.a.createElement(J.a,{exact:!0,path:"/",component:z}),r.a.createElement(J.a,{path:"/Help",component:P}),r.a.createElement(J.a,{path:"/Battle",component:G}),r.a.createElement(J.a,{path:"/HeroesListing",component:_}),r.a.createElement(J.a,{path:"/Stats",component:x}))),r.a.createElement(B,null))}}]),t}(n.Component),V=a(42),$=a(7),X=a(32),Z=a.n(X);Z.a.initializeApp({apiKey:"AIzaSyDUKl_fbvJlUqy-RYySiP03jDhKC89QKOo",authDomain:"wildbattle-1e46c.firebaseapp.com",databaseURL:"https://wildbattle-1e46c.firebaseio.com",projectId:"wildbattle-1e46c",storageBucket:"wildbattle-1e46c.appspot.com",messagingSenderId:"340803107917"});var ee=Z.a,te=function(e){return Math.floor(Math.random()*Math.floor(e))},ae=a(22),ne=function(e,t,a){var n=t.target.value>0?t.target.value.match(/[\w]/g).join("").replace(/[_]+/g,"_"):t.target.value;return Object($.a)({},e,{battle:Object($.a)({},e.battle,Object(ae.a)({},a,Object($.a)({},e.battle[a],{nickname:n})))})},re=function(e,t){return Object($.a)({},e,{battle:Object($.a)({},e.battle,Object(ae.a)({},t,Object($.a)({},e.battle[t],{nicknameChecked:!0})))})},le=function(e){return{collapse:!0,isCollapse:1,selectedHeroOfList:e}},ce=function(e,t){var a=e.battle[e.battle.round.currentPlayer].deck.map(function(e){return e.id===t&&(e.used=!0),e});return{battle:Object($.a)({},e.battle,Object(ae.a)({},e.battle.round.currentPlayer,Object($.a)({},e.battle[e.battle.round.currentPlayer],{deck:a,selectedCard:e.battle[e.battle.round.currentPlayer].deck.filter(function(e){return e.id===t})})))}},se=function(e){return{battle:Object($.a)({},e.battle,{round:Object($.a)({},e.battle.round,{currentPlayer:"player_1"===e.battle.round.currentPlayer?"player_2":"player_1",transition:!0,roundFinished:"player_2"===e.battle.round.currentPlayer||e.battle.round.roundFinished})})}},oe=function(e){return{battle:Object($.a)({},e.battle,{round:Object($.a)({},e.battle.round,{randomStat:te(e.battle.stats.length)})})}},ie=void 0,me=function(e,t,a){return e!==t?t:ie.isSimilar(e,te(a.battle.stats.length))},ue=function(e){var t=te(e.battle.stats.length),a=me(e.battle.round.randomStat,t,e);return{battle:Object($.a)({},e.battle,{round:Object($.a)({},e.battle.round,{roundWinner:0,randomStat:a})})}},de=function(e,t){for(var a=0,n=[],r=[],l=t;l>0;l--){var c=te(e.battle.heroes.length);r.includes(c)?l++:(a=e.battle.heroes[c],r.push(c),n.push(Object($.a)({},a)))}return n},fe=function(e){return{battle:Object($.a)({},e.battle,{round:Object($.a)({},e.battle.round,{transition:!e.battle.round.transition})})}},be=function(e){return{battle:Object($.a)({},e.battle,{round:Object($.a)({},e.battle.round,{roundFinished:!1,roundNumber:e.battle.round.roundNumber+1,currentPlayer:"player_1",roundWinner:0,randomStat:te(e.battle.stats.length)})})}},pe=function(e,t,a){var n=a.battle;return e-t===0?n.round.roundWinner=3:e-t>0?(n.round.roundWinner=1,n.player_1.score++):(n.round.roundWinner=2,n.player_2.score++),n},Ee=[18,30,34,57,60,63,69,92,145,162,165,207,208,213,222,226,263,310,313,322,341,346,354,361,386,416,418,423,427,435,441,462,485,489,490,502,514,522,523,526,529,566,567,619,620,627,639,644,672,687,729],he=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={battle:{stats:["Strength","Speed","Intelligence","Durability"],heroes:[],player_1:{nickname:"",nicknameChecked:!1,deck:[],score:0,selectedCard:{}},player_2:{nickname:"",nicknameChecked:!1,deck:[],score:0,selectedCard:{}},round:{roundFinished:!1,roundNumber:0,randomStat:0,currentPlayer:"player_1",transition:!0,roundWinner:0,matchFinished:!1}},collapse:!1,isCollapse:0,selectedHeroOfList:[],searchInputHeroList:"",history:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"callApiSuperHeroes",value:function(){for(var e=this,t=0;t<Ee.length;t++)fetch("http://superheroapi.com/api.php/2368931693133321/".concat(Ee[t])).then(function(e){return e.json()}).then(function(t){t.used=!1,e.setState({battle:Object($.a)({},e.state.battle,{heroes:Object(V.a)(e.state.battle.heroes).concat([t])})})})}},{key:"getStorage",value:function(){var e=this;ee.database().ref("history").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,winner:a[r].winner,loser:a[r].loser,date:a[r].date});e.setState({history:n})})}},{key:"componentDidMount",value:function(){this.callApiSuperHeroes(),this.getStorage()}},{key:"render",value:function(){var e=this;return r.a.createElement(E.Provider,{value:{state:this.state,handleChangeNickname:function(t,a){return e.setState(ne(e.state,t,a))},submitCheck:function(t){e.setState(re(e.state,t))},onPressEnterNicknameChecked:function(t,a,n){13===t.charCode&&n>2&&e.setState(re(e.state,a))},toggle:function(t){e.setState(le(t))},handleSearchListChange:function(t){e.setState({searchInputHeroList:t.target.value,collapse:!1})},selectHero:function(t){var a=0;e.state.battle[e.state.battle.round.currentPlayer].deck.map(function(e){return e.id===t&&(a=e.used?1:0),e}),a||(e.setState(ce(e.state,t)),setTimeout(function(){e.setState(se(e.state))},1e3))},setRandomStat:function(){e.setState(oe(e.state))},setNewFight:function(){e.setState(ue(e.state))},initialisationAndStartCombat:function(){var t=de(e.state,12),a=t.slice(0,6),n=t.slice(6,12);e.setState({battle:Object($.a)({},e.state.battle,{player_1:Object($.a)({},e.state.battle.player_1,{deck:a}),player_2:Object($.a)({},e.state.battle.player_2,{deck:n}),round:Object($.a)({},e.state.battle.round,{roundNumber:1,randomStat:te(e.state.battle.stats.length)})})})},handleChangeTransition:function(){e.setState(fe(e.state))},getToNextRound:function(){e.setState(be(e.state))},hasWonRound:function(t,a){e.setState(pe(t,a,e.state))},getToFinalScore:function(){e.setState({battle:Object($.a)({},e.state.battle,{round:Object($.a)({},e.state.battle.round,{matchFinished:!0})})})},setRematch:function(){var t=de(e.state,12),a=t.slice(0,6),n=t.slice(6,12);e.setState({battle:Object($.a)({},e.state.battle,{player_1:Object($.a)({},e.state.battle.player_1,{deck:a,score:0,selectedCard:{}}),player_2:Object($.a)({},e.state.battle.player_2,{deck:n,score:0,selectedCard:{}}),round:{roundFinished:!1,roundNumber:1,randomStat:0,currentPlayer:"player_1",transition:!0,roundWinner:0,matchFinished:!1}})})},resetAllDataBattle:function(){for(var t=0,a=[],n=12;n>0;n--){var r=Math.floor(Math.random()*e.state.battle.heroes.length);t=e.state.battle.heroes[r],-1===a.indexOf(t)?a.push(t):n++}var l=a.slice(0,6),c=a.slice(6,12);e.setState({battle:Object($.a)({},e.state.battle,{player_1:{nickname:"",nicknameChecked:!1,deck:l,score:0,selectedCard:{}},player_2:{nickname:"",nicknameChecked:!1,deck:c,score:0,selectedCard:{}},round:{roundFinished:!1,roundNumber:0,randomStat:0,currentPlayer:"player_1",transition:!0,roundWinner:0,matchFinished:!1}})})},setStorage:function(t,a){e.state.history;var n=new Date,r="".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear()),l={winner:t.score>a.score?t:a,loser:t.score>a.score?a:t,date:r};ee.database().ref("history").push(l),e.setState({currentItem:"",username:""})}}},this.props.children)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(101);c.a.render(r.a.createElement(ye.a,null,r.a.createElement(he,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.feb764c4.chunk.js.map