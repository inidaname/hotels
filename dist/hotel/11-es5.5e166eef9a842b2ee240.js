(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{OhTx:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},o=u("9AJC"),r=u("pMnS"),i=u("fNgX"),d=u("SXx0"),a=u("7q28"),c=u("Rk+x"),s=u("G0yt"),p=u("s7LF"),m=u("SVse"),v=u("Kj3r"),g=u("/uUt"),h=u("lJxs"),f=function(){function l(l,n,u){var t=this;this.products=l,this.productService=n,this.api=u,this.searchText=function(l){return l.pipe(Object(v.a)(200),Object(g.a)(),Object(h.a)((function(l){return l.length<2?[]:t.productArray.filter((function(n){return n.name.toLowerCase().indexOf(l.toLowerCase())>-1})).slice(0,10)})))},this.formatter=function(l){return l.name},this.productArray=[],this.cartProd=[],this.productSold=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.api.getProduct().subscribe((function(u){l.productArray=u,n.unsubscribe()}));this.productsList=this.products.products$,this.productService.setTotalPrice(null),this.productService.setProduct(null)},l.prototype.setProduct=function(l,n){var u=this.cartProd.findIndex((function(n){return n.product._id===l._id})),t=this.productSold.findIndex((function(n){return n.productDetail===l._id}));t>=0?this.productSold[t].productQuantity=n:this.productSold.push({productDetail:l._id,productQuantity:n,place:"mainBar"}),u>=0?this.cartProd[u].quantity=n:this.cartProd.push({product:l,quantity:n,place:"mainBar"}),this.productService.setTotalPrice(this.productSold),this.productService.setProduct(this.cartProd)},l.prototype.removeProduct=function(l,n){var u=this.cartProd.findIndex((function(n){return n.product._id===l._id}));this.cartProd.splice(u,1),this.productService.setProduct(this.cartProd)},l}(),b=u("XtJy"),C=u("F6oh"),y=u("nm5K"),P=t["\u0275crt"]({encapsulation:0,styles:[["article[_ngcontent-%COMP%]{width:67vw;min-height:100vh}input[type=number][_ngcontent-%COMP%]{width:62px}"]],data:{}});function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-success btn-sm"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["+"])),(l()(),t["\u0275eld"](2,0,null,null,1,"ngb-highlight",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),o.j,o.e)),t["\u0275did"](3,573440,null,0,s.u,[],{result:[0,"result"],term:[1,"term"]},null)],(function(l,n){l(n,3,0,n.context.result.name,n.context.term)}),null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","ml-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Loading List of Product... "]))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275ppd"](2,3)],null,(function(l,n){var u=n.component,e=t["\u0275unv"](n,1,0,l(n,2,0,t["\u0275nov"](n.parent.parent,0),t["\u0275nov"](n.parent,13).value*(null==u.model?null:u.model.mainBarPrice),"NGN","symbol-narrow"));l(n,1,0,e)}))}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,27,"div",[["class","card col-sm-6 col-md-5 my-3 mx-auto bg-light border border-warning"],["style","width: 18rem;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,16,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,8,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Quantity: "])),(l()(),t["\u0275eld"](9,0,null,null,6,"input",[["class",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.setMe=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,16384,null,0,p.q,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,p.q]),t["\u0275did"](13,671744,[["ctrl",4]],0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275eld"](16,0,null,null,2,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["Price: ",""])),t["\u0275ppd"](18,3),(l()(),t["\u0275eld"](19,0,null,null,3,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Price: "])),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](22,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](23,0,null,null,4,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,1,"button",[["class","btn btn-primary mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.setProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Add to Cart"])),(l()(),t["\u0275eld"](26,0,null,null,1,"button",[["class","btn btn-danger mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.removeProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Remove"]))],(function(l,n){l(n,13,0,n.component.setMe),l(n,22,0,t["\u0275nov"](n,13).value>0)}),(function(l,n){var u=n.component;l(n,3,0,null==u.model?null:u.model.name),l(n,5,0,null==u.model?null:u.model.description),l(n,9,0,t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending);var e=t["\u0275unv"](n,17,0,l(n,18,0,t["\u0275nov"](n.parent,0),null==u.model?null:u.model.mainBarPrice,"NGN","symbol-narrow"));l(n,17,0,e),l(n,24,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1),l(n,26,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1)}))}function T(l){return t["\u0275vid"](0,[t["\u0275pid"](0,m.CurrencyPipe,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{quantity:0}),(l()(),t["\u0275eld"](2,0,null,null,18,"article",[["class","container shadow p-3 rounded-lg m-2 bg-white border border-warning"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","text-center text-capitalize"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Main Bar"])),(l()(),t["\u0275eld"](5,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,12,"div",[["class","form-group form-inline col-12 m-5"]],null,null,null,null,null)),(l()(),t["\u0275and"](0,[["rt",2]],null,0,null,w)),(l()(),t["\u0275ted"](-1,null,[" Search: "])),(l()(),t["\u0275eld"](9,16777216,null,null,6,"input",[["aria-multiline","false"],["autocapitalize","off"],["autocorrect","off"],["class","form-control ml-2"],["name","searchTerm"],["role","combobox"],["type","text"]],[[2,"open",null],[8,"autocomplete",0],[1,"aria-autocomplete",0],[1,"aria-activedescendant",0],[1,"aria-owns",0],[1,"aria-expanded",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keydown"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).handleBlur()&&e),"keydown"===n&&(e=!1!==t["\u0275nov"](l,11).handleKeyDown(u)&&e),"ngModelChange"===n&&(e=!1!==(o.model=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,212992,null,0,s.ab,[t.ElementRef,t.ViewContainerRef,t.Renderer2,t.Injector,t.ComponentFactoryResolver,s.bb,t.NgZone,s.db,m.DOCUMENT,t.NgZone,t.ChangeDetectorRef,t.ApplicationRef],{inputFormatter:[0,"inputFormatter"],ngbTypeahead:[1,"ngbTypeahead"],resultTemplate:[2,"resultTemplate"]},null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,s.ab]),t["\u0275did"](13,671744,null,0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,I)),t["\u0275did"](17,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,m.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](20,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,u.formatter,u.searchText,t["\u0275nov"](n,7)),l(n,13,0,"searchTerm",u.model),l(n,17,0,t["\u0275unv"](n,17,0,t["\u0275nov"](n,18).transform(u.products.loading$))),l(n,20,0,!0===u.some)}),(function(l,n){l(n,9,1,[t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,11).autocomplete,t["\u0275nov"](n,11).showHint?"both":"list",t["\u0275nov"](n,11).activeDescendant,t["\u0275nov"](n,11).isPopupOpen()?t["\u0275nov"](n,11).popupId:null,t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending])}))}var _=t["\u0275ccf"]("ng-component",f,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,T,P)),t["\u0275did"](1,114688,null,0,f,[b.a,C.a,y.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),N=function(){function l(l,n,u){var t=this;this.products=l,this.productService=n,this.api=u,this.searchText=function(l){return l.pipe(Object(v.a)(200),Object(g.a)(),Object(h.a)((function(l){return l.length<2?[]:t.productArray.filter((function(n){return n.mealName.toLowerCase().indexOf(l.toLowerCase())>-1})).slice(0,10)})))},this.formatter=function(l){return l.name},this.productArray=[],this.cartProd=[],this.productSold=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.api.getMeals().subscribe((function(u){l.productArray=u,console.log(u),n.unsubscribe()}));this.productsList=this.products.products$,this.productService.setTotalPrice(""),this.productService.setProduct("")},l.prototype.setProduct=function(l,n){console.log(l);var u=this.cartProd.findIndex((function(n){return n.product._id===l._id})),t=this.productSold.findIndex((function(n){return n.productDetail===l._id}));t>=0?this.productSold[t].productQuantity=n:this.productSold.push({productDetail:l._id,productQuantity:n,place:"restaurant"}),u>=0?this.cartProd[u].quantity=n:this.cartProd.push({product:l,quantity:n,place:"restaurant"}),this.productService.setTotalPrice(this.productSold),this.productService.setProduct(this.cartProd)},l.prototype.removeProduct=function(l,n){var u=this.cartProd.findIndex((function(n){return n.product._id===l._id}));this.cartProd.splice(u,1),this.productService.setProduct(this.cartProd)},l}(),O=u("1YnD"),k=t["\u0275crt"]({encapsulation:0,styles:[["article[_ngcontent-%COMP%]{width:67vw;min-height:100vh}input[type=number][_ngcontent-%COMP%]{width:62px}"]],data:{}});function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-success btn-sm"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["+"])),(l()(),t["\u0275eld"](2,0,null,null,1,"ngb-highlight",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),o.j,o.e)),t["\u0275did"](3,573440,null,0,s.u,[],{result:[0,"result"],term:[1,"term"]},null)],(function(l,n){l(n,3,0,n.context.result.mealName,n.context.term)}),null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","ml-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Loading List of Product... "]))],null,null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275ppd"](2,3)],null,(function(l,n){var u=n.component,e=t["\u0275unv"](n,1,0,l(n,2,0,t["\u0275nov"](n.parent.parent,0),t["\u0275nov"](n.parent,13).value*(null==u.model?null:u.model.mealPrice),"NGN","symbol-narrow"));l(n,1,0,e)}))}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,27,"div",[["class","card col-sm-6 col-md-5 my-3 mx-auto bg-light border border-warning"],["style","width: 18rem;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,16,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,8,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Quantity: "])),(l()(),t["\u0275eld"](9,0,null,null,6,"input",[["class",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.setMe=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,16384,null,0,p.q,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,p.q]),t["\u0275did"](13,671744,[["ctrl",4]],0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275eld"](16,0,null,null,2,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["Price: ",""])),t["\u0275ppd"](18,3),(l()(),t["\u0275eld"](19,0,null,null,3,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Price: "])),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](22,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](23,0,null,null,4,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,1,"button",[["class","btn btn-primary mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.setProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Add to Cart"])),(l()(),t["\u0275eld"](26,0,null,null,1,"button",[["class","btn btn-danger mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.removeProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Remove"]))],(function(l,n){l(n,13,0,n.component.setMe),l(n,22,0,t["\u0275nov"](n,13).value>0)}),(function(l,n){var u=n.component;l(n,3,0,null==u.model?null:u.model.mealName),l(n,5,0,null==u.model?null:u.model.mealDescription),l(n,9,0,t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending);var e=t["\u0275unv"](n,17,0,l(n,18,0,t["\u0275nov"](n.parent,0),null==u.model?null:u.model.mealPrice,"NGN","symbol-narrow"));l(n,17,0,e),l(n,24,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1),l(n,26,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1)}))}function j(l){return t["\u0275vid"](0,[t["\u0275pid"](0,m.CurrencyPipe,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{quantity:0}),(l()(),t["\u0275eld"](2,0,null,null,18,"article",[["class","container shadow p-3 rounded-lg m-2 bg-white border border-warning"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","text-center text-capitalize"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Main Bar"])),(l()(),t["\u0275eld"](5,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,12,"div",[["class","form-group form-inline col-12 m-5"]],null,null,null,null,null)),(l()(),t["\u0275and"](0,[["rt",2]],null,0,null,M)),(l()(),t["\u0275ted"](-1,null,[" Search: "])),(l()(),t["\u0275eld"](9,16777216,null,null,6,"input",[["aria-multiline","false"],["autocapitalize","off"],["autocorrect","off"],["class","form-control ml-2"],["name","searchTerm"],["role","combobox"],["type","text"]],[[2,"open",null],[8,"autocomplete",0],[1,"aria-autocomplete",0],[1,"aria-activedescendant",0],[1,"aria-owns",0],[1,"aria-expanded",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keydown"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).handleBlur()&&e),"keydown"===n&&(e=!1!==t["\u0275nov"](l,11).handleKeyDown(u)&&e),"ngModelChange"===n&&(e=!1!==(o.model=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,212992,null,0,s.ab,[t.ElementRef,t.ViewContainerRef,t.Renderer2,t.Injector,t.ComponentFactoryResolver,s.bb,t.NgZone,s.db,m.DOCUMENT,t.NgZone,t.ChangeDetectorRef,t.ApplicationRef],{inputFormatter:[0,"inputFormatter"],ngbTypeahead:[1,"ngbTypeahead"],resultTemplate:[2,"resultTemplate"]},null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,s.ab]),t["\u0275did"](13,671744,null,0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,S)),t["\u0275did"](17,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,m.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](20,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,u.formatter,u.searchText,t["\u0275nov"](n,7)),l(n,13,0,"searchTerm",u.model),l(n,17,0,t["\u0275unv"](n,17,0,t["\u0275nov"](n,18).transform(u.products.loading$))),l(n,20,0,!0===u.some)}),(function(l,n){l(n,9,1,[t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,11).autocomplete,t["\u0275nov"](n,11).showHint?"both":"list",t["\u0275nov"](n,11).activeDescendant,t["\u0275nov"](n,11).isPopupOpen()?t["\u0275nov"](n,11).popupId:null,t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending])}))}var A=t["\u0275ccf"]("ng-component",N,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,j,k)),t["\u0275did"](1,114688,null,0,N,[O.a,C.a,y.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),E=function(){function l(l,n,u){var t=this;this.products=l,this.productService=n,this.api=u,this.searchText=function(l){return l.pipe(Object(v.a)(200),Object(g.a)(),Object(h.a)((function(l){return l.length<2?[]:t.productArray.filter((function(n){return n.name.toLowerCase().indexOf(l.toLowerCase())>-1})).slice(0,10)})))},this.formatter=function(l){return l.name},this.productArray=[],this.cartProd=[],this.productSold=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.api.getProduct().subscribe((function(u){l.productArray=u,n.unsubscribe()}));this.productsList=this.products.products$,this.productService.setTotalPrice(""),this.productService.setProduct("")},l.prototype.setProduct=function(l,n){var u=this.cartProd.findIndex((function(n){return n.product._id===l._id})),t=this.productSold.findIndex((function(n){return n.productDetail===l._id}));t>=0?this.productSold[t].productQuantity=n:this.productSold.push({productDetail:l._id,productQuantity:n,place:"poolBar"}),u>=0?this.cartProd[u].quantity=n:this.cartProd.push({product:l,quantity:n,place:"poolBar"}),this.productService.setTotalPrice(this.productSold),this.productService.setProduct(this.cartProd)},l.prototype.removeProduct=function(l,n){var u=this.cartProd.findIndex((function(n){return n.product._id===l._id}));this.cartProd.splice(u,1),this.productService.setProduct(this.cartProd)},l}(),V=t["\u0275crt"]({encapsulation:0,styles:[["article[_ngcontent-%COMP%]{width:67vw;min-height:100vh}input[type=number][_ngcontent-%COMP%]{width:62px}"]],data:{}});function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-success btn-sm"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["+"])),(l()(),t["\u0275eld"](2,0,null,null,1,"ngb-highlight",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.some=!0)&&t),t}),o.j,o.e)),t["\u0275did"](3,573440,null,0,s.u,[],{result:[0,"result"],term:[1,"term"]},null)],(function(l,n){l(n,3,0,n.context.result.name,n.context.term)}),null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","ml-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Loading List of Product... "]))],null,null)}function U(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275ppd"](2,3)],null,(function(l,n){var u=n.component,e=t["\u0275unv"](n,1,0,l(n,2,0,t["\u0275nov"](n.parent.parent,0),t["\u0275nov"](n.parent,13).value*(null==u.model?null:u.model.poolBarPrice),"NGN","symbol-narrow"));l(n,1,0,e)}))}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,27,"div",[["class","card col-sm-6 col-md-5 my-3 mx-auto bg-light border border-warning"],["style","width: 18rem;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,16,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,8,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Quantity: "])),(l()(),t["\u0275eld"](9,0,null,null,6,"input",[["class",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t["\u0275nov"](l,11).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.setMe=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,16384,null,0,p.q,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,p.q]),t["\u0275did"](13,671744,[["ctrl",4]],0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275eld"](16,0,null,null,2,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["Price: ",""])),t["\u0275ppd"](18,3),(l()(),t["\u0275eld"](19,0,null,null,3,"li",[["class","list-group-item bg-light"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Price: "])),(l()(),t["\u0275and"](16777216,null,null,1,null,U)),t["\u0275did"](22,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](23,0,null,null,4,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,1,"button",[["class","btn btn-primary mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.setProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Add to Cart"])),(l()(),t["\u0275eld"](26,0,null,null,1,"button",[["class","btn btn-danger mx-2"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.removeProduct(o.model,t["\u0275nov"](l,13).value)&&e),e}),null,null)),(l()(),t["\u0275ted"](-1,null,["Remove"]))],(function(l,n){l(n,13,0,n.component.setMe),l(n,22,0,t["\u0275nov"](n,13).value>0)}),(function(l,n){var u=n.component;l(n,3,0,null==u.model?null:u.model.name),l(n,5,0,null==u.model?null:u.model.description),l(n,9,0,t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending);var e=t["\u0275unv"](n,17,0,l(n,18,0,t["\u0275nov"](n.parent,0),null==u.model?null:u.model.poolBarPrice,"NGN","symbol-narrow"));l(n,17,0,e),l(n,24,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1),l(n,26,0,!t["\u0275nov"](n,13).value||t["\u0275nov"](n,13).value<1)}))}function Q(l){return t["\u0275vid"](0,[t["\u0275pid"](0,m.CurrencyPipe,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{quantity:0}),(l()(),t["\u0275eld"](2,0,null,null,18,"article",[["class","container shadow p-3 rounded-lg m-2 bg-white border border-warning"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","text-center text-capitalize"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Main Bar"])),(l()(),t["\u0275eld"](5,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,12,"div",[["class","form-group form-inline col-12 m-5"]],null,null,null,null,null)),(l()(),t["\u0275and"](0,[["rt",2]],null,0,null,q)),(l()(),t["\u0275ted"](-1,null,[" Search: "])),(l()(),t["\u0275eld"](9,16777216,null,null,6,"input",[["aria-multiline","false"],["autocapitalize","off"],["autocorrect","off"],["class","form-control ml-2"],["name","searchTerm"],["role","combobox"],["type","text"]],[[2,"open",null],[8,"autocomplete",0],[1,"aria-autocomplete",0],[1,"aria-activedescendant",0],[1,"aria-owns",0],[1,"aria-expanded",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keydown"]],(function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,10)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,10).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,10)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,11).handleBlur()&&e),"keydown"===n&&(e=!1!==t["\u0275nov"](l,11).handleKeyDown(u)&&e),"ngModelChange"===n&&(e=!1!==(o.model=u)&&e),e}),null,null)),t["\u0275did"](10,16384,null,0,p.d,[t.Renderer2,t.ElementRef,[2,p.a]],null,null),t["\u0275did"](11,212992,null,0,s.ab,[t.ElementRef,t.ViewContainerRef,t.Renderer2,t.Injector,t.ComponentFactoryResolver,s.bb,t.NgZone,s.db,m.DOCUMENT,t.NgZone,t.ChangeDetectorRef,t.ApplicationRef],{inputFormatter:[0,"inputFormatter"],ngbTypeahead:[1,"ngbTypeahead"],resultTemplate:[2,"resultTemplate"]},null),t["\u0275prd"](1024,null,p.j,(function(l,n){return[l,n]}),[p.d,s.ab]),t["\u0275did"](13,671744,null,0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,p.k,null,[p.o]),t["\u0275did"](15,16384,null,0,p.l,[[4,p.k]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,F)),t["\u0275did"](17,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,m.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,1,null,B)),t["\u0275did"](20,16384,null,0,m.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,u.formatter,u.searchText,t["\u0275nov"](n,7)),l(n,13,0,"searchTerm",u.model),l(n,17,0,t["\u0275unv"](n,17,0,t["\u0275nov"](n,18).transform(u.products.loading$))),l(n,20,0,!0===u.some)}),(function(l,n){l(n,9,1,[t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,11).autocomplete,t["\u0275nov"](n,11).showHint?"both":"list",t["\u0275nov"](n,11).activeDescendant,t["\u0275nov"](n,11).isPopupOpen()?t["\u0275nov"](n,11).popupId:null,t["\u0275nov"](n,11).isPopupOpen(),t["\u0275nov"](n,15).ngClassUntouched,t["\u0275nov"](n,15).ngClassTouched,t["\u0275nov"](n,15).ngClassPristine,t["\u0275nov"](n,15).ngClassDirty,t["\u0275nov"](n,15).ngClassValid,t["\u0275nov"](n,15).ngClassInvalid,t["\u0275nov"](n,15).ngClassPending])}))}var z=t["\u0275ccf"]("app-product-details",E,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-product-details",[],null,null,null,Q,V)),t["\u0275did"](1,114688,null,0,E,[b.a,C.a,y.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),G=u("CyeD"),Y=u("6QML"),Z=u("O/bx"),K=u("iInd"),J=u("7g+E"),$=u("Nv++"),H=u("pYyI"),X=u("PCNd"),W=u("918x"),ll=function(){},nl=u("GU7I");u.d(n,"PointOfSalesModuleNgFactory",(function(){return ul}));var ul=t["\u0275cmf"](e,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,o.b,o.p,o.q,o.m,o.n,o.o,r.a,i.b,i.a,d.a,a.a,c.a,_,A,z,G.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[t.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,p.w,p.w,[]),t["\u0275mpd"](4608,p.e,p.e,[]),t["\u0275mpd"](4608,s.w,s.w,[t.ComponentFactoryResolver,t.Injector,s.pb,s.x]),t["\u0275mpd"](5120,Y.Cloudinary,Z.createCloudinary,[Z.CLOUDINARY_LIB,Z.CLOUDINARY_CONFIGURATION]),t["\u0275mpd"](4608,m.DecimalPipe,m.DecimalPipe,[t.LOCALE_ID]),t["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),t["\u0275mpd"](1073742336,p.v,p.v,[]),t["\u0275mpd"](1073742336,p.h,p.h,[]),t["\u0275mpd"](1073742336,p.s,p.s,[]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,s.g,s.g,[]),t["\u0275mpd"](1073742336,s.h,s.h,[]),t["\u0275mpd"](1073742336,s.l,s.l,[]),t["\u0275mpd"](1073742336,s.m,s.m,[]),t["\u0275mpd"](1073742336,s.s,s.s,[]),t["\u0275mpd"](1073742336,s.t,s.t,[]),t["\u0275mpd"](1073742336,s.y,s.y,[]),t["\u0275mpd"](1073742336,s.C,s.C,[]),t["\u0275mpd"](1073742336,s.H,s.H,[]),t["\u0275mpd"](1073742336,s.K,s.K,[]),t["\u0275mpd"](1073742336,s.N,s.N,[]),t["\u0275mpd"](1073742336,s.Q,s.Q,[]),t["\u0275mpd"](1073742336,s.V,s.V,[]),t["\u0275mpd"](1073742336,s.Y,s.Y,[]),t["\u0275mpd"](1073742336,s.Z,s.Z,[]),t["\u0275mpd"](1073742336,s.cb,s.cb,[]),t["\u0275mpd"](1073742336,s.z,s.z,[]),t["\u0275mpd"](1073742336,K.p,K.p,[[2,K.u],[2,K.l]]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,$.j,$.j,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,Z.CloudinaryModule,Z.CloudinaryModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,ll,ll,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](256,Z.CLOUDINARY_LIB,{Cloudinary:nl.Cloudinary},[]),t["\u0275mpd"](256,Z.CLOUDINARY_CONFIGURATION,{cloud_name:"ddn9xvzsb",upload_preset:"ml_default"},[]),t["\u0275mpd"](1024,K.j,(function(){return[[{path:"",pathMatch:"full",redirectTo:"vipbar"},{path:"vipbar",component:f},{path:"restaurant",component:N},{path:"poolbar",component:E},{path:"**",component:W.a}]]}),[])])}))}}]);