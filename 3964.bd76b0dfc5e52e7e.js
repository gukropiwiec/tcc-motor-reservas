"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3964],{4662:(A,m,a)=>{a.d(m,{c:()=>Z});var _=a(655),o=a(2096),s=a(9953),l=a(5649),p=a(9800);const e=function(){return["/"]},h=function(){return["/quartos"]},f=function(){return["/promocoes"]},M=function(){return["/sobre"]},T=function(){return["/contato"]};let Z=(()=>{class g{constructor(u){this.hotelS=u}ngOnInit(){return(0,_.mG)(this,void 0,void 0,function*(){})}}return g.\u0275fac=function(u){return new(u||g)(o.Y36(s.N))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-footer"]],decls:35,vars:14,consts:[[1,"p-4"],["offsetLg","2"],[1,"cursor-pointer",3,"routerLink"],["color","light",3,"routerLink"],[1,"botton-footer","p-2","text-sm-center"],["sizeXs","12","sizeSm","6"]],template:function(u,r){1&u&&(o.TgZ(0,"ion-footer")(1,"ion-row",0)(2,"ion-col",1)(3,"h4"),o._uU(4,"NOSSOS CONTATOS"),o.qZA(),o._UZ(5,"br"),o.TgZ(6,"p"),o._uU(7),o.qZA(),o._UZ(8,"br"),o.TgZ(9,"p"),o._uU(10),o.qZA()(),o.TgZ(11,"ion-col")(12,"h4"),o._uU(13,"NAVEGA\xc7\xc3O"),o.qZA(),o.TgZ(14,"ul")(15,"li",2),o._uU(16,"HOME"),o.qZA(),o.TgZ(17,"li",2),o._uU(18,"QUARTOS"),o.qZA(),o.TgZ(19,"li",2),o._uU(20,"PROMO\xc7\xd5ES"),o.qZA(),o.TgZ(21,"li",2),o._uU(22,"SOBRE"),o.qZA(),o.TgZ(23,"li",2),o._uU(24,"CONTATOS"),o.qZA()()(),o.TgZ(25,"ion-col")(26,"ion-button",3),o._uU(27,"RESERVAR AGORA"),o.qZA()()(),o.TgZ(28,"ion-row",4)(29,"ion-col",5)(30,"span"),o._uU(31,"\xa9 2022 Resort. All rights reserved"),o.qZA()(),o.TgZ(32,"ion-col",5)(33,"span"),o._uU(34,"Pol\xedtica de Privacidade"),o.qZA()()()()),2&u&&(o.xp6(7),o.hij("Telefone: ",null==r.hotelS.hotel?null:r.hotelS.hotel.phone,""),o.xp6(3),o.hij("Email: ",null==r.hotelS.hotel?null:r.hotelS.hotel.email,""),o.xp6(5),o.Q6J("routerLink",o.DdM(8,e)),o.xp6(2),o.Q6J("routerLink",o.DdM(9,h)),o.xp6(2),o.Q6J("routerLink",o.DdM(10,f)),o.xp6(2),o.Q6J("routerLink",o.DdM(11,M)),o.xp6(2),o.Q6J("routerLink",o.DdM(12,T)),o.xp6(3),o.Q6J("routerLink",o.DdM(13,h)))},directives:[l.fr,l.Nd,l.wI,l.YI,p.rH,l.YG],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#41414d;color:#fff}ion-footer[_ngcontent-%COMP%]   .botton-footer[_ngcontent-%COMP%]{background-color:#363639}"]}),g})()},3964:(A,m,a)=>{a.r(m),a.d(m,{CadastroPageModule:()=>u});var _=a(9808),o=a(4182),s=a(5649),l=a(9800),p=a(655),e=a(2096),h=a(3071),f=a(6858),M=a(4662);const Z=[{path:"",component:(()=>{class r{constructor(d,n,i,t){this.userS=d,this.router=n,this.toastController=i,this.httpS=t,this.form={firstName:null,lastName:null,email:null,phone:null,password:null,cpf:null,addressStreet:null,addressNumber:null,addressCity:null,addressDistrict:null,addressCountry:null,addressCep:null}}ngOnInit(){this.userS.user&&this.router.navigateByUrl("/")}cadastrar(){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.httpS.post("user",this.form))?(this.presentToast(),this.router.navigateByUrl("/")):this.presentToastError()})}presentToast(){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Cadastro realizado com sucesso.",duration:2e3,color:"success"})).present()})}presentToastError(){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Preencha os campos email e senha, se o problema persistir, tente novamente.",duration:2e3,color:"danger"})).present()})}}return r.\u0275fac=function(d){return new(d||r)(e.Y36(h.K),e.Y36(l.F0),e.Y36(s.yF),e.Y36(f.O))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-cadastro"]],decls:62,vars:13,consts:[[3,"fullscreen"],[1,"cadastro-page-background"],[1,"h-100","row-cadastro-card","mt-5"],["size","12","sizeMd","10","sizeLg","8","sizeXl","6"],[1,"cadastro-card","py-3"],["size","12","sizeMd","6"],["placeholder","Endere\xe7o de E-mail","id","email",1,"my-4",3,"ngModel","ngModelChange"],["placeholder","Primeiro Nome",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Segundo Nome",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","CPF",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Telefone",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","CEP",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Rua",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","N\xfamero",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Bairro",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Cidade",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Pa\xeds",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Senha","type","password","id","senha",1,"mb-4",3,"ngModel","ngModelChange"],["placeholder","Confirma\xe7\xe3o da senha","type","password",1,"mb-4"],[1,"cursor-pointer"],[1,"text-blue","cursor-pointer"],["color","danger",1,"my-3",3,"click"],["size","12","sizeLg","6"],[1,"text-uppercase","text-start","mt-4","mb-5","text-dark"],[1,"text-uppercase","small"]],template:function(d,n){1&d&&(e.TgZ(0,"ion-content",0)(1,"section",1)(2,"ion-row",2)(3,"ion-col",3)(4,"ion-card",4)(5,"ion-row")(6,"ion-col",5)(7,"ion-card-header")(8,"ion-card-title"),e._uU(9,"CADASTRO"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-input",6),e.NdJ("ngModelChange",function(t){return n.form.email=t}),e.qZA(),e.TgZ(12,"ion-input",7),e.NdJ("ngModelChange",function(t){return n.form.firstName=t}),e.qZA(),e.TgZ(13,"ion-input",8),e.NdJ("ngModelChange",function(t){return n.form.lastName=t}),e.qZA(),e.TgZ(14,"ion-input",9),e.NdJ("ngModelChange",function(t){return n.form.cpf=t}),e.qZA(),e.TgZ(15,"ion-input",10),e.NdJ("ngModelChange",function(t){return n.form.phone=t}),e.qZA(),e.TgZ(16,"ion-input",11),e.NdJ("ngModelChange",function(t){return n.form.addressCep=t}),e.qZA(),e.TgZ(17,"ion-input",12),e.NdJ("ngModelChange",function(t){return n.form.addressStreet=t}),e.qZA(),e.TgZ(18,"ion-input",13),e.NdJ("ngModelChange",function(t){return n.form.addressNumber=t}),e.qZA(),e.TgZ(19,"ion-input",14),e.NdJ("ngModelChange",function(t){return n.form.addressDistrict=t}),e.qZA(),e.TgZ(20,"ion-input",15),e.NdJ("ngModelChange",function(t){return n.form.addressCity=t}),e.qZA(),e.TgZ(21,"ion-input",16),e.NdJ("ngModelChange",function(t){return n.form.addressCountry=t}),e.qZA(),e.TgZ(22,"ion-input",17),e.NdJ("ngModelChange",function(t){return n.form.password=t}),e.qZA(),e._UZ(23,"ion-input",18),e.TgZ(24,"ion-note",19),e._uU(25," Ao fazer login ou criar uma conta, voc\xea concorda com nossos "),e.TgZ(26,"span",20),e._uU(27,"Termos e Condi\xe7\xf5es"),e.qZA(),e._uU(28," e "),e.TgZ(29,"span",20),e._uU(30,"Declara\xe7\xe3o de Privacidade"),e.qZA()(),e.TgZ(31,"ion-button",21),e.NdJ("click",function(){return n.cadastrar()}),e._uU(32,"CADASTRAR"),e.qZA()()(),e.TgZ(33,"ion-col",22)(34,"ion-card-header")(35,"ion-text")(36,"span",20),e._uU(37,"GUIAS DE VIAGEM"),e.qZA(),e._uU(38," | "),e.TgZ(39,"span",20),e._uU(40,"\xcdNDICE DO SITE"),e.qZA()()(),e.TgZ(41,"ion-card-content")(42,"ul",23)(43,"li"),e._uU(44,"Suporte e perguntas frequentes"),e.qZA(),e.TgZ(45,"li"),e._uU(46,"Termos de uso e privacidade"),e.qZA(),e.TgZ(47,"li"),e._uU(48,"Sobre n\xf3s"),e.qZA(),e.TgZ(49,"li"),e._uU(50,"Trabalhe conosco"),e.qZA(),e.TgZ(51,"li"),e._uU(52,"Cadastrar-se como um hotel"),e.qZA()(),e.TgZ(53,"ion-text",24),e._uU(54," * alguns hot\xe9is exigem que o cancelamento seja feito mais de 24 horas antes do check-in. veja mais detalhes no site. "),e._UZ(55,"br")(56,"br"),e._uU(57," \xa9 2022 (NOME DO SITE) todos os direitos reservados. "),e._UZ(58,"br")(59,"br"),e._uU(60," (nome do site) e o logotipo s\xe3o marcas registradas e/ou de servi\xe7o da (nome do site). as demais marcas registradas mencionadas aqui s\xe3o propriedade de seus respectivos propriet\xe1rios. "),e.qZA()()()()()()()(),e._UZ(61,"app-footer"),e.qZA()),2&d&&(e.Q6J("fullscreen",!0),e.xp6(11),e.Q6J("ngModel",n.form.email),e.xp6(1),e.Q6J("ngModel",n.form.firstName),e.xp6(1),e.Q6J("ngModel",n.form.lastName),e.xp6(1),e.Q6J("ngModel",n.form.cpf),e.xp6(1),e.Q6J("ngModel",n.form.phone),e.xp6(1),e.Q6J("ngModel",n.form.addressCep),e.xp6(1),e.Q6J("ngModel",n.form.addressStreet),e.xp6(1),e.Q6J("ngModel",n.form.addressNumber),e.xp6(1),e.Q6J("ngModel",n.form.addressDistrict),e.xp6(1),e.Q6J("ngModel",n.form.addressCity),e.xp6(1),e.Q6J("ngModel",n.form.addressCountry),e.xp6(1),e.Q6J("ngModel",n.form.password))},directives:[s.W2,s.Nd,s.wI,s.PM,s.Zi,s.Dq,s.FN,s.pK,s.j9,o.JJ,o.On,s.uN,s.YG,s.yW,M.c],styles:[".cadastro-page-background[_ngcontent-%COMP%]{min-height:80vh}.cadastro-card[_ngcontent-%COMP%]{align-self:center;text-align:center;background-color:#e5e5e5}.cadastro-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.cadastro-card[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background:#fff;width:80%;margin:auto;border-radius:10px;text-align:start;--padding-start: 20px}.cadastro-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;font-weight:700}.row-cadastro-card[_ngcontent-%COMP%]{justify-content:center;align-content:center}.text-cadastrar[_ngcontent-%COMP%]{background:rgba(65,65,77,.05);padding:4px 15px;border-radius:10px}"]}),r})()}];let g=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),r})();var C=a(5642);let u=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[_.ez,o.u5,s.Pc,g,C.K]]}),r})()}}]);