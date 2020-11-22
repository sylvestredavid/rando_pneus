(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-a-propos-a-propos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/a-propos/a-propos.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/a-propos/a-propos.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button class=\"menu_button\"></ion-menu-button>\n        </ion-buttons>\n        <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <p>Version 1.5</p>\n    <p>Rando-tech</p>\n    <p>Conception : Wave’s Agency</p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/a-propos/a-propos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AProposPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AProposPageRoutingModule", function() { return AProposPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _a_propos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./a-propos.page */ "./src/app/pages/a-propos/a-propos.page.ts");




const routes = [
    {
        path: '',
        component: _a_propos_page__WEBPACK_IMPORTED_MODULE_3__["AProposPage"]
    }
];
let AProposPageRoutingModule = class AProposPageRoutingModule {
};
AProposPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AProposPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/a-propos/a-propos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.module.ts ***!
  \***************************************************/
/*! exports provided: AProposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AProposPageModule", function() { return AProposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _a_propos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./a-propos-routing.module */ "./src/app/pages/a-propos/a-propos-routing.module.ts");
/* harmony import */ var _a_propos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./a-propos.page */ "./src/app/pages/a-propos/a-propos.page.ts");







let AProposPageModule = class AProposPageModule {
};
AProposPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _a_propos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AProposPageRoutingModule"]
        ],
        declarations: [_a_propos_page__WEBPACK_IMPORTED_MODULE_6__["AProposPage"]]
    })
], AProposPageModule);



/***/ }),

/***/ "./src/app/pages/a-propos/a-propos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  color: #999999;\n  margin: 80px 0 0 80px;\n}\n\np {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvYS1wcm9wb3MvYS1wcm9wb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hLXByb3Bvcy9hLXByb3Bvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDQztFQUNFLG1CQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hLXByb3Bvcy9hLXByb3Bvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbWFyZ2luOiA4MHB4IDAgMCA4MHB4O1xufVxuIHB7XG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuIH1cbiIsImRpdiB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW46IDgwcHggMCAwIDgwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/a-propos/a-propos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/a-propos/a-propos.page.ts ***!
  \*************************************************/
/*! exports provided: AProposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AProposPage", function() { return AProposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AProposPage = class AProposPage {
    constructor() { }
    ngOnInit() {
    }
};
AProposPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-a-propos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./a-propos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/a-propos/a-propos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./a-propos.page.scss */ "./src/app/pages/a-propos/a-propos.page.scss")).default]
    })
], AProposPage);



/***/ })

}]);
//# sourceMappingURL=pages-a-propos-a-propos-module-es2015.js.map