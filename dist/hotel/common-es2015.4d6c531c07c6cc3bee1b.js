(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1YnD":function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var a=s("2Vo4"),i=s("XNiG"),r=s("LRne"),n=s("vkgz"),h=s("Kj3r"),o=s("eIep"),c=s("3E0/"),l=s("8YGR"),u=s("8Y7J"),b=s("SVse"),g=s("nm5K");let p=(()=>{class e{constructor(e,t){this.pipe=e,this.api=t,this._loading$=new a.a(!0),this._search$=new i.a,this.rooms$=new a.a([]),this._total$=new a.a(0),this._state={page:1,pageSize:10,searchTerm:"",sortColumn:"",sortDirection:""},this.meals=new a.a([]);const s=this.api.getMeals().subscribe(e=>{this.meals.next(e),s.unsubscribe()});this._search$.pipe(Object(n.a)(()=>this._loading$.next(!0)),Object(h.a)(200),Object(o.a)(()=>this._search()),Object(c.a)(200),Object(n.a)(()=>this._loading$.next(!1))).subscribe(e=>{this.rooms$.next(e.content),this._total$.next(e.total)}),this._search$.next()}get mealsGet$(){return this.meals.asObservable()}get products$(){return this.rooms$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}set page(e){this._set({page:e})}set pageSize(e){this._set({pageSize:e})}set searchTerm(e){this._set({searchTerm:e})}set sortColumn(e){this._set({sortColumn:e})}set sortDirection(e){this._set({sortDirection:e})}_set(e){Object.assign(this._state,e),this._search$.next()}updateProd(){const e=this.api.getMeals().subscribe(t=>{this.meals.next(t),this._search$.next(),e.unsubscribe()});return e}_search(){const{sortColumn:e,sortDirection:t,pageSize:s,page:a,searchTerm:i}=this._state;let n=Object(l.b)(this.meals.value,e,t);this.meals.value.length<=0&&this._search$.next();const h=(n=n.filter(e=>Object(l.a)(e,i,this.pipe))).length;return n=n.slice((a-1)*s,(a-1)*s+s),Object(r.a)({content:n,total:h})}}return e.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new e(u["\u0275\u0275inject"](b.DecimalPipe),u["\u0275\u0275inject"](g.a))},token:e,providedIn:"root"}),e})()}}]);