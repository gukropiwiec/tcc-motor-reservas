"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8802],{8802:(L,u,r)=>{r.r(u),r.d(u,{LoginPageModule:()=>v});var d=r(9808),c=r(4182),o=r(5649),g=r(501),h=r(655),n=r(2096),m=r(3071),p=r(4662);const f=function(){return["/cadastro"]},M=[{path:"",component:(()=>{class e{constructor(t,i,a){this.userS=t,this.toastController=i,this.router=a,this.accounts=[],this.form={email:"",senha:""}}ngOnInit(){console.log(JSON.parse(localStorage.getItem("accounts"))),this.userS.user&&this.router.navigateByUrl("/"),this.getAccounts()}login(){var t;if("admin"===this.form.email&&"admin"===this.form.senha)this.userS.user="admin",this.userS.pagesMenuUser=!1,this.router.navigateByUrl("/admin/dashboard");else{if(this.getAccounts(),!(null===(t=this.accounts)||void 0===t?void 0:t.find(a=>a.email===this.form.email&&a.senha===this.form.senha)))return void this.presentToastError();this.userS.user="user",this.userS.pagesMenuUser=!0,this.router.navigateByUrl("/")}}getAccounts(){this.accounts=JSON.parse(localStorage.getItem("accounts"))}presentToastError(){return(0,h.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Usu\xe1rio e/ou senha incorretos.",duration:3e3,color:"danger"})).present()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.K),n.Y36(o.yF),n.Y36(g.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:23,vars:5,consts:[[3,"fullscreen"],[1,"login-page-background","mt-5"],[1,"h-100","row-login-card"],["size","12","sizeMd","8","sizeLg","4"],[1,"login-card","py-3"],["placeholder","Endere\xe7o de E-mail","id","email",1,"my-4",3,"ngModel","ngModelChange"],["placeholder","Senha","type","password","id","senha",1,"mb-4",3,"ngModel","ngModelChange"],["color","danger",1,"mb-3",3,"click"],[1,"cursor-pointer"],[1,"text-cadastrar"],[1,"text-blue","cursor-pointer",3,"routerLink"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-content",0)(1,"section",1)(2,"ion-row",2)(3,"ion-col",3)(4,"ion-card",4)(5,"ion-card-header")(6,"ion-card-title"),n._uU(7,"LOGIN"),n.qZA()(),n.TgZ(8,"ion-card-content")(9,"ion-input",5),n.NdJ("ngModelChange",function(l){return i.form.email=l}),n.qZA(),n.TgZ(10,"ion-input",6),n.NdJ("ngModelChange",function(l){return i.form.senha=l}),n.qZA(),n.TgZ(11,"ion-button",7),n.NdJ("click",function(){return i.login()}),n._uU(12,"ENTRAR"),n.qZA(),n._UZ(13,"br"),n.TgZ(14,"ion-note",8),n._uU(15,"Esqueceu sua senha?"),n.qZA(),n._UZ(16,"br")(17,"br"),n.TgZ(18,"ion-text",9),n._uU(19,"Precisa de uma conta? "),n.TgZ(20,"span",10),n._uU(21,"Cadastre-se agora!"),n.qZA()()()()()()(),n._UZ(22,"app-footer"),n.qZA()),2&t&&(n.Q6J("fullscreen",!0),n.xp6(9),n.Q6J("ngModel",i.form.email),n.xp6(1),n.Q6J("ngModel",i.form.senha),n.xp6(10),n.Q6J("routerLink",n.DdM(4,f)))},directives:[o.W2,o.Nd,o.wI,o.PM,o.Zi,o.Dq,o.FN,o.pK,o.j9,c.JJ,c.On,o.YG,o.uN,o.yW,o.YI,g.rH,p.c],styles:[".login-page-background[_ngcontent-%COMP%]{min-height:80vh}.login-card[_ngcontent-%COMP%]{align-self:center;text-align:center;background-color:#e5e5e5}.login-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.login-card[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background:#fff;width:80%;margin:auto;border-radius:10px;text-align:start;--padding-start: 20px}.login-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;font-weight:700}.row-login-card[_ngcontent-%COMP%]{justify-content:center;align-content:center}.text-cadastrar[_ngcontent-%COMP%]{background:rgba(65,65,77,.05);padding:4px 15px;border-radius:10px}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.Bz.forChild(M)],g.Bz]}),e})();var C=r(5642);let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[d.ez,c.u5,o.Pc,P,C.K]]}),e})()}}]);