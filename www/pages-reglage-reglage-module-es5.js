function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reglage-reglage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reglage/reglage.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reglage/reglage.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReglageReglagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\n    </ion-buttons>\n     <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"content\" >\n  <div class=\"options_container\">\n    <div class=\"options\" (click)=\"deconnexion()\">\n      <p class=\"label\">Déconnexion</p>\n      <ion-icon name=\"close-sharp\"></ion-icon>\n    </div>\n    <div  class=\"options\">\n      <ion-label class=\"label\">\n        Envoyer la fiche à l'enregistrement\n      </ion-label>\n      <ion-toggle mode=\"ios\" [checked]=\"autosend\" (ionChange)=\"change($event)\" color=\"success\" ></ion-toggle>\n    </div>\n  </div>\n  <div class=\"fixed_bottom\">\n    <p routerLink=\"/a-propos\">A propos</p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/reglage/reglage-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/reglage/reglage-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReglagePageRoutingModule */

  /***/
  function srcAppPagesReglageReglageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglagePageRoutingModule", function () {
      return ReglagePageRoutingModule;
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


    var _reglage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reglage.page */
    "./src/app/pages/reglage/reglage.page.ts");

    var routes = [{
      path: '',
      component: _reglage_page__WEBPACK_IMPORTED_MODULE_3__["ReglagePage"]
    }];

    var ReglagePageRoutingModule = function ReglagePageRoutingModule() {
      _classCallCheck(this, ReglagePageRoutingModule);
    };

    ReglagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReglagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reglage/reglage.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/reglage/reglage.module.ts ***!
    \*************************************************/

  /*! exports provided: ReglagePageModule */

  /***/
  function srcAppPagesReglageReglageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglagePageModule", function () {
      return ReglagePageModule;
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


    var _reglage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reglage-routing.module */
    "./src/app/pages/reglage/reglage-routing.module.ts");
    /* harmony import */


    var _reglage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reglage.page */
    "./src/app/pages/reglage/reglage.page.ts");

    var ReglagePageModule = function ReglagePageModule() {
      _classCallCheck(this, ReglagePageModule);
    };

    ReglagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reglage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReglagePageRoutingModule"]],
      declarations: [_reglage_page__WEBPACK_IMPORTED_MODULE_6__["ReglagePage"]]
    })], ReglagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/reglage/reglage.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/reglage/reglage.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReglageReglagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  --background: #B9AA97;\n  position: relative;\n}\n\n.big {\n  margin-top: 250px;\n}\n\n.person {\n  color: #747474;\n  font-size: 8em;\n}\n\n.options_container {\n  border-collapse: collapse;\n  margin-top: 10%;\n}\n\n.options {\n  padding: 20px 40px;\n  background: white;\n  border: 1px solid #B9AA97;\n  display: flex;\n  align-items: center;\n}\n\n.options:first-of-type {\n  color: #D60B0B;\n  border-bottom: none;\n}\n\n.options:first-of-type ion-icon {\n  font-size: 48px;\n}\n\n.options:last-of-type {\n  color: #7B7B7B;\n}\n\n.options:last-of-type ion-toggle {\n  width: 88px;\n  height: 50px;\n  border-radius: 100px;\n  --handle-width: 42px;\n  --handle-height: 42px;\n}\n\n.label {\n  margin-right: 2vw;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixed_bottom {\n  position: fixed;\n  bottom: 44px;\n  left: 44px;\n  color: white;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvcGFnZXMvcmVnbGFnZS9yZWdsYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnbGFnZS9yZWdsYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtBQ0dOOztBREFFO0VBQ0UsY0FBQTtBQ0VKOztBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNHTjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnbGFnZS9yZWdsYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjQjlBQTk3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iaWcge1xuICBtYXJnaW4tdG9wOiAyNTBweDtcbn1cblxuLnBlcnNvbiB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBmb250LXNpemU6IDhlbTtcbn1cblxuLm9wdGlvbnNfY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ub3B0aW9ucyB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgY29sb3I6ICNENjBCMEI7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgfVxuICB9XG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBjb2xvcjogIzdCN0I3QjtcbiAgICBpb24tdG9nZ2xlIHtcbiAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAtLWhhbmRsZS13aWR0aDogNDJweDtcbiAgICAgIC0taGFuZGxlLWhlaWdodDogNDJweDtcbiAgICB9XG4gIH1cbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maXhlZF9ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDRweDtcbiAgbGVmdDogNDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iLCIuY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0I5QUE5NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmlnIHtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbi5wZXJzb24ge1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZm9udC1zaXplOiA4ZW07XG59XG5cbi5vcHRpb25zX2NvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLm9wdGlvbnMge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlBQTk3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9wdGlvbnM6Zmlyc3Qtb2YtdHlwZSB7XG4gIGNvbG9yOiAjRDYwQjBCO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm9wdGlvbnM6Zmlyc3Qtb2YtdHlwZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cbi5vcHRpb25zOmxhc3Qtb2YtdHlwZSB7XG4gIGNvbG9yOiAjN0I3QjdCO1xufVxuLm9wdGlvbnM6bGFzdC1vZi10eXBlIGlvbi10b2dnbGUge1xuICB3aWR0aDogODhweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgLS1oYW5kbGUtd2lkdGg6IDQycHg7XG4gIC0taGFuZGxlLWhlaWdodDogNDJweDtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maXhlZF9ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDRweDtcbiAgbGVmdDogNDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/reglage/reglage.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/reglage/reglage.page.ts ***!
    \***********************************************/

  /*! exports provided: ReglagePage */

  /***/
  function srcAppPagesReglageReglagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglagePage", function () {
      return ReglagePage;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");

    var ReglagePage = /*#__PURE__*/function () {
      function ReglagePage(alertCtrl, router, userService) {
        var _this = this;

        _classCallCheck(this, ReglagePage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userService = userService;
        this.userService.getState().then(function (autosend) {
          _this.autosend = autosend;
        });
      }

      _createClass(ReglagePage, [{
        key: "deconnexion",
        value: function deconnexion() {
          event.stopPropagation();
          this.showConfirm();
        }
      }, {
        key: "showConfirm",
        value: function showConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var confirm;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirmation',
                      message: 'Il est vivement déconseillé de vous déconnecter, cela supprimera toutes vos fiches. Souhaitez-vous malgré tout vous déconnecter ?',
                      buttons: [{
                        text: 'Oui',
                        handler: function handler() {
                          localStorage.removeItem('userId');

                          _this2.router.navigate(['']); // this.userService.deleteAll().then(() => this.router.navigate(['']));

                        }
                      }, {
                        text: 'Annuler'
                      }]
                    });

                  case 2:
                    confirm = _context.sent;
                    _context.next = 5;
                    return confirm.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "change",
        value: function change(elem) {
          this.userService.autoSend(elem.checked);
        }
      }]);

      return ReglagePage;
    }();

    ReglagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ReglagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reglage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reglage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reglage/reglage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reglage.page.scss */
      "./src/app/pages/reglage/reglage.page.scss"))["default"]]
    })], ReglagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reglage-reglage-module-es5.js.map