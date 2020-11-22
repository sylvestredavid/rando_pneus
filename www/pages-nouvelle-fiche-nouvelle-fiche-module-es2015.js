(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nouvelle-fiche-nouvelle-fiche-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nouvelle-fiche/nouvelle-fiche.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button class=\"menu_button\"></ion-menu-button>\n        </ion-buttons>\n        <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"ficheForm\" (ngSubmit)=\"save()\" id=\"form\">\n\n\n        <ion-list mode=\"ios\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('arrive').value ? 'green_input' : 'orange_input'\">\n                            <ion-datetime tappable mode=\"ios\" (ionChange)=\"calculTime()\" formControlName=\"arrive\"\n                                          placeholder=\"Heure d'arrivée chez le client\"\n                                          cancelText=\"Annuler\" doneText=\"Valider\" displayFormat=\"HH:mm\"\n                                          pickerFormat=\"HH:mm\"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depart').value ? 'green_input' : 'orange_input'\">\n                            <ion-datetime mode=\"ios\" formControlName=\"depart\" (ionChange)=\"calculTime()\"\n                                          placeholder=\"Heure de départ\" cancelText=\"Annuler\"\n                                          doneText=\"Valider\" displayFormat=\"HH:mm\" pickerFormat=\"HH:mm\"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('temps').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"temps\" type=\"text\"\n                                       placeholder=\"Temps passé\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('positionRoue').value ? 'green_input' : 'orange_input'\">\n                            <ion-input mode=\"ios\" formControlName=\"positionRoue\" class=\"right\" type=\"text\"\n                                       placeholder=\"Position de la roue\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomClient').value ? 'green_input' : 'orange_input'\">\n                            <ion-input mode=\"ios\" formControlName=\"nomClient\" class=\"solo\" type=\"text\"\n                                       placeholder=\"Nom client\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <div class=\"divider\"></div>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nomAdresse').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"nomAdresse\" class=\"solo\" type=\"text\"\n                                       placeholder=\"Nom et adresse\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimension').value ? 'green_input' : ''\">\n\n                            <ion-select class=\"selectorTrio  trio\" formControlName=\"dimension\" placeholder=\"Dimension\">\n                                <ion-select-option value=\"0\">Aucune</ion-select-option>\n                                <ion-select-option value=\"12 x 22.5 AM09 HANKOOK\">pneu 12 x 22.5 AM09 HANKOOK\n                                </ion-select-option>\n                                <ion-select-option value=\"13 x 22.5 AM09 HANKOOK\">pneu 13 x 22.5 AM09 HANKOOK\n                                </ion-select-option>\n                                <ion-select-option value=\"12 x 22.5 DM09 HANKOOK\">pneu 12 x 22.5 DM09 HANKOOK\n                                </ion-select-option>\n                                <ion-select-option value=\"13 x 22.5 DM09 HANKOOK\">pneu 13 x 22.5 DM09 HANKOOK\n                                </ion-select-option>\n                                <ion-select-option value=\"12 x 22.5 RECHAPE\">pneu 12 x 22.5 RECHAPE</ion-select-option>\n                                <ion-select-option value=\"10 x 16.5 NHS\">pneu 10 x 16.5 NHS</ion-select-option>\n                                <ion-select-option value=\"385/65 x 22.5 TM15 HANKOOK\">pneu 385/65 x 22.5 TM15 HANKOOK\n                                </ion-select-option>\n                                <ion-select-option value=\"385/65 x 22.5 HT3 CONTINENTAL\">pneu 385/65 x 22.5 HT3\n                                    CONTINENTAL\n                                </ion-select-option>\n                                <ion-select-option value=\"315/80 x 22.5 HS3 CONTINENTAL\">pneu 315/80 x 22.5 HS3\n                                    CONTINENTAL\n                                </ion-select-option>\n                                <ion-select-option value=\"315/70 x 22.5 HS3 CONTINENTAL\">pneu 315/70 x 22.5 HS3\n                                    CONTINENTAL\n                                </ion-select-option>\n                                <ion-select-option value=\"155 x 13 KUHMO\">pneu 155 x 13 KUHMO</ion-select-option>\n                                <ion-select-option value=\"195/75 x 16 RA18 HANKOOK\">pneu 195/75 x 16 RA18 HANKOOK\n                                </ion-select-option>\n\n                            </ion-select>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('dimensionLibre').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"dimensionLibre\" class=\"trio\" type=\"text\"\n                                       placeholder=\"Dimension\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('nvh').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"nvh\" class=\"trio\" type=\"text\"\n                                       placeholder=\"NVH\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('kmCompteur').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"kmCompteur\" class=\"trio\" type=\"text\"\n                                       placeholder=\"Kilomètres compteur\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <div class=\"divider\"></div>\n\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                                       value=\"Démontage/remontage\"></ion-input>\n\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('demontage').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"demontage\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\"></ion-input>\n\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" type=\"text\" class=\"readonly\" readonly value=\"Dépose/repose\">\n                            </ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('depose').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"depose\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\">\n                            </ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-row class=\"ion-justify-content-around\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                                       value=\"Réparation/Tubeless\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('reparation').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"reparation\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-row class=\"ion-justify-content-around\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                                       value=\"Réparation CH.AAIR\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('chaair').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"chaair\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-around\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly value=\"Retaillage\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('retaillage').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"retaillage\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <div formGroupName=\"emplatre\">\n                    <ion-row class=\"ion-justify-content-between\">\n                        <ion-col>\n                            <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('nom').value ? 'label_plein' : ''\">\n                                <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Emplâtre\">\n                                    <ion-select-option value=\"Emplâtre 110 TL\">Emplâtre 110 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 120 TL\">Emplâtre 120 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 125 TL\">Emplâtre 125 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 135 TL\">Emplâtre 135 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 140 TL\">Emplâtre 140 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 142 TL\">Emplâtre 142 TL</ion-select-option>\n                                    <ion-select-option value=\"Emplâtre 145 TL\">Emplâtre 145 TL</ion-select-option>\n                                    <!--  <ion-select-option value=\"G159\">Emplâtre 146 TL</ion-select-option>\n                                    <ion-select-option value=\"G169\">Emplâtre PN02L</ion-select-option>\n                                    <ion-select-option value=\"G170\">Emplâtre PN03</ion-select-option>\n                                    <ion-select-option value=\"G171\">Emplâtre PN04</ion-select-option>\n                                    <ion-select-option value=\"G172\">Emplâtre PN05</ion-select-option>\n                                    <ion-select-option value=\"G173\">Emplâtre PN06</ion-select-option> -->\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col>\n                            <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('emplatre').get('quantite').value ? 'green_input' : ''\">\n                                <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\n                                           placeholder=\"Quantité\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'label_plein' : ''\">\n                            <ion-input mode=\"ios\" class=\"readonly\" type=\"text\" readonly\n                                       value=\"Forfait véhiculé\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('forfait').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" formControlName=\"forfait\" class=\"right\" type=\"text\"\n                                       placeholder=\"Quantité\" value=\"1\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <div formArrayName=\"fournitures\">\n                    <ng-container *ngFor=\"let fourniture of ficheForm.get('fournitures')['controls']; let i=index\"\n                                  formGroupName=\"{{i}}\">\n\n                        <ion-row class=\"ion-justify-content-between\">\n                            <ion-col>\n\n                                <ion-item-sliding>\n                                    <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('nom').value ? 'label_plein' : ''\">\n                                        <ion-select class=\"selector\" formControlName=\"nom\" placeholder=\"Fourniture\">\n                                            <ion-select-option *ngFor=\"let fourni of fournituresList\"\n                                                               [value]=\"fourni\">{{fourni}}</ion-select-option>\n                                        </ion-select>\n                                    </ion-item>\n                                    <ion-item-options side=\"start\">\n                                        <ion-button color=\"danger\" (click)=\"deleteFourni(i)\">\n                                            <ion-icon name=\"trash\"></ion-icon>\n                                            Supprimer\n                                        </ion-button>\n                                    </ion-item-options>\n                                </ion-item-sliding>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"fourniture.get('quantite').value ? 'green_input' : ''\">\n                                    <ion-input mode=\"ios\" formControlName=\"quantite\" class=\"right\" type=\"text\"\n                                               placeholder=\"Quantité\"></ion-input>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ng-container>\n                </div>\n\n                <ion-icon class=\"add_icon\" name=\"add-circle-outline\" tappable (click)=\"addFourniture()\"\n                          color=\"secondary\"\n                          style=\"font-size:5rem;\"></ion-icon>\n\n\n                <div class=\"divider\"></div>\n\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('observation').value ? 'green_input' : ''\">\n                            <ion-textarea class=\"textarea\" formControlName=\"observation\" placeholder=\"Observation\"\n                                          mode=\"ios\">\n                            </ion-textarea>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item class=\"input fullwidth\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('numeroPneu').value ? 'green_input' : ''\">\n                            <!--<ion-label stacked>N° Pneu monté</ion-label>-->\n                            <ion-input mode=\"ios\" formControlName=\"numeroPneu\" class=\"solo\" type=\"text\"\n                                       placeholder=\"N° pneu monté\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-between\">\n                    <ion-col>\n                        <ion-item class=\"input\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('pression').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" type=\"text\" formControlName=\"pression\"\n                                       placeholder=\"Contrôle pression\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item class=\"input ion-float-right\" lines=\"none\" mode=\"ios\" [ngClass]=\"ficheForm.get('serrage').value ? 'green_input' : ''\">\n                            <ion-input mode=\"ios\" type=\"text\" formControlName=\"serrage\" class=\"right\"\n                                       placeholder=\"Contrôle serrage\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-item mode=\"ios\" lines=\"none\" class=\"margin1_5\">\n                    Prière de resserer les roues après 25Km, 100Km et ensuite périodiquement\n                </ion-item>\n                <ion-item mode=\"ios\" lines=\"none\" class=\"photos_container\">\n                    <div class=\"w_30\">\n                        <ion-button mode=\"ios\" size=\"full\" (click)=\"uploadImage()\">\n                            <ion-icon name=\"camera-sharp\" class=\"camera\"></ion-icon>\n                            Ajouter une photo\n                        </ion-button>\n                    </div>\n                    <div class=\"photos\">\n                        <div *ngFor=\"let photo of photos; let i = index\">\n                            <p>{{photo.nom}}</p>\n                            <ion-icon name=\"trash-sharp\" class=\"icon_trash_photo\" color=\"danger\" tappable\n                                      (click)=\"deletePhoto(i)\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-item>\n                <ion-item mode=\"ios\" lines=\"none\">\n                    <div id=\"bloc-bottom\">\n\n                        <div>Signature responsable :\n                            <br>\n                            <br>\n                            <app-signature-responsable #signatureResponsable>\n                            </app-signature-responsable>\n                            <br>\n\n                            <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('responsable')\">Reset\n                            </ion-button>\n                        </div>\n                        <div>Signature client :\n                            <br>\n                            <br>\n                            <app-signature-client #signatureClient>\n                            </app-signature-client>\n                            <br>\n                            <ion-button mode=\"ios\" size=\"large\" type=\"button\" (click)=\"clear('client')\">Reset\n                            </ion-button>\n                        </div>\n                    </div>\n                </ion-item>\n                <ion-item mode=\"ios\" lines=\"none\">\n                    <div class=\"w_30\">\n                        <ion-button mode=\"ios\" size=\"full\" type=\"submit\"\n                                    [disabled]=\"!ficheForm.valid\">{{autosend ? \"Envoyer\" : \"Enregistrer\"}}\n                        </ion-button>\n                    </div>\n\n                </ion-item>\n\n            </ion-grid>\n        </ion-list>\n    </form>\n    <div *ngIf=\"msgErreur\">{{msgErreur}}</div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".grid {\n  padding: 5px 44px 5px 44px;\n}\n\n.item-wp {\n  padding-left: 0px;\n  margin-top: 15px;\n}\n\n.item-inner {\n  padding-right: 0px !important;\n}\n\n.datetime-wp {\n  padding: 0 !important;\n}\n\n.datetime-wp .datetime-text {\n  padding: 8px;\n  border: 1px solid #B9AA97;\n}\n\n.content-wp hr {\n  background-color: #b9aa97;\n  opacity: 0.8;\n}\n\nhr {\n  height: 2px;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 8px;\n}\n\n.text-input-wp {\n  margin: 0px;\n  border: 1px solid #B9AA97;\n  height: 47px;\n  width: 297px;\n}\n\n.trio .text-input-wp {\n  width: 100%;\n}\n\n.solo .text-input-wp {\n  width: 100%;\n}\n\n.right .text-input-wp {\n  float: right;\n}\n\n.readonly input {\n  color: white;\n  background-color: #B9AA97;\n}\n\ntextarea.text-input-wp {\n  width: 100%;\n  height: 120px;\n}\n\n#bloc-bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  width: 100%;\n}\n\n#bloc-bottom div {\n  width: 50%;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.datetime-text {\n  height: 47px;\n  width: 297px;\n}\n\nbutton.item-cover {\n  position: absolute;\n  width: 297px;\n  height: 47px;\n  top: inherit;\n  left: inherit;\n}\n\n.selector {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\n.selectorTrio {\n  width: 100%;\n  padding: 0 !important;\n  padding-right: 4px !important;\n}\n\nion-select {\n  max-width: 100%;\n}\n\n.selector .select-placeholder {\n  color: white !important;\n}\n\n.input {\n  border: 1px solid #B9AA97;\n  width: 90%;\n  margin-bottom: 1.5vh;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.divider {\n  border-bottom: 1px solid #B9AA97;\n  margin-bottom: 1.5vh;\n}\n\n.add_icon {\n  font-size: 48px !important;\n  margin-bottom: 1.5vh;\n}\n\n.margin1_5 {\n  margin-bottom: 1.5vh;\n}\n\nion-datetime {\n  padding-left: 0;\n}\n\n.camera {\n  margin-right: 5%;\n}\n\n.photos_container {\n  margin-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.photos {\n  width: 65%;\n  margin-left: 5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.photos div {\n  width: 48%;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.icon_trash_photo {\n  font-size: 28px;\n  margin-left: 5%;\n}\n\n.green_input {\n  border: 1px solid #04B200;\n}\n\n.orange_input {\n  border: 1px solid #FFAB00;\n}\n\n.label_plein {\n  --background:#B9AA97;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvbm91dmVsbGUtZmljaGUvbm91dmVsbGUtZmljaGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3V2ZWxsZS1maWNoZS9ub3V2ZWxsZS1maWNoZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFFRSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNRRjs7QURQRTtFQUNFLFVBQUE7QUNTSjs7QUROQTtFQUNFLHVCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUUY7O0FESkE7RUFNRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURNQTtFQUNFLHVCQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdXZlbGxlLWZpY2hlL25vdXZlbGxlLWZpY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xuICBwYWRkaW5nOiA1cHggNDRweCA1cHggNDRweDtcbn1cblxuLml0ZW0td3B7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLml0ZW0taW5uZXJ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG5cblxuLmRhdGV0aW1lLXdwIHtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCAuZGF0ZXRpbWUtdGV4dCB7XG4gIHBhZGRpbmc6OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xufVxuLmNvbnRlbnQtd3AgaHJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgIDE3MCwgMTUxKTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5ociB7XG4gIGhlaWdodDoycHg7XG59XG4ubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDhweCAxMXB4IDhweDtcbn1cbi50ZXh0LWlucHV0LXdwIHtcbiAgbWFyZ2luOiAgMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiAyOTdweDtcbn1cbi50cmlvIC50ZXh0LWlucHV0LXdwIHtcblxuICB3aWR0aDogMTAwJTtcbn1cbi5zb2xvIC50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmlnaHQgLnRleHQtaW5wdXQtd3Age1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmVhZG9ubHkgaW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG59XG50ZXh0YXJlYS50ZXh0LWlucHV0LXdwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG4jYmxvYy1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXYge1xuICAgIHdpZHRoOiA1MCVcbiAgfVxufVxuY2FudmFzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogMjk3cHg7XG59XG5cblxuYnV0dG9uLml0ZW0tY292ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI5N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRvcDppbmhlcml0O1xuICBsZWZ0OmluaGVyaXQ7XG59XG5cblxuLnNlbGVjdG9ye1xuICAvL2NvbG9yOndoaXRlO1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNCOUFBOTc7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgLy9oZWlnaHQ6IDQ3cHg7XG4gIC8vd2lkdGg6IDI5N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luOiAxM3B4IDhweCAxM3B4IDhweDsgUEVVVCBFVFJFIEEgUkVNRVRUUkVcbn1cbi5zZWxlY3RvclRyaW97XG4gIHdpZHRoOiAgMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICAvL2hlaWdodDogNDdweDtcbiAgLy9kaXNwbGF5OmZsZXg7XG4gIC8vZGlzcGxheSA6IC13ZWJraXQtZmxleFxufVxuXG5pb24tc2VsZWN0e1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cblxuLnNlbGVjdG9yIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uZnVsbHdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOUFBOTc7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG4uYWRkX2ljb24ge1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5tYXJnaW4xXzUge1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aFxufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jYW1lcmEge1xuICBtYXJnaW4tcmlnaHQ6IDUlXG59XG5cbi5waG90b3NfY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnBob3RvcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5waG90b3MgZGl2IHtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uX3RyYXNoX3Bob3RvIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tbGVmdDogNSVcbn1cblxuLmdyZWVuX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0QjIwMDtcbn1cblxuLm9yYW5nZV9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkFCMDA7XG59XG5cbi5sYWJlbF9wbGVpbiB7XG4gIC0tYmFja2dyb3VuZDojQjlBQTk3O1xuICBjb2xvcjogd2hpdGVcbn1cbiIsIi5ncmlkIHtcbiAgcGFkZGluZzogNXB4IDQ0cHggNXB4IDQ0cHg7XG59XG5cbi5pdGVtLXdwIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS13cCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXdwIC5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xufVxuXG4uY29udGVudC13cCBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWFhOTc7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCA4cHggMTFweCA4cHg7XG59XG5cbi50ZXh0LWlucHV0LXdwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDI5N3B4O1xufVxuXG4udHJpbyAudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc29sbyAudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmlnaHQgLnRleHQtaW5wdXQtd3Age1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZWFkb25seSBpbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I5QUE5Nztcbn1cblxudGV4dGFyZWEudGV4dC1pbnB1dC13cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4jYmxvYy1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2Jsb2MtYm90dG9tIGRpdiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIGhlaWdodDogNDdweDtcbiAgd2lkdGg6IDI5N3B4O1xufVxuXG5idXR0b24uaXRlbS1jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI5N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRvcDogaW5oZXJpdDtcbiAgbGVmdDogaW5oZXJpdDtcbn1cblxuLnNlbGVjdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RvclRyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNlbGVjdG9yIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5mdWxsd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0I5QUE5NztcbiAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG59XG5cbi5hZGRfaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbn1cblxuLm1hcmdpbjFfNSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jYW1lcmEge1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ucGhvdG9zX2NvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5waG90b3Mge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGhvdG9zIGRpdiB7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbl90cmFzaF9waG90byB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZ3JlZW5faW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDRCMjAwO1xufVxuXG4ub3JhbmdlX2lucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGQUIwMDtcbn1cblxuLmxhYmVsX3BsZWluIHtcbiAgLS1iYWNrZ3JvdW5kOiNCOUFBOTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

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