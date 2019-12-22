(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../ecommerce/ecommerce.module": [
		"./src/app/modules/ecommerce/ecommerce.module.ts",
		"ecommerce-ecommerce-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/modules/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/modules/app/components/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/modules/app/components/home/home.component.ts");
/* harmony import */ var _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/procurement/procurement.component */ "./src/app/modules/app/components/procurement/procurement.component.ts");
/* harmony import */ var _routes_app_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/app.route */ "./src/app/modules/app/routes/app.route.ts");









// decorators = NgModule
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_7__["ProcurementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes_app_route__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"]),
            ],
            providers: [],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] //AppComponent is root component
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/app/components/app/app.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/app/components/app/app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet> -->\n\n<h1>\n  Angular App\n</h1>\n\n<!--<app-home></app-home>-->\n\n<!-- Top Level Menu Navigation -->\n<nav>\n  <ul>\n    <li>\n      <a routerLink=\"home\">\n        Home\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"procurement\">\n        Procurement\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"ecommerce\">\n        Ecommerce\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<!-- Placeholder to load the DOM generated by the Component match the URL Path -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/app/components/app/app.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/app/components/app/app.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/app/components/app/app.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/app/components/app/app.component.ts ***!
  \*************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/modules/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/modules/app/components/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/modules/app/components/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/app/components/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Home\n</h2>\n\n\n<!-- \n  So Now procurement and inventory does not become child of HomeComponent\n<app-procurement></app-procurement>\n<app-inventory></app-inventory> \n-->"

/***/ }),

/***/ "./src/app/modules/app/components/home/home.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/app/components/home/home.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/app/components/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/app/components/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.AppName = "EInventory";
        this.AppVersion = 1.5;
        this.AppDescription = "";
        this.IsActive = true;
        //this.DataPoints = ["Angular", "React", "NodeJS"];
        this.DataPoints = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    //Automatically understood as function
    HomeComponent.prototype.handleRefresh = function (event) {
        console.log("Refresh Called");
        console.dir(event);
    };
    HomeComponent.prototype.handleDescriptionChange = function (event) {
        console.log(event.target.value);
        this.AppDescription = event.target.value;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/app/components/procurement/procurement.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/app/components/procurement/procurement.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Procurement Component\n</h3>\n\n<div>\n  <span>\n    Counter:\n  </span>\n  <b>\n    {{getCounterIncrementValue()}}\n  </b>\n  <button (click)=\"handleIncrementClick()\">\n    Increment\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/app/components/procurement/procurement.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/app/components/procurement/procurement.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwL2NvbXBvbmVudHMvcHJvY3VyZW1lbnQvcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/app/components/procurement/procurement.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/app/components/procurement/procurement.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProcurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementComponent", function() { return ProcurementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProcurementComponent = /** @class */ (function () {
    function ProcurementComponent(_ChangeDetectorRef) {
        this._ChangeDetectorRef = _ChangeDetectorRef;
        this.CounterValue = 0;
        function TimerCallback() {
            this.CounterValue = this.CounterValue + 1;
            this._ChangeDetectorRef.detectChanges();
        }
        this.TimerId = setInterval(TimerCallback.bind(this), 3000);
    }
    ProcurementComponent.prototype.ngOnInit = function () {
    };
    ProcurementComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.TimerId);
    };
    ProcurementComponent.prototype.handleIncrementClick = function () {
        this.CounterValue = this.CounterValue + 1;
    };
    ProcurementComponent.prototype.getCounterIncrementValue = function () {
        //this.CounterValue = this.CounterValue + 1;
        return this.CounterValue++;
    };
    ProcurementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-procurement',
            template: __webpack_require__(/*! ./procurement.component.html */ "./src/app/modules/app/components/procurement/procurement.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./procurement.component.scss */ "./src/app/modules/app/components/procurement/procurement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProcurementComponent);
    return ProcurementComponent;
}());



/***/ }),

/***/ "./src/app/modules/app/routes/app.route.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/app/routes/app.route.ts ***!
  \*************************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/modules/app/components/home/home.component.ts");
/* harmony import */ var _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/procurement/procurement.component */ "./src/app/modules/app/components/procurement/procurement.component.ts");


var AppRoutes = [
    //URLs
    /*
        Top Level Routing / Free Routes
            http://localhost/
            http://localhost/home
            http://localhost/procurement
            http://localhost/inventory

        Second Level Routing
            http://localhost/inventory/entry
            http://localhost/inventory/list

    */
    {
        path: "",
        pathMatch: "full",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] // new HomeComponent()
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] // new HomeComponent()
    },
    {
        path: "procurement",
        component: _components_procurement_procurement_component__WEBPACK_IMPORTED_MODULE_1__["ProcurementComponent"] // new ProcurementComponent()
    },
    // Lazy Loading of Ecommerce Module
    {
        path: "ecommerce",
        //component : InventoryComponent   // new InventoryComponent()
        loadChildren: "../ecommerce/ecommerce.module#EcommerceModule"
        //URL for JS file for EcommerceModule
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_modules_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/modules/app/app.module */ "./src/app/modules/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

// from this file @angular/platform-browser-dynamic import platformBrowserDynamic can be functions, object, string, number, boolean



if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_modules_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\crisil angular\web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map