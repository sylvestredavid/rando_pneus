(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-fiche-detail-fiche-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-fiche/detail-fiche.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-fiche/detail-fiche.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngIf=\"fiche\" id=\"form\">\r\n\r\n\r\n    <ion-list mode=\"ios\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly type=\"text\" placeholder=\"Heure d'arrivée chez le client\" value=\"{{fiche.arrive | date: 'dd/MM/yy HH:mm'}}\"></ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Heure de départ\" value=\"{{fiche.depart | date: 'dd/MM/yy HH:mm'}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly type=\"text\" placeholder=\"Temps passé\" value=\"{{fiche.temps}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Position de la roue\" value=\"{{fiche.positionRoue}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"solo\" type=\"text\" placeholder=\"Nom client\" value=\"{{fiche.nomClient}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"solo\" type=\"text\" placeholder=\"Nom et adresse\" value=\"{{fiche.nomAdresse}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"trio\" type=\"text\" placeholder=\"Dimension\" value=\"{{fiche.dimension}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"trio\" type=\"text\" placeholder=\"Dimension\" value=\"{{fiche.dimensionLibre}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"trio\" type=\"text\" placeholder=\"NVH\" value=\"{{fiche.nvh}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"trio\" type=\"text\" placeholder=\"Kilomètres compteur\" value=\"{{fiche.kmCompteur}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <ion-row class=\"ion-justify-content-between\" *ngIf=\"fiche.demontage\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Démontage/remontage\"></ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.demontage}}\"></ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-between\" *ngIf=\"fiche.depose\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" type=\"text\" class=\"readonly\" readonly value=\"Dépose/repose\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.depose}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-around\" *ngIf=\"fiche.reparation\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Réparation/Tubeless\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.reparation}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-around\" *ngIf=\"fiche.chaair\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Réparation CH.AAIR\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.chaair}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-around\" *ngIf=\"fiche.retaillage\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"Retaillage\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.retaillage}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n          <ion-row class=\"ion-justify-content-between\" *ngIf=\"fiche.emplatre?.quantite\">\r\n            <ion-col>\r\n              <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n                <ion-input mode=\"wp\" class=\"readonly\" type=\"text\" value=\"{{fiche.emplatre.nom}}\" readonly></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n                <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.emplatre.quantite}}\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-between\" *ngIf=\"fiche.forfait\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Forfait véhiculé\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fiche.forfait}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-between\" *ngFor=\"let fourni of fiche.fournitures\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"{{fourni.nom}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"ios\" readonly class=\"right\" type=\"text\" placeholder=\"Quantité\" value=\"{{fourni.quantite}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-textarea class=\"textarea\" readonly placeholder=\"Observation\" mode=\"wp\" value=\"{{fiche.observation}}\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" class=\"solo\" readonly type=\"text\" placeholder=\"N° pneu monté\" value=\"{{fiche.numeroPneu}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" type=\"text\" readonly placeholder=\"Contrôle pression\" value=\"{{fiche.pression}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\">\r\n              <ion-input mode=\"wp\" class=\"right\" readonly type=\"text\" placeholder=\"Contrôle serrage\" value=\"{{fiche.serrage}}\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item mode=\"ios\" lines=\"none\" class=\"margin1_5\">\r\n          Prière de resserer les roues après 25Km, 100Km et ensuite périodiquement\r\n        </ion-item>\r\n        <ion-item mode=\"ios\" lines=\"none\">\r\n          <div id=\"bloc-bottom\">\r\n\r\n            <div>Signature responsable :\r\n              <br>\r\n              <br>\r\n              <img src=\"{{fiche.signatureResponsable}}\" />\r\n            </div>\r\n            <div>Signature client :\r\n              <br>\r\n              <br>\r\n              <img src=\"{{fiche.signatureClient}}\" />\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item mode=\"ios\" lines=\"none\">\r\n          <ion-button mode=\"ios\" size=\"large\" type=\"submit\" (click)=\"send($event, fiche)\">Envoyer\r\n          </ion-button>\r\n\r\n\r\n        </ion-item>\r\n\r\n      </ion-grid>\r\n    </ion-list>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/detail-fiche/detail-fiche-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/detail-fiche/detail-fiche-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailFichePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFichePageRoutingModule", function() { return DetailFichePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_fiche_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-fiche.page */ "./src/app/pages/detail-fiche/detail-fiche.page.ts");




const routes = [
    {
        path: '',
        component: _detail_fiche_page__WEBPACK_IMPORTED_MODULE_3__["DetailFichePage"]
    }
];
let DetailFichePageRoutingModule = class DetailFichePageRoutingModule {
};
DetailFichePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailFichePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detail-fiche/detail-fiche.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/detail-fiche/detail-fiche.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailFichePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFichePageModule", function() { return DetailFichePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-fiche-routing.module */ "./src/app/pages/detail-fiche/detail-fiche-routing.module.ts");
/* harmony import */ var _detail_fiche_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-fiche.page */ "./src/app/pages/detail-fiche/detail-fiche.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let DetailFichePageModule = class DetailFichePageModule {
};
DetailFichePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailFichePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detail_fiche_page__WEBPACK_IMPORTED_MODULE_6__["DetailFichePage"]]
    })
], DetailFichePageModule);



/***/ }),

/***/ "./src/app/pages/detail-fiche/detail-fiche.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/detail-fiche/detail-fiche.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\n  padding: 5px 44px 5px 44px;\n}\n\n.item-wp {\n  padding-left: 0px;\n  margin-top: 15px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.datetime-wp {\n  padding: 0 !important;\n}\n\n.datetime-wp .datetime-text {\n  padding: 8px;\n  border: 1px solid #B9AA97;\n}\n\n.content-wp hr {\n  background-color: #b9aa97;\n  opacity: 0.8;\n}\n\nhr {\n  height: 2px;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 8px;\n}\n\n.text-input-wp {\n  margin: 0px;\n  border: 1px solid #B9AA97;\n  height: 47px;\n  width: 297px;\n}\n\n.trio .text-input-wp {\n  width: 100%;\n}\n\n.solo .text-input-wp {\n  width: 100%;\n}\n\n.right .text-input-wp {\n  float: right;\n}\n\n.readonly input {\n  color: white;\n  background-color: #B9AA97;\n}\n\ntextarea.text-input-wp {\n  width: 100%;\n  height: 120px;\n}\n\n#bloc-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  width: 100%;\n}\n\n#bloc-bottom div {\n  width: 50%;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.datetime-text {\n  height: 47px;\n  width: 297px;\n}\n\nbutton.item-cover {\n  position: absolute;\n  width: 297px;\n  height: 47px;\n  top: inherit;\n  left: inherit;\n}\n\n.selector {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\n.selectorTrio {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\nion-select {\n  max-width: 100%;\n}\n\n.selector .select-placeholder {\n  color: white !important;\n}\n\n.input {\n  border: 1px solid #B9AA97;\n  width: 90%;\n  margin-bottom: 1.5vh;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.divider {\n  border-bottom: 1px solid #B9AA97;\n  margin-bottom: 1.5vh;\n}\n\n.add_icon {\n  font-size: 48px !important;\n  margin-bottom: 1.5vh;\n}\n\n.margin1_5 {\n  margin-bottom: 1.5vh;\n}\n\n.item-datetime ion-label {\n  flex: initial;\n  max-width: 100%;\n  margin: -3.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlsLWZpY2hlL0Q6XFxQcm9qZWN0c1xccmFuZG9fcG5ldXMvc3JjXFxhcHBcXHBhZ2VzXFxkZXRhaWwtZmljaGVcXGRldGFpbC1maWNoZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbC1maWNoZS9kZXRhaWwtZmljaGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBRUUsV0FBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUUY7O0FEUEU7RUFDRSxVQUFBO0FDU0o7O0FETkE7RUFDRSx1QkFBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1FGOztBREpBO0VBTUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FETUE7RUFDRSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0FDSEY7O0FETUE7RUFHRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1maWNoZS9kZXRhaWwtZmljaGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XHJcbiAgcGFkZGluZzogNXB4IDQ0cHggNXB4IDQ0cHg7XHJcbn1cclxuXHJcbi5pdGVtLXdwe1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLml0ZW0taW5uZXJ7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5kYXRldGltZS13cCB7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XHJcbiAgcGFkZGluZzo4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxufVxyXG4uY29udGVudC13cCBoclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgIDE3MCwgMTUxKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6MnB4O1xyXG59XHJcbi5sYWJlbC1pb3Mge1xyXG4gIG1hcmdpbjogMTFweCA4cHggMTFweCA4cHg7XHJcbn1cclxuLnRleHQtaW5wdXQtd3Age1xyXG4gIG1hcmdpbjogIDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xyXG4gIGhlaWdodDogNDdweDtcclxuICB3aWR0aDogMjk3cHg7XHJcbn1cclxuLnRyaW8gLnRleHQtaW5wdXQtd3Age1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc29sbyAudGV4dC1pbnB1dC13cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJpZ2h0IC50ZXh0LWlucHV0LXdwIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJlYWRvbmx5IGlucHV0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5NztcclxufVxyXG50ZXh0YXJlYS50ZXh0LWlucHV0LXdwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbiNibG9jLWJvdHRvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDUwJVxyXG4gIH1cclxufVxyXG5jYW52YXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHdpZHRoOiAyOTdweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5pdGVtLWNvdmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjk3cHg7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHRvcDppbmhlcml0O1xyXG4gIGxlZnQ6aW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RvcntcclxuICAvL2NvbG9yOndoaXRlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5NztcclxuICAvL2JvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgLy9oZWlnaHQ6IDQ3cHg7XHJcbiAgLy93aWR0aDogMjk3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIC8vIG1hcmdpbjogMTNweCA4cHggMTNweCA4cHg7IFBFVVQgRVRSRSBBIFJFTUVUVFJFXHJcbn1cclxuLnNlbGVjdG9yVHJpb3tcclxuICB3aWR0aDogIDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxuICAvL2hlaWdodDogNDdweDtcclxuICAvL2Rpc3BsYXk6ZmxleDtcclxuICAvL2Rpc3BsYXkgOiAtd2Via2l0LWZsZXhcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0b3IgLnNlbGVjdC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLmZ1bGx3aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0I5QUE5NztcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLmFkZF9pY29uIHtcclxuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLm1hcmdpbjFfNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41dmhcclxufVxyXG5cclxuLml0ZW0tZGF0ZXRpbWUgaW9uLWxhYmVsIHtcclxuICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XHJcbiAgLW1zLWZsZXg6IGluaXRpYWw7XHJcbiAgZmxleDogaW5pdGlhbDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAtMy41JVxyXG59XHJcbiIsIi5ncmlkIHtcbiAgcGFkZGluZzogNXB4IDQ0cHggNXB4IDQ0cHg7XG59XG5cbi5pdGVtLXdwIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXdwIC5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xufVxuXG4uY29udGVudC13cCBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWFhOTc7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCA4cHggMTFweCA4cHg7XG59XG5cbi50ZXh0LWlucHV0LXdwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDI5N3B4O1xufVxuXG4udHJpbyAudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc29sbyAudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmlnaHQgLnRleHQtaW5wdXQtd3Age1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZWFkb25seSBpbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5Nztcbn1cblxudGV4dGFyZWEudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4jYmxvYy1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2Jsb2MtYm90dG9tIGRpdiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDI5N3B4O1xufVxuXG5idXR0b24uaXRlbS1jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI5N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRvcDogaW5oZXJpdDtcbiAgbGVmdDogaW5oZXJpdDtcbn1cblxuLnNlbGVjdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RvclRyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNlbGVjdG9yIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5mdWxsd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0I5QUE5NztcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5hZGRfaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuLm1hcmdpbjFfNSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uaXRlbS1kYXRldGltZSBpb24tbGFiZWwge1xuICAtd2Via2l0LWZsZXg6IGluaXRpYWw7XG4gIC1tcy1mbGV4OiBpbml0aWFsO1xuICBmbGV4OiBpbml0aWFsO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogLTMuNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/detail-fiche/detail-fiche.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-fiche/detail-fiche.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailFichePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFichePage", function() { return DetailFichePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_fiches_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fiches.service */ "./src/app/services/fiches.service.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/fiche-firebase.service */ "./src/app/services/fiche-firebase.service.ts");






let DetailFichePage = class DetailFichePage {
    constructor(router, route, ficheService, events, ficheFirebaseService) {
        this.router = router;
        this.route = route;
        this.ficheService = ficheService;
        this.events = events;
        this.ficheFirebaseService = ficheFirebaseService;
        this.id = this.route.snapshot.params.id;
        events.subscribe('ficheEnvoyed', () => {
            this.router.navigate(['fiche']);
        });
    }
    ngOnInit() {
        this.getFiche(this.id);
    }
    getFiche(id) {
        this.subscription = this.ficheFirebaseService.fiches$.subscribe(fiches => {
            this.fiche = fiches.find(f => f.id === id);
            this.fiche.vue = true;
            this.fiche.modifieParBureau = false;
            this.ficheFirebaseService.updateFiche(this.fiche);
        });
    }
    send(event, fiche) {
        event.stopPropagation();
        this.ficheService.sendFiche(fiche);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
DetailFichePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_fiches_service__WEBPACK_IMPORTED_MODULE_3__["FicheService"] },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FicheFirebaseService"] }
];
DetailFichePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-fiche',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-fiche.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-fiche/detail-fiche.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-fiche.page.scss */ "./src/app/pages/detail-fiche/detail-fiche.page.scss")).default]
    })
], DetailFichePage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-fiche-detail-fiche-module-es2015.js.map