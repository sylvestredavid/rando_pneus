function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-fiche-edit-fiche-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-fiche/edit-fiche.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-fiche/edit-fiche.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditFicheEditFichePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\n    </ion-buttons>\n    <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"ficheForm\" *ngIf=\"ficheForm\" (ngSubmit)=\"save()\" id=\"form\">\n    <p>note: {{fiche.note}}</p>\n\n\n    <ion-list mode=\"ios\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('arrive').value ? 'green_input' : 'orange_input'\">\n              <ion-datetime tappable mode=\"ios\" (ionChange)=\"calculTime()\" formControlName=\"arrive\"\n                            placeholder=\"Heure d'arrivée chez le client\"\n                            cancelText=\"Annuler\" doneText=\"Valider\" displayFormat=\"HH:mm\"\n                            pickerFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depart').value ? 'green_input' : 'orange_input'\">\n              <ion-datetime mode=\"ios\" formControlName=\"depart\" (ionChange)=\"calculTime()\"\n                            placeholder=\"Heure de départ\" cancelText=\"Annuler\"\n                            doneText=\"Valider\" displayFormat=\"HH:mm\" pickerFormat=\"HH:mm\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('temps').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"temps\" type=\"text\"\n                         placeholder=\"Temps passé\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('positionRoue').value ? 'green_input' : 'orange_input'\">\n              <ion-input mode=\"ios\" formControlName=\"positionRoue\" class=\"right\" type=\"text\"\n                         placeholder=\"Position de la roue\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomClient').value ? 'green_input' : 'orange_input'\">\n              <ion-input mode=\"ios\" formControlName=\"nomClient\" class=\"solo\" type=\"text\"\n                         placeholder=\"Nom client\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"divider\"></div>\n\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomAdresse').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"nomAdresse\" class=\"solo\" type=\"text\"\n                         placeholder=\"Nom et adresse\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimension').value ? 'green_input' : ''\">\n\n              <ion-select class=\"selectorTrio  trio\" formControlName=\"dimension\" placeholder=\"Dimension\">\n                <ion-select-option value=\"0\">Aucune</ion-select-option>\n                <ion-select-option value=\"12 x 22.5 AM09 HANKOOK\">pneu 12 x 22.5 AM09 HANKOOK\n                </ion-select-option>\n                <ion-select-option value=\"13 x 22.5 AM09 HANKOOK\">pneu 13 x 22.5 AM09 HANKOOK\n                </ion-select-option>\n                <ion-select-option value=\"12 x 22.5 DM09 HANKOOK\">pneu 12 x 22.5 DM09 HANKOOK\n                </ion-select-option>\n                <ion-select-option value=\"13 x 22.5 DM09 HANKOOK\">pneu 13 x 22.5 DM09 HANKOOK\n                </ion-select-option>\n                <ion-select-option value=\"12 x 22.5 RECHAPE\">pneu 12 x 22.5 RECHAPE</ion-select-option>\n                <ion-select-option value=\"10 x 16.5 NHS\">pneu 10 x 16.5 NHS</ion-select-option>\n                <ion-select-option value=\"385/65 x 22.5 TM15 HANKOOK\">pneu 385/65 x 22.5 TM15 HANKOOK\n                </ion-select-option>\n                <ion-select-option value=\"385/65 x 22.5 HT3 CONTINENTAL\">pneu 385/65 x 22.5 HT3\n                  CONTINENTAL\n                </ion-select-option>\n                <ion-select-option value=\"315/80 x 22.5 HS3 CONTINENTAL\">pneu 315/80 x 22.5 HS3\n                  CONTINENTAL\n                </ion-select-option>\n                <ion-select-option value=\"315/70 x 22.5 HS3 CONTINENTAL\">pneu 315/70 x 22.5 HS3\n                  CONTINENTAL\n                </ion-select-option>\n                <ion-select-option value=\"155 x 13 KUHMO\">pneu 155 x 13 KUHMO</ion-select-option>\n                <ion-select-option value=\"195/75 x 16 RA18 HANKOOK\">pneu 195/75 x 16 RA18 HANKOOK\n                </ion-select-option>\n\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimensionLibre').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"dimensionLibre\" class=\"trio\" type=\"text\"\n                         placeholder=\"Dimension\"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nvh').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"nvh\" class=\"trio\" type=\"text\"\n                         placeholder=\"NVH\"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('kmCompteur').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"kmCompteur\" class=\"trio\" type=\"text\"\n                         placeholder=\"Kilomètres compteur\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"divider\"></div>\n\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                         value=\"Démontage/remontage\"></ion-input>\n\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"demontage\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\"></ion-input>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" type=\"text\" class=\"readonly\" readonly value=\"Dépose/repose\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"depose\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                         value=\"Réparation/Tubeless\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"reparation\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                         value=\"Réparation CH.AAIR\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"chaair\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"Retaillage\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"retaillage\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div formGroupName=\"emplatre\">\n          <ion-row class=\"ion-justify-content-between\">\n            <ion-col>\n              <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('nom').value ? 'label_plein' : ''\">\n                <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Emplâtre\">\n                  <ion-select-option value=\"Emplâtre 110 TL\">Emplâtre 110 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 120 TL\">Emplâtre 120 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 125 TL\">Emplâtre 125 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 135 TL\">Emplâtre 135 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 140 TL\">Emplâtre 140 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 142 TL\">Emplâtre 142 TL</ion-select-option>\n                  <ion-select-option value=\"Emplâtre 145 TL\">Emplâtre 145 TL</ion-select-option>\n                  <!--  <ion-select-option value=\"G159\">Emplâtre 146 TL</ion-select-option>\n                  <ion-select-option value=\"G169\">Emplâtre PN02L</ion-select-option>\n                  <ion-select-option value=\"G170\">Emplâtre PN03</ion-select-option>\n                  <ion-select-option value=\"G171\">Emplâtre PN04</ion-select-option>\n                  <ion-select-option value=\"G172\">Emplâtre PN05</ion-select-option>\n                  <ion-select-option value=\"G173\">Emplâtre PN06</ion-select-option> -->\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('quantite').value ? 'green_input' : ''\">\n                <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\n                           placeholder=\"Quantité\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'label_plein' : ''\">\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                         value=\"Forfait véhiculé\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" formControlName=\"forfait\" class=\"right\" type=\"text\"\n                         placeholder=\"Quantité\" value=\"1\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <div formArrayName=\"fournitures\">\n          <ng-container *ngFor=\"let fourniture of ficheForm.get('fournitures')['controls']; let i=index\"\n                        formGroupName=\"{{i}}\">\n\n            <ion-row class=\"ion-justify-content-between\">\n              <ion-col>\n\n                <ion-item-sliding>\n                  <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('nom').value ? 'label_plein' : ''\">\n                    <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Fourniture\">\n                      <ion-select-option *ngFor=\"let fourni of fournituresList\"\n                                         [value]=\"fourni\">{{fourni}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-item-options side=\"start\">\n                    <ion-button color=\"danger\" (click)=\"deleteFourni(i)\">\n                      <ion-icon name=\"trash\"></ion-icon>\n                      Supprimer\n                    </ion-button>\n                  </ion-item-options>\n                </ion-item-sliding>\n              </ion-col>\n              <ion-col>\n                <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('quantite').value ? 'green_input' : ''\">\n                  <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\n                             placeholder=\"Quantité\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n        </div>\n\n        <ion-icon class=\"add_icon\" name=\"add-circle-outline\" tappable (click)=\"addFourniture()\" color=\"secondary\"\n                  style=\"font-size:5rem;\"></ion-icon>\n\n\n        <div class=\"divider\"></div>\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('observation').value ? 'green_input' : ''\">\n              <ion-textarea class=\"textarea\" formControlName=\"observation\" placeholder=\"Observation\"\n                            mode=\"ios\">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('numeroPneu').value ? 'green_input' : ''\">\n              <!--<ion-label stacked>N° Pneu monté</ion-label>-->\n              <ion-input mode=\"ios\" formControlName=\"numeroPneu\" class=\"solo\" type=\"text\"\n                         placeholder=\"N° pneu monté\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-between\">\n          <ion-col>\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('pression').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" type=\"text\" formControlName=\"pression\"\n                         placeholder=\"Contrôle pression\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('serrage').value ? 'green_input' : ''\">\n              <ion-input mode=\"ios\" type=\"text\" formControlName=\"serrage\" class=\"right\"\n                         placeholder=\"Contrôle serrage\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-item mode=\"ios\" lines=\"none\" class=\"margin1_5\">\n          Prière de resserer les roues après 25Km, 100Km et ensuite périodiquement\n        </ion-item>\n        <ion-item mode=\"ios\" lines=\"none\" class=\"photos_container\">\n          <div class=\"w_30\">\n            <ion-button mode=\"ios\" size=\"full\" (click)=\"uploadImage()\">\n              <ion-icon name=\"camera-sharp\" class=\"camera\"></ion-icon>\n              Ajouter une photo\n            </ion-button>\n          </div>\n          <div class=\"photos\">\n            <div *ngFor=\"let photo of photos; let i = index\">\n              <p>{{photo.nom}}</p>\n              <ion-icon name=\"trash-sharp\" class=\"icon_trash_photo\" color=\"danger\" tappable\n                        (click)=\"deletePhoto(i)\"></ion-icon>\n            </div>\n          </div>\n        </ion-item>\n        <ion-item mode=\"ios\" lines=\"none\">\n          <div id=\"bloc-bottom\">\n\n            <div>Signature responsable :\n              <br>\n              <br>\n              <app-signature-responsable #signatureResponsable>\n              </app-signature-responsable>\n              <br>\n\n              <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('responsable')\">Reset\n              </ion-button>\n            </div>\n            <div>Signature client :\n              <br>\n              <br>\n              <app-signature-client #signatureClient>\n              </app-signature-client>\n              <br>\n              <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('client')\">Reset\n              </ion-button>\n            </div>\n          </div>\n        </ion-item>\n        <ion-item mode=\"ios\" lines=\"none\">\n          <ion-button mode=\"ios\" size=\"large\" type=\"submit\"\n                      [disabled]=\"!ficheForm.valid\">{{autosend ? \"Envoyer\" : \"Enregistrer\"}}\n          </ion-button>\n\n\n        </ion-item>\n\n      </ion-grid>\n    </ion-list>\n  </form>\n  <div *ngIf=\"msgErreur\">{{msgErreur}}</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/edit-fiche/edit-fiche-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/edit-fiche/edit-fiche-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditFichePageRoutingModule */

  /***/
  function srcAppPagesEditFicheEditFicheRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFichePageRoutingModule", function () {
      return EditFichePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_fiche_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-fiche.page */
    "./src/app/pages/edit-fiche/edit-fiche.page.ts");

    var routes = [{
      path: '',
      component: _edit_fiche_page__WEBPACK_IMPORTED_MODULE_3__["EditFichePage"]
    }];

    var EditFichePageRoutingModule = function EditFichePageRoutingModule() {
      _classCallCheck(this, EditFichePageRoutingModule);
    };

    EditFichePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditFichePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-fiche/edit-fiche.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-fiche/edit-fiche.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditFichePageModule */

  /***/
  function srcAppPagesEditFicheEditFicheModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFichePageModule", function () {
      return EditFichePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-fiche-routing.module */
    "./src/app/pages/edit-fiche/edit-fiche-routing.module.ts");
    /* harmony import */


    var _edit_fiche_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-fiche.page */
    "./src/app/pages/edit-fiche/edit-fiche.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var EditFichePageModule = function EditFichePageModule() {
      _classCallCheck(this, EditFichePageModule);
    };

    EditFichePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditFichePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_edit_fiche_page__WEBPACK_IMPORTED_MODULE_6__["EditFichePage"]]
    })], EditFichePageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-fiche/edit-fiche.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-fiche/edit-fiche.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditFicheEditFichePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid {\n  padding: 5px 44px 5px 44px;\n}\n\n.item-wp {\n  padding-left: 0px;\n  margin-top: 15px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.datetime-wp {\n  padding: 0 !important;\n}\n\n.datetime-wp .datetime-text {\n  padding: 8px;\n  border: 1px solid #B9AA97;\n}\n\n.content-wp hr {\n  background-color: #b9aa97;\n  opacity: 0.8;\n}\n\nhr {\n  height: 2px;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 8px;\n}\n\n.text-input-wp {\n  margin: 0px;\n  border: 1px solid #B9AA97;\n  height: 47px;\n  width: 297px;\n}\n\n.trio .text-input-wp {\n  width: 100%;\n}\n\n.solo .text-input-wp {\n  width: 100%;\n}\n\n.right .text-input-wp {\n  float: right;\n}\n\n.readonly input {\n  color: white;\n  background-color: #B9AA97;\n}\n\ntextarea.text-input-wp {\n  width: 100%;\n  height: 120px;\n}\n\n#bloc-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  width: 100%;\n}\n\n#bloc-bottom div {\n  width: 50%;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.datetime-text {\n  height: 47px;\n  width: 297px;\n}\n\nbutton.item-cover {\n  position: absolute;\n  width: 297px;\n  height: 47px;\n  top: inherit;\n  left: inherit;\n}\n\n.selector {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\n.selectorTrio {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\nion-select {\n  max-width: 100%;\n}\n\n.selector .select-placeholder {\n  color: white !important;\n}\n\n.input {\n  border: 1px solid #B9AA97;\n  width: 90%;\n  margin-bottom: 1.5vh;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.divider {\n  border-bottom: 1px solid #B9AA97;\n  margin-bottom: 1.5vh;\n}\n\n.add_icon {\n  font-size: 48px !important;\n  margin-bottom: 1.5vh;\n}\n\n.margin1_5 {\n  margin-bottom: 1.5vh;\n}\n\nion-datetime {\n  padding-left: 0;\n}\n\n.camera {\n  margin-right: 5%;\n}\n\n.photos_container {\n  margin-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.photos {\n  width: 65%;\n  margin-left: 5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.photos div {\n  width: 48%;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.icon_trash_photo {\n  font-size: 28px;\n  margin-left: 5%;\n}\n\n.green_input {\n  border: 1px solid #04B200;\n}\n\n.orange_input {\n  border: 1px solid #FFAB00;\n}\n\n.label_plein {\n  --background:#B9AA97;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvZWRpdC1maWNoZS9lZGl0LWZpY2hlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1maWNoZS9lZGl0LWZpY2hlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUVFLFdBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRFBFO0VBQ0UsVUFBQTtBQ1NKOztBRE5BO0VBQ0UsdUJBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDU0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNRRjs7QURKQTtFQU1FLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0VGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBRE1BO0VBQ0UsdUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0FDSEY7O0FETUE7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1maWNoZS9lZGl0LWZpY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xuICBwYWRkaW5nOiA1cHggNDRweCA1cHggNDRweDtcbn1cblxuLml0ZW0td3B7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLml0ZW0taW5uZXJ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG5cblxuLmRhdGV0aW1lLXdwIHtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XG4gIHBhZGRpbmc6OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xufVxuLmNvbnRlbnQtd3AgaHJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgIDE3MCwgMTUxKTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5ociB7XG4gIGhlaWdodDoycHg7XG59XG4ubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDhweCAxMXB4IDhweDtcbn1cbi50ZXh0LWlucHV0LXdwIHtcbiAgbWFyZ2luOiAgMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cbi50cmlvIC50ZXh0LWlucHV0LXdwIHtcblxuICB3aWR0aDogMTAwJTtcbn1cbi5zb2xvIC50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmlnaHQgLnRleHQtaW5wdXQtd3Age1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmVhZG9ubHkgaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG59XG50ZXh0YXJlYS50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG4jYmxvYy1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXYge1xuICAgIHdpZHRoOiA1MCVcbiAgfVxufVxuY2FudmFzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMjk3cHg7XG59XG5cblxuYnV0dG9uLml0ZW0tY292ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI5N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRvcDppbmhlcml0O1xuICBsZWZ0OmluaGVyaXQ7XG59XG5cblxuLnNlbGVjdG9ye1xuICAvL2NvbG9yOndoaXRlO1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgLy9oZWlnaHQ6IDQ3cHg7XG4gIC8vd2lkdGg6IDI5N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luOiAxM3B4IDhweCAxM3B4IDhweDsgUEVVVCBFVFJFIEEgUkVNRVRUUkVcbn1cbi5zZWxlY3RvclRyaW97XG4gIHdpZHRoOiAgMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICAvL2hlaWdodDogNDdweDtcbiAgLy9kaXNwbGF5OmZsZXg7XG4gIC8vZGlzcGxheSA6IC13ZWJraXQtZmxleFxufVxuXG5pb24tc2VsZWN0e1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLnNlbGVjdG9yIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uZnVsbHdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOUFBOTc7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uYWRkX2ljb24ge1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5tYXJnaW4xXzUge1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aFxufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jYW1lcmEge1xuICBtYXJnaW4tcmlnaHQ6IDUlXG59XG5cbi5waG90b3NfY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnBob3RvcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5waG90b3MgZGl2IHtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX3RyYXNoX3Bob3RvIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tbGVmdDogNSVcbn1cblxuLmdyZWVuX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0QjIwMDtcbn1cblxuLm9yYW5nZV9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkFCMDA7XG59XG5cbi5sYWJlbF9wbGVpbiB7XG4gIC0tYmFja2dyb3VuZDojQjlBQTk3O1xuICBjb2xvcjogd2hpdGVcbn1cblxuXG4iLCIuZ3JpZCB7XG4gIHBhZGRpbmc6IDVweCA0NHB4IDVweCA0NHB4O1xufVxuXG4uaXRlbS13cCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtd3Age1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5Nztcbn1cblxuLmNvbnRlbnQtd3AgaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjlhYTk3O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbi5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDExcHggOHB4IDExcHggOHB4O1xufVxuXG4udGV4dC1pbnB1dC13cCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cblxuLnRyaW8gLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvbG8gLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJpZ2h0IC50ZXh0LWlucHV0LXdwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmVhZG9ubHkgaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG59XG5cbnRleHRhcmVhLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuI2Jsb2MtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNibG9jLWJvdHRvbSBkaXYge1xuICB3aWR0aDogNTAlO1xufVxuXG5jYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cblxuYnV0dG9uLml0ZW0tY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyOTdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0b3A6IGluaGVyaXQ7XG4gIGxlZnQ6IGluaGVyaXQ7XG59XG5cbi5zZWxlY3RvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0b3JUcmlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RvciAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uZnVsbHdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOUFBOTc7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uYWRkX2ljb24ge1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5tYXJnaW4xXzUge1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY2FtZXJhIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnBob3Rvc19jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ucGhvdG9zIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBob3RvcyBkaXYge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25fdHJhc2hfcGhvdG8ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmdyZWVuX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0QjIwMDtcbn1cblxuLm9yYW5nZV9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkFCMDA7XG59XG5cbi5sYWJlbF9wbGVpbiB7XG4gIC0tYmFja2dyb3VuZDojQjlBQTk3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/edit-fiche/edit-fiche.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/edit-fiche/edit-fiche.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditFichePage */

  /***/
  function srcAppPagesEditFicheEditFichePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFichePage", function () {
      return EditFichePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/events */
    "./src/app/services/events.ts");
    /* harmony import */


    var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/fiche-firebase.service */
    "./src/app/services/fiche-firebase.service.ts");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/utils.service */
    "./src/app/services/utils.service.ts");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");

    var EditFichePage = /*#__PURE__*/function () {
      function EditFichePage(formBuilder, route, router, events, alertCtrl, camera, base64, utilsService, loadingCtrl, actionSheetController, ficheFirebaseService) {
        _classCallCheck(this, EditFichePage);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.base64 = base64;
        this.utilsService = utilsService;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.ficheFirebaseService = ficheFirebaseService;
        this.fournituresArray = [];
        this.id = this.route.snapshot.params.id;
      }

      _createClass(EditFichePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeItems();
          this.getFiche(this.id);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            _this.signatureClient.signaturePad.fromDataURL(_this.fiche.signatureClient);

            _this.signatureResponsable.signaturePad.fromDataURL(_this.fiche.signatureResponsable);
          }, 500);
        }
      }, {
        key: "getFiche",
        value: function getFiche(id) {
          var _this2 = this;

          this.subrcisption = this.ficheFirebaseService.fiches$.subscribe(function (fiches) {
            _this2.fiche = fiches.find(function (f) {
              return f.id === id;
            });
            _this2.photos = _this2.fiche.photos ? _this2.fiche.photos : [];

            _this2.constructFourni();

            _this2.fiche.vue = true;
            _this2.fiche.modifieParBureau = false;

            _this2.ficheFirebaseService.updateFiche(_this2.fiche);
          }); // construit le tableau des fournitures
        }
      }, {
        key: "constructFourni",
        value: function constructFourni() {
          if (this.fiche.fournitures) {
            var _iterator = _createForOfIteratorHelper(this.fiche.fournitures),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var fourni = _step.value;
                this.fournituresArray.push(this.formBuilder.group({
                  nom: fourni.nom,
                  quantite: fourni.quantite
                }));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          this.initForm(); // une fois qu'on a fait le tableau on init le form
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.ficheForm = this.formBuilder.group({
            arrive: [this.fiche.arrive, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            depart: [this.fiche.depart, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            temps: [this.fiche.temps],
            positionRoue: [this.fiche.positionRoue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomClient: [this.fiche.nomClient, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomAdresse: [this.fiche.nomAdresse],
            dimension: [this.fiche.dimension],
            dimensionLibre: [this.fiche.dimensionLibre],
            nvh: [this.fiche.nvh],
            kmCompteur: [this.fiche.kmCompteur],
            demontage: [this.fiche.demontage],
            depose: [this.fiche.depose],
            reparation: [this.fiche.reparation],
            chaair: [this.fiche.chaair],
            retaillage: [this.fiche.retaillage],
            emplatre: this.formBuilder.group({
              nom: this.fiche.emplatre ? this.fiche.emplatre.nom : '',
              quantite: this.fiche.emplatre ? this.fiche.emplatre.quantite : ''
            }),
            forfait: [this.fiche.forfait],
            fournitures: this.formBuilder.array(this.fournituresArray),
            observation: [this.fiche.observation],
            numeroPneu: [this.fiche.numeroPneu],
            pression: [this.fiche.pression],
            serrage: [this.fiche.serrage]
          });
        }
      }, {
        key: "calculTime",
        value: function calculTime() {
          this.ficheForm.controls.temps.setValue(this.utilsService.calculTime(this.ficheForm));
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var loading, fiche;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Modification de la fiche en cours...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.ficheForm.value.signatureClient = this.signatureClient.getSignature(); //

                    this.ficheForm.value.signatureResponsable = this.signatureResponsable.getSignature(); //

                    this.ficheForm.value.photos = this.photos;
                    fiche = this.ficheForm.value;
                    fiche.id = this.fiche.id;
                    fiche.userId = this.fiche.userId;
                    this.ficheFirebaseService.updateFiche(fiche).then(function () {
                      loading.dismiss();

                      _this3.router.navigate(['fiche']);
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addFourniture",
        value: function addFourniture() {
          var control = this.ficheForm.controls.fournitures;
          control.push(this.createItem());
        }
      }, {
        key: "createItem",
        value: function createItem() {
          return this.formBuilder.group({
            nom: '',
            quantite: '1'
          });
        }
      }, {
        key: "deleteFourni",
        value: function deleteFourni(i) {
          var control = this.ficheForm.controls.fournitures;
          control.removeAt(i);
        }
      }, {
        key: "clear",
        value: function clear(signature) {
          if (signature === 'client') {
            this.signatureClient.signaturePad.clear();
          } else if (signature === 'responsable') {
            this.signatureResponsable.signaturePad.clear();
          }
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.fournituresList = ['Retaillage', 'Equilibrage petit PL', 'Equilibrage grand PL', 'Rallonge 1197', 'Rallonge R210 (souple)', 'Rallonge coudee W353', 'Rallonge V615 (rigide)', 'Gonflage mousse polyurethane (kg)', 'Produit anti-crevaison', 'Jante neuve 385/65 x 22.5 Deport 0', 'Jante neuve 385/65 x 22.5 Deport 120', 'Jante neuve 315/80 x 22.5', 'Jante neuve 315/70 x 22.5', 'Jante neuve 445/65 x 22.5', 'Jante neuve 13 x 22.5', 'Jante neuve 12 x 22.5', 'Jante neuve 11 x 22.5', 'Joint tyran', 'Joint sulla', 'Joint heupo', 'Chambre à air 5/70 x 12', 'Chambre à air 11.5/80 x 15.3', 'Chambre à air 15.5/80 x 24', 'Chambre à air 12.5/80 x 18', 'Chambre à air 405/70 x 20', 'Chambre à air 28.9 x 15', 'Chambre à air 23.1 x 26', 'Chambre à air 10 x 16.5', 'Chambre à air 205 x 15', 'Chambre à air 12 x 16.5', 'Chambre à air 600 x 9', 'Chambre à air 700 x 12', 'Chambre à air 10.5/80 x 18', 'Chambre à air 18 x 19.5', 'Chambre à air 12.5 x 20', 'Chambre à air 1000 x 20', 'Chambre à air 1200 x 20', 'Chambre à air 14.5 x 20', 'Chambre à air 600/40 x 22.5', 'Chambre à air 16/70 x 20', 'Rustine PN02', 'Rustine PN03', 'Rustine PN04', 'Rustine PN05', 'Rustine PN06', 'Valve Alcoa jante alu', 'Valve TR 413', 'Valve TR 414 L', 'Valve TR 415', 'Valva 1294', 'Valve GC', 'Vave 1486', 'Valve GSW35', 'Valve 2123', 'Valve 4441', 'Valve 1151'];
        }
      }, {
        key: "uploadImage",
        value: function uploadImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      buttons: [{
                        text: 'Ouvrir l’appareil photo',
                        handler: function handler() {
                          _this4.pickImage(_this4.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Ouvrir la pellicule',
                        handler: function handler() {
                          _this4.pickImage(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Annuler',
                        role: 'cancel'
                      }],
                      cssClass: 'actionSheet',
                      mode: 'ios'
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "pickImage",
        value: function pickImage(source) {
          var _this5 = this;

          var options = {
            quality: 100,
            sourceType: source,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            var date = new Date();
            var name = 'image-' + date.getTime();

            _this5.photos.push({
              nom: name,
              data: 'data:image/*;base64,' + imageData
            });
          })["catch"](function (e) {
            return console.log(e);
          });
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Supprimer cette pièce-jointe ?',
                      message: 'Voulez vous vraiment procéder à la suppression de cette pièce jointe? Attention cette action est définitive.',
                      buttons: [{
                        text: 'Valider',
                        handler: function handler() {
                          _this6.photos.splice(i, 1);
                        }
                      }, {
                        text: 'Annuler'
                      }],
                      mode: 'ios'
                    });

                  case 2:
                    confirm = _context3.sent;
                    _context3.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subrcisption.unsubscribe();
        }
      }]);

      return EditFichePage;
    }();

    EditFichePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_events__WEBPACK_IMPORTED_MODULE_4__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
      }, {
        type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FicheFirebaseService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureClient')], EditFichePage.prototype, "signatureClient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureResponsable')], EditFichePage.prototype, "signatureResponsable", void 0);
    EditFichePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-fiche',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-fiche.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-fiche/edit-fiche.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-fiche.page.scss */
      "./src/app/pages/edit-fiche/edit-fiche.page.scss"))["default"]]
    })], EditFichePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-fiche-edit-fiche-module-es5.js.map