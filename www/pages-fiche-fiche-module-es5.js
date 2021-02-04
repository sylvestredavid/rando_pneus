function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fiche-fiche-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fiche/fiche.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fiche/fiche.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFicheFichePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button class=\"menu_button\"></ion-menu-button>\n        </ion-buttons>\n        <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div>\n        <div class=\"file\" tappable *ngFor=\"let fiche of fiches\" (click)=\"detailPage(fiche.id)\">\n          <div class=\"name\">\n              <div class=\"round round_success\" *ngIf=\"!fiche.vue\"></div>\n              <div class=\"round round_warning\" *ngIf=\"fiche.vue && fiche.modifieParBureau\"></div>\n              <div class=\"round\" *ngIf=\"fiche.vue && !fiche.modifieParBureau\"></div>\n            <div class=\"relative\">\n                <ion-icon name=\"document-text-sharp\" class=\"icon\" color=\"primary\">\n                </ion-icon>\n<!--                <div class=\"round round_positioned\" *ngIf=\"fiche.envoye\"></div>-->\n            </div>\n            {{fiche.nomClient}}\n          </div>\n            <ion-icon name=\"pencil-sharp\" class=\"icon\" color=\"primary\" tappable\n                      (click)=\"edit($event, fiche.id)\"></ion-icon>\n            <ion-icon name=\"trash-sharp\" class=\"icon\" color=\"primary\" tappable\n                      (click)=\"delete($event, fiche.id)\"></ion-icon>\n            <ion-icon name=\"send-sharp\" class=\"icon\" [color]=\"fiche.envoye? 'success' : 'primary'\" tappable (click)=\"send($event, fiche)\"></ion-icon>\n        </div>\n        <ion-item *ngIf=\"fiches?.length == 0\">Vous n'avez pas de fiche\n        </ion-item>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/fiche/fiche-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/fiche/fiche-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FichePageRoutingModule */

  /***/
  function srcAppPagesFicheFicheRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FichePageRoutingModule", function () {
      return FichePageRoutingModule;
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


    var _fiche_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fiche.page */
    "./src/app/pages/fiche/fiche.page.ts");

    var routes = [{
      path: '',
      component: _fiche_page__WEBPACK_IMPORTED_MODULE_3__["FichePage"]
    }];

    var FichePageRoutingModule = function FichePageRoutingModule() {
      _classCallCheck(this, FichePageRoutingModule);
    };

    FichePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FichePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fiche/fiche.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/fiche/fiche.module.ts ***!
    \*********************************************/

  /*! exports provided: FichePageModule */

  /***/
  function srcAppPagesFicheFicheModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FichePageModule", function () {
      return FichePageModule;
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


    var _fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fiche-routing.module */
    "./src/app/pages/fiche/fiche-routing.module.ts");
    /* harmony import */


    var _fiche_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fiche.page */
    "./src/app/pages/fiche/fiche.page.ts");

    var FichePageModule = function FichePageModule() {
      _classCallCheck(this, FichePageModule);
    };

    FichePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fiche_routing_module__WEBPACK_IMPORTED_MODULE_5__["FichePageRoutingModule"]],
      declarations: [_fiche_page__WEBPACK_IMPORTED_MODULE_6__["FichePage"]]
    })], FichePageModule);
    /***/
  },

  /***/
  "./src/app/pages/fiche/fiche.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/fiche/fiche.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFicheFichePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".file {\n  height: 90px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 30px;\n  border-bottom: 1px solid #B9AA97;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\n.relative {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.relative ion-icon {\n  font-size: 36px;\n  margin-right: 24px;\n}\n\n.round {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin-right: 1.5vw;\n}\n\n.round_positioned {\n  position: absolute;\n  top: 0;\n  right: 40%;\n  margin: 0;\n  background: #04B200;\n}\n\n.round_success {\n  background: #04B200;\n}\n\n.round_warning {\n  background: #FFAB00;\n}\n\n.name {\n  width: 75%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvZmljaGUvZmljaGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWNoZS9maWNoZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpY2hlL2ZpY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZpbGV7XG4gIGhlaWdodDogOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCOUFBOTdcbn1cblxuaW9uLWljb257XG4gIGZvbnQtc2l6ZTozMHB4O1xufVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tcmlnaHQ6MjRweDtcbiAgfVxufVxuXG4ucm91bmQge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMS41dnc7XG59XG5cbi5yb3VuZF9wb3NpdGlvbmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA0MCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzA0QjIwMDtcbn1cblxuLnJvdW5kX3N1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMDRCMjAwO1xufVxuXG4ucm91bmRfd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNGRkFCMDA7XG59XG5cbi5uYW1lIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLmZpbGUge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQjlBQTk3O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucmVsYXRpdmUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuLnJvdW5kIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xufVxuXG4ucm91bmRfcG9zaXRpb25lZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMwNEIyMDA7XG59XG5cbi5yb3VuZF9zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzA0QjIwMDtcbn1cblxuLnJvdW5kX3dhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjRkZBQjAwO1xufVxuXG4ubmFtZSB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/fiche/fiche.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/fiche/fiche.page.ts ***!
    \*******************************************/

  /*! exports provided: FichePage */

  /***/
  function srcAppPagesFicheFichePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FichePage", function () {
      return FichePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_fiches_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/fiches.service */
    "./src/app/services/fiches.service.ts");
    /* harmony import */


    var _services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/events */
    "./src/app/services/events.ts");
    /* harmony import */


    var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/fiche-firebase.service */
    "./src/app/services/fiche-firebase.service.ts");
    /* harmony import */


    var ng_lz_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lz-string */
    "./node_modules/ng-lz-string/ng-lz-string.umd.js");
    /* harmony import */


    var ng_lz_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_7__);

    var FichePage = /*#__PURE__*/function () {
      function FichePage(alertCtrl, router, ficheService, events, loadingCtrl, ficheFirebaseService, lz) {
        _classCallCheck(this, FichePage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this.ficheService = ficheService;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.ficheFirebaseService = ficheFirebaseService;
        this.lz = lz;
        events.destroy('ficheEnvoyed');
      }

      _createClass(FichePage, [{
        key: "getFiches",
        value: function getFiches() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Récupération des fiches en cours...'
                    });

                  case 2:
                    loading = _context.sent;

                    if (this.fiches) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 6;
                    return loading.present();

                  case 6:
                    this.sub = this.ficheFirebaseService.fiches$.subscribe(function (fichesF) {
                      console.log(fichesF.length);
                      _this.fiches = fichesF.filter(function (f) {
                        return !f.archivee;
                      });

                      _this.fiches.reverse();

                      loading.dismiss();
                    }); // this.fiches = MOCK_FICHES

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFiches();
        }
      }, {
        key: "detailPage",
        value: function detailPage(id) {
          this.router.navigate(['edit-fiche/' + id]);
        }
      }, {
        key: "delete",
        value: function _delete(event, id) {
          event.stopPropagation();
          this.showConfirm(id);
        }
      }, {
        key: "edit",
        value: function edit(event, id) {
          event.stopPropagation();
          this.router.navigate(['edit-fiche/' + id]);
        }
      }, {
        key: "send",
        value: function send(event, fiche) {
          event.stopPropagation();
          this.ficheService.sendFiche(fiche);
        }
      }, {
        key: "showConfirm",
        value: function showConfirm(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirmation',
                      message: 'Voulez-vous vraiment supprimer cette fiche ?',
                      buttons: [{
                        text: 'Oui',
                        handler: function handler() {
                          var ficheToArchivate = _this2.fiches.find(function (f) {
                            return f.id === id;
                          });

                          ficheToArchivate.archivee = true;

                          _this2.ficheFirebaseService.updateFiche(ficheToArchivate);
                        }
                      }, {
                        text: 'Annuler',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    confirm = _context2.sent;
                    _context2.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          for (var i = 0; i < this.fiches.length; i++) {
            if (this.fiches[i].id === id) {
              this.fiches.splice(i, 1);
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return FichePage;
    }();

    FichePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_fiches_service__WEBPACK_IMPORTED_MODULE_4__["FicheService"]
      }, {
        type: _services_events__WEBPACK_IMPORTED_MODULE_5__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FicheFirebaseService"]
      }, {
        type: ng_lz_string__WEBPACK_IMPORTED_MODULE_7__["LZStringService"]
      }];
    };

    FichePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fiche',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fiche.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fiche/fiche.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./fiche.page.scss */
      "./src/app/pages/fiche/fiche.page.scss"))["default"]]
    })], FichePage);
    /***/
  },

  /***/
  "./src/app/services/events.ts":
  /*!************************************!*\
    !*** ./src/app/services/events.ts ***!
    \************************************/

  /*! exports provided: Events */

  /***/
  function srcAppServicesEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Events", function () {
      return Events;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
     *
     * @author Shashank Agrawal
     */


    var Events = /*#__PURE__*/function () {
      function Events() {
        _classCallCheck(this, Events);

        this.channels = {};
      }
      /**
       * Subscribe to a topic and provide a single handler/observer.
       * @param topic The name of the topic to subscribe to.
       * @param observer The observer or callback function to listen when changes are published.
       *
       * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
       */


      _createClass(Events, [{
        key: "subscribe",
        value: function subscribe(topic, observer) {
          if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          }

          return this.channels[topic].subscribe(observer);
        }
        /**
         * Publish some data to the subscribers of the given topic.
         * @param topic The name of the topic to emit data to.
         * @param data data in any format to pass on.
         */

      }, {
        key: "publish",
        value: function publish(topic, data) {
          var subject = this.channels[topic];

          if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
          }

          subject.next(data);
        }
        /**
         * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
         * destroy the observable of the topic using this method.
         * @param topic The name of the topic to destroy.
         */

      }, {
        key: "destroy",
        value: function destroy(topic) {
          var subject = this.channels[topic];

          if (!subject) {
            return;
          }

          subject.complete();
          delete this.channels[topic];
        }
      }]);

      return Events;
    }();

    Events = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Events);
    /***/
  }
}]);
//# sourceMappingURL=pages-fiche-fiche-module-es5.js.map