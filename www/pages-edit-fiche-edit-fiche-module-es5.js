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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"ficheForm\" *ngIf=\"ficheForm\" (ngSubmit)=\"save()\" id=\"form\">\r\n    <p>note: {{fiche.note}}</p>\r\n\r\n\r\n    <ion-list mode=\"ios\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('arrive').value ? 'green_input' : 'orange_input'\">\r\n              <ion-datetime tappable mode=\"ios\" (ionChange)=\"calculTime()\" formControlName=\"arrive\"\r\n                            placeholder=\"Heure d'arrivée chez le client\"\r\n                            cancelText=\"Annuler\" doneText=\"Valider\" displayFormat=\"HH:mm\"\r\n                            pickerFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depart').value ? 'green_input' : 'orange_input'\">\r\n              <ion-datetime mode=\"ios\" formControlName=\"depart\" (ionChange)=\"calculTime()\"\r\n                            placeholder=\"Heure de départ\" cancelText=\"Annuler\"\r\n                            doneText=\"Valider\" displayFormat=\"HH:mm\" pickerFormat=\"HH:mm\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('temps').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"temps\" type=\"text\"\r\n                         placeholder=\"Temps passé\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('positionRoue').value ? 'green_input' : 'orange_input'\">\r\n              <ion-input mode=\"ios\" formControlName=\"positionRoue\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Position de la roue\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomClient').value ? 'green_input' : 'orange_input'\">\r\n              <ion-input mode=\"ios\" formControlName=\"nomClient\" class=\"solo\" type=\"text\"\r\n                         placeholder=\"Nom client\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomAdresse').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"nomAdresse\" class=\"solo\" type=\"text\"\r\n                         placeholder=\"Nom et adresse\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimension').value ? 'green_input' : ''\">\r\n\r\n              <ion-select class=\"selectorTrio  trio\" formControlName=\"dimension\" placeholder=\"Dimension\">\r\n                <ion-select-option value=\"0\">Aucune</ion-select-option>\r\n                <ion-select-option value=\"12 x 22.5 AM09 HANKOOK\">pneu 12 x 22.5 AM09 HANKOOK\r\n                </ion-select-option>\r\n                <ion-select-option value=\"13 x 22.5 AM09 HANKOOK\">pneu 13 x 22.5 AM09 HANKOOK\r\n                </ion-select-option>\r\n                <ion-select-option value=\"12 x 22.5 DM09 HANKOOK\">pneu 12 x 22.5 DM09 HANKOOK\r\n                </ion-select-option>\r\n                <ion-select-option value=\"13 x 22.5 DM09 HANKOOK\">pneu 13 x 22.5 DM09 HANKOOK\r\n                </ion-select-option>\r\n                <ion-select-option value=\"12 x 22.5 RECHAPE\">pneu 12 x 22.5 RECHAPE</ion-select-option>\r\n                <ion-select-option value=\"10 x 16.5 NHS\">pneu 10 x 16.5 NHS</ion-select-option>\r\n                <ion-select-option value=\"385/65 x 22.5 TM15 HANKOOK\">pneu 385/65 x 22.5 TM15 HANKOOK\r\n                </ion-select-option>\r\n                <ion-select-option value=\"385/65 x 22.5 HT3 CONTINENTAL\">pneu 385/65 x 22.5 HT3\r\n                  CONTINENTAL\r\n                </ion-select-option>\r\n                <ion-select-option value=\"315/80 x 22.5 HS3 CONTINENTAL\">pneu 315/80 x 22.5 HS3\r\n                  CONTINENTAL\r\n                </ion-select-option>\r\n                <ion-select-option value=\"315/70 x 22.5 HS3 CONTINENTAL\">pneu 315/70 x 22.5 HS3\r\n                  CONTINENTAL\r\n                </ion-select-option>\r\n                <ion-select-option value=\"155 x 13 KUHMO\">pneu 155 x 13 KUHMO</ion-select-option>\r\n                <ion-select-option value=\"195/75 x 16 RA18 HANKOOK\">pneu 195/75 x 16 RA18 HANKOOK\r\n                </ion-select-option>\r\n\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimensionLibre').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"dimensionLibre\" class=\"trio\" type=\"text\"\r\n                         placeholder=\"Dimension\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nvh').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"nvh\" class=\"trio\" type=\"text\"\r\n                         placeholder=\"NVH\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('kmCompteur').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"kmCompteur\" class=\"trio\" type=\"text\"\r\n                         placeholder=\"Kilomètres compteur\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Démontage/remontage\"></ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"demontage\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\"></ion-input>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" type=\"text\" class=\"readonly\" readonly value=\"Dépose/repose\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"depose\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\">\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-around\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Réparation/Tubeless\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"reparation\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-justify-content-around\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Réparation CH.AAIR\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"chaair\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-around\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"Retaillage\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"retaillage\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div formGroupName=\"emplatre\">\r\n          <ion-row class=\"ion-justify-content-between\">\r\n            <ion-col>\r\n              <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('nom').value ? 'label_plein' : ''\">\r\n                <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Emplâtre\">\r\n                  <ion-select-option value=\"Emplâtre 110 TL\">Emplâtre 110 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 120 TL\">Emplâtre 120 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 125 TL\">Emplâtre 125 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 135 TL\">Emplâtre 135 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 140 TL\">Emplâtre 140 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 142 TL\">Emplâtre 142 TL</ion-select-option>\r\n                  <ion-select-option value=\"Emplâtre 145 TL\">Emplâtre 145 TL</ion-select-option>\r\n                  <!--  <ion-select-option value=\"G159\">Emplâtre 146 TL</ion-select-option>\r\n                  <ion-select-option value=\"G169\">Emplâtre PN02L</ion-select-option>\r\n                  <ion-select-option value=\"G170\">Emplâtre PN03</ion-select-option>\r\n                  <ion-select-option value=\"G171\">Emplâtre PN04</ion-select-option>\r\n                  <ion-select-option value=\"G172\">Emplâtre PN05</ion-select-option>\r\n                  <ion-select-option value=\"G173\">Emplâtre PN06</ion-select-option> -->\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('quantite').value ? 'green_input' : ''\">\r\n                <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\r\n                           placeholder=\"Quantité\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'label_plein' : ''\">\r\n              <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                         value=\"Forfait véhiculé\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" formControlName=\"forfait\" class=\"right\" type=\"text\"\r\n                         placeholder=\"Quantité\" value=\"1\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <div formArrayName=\"fournitures\">\r\n          <ng-container *ngFor=\"let fourniture of ficheForm.get('fournitures')['controls']; let i=index\"\r\n                        formGroupName=\"{{i}}\">\r\n\r\n            <ion-row class=\"ion-justify-content-between\">\r\n              <ion-col>\r\n\r\n                <ion-item-sliding>\r\n                  <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('nom').value ? 'label_plein' : ''\">\r\n                    <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Fourniture\">\r\n                      <ion-select-option *ngFor=\"let fourni of fournituresList\"\r\n                                         [value]=\"fourni\">{{fourni}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                  <ion-item-options side=\"start\">\r\n                    <ion-button color=\"danger\" (click)=\"deleteFourni(i)\">\r\n                      <ion-icon name=\"trash\"></ion-icon>\r\n                      Supprimer\r\n                    </ion-button>\r\n                  </ion-item-options>\r\n                </ion-item-sliding>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('quantite').value ? 'green_input' : ''\">\r\n                  <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\r\n                             placeholder=\"Quantité\"></ion-input>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-icon class=\"add_icon\" name=\"add-circle-outline\" tappable (click)=\"addFourniture()\" color=\"secondary\"\r\n                  style=\"font-size:5rem;\"></ion-icon>\r\n\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('observation').value ? 'green_input' : ''\">\r\n              <ion-textarea class=\"textarea\" formControlName=\"observation\" placeholder=\"Observation\"\r\n                            mode=\"ios\">\r\n              </ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('numeroPneu').value ? 'green_input' : ''\">\r\n              <!--<ion-label stacked>N° Pneu monté</ion-label>-->\r\n              <ion-input mode=\"ios\" formControlName=\"numeroPneu\" class=\"solo\" type=\"text\"\r\n                         placeholder=\"N° pneu monté\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-between\">\r\n          <ion-col>\r\n            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('pression').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" type=\"text\" formControlName=\"pression\"\r\n                         placeholder=\"Contrôle pression\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('serrage').value ? 'green_input' : ''\">\r\n              <ion-input mode=\"ios\" type=\"text\" formControlName=\"serrage\" class=\"right\"\r\n                         placeholder=\"Contrôle serrage\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item mode=\"ios\" lines=\"none\" class=\"margin1_5\">\r\n          Prière de resserer les roues après 25Km, 100Km et ensuite périodiquement\r\n        </ion-item>\r\n        <ion-item mode=\"ios\" lines=\"none\" class=\"photos_container\">\r\n          <div class=\"w_30\">\r\n            <ion-button mode=\"ios\" size=\"full\" (click)=\"uploadImage()\">\r\n              <ion-icon name=\"camera-sharp\" class=\"camera\"></ion-icon>\r\n              Ajouter une photo\r\n            </ion-button>\r\n          </div>\r\n          <div class=\"photos\">\r\n            <div *ngFor=\"let photo of photos; let i = index\">\r\n              <p>{{photo.nom}}</p>\r\n              <ion-icon name=\"trash-sharp\" class=\"icon_trash_photo\" color=\"danger\" tappable\r\n                        (click)=\"deletePhoto(i)\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item mode=\"ios\" lines=\"none\">\r\n          <div id=\"bloc-bottom\">\r\n\r\n            <div>Signature responsable :\r\n              <br>\r\n              <br>\r\n              <app-signature-responsable #signatureResponsable>\r\n              </app-signature-responsable>\r\n              <br>\r\n\r\n              <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('responsable')\">Reset\r\n              </ion-button>\r\n            </div>\r\n            <div>Signature client :\r\n              <br>\r\n              <br>\r\n              <app-signature-client #signatureClient>\r\n              </app-signature-client>\r\n              <br>\r\n              <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('client')\">Reset\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item mode=\"ios\" lines=\"none\">\r\n          <ion-button mode=\"ios\" size=\"large\" type=\"submit\"\r\n                      [disabled]=\"!ficheForm.valid\">{{autosend ? \"Envoyer\" : \"Enregistrer\"}}\r\n          </ion-button>\r\n\r\n\r\n        </ion-item>\r\n\r\n      </ion-grid>\r\n    </ion-list>\r\n  </form>\r\n  <div *ngIf=\"msgErreur\">{{msgErreur}}</div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".grid {\n  padding: 5px 44px 5px 44px;\n}\n\n.item-wp {\n  padding-left: 0px;\n  margin-top: 15px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.datetime-wp {\n  padding: 0 !important;\n}\n\n.datetime-wp .datetime-text {\n  padding: 8px;\n  border: 1px solid #B9AA97;\n}\n\n.content-wp hr {\n  background-color: #b9aa97;\n  opacity: 0.8;\n}\n\nhr {\n  height: 2px;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 8px;\n}\n\n.text-input-wp {\n  margin: 0px;\n  border: 1px solid #B9AA97;\n  height: 47px;\n  width: 297px;\n}\n\n.trio .text-input-wp {\n  width: 100%;\n}\n\n.solo .text-input-wp {\n  width: 100%;\n}\n\n.right .text-input-wp {\n  float: right;\n}\n\n.readonly input {\n  color: white;\n  background-color: #B9AA97;\n}\n\ntextarea.text-input-wp {\n  width: 100%;\n  height: 120px;\n}\n\n#bloc-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  width: 100%;\n}\n\n#bloc-bottom div {\n  width: 50%;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.datetime-text {\n  height: 47px;\n  width: 297px;\n}\n\nbutton.item-cover {\n  position: absolute;\n  width: 297px;\n  height: 47px;\n  top: inherit;\n  left: inherit;\n}\n\n.selector {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\n.selectorTrio {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\nion-select {\n  max-width: 100%;\n}\n\n.selector .select-placeholder {\n  color: white !important;\n}\n\n.input {\n  border: 1px solid #B9AA97;\n  width: 90%;\n  margin-bottom: 1.5vh;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.divider {\n  border-bottom: 1px solid #B9AA97;\n  margin-bottom: 1.5vh;\n}\n\n.add_icon {\n  font-size: 48px !important;\n  margin-bottom: 1.5vh;\n}\n\n.margin1_5 {\n  margin-bottom: 1.5vh;\n}\n\nion-datetime {\n  padding-left: 0;\n}\n\n.camera {\n  margin-right: 5%;\n}\n\n.photos_container {\n  margin-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.photos {\n  width: 65%;\n  margin-left: 5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.photos div {\n  width: 48%;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.icon_trash_photo {\n  font-size: 28px;\n  margin-left: 5%;\n}\n\n.green_input {\n  border: 1px solid #04B200;\n}\n\n.orange_input {\n  border: 1px solid #FFAB00;\n}\n\n.label_plein {\n  --background:#B9AA97;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1maWNoZS9EOlxcUHJvamVjdHNcXHJhbmRvX3BuZXVzL3NyY1xcYXBwXFxwYWdlc1xcZWRpdC1maWNoZVxcZWRpdC1maWNoZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtZmljaGUvZWRpdC1maWNoZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFFRSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNRRjs7QURQRTtFQUNFLFVBQUE7QUNTSjs7QUROQTtFQUNFLHVCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUUY7O0FESkE7RUFNRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURNQTtFQUNFLHVCQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtZmljaGUvZWRpdC1maWNoZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZHtcclxuICBwYWRkaW5nOiA1cHggNDRweCA1cHggNDRweDtcclxufVxyXG5cclxuLml0ZW0td3B7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaXRlbS1pbm5lcntcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmRhdGV0aW1lLXdwIHtcclxuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGV0aW1lLXdwIC5kYXRldGltZS10ZXh0IHtcclxuICBwYWRkaW5nOjhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xyXG59XHJcbi5jb250ZW50LXdwIGhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAgMTcwLCAxNTEpO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuaHIge1xyXG4gIGhlaWdodDoycHg7XHJcbn1cclxuLmxhYmVsLWlvcyB7XHJcbiAgbWFyZ2luOiAxMXB4IDhweCAxMXB4IDhweDtcclxufVxyXG4udGV4dC1pbnB1dC13cCB7XHJcbiAgbWFyZ2luOiAgMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHdpZHRoOiAyOTdweDtcclxufVxyXG4udHJpbyAudGV4dC1pbnB1dC13cCB7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zb2xvIC50ZXh0LWlucHV0LXdwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmlnaHQgLnRleHQtaW5wdXQtd3Age1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4ucmVhZG9ubHkgaW5wdXQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjlBQTk3O1xyXG59XHJcbnRleHRhcmVhLnRleHQtaW5wdXQtd3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuI2Jsb2MtYm90dG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogNTAlXHJcbiAgfVxyXG59XHJcbmNhbnZhcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kYXRldGltZS10ZXh0IHtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgd2lkdGg6IDI5N3B4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uLml0ZW0tY292ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyOTdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgdG9wOmluaGVyaXQ7XHJcbiAgbGVmdDppbmhlcml0O1xyXG59XHJcblxyXG5cclxuLnNlbGVjdG9ye1xyXG4gIC8vY29sb3I6d2hpdGU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjQjlBQTk3O1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxuICAvL2hlaWdodDogNDdweDtcclxuICAvL3dpZHRoOiAyOTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gbWFyZ2luOiAxM3B4IDhweCAxM3B4IDhweDsgUEVVVCBFVFJFIEEgUkVNRVRUUkVcclxufVxyXG4uc2VsZWN0b3JUcmlve1xyXG4gIHdpZHRoOiAgMTAwJTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xyXG4gIC8vaGVpZ2h0OiA0N3B4O1xyXG4gIC8vZGlzcGxheTpmbGV4O1xyXG4gIC8vZGlzcGxheSA6IC13ZWJraXQtZmxleFxyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RvciAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xyXG59XHJcblxyXG4uZnVsbHdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjlBQTk3O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xyXG59XHJcblxyXG4uYWRkX2ljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xyXG59XHJcblxyXG4ubWFyZ2luMV81IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aFxyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmNhbWVyYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JVxyXG59XHJcblxyXG4ucGhvdG9zX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnBob3RvcyB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucGhvdG9zIGRpdiB7XHJcbiAgd2lkdGg6IDQ4JTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25fdHJhc2hfcGhvdG8ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBtYXJnaW4tbGVmdDogNSVcclxufVxyXG5cclxuLmdyZWVuX2lucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDRCMjAwO1xyXG59XHJcblxyXG4ub3JhbmdlX2lucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZBQjAwO1xyXG59XHJcblxyXG4ubGFiZWxfcGxlaW4ge1xyXG4gIC0tYmFja2dyb3VuZDojQjlBQTk3O1xyXG4gIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5cclxuIiwiLmdyaWQge1xuICBwYWRkaW5nOiA1cHggNDRweCA1cHggNDRweDtcbn1cblxuLml0ZW0td3Age1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXdwIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtd3AgLmRhdGV0aW1lLXRleHQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG59XG5cbi5jb250ZW50LXdwIGhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YWE5NztcbiAgb3BhY2l0eTogMC44O1xufVxuXG5ociB7XG4gIGhlaWdodDogMnB4O1xufVxuXG4ubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDhweCAxMXB4IDhweDtcbn1cblxuLnRleHQtaW5wdXQtd3Age1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMjk3cHg7XG59XG5cbi50cmlvIC50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zb2xvIC50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yaWdodCAudGV4dC1pbnB1dC13cCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnJlYWRvbmx5IGlucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjlBQTk3O1xufVxuXG50ZXh0YXJlYS50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbiNibG9jLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jYmxvYy1ib3R0b20gZGl2IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuY2FudmFzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMjk3cHg7XG59XG5cbmJ1dHRvbi5pdGVtLWNvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjk3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgdG9wOiBpbmhlcml0O1xuICBsZWZ0OiBpbmhlcml0O1xufVxuXG4uc2VsZWN0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdG9yVHJpbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0b3IgLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuLmZ1bGx3aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjlBQTk3O1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuLmFkZF9pY29uIHtcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4ubWFyZ2luMV81IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmNhbWVyYSB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5waG90b3NfY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnBob3RvcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5waG90b3MgZGl2IHtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX3RyYXNoX3Bob3RvIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5ncmVlbl9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNEIyMDA7XG59XG5cbi5vcmFuZ2VfaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZBQjAwO1xufVxuXG4ubGFiZWxfcGxlaW4ge1xuICAtLWJhY2tncm91bmQ6I0I5QUE5NztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
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