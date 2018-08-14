webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-contact/app-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-detail [detailService]=\"service\"></app-detail >"

/***/ }),

/***/ "./src/app/app-contact/app-contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-contact/app-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_service__ = __webpack_require__("./src/app/detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_service_provider__ = __webpack_require__("./src/app/personal.service.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppContactComponent = /** @class */ (function () {
    //injected with service for API data persistence
    function AppContactComponent(service) {
        this.service = service;
    }
    AppContactComponent.prototype.ngOnInit = function () {
    };
    AppContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/app-contact/app-contact.component.html"),
            /* custom provider and factory method,
            fetches resourses from /contact */
            providers: [__WEBPACK_IMPORTED_MODULE_2__personal_service_provider__["a" /* contactServiceProvider */]],
            styles: [__webpack_require__("./src/app/app-contact/app-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */]])
    ], AppContactComponent);
    return AppContactComponent;
}());



/***/ }),

/***/ "./src/app/app-detail/app-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"w3-container  w3-center w3-text-white w3-padding-32\">\n    <h1>\n      <img src=\"..\\assets\\img\\wait.gif\" alt=\"Please wait, loading..\">\n    </h1>\n  </div>\n  \n  <ng-container *ngIf=\"!isLoading\">\n  \n    <div class=\"w3-row-padding\">\n      <!-- Repeat for every Personal Detail -->\n      <ng-container *ngFor=\"let detail of personalDetails\">\n        <div class=\"w3-col s12 m6 l4 w3-section\">\n          <div class=\"w3-card w3-hover-shadow w3-padding w3-round w3-display-container detailCard\" style=\"width:100%; background-color: #9abce3;\">\n            <span class=\"w3-padding-16\">\n              <b> {{ detail.label }}: </b>\n            </span>\n            <br>\n            <span class=\"w3-padding-16\">\n              {{ detail.value }}\n            </span>\n            <br>\n            <span class=\" w3-customRed buttonChild material-icons w3-display-bottomright\" (click)=\"delete(detail)\"> delete</span>\n            <span class=\" w3-customRed buttonChild material-icons w3-display-topright\" (click)=\"select(detail)\"> edit</span>\n          </div>\n        </div>\n      </ng-container>\n  \n  \n  \n      <!-- This is is the ADD NEW card -->\n      <div class=\"w3-col s12 m6 l4 w3-section\">\n        <a (click)=\"newDetail()\">\n          <div class=\"w3-card w3-hover-shadow w3-padding w3-round w3-display-container detailCard \" style=\"width:100%; background-color: #9abce34d;\">\n            <span class=\"w3-padding-16\">\n              <b>   </b>\n            </span>\n            <br>\n            <span class=\"w3-padding-16\">\n            </span>\n            <br>\n            <img src=\"..\\assets\\img\\blue-plus-sign-hi.png\" class=\"buttonChild w3-display-right\" style=\"width:5%\">\n          </div>\n        </a>\n      </div>\n    </div>\n    <!-- Two-way binding\n     -->\n    <app-modal-detail *ngIf=\"selectedPersonal\" [detail]=\"selectedPersonal\" (onClose)=\"closeChildComponent($event)\"></app-modal-detail>\n  \n  </ng-container>"

/***/ }),

/***/ "./src/app/app-detail/app-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-detail/app-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_service__ = __webpack_require__("./src/app/detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_detail_modal_detail_component__ = __webpack_require__("./src/app/modal-detail/modal-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDetailComponent = /** @class */ (function () {
    function AppDetailComponent() {
        //flag for loading screen
        this.isLoading = false;
    }
    //lifecycle hook
    AppDetailComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    //calls service observable and retrieves all personal details for displaying
    AppDetailComponent.prototype.getDetails = function () {
        var _this = this;
        this.isLoading = true;
        this.detailService.getAllDetail()
            .subscribe(function (data) {
            _this.personalDetails = data;
            _this.isLoading = false;
        });
        this.selectedPersonal = undefined;
    };
    //called when clicking on personal detail card in template
    AppDetailComponent.prototype.select = function (detail) {
        console.log("selecting ", detail);
        //value different than undefined/null enables the PersonalDetailComponent
        this.selectedPersonal = detail;
    };
    //listens for child's event
    AppDetailComponent.prototype.closeChildComponent = function (toSave) {
        if (toSave != null) {
            console.log("I should save detail: ", toSave);
            this.updateDetail(toSave);
        }
        this.selectedPersonal = undefined;
    };
    /* uses PersonalService for sending PUT or POST request to backend,
    and updates or creates this.personalDetails */
    AppDetailComponent.prototype.updateDetail = function (toSave) {
        var _this = this;
        if (toSave.id) {
            /* if this is an Update we send a PUT request to the backend,
            and then we udpate the view data matching objects by id */
            this.detailService.updateDetail(toSave).subscribe(function (data) {
                _this.personalDetails.forEach(function (p) {
                    if (p.id === data.id) {
                        p.label = data.label;
                        p.value = data.value;
                        console.log("just replaced values of", p);
                    }
                });
            });
        }
        else {
            /* else if the is a Create, we send a POST request to the backend,
            and then we add the new Detail to the view */
            this.detailService.addDetail(toSave).subscribe(function (data) {
                _this.personalDetails.push(data);
                console.log("just added the new personal: ", data);
            });
        }
    };
    /* present an empty modal for the user to enter data,
    populates it with a new Personal object,
    id is set to undefined, so that backend distinguishes it's Create and not Update,
    backend is responsible for assigning a valid id
     */
    AppDetailComponent.prototype.newDetail = function () {
        var newOne = {
            id: undefined,
            label: "",
            value: ""
        };
        this.selectedPersonal = newOne;
    };
    /* deletes an Personal entry by id */
    AppDetailComponent.prototype.delete = function (toDelete) {
        var _this = this;
        console.log("Attempting to delete id: " + toDelete.id);
        this.detailService.deleteDetail(toDelete).subscribe(function (data) {
            if (data.ok) {
                console.log("delete succesful, remove from view");
                _this.personalDetails.splice(_this.personalDetails.findIndex(function (h) { return h === toDelete; }), 1);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */])
    ], AppDetailComponent.prototype, "detailService", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__modal_detail_modal_detail_component__["a" /* ModalDetailComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modal_detail_modal_detail_component__["a" /* ModalDetailComponent */])
    ], AppDetailComponent.prototype, "detail", void 0);
    AppDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("./src/app/app-detail/app-detail.component.html"),
            styles: [__webpack_require__("./src/app/app-detail/app-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppDetailComponent);
    return AppDetailComponent;
}());



/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar/menu -->\n<nav class=\"w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center\" style=\"z-index: 3; width: 300px; font-weight: bold; display: none;\"\n  id=\"mySidebar\">\n  <br>\n  <h3 class=\"w3-padding-64 w3-center\">\n    <img src=\"../assets/img/appLogo.png\" height=\"80\" width=\"80\" />\n    <!-- Todo, put sizing in css for both img -->\n  </h3>\n  <a href=\"javascript:void(0)\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-padding w3-hide-large\">CLOSE</a>\n  <ng-container *ngIf=\"logedIn\">\n    <a routerLink=\"personal\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">PERSONAL</a>\n    <a routerLink=\"contact\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">CONTACT</a>\n    <a routerLink=\"work\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">FEATURE</a>\n    <a routerLink=\"logout\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-text-red\" (click)=\"Logout()\">LOGOUT</a>\n  </ng-container>\n  <ng-container *ngIf=\"!logedIn\">\n    <a routerLink='login' onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">SIGN IN</a>\n    <a routerLink='signup' routerLinkActive='active' onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">SIGN UP</a>\n    <a onclick=\"w3_close()\" class=\"w3-bar-item w3-button\" (click)=\"TestDrive()\">\n      <img src=\"..\\assets\\img\\drive.png\" style=\"max-width:50%;\" alt=\"Test drive app\"> \n    </a>\n    <a href=\"www.stefworks.ml\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button\">STEFWORKS.ML</a>\n  </ng-container>\n</nav>\n\n<!-- Top menu on small screens -->\n<header class=\"w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16\">\n  <span class=\"w3-left w3-padding\">\n    <img src=\"../assets/img/appLogo.png\" height=\"70\" width=\"70\" /> </span>\n  <a href=\"javascript:void(0)\" class=\"w3-right w3-button w3-white\" onclick=\"w3_open()\">☰</a>\n</header>\n\n<!-- Overlay effect when opening sidebar on small screens -->\n<div class=\"w3-overlay w3-hide-large w3-animate-opacity\" onclick=\"w3_close()\" style=\"cursor: pointer; display: none;\" title=\"close side menu\"\n  id=\"myOverlay\"></div>"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(router, guard, userService) {
        var _this = this;
        this.router = router;
        this.guard = guard;
        this.userService = userService;
        guard.itemValue.subscribe(function (nextValue) {
            _this.logedIn = nextValue;
        });
    }
    AppNavbarComponent.prototype.ngOnInit = function () { };
    AppNavbarComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        this.logedIn = false;
        this.router.navigate(['/login']);
    };
    AppNavbarComponent.prototype.TestDrive = function () {
        var _this = this;
        this.userService.userAuthentication("sas", "sas").subscribe(function (data) {
            localStorage.setItem('userToken', data.token);
            _this.router.navigate(['/personal']);
        }, function (err) {
            //TODO: Do nothing for the moment
        });
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("./src/app/app-navbar/app-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app-personal/app-personal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-detail [detailService]=\"service\"></app-detail >"

/***/ }),

/***/ "./src/app/app-personal/app-personal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-personal/app-personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_service__ = __webpack_require__("./src/app/detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_service_provider__ = __webpack_require__("./src/app/personal.service.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppPersonalComponent = /** @class */ (function () {
    //injected with service for API data persistence
    function AppPersonalComponent(service) {
        this.service = service;
    }
    AppPersonalComponent.prototype.ngOnInit = function () {
    };
    AppPersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-personal',
            template: __webpack_require__("./src/app/app-personal/app-personal.component.html"),
            /* custom provider and factory method,
            fetches resourses from /personal*/
            providers: [__WEBPACK_IMPORTED_MODULE_3__personal_service_provider__["b" /* personalServiceProvider */]],
            styles: [__webpack_require__("./src/app/app-personal/app-personal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */]])
    ], AppPersonalComponent);
    return AppPersonalComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_work_app_work_component__ = __webpack_require__("./src/app/app-work/app-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_personal_app_personal_component__ = __webpack_require__("./src/app/app-personal/app-personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_contact_app_contact_component__ = __webpack_require__("./src/app/app-contact/app-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_sign_up_sign_up_component__ = __webpack_require__("./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_sign_in_sign_in_component__ = __webpack_require__("./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'personal',
        component: __WEBPACK_IMPORTED_MODULE_3__app_personal_app_personal_component__["a" /* AppPersonalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]]
        /*  children: [{
           path: 'personalDetail',
           component: ModalDetailComponent
         }] */
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__app_contact_app_contact_component__["a" /* AppContactComponent */]
    },
    {
        path: 'work',
        component: __WEBPACK_IMPORTED_MODULE_0__app_work_app_work_component__["a" /* AppWorkComponent */]
    },
    /* authentication routes */
    /* { path: 'home', component: HomeComponent,canActivate:[AuthGuard] }, */
    {
        path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_6__user_sign_up_sign_up_component__["a" /* SignUpComponent */] }]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_7__user_sign_in_sign_in_component__["a" /* SignInComponent */] }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-work/app-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-card-4\">\n  <img src=\"..\\assets\\img\\futureFeature.jpg\" class=\"w3-round w3-opacity w3-hover-opacity-off\" style=\"width:100%\" alt=\"feature sketch\">\n</div>\n"

/***/ }),

/***/ "./src/app/app-work/app-work.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-work/app-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppWorkComponent = /** @class */ (function () {
    function AppWorkComponent() {
    }
    AppWorkComponent.prototype.ngOnInit = function () {
    };
    AppWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/app-work/app-work.component.html"),
            styles: [__webpack_require__("./src/app/app-work/app-work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppWorkComponent);
    return AppWorkComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- Permanent compenents  -->\n<app-navbar></app-navbar>\n\n<!-- !PAGE CONTENT! -->\n<div class=\"w3-main\" style=\"margin-left:300px\">\n\n    <!-- Push down content on small screens -->\n    <div class=\"w3-hide-large w3-padding\" style=\"margin-top:83px\"></div>\n    <!-- Changing content -->\n    <router-outlet></router-outlet>\n    \n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__ = __webpack_require__("./src/app/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_navbar_app_navbar_component__ = __webpack_require__("./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_personal_app_personal_component__ = __webpack_require__("./src/app/app-personal/app-personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_contact_app_contact_component__ = __webpack_require__("./src/app/app-contact/app-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_detail_modal_detail_component__ = __webpack_require__("./src/app/modal-detail/modal-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__detail_service__ = __webpack_require__("./src/app/detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_directive__ = __webpack_require__("./src/app/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_detail_app_detail_component__ = __webpack_require__("./src/app/app-detail/app-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_sign_in_sign_in_component__ = __webpack_require__("./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_sign_up_sign_up_component__ = __webpack_require__("./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_work_app_work_component__ = __webpack_require__("./src/app/app-work/app-work.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_personal_app_personal_component__["a" /* AppPersonalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_contact_app_contact_component__["a" /* AppContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modal_detail_modal_detail_component__["a" /* ModalDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__modal_directive__["a" /* ModalDirective */],
                __WEBPACK_IMPORTED_MODULE_16__app_detail_app_detail_component__["a" /* AppDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_21__app_work_app_work_component__["a" /* AppWorkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__detail_service__["a" /* DetailService */], __WEBPACK_IMPORTED_MODULE_20__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__auth_guard__["a" /* AuthGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_0__auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        /* Observable that is used to broadcast whenever a user logs in or logs out */
        this.itemValue = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null) {
            this.itemValue.next(true);
            return true;
        }
        this.router.navigate(['/login']);
        this.itemValue.next(false);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/data-model/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail; });
var Detail = /** @class */ (function () {
    function Detail() {
    }
    return Detail;
}());



/***/ }),

/***/ "./src/app/detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailService = /** @class */ (function () {
    function DetailService(http, personalUrl) {
        this.http = http;
        this.personalUrl = personalUrl;
    }
    DetailService.prototype.getAllDetail = function () {
        return this.http.get(this.personalUrl, { responseType: "json" });
    };
    DetailService.prototype.updateDetail = function (personal) {
        return this.http.put(this.personalUrl, personal);
    };
    DetailService.prototype.addDetail = function (personal) {
        return this.http.post(this.personalUrl, personal);
    };
    DetailService.prototype.deleteDetail = function (personal) {
        return this.http.delete(this.personalUrl + "/" + personal.id, { observe: "response" });
    };
    DetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], String])
    ], DetailService);
    return DetailService;
}());



/***/ }),

/***/ "./src/app/modal-detail/modal-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Card displaying Personal detail -->\n\n\n<!-- Modal for editing the Personal detail-->\n<div appModal id=\"modal01\" class=\"w3-modal w3-black\" \n              style=\"padding-top: 0px; display: block;\">\n  <span class=\"w3-button w3-black w3-xlarge w3-display-topright\" (click)=\"close(detail)\">×</span>\n  <div class=\"w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64\">\n    <form [formGroup]=\"personalForm\" class=\"w3-container w3-light-grey\">\n      <label>Label</label>\n      <input class=\"w3-input w3-border-0\" type=\"text\" formControlName=\"label\">\n\n      <label>Value</label>\n      <input class=\"w3-input w3-border-0\" type=\"text\" formControlName=\"value\">\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modal-detail/modal-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal-detail/modal-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model_data_model__ = __webpack_require__("./src/app/data-model/data-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalDetailComponent = /** @class */ (function () {
    /* injected with a form builder */
    function ModalDetailComponent(fb) {
        this.fb = fb;
        /* event to be emmited to the parent component for closing the DOM object */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /* I placed the call to createForm() here because
    it wouldn't work in the constructor  */
    ModalDetailComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    /* registers the FormControls to the FormGroup */
    ModalDetailComponent.prototype.createForm = function () {
        this.personalForm = this.fb.group({
            label: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            value: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.rebuildForm();
    };
    /* Inserts Personal Detail's data to the form */
    ModalDetailComponent.prototype.rebuildForm = function () {
        this.personalForm.patchValue(this.detail);
    };
    /*   trigered when user closes the edit Modal. */
    ModalDetailComponent.prototype.close = function (toSave) {
        //case: no changes, mother component doesnt 
        if (this.personalForm.pristine) {
            this.onClose.emit(null);
        }
        else {
            this.onClose.emit(this.prepareDetail());
        }
    };
    /* returns the data from the FormModel to a new Personal instance,
    keeps the id field of the original instance */
    ModalDetailComponent.prototype.prepareDetail = function () {
        var formModel = this.personalForm.value;
        var detailToSave = {
            id: this.detail.id,
            label: formModel.label,
            value: formModel.value
        };
        return detailToSave;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__data_model_data_model__["a" /* Detail */])
    ], ModalDetailComponent.prototype, "detail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ModalDetailComponent.prototype, "onClose", void 0);
    ModalDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-detail',
            template: __webpack_require__("./src/app/modal-detail/modal-detail.component.html"),
            styles: [__webpack_require__("./src/app/modal-detail/modal-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ModalDetailComponent);
    return ModalDetailComponent;
}());



/***/ }),

/***/ "./src/app/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDirective = /** @class */ (function () {
    function ModalDirective(el) {
        this.el = el;
        this.el = el;
    }
    ModalDirective.prototype.onclick = function () {
        this.makeModalVisible();
    };
    ModalDirective.prototype.makeModalVisible = function () {
        this.el.nativeElement.style.display = "block";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onclick", null);
    ModalDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appModal]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ModalDirective);
    return ModalDirective;
}());

/*
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}

*/ 


/***/ }),

/***/ "./src/app/personal.service.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return personalServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_service__ = __webpack_require__("./src/app/detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");


var personalUrl = "http://localhost:2300/personal";
var contactUrl = "http://localhost:2300/contact";
var personalServiceFactory = function (http) {
    return new __WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */](http, personalUrl);
};
var contactServiceFactory = function (http) {
    return new __WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */](http, contactUrl);
};
var personalServiceProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */],
    useFactory: personalServiceFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]]
};
var contactServiceProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__detail_service__["a" /* DetailService */],
    useFactory: contactServiceFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]]
};


/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:2300';
    }
    UserService.prototype.registerUser = function (user) {
        var body = {
            username: user.username,
            password: user.password,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + '/register', body, { headers: reqHeader });
    };
    UserService.prototype.userAuthentication = function (username, password) {
        /*
        Not working for SPRING
        var data = "username=" + username + "&password=" + password + "&grant_type=password"; */
        var data = { "username": username,
            "password": password };
        var reqHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + '/auth', data, { headers: reqHeader });
    };
    UserService.prototype.getUserClaims = function () {
        return this.http.get(this.rootUrl + '/user');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\n  <i class=\"material-icons\">error</i> Incorrect username or password\n</div>\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(Username.value,Password.value)\">\n <div class=\"row\">\n   <div class=\"input-field col s12\">\n     <i class=\"material-icons prefix\">account_circle</i>\n     <input type=\"text\" #Username ngModel name=\"username\" placeholder=\"Username\" required>\n   </div>\n </div>\n <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <i class=\"material-icons prefix\">vpn_key</i>\n      <input type=\"password\" #Password ngModel name=\"password\" placeholder=\"Password\" required>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\n      </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoginError = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.OnSubmit = function (username, password) {
        var _this = this;
        this.userService.userAuthentication(username, password).subscribe(function (data) {
            localStorage.setItem('userToken', data.token);
            _this.router.navigate(['/personal']);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/user/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"col s12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"user.userName\" required>\n      <label data-error=\"Required field!\">Username</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" required minlength=\"3\">\n      <label [attr.data-error]=\"password.errors!=null?(password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input class=\"validate\" type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" [pattern]=\"emailPattern\">\n      <label data-error=\"Invalid email!\">Email</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"user.firstname\">\n      <label>First Name</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"user.lastname\">\n      <label>Last Name</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        };
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.userService.registerUser(form.value)
            .subscribe(function (data) {
            console.log(data);
            if (data.success == true) {
                _this.resetForm(form);
                _this.toastr.success('User registration successful');
            }
        }, function (error) {
            //handling this according to the format of the API error response
            console.log(error);
            _this.toastr.error(error.error.message);
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/user/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container w3-padding-64\">\n  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card grey lighten-2\">\n        <div class=\"card-tabs\">\n          <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n            <!-- <li class=\"tab\">\n              <a routerLink='/login' routerLinkActive='active'>Sign In</a>\n            </li>\n            <li class=\"tab\">\n              <a  routerLink='/signup' routerLinkActive='active'>Sign Up</a>\n            </li> -->\n          </ul>\n        </div>\n        <div class=\"card-content white\">\n          <div class=\"row\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map