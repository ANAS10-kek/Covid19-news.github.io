function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/_services/continentreport.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/_services/continentreport.service.ts ***!
    \******************************************************/

  /*! exports provided: ContinentreportService */

  /***/
  function srcApp_servicesContinentreportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentreportService", function () {
      return ContinentreportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContinentreportService = /*#__PURE__*/function () {
      function ContinentreportService(http) {
        _classCallCheck(this, ContinentreportService);

        this.http = http;
      }

      _createClass(ContinentreportService, [{
        key: "getContinentReport",
        value: function getContinentReport() {
          var url = 'https://corona.lmao.ninja/v2/continents?yesterday=false&sort=cases';
          return this.http.get(url).toPromise();
        }
      }]);

      return ContinentreportService;
    }();

    ContinentreportService.ɵfac = function ContinentreportService_Factory(t) {
      return new (t || ContinentreportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ContinentreportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContinentreportService,
      factory: ContinentreportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinentreportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/reports-country-service.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/_services/reports-country-service.service.ts ***!
    \**************************************************************/

  /*! exports provided: ReportsCountryServiceService */

  /***/
  function srcApp_servicesReportsCountryServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsCountryServiceService", function () {
      return ReportsCountryServiceService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReportsCountryServiceService = /*#__PURE__*/function () {
      function ReportsCountryServiceService(route, http) {
        _classCallCheck(this, ReportsCountryServiceService);

        this.route = route;
        this.http = http;
        this.baseUrl = 'https://corona.lmao.ninja/v2/countries?yesterday=0';
      }

      _createClass(ReportsCountryServiceService, [{
        key: "getreportcountries",
        value: function getreportcountries() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get(this.baseUrl).toPromise();

                  case 2:
                    res = _context.sent;
                    return _context.abrupt("return", res);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // getReportCountries(): Observable<country[]> {
        //   return  this.http.get<country[]>(this.baseUrl);
        // }
        // tslint:disable-next-line: no-shadowed-variable

      }, {
        key: "getStatisticCountry",
        value: function getStatisticCountry(country) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var url;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    url = 'https://corona.lmao.ninja/v2/historical/' + country + '?lastdays=30';
                    _context2.next = 3;
                    return this.http.get(url).toPromise();

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // tslint:disable-next-line: no-shadowed-variable

      }, {
        key: "getCountryInfo",
        value: function getCountryInfo(country) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", this.http.get('https://corona.lmao.ninja/v2/countries/' + country + '?yesterday=false').toPromise());

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ReportsCountryServiceService;
    }();

    ReportsCountryServiceService.ɵfac = function ReportsCountryServiceService_Factory(t) {
      return new (t || ReportsCountryServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ReportsCountryServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReportsCountryServiceService,
      factory: ReportsCountryServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsCountryServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/worldreport.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/worldreport.service.ts ***!
    \**************************************************/

  /*! exports provided: WorldreportService */

  /***/
  function srcApp_servicesWorldreportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldreportService", function () {
      return WorldreportService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WorldreportService = /*#__PURE__*/function () {
      function WorldreportService(http) {
        _classCallCheck(this, WorldreportService);

        this.http = http;
      }

      _createClass(WorldreportService, [{
        key: "getWorldWideReport",
        value: function getWorldWideReport() {
          var url = 'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats';
          return this.http.get(url).toPromise();
        }
      }]);

      return WorldreportService;
    }();

    WorldreportService.ɵfac = function WorldreportService_Factory(t) {
      return new (t || WorldreportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WorldreportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorldreportService,
      factory: WorldreportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorldreportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table-main/table-main.component */
    "./src/app/table-main/table-main.component.ts");
    /* harmony import */


    var _info_country_info_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./info-country/info-country.component */
    "./src/app/info-country/info-country.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/Home',
      pathMatch: 'full'
    }, {
      path: 'Home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'Statistic',
      component: _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_3__["TableMainComponent"],
      pathMatch: 'full'
    }, {
      path: 'MoreInfo/:country',
      component: _info_country_info_country_component__WEBPACK_IMPORTED_MODULE_4__["InfoCountryComponent"],
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");
    /* harmony import */


    var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer-main/footer-main.component */
    "./src/app/footer-main/footer-main.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "dark-theme": a0
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, cookieService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.cookieService = cookieService;
        this.title = 'Covid 19 last news';
        this.ValueDarkTheme = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var CookiesTheme = this.cookieService.get('Theme');

          if (CookiesTheme === 'true') {
            this.ValueDarkTheme = true;
          }
        }
      }, {
        key: "getValue",
        value: function getValue(val) {
          console.log(val);
          this.ValueDarkTheme = val;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 3,
      consts: [[1, "d-flex", "flex-column", 3, "ngClass"], [3, "ValueEmitter"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main-nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ValueEmitter", function AppComponent_Template_main_nav_ValueEmitter_1_listener($event) {
            return ctx.getValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.ValueDarkTheme));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");
    /* harmony import */


    var _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./table-main/table-main.component */
    "./src/app/table-main/table-main.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./country-card/country-card.component */
    "./src/app/country-card/country-card.component.ts");
    /* harmony import */


    var _table_main_filterCountires_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./table-main/filterCountires.pipe */
    "./src/app/table-main/filterCountires.pipe.ts");
    /* harmony import */


    var _drop_down_sort_drop_down_sort_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./drop-down-sort/drop-down-sort.component */
    "./src/app/drop-down-sort/drop-down-sort.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _drop_down_diplay_mode_drop_down_diplay_mode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./drop-down-diplay-mode/drop-down-diplay-mode.component */
    "./src/app/drop-down-diplay-mode/drop-down-diplay-mode.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _info_country_info_country_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./info-country/info-country.component */
    "./src/app/info-country/info-country.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _my_line_chart_my_line_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./my-line-chart/my-line-chart.component */
    "./src/app/my-line-chart/my-line-chart.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _info_card_world_wide_info_card_world_wide_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./info-card-world-wide/info-card-world-wide.component */
    "./src/app/info-card-world-wide/info-card-world-wide.component.ts");
    /* harmony import */


    var _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./health-info/health-info.component */
    "./src/app/health-info/health-info.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _continent_card_continent_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./continent-card/continent-card.component */
    "./src/app/continent-card/continent-card.component.ts");
    /* harmony import */


    var _continent_main_continent_main_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./continent-main/continent-main.component */
    "./src/app/continent-main/continent-main.component.ts");
    /* harmony import */


    var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./footer-main/footer-main.component */
    "./src/app/footer-main/footer-main.component.ts");
    /* harmony import */


    var _country_card_country_card_small_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./country-card/country-card-small.component */
    "./src/app/country-card/country-card-small.component.ts");
    /* harmony import */


    var _country_card_country_card_medium_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./country-card/country-card-medium.component */
    "./src/app/country-card/country-card-medium.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_39__["CookieService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_7__["TableMainComponent"], _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_10__["CountryCardComponent"], _table_main_filterCountires_pipe__WEBPACK_IMPORTED_MODULE_11__["filterCountires"], _drop_down_sort_drop_down_sort_component__WEBPACK_IMPORTED_MODULE_12__["DropDownSortComponent"], _drop_down_diplay_mode_drop_down_diplay_mode_component__WEBPACK_IMPORTED_MODULE_14__["DropDownDiplayModeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _info_country_info_country_component__WEBPACK_IMPORTED_MODULE_16__["InfoCountryComponent"], _my_line_chart_my_line_chart_component__WEBPACK_IMPORTED_MODULE_20__["MyLineChartComponent"], _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_7__["Alertfield"], _info_card_world_wide_info_card_world_wide_component__WEBPACK_IMPORTED_MODULE_30__["InfoCardWorldWideComponent"], _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_31__["HealthInfoComponent"], _continent_card_continent_card_component__WEBPACK_IMPORTED_MODULE_34__["ContinentCardComponent"], _continent_main_continent_main_component__WEBPACK_IMPORTED_MODULE_35__["ContinentMainComponent"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_36__["FooterMainComponent"], _country_card_country_card_small_component__WEBPACK_IMPORTED_MODULE_37__["CountryCardComponentSmall"], _country_card_country_card_medium_component__WEBPACK_IMPORTED_MODULE_38__["CountryCardComponentMedium"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_7__["TableMainComponent"], _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_10__["CountryCardComponent"], _table_main_filterCountires_pipe__WEBPACK_IMPORTED_MODULE_11__["filterCountires"], _drop_down_sort_drop_down_sort_component__WEBPACK_IMPORTED_MODULE_12__["DropDownSortComponent"], _drop_down_diplay_mode_drop_down_diplay_mode_component__WEBPACK_IMPORTED_MODULE_14__["DropDownDiplayModeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _info_country_info_country_component__WEBPACK_IMPORTED_MODULE_16__["InfoCountryComponent"], _my_line_chart_my_line_chart_component__WEBPACK_IMPORTED_MODULE_20__["MyLineChartComponent"], _table_main_table_main_component__WEBPACK_IMPORTED_MODULE_7__["Alertfield"], _info_card_world_wide_info_card_world_wide_component__WEBPACK_IMPORTED_MODULE_30__["InfoCardWorldWideComponent"], _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_31__["HealthInfoComponent"], _continent_card_continent_card_component__WEBPACK_IMPORTED_MODULE_34__["ContinentCardComponent"], _continent_main_continent_main_component__WEBPACK_IMPORTED_MODULE_35__["ContinentMainComponent"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_36__["FooterMainComponent"], _country_card_country_card_small_component__WEBPACK_IMPORTED_MODULE_37__["CountryCardComponentSmall"], _country_card_country_card_medium_component__WEBPACK_IMPORTED_MODULE_38__["CountryCardComponentMedium"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"]],
          providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_39__["CookieService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/continent-card/continent-card.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/continent-card/continent-card.component.ts ***!
    \************************************************************/

  /*! exports provided: ContinentCardComponent */

  /***/
  function srcAppContinentCardContinentCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentCardComponent", function () {
      return ContinentCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContinentCardComponent = function ContinentCardComponent() {
      _classCallCheck(this, ContinentCardComponent);

      this.IconSource = ['../../assets/img/map.svg', '../../assets/img/europe.svg', '../../assets/img/asia.svg', '../../assets/img/south-america.svg', '../../assets/img/africa.svg', '../../assets/img/australia.svg'];
    };

    ContinentCardComponent.ɵfac = function ContinentCardComponent_Factory(t) {
      return new (t || ContinentCardComponent)();
    };

    ContinentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContinentCardComponent,
      selectors: [["app-continent-card"]],
      inputs: {
        continent: "continent",
        i: "i"
      },
      decls: 23,
      vars: 5,
      consts: [[1, "border", "rounded", "mb-2"], [1, "w-100", "py-2", "px-1", "my-0"], [1, "d-flex", "flex-column", "px-1", "m-0"], [1, "d-flex", "justify-content-start", "align-items-center", "mb-3"], ["width", "30", "alt", "", 3, "src"], [1, "px-2"], [1, "d-flex", "flex-column", "justify-content-center", "justify-content-lg-between", "flex-sm-row", "flex-md-row", "flex-lg-row", "col-lg-12", "p-0"], [1, "col-lg-4", "d-flex", "justify-content-between", "flex-column", "pr-0", "pl-1", "border-right"], [1, "px-0", "tt", "text-muted"], [1, "dd", "text-warning"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1", "border-right"], [1, "dd", "text-success"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1"], [1, "dd", "text-danger"]],
      template: function ContinentCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.IconSource[ctx.i], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continent.continent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continent.cases);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continent.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continent.deaths);
        }
      },
      styles: [".dd[_ngcontent-%COMP%]\r\n{\r\n  font-weight: bold;\r\n  font-size: large;\r\n  margin-bottom: 10px;\r\n}\r\n.tt[_ngcontent-%COMP%]\r\n{\r\n  font-size: 1.1rem;\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGluZW50LWNhcmQvY29udGluZW50LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250aW5lbnQtY2FyZC9jb250aW5lbnQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRkXHJcbntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnR0XHJcbntcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinentCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-continent-card',
          templateUrl: './continent-card.component.html',
          styleUrls: ['./continent-card.component.css']
        }]
      }], null, {
        continent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        i: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/continent-main/continent-main.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/continent-main/continent-main.component.ts ***!
    \************************************************************/

  /*! exports provided: ContinentMainComponent */

  /***/
  function srcAppContinentMainContinentMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentMainComponent", function () {
      return ContinentMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_continentreport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/continentreport.service */
    "./src/app/_services/continentreport.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _continent_card_continent_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../continent-card/continent-card.component */
    "./src/app/continent-card/continent-card.component.ts");

    function ContinentMainComponent_mat_progress_bar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 3);
      }
    }

    function ContinentMainComponent_app_continent_card_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-continent-card", 4);
      }

      if (rf & 2) {
        var cont_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("continent", cont_r2)("i", i_r3);
      }
    }

    var ContinentMainComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: whitespace
      function ContinentMainComponent(continentReport) {
        _classCallCheck(this, ContinentMainComponent);

        this.continentReport = continentReport;
        this.statusbar = false;
      }

      _createClass(ContinentMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.continentReport.getContinentReport().then(function (response) {
            _this.dataSource = response;
            _this.statusbar = true;
          });
        }
      }]);

      return ContinentMainComponent;
    }();

    ContinentMainComponent.ɵfac = function ContinentMainComponent_Factory(t) {
      return new (t || ContinentMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_continentreport_service__WEBPACK_IMPORTED_MODULE_1__["ContinentreportService"]));
    };

    ContinentMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContinentMainComponent,
      selectors: [["app-continent-main"]],
      decls: 9,
      vars: 2,
      consts: [[1, "col-lg-12", "px-0", "overflow-hidden", "mt-3", "mt-sm-3", "mt-md-0", "mt-lg-0"], ["style", "margin-top: 10px;", "mode", "indeterminate", 4, "ngIf"], [3, "continent", "i", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", 2, "margin-top", "10px"], [3, "continent", "i"]],
      template: function ContinentMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinentMainComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continents");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContinentMainComponent_app_continent_card_8_Template, 1, 2, "app-continent-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statusbar == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSource);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _continent_card_continent_card_component__WEBPACK_IMPORTED_MODULE_5__["ContinentCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRpbmVudC1tYWluL2NvbnRpbmVudC1tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinentMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-continent-main',
          templateUrl: './continent-main.component.html',
          styleUrls: ['./continent-main.component.css']
        }]
      }], function () {
        return [{
          type: _services_continentreport_service__WEBPACK_IMPORTED_MODULE_1__["ContinentreportService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/country-card/country-card-medium.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/country-card/country-card-medium.component.ts ***!
    \***************************************************************/

  /*! exports provided: CountryCardComponentMedium */

  /***/
  function srcAppCountryCardCountryCardMediumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryCardComponentMedium", function () {
      return CountryCardComponentMedium;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"); // tslint:disable-next-line: component-class-suffix


    var CountryCardComponentMedium = /*#__PURE__*/function () {
      function CountryCardComponentMedium(router) {
        _classCallCheck(this, CountryCardComponentMedium);

        this.router = router;
      }

      _createClass(CountryCardComponentMedium, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ShowInfo",
        value: function ShowInfo(country) {
          this.router.navigate(['/MoreInfo/' + country]);
        }
      }]);

      return CountryCardComponentMedium;
    }();

    CountryCardComponentMedium.ɵfac = function CountryCardComponentMedium_Factory(t) {
      return new (t || CountryCardComponentMedium)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CountryCardComponentMedium.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryCardComponentMedium,
      selectors: [["app-country-card-medium"]],
      inputs: {
        country: "country"
      },
      decls: 30,
      vars: 6,
      consts: [[1, "shadow"], ["mat-card-avatar", ""], ["width", "30", 1, "mx-2", 3, "src"], [1, "w-100", "py-2", "px-1", "my-0"], [1, "px-1", "m-0"], [1, "d-flex", "flex-column", "justify-content-center", "justify-content-lg-between", "flex-sm-row", "flex-md-row", "flex-lg-row", "col-lg-12", "p-0"], [1, "col-lg-4", "d-flex", "justify-content-between", "flex-column", "pr-0", "pl-1", "border-right"], [1, "px-0"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1", "border-right"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1"], [1, ""], [1, "d-flex", "justify-content-end"], ["mat-flat-button", "", "color", "primary", 1, "btn-sm", 3, "click"]],
      template: function CountryCardComponentMedium_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryCardComponentMedium_Template_button_click_28_listener() {
            return ctx.ShowInfo(ctx.country.country);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "More informations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.country.countryInfo.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.countryInfo.iso2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.cases);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.deaths, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".titles[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem !important;\r\n}\r\n.details[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1jYXJkL2NvdW50cnktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5LWNhcmQvY291bnRyeS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVze1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryCardComponentMedium, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country-card-medium',
          templateUrl: './country-card-medium.component.html',
          styleUrls: ['./country-card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        country: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/country-card/country-card-small.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/country-card/country-card-small.component.ts ***!
    \**************************************************************/

  /*! exports provided: CountryCardComponentSmall */

  /***/
  function srcAppCountryCardCountryCardSmallComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryCardComponentSmall", function () {
      return CountryCardComponentSmall;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"); // tslint:disable-next-line: component-class-suffix


    var CountryCardComponentSmall = /*#__PURE__*/function () {
      function CountryCardComponentSmall(router) {
        _classCallCheck(this, CountryCardComponentSmall);

        this.router = router;
      }

      _createClass(CountryCardComponentSmall, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ShowInfo",
        value: function ShowInfo(country) {
          this.router.navigate(['/MoreInfo/' + country]);
        }
      }]);

      return CountryCardComponentSmall;
    }();

    CountryCardComponentSmall.ɵfac = function CountryCardComponentSmall_Factory(t) {
      return new (t || CountryCardComponentSmall)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CountryCardComponentSmall.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryCardComponentSmall,
      selectors: [["app-country-card-small"]],
      inputs: {
        country: "country"
      },
      decls: 30,
      vars: 6,
      consts: [[1, "shadow"], ["mat-card-avatar", ""], ["width", "30", 1, "mx-2", 3, "src"], [1, "w-100", "py-2", "px-1", "my-0"], [1, "px-1", "m-0"], [1, "d-flex", "flex-column", "justify-content-center", "justify-content-lg-between", "p-0"], [1, "col-lg-4", "d-flex", "justify-content-center", "flex-column", "pr-0", "pl-1"], [1, "px-0"], [1, "col-lg-4", "d-flex", "justify-content-center", "flex-column", "pr-0", "pl-1", "t"], [1, ""], [1, "d-flex", "justify-content-end"], ["mat-flat-button", "", "color", "primary", 1, "btn-sm", 3, "click"]],
      template: function CountryCardComponentSmall_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryCardComponentSmall_Template_button_click_28_listener() {
            return ctx.ShowInfo(ctx.country.country);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "More informations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.country.countryInfo.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.countryInfo.iso2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.cases);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.deaths, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".titles[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem !important;\r\n}\r\n.details[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1jYXJkL2NvdW50cnktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5LWNhcmQvY291bnRyeS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVze1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryCardComponentSmall, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country-card-small',
          templateUrl: './country-card-small.component.html',
          styleUrls: ['./country-card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        country: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/country-card/country-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/country-card/country-card.component.ts ***!
    \********************************************************/

  /*! exports provided: CountryCardComponent */

  /***/
  function srcAppCountryCardCountryCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryCardComponent", function () {
      return CountryCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CountryCardComponent = /*#__PURE__*/function () {
      function CountryCardComponent(router) {
        _classCallCheck(this, CountryCardComponent);

        this.router = router;
      }

      _createClass(CountryCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ShowInfo",
        value: function ShowInfo(country) {
          this.router.navigate(['/MoreInfo/' + country]);
        }
      }]);

      return CountryCardComponent;
    }();

    CountryCardComponent.ɵfac = function CountryCardComponent_Factory(t) {
      return new (t || CountryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CountryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryCardComponent,
      selectors: [["app-country-card"]],
      inputs: {
        country: "country"
      },
      decls: 30,
      vars: 6,
      consts: [[1, "shadow"], ["mat-card-avatar", ""], ["width", "30", 1, "mx-2", 3, "src"], [1, "w-100", "py-2", "px-1", "my-0"], [1, "px-1", "m-0"], [1, "d-flex", "flex-column", "justify-content-center", "justify-content-lg-between", "flex-sm-row", "flex-md-row", "flex-lg-row", "col-lg-12", "p-0"], [1, "col-lg-4", "d-flex", "justify-content-between", "flex-column", "pr-0", "pl-1", "border-right"], [1, "px-0"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1", "border-right"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1"], [1, ""], [1, "d-flex", "justify-content-end"], ["mat-flat-button", "", "color", "primary", 1, "btn-sm", 3, "click"]],
      template: function CountryCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryCardComponent_Template_button_click_28_listener() {
            return ctx.ShowInfo(ctx.country.country);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "More informations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.country.countryInfo.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.countryInfo.iso2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.cases);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.country.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.deaths, "");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".titles[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem !important;\r\n}\r\n.details[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1jYXJkL2NvdW50cnktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5LWNhcmQvY291bnRyeS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVze1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country-card',
          templateUrl: './country-card.component.html',
          styleUrls: ['./country-card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        country: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/drop-down-diplay-mode/drop-down-diplay-mode.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/drop-down-diplay-mode/drop-down-diplay-mode.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DropDownDiplayModeComponent */

  /***/
  function srcAppDropDownDiplayModeDropDownDiplayModeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownDiplayModeComponent", function () {
      return DropDownDiplayModeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function DropDownDiplayModeComponent_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", val_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r2, " ");
      }
    }

    var DropDownDiplayModeComponent = /*#__PURE__*/function () {
      function DropDownDiplayModeComponent() {
        _classCallCheck(this, DropDownDiplayModeComponent);

        this.displayEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = ["Large", "Medium", "Small"];
      }

      _createClass(DropDownDiplayModeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendSelected",
        value: function sendSelected(data) {
          this.displayEvent.emit(data);
        }
      }]);

      return DropDownDiplayModeComponent;
    }();

    DropDownDiplayModeComponent.ɵfac = function DropDownDiplayModeComponent_Factory(t) {
      return new (t || DropDownDiplayModeComponent)();
    };

    DropDownDiplayModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropDownDiplayModeComponent,
      selectors: [["app-drop-down-diplay-mode"]],
      outputs: {
        displayEvent: "displayEvent"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "text-dark", "text-muted"], [1, "text-dark", "text-muted", 3, "valueChange"], ["displayMode", ""], ["class", "text-dark text-muted", 3, "value", 4, "ngFor", "ngForOf"], [1, "text-dark", "text-muted", 3, "value"]],
      template: function DropDownDiplayModeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Display mode: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DropDownDiplayModeComponent_Template_mat_select_valueChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.sendSelected(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropDownDiplayModeComponent_mat_option_5_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb3AtZG93bi1kaXBsYXktbW9kZS9kcm9wLWRvd24tZGlwbGF5LW1vZGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownDiplayModeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-drop-down-diplay-mode',
          templateUrl: './drop-down-diplay-mode.component.html',
          styleUrls: ['./drop-down-diplay-mode.component.css']
        }]
      }], function () {
        return [];
      }, {
        displayEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/drop-down-sort/drop-down-sort.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/drop-down-sort/drop-down-sort.component.ts ***!
    \************************************************************/

  /*! exports provided: DropDownSortComponent */

  /***/
  function srcAppDropDownSortDropDownSortComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownSortComponent", function () {
      return DropDownSortComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function DropDownSortComponent_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", val_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r2, " ");
      }
    }

    var DropDownSortComponent = /*#__PURE__*/function () {
      function DropDownSortComponent() {
        _classCallCheck(this, DropDownSortComponent);

        this.sortingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = ["Confirmed", "Deaths", "Recovereds"];
      }

      _createClass(DropDownSortComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "callMethodeAlerty",
        value: function callMethodeAlerty(val) {
          this.sortingEvent.emit(val);
        }
      }]);

      return DropDownSortComponent;
    }();

    DropDownSortComponent.ɵfac = function DropDownSortComponent_Factory(t) {
      return new (t || DropDownSortComponent)();
    };

    DropDownSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropDownSortComponent,
      selectors: [["app-drop-down-sort"]],
      outputs: {
        sortingEvent: "sortingEvent"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "text-dark", "text-muted"], [1, "text-dark", "text-muted", 3, "valueChange"], ["ModeSort", ""], ["class", "text-dark text-muted", 3, "value", 4, "ngFor", "ngForOf"], [1, "text-dark", "text-muted", 3, "value"]],
      template: function DropDownSortComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sort by: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DropDownSortComponent_Template_mat_select_valueChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.callMethodeAlerty(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropDownSortComponent_mat_option_5_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb3AtZG93bi1zb3J0L2Ryb3AtZG93bi1zb3J0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownSortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-drop-down-sort',
          templateUrl: './drop-down-sort.component.html',
          styleUrls: ['./drop-down-sort.component.css']
        }]
      }], function () {
        return [];
      }, {
        sortingEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer-main/footer-main.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/footer-main/footer-main.component.ts ***!
    \******************************************************/

  /*! exports provided: FooterMainComponent */

  /***/
  function srcAppFooterMainFooterMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterMainComponent", function () {
      return FooterMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterMainComponent = /*#__PURE__*/function () {
      function FooterMainComponent() {
        _classCallCheck(this, FooterMainComponent);
      }

      _createClass(FooterMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterMainComponent;
    }();

    FooterMainComponent.ɵfac = function FooterMainComponent_Factory(t) {
      return new (t || FooterMainComponent)();
    };

    FooterMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterMainComponent,
      selectors: [["app-footer-main"]],
      decls: 3,
      vars: 0,
      consts: [[1, "footer-nav", "py-2"], [1, "text-dark", "text-center", "text-muted", "py-3"]],
      template: function FooterMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Created by Essahl anas \xA9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer-nav[_ngcontent-%COMP%]\r\n{\r\n  z-index: 232;\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #d4d4d4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyLW1haW4vZm9vdGVyLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXItbWFpbi9mb290ZXItbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1uYXZcclxue1xyXG4gIHotaW5kZXg6IDIzMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer-main',
          templateUrl: './footer-main.component.html',
          styleUrls: ['./footer-main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/health-info/health-info.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/health-info/health-info.component.ts ***!
    \******************************************************/

  /*! exports provided: HealthInfoComponent */

  /***/
  function srcAppHealthInfoHealthInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthInfoComponent", function () {
      return HealthInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    var HealthInfoComponent = /*#__PURE__*/function () {
      function HealthInfoComponent() {
        _classCallCheck(this, HealthInfoComponent);
      }

      _createClass(HealthInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HealthInfoComponent;
    }();

    HealthInfoComponent.ɵfac = function HealthInfoComponent_Factory(t) {
      return new (t || HealthInfoComponent)();
    };

    HealthInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HealthInfoComponent,
      selectors: [["app-health-info"]],
      decls: 97,
      vars: 0,
      consts: [[1, "col-lg-12", "mt-2", "px-0", "px-sm-1", "px-md-2", "px-lg-4"], [1, "fas", "fa-notes-medical"], ["mat-align-tabs", "center", 1, "col-lg-12"], ["label", "Symptoms", 1, ""], [1, "d-flex", "flex-column", "py-4", "mx-0"], [1, "symp_titles"], [1, "font-weight-bold"], [1, "d-block", "position-relative", "my-3"], [1, "symp_titles", "py-1", "font-weight-bold"], ["label", "Prevention"], [1, "text-justify", "symp_titles"], [1, "py-1"], ["label", "Treatments"], ["href", "https://www.who.int/", "ping", "/url?sa=t&source=web&rct=j&url=https://www.who.int/&ved=2ahUKEwjUp5qZxo7qAhVH3IUKHTv4AOAQz0AwB3oECAcQIQ", 1, "FdAEGc"], ["multi", ""], [1, "bg-light"], [1, "text-dark"], [1, "pb-4", "text-dark"], [1, "d-block", "ml-auto", "p-3"], ["target", "_blank", "href", "https://www.google.com/search?q=corona&rlz=1C1CHBD_frMA903MA903&oq=co&aqs=chrome.0.69i59l3j69i57j69i60j69i61j69i60j69i65.2225j0j4&sourceid=chrome&ie=UTF-8"]],
      template: function HealthInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Health Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Most common symptoms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "fever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "dry cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "tiredness ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Less common symptoms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "aches and pains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "sore throat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "diarrhoea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "conjunctivitis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "headache");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "loss of taste or smell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "a rash on skin, or discolouration of fingers or toes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-divider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "To prevent the spread of COVID-19:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Clean your hands often. Use soap and water, or an alcohol-based hand rub.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Maintain a safe distance from anyone who is coughing or sneezing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Don\u2019t touch your eyes, nose or mouth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Stay home if you feel unwell.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Follow the directions of your local health authority.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "To date, there are no specific vaccines or medicines for COVID-19. Treatments are under investigation, and will be tested through clinical trials.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "World Health Organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-expansion-panel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-panel-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Self care ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "If you feel sick you should rest, drink plenty of fluid, and eat nutritious food. Stay in a separate room from other family members, and use a dedicated bathroom if possible. Clean and disinfect frequently touched surfaces. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Everyone should keep a healthy lifestyle at home. Maintain a healthy diet, sleep, stay active, and make social contact with loved ones through the phone or internet. Children need extra love and attention from adults during difficult times. Keep to regular routines and schedules as much as possible. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " It is normal to feel sad, stressed, or confused during a crisis. Talking to people you trust, such as friends and family, can help. If you feel overwhelmed, talk to a health worker or counsellor. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-expansion-panel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-panel-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Medical treatments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider or a COVID-19 information line for advice. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Seek medical care if you have a fever, a cough, and difficulty breathing. Call in advance. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Source : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "www.google.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardFooter"]],
      styles: ["li[_ngcontent-%COMP%]{\r\n  font-size: medium;\r\n}\r\n.symp_titles[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLWluZm8vaGVhbHRoLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC1pbmZvL2hlYWx0aC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4uc3ltcF90aXRsZXN7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-health-info',
          templateUrl: './health-info.component.html',
          styleUrls: ['./health-info.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _info_card_world_wide_info_card_world_wide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../info-card-world-wide/info-card-world-wide.component */
    "./src/app/info-card-world-wide/info-card-world-wide.component.ts");
    /* harmony import */


    var _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../health-info/health-info.component */
    "./src/app/health-info/health-info.component.ts");
    /* harmony import */


    var _continent_main_continent_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../continent-main/continent-main.component */
    "./src/app/continent-main/continent-main.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "col-lg-12", "d-flex", "flex-lg-row", "flex-md-row", "flex-sm-column", "flex-column", "my-4"], [1, "d-flex", "col-lg-8", "px-0", "px-sm-1", "px-md-2", "px-lg-4", "h-100", "flex-column"], [1, "w-100", "h-50", "px-0"], [1, "w-100", "h-50"], [1, "col-lg-4", "px-0"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-card-world-wide", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-health-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-continent-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_info_card_world_wide_info_card_world_wide_component__WEBPACK_IMPORTED_MODULE_1__["InfoCardWorldWideComponent"], _health_info_health_info_component__WEBPACK_IMPORTED_MODULE_2__["HealthInfoComponent"], _continent_main_continent_main_component__WEBPACK_IMPORTED_MODULE_3__["ContinentMainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info-card-world-wide/info-card-world-wide.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/info-card-world-wide/info-card-world-wide.component.ts ***!
    \************************************************************************/

  /*! exports provided: InfoCardWorldWideComponent */

  /***/
  function srcAppInfoCardWorldWideInfoCardWorldWideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoCardWorldWideComponent", function () {
      return InfoCardWorldWideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_worldreport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/worldreport.service */
    "./src/app/_services/worldreport.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function InfoCardWorldWideComponent_mat_progress_bar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
      }
    }

    function InfoCardWorldWideComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "World Wide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "last update ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-actions", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoCardWorldWideComponent_div_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.redirectToStatistic();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "See Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dataSource.data.last_update);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dataSource.data.total_cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dataSource.data.recovery_cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dataSource.data.death_cases);
      }
    }

    var InfoCardWorldWideComponent = /*#__PURE__*/function () {
      function InfoCardWorldWideComponent(route, worldservice) {
        _classCallCheck(this, InfoCardWorldWideComponent);

        this.route = route;
        this.worldservice = worldservice;
        this.statusbar = false;
      }

      _createClass(InfoCardWorldWideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.worldservice.getWorldWideReport().then(function (response) {
            _this2.dataSource = response;
            _this2.statusbar = true;
          });
        }
      }, {
        key: "redirectToStatistic",
        value: function redirectToStatistic() {
          this.route.navigate(['/Statistic']);
        }
      }]);

      return InfoCardWorldWideComponent;
    }();

    InfoCardWorldWideComponent.ɵfac = function InfoCardWorldWideComponent_Factory(t) {
      return new (t || InfoCardWorldWideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_worldreport_service__WEBPACK_IMPORTED_MODULE_2__["WorldreportService"]));
    };

    InfoCardWorldWideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoCardWorldWideComponent,
      selectors: [["app-info-card-world-wide"]],
      decls: 2,
      vars: 2,
      consts: [["style", "margin-top: 10px;", "mode", "indeterminate", 4, "ngIf"], ["class", "col-lg-12 px-0 px-sm-1 px-md-2 px-lg-4", 4, "ngIf"], ["mode", "indeterminate", 2, "margin-top", "10px"], [1, "col-lg-12", "px-0", "px-sm-1", "px-md-2", "px-lg-4"], [1, "col-lg-12"], ["mat-card-avatar", ""], ["src", "../../assets/img/language_googblue_48dp.png", "alt", ""], [1, "postion-ralative", "w-100", "py-2", "px-1", "my-0"], [1, "px-1", "m-0"], [1, "d-flex", "flex-column", "justify-content-center", "justify-content-lg-between", "flex-sm-row", "flex-md-row", "flex-lg-row", "col-lg-12", "p-0"], [1, "col-lg-4", "d-flex", "justify-content-between", "flex-column", "pr-0", "pl-1", "border-right"], [1, "px-0", "titles", "text-black-50", "mb-2", "text-muted"], [1, "details", "pb-2"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1", "border-right"], [1, "col-lg-4", "d-flex", "flex-column", "pr-0", "pl-1"], [1, "d-flex", "justify-content-end"], ["mat-flat-button", "", "color", "primary", 1, "btn-sm", 3, "click"]],
      template: function InfoCardWorldWideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoCardWorldWideComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoCardWorldWideComponent_div_1_Template, 33, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statusbar == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: [".details[_ngcontent-%COMP%]\r\n{\r\nfont-weight: bold;\r\nfont-size: 1.2rem;\r\n}\r\n.titles[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: 5px;\r\n  font-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jYXJkLXdvcmxkLXdpZGUvaW5mby1jYXJkLXdvcmxkLXdpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2luZm8tY2FyZC13b3JsZC13aWRlL2luZm8tY2FyZC13b3JsZC13aWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsc1xyXG57XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4udGl0bGVzXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCardWorldWideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-card-world-wide',
          templateUrl: './info-card-world-wide.component.html',
          styleUrls: ['./info-card-world-wide.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_worldreport_service__WEBPACK_IMPORTED_MODULE_2__["WorldreportService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info-country/info-country.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/info-country/info-country.component.ts ***!
    \********************************************************/

  /*! exports provided: InfoCountryComponent */

  /***/
  function srcAppInfoCountryInfoCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoCountryComponent", function () {
      return InfoCountryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/reports-country-service.service */
    "./src/app/_services/reports-country-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _my_line_chart_my_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../my-line-chart/my-line-chart.component */
    "./src/app/my-line-chart/my-line-chart.component.ts");

    function InfoCountryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "More informations :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Today cases : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Today deaths :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Today recovered : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-divider", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-my-line-chart", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.countryInfo.country, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.countryInfo.countryInfo.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.DateNow);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryInfo.cases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryInfo.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.countryInfo.deaths, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryInfo.todayCases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryInfo.todayDeaths);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryInfo.todayRecovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countryIn", ctx_r0.countryInfo.country);
      }
    }

    var InfoCountryComponent = /*#__PURE__*/function () {
      function InfoCountryComponent(route, ReportsCountryService) {
        _classCallCheck(this, InfoCountryComponent);

        this.route = route;
        this.ReportsCountryService = ReportsCountryService;
        this.countryInfo = null;
      }

      _createClass(InfoCountryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.DateNow = moment__WEBPACK_IMPORTED_MODULE_1__().format("MMM Do YY");
          this.ReportsCountryService.getCountryInfo(this.route.snapshot.params['country']).then(function (res) {
            console.log(res);
            return _this3.countryInfo = res;
          });
        }
      }]);

      return InfoCountryComponent;
    }();

    InfoCountryComponent.ɵfac = function InfoCountryComponent_Factory(t) {
      return new (t || InfoCountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_3__["ReportsCountryServiceService"]));
    };

    InfoCountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoCountryComponent,
      selectors: [["app-info-country"]],
      inputs: {
        themeValue: "themeValue"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "d-flex", "justify-content-center", "align-items-center", "col-lg-12"], ["class", "col-lg-6 bg-light pt-2 border rounded shadow-lg pb-5  px-3", 4, "ngIf"], [1, "col-lg-6", "bg-light", "pt-2", "border", "rounded", "shadow-lg", "pb-5", "px-3"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "lead", "px-3", "pt-2", "mx-3", "mb-5", "border-left"], [1, "px-3"], ["width", "40", "alt", "", 3, "src"], [1, "pt-2"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center", "pb-5", "col-lg-12"], [1, "col-lg-4", "d-flex", "justify-content-center", "flex-column", "pr-0", "pl-1", "border-right"], [1, "px-0"], [1, "font-weight-bold", 2, "font-size", "1.2rem"], [1, "col-lg-4", "d-flex", "justify-content-center", "flex-column", "pr-0", "pl-3", "border-right"], [1, "col-lg-4", "d-flex", "justify-content-center", "flex-column", "pr-0", "pl-3"], [1, "col-lg-12"], [1, "list-unstyled", "d-flex", "flex-column", "flex-sm-column", "flex-md-row", "flex-lg-row", "align-items-center", "justify-content-between", "col-lg-12", "px-0", "mx-0"], [1, "d-flex", "col-lg-4", "px-0", "mx-0", "pl-3", "mb-1", "justify-content-start", "align-items-center"], [1, "discBeforeLi", "bg-warning", "mr-3"], [1, "font-weight-bold", "px-2", 2, "font-size", "1rem"], [1, "d-flex", "col-lg-4", "px-0", "mx-0", "mb-1", "justify-content-start", "align-items-center", "pl-3", "border-left"], [1, "discBeforeLi", "bg-danger", "mr-3"], [1, "discBeforeLi", "bg-success", "mr-3"], [1, "my-4", "bg-gray"], [1, ""], [3, "countryIn"]],
      template: function InfoCountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoCountryComponent_div_1_Template, 47, 10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.countryInfo != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _my_line_chart_my_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["MyLineChartComponent"]],
      styles: [".discBeforeLi[_ngcontent-%COMP%]{\r\nwidth: 25px;\r\nheight: 25px;\r\nborder-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb3VudHJ5L2luZm8tY291bnRyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbmZvLWNvdW50cnkvaW5mby1jb3VudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzY0JlZm9yZUxpe1xyXG53aWR0aDogMjVweDtcclxuaGVpZ2h0OiAyNXB4O1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-country',
          templateUrl: './info-country.component.html',
          styleUrls: ['./info-country.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_3__["ReportsCountryServiceService"]
        }];
      }, {
        themeValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main-nav/main-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/main-nav/main-nav.component.ts ***!
    \************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MainNavComponent = /*#__PURE__*/function () {
      function MainNavComponent(cookieService) {
        _classCallCheck(this, MainNavComponent);

        this.cookieService = cookieService;
        this.ValueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MainNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var CookiesTheme = this.cookieService.get('Theme');

          if (CookiesTheme === 'true') {
            this.ToggleCheckValue = true;
          }
        }
      }, {
        key: "switchTheme",
        value: function switchTheme(value) {
          this.cookieService.set('Theme', value);
          this.ValueEmitter.emit(value);
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ɵfac = function MainNavComponent_Factory(t) {
      return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
    };

    MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainNavComponent,
      selectors: [["main-nav"]],
      outputs: {
        ValueEmitter: "ValueEmitter"
      },
      decls: 12,
      vars: 2,
      consts: [["role", "heading", 1, "navbar_", "py-2", "col-lg-12", "d-flex", "justify-content-lg-between", "flex-column", "flex-sm-column", "flex-md-row", "flex-lg-row", "align-items-center"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "Home", 1, "text-decoration-none"], [1, "navbar-nav", "d-flex", "flex-lg-row", "flex-md-row", "flex-row", "justify-content-center", "mt-lg-0", "my-1", "mt-lg-0"], [1, "nav-item", "mx-2"], ["mat-button", "", "routerLink", "Home", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["mat-button", "", "routerLink", "Statistic", 1, "nav-link"], [1, "text-dark", "position-relative", 3, "checked", "ngModel", "ngModelChange", "change"]],
      template: function MainNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Covid 19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Statistic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainNavComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
            return ctx.ToggleCheckValue = $event;
          })("change", function MainNavComponent_Template_mat_slide_toggle_change_10_listener() {
            return ctx.switchTheme(ctx.ToggleCheckValue);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dark mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.ToggleCheckValue)("ngModel", ctx.ToggleCheckValue);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".navbar_[_ngcontent-%COMP%]{\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJfe1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'main-nav',
          templateUrl: './main-nav.component.html',
          styleUrls: ['./main-nav.component.css']
        }]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
        }];
      }, {
        ValueEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/my-line-chart/my-line-chart.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/my-line-chart/my-line-chart.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyLineChartComponent */

  /***/
  function srcAppMyLineChartMyLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLineChartComponent", function () {
      return MyLineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/reports-country-service.service */
    "./src/app/_services/reports-country-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    function MyLineChartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " // Historique from ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.from, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r0.lineChartData)("labels", ctx_r0.lineChartLabels)("options", ctx_r0.lineChartOptions)("colors", ctx_r0.lineChartColors)("legend", ctx_r0.lineChartLegend)("chartType", ctx_r0.lineChartType)("plugins", ctx_r0.lineChartPlugins);
      }
    }

    var MyLineChartComponent = /*#__PURE__*/function () {
      function MyLineChartComponent(ReportsCountryService) {
        _classCallCheck(this, MyLineChartComponent);

        this.ReportsCountryService = ReportsCountryService;
        this.tableKeys = new Array();
        this.tableValuesCases = new Array();
        this.tableValuesDeaths = new Array();
        this.tableValuesRecovered = new Array();
        this.lineChartData = [{
          data: this.tableValuesCases,
          label: 'Cases'
        }, {
          data: this.tableValuesDeaths,
          label: 'Deaths'
        }, {
          data: this.tableValuesRecovered,
          label: 'Recovereds'
        }];
        this.lineChartLabels = this.tableKeys;
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(255, 193, 7,0.3)',
          borderColor: 'rgba(255, 193, 7,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }, {
          backgroundColor: 'rgba(220, 53, 69,0.5)',
          borderColor: 'rgba(220, 53, 69,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        }, {
          backgroundColor: 'rgba(40, 167, 69,0.7)',
          borderColor: 'rgba(40, 167, 69,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
      }

      _createClass(MyLineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.ReportsCountryService.getStatisticCountry(this.countryIn).then(function (res) {
            _this4.Data = res;

            _this4.fillCases();

            _this4.fillDeaths();

            _this4.fillRecorvered();
          });
        }
      }, {
        key: "fillCases",
        value: function fillCases() {
          for (var _i = 0, _Object$entries = Object.entries(this.Data.timeline.cases); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            this.tableKeys.push("".concat(key));
            this.tableValuesCases.push("".concat(value));
          }

          this.to = this.tableKeys.pop();
          this.from = this.tableKeys.shift();
        }
      }, {
        key: "fillDeaths",
        value: function fillDeaths() {
          for (var _i2 = 0, _Object$entries2 = Object.entries(this.Data.timeline.deaths); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            this.tableValuesDeaths.push("".concat(value));
          }
        }
      }, {
        key: "fillRecorvered",
        value: function fillRecorvered() {
          for (var _i3 = 0, _Object$entries3 = Object.entries(this.Data.timeline.recovered); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                key = _Object$entries3$_i[0],
                value = _Object$entries3$_i[1];

            this.tableValuesRecovered.push("".concat(value));
          }
        }
      }]);

      return MyLineChartComponent;
    }();

    MyLineChartComponent.ɵfac = function MyLineChartComponent_Factory(t) {
      return new (t || MyLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_1__["ReportsCountryServiceService"]));
    };

    MyLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyLineChartComponent,
      selectors: [["app-my-line-chart"]],
      inputs: {
        countryIn: "countryIn"
      },
      decls: 1,
      vars: 1,
      consts: [["style", "display: block;", 4, "ngIf"], [2, "display", "block"], [1, "lead"], [1, "font-weight-bold"], ["baseChart", "", "width", "400", "height", "400", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]],
      template: function MyLineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyLineChartComponent_div_0_Template, 9, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Data != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWxpbmUtY2hhcnQvbXktbGluZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyLineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-line-chart',
          templateUrl: './my-line-chart.component.html',
          styleUrls: ['./my-line-chart.component.css']
        }]
      }], function () {
        return [{
          type: _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_1__["ReportsCountryServiceService"]
        }];
      }, {
        countryIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/table-main/filterCountires.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/table-main/filterCountires.pipe.ts ***!
    \****************************************************/

  /*! exports provided: filterCountires */

  /***/
  function srcAppTableMainFilterCountiresPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterCountires", function () {
      return filterCountires;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var filterCountires = /*#__PURE__*/function () {
      function filterCountires() {
        _classCallCheck(this, filterCountires);
      }

      _createClass(filterCountires, [{
        key: "transform",
        value: function transform(dataSource, termAsearching) {
          if (!dataSource || !termAsearching) {
            return dataSource;
          }

          return dataSource.filter(function (el) {
            return el.country.toLowerCase().indexOf(termAsearching.toLowerCase()) !== -1;
          });
        }
      }]);

      return filterCountires;
    }();

    filterCountires.ɵfac = function filterCountires_Factory(t) {
      return new (t || filterCountires)();
    };

    filterCountires.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterCountires",
      type: filterCountires,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](filterCountires, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterCountires'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/table-main/table-main.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/table-main/table-main.component.ts ***!
    \****************************************************/

  /*! exports provided: TableMainComponent, Alertfield */

  /***/
  function srcAppTableMainTableMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableMainComponent", function () {
      return TableMainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alertfield", function () {
      return Alertfield;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/reports-country-service.service */
    "./src/app/_services/reports-country-service.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _drop_down_sort_drop_down_sort_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../drop-down-sort/drop-down-sort.component */
    "./src/app/drop-down-sort/drop-down-sort.component.ts");
    /* harmony import */


    var _drop_down_diplay_mode_drop_down_diplay_mode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../drop-down-diplay-mode/drop-down-diplay-mode.component */
    "./src/app/drop-down-diplay-mode/drop-down-diplay-mode.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../country-card/country-card.component */
    "./src/app/country-card/country-card.component.ts");
    /* harmony import */


    var _country_card_country_card_medium_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../country-card/country-card-medium.component */
    "./src/app/country-card/country-card-medium.component.ts");
    /* harmony import */


    var _country_card_country_card_small_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../country-card/country-card-small.component */
    "./src/app/country-card/country-card-small.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _filterCountires_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./filterCountires.pipe */
    "./src/app/table-main/filterCountires.pipe.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function TableMainComponent_ng_container_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-country-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r7);
      }
    }

    function TableMainComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMainComponent_ng_container_13_div_1_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filterCountires");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.dataSource, ctx_r1.termAsearching));
      }
    }

    function TableMainComponent_ng_container_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-country-card-medium", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r9);
      }
    }

    function TableMainComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMainComponent_ng_container_14_div_1_Template, 2, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filterCountires");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.dataSource, ctx_r2.termAsearching));
      }
    }

    function TableMainComponent_ng_container_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-country-card-small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r11);
      }
    }

    function TableMainComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMainComponent_ng_container_15_div_1_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filterCountires");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.dataSource, ctx_r3.termAsearching));
      }
    }

    function TableMainComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableMainComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TableMainComponent = /*#__PURE__*/function () {
      function TableMainComponent(ReportCountriesInfo, dialog, zone) {
        _classCallCheck(this, TableMainComponent);

        this.ReportCountriesInfo = ReportCountriesInfo;
        this.dialog = dialog;
        this.zone = zone;
        this.ModeDisplay = 'Medium';
        this.StateDisplaying = true;
        this.errorInternet = false;
      }

      _createClass(TableMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
          this.ReportCountriesInfo.getreportcountries().then(function (response) {
            setInterval(function () {
              return _this5.StateDisplaying = false;
            }, 1000);
            setInterval(function () {
              return _this5.dataSource = response;
            }, 1000);
          }, function (err) {
            _this5.StateDisplaying = false;
            _this5.errorInternet = true;

            _this5.dialog.open(Alertfield);
          })["catch"]();
        } // sort

      }, {
        key: "sorting",
        value: function sorting(SortMode) {
          switch (SortMode) {
            case 'Confirmed':
              this.srt('cases');
              this.scrollToTop();
              break;

            case 'Deaths':
              this.srt('deaths');
              this.scrollToTop();
              break;

            case 'Recovereds':
              this.srt('recovered');
              this.scrollToTop();
              break;
          }
        }
      }, {
        key: "srt",
        value: function srt(field) {
          this.dataSource.sort(function (a, b) {
            if (a[field] > b[field]) {
              return -1;
            } else if (a[field] < b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return this.dataSource;
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "displaying",
        value: function displaying(dispalyMode) {
          return this.ModeDisplay = dispalyMode;
        }
      }]);

      return TableMainComponent;
    }();

    TableMainComponent.ɵfac = function TableMainComponent_Factory(t) {
      return new (t || TableMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_2__["ReportsCountryServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    TableMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableMainComponent,
      selectors: [["app-table-main"]],
      decls: 18,
      vars: 7,
      consts: [[1, "nav", "shadow-lg", "p-0", "col-lg-12"], [1, "d-flex", "justify-content-center", "p-0", "flex-column", "flex-sm-column", "flex-md-column", "flex-lg-row", "py-2", "col-lg-12"], [1, "d-flex", "py-2", "p-0", "col-lg-4", "justify-content-center"], ["f", "ngForm"], [1, "example-form-field"], [1, "text-dark", "text-muted"], ["matInput", "", "placeholder", "filter by country", "name", "Filter", "type", "text", 1, "text-dark", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-center", "align-items-center", "px-0", "mb-1", "col-lg-4"], [1, "w-75", "px-0", "d-flex", "justify-content-center", 3, "sortingEvent"], [1, "d-lg-flex", "d-sm-flex", "d-md-flex", "justify-content-center", "align-items-center", "d-none", "px-0", "col-lg-4"], [1, "w-75", "px-0", "d-flex", "justify-content-center", 3, "displayEvent"], [1, "d-flex", "col-lg-12", "flex-wrap", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "spinner", 4, "ngIf"], ["class", "d-flex col-lg-4 my-2 flex-wrap", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-lg-4", "my-2", "flex-wrap"], ["data-aos", "zoom-in", 1, "w-100", 3, "country"], ["class", "d-flex col-lg-3 my-2 flex-wrap", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-lg-3", "my-2", "flex-wrap"], ["class", "d-flex col-lg-2 my-2 flex-wrap", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-lg-2", "my-2", "flex-wrap"], [1, "spinner"], ["aria-hidden", "true", 1, "fa", "text-secondary", "fa-5x", "fa-wifi"], ["mode", "indeterminate"]],
      template: function TableMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableMainComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.termAsearching = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-drop-down-sort", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortingEvent", function TableMainComponent_Template_app_drop_down_sort_sortingEvent_9_listener($event) {
            return ctx.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-drop-down-diplay-mode", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("displayEvent", function TableMainComponent_Template_app_drop_down_diplay_mode_displayEvent_11_listener($event) {
            return ctx.displaying($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableMainComponent_ng_container_13_Template, 3, 4, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableMainComponent_ng_container_14_Template, 3, 4, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableMainComponent_ng_container_15_Template, 3, 4, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableMainComponent_div_16_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableMainComponent_div_17_Template, 2, 0, "div", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.termAsearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.ModeDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorInternet == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.StateDisplaying == true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _drop_down_sort_drop_down_sort_component__WEBPACK_IMPORTED_MODULE_7__["DropDownSortComponent"], _drop_down_diplay_mode_drop_down_diplay_mode_component__WEBPACK_IMPORTED_MODULE_8__["DropDownDiplayModeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_10__["CountryCardComponent"], _country_card_country_card_medium_component__WEBPACK_IMPORTED_MODULE_11__["CountryCardComponentMedium"], _country_card_country_card_small_component__WEBPACK_IMPORTED_MODULE_12__["CountryCardComponentSmall"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]],
      pipes: [_filterCountires_pipe__WEBPACK_IMPORTED_MODULE_14__["filterCountires"]],
      styles: [".nav[_ngcontent-%COMP%]{\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\ntop: 0;\r\n z-index: 1;\r\n background-color: #bdbdbd;\r\n}\r\n.spinner[_ngcontent-%COMP%]\r\n{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.Dark[_ngcontent-%COMP%]\r\n{\r\n  background-color: #424242;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUtbWFpbi90YWJsZS1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0Esd0JBQWdCO0FBQWhCLGdCQUFnQjtBQUNoQixNQUFNO0NBQ0wsVUFBVTtDQUNWLHlCQUF5QjtBQUMxQjtBQUNBOztFQUVFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQUNsQztBQUNBOztFQUVFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLW1haW4vdGFibGUtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZ7XHJcbnBvc2l0aW9uOiBzdGlja3k7XHJcbnRvcDogMDtcclxuIHotaW5kZXg6IDE7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG59XHJcbi5zcGlubmVyXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLkRhcmtcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-table-main',
          templateUrl: './table-main.component.html',
          styleUrls: ['./table-main.component.css']
        }]
      }], function () {
        return [{
          type: _services_reports_country_service_service__WEBPACK_IMPORTED_MODULE_2__["ReportsCountryServiceService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })(); // tslint:disable-next-line: component-class-suffix


    var Alertfield = function Alertfield() {
      _classCallCheck(this, Alertfield);
    };

    Alertfield.ɵfac = function Alertfield_Factory(t) {
      return new (t || Alertfield)();
    };

    Alertfield.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Alertfield,
      selectors: [["Alertfield"]],
      decls: 8,
      vars: 0,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "fas", "fa-wifi-slash"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]],
      template: function Alertfield_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error 500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Somthing Error , check your internet and reload the page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Alertfield, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'Alertfield',
          templateUrl: 'Alert-field.html'
        }]
      }], null, null);
    })();
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! D:\My Files\pratiques\AngularPratique\Covid19_For_akHotel\covid19SAP\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map