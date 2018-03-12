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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_news_news_component__ = __webpack_require__("./src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_people_people_component__ = __webpack_require__("./src/app/components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_history_history_component__ = __webpack_require__("./src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__ = __webpack_require__("./src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_research_research_component__ = __webpack_require__("./src/app/components/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_publications_publications_component__ = __webpack_require__("./src/app/components/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_resources_resources_component__ = __webpack_require__("./src/app/components/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_links_links_component__ = __webpack_require__("./src/app/components/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'history',
        component: __WEBPACK_IMPORTED_MODULE_6__components_history_history_component__["a" /* HistoryComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'research',
        component: __WEBPACK_IMPORTED_MODULE_8__components_research_research_component__["a" /* ResearchComponent */]
    },
    {
        path: 'publications',
        component: __WEBPACK_IMPORTED_MODULE_9__components_publications_publications_component__["a" /* PublicationsComponent */]
    }, {
        path: 'resources',
        component: __WEBPACK_IMPORTED_MODULE_10__components_resources_resources_component__["a" /* ResourcesComponent */]
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_3__components_news_news_component__["a" /* NewsComponent */]
    },
    {
        path: 'people',
        component: __WEBPACK_IMPORTED_MODULE_5__components_people_people_component__["a" /* PeopleComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_11__components_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'links',
        component: __WEBPACK_IMPORTED_MODULE_12__components_links_links_component__["a" /* LinksComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_4__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export XhrInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_http_service_service__ = __webpack_require__("./src/app/shared/navbar/navbar-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_news_news_component__ = __webpack_require__("./src/app/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_people_people_component__ = __webpack_require__("./src/app/components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_history_history_component__ = __webpack_require__("./src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component__ = __webpack_require__("./src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_research_research_component__ = __webpack_require__("./src/app/components/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_publications_publications_component__ = __webpack_require__("./src/app/components/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_resources_resources_component__ = __webpack_require__("./src/app/components/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_links_links_component__ = __webpack_require__("./src/app/components/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_history_history_service__ = __webpack_require__("./src/app/components/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_back_status_service__ = __webpack_require__("./src/app/shared/services/back-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_site_components_service__ = __webpack_require__("./src/app/shared/services/site-components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_research_research_component__["a" /* ResearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_publications_publications_component__["a" /* PublicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_links_links_component__["a" /* LinksComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_19__components_history_history_service__["a" /* HistoryService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_http_service_service__["a" /* NavbarHttpServiceService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_back_status_service__["a" /* BackStatusService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_site_components_service__["a" /* SiteComponentsService */],
                __WEBPACK_IMPORTED_MODULE_22__app_service__["a" /* AppService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: XhrInterceptor, multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.authenticated = false;
    }
    AppService.prototype.getCurrentUser = function () {
        this.http.get('http://localhost:8081/api/user/me', { withCredentials: true }).subscribe(function (response) {
            return (response);
        });
    };
    AppService.prototype.isAuthenticate = function () {
        var _this = this;
        this.http.get('http://localhost:8081/api/user/me', { withCredentials: true }).subscribe(function (response) {
            if (response != null) {
                if (response['name']) {
                    _this.authenticated = true;
                }
                else {
                    _this.authenticated = false;
                }
            }
        });
        return this.authenticated;
    };
    AppService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('http://localhost:8081/api/user/me', { headers: headers, withCredentials: true }).subscribe(function (response) {
            if (response != null) {
                if (response['name']) {
                    _this.authenticated = true;
                }
                else {
                    _this.authenticated = false;
                }
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".address-icon i{\r\n  font-size: 36px;\r\n  line-height: 32px;\r\n}\r\n.icons i{\r\n  color: #fff;\r\n  padding: 8px 0px;\r\n  text-align: center;\r\n  height: 30px;\r\n  width: 30px;\r\n  margin-right: 5px;\r\n}\r\n.fa-facebook{\r\n  background-color: #3A5A99;\r\n}\r\n.fa-twitter{\r\n  background-color: #39CBFA;\r\n}\r\n.fa-linkedin{\r\n  background-color: #3D99C0;\r\n}\r\n.fa-github{\r\n  background-color: #000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 offset-lg-2 col-12\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-12 p-0 contact-us\">\n      <h4 class=\"\">CONTACT US</h4><hr>\n    </div>\n  </div>\n  <div class=\"row bg-light pt-3 pb-3 mb-4\">\n    <div class=\"col-lg-12\">\n      <h6>ADDRESS :</h6>\n    </div>\n    <div class=\"col-lg-4 col-4\">\n      Saint Marco Street,\n      6th floor,Tokyo,\n      Japan, 123456.\n    </div>\n    <div class=\"col-lg-4 col-4\">\n      <p class=\"m-0 text-danger\"><i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n        +91 1234567890\n      </p>\n      <p class=\"m-0 text-info\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n        example@gmail.com\n      </p>\n    </div>\n    <div class=\"col-lg-4 col-4 address-icon text-center text-danger\">\n      <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <div class=\"row bg-light pt-3 pb-3 mb-4\">\n    <div class=\"col-lg-6 col-12\">\n      <form>\n        <div class=\"form-row mb-3\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name :\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Company :\">\n          </div>\n        </div>\n        <div class=\"form-row mb-3\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email :\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile :\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Message :\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-danger mb-4\">Send</button>\n      </form>\n    </div>\n    <div class=\"col-lg-6 col-12\">\n      <div style=\"width: 100%\"><iframe width=\"100%\" height=\"300px\" src=\"https://www.mapsdirections.info/en/custom-google-maps/map.php?width=100%&height=600&hl=ru&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=A&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a href=\"https://www.mapsdirections.info/en/custom-google-maps/\">Create Google Map</a> by <a href=\"https://www.mapsdirections.info/en/\">Measure area on map</a></iframe></div>\n      <div class=\"icons\">\n        <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"\"><i class=\"fa fa-github\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <h3 class=\"card-header\">News</h3>\n    <button (click)=\"testSave()\"></button>\n    <br>\n    <p>Our laboratory was established in 1983 within the Electrotechnic Faculty\n      of the Polytechnic University of Bucharest, which didactic and research\n      activities. Some of our major milestones:</p>\n    <ul>\n      <li *ngFor=\"let history of historyList\">\n        {{history.start}} to {{history.stop}} <b>{{history.title}}</b> - {{history.description}}\n      </li>\n      <li>1991 - <b>TEMPUS JEP 2717</b> - Post-universitary School\n        of Computer-Aided Electrical Engineering - First hybrid network of Unix\n        graphic workstations; partnerships with top European laboratories: Graz,\n        Atenas, Genova, Grenoble, Darmastadt, Paris, Bath;\n      <li>1993 - the <b>CAEE' 93</b> conference with\n        120 atendees from 20 countries\n      <li>1994 - the <b>LMN webpage</b> - among the first\n        webpages in Romania\n      <li>1995 to 1997 - <b>INCIP and CoLaborator</b> -\n        The first High Performance Computer at the\n        Polytechnic University of Bucharest\n      <li>1996 to 2000 - <b>JSAEM - ENDE</b>\n      <li>1996 - <b>RJSAEM</b> - The first\n        Romanian-Japanese workshop\n      <li>1996 - <b>TEMPUS JEP 9122</b> - Deployment of\n        PCs LAN, extended partnerships\n      <li>1997 to 2000 - <b>INCO - MANODET</b> -\n        Non-destructive defectostophy\n      <li>2001 to 2004 - <b>FP5/IST/Codestar</b> -\n        in partnership with IMEC, Philips, AMS\n      <li>2005-2008 - <b>FP6/IST/Chameleon RF</b> -\n        Extension of the partnership with IST Lisbon\n      <li>2005-2009 - <b>FP6/EST/EST3</b> - Marie Curie\n        Doctoral School\n      <li>2005-2009 - <b>RTN COMSON</b> - Extending of the\n        industrial European partnerships with\n        Philips, Siemens, ST-Micro\n      <li>2006-2010 - <b>ToK 4nEDA</b> - The first HPC system\n        with 112 nodes at LMN/CIEAC, using parallel MATLAB\n        and COMSOL\n      <li>2005-2008 - <b>CEEX nEDA</b> - National partnership\n        with Cluj and Iasi\n      <li>2006 - Organzied the <b>SCEE 06</b> conference\n        in Sinaia\n      <li>2007-2010 - <b>FP6/MNP/ARTIC</b>\n\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("./src/app/components/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__("./src/app/components/history/history.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(historyService, appService) {
        this.historyService = historyService;
        this.appService = appService;
        this.history = new __WEBPACK_IMPORTED_MODULE_3__history__["a" /* History */](3213, 3213, "sadasdEN", "dasdaEN", "dasdasRO", "dasdasRO");
    }
    HistoryComponent.prototype.testSave = function () {
        this.historyService.save(this.history).subscribe(function (data) {
            console.log(data);
        });
    };
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.appService.getCurrentUser());
        this.historyService.getAll().subscribe(function (data) {
            console.log(data);
            _this.historyList = data;
            console.log(_this.historyList);
        });
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/components/history/history.component.html"),
            styles: [__webpack_require__("./src/app/components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = /** @class */ (function () {
    function HistoryService(httpService) {
        this.httpService = httpService;
    }
    HistoryService.prototype.getAll = function () {
        return this.httpService.get("http://localhost:8081/api/history", { withCredentials: true });
    };
    HistoryService.prototype.save = function (history) {
        return this.httpService.post("http://localhost:8081/api/history", history, { withCredentials: true });
    };
    HistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/components/history/history.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
var History = /** @class */ (function () {
    function History(start, stop, description, title, descriptionRO, titleRO) {
        this.start = start;
        this.stop = stop;
        this.description = description;
        this.title = title;
        this.descriptionRO = descriptionRO;
        this.titleRO = titleRO;
    }
    return History;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#background {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: -100;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n  background-size: cover;\r\n\r\n  /*filter: blur(30px);*/\r\n  /*transform: scale(1.2);*/\r\n\r\n}\r\n.container h1 {\r\n  color: white;\r\n}\r\n.col-xs-4 {\r\n  height: 150px;\r\n}\r\nh5 {\r\n  text-align:center;\r\n  margin-top: 30px;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<video autoplay loop muted id=\"background\">\r\n  <source\r\n    src=\"https://player.vimeo.com/external/179738669.sd.mp4?s=fb42e7e2c8c6ff0d5d0b03dfa6aa8af830019f79&profile_id=165\"\r\n    type=\"video/mp4\">\r\n</video>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 col1 center-block\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <h5>\r\n    <p>Who we are</p>\r\n    <blockquote class=\"blockquote text-center\">\r\n      <p class=\"mb-0\">Welcome to Numerical Methods Laboratory (Laboratorul de Metode Numerice). LMN is a higher education and research\r\n        unit of POLITEHNICA University of Bucharest, Romania (PUB). Its mission is to promote, as excellence center, the\r\n        professional use of computers in electrical engineering.</p>\r\n      <footer class=\"blockquote-footer\">Prof. dr. ing.<cite title=\"Source Title\"> Daniel IOAN</cite></footer>\r\n    </blockquote>\r\n    <button class=\"btn btn-secondary btn-lg center-block\"> About us</button>\r\n  </h5>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/links/links.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"card-header\">Links</h3>\n  <br>\n  <h4>Useful links</h4>\n  <ul>\n    <li><a href=\"http://www.pub.ro\">University POLITEHNICA of Bucharest</a></li>\n    <li><a href=\"http://www.electro.pub.ro\">Electrical Engineering Faculty</a></li>\n    <li><a href=\"http://www.lmn.pub.ro\">Numerical Methods Laboratory</a></li>\n  </ul>\n  <br>\n\n  <h4>Local links</h4>\n  <ul>\n    <li><a href=\"http://ro.wiki.lmn.pub.ro\">Wiki LMN</a></li>\n    <li><a href=\"http://atlas.lmn.pub.ro\">ATLAS Cluster</a></li>\n  </ul>\n  <br>\n\n  <h4>Confereces</h4>\n  <ul>\n    <li><a href=\"http://www.et.utcluj.ro/mps\">MPS 2010</a></li>\n    <li><a href=\"http://oipe.tu-sofia.bg/\">OIPE 2010</a></li>\n    <li><a href=\"http://snet.elth.pub.ro/snet2010/\">SNET 2010</a></li>\n    <li><a href=\"http://www.compumag2011.com\">COMPUMAG 2011</a></li>\n    <li><a href=\"http://www.atee2011.elth.pub.ro\">ATEE 2011</a></li>\n    <li><a href=\"http://cefc2012.org/\">IEEE CEFC 2012</a></li>\n    <li><a href=\"http://scee2012.ethz.ch/\">SCEE 2012</a></li>\n    <li><a href=\"http://www.oipe2012.com/\">OIPE 2012</a></li>\n    <li><a href=\"http://www.electro.pub.ro/cercetaremanifestari.html\">SNET 2012</a></li>\n    <li><a href=\"http://www.iceaa-offshore.org/\">ICEAA 2012</a></li>\n    <li><a href=\"http://www.compumag2013.com/\">COMPUMAG 2013</a></li>\n    <li><a href=\"http://www.atee.upb.ro/\">ATEE 2013</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
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

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-links',
            template: __webpack_require__("./src/app/components/links/links.component.html"),
            styles: [__webpack_require__("./src/app/components/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n  <div class=\"alert alert-danger\" [hidden]=\"!error\">\n    There was a problem logging in. Please try again.\n  </div>\n  <form role=\"form\" (submit)=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username:</label> <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n                                                     [(ngModel)]=\"credentials.username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password:</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n                                                     [(ngModel)]=\"credentials.password\"/>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.credentials = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.app.authenticate(this.credentials, function () {
            _this.router.navigateByUrl('/');
        });
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.app.isAuthenticate()) {
            this.router.navigateByUrl("/");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <h3 class=\"card-header\">News</h3>\n    <br>\n    <div class=\"card-deck\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/howto/img_fjords.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\n            content. This content is a little bit longer.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/howto/img_fjords.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://www.w3schools.com/howto/img_fjords.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Card title</h5>\n          <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional\n            content. This card has even longer content than the first to show that equal height action.</p>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\">Last updated 3 mins ago</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
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

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/components/news/news.component.html"),
            styles: [__webpack_require__("./src/app/components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/people/people.component.css":
/***/ (function(module, exports) {

module.exports = "img{\r\n  padding-top: 5px;\r\n}\r\n.card{\r\n  text-align: center;\r\n}\r\n.col-sm{\r\n  padding-bottom: 5px;\r\n}\r\n.row{\r\n  padding-bottom: 5px;\r\n}\r\n.container{\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"card-header\" style=\"text-align: left\">Professors and Postdocs</h3>\r\n  <br>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h3 class=\"card-header\" style=\"text-align: left\">Students, MSc & PhD students</h3>\r\n  <br>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200\" width=\"200\" class=\"rounded-circle mx-auto d-block\" src=\"http://lmn.pub.ro/images/profu.jpg\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title\"><i>Prof. Dr. Ing. Daniel </i><b>IOAN</b></h6>\r\n          <p class=\"card-text\">\r\n            <b>Email: </b>daniel@lmn.pub.ro<br>\r\n            <b>Home page: </b>http://www.lmn.pub.ro/~daniel\r\n          </p>\r\n          <a href=\"#\" class=\"btn btn-primary\">View More</a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
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

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/components/people/people.component.html"),
            styles: [__webpack_require__("./src/app/components/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".col-sm-6{\r\n  padding-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"card-header\">Projects</h3>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">CHAMELEON RF</h5>\n          <p class=\"card-text\">WComprehensive High-Accuracy Modeling of ELectro-magnetic Effects in Complete Nanoscale\n            RF\n            blocks.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Project details</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">CHAMELEON RF</h5>\n          <p class=\"card-text\">WComprehensive High-Accuracy Modeling of ELectro-magnetic Effects in Complete Nanoscale\n            RF\n            blocks.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Project details</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">CHAMELEON RF</h5>\n          <p class=\"card-text\">WComprehensive High-Accuracy Modeling of ELectro-magnetic Effects in Complete Nanoscale\n            RF\n            blocks.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Project details</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">CHAMELEON RF</h5>\n          <p class=\"card-text\">WComprehensive High-Accuracy Modeling of ELectro-magnetic Effects in Complete Nanoscale\n            RF\n            blocks.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Project details</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">CHAMELEON RF</h5>\n          <p class=\"card-text\">WComprehensive High-Accuracy Modeling of ELectro-magnetic Effects in Complete Nanoscale\n            RF\n            blocks.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Project details</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/publications/publications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"card-header\">Projects</h3>\n  <br>\n  <ul>\n    <li>Six university textbooks;\n    <li>over ten chapters in international books\n    <li>over hundred papers and communications published in Romania and abroad (COMPUMAG, IEEE CEFC, EUROCHIP, ENDE, EDTC, RJJSAEM, SCEE, IGTE, MicroFlu, IEEE SPI, ISEF);\n    <li>over fifty articles in the ISI rated national and international journals (IEEE Trans. on Magnetics, COMPEL, Revue Roumaine des Science Tehniques, PHISICA B)\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
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

var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent() {
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    PublicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-publications',
            template: __webpack_require__("./src/app/components/publications/publications.component.html"),
            styles: [__webpack_require__("./src/app/components/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/components/research/research.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/research/research.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"card-header\">Projects</h3>\n  <br>\n  <ul>\n    <li>Electromagnetic modelling - Computational Electromagnetics (COMPUMAG);\n    <li>Modele de ordin redus (MOR);\n    <li>Scientific Computation in Electrical Eng. (SCEE - CSE);\n      modelling, simulations, optimizations;\n    <li>High Performance Computing (HPC) with Scientific Applications;\n    <li>Computer aided education (CAEE);\n    <li>Electronic Design Automation (EDA) of VLSI Systems - Tools for model extraction (TCAD);\n    <li>Electromagnetic Nondistructive Evaluations and Testing (ENDE, NDT);\n    <li>Coupled Problems - Microfluidics, Multiphysics.\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/research/research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
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

var ResearchComponent = /** @class */ (function () {
    function ResearchComponent() {
    }
    ResearchComponent.prototype.ngOnInit = function () {
    };
    ResearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-research',
            template: __webpack_require__("./src/app/components/research/research.component.html"),
            styles: [__webpack_require__("./src/app/components/research/research.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/resources.component.css":
/***/ (function(module, exports) {

module.exports = ".card-img-bottom {\r\n  color: #fff;\r\n  height: 15rem;\r\n\r\n  background-size: cover;\r\n}\r\n.card-text {\r\n  padding-left: 10px;\r\n}\r\n.card-title {\r\n  padding-left: 10px;\r\n  padding-top: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"card-title\">Resources</h3>\n  <br>\n\n  <ul class=\"nav nav-pills mb-3 nav-justified\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\"\n         aria-controls=\"pills-home\" aria-selected=\"true\">Software</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\"\n         aria-controls=\"pills-profile\" aria-selected=\"false\">Hardware</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">MATLAB vR2016a</h4>\n            </div>\n            <div class=\"card-text\">\n              <ul>\n                <li>Parallel Computing Toolbox</li>\n                <li>Distributed Computing Server</li>\n                <li>Optimization Toolbox</li>\n                <a href=\"http://www.mathworks.com/\">[MathWorks site]</a>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-img-bottom\"\n                 style=\"background: url(https://datacademy.files.wordpress.com/2016/06/matlab-logo.jpg?w=397&h=223&crop=1) center no-repeat;\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-img-bottom\"\n                 style=\"background: url(http://donar.messe.de/exhibitor/hannovermesse/2018/F126250/clogo-273x273-347570.jpg) center no-repeat;\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">COMSOL v5.2</h4>\n            </div>\n            <div class=\"card-text\">\n              <ul>\n                <li>COMSOL Multiphysics</li>\n                <li>AC/DC Module</li>\n                <li>LiveLink for Matlab</li>\n                <li>MEMS Module</li>\n                <li>Optimization Module</li>\n                <li>RF Module</li>\n                <a href=\"http://www.comsol.com/\">[Comsol site]</a>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">ATLAS Beowulf Cluster</h4>\n            </div>\n            <div class=\"card-text\">\n              The Beowulf cluster named Advanced Technology Laboratory Server (ATLAS) was setup at LMN for the purposes\n              of research, training and transfer of knowledge in HPC. The ATLAS Beowulf Cluster consists of 14 nodes,\n              each node being equipped with two quad core processors (8 nodes with INTEL Xeon Nehalem 2.66GHz and\n              72-96GB RAM, and 6 nodes with AMD Opteron Barcelona 2.3GHz with 16GB RAM).\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-img-bottom\"\n                 style=\"background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wikimedia_Foundation_Servers-8055_35.jpg/1200px-Wikimedia_Foundation_Servers-8055_35.jpg) center no-repeat;\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
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

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources',
            template: __webpack_require__("./src/app/components/resources/resources.component.html"),
            styles: [__webpack_require__("./src/app/components/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<div *ngIf=\"router.url != '/'\">\n  <hr class=\"featurette-divider container\">\n  <footer class=\"container\">\n    <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n    <p>&copy; 2018 LMN &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar-http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarHttpServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarHttpServiceService = /** @class */ (function () {
    function NavbarHttpServiceService(httpService) {
        this.httpService = httpService;
    }
    NavbarHttpServiceService.prototype.changeLanguage = function (language) {
        if (language == "ro") {
            return this.httpService.get("http://localhost:8081/api/language?lang=ro", { withCredentials: true });
        }
        else {
            return this.httpService.get("http://localhost:8081/api/language?lang=en", { withCredentials: true });
        }
    };
    NavbarHttpServiceService.prototype.getCurrentLanguage = function () {
        return this.httpService.get("http://localhost:8081/api/language", { withCredentials: true });
    };
    NavbarHttpServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], NavbarHttpServiceService);
    return NavbarHttpServiceService;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" [ngStyle]=\"navbarStyle()\">\n  <a class=\"navbar-brand\" href=\"#\">{{siteComponents[\"site.title\"]}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\"\n           [routerLinkActiveOptions]=\"{ exact: true }\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/history\" routerLinkActive=\"active\">{{siteComponents[\"page.history.title\"]}}<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/news\" routerLinkActive=\"active\">News<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/projects\" routerLinkActive=\"active\">Projects<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/people\" routerLinkActive=\"active\">People<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/research\" routerLinkActive=\"active\">Research<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/publications\" routerLinkActive=\"active\">Publications<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/resources\" routerLinkActive=\"active\">Resources<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/links\" routerLinkActive=\"active\">Links<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"changeLanguage('ro')\" routerLinkActive=\"active\">Change to {{currentLanguage}}<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li [hidden]=\"authenticated()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login<span\n          class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [hidden]=\"!authenticated()\"><a class=\"nav-link\" (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_http_service_service__ = __webpack_require__("./src/app/shared/navbar/navbar-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_back_status_service__ = __webpack_require__("./src/app/shared/services/back-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_site_components_service__ = __webpack_require__("./src/app/shared/services/site-components.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(navbarService, router, appService, http, backService, siteComponentsService) {
        this.navbarService = navbarService;
        this.router = router;
        this.appService = appService;
        this.http = http;
        this.backService = backService;
        this.siteComponentsService = siteComponentsService;
        this.siteComponents = siteComponentsService.siteCompoents;
    }
    NavbarComponent.prototype.navbarStyle = function () {
        // let style={
        //   'bopacity' : this.router.url == '/' ? '0.5' : '1'
        // };
        var style = {};
        return style;
    };
    NavbarComponent.prototype.changeLanguage = function () {
        var _this = this;
        if (this.currentLanguage == "en") {
            this.navbarService.changeLanguage("ro").subscribe(function (data) {
                _this.currentLanguage = data.locale;
            });
            this.navbarService.getCurrentLanguage().subscribe(function (data) {
                console.log("Api language: " + data.locale);
            });
            console.log("Controler " + this.currentLanguage);
        }
        else {
            this.navbarService.changeLanguage("en").subscribe(function (data) {
                _this.currentLanguage = data.locale;
            });
            this.navbarService.getCurrentLanguage().subscribe(function (data) {
                console.log("Api language: " + data.locale);
            });
            console.log("Controler " + this.currentLanguage);
        }
        this.navbarService.getCurrentLanguage();
        location.reload();
    };
    NavbarComponent.prototype.authenticated = function () {
        return this.appService.authenticated;
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('http://localhost:8081/logout', {}, { withCredentials: true }).finally(function () {
            _this.appService.authenticated = false;
            _this.router.navigateByUrl('/login');
        }).subscribe();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.siteComponentsService.getSiteComponents();
        if (!this.backService.getBackendServerStatus()) {
            this.router.navigateByUrl("/maintenance");
        }
        this.navbarService.getCurrentLanguage().subscribe(function (data) {
            console.log(data.locale);
            _this.currentLanguage = data.locale;
        });
        this.appService.isAuthenticate();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navbar_http_service_service__["a" /* NavbarHttpServiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__services_back_status_service__["a" /* BackStatusService */], __WEBPACK_IMPORTED_MODULE_7__services_site_components_service__["a" /* SiteComponentsService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/back-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackStatusService = /** @class */ (function () {
    function BackStatusService(http) {
        this.http = http;
    }
    BackStatusService.prototype.getBackendServerStatus = function () {
        var status = true;
        // this.http.get("http://localhost:8081/health").subscribe(data =>{
        //   console.log(data);
        //   if(data.status == "UP"){
        //     status = true;
        //   }else{
        //     status = false;
        //   }
        // });
        return status;
    };
    BackStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BackStatusService);
    return BackStatusService;
}());



/***/ }),

/***/ "./src/app/shared/services/site-components.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteComponentsService = /** @class */ (function () {
    function SiteComponentsService(http) {
        this.http = http;
        this.siteCompoents = {};
    }
    SiteComponentsService.prototype.getSiteComponents = function () {
        var _this = this;
        this.http.get("http://localhost:8081/api/siteComponents/all", { withCredentials: true }).subscribe(function (response) {
            var data = response;
            for (var i = 0; i < data.length; i++) {
                _this.siteCompoents[data[i].component] = data[i].content;
            }
        });
    };
    SiteComponentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SiteComponentsService);
    return SiteComponentsService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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