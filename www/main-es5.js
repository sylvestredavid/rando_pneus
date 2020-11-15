function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./pages/login/login.module": ["./src/app/pages/login/login.module.ts", "pages-login-login-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title color=\"primary\">Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <div *ngFor=\"let pages of pages\" class=\"itemMenu\" [routerLink]=\"pages.url\"\n                         routerDirection=\"forward\">\n                        <ion-icon class=\"iconMenu\" [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n                        {{pages.title}}\n                    </div>\n                </ion-menu-toggle>\n            </ion-list>\n            <div class=\"fixed_bottom\">\n                <ion-menu-toggle auto-hide=\"true\">\n                    <p routerLink=\"/a-propos\">A propos</p>\n                </ion-menu-toggle>\n            </div>\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js":
  /*!****************************************************************************!*\
    !*** ./plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js ***!
    \****************************************************************************/

  /*! exports provided: FCM */

  /***/
  function pluginsCordovaPluginFcmWithDependecyUpdatedIonicNgxFCMJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FCM", function () {
      return FCM;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    function FCM() {}

    FCM.prototype.clearAllNotifications = function () {
      return window.FCM.clearAllNotifications();
    };

    FCM.prototype.createNotificationChannel = function (channelConfig) {
      return window.FCM.createNotificationChannel(channelConfig);
    };

    FCM.prototype.deleteInstanceId = function () {
      return window.FCM.deleteInstanceId();
    };

    FCM.prototype.getAPNSToken = function () {
      return window.FCM.getAPNSToken();
    };

    FCM.prototype.getInitialPushPayload = function () {
      return window.FCM.getInitialPushPayload();
    };

    FCM.prototype.getToken = function () {
      return window.FCM.getToken();
    };

    FCM.prototype.hasPermission = function () {
      return window.FCM.hasPermission();
    };

    FCM.prototype.onNotification = function (options) {
      var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

      var handler = function handler(payload) {
        return observable.next(payload);
      };

      window.FCM.onNotification(handler, options);
      return observable;
    };

    FCM.prototype.onTokenRefresh = function (options) {
      var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      window.FCM.onTokenRefresh(function (token) {
        return observable.next(token);
      }, options);
      return observable;
    };

    FCM.prototype.requestPushPermission = function (options) {
      return window.FCM.requestPushPermission(options);
    };

    FCM.prototype.subscribeToTopic = function (topic) {
      return window.FCM.subscribeToTopic(topic);
    };

    FCM.prototype.unsubscribeFromTopic = function (topic) {
      return window.FCM.unsubscribeFromTopic(topic);
    };

    FCM.pluginName = 'FCM';
    FCM.plugin = 'cordova-plugin-fcm-with-dependecy-updated';
    FCM.pluginRef = 'FCM';
    FCM.repo = 'https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated';
    FCM.platforms = ['Android', 'iOS'];
    FCM.installed = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].installed;
    FCM.getPlugin = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].getPlugin;
    FCM.getPluginName = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].getPluginName;
    FCM.getPluginRef = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].getPluginRef;
    FCM.getPluginInstallName = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].getPluginInstallName;
    FCM.getSupportedPlatforms = _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"].getSupportedPlatforms;
    FCM = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], FCM);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_connected_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/connected.guard */
    "./src/app/guards/connected.guard.ts");
    /* harmony import */


    var _guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/is-connected.guard */
    "./src/app/guards/is-connected.guard.ts");

    var routes = [{
      path: '',
      loadChildren: './pages/login/login.module#LoginPageModule',
      canActivate: [_guards_connected_guard__WEBPACK_IMPORTED_MODULE_3__["ConnectedGuard"]]
    }, {
      path: 'accueil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-accueil-accueil-module */
        "pages-accueil-accueil-module").then(__webpack_require__.bind(null,
        /*! ./pages/accueil/accueil.module */
        "./src/app/pages/accueil/accueil.module.ts")).then(function (m) {
          return m.AccueilPageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'fiche',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-fiche-fiche-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-fiche-fiche-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/fiche/fiche.module */
        "./src/app/pages/fiche/fiche.module.ts")).then(function (m) {
          return m.FichePageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'nouvelle-fiche',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-nouvelle-fiche-nouvelle-fiche-module */
        [__webpack_require__.e("default~pages-detail-fiche-detail-fiche-module~pages-edit-fiche-edit-fiche-module~pages-nouvelle-fic~e6387913"), __webpack_require__.e("common"), __webpack_require__.e("pages-nouvelle-fiche-nouvelle-fiche-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/nouvelle-fiche/nouvelle-fiche.module */
        "./src/app/pages/nouvelle-fiche/nouvelle-fiche.module.ts")).then(function (m) {
          return m.NouvelleFichePageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'reglage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-reglage-reglage-module */
        "pages-reglage-reglage-module").then(__webpack_require__.bind(null,
        /*! ./pages/reglage/reglage.module */
        "./src/app/pages/reglage/reglage.module.ts")).then(function (m) {
          return m.ReglagePageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'edit-fiche/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-edit-fiche-edit-fiche-module */
        [__webpack_require__.e("default~pages-detail-fiche-detail-fiche-module~pages-edit-fiche-edit-fiche-module~pages-nouvelle-fic~e6387913"), __webpack_require__.e("common"), __webpack_require__.e("pages-edit-fiche-edit-fiche-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/edit-fiche/edit-fiche.module */
        "./src/app/pages/edit-fiche/edit-fiche.module.ts")).then(function (m) {
          return m.EditFichePageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'detail-fiche/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-detail-fiche-detail-fiche-module */
        [__webpack_require__.e("default~pages-detail-fiche-detail-fiche-module~pages-edit-fiche-edit-fiche-module~pages-nouvelle-fic~e6387913"), __webpack_require__.e("common"), __webpack_require__.e("pages-detail-fiche-detail-fiche-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/detail-fiche/detail-fiche.module */
        "./src/app/pages/detail-fiche/detail-fiche.module.ts")).then(function (m) {
          return m.DetailFichePageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }, {
      path: 'a-propos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-a-propos-a-propos-module */
        "pages-a-propos-a-propos-module").then(__webpack_require__.bind(null,
        /*! ./pages/a-propos/a-propos.module */
        "./src/app/pages/a-propos/a-propos.module.ts")).then(function (m) {
          return m.AProposPageModule;
        });
      },
      canActivate: [_guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_4__["IsConnectedGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon.large-button {\n  font-size: 48px;\n}\n\n.iconMenu {\n  color: #FFFFFF;\n}\n\n.itemMenu {\n  padding-top: 49px;\n  color: white;\n  padding-left: 15%;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n\n.itemMenu ion-icon {\n  font-size: 48px;\n  margin-right: 7%;\n}\n\n.papatte {\n  width: 65px;\n  height: 75px;\n}\n\nion-content {\n  --background: #B9AA97;\n  position: relative;\n}\n\n.button-menu {\n  height: 48px;\n}\n\n.fixed_bottom {\n  position: fixed;\n  bottom: 44px;\n  left: 44px;\n  color: white;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHN5bHZlc3RyZS9EZXNrdG9wL3JhbmRvX3BuZXVzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0FDRkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdjIvdGhlbWluZy9cblxuLy8gaWNvbiBtZW51XG5pb24taWNvbi5sYXJnZS1idXR0b257XG4gIGZvbnQtc2l6ZSA6IDQ4cHg7XG59XG5cbi8vcGF0dGVcblxuLmljb25NZW51e1xuICBjb2xvcjojRkZGRkZGO1xufVxuXG4uaXRlbU1lbnV7XG4gIHBhZGRpbmctdG9wOiA0OXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgfVxufVxuXG4ucGFwYXR0ZSB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjQjlBQTk3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLy9sYXJnZXVyIGR1IGNvbnRlbmV1ciBkdSBidXR0b24gZHUgbWVudVxuLmJ1dHRvbi1tZW51e1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5maXhlZF9ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDRweDtcbiAgbGVmdDogNDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuLy8gQXBwIEdsb2JhbCBTYXNzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LlxuLy8gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlIGFsc28gdXNlZCBhcyBhbiBlbnRyeSBwb2ludFxuLy8gdG8gaW1wb3J0IG90aGVyIFNhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dCBDU1MuXG4vL1xuLy8gU2hhcmVkIFNhc3MgdmFyaWFibGVzLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhZGp1c3QgSW9uaWMnc1xuLy8gZGVmYXVsdCBTYXNzIHZhcmlhYmxlcywgYmVsb25nIGluIFwidGhlbWUvdmFyaWFibGVzLnNjc3NcIi5cbi8vXG4vLyBUbyBkZWNsYXJlIHJ1bGVzIGZvciBhIHNwZWNpZmljIG1vZGUsIGNyZWF0ZSBhIGNoaWxkIHJ1bGVcbi8vIGZvciB0aGUgLm1kLCAuaW9zLCBvciAud3AgbW9kZSBjbGFzc2VzLiBUaGUgbW9kZSBjbGFzcyBpc1xuLy8gYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHRoZSA8Ym9keT4gZWxlbWVudCBpbiB0aGUgYXBwLlxuIiwiaW9uLWljb24ubGFyZ2UtYnV0dG9uIHtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4uaWNvbk1lbnUge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLml0ZW1NZW51IHtcbiAgcGFkZGluZy10b3A6IDQ5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtTWVudSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLnBhcGF0dGUge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0I5QUE5NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnV0dG9uLW1lbnUge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5maXhlZF9ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDRweDtcbiAgbGVmdDogNDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM */
    "./plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, fcm, userService, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.fcm = fcm;
        this.userService = userService;
        this.router = router;
        this.initializeApp();
        this.pages = [{
          title: 'Accueil',
          url: 'accueil',
          icon: 'home-sharp'
        }, {
          title: 'Mes fiches',
          url: 'fiche',
          icon: 'document-text-sharp'
        }, {
          title: 'Nouvelle fiche',
          url: 'nouvelle-fiche',
          icon: 'pencil-sharp'
        }, {
          title: 'Réglages',
          url: 'reglage',
          icon: 'settings-sharp'
        }];
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault(); // this.splashScreen.hide();


            _this.fcm.getToken().then(function (token) {
              _this.userService.token = token;
            });

            _this.fcm.onTokenRefresh().subscribe(function (token) {});

            _this.fcm.onNotification().subscribe(function (notif) {
              if (notif.wasTapped) {
                _this.router.navigate(['fiche']);
              } else {}
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_7__["FCM"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var _plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM */
    "./plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
    /* harmony import */


    var _guards_connected_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/connected.guard */
    "./src/app/guards/connected.guard.ts");
    /* harmony import */


    var _guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/is-connected.guard */
    "./src/app/guards/is-connected.guard.ts");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");

    var firebaseConfig = {
      apiKey: 'AIzaSyDIF_Gu-dVLpN6m1PYDUZ_rgKYXMs1-NcE',
      authDomain: 'rando-pneus.firebaseapp.com',
      databaseURL: 'https://rando-pneus.firebaseio.com',
      projectId: 'rando-pneus',
      storageBucket: 'rando-pneus.appspot.com',
      messagingSenderId: '861834275864',
      appId: '1:861834275864:web:91203fdc810af3fe93676d'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot({
        name: '__mydb',
        driverOrder: ['sqlite', 'websql', 'indexeddb']
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_19__["Camera"], _guards_connected_guard__WEBPACK_IMPORTED_MODULE_17__["ConnectedGuard"], _guards_is_connected_guard__WEBPACK_IMPORTED_MODULE_18__["IsConnectedGuard"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_20__["Base64"], _plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_16__["FCM"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/connected.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/connected.guard.ts ***!
    \*******************************************/

  /*! exports provided: ConnectedGuard */

  /***/
  function srcAppGuardsConnectedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedGuard", function () {
      return ConnectedGuard;
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


    var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/fiche-firebase.service */
    "./src/app/services/fiche-firebase.service.ts");

    var ConnectedGuard = /*#__PURE__*/function () {
      function ConnectedGuard(ficheFirebaseService, router) {
        _classCallCheck(this, ConnectedGuard);

        this.ficheFirebaseService = ficheFirebaseService;
        this.router = router;
      }

      _createClass(ConnectedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('userId')) {
            this.ficheFirebaseService.getFiches(+localStorage.getItem('userId'));
            this.router.navigate(['accueil']);
          } else {
            return true;
          }
        }
      }]);

      return ConnectedGuard;
    }();

    ConnectedGuard.ctorParameters = function () {
      return [{
        type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FicheFirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ConnectedGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConnectedGuard);
    /***/
  },

  /***/
  "./src/app/guards/is-connected.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/guards/is-connected.guard.ts ***!
    \**********************************************/

  /*! exports provided: IsConnectedGuard */

  /***/
  function srcAppGuardsIsConnectedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsConnectedGuard", function () {
      return IsConnectedGuard;
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


    var _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/fiche-firebase.service */
    "./src/app/services/fiche-firebase.service.ts");

    var IsConnectedGuard = /*#__PURE__*/function () {
      function IsConnectedGuard(ficheFirebaseService, router) {
        _classCallCheck(this, IsConnectedGuard);

        this.ficheFirebaseService = ficheFirebaseService;
        this.router = router;
      }

      _createClass(IsConnectedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('userId')) {
            if (this.ficheFirebaseService.fiches$) {
              return true;
            } else {
              this.ficheFirebaseService.getFiches(+localStorage.getItem('userId'));
              return true;
            }
          } else {
            this.router.navigate(['']);
          }
        }
      }]);

      return IsConnectedGuard;
    }();

    IsConnectedGuard.ctorParameters = function () {
      return [{
        type: _services_fiche_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FicheFirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    IsConnectedGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IsConnectedGuard);
    /***/
  },

  /***/
  "./src/app/services/fiche-firebase.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/fiche-firebase.service.ts ***!
    \****************************************************/

  /*! exports provided: FicheFirebaseService */

  /***/
  function srcAppServicesFicheFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FicheFirebaseService", function () {
      return FicheFirebaseService;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FicheFirebaseService = /*#__PURE__*/function () {
      function FicheFirebaseService(af, http) {
        _classCallCheck(this, FicheFirebaseService);

        this.af = af;
        this.http = http;
      }

      _createClass(FicheFirebaseService, [{
        key: "getFiches",
        value: function getFiches(userId) {
          this.ficheList = this.af.list('fiches', function (ref) {
            return ref.orderByChild('userId').equalTo('' + userId);
          });
          this.fiches$ = this.ficheList.valueChanges();
        }
      }, {
        key: "addFiche",
        value: function addFiche(fiche) {
          return this.af.list('fiches').push(fiche);
        }
      }, {
        key: "updateFiche",
        value: function updateFiche(fiche) {
          return this.af.list('fiches').update(fiche.id, fiche);
        }
      }, {
        key: "deleteFiche",
        value: function deleteFiche(id) {
          if (id) {
            return this.af.list('fiches').remove(id);
          }
        }
      }]);

      return FicheFirebaseService;
    }();

    FicheFirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    FicheFirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FicheFirebaseService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(storage, http) {
        _classCallCheck(this, UserService);

        this.storage = storage;
        this.http = http;
        this.url = 'https://www.rando-pneus.fr/api/login.php'; // URL to web api

        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }

      _createClass(UserService, [{
        key: "handleError",
        value: function handleError(error) {
          console.error('An error occurred', error); // for demo purposes only

          return Promise.reject(error.message || error);
        }
      }, {
        key: "login",
        value: function login(user) {
          if (user.login === null || user.password === null) {
            return null;
          } else {
            return this.http.post(this.url, JSON.stringify(user), {
              headers: this.headers
            });
          }
        }
      }, {
        key: "storUser",
        value: function storUser(user) {
          this.storage.set('user', user);
        }
      }, {
        key: "addToken",
        value: function addToken(userId, deviceToken) {
          return this.http.post('https://www.rando-pneus.fr/api/add-token.php', {
            id: userId,
            token: deviceToken
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.storage.clear();
        }
      }, {
        key: "autoSend",
        value: function autoSend(state) {
          this.storage.set('autoSend', state);
        }
      }, {
        key: "getState",
        value: function getState() {
          return this.storage.get('autoSend');
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/davidsylvestre/Desktop/rando_pneus/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map