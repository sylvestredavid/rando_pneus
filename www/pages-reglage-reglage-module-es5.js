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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu_button\"></ion-menu-button>\r\n    </ion-buttons>\r\n     <img class=\"papatte\" src=\"./assets/img/patte.png\" align=\"middle\" alt=\"\">\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"content\" >\r\n  <div class=\"options_container\">\r\n    <div class=\"options\" (click)=\"deconnexion()\">\r\n      <p class=\"label\">Déconnexion</p>\r\n      <ion-icon name=\"close-sharp\"></ion-icon>\r\n    </div>\r\n    <div  class=\"options\">\r\n      <ion-label class=\"label\">\r\n        Envoyer la fiche à l'enregistrement\r\n      </ion-label>\r\n      <ion-toggle mode=\"ios\" [checked]=\"autosend\" (ionChange)=\"change($event)\" color=\"success\" ></ion-toggle>\r\n    </div>\r\n  </div>\r\n  <div class=\"fixed_bottom\">\r\n    <p routerLink=\"/a-propos\">A propos</p>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".content {\n  --background: #B9AA97;\n  position: relative;\n}\n\n.big {\n  margin-top: 250px;\n}\n\n.person {\n  color: #747474;\n  font-size: 8em;\n}\n\n.options_container {\n  border-collapse: collapse;\n  margin-top: 10%;\n}\n\n.options {\n  padding: 20px 40px;\n  background: white;\n  border: 1px solid #B9AA97;\n  display: flex;\n  align-items: center;\n}\n\n.options:first-of-type {\n  color: #D60B0B;\n  border-bottom: none;\n}\n\n.options:first-of-type ion-icon {\n  font-size: 48px;\n}\n\n.options:last-of-type {\n  color: #7B7B7B;\n}\n\n.options:last-of-type ion-toggle {\n  width: 88px;\n  height: 50px;\n  border-radius: 100px;\n  --handle-width: 42px;\n  --handle-height: 42px;\n}\n\n.label {\n  margin-right: 2vw;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixed_bottom {\n  position: fixed;\n  bottom: 44px;\n  left: 44px;\n  color: white;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnbGFnZS9EOlxcUHJvamVjdHNcXHJhbmRvX3BuZXVzL3NyY1xcYXBwXFxwYWdlc1xccmVnbGFnZVxccmVnbGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2xhZ2UvcmVnbGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURESTtFQUNFLGVBQUE7QUNHTjs7QURBRTtFQUNFLGNBQUE7QUNFSjs7QURESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDR047O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2xhZ2UvcmVnbGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQjlBQTk3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJpZyB7XHJcbiAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbn1cclxuXHJcbi5wZXJzb24ge1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIGZvbnQtc2l6ZTogOGVtO1xyXG59XHJcblxyXG4ub3B0aW9uc19jb250YWluZXIge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUFBOTc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBjb2xvcjogI0Q2MEIwQjtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgY29sb3I6ICM3QjdCN0I7XHJcbiAgICBpb24tdG9nZ2xlIHtcclxuICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIC0taGFuZGxlLXdpZHRoOiA0MnB4O1xyXG4gICAgICAtLWhhbmRsZS1oZWlnaHQ6IDQycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZpeGVkX2JvdHRvbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNDRweDtcclxuICBsZWZ0OiA0NHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIiwiLmNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNCOUFBOTc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJpZyB7XG4gIG1hcmdpbi10b3A6IDI1MHB4O1xufVxuXG4ucGVyc29uIHtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGZvbnQtc2l6ZTogOGVtO1xufVxuXG4ub3B0aW9uc19jb250YWluZXIge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5vcHRpb25zIHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QUE5NztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcHRpb25zOmZpcnN0LW9mLXR5cGUge1xuICBjb2xvcjogI0Q2MEIwQjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5vcHRpb25zOmZpcnN0LW9mLXR5cGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4ub3B0aW9uczpsYXN0LW9mLXR5cGUge1xuICBjb2xvcjogIzdCN0I3Qjtcbn1cbi5vcHRpb25zOmxhc3Qtb2YtdHlwZSBpb24tdG9nZ2xlIHtcbiAgd2lkdGg6IDg4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIC0taGFuZGxlLXdpZHRoOiA0MnB4O1xuICAtLWhhbmRsZS1oZWlnaHQ6IDQycHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMnZ3O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZml4ZWRfYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQ0cHg7XG4gIGxlZnQ6IDQ0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
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