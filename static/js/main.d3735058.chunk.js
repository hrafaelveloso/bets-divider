(window["webpackJsonpbets-divider"]=window["webpackJsonpbets-divider"]||[]).push([[0],{62:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),s=a(109),c=a(43),l=a(110),m=a(112),u=a(72),d=Object(c.a)((function(){return{boxFooter:{display:"flex",height:"40px",justifyContent:"center",alignItems:"center",backgroundColor:"#D8D8D8",padding:"0px 20px",marginTop:"auto"},anchor:{textDecoration:"none!important",color:"inherit"}}})),p=function(){var e=d();return r.a.createElement(m.a,{className:e.boxFooter},r.a.createElement(u.a,{variant:"body2"},"Desenvolvido por"," ",r.a.createElement("a",{href:"mailto:rafaelcostaveloso@gmail.com",className:e.anchor},"Rafael Veloso")))},g=a(14),b=a(9),f=a(100),v=a(103),h=a(114),E=a(105),x=a(106),j=a(108),O=a(48),B=function(e){if(-1!==e.indexOf("@")){var t=e.substr(e.indexOf("@")+1,e.length);return parseFloat(t)||1}return 1},y=function(e,t){for(var a=Math.floor(t.length/e),n=t.length%e,r=Object(O.a)(Array(t.length).keys()),o=[],i=0;i<a;i++){var s={name:"Boletim #".concat(i+1),games:[],odd:1,order:[]};o.push(s);for(var c=0;c<e;c++)if(0===c){var l=r[Math.floor(Math.random()*r.length)];o[i].games.push(t[l]),o[i].odd*=B(t[l]),o[i].order.push(l);var m=r.indexOf(l);r.splice(m,1)}else{for(var u=r[Math.floor(Math.random()*r.length)],d=t[u].split(" ")[0],p=o[i].games.map((function(e){return e.split(" ")[0]}));p.includes(d);){var g=r[Math.floor(Math.random()*r.length)];d=t[g].split(" ")[0]}o[i].games.push(t[u]),o[i].odd*=B(t[u]),o[i].order.push(u);var b=r.indexOf(u);r.splice(b,1)}o[i].order.sort((function(e,t){return e-t})),o[i].games=[];var f=o[i].order;o[i].games=f.map((function(e){return t[e]}))}if(n>0){var v={name:"Resto",games:[],odd:1,order:[]};r.forEach((function(e){v.games.push(t[e]),v.odd*=B(t[e]),v.order.push(e)})),o.push(v)}return o},k=a(101),w=a(111),C=a(102),D=a(3),S=Object(c.a)((function(e){return{iconInfo:{position:"absolute",marginTop:"-30px",width:30,height:30,"&:hover":{cursor:"pointer",color:e.palette.primary.dark}},buttonSecondary:{color:"#169429","&:hover":{color:"#1a6125"}}}})),I=function(e){var t=e.value,a=e.totalBets,n=e.onChange,o=e.toggleModal,i=e.menu,s=S();return r.a.createElement(f.a,{item:!0,xs:12,md:8,lg:7},r.a.createElement(k.a,{elevation:3},r.a.createElement(w.a,{label:"Progn\xf3sticos",variant:"outlined",fullWidth:!0,value:t,onChange:n,multiline:!0,rows:5,rowsMax:50,helperText:0===a?"Inserir 1 progn\xf3stico por linha.":"".concat(a," progn\xf3stico").concat(a>1?"s":""," inserido").concat(a>1?"s":"",".")}),r.a.createElement(C.a,{color:"primary",className:Object(D.a)(s.iconInfo,Object(b.a)({},s.buttonSecondary,"divisor"!==i)),onClick:o})))},N=Object(c.a)((function(e){var t;return{numberBets:(t={},Object(b.a)(t,e.breakpoints.up("md"),{marginBottom:"20px"}),Object(b.a)(t,e.breakpoints.down("xs"),{marginBottom:"20px"}),t),itemButton:Object(b.a)({display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},e.breakpoints.down("xs"),{justifyContent:"center"})}})),T=r.a.memo((function(e){var t=e.betsByEntry,a=e.onChangeBets,o=e.totalBets,i=e.divideBets,s=N(),c=Object(n.useMemo)((function(){return o<=1}),[o]),l=Object(n.useState)(""),m=Object(g.a)(l,2),u=m[0],d=m[1],p=Object(n.useState)(!1),b=Object(g.a)(p,2),h=b[0],E=b[1],x=c||h||0===t.length;return Object(n.useEffect)((function(){if(parseInt(t,10)>=o?(d("O n\xfamero de progn\xf3sticos por boletim n\xe3o \xe9 inferior ao n\xfamero total de progn\xf3sticos."),E(!0)):(E(!1),d("")),parseInt(t,10)<o&&parseInt(t,10)>1){var e=Math.floor(o/parseInt(t,10));d("Ser\xe3o gerados ".concat(e," boletins com ").concat(parseInt(t,10)," progn\xf3sticos cada.")),E(!1)}else 1===parseInt(t,10)&&(d("O n\xfamero de progn\xf3sticos por boletim tem de ser superior a 1."),E(!0))}),[t,o]),r.a.createElement(f.a,{item:!0,xs:12,md:4},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:12},r.a.createElement(w.a,{label:"Progn\xf3sticos por boletim",fullWidth:!0,value:t,onChange:a,type:"number",step:"1",min:"1",max:o,className:s.numberBets,disabled:c,helperText:c?0===o?"Nenhum progn\xf3stico inserido":"Insira mais do que 1 progn\xf3stico":u,error:h})),r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:"auto",className:s.itemButton},r.a.createElement(v.a,{variant:"contained",color:"primary",disabled:x,onClick:i},"Dividir progn\xf3sticos"))))})),M=a(104),G=Object(c.a)((function(e){return{evenGame:{color:e.palette.text.secondary},rightGame:{color:e.palette.text.secondary},combineGame:{fontSize:"15px",color:"#000",marginTop:"2px"}}})),R=function(e){var t,a=e.idx,n=e.game,o=e.rightGames,i=e.menu,s=G();return r.a.createElement(u.a,{variant:"subtitle2",className:Object(D.a)((t={},Object(b.a)(t,s.evenGame,a%2!==0&&"divisor"===i),Object(b.a)(t,s.rightGame,"divisor"!==i&&a<o),Object(b.a)(t,s.combineGame,"divisor"!==i&&a>=o),t))},n)};R.defaultProps={rightGames:0,menu:"divisor"};var F=r.a.memo(R),q=Object(c.a)((function(){return{divider:{marginBottom:"5px"},dividerBottom:{marginTop:"5px",marginBottom:"5px"},paper:{padding:"20px 20px 10px 20px"}}})),P=function(e){var t=e.name,a=e.games,n=e.odd,o=e.rightGames,i=e.menu,s=q();return r.a.createElement(f.a,{item:!0,xs:12,md:3,lg:4},r.a.createElement(k.a,{elevation:3,className:s.paper},r.a.createElement(u.a,{variant:"h6"},t),r.a.createElement(M.a,{className:s.divider}),a.map((function(e,t){return r.a.createElement(F,{key:t,idx:t,rightGames:o,menu:i,game:e})})),r.a.createElement(M.a,{className:s.dividerBottom}),n>1&&r.a.createElement(u.a,{variant:"subtitle2"},"Odd: ",parseFloat(n).toFixed(2))))};P.defaultProps={odd:1};var W=r.a.memo(P),A=Object(c.a)((function(){return{buttonBack:{marginRight:"20px"},itemRepeat:{display:"flex",marginTop:"30px"}}})),z=r.a.memo((function(e){var t=e.setBetSlips,a=e.setBetsByEntry,n=e.divideBets,o=e.menu,i=A();return r.a.createElement(f.a,{item:!0,xs:12,className:i.itemRepeat},r.a.createElement(v.a,{variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),t([]),a("")},className:i.buttonBack},"Voltar ao menu anterior"),"divisor"===o&&r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:n},"Repetir divis\xe3o"))})),J=a(107),V=Object(c.a)((function(e){var t;return{numberBets:(t={},Object(b.a)(t,e.breakpoints.up("md"),{marginBottom:"20px"}),Object(b.a)(t,e.breakpoints.down("xs"),{marginBottom:"20px"}),t),itemButton:Object(b.a)({display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},e.breakpoints.down("xs"),{justifyContent:"center"}),buttonSecondary:{backgroundColor:"#169429","&:hover":{backgroundColor:"#1a6125"}}}})),H=r.a.memo((function(e){var t=e.totalBets,a=e.combineBets,o=e.rightGames,i=e.onChangeRight,s=V(),c=Object(n.useMemo)((function(){return t<=1}),[t]),l=Object(n.useState)(""),m=Object(g.a)(l,2),u=m[0],d=m[1],p=Object(n.useState)(!1),b=Object(g.a)(p,2),h=b[0],E=b[1],x=c||h||0===o.length;return Object(n.useEffect)((function(){parseInt(o,10)>=t?(d("O n\xfamero de progn\xf3sticos 'certos' n\xe3o \xe9 inferior ao n\xfamero total de progn\xf3sticos."),E(!0)):(E(!1),d(""));var e=t-parseInt(o,10);e>4?(d("O n\xfamero de progn\xf3sticos a desdobrar n\xe3o pode ser superior a 4."),E(!0)):parseInt(o,10)>1&&parseInt(o,10)<t&&d("Ser\xe3o gerados ".concat(function(e){switch(e.toString()){case"1":return 2;case"2":return 4;case"3":return 8;case"4":return 16;default:return 2}}(e)," boletins ao desdobrar os \xfaltimos ").concat(e," progn\xf3sticos."))}),[o,t]),r.a.createElement(f.a,{item:!0,xs:12,md:4},r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:12},r.a.createElement(w.a,{label:"N\xfamero de progn\xf3sticos 'certos'",fullWidth:!0,value:o,onChange:i,type:"number",step:"1",min:"1",className:s.numberBets,disabled:c,helperText:c?0===t?"Nenhum progn\xf3stico inserido":"Insira mais do que 1 progn\xf3stico":u,error:h})),r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:"auto",className:s.itemButton},r.a.createElement(v.a,{variant:"contained",color:"primary",disabled:x,onClick:a,className:s.buttonSecondary},"Desdobrar progn\xf3sticos"))))})),U=function(e,t,a){for(var n=e-t,r="1".repeat(n),o=parseInt(r,2),i=[],s=0;s<=o;s++){for(var c={name:"Boletim #".concat(s+1),games:a.slice(0,t)},l=s.toString(2).padStart(n,"0").split(""),m=0,u=t;u<e;u++){var d="0"===l[m]?"X":"TR";c.games.push("".concat(a[u]," ").concat(d)),m++}i.push(c)}return i},X=Object(c.a)((function(e){var t,a;return{header:(t={},Object(b.a)(t,e.breakpoints.down("xl"),{marginTop:"50px"}),Object(b.a)(t,e.breakpoints.down("lg"),{marginTop:"30px"}),Object(b.a)(t,e.breakpoints.down("md"),{marginTop:"20px"}),Object(b.a)(t,e.breakpoints.down("xs"),{marginTop:"15px"}),t),marginContent:(a={},Object(b.a)(a,e.breakpoints.down("xl"),{marginTop:"70px"}),Object(b.a)(a,e.breakpoints.down("lg"),{marginTop:"40px"}),Object(b.a)(a,e.breakpoints.down("md"),{marginTop:"30px"}),Object(b.a)(a,e.breakpoints.down("xs"),{marginTop:"25px"}),a),minMargin:{marginBottom:"30px"},buttonSecondary:{backgroundColor:"#169429","&:hover":{backgroundColor:"#1a6125"}},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),$=function(){var e=X(),t=Object(n.useState)(""),a=Object(g.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(""),c=Object(g.a)(s,2),l=c[0],d=c[1],p=Object(n.useState)(0),O=Object(g.a)(p,2),B=O[0],k=O[1],w=Object(n.useState)(""),C=Object(g.a)(w,2),S=C[0],N=C[1],M=Object(n.useState)([]),G=Object(g.a)(M,2),R=G[0],F=G[1],q=Object(n.useState)(!1),P=Object(g.a)(q,2),A=P[0],V=P[1],$=Object(n.useState)("divisor"),K=Object(g.a)($,2),L=K[0],Q=K[1];Object(n.useEffect)((function(){k(S.split(/\r*\n/).filter((function(e){return""!==e})).length)}),[S]);var Y=function(e){e.preventDefault();var t=y(o,S.split(/\r*\n/).filter((function(e){return""!==e})));F(t)},Z=Object(n.useCallback)((function(){V((function(e){return!e}))}),[]),_=Object(n.useCallback)((function(e){return e.preventDefault(),F([]),Q("divisor"===L?"desdobrador":"divisor")}),[L]);return r.a.createElement(f.a,{container:!0,justify:"center",className:e.minMargin},r.a.createElement(f.a,{item:!0,xs:11,md:10,lg:9},r.a.createElement(u.a,{variant:"h5",align:"center",className:e.header},"divisor"===L?"Divisor":"Desdobrador"," de progn\xf3sticos"),r.a.createElement(m.a,{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:_,className:Object(D.a)(Object(b.a)({},e.buttonSecondary,"divisor"===L))},"Mudar para ","divisor"===L?"Desdobrador":"Divisor")),r.a.createElement(f.a,{container:!0,spacing:3,className:e.marginContent},0===R.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{value:S,totalBets:B,onChange:function(e){return N(e.target.value)},toggleModal:Z,menu:L}),"divisor"===L?r.a.createElement(T,{betsByEntry:o,onChangeBets:function(e){return i(e.target.value)},totalBets:B,divideBets:Y}):r.a.createElement(H,{totalBets:B,combineBets:function(e){e.preventDefault();var t=U(B,l,S.split(/\r*\n/).filter((function(e){return""!==e})));F(t)},rightGames:l,onChangeRight:function(e){return d(e.target.value)}})):r.a.createElement(r.a.Fragment,null,R.map((function(e,t){var a=e.name,n=e.games,o=e.odd;return r.a.createElement(W,{key:t,name:a,games:n,odd:o,rightGames:l,menu:L})})),r.a.createElement(z,{setBetSlips:F,setBetsByEntry:i,divideBets:Y,menu:L})))),r.a.createElement(h.a,{open:A,fullWidth:!0,onClose:Z},r.a.createElement(E.a,null,"Informa\xe7\xe3o sobre o ","divisor"===L?"Divisor":"Desdobrador",r.a.createElement(x.a,{"aria-label":"Close",className:e.closeButton,onClick:Z},r.a.createElement(J.a,null))),r.a.createElement(j.a,null,"divisor"===L?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"1-")," Insira um progn\xf3stico por linha na caixa de texto."),r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"2-")," Escolha quantos progn\xf3sticos quer por boletim gerado."),r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"3-")," Ap\xf3s clique no bot\xe3o 'Dividir progn\xf3sticos' s\xe3o exibidos os boletins gerados."),r.a.createElement(u.a,null,"Para obter a odd correspondente do boletim final, insira o progn\xf3stico com a odd do evento ap\xf3s um @."),r.a.createElement(u.a,{variant:"subtitle2"},"Exemplo:"),r.a.createElement(u.a,null,"Portugal TR1 @1.75")):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"1-")," Insira um progn\xf3stico por linha na caixa de texto, com os progn\xf3sticos 'certos' ordenados."),r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"2-")," Escolha quantos progn\xf3sticos s\xe3o considerados 'certos'. Estes progn\xf3sticos mant\xeam-se iguais em todos os boletins desdobrados."),r.a.createElement(u.a,{paragraph:!0},r.a.createElement("b",null,"3-")," Ap\xf3s clique no bot\xe3o 'Desdobrar progn\xf3sticos' s\xe3o exibidos os boletins geradas."),r.a.createElement(u.a,null,"Existe um limite de 4 progn\xf3sticos para serem desdobrados, uma vez que:"),r.a.createElement(u.a,null,"1 jogo a desdobrar -> 2 boletins"),r.a.createElement(u.a,null,"2 jogos a desdobrar -> 4 boletins"),r.a.createElement(u.a,null,"3 jogos a desdobrar -> 8 boletins"),r.a.createElement(u.a,null,"4 jogos a desdobrar -> 16 boletins")))))},K=a(47),L={MuiDialogContent:{root:{padding:"8px"}},MuiDialogTitle:{root:{padding:0}},MuiPaper:{root:{padding:"20px"}}},Q=Object(K.a)({palette:{background:{default:"#EDEDED"}},overrides:L}),Y=a(37),Z=Object(c.a)((function(){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"}}}));Y.a.initialize("UA-149127176-1"),Y.a.pageview(window.location.pathname+window.location.search);var _=function(){var e=Z();return r.a.createElement(s.a,{theme:Q},r.a.createElement(l.a,null),r.a.createElement("div",{className:e.root},r.a.createElement($,null),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);