(window["webpackJsonpbets-divider"]=window["webpackJsonpbets-divider"]||[]).push([[0],{62:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),i=t.n(o),l=t(109),c=t(42),s=t(110),m=t(112),p=t(72),u=Object(c.a)((function(){return{boxFooter:{display:"flex",height:"40px",justifyContent:"center",alignItems:"center",backgroundColor:"#D8D8D8",padding:"0px 20px",marginTop:"auto"},anchor:{textDecoration:"none!important",color:"inherit"}}})),d=function(){var e=u();return r.a.createElement(m.a,{className:e.boxFooter},r.a.createElement(p.a,{variant:"body2"},"Desenvolvido por"," ",r.a.createElement("a",{href:"mailto:rafaelcostaveloso@gmail.com",className:e.anchor},"Rafael Veloso")))},g=t(17),f=t(12),b=t(100),v=t(114),h=t(105),E=t(106),x=t(108),O=t(48),j=function(e){if(-1!==e.indexOf("@")){var a=e.substr(e.indexOf("@")+1,e.length);return parseFloat(a)||1}return 1},B=function(e,a){for(var t=Math.floor(a.length/e),n=a.length%e,r=Object(O.a)(Array(a.length).keys()),o=[],i=0;i<t;i++){var l={name:"Aposta #".concat(i+1),games:[],odd:1,order:[]};o.push(l);for(var c=0;c<e;c++)if(0===c){var s=r[Math.floor(Math.random()*r.length)];o[i].games.push(a[s]),o[i].odd*=j(a[s]),o[i].order.push(s);var m=r.indexOf(s);r.splice(m,1)}else{for(var p=r[Math.floor(Math.random()*r.length)],u=a[p].split(" ")[0],d=o[i].games.map((function(e){return e.split(" ")[0]}));d.includes(u);){var g=r[Math.floor(Math.random()*r.length)];u=a[g].split(" ")[0]}o[i].games.push(a[p]),o[i].odd*=j(a[p]),o[i].order.push(p);var f=r.indexOf(p);r.splice(f,1)}o[i].order.sort((function(e,a){return e-a})),o[i].games=[];var b=o[i].order;o[i].games=b.map((function(e){return a[e]}))}if(n>0){var v={name:"Resto",games:[],odd:1,order:[]};r.forEach((function(e){v.games.push(a[e]),v.odd*=j(a[e]),v.order.push(e)})),o.push(v)}return o},y=t(101),k=t(111),w=t(102),C=Object(c.a)((function(e){return{iconInfo:{position:"absolute",marginTop:"-30px",width:30,height:30,"&:hover":{cursor:"pointer",color:e.palette.primary.dark}}}})),M=function(e){var a=e.value,t=e.totalBets,n=e.onChange,o=e.toggleModal,i=C();return r.a.createElement(b.a,{item:!0,xs:12,md:8,lg:7},r.a.createElement(y.a,{elevation:3},r.a.createElement(k.a,{label:"Progn\xf3sticos",variant:"outlined",fullWidth:!0,value:a,onChange:n,multiline:!0,rows:5,rowsMax:50,helperText:0===t?"Inserir 1 progn\xf3stico por linha.":"".concat(t," progn\xf3stico").concat(t>1?"s":""," inserido").concat(t>1?"s":"",".")}),r.a.createElement(w.a,{color:"primary",className:i.iconInfo,onClick:o})))},N=t(103),D=Object(c.a)((function(e){var a;return{numberBets:(a={},Object(f.a)(a,e.breakpoints.up("md"),{marginBottom:"20px"}),Object(f.a)(a,e.breakpoints.down("xs"),{marginBottom:"20px"}),a),itemButton:Object(f.a)({display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},e.breakpoints.down("xs"),{justifyContent:"center"})}})),T=r.a.memo((function(e){var a=e.betsByEntry,t=e.onChangeBets,o=e.totalBets,i=e.divideBets,l=D(),c=Object(n.useMemo)((function(){return o<=1}),[o]),s=Object(n.useState)(""),m=Object(g.a)(s,2),p=m[0],u=m[1],d=Object(n.useState)(!1),f=Object(g.a)(d,2),v=f[0],h=f[1];return Object(n.useEffect)((function(){if(parseInt(a,10)>=o?(u("O n\xfamero de progn\xf3sticos por aposta n\xe3o \xe9 inferior ao n\xfamero total de progn\xf3sticos."),h(!0)):(h(!1),u("")),parseInt(a,10)<o&&parseInt(a,10)>1){var e=Math.floor(o/parseInt(a,10));u("Ser\xe3o geradas ".concat(e," apostas com ").concat(parseInt(a,10)," progn\xf3sticos cada.")),h(!1)}else 1===parseInt(a,10)&&(u("O n\xfamero de progn\xf3sticos por aposta tem de ser superior a 1."),h(!0))}),[a,o]),r.a.createElement(b.a,{item:!0,xs:12,md:4},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:12,sm:6,md:12},r.a.createElement(k.a,{label:"Progn\xf3sticos por aposta",fullWidth:!0,value:a,onChange:t,type:"number",className:l.numberBets,disabled:c,helperText:c?0===o?"Nenhum progn\xf3stico inserido":"Insira mais do que 1 progn\xf3stico":p,error:v})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,md:"auto",className:l.itemButton},r.a.createElement(N.a,{variant:"contained",color:"primary",disabled:c||v||0===a.length,onClick:i},"Dividir progn\xf3sticos"))))})),I=t(104),S=t(3),F=Object(c.a)((function(e){return{evenGame:{color:e.palette.text.secondary}}})),R=r.a.memo((function(e){var a=e.idx,t=e.game,n=F();return r.a.createElement(p.a,{variant:"subtitle2",className:Object(S.a)(Object(f.a)({},n.evenGame,a%2!==0))},t)})),P=Object(c.a)((function(){return{divider:{marginBottom:"5px"},dividerBottom:{marginTop:"5px",marginBottom:"5px"},paper:{padding:"20px 20px 10px 20px"}}})),W=function(e){var a=e.name,t=e.games,n=e.odd,o=P();return r.a.createElement(b.a,{item:!0,xs:12,md:3,lg:4},r.a.createElement(y.a,{elevation:3,className:o.paper},r.a.createElement(p.a,{variant:"h6"},a),r.a.createElement(I.a,{className:o.divider}),t.map((function(e,a){return r.a.createElement(R,{key:a,idx:a,game:e})})),r.a.createElement(I.a,{className:o.dividerBottom}),n>1&&r.a.createElement(p.a,{variant:"subtitle2"},"Odd: ",parseFloat(n).toFixed(2))))};W.defaultProps={odd:1};var q=r.a.memo(W),A=Object(c.a)((function(){return{buttonBack:{marginRight:"20px"},itemRepeat:{display:"flex",marginTop:"30px"}}})),G=r.a.memo((function(e){var a=e.setBetSlips,t=e.setBetsByEntry,n=e.divideBets,o=A();return r.a.createElement(b.a,{item:!0,xs:12,className:o.itemRepeat},r.a.createElement(N.a,{variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),a([]),t("")},className:o.buttonBack},"Voltar ao menu anterior"),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:n},"Repetir divis\xe3o"))})),J=t(107),V=Object(c.a)((function(e){var a,t;return{header:(a={},Object(f.a)(a,e.breakpoints.down("xl"),{marginTop:"50px"}),Object(f.a)(a,e.breakpoints.down("lg"),{marginTop:"30px"}),Object(f.a)(a,e.breakpoints.down("md"),{marginTop:"20px"}),Object(f.a)(a,e.breakpoints.down("xs"),{marginTop:"15px"}),a),marginContent:(t={},Object(f.a)(t,e.breakpoints.down("xl"),{marginTop:"70px"}),Object(f.a)(t,e.breakpoints.down("lg"),{marginTop:"40px"}),Object(f.a)(t,e.breakpoints.down("md"),{marginTop:"30px"}),Object(f.a)(t,e.breakpoints.down("xs"),{marginTop:"25px"}),t),minMargin:{marginBottom:"30px"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),z=function(){var e=V(),a=Object(n.useState)(""),t=Object(g.a)(a,2),o=t[0],i=t[1],l=Object(n.useState)(0),c=Object(g.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),f=d[0],O=d[1],j=Object(n.useState)([]),y=Object(g.a)(j,2),k=y[0],w=y[1],C=Object(n.useState)(!1),N=Object(g.a)(C,2),D=N[0],I=N[1];Object(n.useEffect)((function(){m(f.split(/\r*\n/).filter((function(e){return""!==e})).length)}),[f]);var S=function(e){e.preventDefault();var a=B(o,f.split(/\r*\n/).filter((function(e){return""!==e})));w(a)},F=Object(n.useCallback)((function(){I((function(e){return!e}))}),[]);return r.a.createElement(b.a,{container:!0,justify:"center",className:e.minMargin},r.a.createElement(b.a,{item:!0,xs:11,md:10,lg:9},r.a.createElement(p.a,{variant:"h5",align:"center",className:e.header},"Divisor de progn\xf3sticos"),r.a.createElement(b.a,{container:!0,spacing:3,className:e.marginContent},0===k.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{value:f,totalBets:s,onChange:function(e){return O(e.target.value)},toggleModal:F}),r.a.createElement(T,{betsByEntry:o,onChangeBets:function(e){return i(e.target.value)},totalBets:s,divideBets:S})):r.a.createElement(r.a.Fragment,null,k.map((function(e,a){var t=e.name,n=e.games,o=e.odd;return r.a.createElement(q,{key:a,name:t,games:n,odd:o})})),r.a.createElement(G,{setBetSlips:w,setBetsByEntry:i,divideBets:S})))),r.a.createElement(v.a,{open:D,fullWidth:!0,onClose:F},r.a.createElement(h.a,null,"Informa\xe7\xe3o",r.a.createElement(E.a,{"aria-label":"Close",className:e.closeButton,onClick:F},r.a.createElement(J.a,null))),r.a.createElement(x.a,null,r.a.createElement(p.a,{paragraph:!0},r.a.createElement("b",null,"1-")," Insira um progn\xf3stico por linha na caixa de texto."),r.a.createElement(p.a,{paragraph:!0},r.a.createElement("b",null,"2-")," Escolha quantos progn\xf3sticos quer por aposta gerada."),r.a.createElement(p.a,{paragraph:!0},r.a.createElement("b",null,"3-")," Ap\xf3s clique no bot\xe3o 'Dividir progn\xf3sticos' s\xe3o exibidas as apostas geradas."),r.a.createElement(p.a,null,"Para obter a odd correspondente da aposta final, insira o progn\xf3stico com a odd do evento ap\xf3s um @."),r.a.createElement(p.a,{variant:"subtitle2"},"Exemplo:"),r.a.createElement(p.a,null,"Portugal TR1 @1.75"))))},H=t(46),U={MuiDialogContent:{root:{padding:"8px"}},MuiDialogTitle:{root:{padding:0}},MuiPaper:{root:{padding:"20px"}}},$=Object(H.a)({palette:{background:{default:"#EDEDED"}},overrides:U}),K=t(47),L=Object(c.a)((function(){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"}}}));K.a.initialize("UA-149127176-1");var Q=function(){var e=L();return r.a.createElement(l.a,{theme:$},r.a.createElement(s.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(z,null),r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);