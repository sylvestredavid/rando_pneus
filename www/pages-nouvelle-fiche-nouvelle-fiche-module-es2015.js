(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nouvelle-fiche-nouvelle-fiche-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button class=\"menu_button\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <form [formGroup]=\"ficheForm\" (ngSubmit)=\"save()\" id=\"form\">\r\n\r\n\r\n        <ion-list mode=\"ios\">\r\n            <ion-grid>\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('arrive').value ? 'green_input' : 'orange_input'\">\r\n                            <ion-datetime tappable mode=\"ios\" (ionChange)=\"calculTime()\" formControlName=\"arrive\"\r\n                                          placeholder=\"Heure d'arrivée chez le client\"\r\n                                          cancelText=\"Annuler\" doneText=\"Valider\" displayFormat=\"HH:mm\"\r\n                                          pickerFormat=\"HH:mm\"></ion-datetime>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depart').value ? 'green_input' : 'orange_input'\">\r\n                            <ion-datetime mode=\"ios\" formControlName=\"depart\" (ionChange)=\"calculTime()\"\r\n                                          placeholder=\"Heure de départ\" cancelText=\"Annuler\"\r\n                                          doneText=\"Valider\" displayFormat=\"HH:mm\" pickerFormat=\"HH:mm\"></ion-datetime>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('temps').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"temps\" type=\"text\"\r\n                                       placeholder=\"Temps passé\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('positionRoue').value ? 'green_input' : 'orange_input'\">\r\n                            <ion-input mode=\"ios\" formControlName=\"positionRoue\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Position de la roue\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomClient').value ? 'green_input' : 'orange_input'\">\r\n                            <ion-input mode=\"ios\" formControlName=\"nomClient\" class=\"solo\" type=\"text\"\r\n                                       placeholder=\"Nom client\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <div class=\"divider\"></div>\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomAdresse').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"nomAdresse\" class=\"solo\" type=\"text\"\r\n                                       placeholder=\"Nom et adresse\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimension').value ? 'green_input' : ''\">\r\n\r\n                            <ion-select class=\"selectorTrio  trio\" formControlName=\"dimension\" placeholder=\"Dimension\">\r\n                                <ion-select-option value=\"0\">Aucune</ion-select-option>\r\n                                <ion-select-option value=\"12 x 22.5 AM09 HANKOOK\">pneu 12 x 22.5 AM09 HANKOOK\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"13 x 22.5 AM09 HANKOOK\">pneu 13 x 22.5 AM09 HANKOOK\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"12 x 22.5 DM09 HANKOOK\">pneu 12 x 22.5 DM09 HANKOOK\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"13 x 22.5 DM09 HANKOOK\">pneu 13 x 22.5 DM09 HANKOOK\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"12 x 22.5 RECHAPE\">pneu 12 x 22.5 RECHAPE</ion-select-option>\r\n                                <ion-select-option value=\"10 x 16.5 NHS\">pneu 10 x 16.5 NHS</ion-select-option>\r\n                                <ion-select-option value=\"385/65 x 22.5 TM15 HANKOOK\">pneu 385/65 x 22.5 TM15 HANKOOK\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"385/65 x 22.5 HT3 CONTINENTAL\">pneu 385/65 x 22.5 HT3\r\n                                    CONTINENTAL\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"315/80 x 22.5 HS3 CONTINENTAL\">pneu 315/80 x 22.5 HS3\r\n                                    CONTINENTAL\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"315/70 x 22.5 HS3 CONTINENTAL\">pneu 315/70 x 22.5 HS3\r\n                                    CONTINENTAL\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"155 x 13 KUHMO\">pneu 155 x 13 KUHMO</ion-select-option>\r\n                                <ion-select-option value=\"195/75 x 16 RA18 HANKOOK\">pneu 195/75 x 16 RA18 HANKOOK\r\n                                </ion-select-option>\r\n\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimensionLibre').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"dimensionLibre\" class=\"trio\" type=\"text\"\r\n                                       placeholder=\"Dimension\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nvh').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"nvh\" class=\"trio\" type=\"text\"\r\n                                       placeholder=\"NVH\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('kmCompteur').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"kmCompteur\" class=\"trio\" type=\"text\"\r\n                                       placeholder=\"Kilomètres compteur\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <div class=\"divider\"></div>\r\n\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                                       value=\"Démontage/remontage\"></ion-input>\r\n\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"demontage\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\"></ion-input>\r\n\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" type=\"text\" class=\"readonly\" readonly value=\"Dépose/repose\">\r\n                            </ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"depose\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\">\r\n                            </ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                                       value=\"Réparation/Tubeless\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"reparation\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                                       value=\"Réparation CH.AAIR\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"chaair\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"Retaillage\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"retaillage\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <div formGroupName=\"emplatre\">\r\n                    <ion-row class=\"ion-justify-content-between\">\r\n                        <ion-col>\r\n                            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('nom').value ? 'label_plein' : ''\">\r\n                                <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Emplâtre\">\r\n                                    <ion-select-option value=\"Emplâtre 110 TL\">Emplâtre 110 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 120 TL\">Emplâtre 120 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 125 TL\">Emplâtre 125 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 135 TL\">Emplâtre 135 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 140 TL\">Emplâtre 140 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 142 TL\">Emplâtre 142 TL</ion-select-option>\r\n                                    <ion-select-option value=\"Emplâtre 145 TL\">Emplâtre 145 TL</ion-select-option>\r\n                                    <!--  <ion-select-option value=\"G159\">Emplâtre 146 TL</ion-select-option>\r\n                                    <ion-select-option value=\"G169\">Emplâtre PN02L</ion-select-option>\r\n                                    <ion-select-option value=\"G170\">Emplâtre PN03</ion-select-option>\r\n                                    <ion-select-option value=\"G171\">Emplâtre PN04</ion-select-option>\r\n                                    <ion-select-option value=\"G172\">Emplâtre PN05</ion-select-option>\r\n                                    <ion-select-option value=\"G173\">Emplâtre PN06</ion-select-option> -->\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('quantite').value ? 'green_input' : ''\">\r\n                                <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\r\n                                           placeholder=\"Quantité\"></ion-input>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'label_plein' : ''\">\r\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\r\n                                       value=\"Forfait véhiculé\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" formControlName=\"forfait\" class=\"right\" type=\"text\"\r\n                                       placeholder=\"Quantité\" value=\"1\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <div formArrayName=\"fournitures\">\r\n                    <ng-container *ngFor=\"let fourniture of ficheForm.get('fournitures')['controls']; let i=index\"\r\n                                  formGroupName=\"{{i}}\">\r\n\r\n                        <ion-row class=\"ion-justify-content-between\">\r\n                            <ion-col>\r\n\r\n                                <ion-item-sliding>\r\n                                    <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('nom').value ? 'label_plein' : ''\">\r\n                                        <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Fourniture\">\r\n                                            <ion-select-option *ngFor=\"let fourni of fournituresList\"\r\n                                                               [value]=\"fourni\">{{fourni}}</ion-select-option>\r\n                                        </ion-select>\r\n                                    </ion-item>\r\n                                    <ion-item-options side=\"start\">\r\n                                        <ion-button color=\"danger\" (click)=\"deleteFourni(i)\">\r\n                                            <ion-icon name=\"trash\"></ion-icon>\r\n                                            Supprimer\r\n                                        </ion-button>\r\n                                    </ion-item-options>\r\n                                </ion-item-sliding>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('quantite').value ? 'green_input' : ''\">\r\n                                    <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\r\n                                               placeholder=\"Quantité\"></ion-input>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <ion-icon class=\"add_icon\" name=\"add-circle-outline\" tappable (click)=\"addFourniture()\"\r\n                          color=\"secondary\"\r\n                          style=\"font-size:5rem;\"></ion-icon>\r\n\r\n\r\n                <div class=\"divider\"></div>\r\n\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('observation').value ? 'green_input' : ''\">\r\n                            <ion-textarea class=\"textarea\" formControlName=\"observation\" placeholder=\"Observation\"\r\n                                          mode=\"ios\">\r\n                            </ion-textarea>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('numeroPneu').value ? 'green_input' : ''\">\r\n                            <!--<ion-label stacked>N° Pneu monté</ion-label>-->\r\n                            <ion-input mode=\"ios\" formControlName=\"numeroPneu\" class=\"solo\" type=\"text\"\r\n                                       placeholder=\"N° pneu monté\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-justify-content-between\">\r\n                    <ion-col>\r\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('pression').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" type=\"text\" formControlName=\"pression\"\r\n                                       placeholder=\"Contrôle pression\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('serrage').value ? 'green_input' : ''\">\r\n                            <ion-input mode=\"ios\" type=\"text\" formControlName=\"serrage\" class=\"right\"\r\n                                       placeholder=\"Contrôle serrage\"></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-item mode=\"ios\" lines=\"none\" class=\"margin1_5\">\r\n                    Prière de resserer les roues après 25Km, 100Km et ensuite périodiquement\r\n                </ion-item>\r\n                <ion-item mode=\"ios\" lines=\"none\" class=\"photos_container\">\r\n                    <div class=\"w_30\">\r\n                        <ion-button mode=\"ios\" size=\"full\" (click)=\"uploadImage()\">\r\n                            <ion-icon name=\"camera-sharp\" class=\"camera\"></ion-icon>\r\n                            Ajouter une photo\r\n                        </ion-button>\r\n                    </div>\r\n                    <div class=\"photos\">\r\n                        <div *ngFor=\"let photo of photos; let i = index\">\r\n                            <p>{{photo.nom}}</p>\r\n                            <ion-icon name=\"trash-sharp\" class=\"icon_trash_photo\" color=\"danger\" tappable\r\n                                      (click)=\"deletePhoto(i)\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item mode=\"ios\" lines=\"none\">\r\n                    <div id=\"bloc-bottom\">\r\n\r\n                        <div>Signature responsable :\r\n                            <br>\r\n                            <br>\r\n                            <app-signature-responsable #signatureResponsable>\r\n                            </app-signature-responsable>\r\n                            <br>\r\n\r\n                            <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('responsable')\">Reset\r\n                            </ion-button>\r\n                        </div>\r\n                        <div>Signature client :\r\n                            <br>\r\n                            <br>\r\n                            <app-signature-client #signatureClient>\r\n                            </app-signature-client>\r\n                            <br>\r\n                            <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('client')\">Reset\r\n                            </ion-button>\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-item mode=\"ios\" lines=\"none\">\r\n                    <div class=\"w_30\">\r\n                        <ion-button mode=\"ios\" size=\"full\" type=\"submit\"\r\n                                    [disabled]=\"!ficheForm.valid\">{{autosend ? \"Envoyer\" : \"Enregistrer\"}}\r\n                        </ion-button>\r\n                    </div>\r\n\r\n                </ion-item>\r\n\r\n            </ion-grid>\r\n        </ion-list>\r\n    </form>\r\n    <div *ngIf=\"msgErreur\">{{msgErreur}}</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/nouvelle-fiche/nouvelle-fiche-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/nouvelle-fiche/nouvelle-fiche-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: NouvelleFichePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleFichePageRoutingModule", function() { return NouvelleFichePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nouvelle_fiche_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nouvelle-fiche.page */ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.ts");




const routes = [
    {
        path: '',
        component: _nouvelle_fiche_page__WEBPACK_IMPORTED_MODULE_3__["NouvelleFichePage"]
    }
];
let NouvelleFichePageRoutingModule = class NouvelleFichePageRoutingModule {
};
NouvelleFichePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NouvelleFichePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/nouvelle-fiche/nouvelle-fiche.module.ts ***!
  \***************************************************************/
/*! exports provided: NouvelleFichePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleFichePageModule", function() { return NouvelleFichePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nouvelle_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nouvelle-fiche-routing.module */ "./src/app/pages/nouvelle-fiche/nouvelle-fiche-routing.module.ts");
/* harmony import */ var _nouvelle_fiche_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nouvelle-fiche.page */ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let NouvelleFichePageModule = class NouvelleFichePageModule {
};
NouvelleFichePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nouvelle_fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__["NouvelleFichePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_nouvelle_fiche_page__WEBPACK_IMPORTED_MODULE_6__["NouvelleFichePage"]]
    })
], NouvelleFichePageModule);



/***/ }),

/***/ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\n  padding: 5px 44px 5px 44px;\n}\n\n.item-wp {\n  padding-left: 0px;\n  margin-top: 15px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.datetime-wp {\n  padding: 0 !important;\n}\n\n.datetime-wp .datetime-text {\n  padding: 8px;\n  border: 1px solid #B9AA97;\n}\n\n.content-wp hr {\n  background-color: #b9aa97;\n  opacity: 0.8;\n}\n\nhr {\n  height: 2px;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 8px;\n}\n\n.text-input-wp {\n  margin: 0px;\n  border: 1px solid #B9AA97;\n  height: 47px;\n  width: 297px;\n}\n\n.trio .text-input-wp {\n  width: 100%;\n}\n\n.solo .text-input-wp {\n  width: 100%;\n}\n\n.right .text-input-wp {\n  float: right;\n}\n\n.readonly input {\n  color: white;\n  background-color: #B9AA97;\n}\n\ntextarea.text-input-wp {\n  width: 100%;\n  height: 120px;\n}\n\n#bloc-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  width: 100%;\n}\n\n#bloc-bottom div {\n  width: 50%;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.datetime-text {\n  height: 47px;\n  width: 297px;\n}\n\nbutton.item-cover {\n  position: absolute;\n  width: 297px;\n  height: 47px;\n  top: inherit;\n  left: inherit;\n}\n\n.selector {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\n.selectorTrio {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\nion-select {\n  max-width: 100%;\n}\n\n.selector .select-placeholder {\n  color: white !important;\n}\n\n.input {\n  border: 1px solid #B9AA97;\n  width: 90%;\n  margin-bottom: 1.5vh;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.divider {\n  border-bottom: 1px solid #B9AA97;\n  margin-bottom: 1.5vh;\n}\n\n.add_icon {\n  font-size: 48px !important;\n  margin-bottom: 1.5vh;\n}\n\n.margin1_5 {\n  margin-bottom: 1.5vh;\n}\n\nion-datetime {\n  padding-left: 0;\n}\n\n.camera {\n  margin-right: 5%;\n}\n\n.photos_container {\n  margin-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.photos {\n  width: 65%;\n  margin-left: 5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.photos div {\n  width: 48%;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.icon_trash_photo {\n  font-size: 28px;\n  margin-left: 5%;\n}\n\n.green_input {\n  border: 1px solid #04B200;\n}\n\n.orange_input {\n  border: 1px solid #FFAB00;\n}\n\n.label_plein {\n  --background:#B9AA97;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm91dmVsbGUtZmljaGUvRDpcXFByb2plY3RzXFxyYW5kb19wbmV1cy9zcmNcXGFwcFxccGFnZXNcXG5vdXZlbGxlLWZpY2hlXFxub3V2ZWxsZS1maWNoZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdXZlbGxlLWZpY2hlL25vdXZlbGxlLWZpY2hlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUVFLFdBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRFBFO0VBQ0UsVUFBQTtBQ1NKOztBRE5BO0VBQ0UsdUJBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDU0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNRRjs7QURKQTtFQU1FLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0VGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBRE1BO0VBQ0UsdUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0FDSEY7O0FETUE7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm91dmVsbGUtZmljaGUvbm91dmVsbGUtZmljaGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XHJcbiAgcGFkZGluZzogNXB4IDQ0cHggNXB4IDQ0cHg7XHJcbn1cclxuXHJcbi5pdGVtLXdwe1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLml0ZW0taW5uZXJ7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5kYXRldGltZS13cCB7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XHJcbiAgcGFkZGluZzo4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxufVxyXG4uY29udGVudC13cCBoclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgIDE3MCwgMTUxKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6MnB4O1xyXG59XHJcbi5sYWJlbC1pb3Mge1xyXG4gIG1hcmdpbjogMTFweCA4cHggMTFweCA4cHg7XHJcbn1cclxuLnRleHQtaW5wdXQtd3Age1xyXG4gIG1hcmdpbjogIDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xyXG4gIGhlaWdodDogNDdweDtcclxuICB3aWR0aDogMjk3cHg7XHJcbn1cclxuLnRyaW8gLnRleHQtaW5wdXQtd3Age1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc29sbyAudGV4dC1pbnB1dC13cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJpZ2h0IC50ZXh0LWlucHV0LXdwIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJlYWRvbmx5IGlucHV0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5NztcclxufVxyXG50ZXh0YXJlYS50ZXh0LWlucHV0LXdwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbiNibG9jLWJvdHRvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDUwJVxyXG4gIH1cclxufVxyXG5jYW52YXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHdpZHRoOiAyOTdweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5pdGVtLWNvdmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjk3cHg7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHRvcDppbmhlcml0O1xyXG4gIGxlZnQ6aW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RvcntcclxuICAvL2NvbG9yOndoaXRlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5NztcclxuICAvL2JvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgLy9oZWlnaHQ6IDQ3cHg7XHJcbiAgLy93aWR0aDogMjk3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIC8vIG1hcmdpbjogMTNweCA4cHggMTNweCA4cHg7IFBFVVQgRVRSRSBBIFJFTUVUVFJFXHJcbn1cclxuLnNlbGVjdG9yVHJpb3tcclxuICB3aWR0aDogIDEwMCU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcclxuICAvL2hlaWdodDogNDdweDtcclxuICAvL2Rpc3BsYXk6ZmxleDtcclxuICAvL2Rpc3BsYXkgOiAtd2Via2l0LWZsZXhcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0b3IgLnNlbGVjdC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLmZ1bGx3aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0I5QUE5NztcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLmFkZF9pY29uIHtcclxuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxufVxyXG5cclxuLm1hcmdpbjFfNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41dmhcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYW1lcmEge1xyXG4gIG1hcmdpbi1yaWdodDogNSVcclxufVxyXG5cclxuLnBob3Rvc19jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5waG90b3Mge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBob3RvcyBkaXYge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uX3RyYXNoX3Bob3RvIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlXHJcbn1cclxuXHJcbi5ncmVlbl9pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0QjIwMDtcclxufVxyXG5cclxuLm9yYW5nZV9pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGQUIwMDtcclxufVxyXG5cclxuLmxhYmVsX3BsZWluIHtcclxuICAtLWJhY2tncm91bmQ6I0I5QUE5NztcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG4iLCIuZ3JpZCB7XG4gIHBhZGRpbmc6IDVweCA0NHB4IDVweCA0NHB4O1xufVxuXG4uaXRlbS13cCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtd3Age1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5Nztcbn1cblxuLmNvbnRlbnQtd3AgaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjlhYTk3O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbi5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDExcHggOHB4IDExcHggOHB4O1xufVxuXG4udGV4dC1pbnB1dC13cCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cblxuLnRyaW8gLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvbG8gLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJpZ2h0IC50ZXh0LWlucHV0LXdwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmVhZG9ubHkgaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG59XG5cbnRleHRhcmVhLnRleHQtaW5wdXQtd3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuI2Jsb2MtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNibG9jLWJvdHRvbSBkaXYge1xuICB3aWR0aDogNTAlO1xufVxuXG5jYW52YXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cblxuYnV0dG9uLml0ZW0tY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyOTdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0b3A6IGluaGVyaXQ7XG4gIGxlZnQ6IGluaGVyaXQ7XG59XG5cbi5zZWxlY3RvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0b3JUcmlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RvciAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uZnVsbHdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOUFBOTc7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uYWRkX2ljb24ge1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5tYXJnaW4xXzUge1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY2FtZXJhIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnBob3Rvc19jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ucGhvdG9zIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBob3RvcyBkaXYge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25fdHJhc2hfcGhvdG8ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmdyZWVuX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0QjIwMDtcbn1cblxuLm9yYW5nZV9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkFCMDA7XG59XG5cbi5sYWJlbF9wbGVpbiB7XG4gIC0tYmFja2dyb3VuZDojQjlBQTk3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.ts ***!
  \*************************************************************/
/*! exports provided: NouvelleFichePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouvelleFichePage", function() { return NouvelleFichePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_fiches_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fiches.service */ "./src/app/services/fiches.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/fiche-firebase.service */ "./src/app/services/fiche-firebase.service.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");












let NouvelleFichePage = class NouvelleFichePage {
    constructor(formBuilder, ficheService, userService, router, events, alertCtrl, camera, base64, utilsService, actionSheetController, loadingCtrl, ficheFirebaseService) {
        this.formBuilder = formBuilder;
        this.ficheService = ficheService;
        this.userService = userService;
        this.router = router;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.base64 = base64;
        this.utilsService = utilsService;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.ficheFirebaseService = ficheFirebaseService;
        events.subscribe('ficheEnvoyed', () => {
            this.router.navigate(['fiche']);
        });
    }
    ngOnInit() {
        this.ficheForm = this.formBuilder.group({
            arrive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            depart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            temps: [''],
            positionRoue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomClient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nomAdresse: [''],
            dimension: ['0'],
            dimensionLibre: [''],
            nvh: [''],
            kmCompteur: [''],
            demontage: [''],
            depose: [''],
            reparation: [''],
            chaair: [''],
            retaillage: [''],
            emplatre: this.formBuilder.group({
                nom: '',
                quantite: ''
            }),
            forfait: [''],
            observation: [''],
            numeroPneu: [''],
            pression: [''],
            serrage: [''],
            fournitures: this.formBuilder.array([])
        });
        this.photos = [];
        this.userService.getState().then(autosend => {
            this.autosend = autosend;
        });
        this.initializeItems();
    }
    calculTime() {
        this.ficheForm.controls.temps.setValue(this.utilsService.calculTime(this.ficheForm));
    }
    /* AUTOCOMPLETION FOURNITURES OLD WAY START*/
    insertInput(fourniture, i) {
        // insert le résultat de la recherche dans le bon champ
        this.ficheForm.controls.fournitures.controls[i].patchValue({
            nom: fourniture
        });
        this.fournituresList = [];
    }
    getItems(ev, i) {
        this.numberForm = i;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.fournituresList = this.fournituresList.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.fournituresList = this.fournituresList.slice(0, 3);
        }
        else {
            this.fournituresList = [];
        }
    }
    /*AUTO COMPLETION FOURNITURE OLD WAY END*/
    createItem() {
        return this.formBuilder.group({
            nom: '',
            quantite: '1'
        });
    }
    addFourniture() {
        const control = this.ficheForm.controls.fournitures;
        control.push(this.createItem());
    }
    deleteFourni(i) {
        const control = this.ficheForm.controls.fournitures;
        control.removeAt(i);
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Enregistrement de la fiche en cours...'
            });
            yield loading.present();
            this.ficheForm.value.signatureClient = this.signatureClient.getSignature(); // recupere les coordoonnees
            this.ficheForm.value.signatureResponsable = this.signatureResponsable.getSignature();
            this.ficheForm.value.aEnvoyer = true;
            this.ficheForm.value.envoye = false;
            this.ficheForm.value.vue = true;
            this.ficheForm.value.modifieParBureau = false;
            this.ficheForm.value.photos = this.photos;
            this.ficheForm.value.emplatre.nom = this.ficheForm.value.emplatre.nom || 'Emplâtre'; // on met le nom emplatre par default
            // this.ficheService.create(this.ficheForm.value, (value) => {
            //     if (value) {
            //         console.log(value)
            //         this.callback();
            //     }
            // });
            const fiche = this.ficheForm.value;
            fiche.userId = localStorage.getItem('userId');
            this.ficheFirebaseService.addFiche(fiche)
                .then(f => {
                fiche.id = f.key;
                this.ficheFirebaseService.updateFiche(fiche)
                    .then(() => {
                    this.callback(fiche);
                    this.ficheForm.reset();
                    loading.dismiss();
                });
            })
                .catch(err => {
                loading.dismiss();
                this.presentAlert();
            });
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Un probleme est survenu lors de la création de la fiche.',
                buttons: [
                    {
                        text: 'ok',
                    }
                ],
                mode: 'ios'
            });
            yield confirm.present();
        });
    }
    callback(fiche) {
        if (this.autosend) {
            this.ficheService.sendFiche(fiche); // fait direct un setroot avec la reception de l event "ficheenvoyed"
        }
        else {
            this.router.navigate(['fiche']);
        }
    }
    clear(signature) {
        if (signature === 'client') {
            this.signatureClient.signaturePad.clear();
        }
        else if (signature === 'responsable') {
            this.signatureResponsable.signaturePad.clear();
        }
    }
    initializeItems() {
        this.fournituresList = [
            'Retaillage',
            'Equilibrage petit PL',
            'Equilibrage grand PL',
            'Rallonge 1197',
            'Rallonge R210 (souple)',
            'Rallonge coudee W353',
            'Rallonge V615 (rigide)',
            'Gonflage mousse polyurethane (kg)',
            'Produit anti-crevaison',
            'Jante neuve 385/65 x 22.5 Deport 0',
            'Jante neuve 385/65 x 22.5 Deport 120',
            'Jante neuve 315/80 x 22.5',
            'Jante neuve 315/70 x 22.5',
            'Jante neuve 445/65 x 22.5',
            'Jante neuve 13 x 22.5',
            'Jante neuve 12 x 22.5',
            'Jante neuve 11 x 22.5',
            'Joint tyran',
            'Joint sulla',
            'Joint heupo',
            'Chambre à air 5/70 x 12',
            'Chambre à air 11.5/80 x 15.3',
            'Chambre à air 15.5/80 x 24',
            'Chambre à air 12.5/80 x 18',
            'Chambre à air 405/70 x 20',
            'Chambre à air 28.9 x 15',
            'Chambre à air 23.1 x 26',
            'Chambre à air 10 x 16.5',
            'Chambre à air 205 x 15',
            'Chambre à air 12 x 16.5',
            'Chambre à air 600 x 9',
            'Chambre à air 700 x 12',
            'Chambre à air 10.5/80 x 18',
            'Chambre à air 18 x 19.5',
            'Chambre à air 12.5 x 20',
            'Chambre à air 1000 x 20',
            'Chambre à air 1200 x 20',
            'Chambre à air 14.5 x 20',
            'Chambre à air 600/40 x 22.5',
            'Chambre à air 16/70 x 20',
            'Rustine PN02',
            'Rustine PN03',
            'Rustine PN04',
            'Rustine PN05',
            'Rustine PN06',
            'Valve Alcoa jante alu',
            'Valve TR 413',
            'Valve TR 414 L',
            'Valve TR 415',
            'Valva 1294',
            'Valve GC',
            'Vave 1486',
            'Valve GSW35',
            'Valve 2123',
            'Valve 4441',
            'Valve 1151',
        ];
    }
    uploadImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [
                    {
                        text: 'Ouvrir l’appareil photo',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        },
                    },
                    {
                        text: 'Ouvrir la pellicule',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        },
                    },
                    {
                        text: 'Annuler',
                        role: 'cancel',
                    },
                ],
                cssClass: 'actionSheet',
                mode: 'ios'
            });
            yield actionSheet.present();
        });
    }
    pickImage(source) {
        const options = {
            quality: 100,
            sourceType: source,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            const date = new Date();
            const name = 'image-' + date.getTime();
            this.photos.push({
                nom: name,
                data: 'data:image/*;base64,' + imageData
            });
        })
            .catch(e => console.log(e));
    }
    deletePhoto(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Supprimer cette pièce-jointe ?',
                message: 'Voulez vous vraiment procéder à la suppression de cette pièce jointe? Attention cette action est définitive.',
                buttons: [
                    {
                        text: 'Valider',
                        handler: () => {
                            this.photos.splice(i, 1);
                        }
                    },
                    {
                        text: 'Annuler'
                    }
                ],
                mode: 'ios'
            });
            yield confirm.present();
        });
    }
};
NouvelleFichePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_fiches_service__WEBPACK_IMPORTED_MODULE_3__["FicheService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__["Base64"] },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_8__["FicheFirebaseService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureClient')
], NouvelleFichePage.prototype, "signatureClient", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signatureResponsable')
], NouvelleFichePage.prototype, "signatureResponsable", void 0);
NouvelleFichePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nouvelle-fiche',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nouvelle-fiche.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nouvelle-fiche.page.scss */ "./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.scss")).default]
    })
], NouvelleFichePage);



/***/ })

}]);
//# sourceMappingURL=pages-nouvelle-fiche-nouvelle-fiche-module-es2015.js.map