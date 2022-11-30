"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{2080:(y,u,a)=>{a.r(u),a.d(u,{HomePageModule:()=>v});var l=a(9808),g=a(4182),n=a(5649),s=a(9800),d=a(655),h=a(162),m=a(2993),p=a(5439),e=a(2096),Z=a(6858),f=a(4662);function A(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"ion-datetime",43,44),e.NdJ("ionChange",function(){e.CHM(t);const r=e.MAs(1);return e.oxw().formatCheckInDate(r.value)}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("min",t.today)("showDefaultButtons",!0)}}function T(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"ion-datetime",45,46),e.NdJ("ionChange",function(){e.CHM(t);const r=e.MAs(1);return e.oxw().formatCheckOutDate(r.value)}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("min",t.today)("showDefaultButtons",!0)("size","fixed")}}function q(o,c){if(1&o&&(e.TgZ(0,"ion-col")(1,"div",47)(2,"ion-row")(3,"ion-col")(4,"h4",48),e._uU(5),e._UZ(6,"br")(7,"br"),e.TgZ(8,"span",49),e._uU(9),e.qZA(),e._uU(10," / noite "),e.qZA()()()()()),2&o){const t=c.$implicit;e.xp6(1),e.Jzz("background-image: url(",null==t.images[0]?null:t.images[0].url,")"),e.xp6(4),e.hij(" ",t.name," "),e.xp6(4),e.hij("R$ ",null==t.tariffs[0]?null:t.tariffs[0].price,"")}}const _=function(){return["/quartos"]},C=[{path:"",component:(()=>{class o{constructor(t,i,r){this.toastController=t,this.router=i,this.httpS=r,this.today=p().format("YYYY-MM-DD"),this.nossosQuartos=[],this.checkInDate=null,this.checkInDateShow="-",this.checkOutDate=null,this.checkOutDateShow="-",this.qtyAdults=0,this.qtyChildren=0}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.getQuartos();this.nossosQuartos=t.slice(0,4)})}getQuartos(){return this.httpS.get("room")}confirm(){this.datetime.nativeEl.confirm()}reset(){this.datetime.nativeEl.reset()}formatCheckOutDate(t){this.checkOutDateShow=this.formatDate(t),this.checkOutDate=this.formatDate(t,"yyyy-MM-dd")}formatCheckInDate(t){this.checkInDateShow=this.formatDate(t),this.checkInDate=this.formatDate(t,"yyyy-MM-dd")}buscarQuartos(){const t=document.getElementById("qtyAdults").value,i=document.getElementById("qtyChildren").value;if(!(t&&i&&this.checkInDate&&this.checkOutDate))return void this.presentToast("Por favor, preencha todos os campos para pesquisar um quarto.","danger");const r={checkInDate:this.checkInDate,checkOutDate:this.checkOutDate,qtyAdults:Number(t),qtyChildren:Number(i)};this.checkInDateShow="-",this.checkOutDateShow="-",this.checkInDate=null,this.checkOutDate=null,this.qtyAdults=0,this.qtyChildren=0,this.router.navigateByUrl("/quartos",{state:r})}formatDate(t,i="dd/MM/yyyy"){return(0,h.Z)((0,m.Z)(t),i)}presentToast(t,i){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:3e3,color:i})).present()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.yF),e.Y36(s.F0),e.Y36(Z.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(t,i){if(1&t&&e.Gf(n.x4,7),2&t){let r;e.iGM(r=e.CRH())&&(i.datetime=r.first)}},decls:153,vars:8,consts:[[3,"fullscreen"],["id","container",1,"container","mt-5"],[1,"banner","mt-2","mb-5"],[1,"h-100"],[1,"h-100","align-items-center","justify-content-center","ion-hide-lg-down",2,"display","flex"],[1,"banner-text"],[1,"h-100","d-flex","align-items-center","justify-content-center"],[1,"card-banner"],["button","true","id","open-date-input-home","lines","none",1,"input-card"],["slot","start","icon","calendar-clear-outline"],["slot","end",1,"text-center"],["trigger","open-date-input-home","show-backdrop","false"],["button","true","id","open-date-input2-home","lines","none",1,"input-card"],["trigger","open-date-input2-home","show-backdrop","false"],["id","open-date-input2","lines","none",1,"input-card"],["placeholder","-","id","qtyAdults",3,"value"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["placeholder","-","id","qtyChildren",3,"value"],["value","0"],["color","danger","expand","block",3,"click"],[1,"nossos-quartos"],["size","auto"],[1,"fw-bold","divider-title"],[3,"routerLink"],[4,"ngFor","ngForOf"],[1,"o-que-oferecemos","my-5"],["size","12","sizeLg","4"],[1,"card-promotions"],[1,"text-center"],["icon","business","size","large"],[1,"text-warning","fw-bold","title-card-promotions-section","my-3"],[1,"ion-text-uppercase"],["icon","fast-food","size","large"],["icon","star","size","large"],[1,"como-reservar-um-quarto","my-5"],["icon","bed","size","large"],["icon","list","size","large"],["icon","bag-check","size","large"],["presentation","date","max","2023-12-31","doneText","Confirmar","cancelText","Cancelar","id","checkinElement",3,"min","showDefaultButtons","ionChange"],["popoverDatetime1",""],["presentation","date","doneText","Confirmar","cancelText","Cancelar","max","2023-12-31","id","checkoutElement",3,"min","showDefaultButtons","size","ionChange"],["popoverDatetime2",""],[1,"card-quartos","d-flex","align-items-center","justify-content-center"],[1,"text-center","text-image"],[1,"text-price"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"section",2)(3,"ion-row",3)(4,"ion-col",4)(5,"h4",5),e._uU(6," UM LUGAR ESPECIAL ONDE VOC\xca PODE FICAR E RELAXAR "),e.qZA()(),e.TgZ(7,"ion-col",6)(8,"ion-card",7)(9,"ion-card-header")(10,"ion-card-title"),e._uU(11,"RESERVAR UM QUARTO"),e.qZA()(),e.TgZ(12,"ion-card-content")(13,"ion-row")(14,"ion-col")(15,"ion-item",8)(16,"ion-label"),e._UZ(17,"ion-icon",9),e._uU(18," Check-in"),e.qZA(),e.TgZ(19,"ion-text",10),e._uU(20),e.qZA(),e.TgZ(21,"ion-popover",11),e.YNc(22,A,2,2,"ng-template"),e.qZA()()()(),e.TgZ(23,"ion-row")(24,"ion-col")(25,"ion-item",12)(26,"ion-label"),e._UZ(27,"ion-icon",9),e._uU(28," Check-out"),e.qZA(),e.TgZ(29,"ion-text",10),e._uU(30),e.qZA(),e.TgZ(31,"ion-popover",13),e.YNc(32,T,2,3,"ng-template"),e.qZA()()()(),e.TgZ(33,"ion-row")(34,"ion-col")(35,"ion-item",14)(36,"ion-label"),e._UZ(37,"ion-icon",9),e._uU(38," Adultos"),e.qZA(),e.TgZ(39,"ion-select",15)(40,"ion-select-option",16),e._uU(41,"1"),e.qZA(),e.TgZ(42,"ion-select-option",17),e._uU(43,"2"),e.qZA(),e.TgZ(44,"ion-select-option",18),e._uU(45,"3"),e.qZA(),e.TgZ(46,"ion-select-option",19),e._uU(47,"4"),e.qZA(),e.TgZ(48,"ion-select-option",20),e._uU(49,"5"),e.qZA(),e.TgZ(50,"ion-select-option",21),e._uU(51,"6"),e.qZA()()()()(),e.TgZ(52,"ion-row")(53,"ion-col")(54,"ion-item",14)(55,"ion-label"),e._UZ(56,"ion-icon",9),e._uU(57," Crian\xe7as"),e.qZA(),e.TgZ(58,"ion-select",22)(59,"ion-select-option",23),e._uU(60,"0"),e.qZA(),e.TgZ(61,"ion-select-option",16),e._uU(62,"1"),e.qZA(),e.TgZ(63,"ion-select-option",17),e._uU(64,"2"),e.qZA(),e.TgZ(65,"ion-select-option",18),e._uU(66,"3"),e.qZA(),e.TgZ(67,"ion-select-option",19),e._uU(68,"4"),e.qZA(),e.TgZ(69,"ion-select-option",20),e._uU(70,"5"),e.qZA(),e.TgZ(71,"ion-select-option",21),e._uU(72,"6"),e.qZA()()()()(),e.TgZ(73,"ion-row")(74,"ion-col")(75,"ion-button",24),e.NdJ("click",function(){return i.buscarQuartos()}),e._uU(76,"Pesquisar"),e.qZA()()()()()()()(),e.TgZ(77,"section",25)(78,"ion-row")(79,"ion-col",26)(80,"h5",27),e._uU(81," NOSSOS QUARTOS - "),e.TgZ(82,"a",28),e._uU(83,"Ver todos"),e.qZA()()(),e.TgZ(84,"ion-col"),e._UZ(85,"hr"),e.qZA()(),e.TgZ(86,"ion-row"),e.YNc(87,q,11,5,"ion-col",29),e.qZA()(),e.TgZ(88,"section",30)(89,"ion-row")(90,"ion-col",26)(91,"h5",27),e._uU(92,"O QUE OFERECEMOS"),e.qZA()(),e.TgZ(93,"ion-col"),e._UZ(94,"hr"),e.qZA()(),e.TgZ(95,"ion-row")(96,"ion-col",31)(97,"ion-card",32)(98,"ion-card-content",33),e._UZ(99,"ion-icon",34),e.TgZ(100,"h5",35),e._uU(101," ACOMODA\xc7\xd5ES "),e.qZA(),e.TgZ(102,"h6",36),e._uU(103," Nossos quartos oferecem acomoda\xe7\xf5es confort\xe1veis \u200b\u200bcom Wi-Fi gratuito, aquecimento central etc. "),e.qZA()()()(),e.TgZ(104,"ion-col",31)(105,"ion-card",32)(106,"ion-card-content",33),e._UZ(107,"ion-icon",37),e.TgZ(108,"h5",35),e._uU(109," JANTAR "),e.qZA(),e.TgZ(110,"h6",36),e._uU(111," Jante com estilo e no seu melhor no Restaurante Resort, que serve uma grande variedade de gostos. "),e.qZA()()()(),e.TgZ(112,"ion-col",31)(113,"ion-card",32)(114,"ion-card-content",33),e._UZ(115,"ion-icon",38),e.TgZ(116,"h5",35),e._uU(117," SERVI\xc7O DE QUARTO "),e.qZA(),e.TgZ(118,"h6",36),e._uU(119," O servi\xe7o de quarto est\xe1 dispon\xedvel 24 horas, incluindo entregas de caf\xe9 da manh\xe3. "),e.qZA()()()()()(),e.TgZ(120,"section",39)(121,"ion-row")(122,"ion-col",26)(123,"h5",27),e._uU(124,"COMO RESERVAR UM QUARTO"),e.qZA()(),e.TgZ(125,"ion-col"),e._UZ(126,"hr"),e.qZA()(),e.TgZ(127,"ion-row")(128,"ion-col",31)(129,"ion-card",32)(130,"ion-card-content",33),e._UZ(131,"ion-icon",40),e.TgZ(132,"h5",35),e._uU(133," SELECIONE UMA ACOMODA\xc7\xc3O "),e.qZA(),e.TgZ(134,"h6",36),e._uU(135," Voc\xea tamb\xe9m pode selecionar um tipo de quarto exato durante a confirma\xe7\xe3o da reserva. "),e.qZA()()()(),e.TgZ(136,"ion-col",31)(137,"ion-card",32)(138,"ion-card-content",33),e._UZ(139,"ion-icon",41),e.TgZ(140,"h5",35),e._uU(141," PREENCHA O FORMUL\xc1RIO ONLINE "),e.qZA(),e.TgZ(142,"h6",36),e._uU(143," Tudo come\xe7a com o preenchimento do formul\xe1rio de reserva em nosso site. "),e.qZA()()()(),e.TgZ(144,"ion-col",31)(145,"ion-card",32)(146,"ion-card-content",33),e._UZ(147,"ion-icon",42),e.TgZ(148,"h5",35),e._uU(149," CHECK-IN NO HOTEL "),e.qZA(),e.TgZ(150,"h6",36),e._uU(151," Ao chegar ao hotel, n\xe3o se esque\xe7a de fazer o check-in na recep\xe7\xe3o. "),e.qZA()()()()()()(),e._UZ(152,"app-footer"),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(20),e.Oqu(i.checkInDateShow),e.xp6(10),e.Oqu(i.checkOutDateShow),e.xp6(9),e.Q6J("value",i.qtyAdults),e.xp6(19),e.Q6J("value",i.qtyChildren),e.xp6(24),e.Q6J("routerLink",e.DdM(7,_)),e.xp6(5),e.Q6J("ngForOf",i.nossosQuartos))},directives:[n.W2,n.Nd,n.wI,n.PM,n.Zi,n.Dq,n.FN,n.Ie,n.Q$,n.gu,n.yW,n.d8,n.x4,n.QI,n.t9,n.n0,n.YG,n.Fo,s.yS,l.sg,f.c],styles:[".banner[_ngcontent-%COMP%]{height:40vh;background-image:url(bg-banner.c9eda401e6dc80ed.png);background-size:cover;background-repeat:no-repeat;background-position:center center;border-radius:5px}.banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin:0 10vw;text-shadow:0px 4px 4px rgba(0,0,0,.25)}.banner[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{background-color:#f0f0f5}.banner[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-weight:700}.banner[_ngcontent-%COMP%]   .input-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{width:86px}@media (max-height: 992px){.banner[_ngcontent-%COMP%]{min-height:60vh}}.divider-title[_ngcontent-%COMP%]{color:#41414db2}.title-card-promotions-section[_ngcontent-%COMP%]{font-size:1.1rem}.card-promotions[_ngcontent-%COMP%]{min-height:180px}.card-quartos[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;border-radius:5px;height:350px;color:#fff}.card-quartos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700}.card-quartos[_ngcontent-%COMP%]   .text-price[_ngcontent-%COMP%]{color:#ffe600}.text-image[_ngcontent-%COMP%]{background:#00000073;border-radius:10px;padding:10px}"]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),o})();var U=a(5642);let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,g.u5,n.Pc,O,U.K]]}),o})()}}]);