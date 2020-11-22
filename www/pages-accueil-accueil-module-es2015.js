(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accueil-accueil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\n    </ion-buttons>\n     <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n<ion-content  no-bounce>\n  <div id=\"body\" >\n    <div id=\"nouvelle-fiche\" tappable (click)=\"nouvelleFiche()\" class=\"section\">  <ion-icon color=\"secondary\" name=\"pencil-sharp\"></ion-icon><b>Nouvelle fiche</b>\n    </div>\n    <div id=\"mes-fiches\" tappable (click)=\"mesFiches()\" class=\"section\"> <ion-icon color=\"secondary\"  name=\"document-text-sharp\"></ion-icon><b>Mes fiches</b>\n    </div>\n    <div id=\"reglages\" tappable (click)=\"reglages()\" class=\"section\"><ion-icon color=\"secondary\"  name=\"settings-sharp\"></ion-icon><b>Réglages</b>\n\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/accueil/accueil-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/accueil/accueil-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccueilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageRoutingModule", function() { return AccueilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accueil.page */ "./src/app/pages/accueil/accueil.page.ts");




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_3__["AccueilPage"]
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/accueil/accueil.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/accueil/accueil.module.ts ***!
  \*************************************************/
/*! exports provided: AccueilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accueil-routing.module */ "./src/app/pages/accueil/accueil-routing.module.ts");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accueil.page */ "./src/app/pages/accueil/accueil.page.ts");







let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccueilPageRoutingModule"]
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_6__["AccueilPage"]]
    })
], AccueilPageModule);



/***/ }),

/***/ "./src/app/pages/accueil/accueil.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/accueil/accueil.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  height: 100%;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n#nouvelle-fiche {\n  width: 100%;\n  border-bottom: 2px solid #B9AA97;\n}\n\n#mes-fiches {\n  width: 50%;\n  border-right: 2px solid #B9AA97;\n}\n\n#reglages {\n  width: 50%;\n}\n\n.section {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-icon {\n  font-size: 50px;\n  margin-bottom: 5%;\n}\n\nspan {\n  padding: 0;\n}\n\nb {\n  color: #B9AA97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keXtcbiAgaGVpZ2h0OjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZGlzcGxheSA6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOndyYXA7XG59XG5cbiNub3V2ZWxsZS1maWNoZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQjlBQTk3O1xufVxuXG4jbWVzLWZpY2hlc3tcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0I5QUE5Nztcbn1cblxuI3JlZ2xhZ2Vze1xuICB3aWR0aDogNTAlO1xufVxuXG4uc2VjdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pY29ue1xuICBmb250LXNpemU6NTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSVcbn1cblxuc3BhbntcbiAgcGFkZGluZzowO1xufVxuXG5iIHtcbiAgY29sb3I6ICNCOUFBOTdcbn1cbiIsIiNib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbiNub3V2ZWxsZS1maWNoZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0I5QUE5Nztcbn1cblxuI21lcy1maWNoZXMge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjQjlBQTk3O1xufVxuXG4jcmVnbGFnZXMge1xuICB3aWR0aDogNTAlO1xufVxuXG4uc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nOiAwO1xufVxuXG5iIHtcbiAgY29sb3I6ICNCOUFBOTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/accueil/accueil.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/accueil/accueil.page.ts ***!
  \***********************************************/
/*! exports provided: AccueilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPage", function() { return AccueilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AccueilPage = class AccueilPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    mesFiches() {
        this.router.navigate(['fiche']);
        // this.menu.swipeEnable(true);
    }
    reglages() {
        this.router.navigate(['reglage']);
        // this.menu.swipeEnable(true);
    }
    nouvelleFiche() {
        this.router.navigate(['nouvelle-fiche']);
        // this.menu.swipeEnable(true);
    }
};
AccueilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccueilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accueil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accueil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accueil.page.scss */ "./src/app/pages/accueil/accueil.page.scss")).default]
    })
], AccueilPage);



/***/ })

}]);
//# sourceMappingURL=pages-accueil-accueil-module-es2015.js.map