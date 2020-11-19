(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accueil-accueil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\r\n    </ion-buttons>\r\n     <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  no-bounce>\r\n  <div id=\"body\" >\r\n    <div id=\"nouvelle-fiche\" tappable (click)=\"nouvelleFiche()\" class=\"section\">  <ion-icon color=\"secondary\" name=\"pencil-sharp\"></ion-icon><b>Nouvelle fiche</b>\r\n    </div>\r\n    <div id=\"mes-fiches\" tappable (click)=\"mesFiches()\" class=\"section\"> <ion-icon color=\"secondary\"  name=\"document-text-sharp\"></ion-icon><b>Mes fiches</b>\r\n    </div>\r\n    <div id=\"reglages\" tappable (click)=\"reglages()\" class=\"section\"><ion-icon color=\"secondary\"  name=\"settings-sharp\"></ion-icon><b>Réglages</b>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  height: 100%;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n#nouvelle-fiche {\n  width: 100%;\n  border-bottom: 2px solid #B9AA97;\n}\n\n#mes-fiches {\n  width: 50%;\n  border-right: 2px solid #B9AA97;\n}\n\n#reglages {\n  width: 50%;\n}\n\n.section {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-icon {\n  font-size: 50px;\n  margin-bottom: 5%;\n}\n\nspan {\n  padding: 0;\n}\n\nb {\n  color: #B9AA97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjdWVpbC9EOlxcUHJvamVjdHNcXHJhbmRvX3BuZXVzL3NyY1xcYXBwXFxwYWdlc1xcYWNjdWVpbFxcYWNjdWVpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2N1ZWlsL2FjY3VlaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHl7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGRpc3BsYXkgOiAtd2Via2l0LWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6d3JhcDtcclxufVxyXG5cclxuI25vdXZlbGxlLWZpY2hle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQjlBQTk3O1xyXG59XHJcblxyXG4jbWVzLWZpY2hlc3tcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNCOUFBOTc7XHJcbn1cclxuXHJcbiNyZWdsYWdlc3tcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgZm9udC1zaXplOjUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSVcclxufVxyXG5cclxuc3BhbntcclxuICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbmIge1xyXG4gIGNvbG9yOiAjQjlBQTk3XHJcbn1cclxuIiwiI2JvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuI25vdXZlbGxlLWZpY2hlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQjlBQTk3O1xufVxuXG4jbWVzLWZpY2hlcyB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNCOUFBOTc7XG59XG5cbiNyZWdsYWdlcyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmIge1xuICBjb2xvcjogI0I5QUE5Nztcbn0iXX0= */");

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