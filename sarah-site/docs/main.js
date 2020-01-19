(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/music/music.component */ "./src/app/main/music/music.component.ts");
/* harmony import */ var _main_books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/books/books.component */ "./src/app/main/books/books.component.ts");
/* harmony import */ var _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _main_tech_tech_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/tech/tech.component */ "./src/app/main/tech/tech.component.ts");








var routes = [
    { path: "", component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'music', component: _main_music_music_component__WEBPACK_IMPORTED_MODULE_4__["MusicComponent"] },
    { path: 'books', component: _main_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"] },
    { path: 'contact', component: _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'tech', component: _main_tech_tech_component__WEBPACK_IMPORTED_MODULE_7__["TechComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Web Browser */\n.header {\n    /* padding: 5px; */\n    text-align: left;\n    background: #1abc9c;\n    color: white;\n    width: 100%;\n    font-size: 20px;\n    position: fixed;\n    padding: 20px;\n    padding-left: 50px;\n    left:0px;\n    top:0px;\n}\n.headerText{\n    color:white;\n    text-decoration: none;\n}\n.headerText:hover {\n    text-decoration: underline;\n}\n.main{\n    margin: 30px;\n    margin-top:  160px;\n}\n.search-section{\n    display: initial;\n}\n.search-input{\n  /* position: center; */\n  width: 75%;\n  font-size: 16px;\n  padding: 12px 20px 12px 20px;\n  border: 1px solid lightslategray;\n}\n.head-info{\n    margin:20px;\n    background: lightslategray;\n    padding: 10px;\n    color: white;\n    border-radius: 5px;\n    text-align: center;\n}\n.head-inside {\n        text-align: left;\n    }\n.bookCards{\n    margin-top: 20px;\n    margin-bottom:40px;\n    margin-left: 50px;\n    padding: 20px;\n    left:25%;\n    background: lightslategray;\n    border-radius: 2px;\n}\n.bookFilter{\n    text-align: center;\n    position: absolute;\n    \n    background-color: #1abc9c;\n    padding: 20px;\n    margin: 20px;\n    border-radius: 2px;\n}\na:link {\n    text-decoration: none;\n}\n.positionAb{\n    position: absolute;\n}\n.marginLarge{\n    margin: 20px;\n    /* padding: 20px; */\n}\n.marginTopLarge{\n    margin-top: 20px;\n    /* padding: 20px; */\n}\n.filterButton{\n    border: solid;\n    border: 4px solid white;\n    padding: 8px;\n    background:white;\n    color: darkslategray;\n    margin: 10px;\n    border-radius: 2px;\n    text-align: center;\n}\n.filterButton:hover{\n    padding: 8px;\n    border: 4px solid lightgray;\n    background:lightgray;\n}\n.home-buttons{\n    margin:20px;\n    background: lightslategray;\n    padding: 50px;\n    color: white;\n    border-radius: 5px;\n    font-size: 30px;\n    text-align: center;\n}\n.home-buttons:hover  {\n        background: darkslategray;\n      }\n/* Create four equal columns that floats next to each other */\n.col-1{\n    float: left;\n    width: 25%;\n}\n.col-3 {\n    float: left;\n    width: 8.3%;\n  }\n.col-4{\n    float: left;\n    width: 33%;\n}\n.col-4-nm{\n    float: left;\n    width: 33%;\n}\n.col-6 {\n    float: left;\n    width: 50%;\n  }\n.col-8{\n    float: left;\n    width: 66%;\n }\n.col-9 {\n    float: left;\n    width: 75%;\n  }\n.col-12 {\n      width: 100%;\n      float: left;\n  }\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n.search-section-hide {\n    display: none;\n}\n/* mobile version */\n@media only screen and (min-width: 416px) and (max-width:800px) {\n\n    .col-m-6{\n        float: left;\n        width: 50%;\n    }\n\n    .col-m-3{\n        float: left;\n        width: 25%;\n    }\n    .search-section{\n        display: none;\n    }\n    .search-section-hide {\n        display: block;\n    }\n\n    .home-buttons{\n\n        padding: 10px;\n        margin: 10px;\n    }\n\n    .home-buttons h2 {\n        margin: 10px;\n    }\n\n    .col-4-m{\n        float: left;\n        width:100%;\n    }\n\n    .main{\n        margin: 0px;\n        margin-top:  160px;\n    }\n\n    h3{\n        margin:5px;\n    }\n    .filterButton{\n        \n        margin: 3px;\n        padding: 0px;\n    }\n\n    .filterButton:hover{\n        padding: 0px;\n        border: 4px solid lightgray;\n        background:lightgray;\n    }\n\n    .bookFilter{\n        margin: 0px;\n        left: 0px;\n        position: fixed;\n        top: 75px;\n        padding: 0px;\n\n    }\n\n    .row-m:after {\n        content: \"\";\n        display: table;\n        clear: both;\n      }\n\n      .bookCards{\n          margin-left: 0px;\n          margin: 20px;\n      }\n      .mobile-card{\n        width:100%;\n    }\n      /* .col-8{\n        float: left;\n        width:100%;\n      } */\n      .main-m{\n        margin-top: 210px;\n    }\n}\n@media only screen and (max-width: 415px) {\n\n    .filterButton{\n        \n        margin: 3px;\n        padding: 0px;\n    }\n\n    .filterButton:hover{\n        padding: 0px;\n        border: 4px solid lightgray;\n        background:lightgray;\n    }\n\n     .col-4-m{\n        float: left;\n        width:100%;\n    }\n    \n    .main-m{\n        margin: 0px;\n        margin-top: 220px;\n    }\n    .mobile-card{\n        width:100%;\n\n    }\n    .search-section-hide {\n        display: block;\n    }\n    .bookFilter{\n        left: 0px;\n        position: fixed;\n        top: 75px;\n        padding: 0px;\n        margin: 0px;\n\n    }\n\n    .bookFilter h3{\n        margin: 10px;\n    }\n\n    .home-buttons{\n\n        padding: 10px;\n        margin: 10px;\n    }\n\n    .home-buttons h2 {\n        margin: 10px;\n    }\n    .bookCards{\n        margin-left: 0px;\n    }\n\n  .search-section{\n        display: none;\n    }\n    .col-m-3{\n        float: left;\n        width: 33%;\n    }\n\n    .col-mm-25{\n        float: left;\n        width: 25%;\n    }\n\n    .col-mm-3{\n        float: left;\n        width: 33%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0FBQ1g7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO1FBQ1EsZ0JBQWdCO0lBQ3BCO0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtRQUNRLHlCQUF5QjtNQUMzQjtBQUNBLDZEQUE2RDtBQUVuRTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0VBQ2I7QUFFRjtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFFRDtJQUNHLFdBQVc7SUFDWCxVQUFVO0NBQ2I7QUFFRDtJQUNJLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFFRjtNQUNNLFdBQVc7TUFDWCxXQUFXO0VBQ2Y7QUFFQSxtQ0FBbUM7QUFDckM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGO0lBQ0ksYUFBYTtBQUNqQjtBQUVFLG1CQUFtQjtBQUVyQjs7SUFFSTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBOztRQUVJLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZUFBZTtRQUNmLFNBQVM7UUFDVCxZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztNQUNiOztNQUVBO1VBQ0ksZ0JBQWdCO1VBQ2hCLFlBQVk7TUFDaEI7TUFDQTtRQUNFLFVBQVU7SUFDZDtNQUNFOzs7U0FHRztNQUNIO1FBQ0UsaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTs7SUFFSTs7UUFFSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0Isb0JBQW9CO0lBQ3hCOztLQUVDO1FBQ0csV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7O0lBRWQ7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO1FBQ2YsU0FBUztRQUNULFlBQVk7UUFDWixXQUFXOztJQUVmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTs7UUFFSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7RUFFRjtRQUNNLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFdlYiBCcm93c2VyICovXG4uaGVhZGVyIHtcbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIGxlZnQ6MHB4O1xuICAgIHRvcDowcHg7XG59XG5cbi5oZWFkZXJUZXh0e1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlclRleHQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWFpbntcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogIDE2MHB4O1xufVxuXG4uc2VhcmNoLXNlY3Rpb257XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbn1cblxuLnNlYXJjaC1pbnB1dHtcbiAgLyogcG9zaXRpb246IGNlbnRlcjsgKi9cbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbn1cblxuLmhlYWQtaW5mb3tcbiAgICBtYXJnaW46MjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JheTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZC1pbnNpZGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuLmJvb2tDYXJkc3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206NDBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxlZnQ6MjUlO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJvb2tGaWx0ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuYTpsaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wb3NpdGlvbkFie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hcmdpbkxhcmdle1xuICAgIG1hcmdpbjogMjBweDtcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xufVxuXG4ubWFyZ2luVG9wTGFyZ2V7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xufVxuXG4uZmlsdGVyQnV0dG9ue1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWx0ZXJCdXR0b246aG92ZXJ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kOmxpZ2h0Z3JheTtcbn1cblxuLmhvbWUtYnV0dG9uc3tcbiAgICBtYXJnaW46MjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JheTtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvbWUtYnV0dG9uczpob3ZlciAge1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xuICAgICAgfVxuICAgICAgLyogQ3JlYXRlIGZvdXIgZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cblxuLmNvbC0xe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wtMyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDguMyU7XG4gIH1cblxuLmNvbC00e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMyU7XG59XG5cbi5jb2wtNC1ubXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMlO1xufVxuXG4uY29sLTYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuIC5jb2wtOHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNjYlO1xuIH0gXG5cbi5jb2wtOSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4uY29sLTEyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuLnNlYXJjaC1zZWN0aW9uLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiAgLyogbW9iaWxlIHZlcnNpb24gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTZweCkgYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcblxuICAgIC5jb2wtbS02e1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuY29sLW0tM3tcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAgIC5zZWFyY2gtc2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaC1zZWN0aW9uLWhpZGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaG9tZS1idXR0b25ze1xuXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAuaG9tZS1idXR0b25zIGgyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIC5jb2wtNC1te1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICAubWFpbntcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6ICAxNjBweDtcbiAgICB9XG5cbiAgICBoM3tcbiAgICAgICAgbWFyZ2luOjVweDtcbiAgICB9XG4gICAgLmZpbHRlckJ1dHRvbntcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmZpbHRlckJ1dHRvbjpob3ZlcntcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJhY2tncm91bmQ6bGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5ib29rRmlsdGVye1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgfVxuXG4gICAgLnJvdy1tOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuXG4gICAgICAuYm9va0NhcmRze1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1jYXJke1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAgIC8qIC5jb2wtOHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB9ICovXG4gICAgICAubWFpbi1te1xuICAgICAgICBtYXJnaW4tdG9wOiAyMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcblxuICAgIC5maWx0ZXJCdXR0b257XG4gICAgICAgIFxuICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5maWx0ZXJCdXR0b246aG92ZXJ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kOmxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAgLmNvbC00LW17XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBcbiAgICAubWFpbi1te1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjIwcHg7XG4gICAgfVxuICAgIC5tb2JpbGUtY2FyZHtcbiAgICAgICAgd2lkdGg6MTAwJTtcblxuICAgIH1cbiAgICAuc2VhcmNoLXNlY3Rpb24taGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYm9va0ZpbHRlcntcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgIH1cblxuICAgIC5ib29rRmlsdGVyIGgze1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuXG4gICAgLmhvbWUtYnV0dG9uc3tcblxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuXG4gICAgLmhvbWUtYnV0dG9ucyBoMiB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgLmJvb2tDYXJkc3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG5cbiAgLnNlYXJjaC1zZWN0aW9ue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY29sLW0tM3tcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuXG4gICAgLmNvbC1tbS0yNXtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuXG4gICAgLmNvbC1tbS0ze1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-header></app-header>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sarah-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/books/books.component */ "./src/app/main/books/books.component.ts");
/* harmony import */ var _main_music_music_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/music/music.component */ "./src/app/main/music/music.component.ts");
/* harmony import */ var _main_home_home_buttons_home_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/home/home-buttons/home-buttons.component */ "./src/app/main/home/home-buttons/home-buttons.component.ts");
/* harmony import */ var _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _main_tech_tech_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/tech/tech.component */ "./src/app/main/tech/tech.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _main_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _main_music_music_component__WEBPACK_IMPORTED_MODULE_9__["MusicComponent"],
                _main_home_home_buttons_home_buttons_component__WEBPACK_IMPORTED_MODULE_10__["HomeButtonsComponent"],
                _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _main_tech_tech_component__WEBPACK_IMPORTED_MODULE_12__["TechComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"header\">\n  <a class=\"headerText\" href=\"/home\">\n    <h2> Sarah's Site</h2>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/books/books.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/books/books.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main main-m\">\n  <div class=\"head-info\" (click)=\"openBookInfo()\">\n    <div>\n      <h1>Books and Booze</h1>\n    </div>\n    <div class=\"head-inside\" *ngIf=\"showContent\">\n      <p>Established in 2017, Books and Booze is a community book club located in Austin, Texas.\n        Founded with the idea to have great conversations about books we wouldn't nessisarily pick up by ourselves,\n        Books and Booze has lead its members through story lines and to many different local coffee shops, breweries,\n        and\n        patios. With monthly meetings, and a sprawling range of genres, there is only one rule of the club</p>\n      <ol>\n        <li>No books where the dog dies</li>\n      </ol>\n      <p>Below is the list of all the books the club has read up to this point.</p>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div>\n      <div id=\"bookFilter\" class=\"col-4 positionAb\">\n        <div class=\"col-9 col-4-m bookFilter\">\n          <h3 class=\"search-section\"> Genre Filter</h3>\n          <div class=\"col-m-6 col-mm-3\" *ngFor=\"let genre of genreList\">\n            <div [ngStyle]=\"{'border':getColor(genre)}\" (click)=\"filterGenre(genre)\" class=\"filterButton\">{{genre}}\n            </div>\n          </div>\n          <p>{{filterBy}}</p>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-4 col-4-m\">\n      <p class=\"\"> </p>\n    </div>\n    <div class=\"col-8 col-4-m\">\n      <div style=\"left:200px\" *ngFor=\"let book of filteredList\">\n        <div class=\"bookCards\">\n          <div class=\"row\">\n            <div class=\"col-3 col-m-3 col-mm-25\">\n              <h2>{{book.number}}</h2>\n            </div>\n            <div class=\"col-9 marginTopLarge\">\n\n              <div class=\"\">{{book.title}} by {{book.author}}</div>\n              <div>Genre: {{book.subgenre}}</div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/books/books.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/books/books.component.ts ***!
  \***********************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books.json */ "./src/app/main/books/books.json");
var _books_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./books.json */ "./src/app/main/books/books.json", 1);



var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
        this.bookList = _books_json__WEBPACK_IMPORTED_MODULE_2__["books"];
        this.genreList = ["Mystery", "Spy Fiction", "Non-Fiction", "Sci-Fi", "Novel", "Short Stories", "Fantasy"];
        this.filteredList = _books_json__WEBPACK_IMPORTED_MODULE_2__["books"];
        this.showContent = false;
        this.filterBy = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent.prototype.openBookInfo = function () {
        if (this.showContent === true) {
            this.showContent = false;
        }
        else {
            this.showContent = true;
        }
    };
    BooksComponent.prototype.getColor = function (genre) {
        if (this.filterBy.indexOf(genre, 0) > -1) {
            return "4px solid lightslategray";
        }
        else {
            return "4px solid white";
        }
    };
    BooksComponent.prototype.filterGenre = function (genrePicked) {
        var _this = this;
        // console.log(genrePicked);
        if (this.filterBy.indexOf(genrePicked, 0) > -1) {
            this.filterBy.splice(this.filterBy.indexOf(genrePicked, 0), 1);
        }
        else {
            this.filterBy.push(genrePicked);
        }
        if (this.filterBy.length < 1) {
            this.filteredList = this.bookList;
        }
        else {
            this.filteredList = this.bookList.filter(function (d) { return d.genre === _this.filterBy[0] || d.genre === _this.filterBy[1] ||
                d.genre === _this.filterBy[2] || d.genre === _this.filterBy[3] || d.genre === _this.filterBy[4]
                || d.genre === _this.filterBy[5] || d.genre === _this.filterBy[6]; });
        }
    };
    BooksComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        // console.log(number);
        if (number >= 150) {
            document.getElementById("bookFilter").style.position = "fixed";
            document.getElementById("bookFilter").style.top = "130px";
            // document.getElementById("bookFilter").style.width = "230px";
        }
        else {
            document.getElementById("bookFilter").style.position = "absolute";
            document.getElementById("bookFilter").style.top = "";
            // document.getElementById("bookFilter").style.width = "230px";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BooksComponent.prototype, "onWindowScroll", null);
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/main/books/books.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/main/books/books.json":
/*!***************************************!*\
  !*** ./src/app/main/books/books.json ***!
  \***************************************/
/*! exports provided: books, default */
/***/ (function(module) {

module.exports = {"books":[{"title":"Hard-Boiled Wonderland and the End of the World","author":"Haruki Murakami","year":"2017","genre":"Science Fiction","subgenre":"Speculative Fiction, Science Fiction","number":"1","selector":"Sarah Thompson"},{"title":"The Killing Lessons","author":"Saul Black","year":"2017","number":"2","genre":"Mystery","subgenre":"Mystery, Murder Mystery","selector":"Kassidy Hulen"},{"title":"The 100-Year-Old Man Who Climbed out the Window and Disappeared","author":"Jonas Jonasson","year":"2017","number":"3","genre":"Novel","subgenre":"Novel, Adventure, Comedy Fiction","selector":"Emily Hiler"},{"title":"The Secret Agent","author":"Joseph Conrad","year":"2017","number":"4","genre":"Spy Fiction","subgenre":"Spy Fiction","selector":"Caleb Upson"},{"title":"Boomerang","author":"Michael Lewis","year":"2017","number":"5","genre":"Non-Fiction","subgenre":"Non-Fiction, Finance Lit","selector":"Luke Thomas"},{"title":"Welcome to the Monkey House","author":"Kurt Vonnugut","year":"2018","number":"6","genre":"Short Stories","subgenre":"Short Stories, Comdey Fiction","selector":"Sarah Thompson"},{"title":"Modern Romance","author":"Aziz Anzari","year":"2018","number":"7","subgenre":"Non-Fiction","genre":"Non-Fiction","selector":"Maggie Wolff"},{"title":"Snowcrash","author":"Neal Stephenson","year":"2018","number":"8","genre":"Science Fiction","subgenre":"Cyber Punk, Science Fiction","selector":"Ben Sullivan"},{"title":"Euphoria","author":"Lily King","year":"2018","number":"9","genre":"Novel","subgenre":"Novel, Historical Fiction","selector":"Charmecia Morris"},{"title":"Children of the New World","author":"Alexander Weinstein","year":"2018","number":"10","genre":"Short Stories","subgenre":"Short Stories, Science Fiction","selector":"David Garcia"},{"title":"What If?: Serious Scientific Answers to Absurd Hypothetical Questions.","author":"Randall Munroe","year":"2018","number":"11","genre":"Non-Fictin","subgenre":"Non-Fiction, Comedic Essays","selector":"Tim Cavell"},{"title":"Childhood's End","author":"Arthur C. Clarke","year":"2018","number":"12","genre":"Science Fiction","subgenre":"Science Fiction","selector":"Tyler Wiethorn"},{"title":"Eleanor Oliphant is Completely Fine","author":"Gail Honeyman","year":"2018","number":"13","genre":"Novel","subgenre":"Novel, Contemporary Romance","selector":"Emily Hiler"},{"title":"Give Me Your Hand","author":"Megan Abbott","year":"2018","number":"14","genre":"Mystery","subgenre":"Mystery, Psychological Thriller","selector":"Maggie Wolff"},{"title":"The Alice Network","author":"Kate Quinn","year":"2018","number":"15","genre":"Spy Fiction","subgenre":"Spy Fiction","selector":"Sarah Parzyck"},{"title":"Fir Tree","author":"Hans Christian Andersen","year":"2018","number":"16","genre":"Short Stories","subgenre":"Short Story, Holiday","selector":"Tim Cavell"},{"title":"The Curse of Bigness","author":"Tim Wu","year":"2019","number":"17","genre":"Non-Fiction","subgenre":"Non-Fiction, Technology","selector":"Ben Sullivan"},{"title":"The Last Girlfriend on Earth","author":"Simon Rich","year":"2019","number":"18","genre":"Short Stories","subgenre":"Short Stories, Comedy","selector":"Caleb Upson"},{"title":"Devil in the White City","author":"Erik Larson","year":"2019","number":"19","genre":"Non-Fiction","subgenre":"Non-Fiction, Biography, True Crime","selector":"Sarah Thompson"},{"title":"Belgarath the Sorcerer","author":"David Eddings","year":"2019","number":"20","genre":"Fantasy","subgenre":"Fantasy","selector":"Hayley Buffkin"},{"title":"Something in the Water","author":"Catherine Steadman","year":"2019","number":"21","genre":"Mystery","subgenre":"Mystery, Psychological Thriller","selector":"Maggie Wolff"},{"title":"Little Fires Everywhere","author":"Celeste Ng","year":"2019","number":"22","genre":"Novel","subgenre":"Novel, Domestic Fiction","selector":"Allison Cleere"},{"title":"Order of Time","author":"Carlo Rovelli","year":"2019","number":"23","genre":"Non-Fiction","subgenre":"Non-Fiction, Science","selector":"Charles B"},{"title":"American Spy","author":"Lauren Wilkinson","year":"2019","number":"24","genre":"Spy Fiction","subgenre":"Spy Fiction","selector":"Cody Bowlay"},{"title":"City & the City","author":"China Miéville","year":"2019","number":"25","genre":"Science Fiction","subgenre":"Mystery, Science Fiction","selector":"Sarah Thompson"},{"title":"The Secrets We Kept","author":"LAra Prescott","year":"2019","number":"26","genre":"Spy Fiction","subgenre":"Spy Fiction","selector":"Maggie Wolff"},{"title":"Walking Through Anger: A New Design for Conforonting Conflict in an emotionally Charged World","author":"Christian Conte","year":"2019","number":"27","genre":"Non-Fiction","subgenre":"Non-Fiction","selector":"Caleb Upson"}]};

/***/ }),

/***/ "./src/app/main/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"head-info\">\n    <div>\n      <h2>Contact Me</h2>\n    </div>\n    <div>\n      <p>\n        Linkedin: <a href=\"https://www.linkedin.com/in/sarahthompson3/\"\n          target=\"_blank\">https://www.linkedin.com/in/sarahthompson3/</a>\n      </p>\n      <p>\n        GitHub:\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home-buttons/home-buttons.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/home/home-buttons/home-buttons.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-buttons\">\n    <h2>{{buttonName | titlecase}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home-buttons/home-buttons.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/home/home-buttons/home-buttons.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeButtonsComponent", function() { return HomeButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeButtonsComponent = /** @class */ (function () {
    function HomeButtonsComponent() {
    }
    HomeButtonsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeButtonsComponent.prototype, "buttonName", void 0);
    HomeButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-buttons',
            template: __webpack_require__(/*! ./home-buttons.component.html */ "./src/app/main/home/home-buttons/home-buttons.component.html"),
            styles: [__webpack_require__(/*! ../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeButtonsComponent);
    return HomeButtonsComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div *ngFor=\"let buttonName of buttonList\">\n    <div class=\"col-6 col-4-m\">\n      <a href={{buttonName}}>\n        <app-home-buttons [buttonName]=\"buttonName\"></app-home-buttons>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // @Input() button: Button;
        this.buttonList = ["books", "music", "tech", "contact"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <app-home></app-home>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/music/music.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/music/music.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main main-m\">\n  <div class=\"head-info\" (click)=\"openMusicInfo()\">\n    <div>\n      <h1>music</h1>\n    </div>\n    <div class=\"head-inside\" *ngIf=\"showContent\">\n      <p>A personal challenge to listen to at least 150 albums with “fresh ears” and to write snippets of my thoughts\n        when\n        listening to them. The second part came from a desire to have additional excuses to reach out and talk to people\n        who I care about who might not live where I do. This list is compiled from over 30 people. I asked them the\n        simple question: “If you were going to make a list of albums that people should have listened to, what’s a\n        couple albums that would be on your version?”.\n      </p>\n      <p>\n        My mom says that asking what music people should listen to is “kind of like asking what fruit you should eat?\n        Like, just about everything you can get your hands on.”\n      </p>\n      <p>\n        Below is the list that I got my hands on.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"fullMobile search-section\">\n      <div id=\"bookFilter\" class=\"col-4-m col-4 positionAb\">\n        <div class=\"bookFilter  col-9\">\n          <div class=\"search-section\">\n            <h3>Search</h3>\n            <input class=\"search-input\" (keyup)=\"keySearch($event)\">\n          </div>\n\n          <h3>Decade Scroll</h3>\n          <div class=\"col-m-3\" *ngFor=\"let decade of decadesList | keyvalue\">\n            <div (click)=\"navigateToDecade(decade.value)\" class=\"filterButton\">{{decade.key}}</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4 search-section-hide bookFilter col-4-m\">\n      <div class=\"\">\n        <!-- <div class=\"bookFilter\"> -->\n        <div class=\"\">\n          <h3>Search</h3>\n          <input class=\"search-input\" (keyup)=\"keySearch($event)\">\n        </div>\n\n        <!-- <h3>Decade Scroll</h3> -->\n        <!-- <div class=\"col-m-3\" *ngFor=\"let decade of decadesList | keyvalue\">\n            <div (click)=\"navigateToDecade(decade.value)\" class=\"filterButton\">{{decade.key}}</div>\n          </div> -->\n\n        <!-- </div> -->\n      </div>\n      <p class=\"\"></p>\n    </div>\n    <div class=\"col-4  col-4-m\">\n      <p class=\"\"></p>\n    </div>\n    <div class=\"col-8 mobile-card\">\n      <div style=\"left:200px\" *ngFor=\"let album of filteredMusicList\">\n        <div id={{album.order}} class=\"bookCards\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <h2>({{album.year}})</h2>\n            </div>\n            <div class=\"marginTopLarge col-8\">\n              <div class=\"col-12\">\n                {{album.album}} - {{album.band}}\n              </div>\n              <div class=\"col-12\">\n                <div> Genre: {{album.genre}}<span *ngIf=\"album.secondaryGenre\">, </span> {{album.secondaryGenre}}</div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"album.quote\">\n            {{album.quote}}\n          </div>\n          <div *ngIf=\"album.review\">\n            {{album.review}}\n          </div>\n          <div *ngIf=\"album.score\">\n            {{album.score}}/7\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/music/music.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/music/music.component.ts ***!
  \***********************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.json */ "./src/app/main/music/music.json");
var _music_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./music.json */ "./src/app/main/music/music.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MusicComponent = /** @class */ (function () {
    function MusicComponent(router) {
        this.router = router;
        this.decadesList = { "1960s": "4", "1970s": "58", "1980s": "27", "1990s": "202", "2000s": "110", "2010s": "6" };
        this.showContent = false; //"1950s": "113",  removing this for now?
        this.musicList = _music_json__WEBPACK_IMPORTED_MODULE_2__["albums"];
        this.filteredMusicList = _music_json__WEBPACK_IMPORTED_MODULE_2__["albums"];
        this.filterBy = [];
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent.prototype.keySearch = function (event) {
        var keyLength = event.target.value.length;
        var wordSearch = event.target.value.toLowerCase();
        this.filteredMusicList = this.musicList.filter(function (d) {
            return d.genre.substring(0, keyLength).toLowerCase() === wordSearch ||
                // d.secondaryGenre.substring(0, keyLength).toLowerCase() === wordSearch || 
                // can't do this right now becuase it isn't on every object?
                d.band.substring(0, keyLength).toLowerCase() === wordSearch ||
                d.album.substring(0, keyLength).toLowerCase() === wordSearch;
        });
    };
    MusicComponent.prototype.filterDown = function () {
    };
    MusicComponent.prototype.openMusicInfo = function () {
        if (this.showContent === true) {
            this.showContent = false;
        }
        else {
            this.showContent = true;
        }
    };
    MusicComponent.prototype.navigateToDecade = function (decade) {
        // console.log(decade);
        document.getElementById(decade).scrollIntoView();
    };
    MusicComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        // console.log(number);
        if (number >= 150) {
            document.getElementById("bookFilter").style.position = "fixed";
            document.getElementById("bookFilter").style.top = "130px";
        }
        else {
            document.getElementById("bookFilter").style.position = "absolute";
            document.getElementById("bookFilter").style.top = "";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MusicComponent.prototype, "onWindowScroll", null);
    MusicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/main/music/music.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/main/music/music.json":
/*!***************************************!*\
  !*** ./src/app/main/music/music.json ***!
  \***************************************/
/*! exports provided: albums, default */
/***/ (function(module) {

module.exports = {"albums":[{"order":101,"band":"Camille Saint-Saëns","album":"The Carnival of the Animals ","year":1886,"decade":"1880s","genre":"Classical","suggester":"Matthew Thompson","listnedYet":false},{"order":113,"band":"Frank Sinatra","album":"Songs for Swingin’ Lovers!","year":1956,"decade":"1950s","genre":"Jazz","secondaryGenre":"Standards","suggester":"Rolling Stones","listnedYet":false},{"order":135,"band":"Miles Davis","album":"Kind of Blue","year":1959,"decade":"1950s","genre":"Blues","secondaryGenre":"Jazz","suggester":"Rolling Stones","listnedYet":false},{"order":4,"band":"Nat King Cole","album":"Christmas Songs","year":1960,"decade":"1960s","genre":"Holiday","suggester":"David Thompson","listnedYet":false,"score":7,"review":"Originally released under the album name “The Magic of Christmas” this album is the epitome of cozy. It’s the audible version of snuggling up on a couch near a roaring fireplace, hot tea in your hand and a book in your lap while snow falls right outside. The title track “The Christmas Song” has had dozens of other editions by the likes of: Bing Crosby, Ella Fitzgerald, Frank Sinatra, John Denver, Celine Dion, and Michael Buble - but The Nat King Cole Trio were the first. If you need only one album for a Christmas party, this is the album."},{"order":91,"band":"Bob Dylan","album":"Highway 61 revisted","year":1965,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":185,"band":"The Yardbirds","album":"Having a Rave Up with the Yardbirds","year":1965,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":163,"band":"The Beach Boys","album":"Pet Sounds","year":1966,"decade":"1960s","genre":"Rock","secondaryGenre":"Beach","suggester":"Rolling Stones","listnedYet":false},{"order":54,"band":"Dolly Parton","album":"Hello, I'm Dolly","year":1967,"decade":"1960s","genre":"Country","suggester":"Bonnie Thompson","listnedYet":true,"review":"She's Miley Cirus' godmother - imaigne all the people who only know her from Hannah Montata, though I guess thats better than not knowing her at all. She is a powerhouse of song writing talent."},{"order":7,"band":"Nico and The Velvet Underground","album":"The Velvet Underground & Nico","year":1967,"decade":"1960s","genre":"Punk","secondaryGenre":"Proto-Punk","suggester":"Evan Boyd","listnedYet":false},{"order":19,"band":"The Beatles","album":"Sgt Peppers Lonely Hearts Club  Band","year":1967,"decade":"1960s","genre":"Rock","suggester":"Katie Chilton ","listnedYet":false},{"order":165,"band":"The Doors","album":"Strange Days","year":1967,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":167,"band":"The Jimi HEndrix Experience","album":"Are You Experienced?","year":1967,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":87,"band":"Blood, Sweat and Tears","album":"Child is Father to the Man","year":1968,"decade":"1960s","genre":"Rock","secondaryGenre":"Jazz","suggester":"Rolling Stones","listnedYet":false},{"order":117,"band":"Greatful Dead","album":"Anthem of the Sun","year":1968,"decade":"1960s","genre":"Jam","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":55,"band":"James Taylor","album":"James Taylor","year":1968,"decade":"1960s","genre":"Rock","suggester":"Bonnie Thompson","listnedYet":false},{"order":56,"band":"The Band","album":"Music From Big Pink","year":1968,"decade":"1960s","genre":"Rock","secondaryGenre":"Folk","suggester":"Sam Velaquez","listnedYet":false},{"order":57,"band":"The Beatles","album":"The White Album","year":1968,"decade":"1960s","genre":"Rock","suggester":"Erin Green","listnedYet":false},{"order":105,"band":"Creedence Clearwater Revival","album":"Willy and the Poor Boys","year":1969,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":129,"band":"Led Zeppelin","album":"Led Zeppelin","year":1969,"decade":"1960s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":159,"band":"The Band","album":"The Band","year":1969,"decade":"1960s","genre":"Folk","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":41,"band":"The Beatles","album":"Abbey Road","year":1969,"decade":"1960s","genre":"Rock","suggester":"Kirstie Brenson","listnedYet":false},{"order":175,"band":"The Velvet Underground","album":"The Velvet Underground","year":1969,"decade":"1960s","genre":"Folk","secondaryGenre":"rock","suggester":"Rolling Stones","listnedYet":false},{"order":58,"band":"Simon & Garfunkle","album":"Bridge Over Troubled Water","year":1970,"decade":"1970s","genre":"Rock","secondaryGenre":"Folk","suggester":"Sam Velaquez","listnedYet":false},{"order":83,"band":"B.B. King","album":"Live in Cook County Jail","year":1971,"decade":"1970s","genre":"Blues","suggester":"Rolling Stones","listnedYet":false},{"order":59,"band":"Carly Simon","album":"Carly Simon","year":1971,"decade":"1970s","genre":"Rock","secondaryGenre":"Folk","suggester":"Bonnie Thompson","listnedYet":false},{"order":13,"band":"Carole King","album":"Tapestry","year":1971,"decade":"1970s","genre":"Singer-Songwirter","suggester":"Sam Velaquez","listnedYet":false},{"order":123,"band":"Joni Mitchell","album":"Blue Album","year":1971,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":61,"band":"Led Zeppelin ","album":"IV","year":1971,"decade":"1970s","genre":"Rock","suggester":"Katie Chilton ","listnedYet":false},{"order":60,"band":"Rod Stewart","album":"Every Picture Tells a Story","year":1971,"decade":"1970s","genre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":179,"band":"The Who","album":"Who's Next","year":1971,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":97,"band":"Bonnie Raitt","album":"Give it Up","year":1972,"decade":"1970s","genre":"Rock","secondaryGenre":"Singer-Songwriter","suggester":"Rolling Stones","listnedYet":false},{"order":8,"band":"David Bowie","album":"The Rise and Fall of Ziggy Stardust and the Spiders from Mars","year":1972,"decade":"1970s","genre":"Rock","suggester":"Kirstie Brenson","listnedYet":false},{"order":63,"band":"Neil Young","album":"Harvest","year":1972,"decade":"1970s","genre":"Folk","secondaryGenre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":62,"band":"Rolling Stones","album":"Exile on Main Street","year":1972,"decade":"1970s","genre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":190,"band":"Stevie Wonder","album":"Talking Book","year":1972,"decade":"1970s","genre":"Soul","secondaryGenre":"Rock","suggester":"Bonnie Thompson","listnedYet":false},{"order":64,"band":"Elton John","album":"Goodbye Yellow Brick Road","year":1973,"decade":"1970s","genre":"Rock","suggester":"James Brenson","listnedYet":false},{"order":65,"band":"Marvin Gaye","album":"Let's Get it On","year":1973,"decade":"1970s","genre":"R&B","suggester":"Caleb Upson","listnedYet":false},{"order":46,"band":"Paul McCartneyWings","album":"Band on the Run","year":1973,"decade":"1970s","genre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":147,"band":"Pink Floyd","album":"The Dark Side of the Moon","year":1973,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":157,"band":"Stevie Wonder","album":"Innervisons","year":1973,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":67,"band":"Crosby stills Nash and Young","album":"So Far","year":1974,"decade":"1970s","genre":"Rock","suggester":"Katie Chilton ","listnedYet":false},{"order":188,"band":"Jim Croce","album":"Photographs and Memories","year":1974,"decade":"1970s","genre":"Rock","secondaryGenre":"Folk","suggester":"David Thompson","listnedYet":false},{"order":45,"band":"Kraftwerk","album":"Autobahn","year":1974,"decade":"1970s","genre":"Electronica","secondaryGenre":"Pop","suggester":"Benjamin Sullivan","listnedYet":false},{"order":66,"band":"Shuggie Otis","album":"Inspiration Information","year":1974,"decade":"1970s","genre":"R&B","suggester":"Dr. C","listnedYet":false},{"order":192,"band":"Supertramp","album":"Crime of the Century","year":1974,"decade":"1970s","genre":"Rock","suggester":"David Thompson","listnedYet":false},{"order":120,"band":"The Eagles","album":"On the Border","year":1974,"decade":"1970s","genre":"Rock","suggester":"Hayley Buffkin","listnedYet":false},{"order":49,"band":"Bob Dylan","album":"Blood on the Tracks","year":1975,"decade":"1970s","genre":"Folk","secondaryGenre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":93,"band":"Bob Dylan and the Band","album":"The Basement Tap","year":1975,"decade":"1970s","genre":"Folk","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":99,"band":"Brian Eno","album":"Here Comes the Warm Jets","year":1975,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":52,"band":"Bruce Springsteen","album":"Born to Run","year":1975,"decade":"1970s","genre":"Rock","suggester":"Carolyn Suna","listnedYet":true,"review":"Name a More Icnoic Butt. I'll wait."},{"order":109,"band":"Earth Wind and Fire","album":"The Way of the World","year":1975,"decade":"1970s","genre":"Groove","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":68,"band":"Patti Smith","album":"Horses","year":1975,"decade":"1970s","genre":"Rock","secondaryGenre":"Garage Rock","suggester":"Sally Green","listnedYet":false},{"order":70,"band":"Queen","album":"Night at the Opera","year":1975,"decade":"1970s","genre":"Rock","suggester":"Andy Sullivan","listnedYet":false},{"order":69,"band":"Steely Dan","album":"Katy Lied","year":1975,"decade":"1970s","genre":"Rock","suggester":"Dr. C","listnedYet":false},{"order":53,"band":"Boston","album":"Boston","year":1976,"decade":"1970s","genre":"Rock","suggester":"Andy Sullivan","listnedYet":false},{"order":107,"band":"David Bowie","album":"Station Station","year":1976,"decade":"1970s","genre":"Disco","secondaryGenre":"R&B","suggester":"Rolling Stones","listnedYet":false},{"order":71,"band":"Eagles","album":"Hotel California","year":1976,"decade":"1970s","genre":"Rock","suggester":"Andy Sullivan","listnedYet":false},{"order":127,"band":"Kiss","album":"Destroyer","year":1976,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":149,"band":"Ramones","album":"Ramones","year":1976,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":166,"band":"Steely Dan","album":"Royal Scam","year":1976,"decade":"1970s","genre":"Jazz","secondaryGenre":"Rock","suggester":"Carolyn Suna","listnedYet":false},{"order":170,"band":"Stevie Wonder","album":"Songs in the Key of Life","year":1976,"decade":"1970s","genre":"R&B","suggester":"Erin Green","listnedYet":false},{"order":200,"band":"Billy Joel","album":"The Stranger","year":1977,"decade":"1970s","genre":"Rock","suggester":"David Thompson","listnedYet":false},{"order":20,"band":"Fleetwood Mac","album":"Rumors","year":1977,"decade":"1970s","genre":"Rock","suggester":"Katie Chilton, Erin Gree","listnedYet":false},{"order":119,"band":"Jimmy Buffet","album":"Changes in Latitudes, Changes in Attitudes","year":1977,"decade":"1970s","genre":"Rock","secondaryGenre":"Country","suggester":"Lisa Wagner","listnedYet":false},{"order":85,"band":"Billy Joel","album":"52nd Street","year":1978,"decade":"1970s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":134,"band":"John Denver","album":"Live at Sydney Opera House","year":1978,"decade":"1970s","genre":"Pop","secondaryGenre":"Folk","suggester":"Benjamin Sullivan","listnedYet":false},{"order":131,"band":"Marvin Gaye","album":"Here, My Dear","year":1978,"decade":"1970s","genre":"Groove","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":191,"band":"Willie Nelson","album":"Stardust","year":1978,"decade":"1970s","genre":"Country","suggester":"Rolling Stones","listnedYet":false},{"order":136,"band":"Clash","album":"London Calling","year":1979,"decade":"1970s","genre":"Punk","secondaryGenre":"Rock","suggester":"Sally Green ","listnedYet":false},{"order":82,"band":"Tom Petty","album":"Damn the Torpedos","year":1979,"decade":"1970s","genre":"Rock","suggester":"Sam Velaquez","listnedYet":false},{"order":27,"band":"AC/DC","album":"Back In Black","year":1980,"decade":"1980s","genre":"Rock","suggester":"Andy Sullivan","listnedYet":false},{"order":158,"band":"Pretenders ","album":"Pretenders","year":1980,"decade":"1980s","genre":"Rock","suggester":"Ched Hayes","listnedYet":false},{"order":144,"band":"Rush","album":"Moving Pictures","year":1981,"decade":"1980s","genre":"Rock","suggester":"Andy Sullivan","listnedYet":false},{"order":186,"band":"Micheal Jackson","album":"Thriller","year":1982,"decade":"1980s","genre":"Pop","suggester":"Andy Sullivan","listnedYet":false},{"order":148,"band":"REM","album":"Murmer","year":1983,"decade":"1980s","genre":"Alternative","suggester":"Evan Boyd","listnedYet":false},{"order":95,"band":"Bob Marley and the Wailer","album":"Legend","year":1984,"decade":"1980s","genre":"Reggea","suggester":"Rolling Stones","listnedYet":false},{"order":14,"band":"Talking Heads","album":"Stop Making Sense","year":1984,"decade":"1980s","genre":"Post-Punk","secondaryGenre":"New Wave","suggester":"Sam Velaquez","listnedYet":false},{"order":130,"band":"The Replacements","album":"Let It Be","year":1984,"decade":"1980s","genre":"Punk","secondaryGenre":"Rock","suggester":"Dr. C","listnedYet":false},{"order":173,"band":"The Smiths","album":"The Smiths","year":1984,"decade":"1980s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":193,"band":"Kate Bush","album":"Hounds of Love","year":1985,"decade":"1980s","genre":"Pop","suggester":"Addy Wilson","listnedYet":false},{"order":79,"band":"Janet Jackson","album":"Control","year":1986,"decade":"1980s","genre":"R&B","suggester":"Ben Kruger","listnedYet":false},{"order":156,"band":"Megadeth","album":"Peace Sells… but who's Buying","year":1986,"decade":"1980s","genre":"Metal","suggester":"Evan Boyd","listnedYet":false},{"order":104,"band":"Paul Simon","album":"Graceland","year":1986,"decade":"1980s","genre":"Singer-Songwirter","suggester":"Evan Boyd","listnedYet":false},{"order":88,"band":"Various","album":"Dirty Dancing Soundtrack","year":1987,"decade":"1980s","genre":"Soundtrack","suggester":"Cashie Rohlay","listnedYet":false},{"order":153,"band":"Sonic Youth","album":"Daydream Nation","year":1988,"decade":"1980s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":171,"band":"The Pixies","album":"Surfer Rosa","year":1988,"decade":"1980s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":92,"band":"Mariah Carey","album":"Emotions","year":1991,"decade":"1990s","genre":"R&B","suggester":"Cole Cooper","listnedYet":false},{"order":150,"band":"Nirvana","album":"Nevermind","year":1991,"decade":"1990s","genre":"Grunge","secondaryGenre":"Punk","suggester":"Andy Sullivan","listnedYet":false},{"order":34,"band":"Aphex twins","album":"Selected Ambient works 85-92","year":1992,"decade":"1990s","genre":"Electronica","suggester":"Katie Chilton ","listnedYet":false},{"order":202,"band":"Tori Amos","album":"Little Earthquakes","year":1992,"decade":"1990s","genre":"Singer-Songwirter","suggester":"Sally Green","listnedYet":false},{"order":26,"band":"A Tribe Called Quest","album":"Midnight Marauders","year":1993,"decade":"1990s","genre":"Hip Hop","suggester":"Benjamin Sullivan","listnedYet":false},{"order":162,"band":"Digable Planets","album":"Reachin'","year":1993,"decade":"1990s","genre":"Hip Hop","suggester":"Ben Kruger","listnedYet":false},{"order":115,"band":"Garth Brooks","album":"In Pieces","year":1993,"decade":"1990s","genre":"Country","suggester":"Lisa Wagner","listnedYet":false},{"order":139,"band":"Nirvana","album":"In Utero","year":1993,"decade":"1990s","genre":"Rock","secondaryGenre":"Grunge","suggester":"Rolling Stones","listnedYet":false},{"order":94,"band":"Wu Tang Clan","album":"Enter the Wu Tang","year":1993,"decade":"1990s","genre":"Hip Hop","suggester":"Ryan Daigle","listnedYet":false},{"order":196,"band":"Nas","album":"Illmatic","year":1994,"decade":"1990s","genre":"Hip Hop","suggester":"Addy Wilson","listnedYet":false},{"order":143,"band":"Pearl Jam","album":"Vitalogy","year":1994,"decade":"1990s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":155,"band":"Soundgarden","album":"Superunknown","year":1994,"decade":"1990s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":50,"band":"Weezer","album":"Blue Album","year":1994,"decade":"1990s","genre":"Rock","suggester":"Caleb Upson","listnedYet":false},{"order":73,"band":"Dangelo","album":"Brown Sugar","year":1995,"decade":"1990s","genre":"R&B","suggester":"Caleb Upson","listnedYet":false},{"order":141,"band":"Oasis","album":"What's the Story Morning Glory","year":1995,"decade":"1990s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":89,"band":"Bob Dylan","album":"Time Outta Mind","year":1997,"decade":"1990s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":180,"band":"Modest Mouse","album":"The Lonesome Crowded West","year":1997,"decade":"1990s","genre":"Alternative","suggester":"Mitch fee","listnedYet":false},{"order":169,"band":"The Notorious B.I.G","album":"Life After Death","year":1997,"decade":"1990s","genre":"Hip Hop","secondaryGenre":"Rap","suggester":"Rolling Stones","listnedYet":false},{"band":"Yo La Tango","album":"I Can Hear the Heart Beating as One","year":1997,"decade":"1990s","genre":"Indie Rock","listnedYet":false},{"order":3,"band":"Dixie Chicks","album":"Wide Open Spaces","year":1998,"decade":"1990s","genre":"Country","suggester":"Sarah Parzyck","listnedYet":true,"review":"I have a vague memory of their \"scandel\" back in the early 00's - when I was in early elementary - where they were outspoken about the continued USA involvment in war.  Since then I think of them as a wave of early 21st style female empowerment. Who's to say if anyone agrees. But I think about it. "},{"order":124,"band":"DMX","album":"It's Dark and Hell Is Hot","year":1998,"decade":"1990s","genre":"Rap","suggester":"Ben Kruger","listnedYet":false},{"order":118,"band":"Neutral Milk Hotel","album":"In the Aeroplane Over the Sea","year":1998,"decade":"1990s","genre":"Folk","secondaryGenre":"Indie Rock","suggester":"Ben Kruger","listnedYet":false},{"order":36,"band":"Beck","album":"Midnight Vultures","year":1999,"decade":"1990s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Evan Boyd","listnedYet":false},{"order":111,"band":"Elvis Presley","album":"The Dun Sessions","year":1999,"decade":"1990s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":178,"band":"Rage Against the Machine","album":"The Battle of Los Angeles","year":1999,"decade":"1990s","genre":"Metal","secondaryGenre":"Alternative","suggester":"Benjamin Sullivan","listnedYet":false},{"order":151,"band":"Red Hot Chili Peppers","album":"Californication","year":1999,"decade":"1990s","genre":"Rock","secondaryGenre":"Alternative","suggester":"Rolling Stones","listnedYet":false},{"order":110,"band":"Linkin Park","album":"Hybrid Theory","year":2000,"decade":"2000s","genre":"Rock","secondaryGenre":"Rap","suggester":"Benjamin Sullivan","listnedYet":false},{"order":172,"band":"Outkast","album":"Stankonia","year":2000,"decade":"2000s","genre":"Hip Hop","suggester":"Benjamin Sullivan","listnedYet":false},{"order":126,"band":"Radiohead","album":"Kid A","year":2000,"decade":"2000s","genre":"Alternative","suggester":"Katie Chilton ","listnedYet":false},{"order":177,"band":"The White Stripes","album":"White Blood Cells","year":2001,"decade":"2000s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":103,"band":"Coldplay","album":"A Rush of Blood to the Head","year":2002,"decade":"2000s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":16,"band":"Maroon 5","album":"Songs About Jane","year":2002,"decade":"2000s","genre":"Pop","suggester":"Ryan Daigle","listnedYet":false},{"order":112,"band":"My Chemical Romance","album":"I Brought You My Bullets, You Brought Me Your Love","year":2002,"decade":"2000s","genre":"Punk","suggester":"Brooks Breyel","listnedYet":false},{"order":2,"band":"Wilco","album":"Yankee Hotel Foxtrot","year":2002,"decade":"2000s","genre":"Rock","suggester":"Evan Boyd","listnedYet":false,"score":6,"review":"Walking briskly down side streets, one of two blocks down from the streets you’d normally pass through, cheeks pink from the cool air, and hands wishing for pockets too shove into. It’s early evening, but late in the year so the sun is already starting the down crescendo over the horizon. Neighbors, you don’t know, out on their front pouch give you a passing node as Wilco’s “I’m the Man Who Loves You” pounds into your headphones, pushing your stride forward.m Frankly, if you weren’t so quick to embarrass the song would have you dancing right there down the side walk, but as it is you’re on your way to meet your brother for dinner so a joyful attitude in your step will have to do. It took you less time than you thought to get to where you’re going, so at the last second you take a right instead off a left, make another loop around a few blocks to get to hear the last 6 mins of the album. The sun dips fully behind the horizon, and you go inside for supper."},{"order":86,"band":"Brand New","album":"Deja Entendu","year":2003,"decade":"2000s","genre":"Post-Hardcore","suggester":"Brooks Breyel","listnedYet":false},{"band":"Death Cab For Cutie","album":"Transaltlanticism","year":2003,"decade":"2000s","genre":"Indie Rock","listnedYet":true,"review":"There is a calming sadness in this album, and if I'm going to be honest any Death Cab album. A hope in the sadness of the end of something. Death Cab is my best friend's favorite band, and this just might be her favorite album. The summer before my senior year of college I stayed in Bloominton, Indiana for the summer taking classes, TAing a class, DJing the freshman orientation all summer which meant watching groups of 18 year olds in lanyards on the jittery precipice of the new year or the end of their childhood or both. My best friend wasn't there that summer, but her roommates were. Occasionally we'd go out, and I'd end up sleeping in my best friends empty bed staring at this album framed up on her wall as I go to sleep, the songs being exploratory of the end feeling like a beginning and the beginning feeling like an end."},{"band":"The Shins","album":"Wincing the Night Away","year":2003,"decade":"2000s","genre":"Indie Rock","listnedYet":true,"review":"I had the song Australia on a mix CD my brother had left in the car, it came on right after some song from Local Native's Gorrilla Manor, and right before some Young the Giant song from their self-titled. I'd listen to it driving to my friend's house, in the cold winter months of my sophmore year of highschool when both brothers had long since gone off to school. It's my favourite song off this album, a form of energy that makes it so that I can remember that, here a decade later. "},{"order":21,"band":"The Strokes","album":"Room on Fire","year":2003,"decade":"2000s","genre":"Rock","suggester":"Caleb Upson","listnedYet":false},{"order":132,"band":"Feist","album":"Let it Die","year":2004,"decade":"2000s","genre":"Singer-Songwirter","suggester":"Lisa McGovern","listnedYet":false},{"order":78,"band":"Green Day","album":"American Idoit","year":2004,"decade":"2000s","genre":"Rock","secondaryGenre":"Punk","suggester":"Hayley Buffkin","listnedYet":false},{"order":77,"band":"Kanye","album":"College Dropout","year":2004,"decade":"2000s","genre":"Hip Hop","suggester":"Kirstie Brenson","listnedYet":false},{"order":43,"band":"Lamb of God","album":"Ashes of the Wake","year":2004,"decade":"2000s","genre":"Metal","suggester":"Brooks Breyel","listnedYet":false},{"order":138,"band":"Mad Villian","album":"Madvillainy","year":2004,"decade":"2000s","genre":"Hip Hop","suggester":"Caleb Upson","listnedYet":false},{"order":201,"band":"Young the Giant","album":"Young the Giant","year":2004,"decade":"2000s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Erin Green","listnedYet":false},{"band":"Death Cab For Cutie","album":"Plans","year":2005,"decade":"2000's","genre":"Indie Rock","listnedYet":false},{"order":203,"band":"Great Big Sea","album":"The Hard and the Easy","year":2005,"decade":"2000s","genre":"folk","suggester":"Bonnie Thompson","listnedYet":false},{"order":199,"band":"John Mayeor","album":"Try!","year":2005,"decade":"2000s","genre":"Singer-Songwirter","suggester":"Cashie Rohlay","listnedYet":false},{"order":137,"band":"My Morning Jacket","album":"Z","year":2005,"decade":"2000s","genre":"Indie Rock","suggester":"Rolling Stones","listnedYet":false},{"order":142,"band":"Nujabes","album":"Modal Soul","year":2005,"decade":"2000s","genre":"Hip Hop","suggester":"Benjamin Sullivan","listnedYet":false},{"order":39,"band":"Panic at the Disco","album":"A Fever You Can't Sweat Out","year":2005,"decade":"2000s","genre":"Emo","suggester":"Brooks Breyel","listnedYet":false},{"band":"Sufjan Stevens","album":"Illinois","year":2005,"decade":"2000s","genre":"Indie Rock","listnedYet":true,"review":"The ambition to do an album for each of the states in the country is both admierable and understandably still standing uncomplete. It might remain uncomplete, but I'm glad that at least my home state got one. If visiting Chicago or Illinois in general during winter it is a must listen."},{"order":184,"band":"The Mountain Goats ","album":"The sunset Tree","year":2005,"decade":"2000s","genre":"Folk","suggester":"Ben Kruger","listnedYet":false},{"order":31,"band":"Amy WineHouse","album":"Back to Black","year":2006,"decade":"2000s","genre":"R&B","suggester":"Ryan Daigle","listnedYet":false},{"order":81,"band":"Arctic Monkeys","album":"Whatever People Say I Am, That’s What I’m Not","year":2006,"decade":"2000s","genre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":10,"band":"Belle & Sebastian","album":"The Life Pursuit","year":2006,"decade":"2000s","genre":"Indie Rock","secondaryGenre":"Alternative","suggester":"Dr. C","listnedYet":false},{"band":"Grizzly Bear","album":"Yellow House","year":2006,"decade":"2000s","genre":"Indie Rock","listnedYet":false},{"order":100,"band":"Bon Iver","album":"For Emma Forever Ago","year":2007,"decade":"2000s","genre":"Folk","secondaryGenre":"Indie Rock","suggester":"Kirstie Brenson","listnedYet":false},{"order":116,"band":"Radiohead","album":"In Rainbows","year":2007,"decade":"2000s","genre":"Alternative","suggester":"Katie Chilton ","listnedYet":false},{"order":122,"band":"Streetlight Manifesto","album":"Somewhere in the Between","year":2007,"decade":"2000s","genre":"Ska","secondaryGenre":"Rock","suggester":"Benjamin Sullivan","listnedYet":false},{"band":"The Shins","album":"Chutes too Narrow","year":2007,"decade":"2000s","genre":"Indie Rock","listnedYet":true},{"order":183,"band":"The Wombats","album":"A Guide to Love, Loss & Desperation","year":2007,"decade":"2000s","genre":"Indie Rock","suggester":"Matthew Thompson","listnedYet":false},{"band":"Fleet Foxes","album":"Fleet Foxes","year":2008,"decade":"2000s","genre":"Indie Rock","listnedYet":true},{"order":9,"band":"Frightened Rabbit","album":"The Midnight Organ Fight","year":2008,"decade":"2000s","genre":"Folk","secondaryGenre":"Neo-Folk","suggester":"Mitch fee","listnedYet":false},{"order":18,"band":"Jack Johnson","album":"Sleep Through the Static","year":2008,"decade":"2000s","genre":"Rock","suggester":"Caleb Upson","listnedYet":false},{"band":"Los Campesinos","album":"Hold On ow Youngster...","year":2008,"decade":"2000s","genre":"Indie Rock","listnedYet":false},{"order":133,"band":"MGMT","album":"Oracular Spectacular","year":2008,"decade":"2000s","genre":"Indie Rock","suggester":"Rolling Stones","listnedYet":false},{"order":108,"band":"Sonic Youth","album":"Hits are for Squares","year":2008,"decade":"2000s","genre":"Noise Rock","suggester":"Ched Hayes","listnedYet":false},{"order":189,"band":"Vampie Weekend","album":"Vampire Weekend","year":2009,"decade":"2000s","genre":"Indie Rock","suggester":"Rolling Stones","listnedYet":false},{"order":22,"band":"Fake Problems","album":"Real Ghosts Cuaght on Tape","year":2010,"decade":"2010s","genre":"Punk","suggester":"Mitch fee","listnedYet":false},{"order":125,"band":"Jukebox the Ghost","album":"Everything under the Sun","year":2010,"decade":"2010s","genre":"Indie Rock","suggester":"Matthew Thompson","listnedYet":false},{"order":152,"band":"Kavinsky","album":"Night Call","year":2010,"decade":"2010s","genre":"Soundtrack","secondaryGenre":"Synth Wave","suggester":"Benjamin Sullivan","listnedYet":false},{"order":6,"band":"LCD Soundsystem","album":"This is Happening","year":2010,"decade":"2010s","genre":"Electronica","suggester":"Katie Chilton ","listnedYet":false},{"order":160,"band":"Pavement ","album":"quarentine the past","year":2010,"decade":"2010s","genre":"Alternative","suggester":"Ched Hayes","listnedYet":false},{"order":28,"band":"Alabama Shakes","album":"Boys & Girls","year":2011,"decade":"2010s","genre":"Rock","secondaryGenre":"Blues","suggester":"Caleb Upson","listnedYet":false},{"order":51,"band":"Bon Iver","album":"Bon Iver","year":2011,"decade":"2010s","genre":"Folk","secondaryGenre":"Indie Rock","suggester":"Erin Green","listnedYet":false},{"order":161,"band":"The Beach Boys","album":"Smile","year":2011,"decade":"2010s","genre":"Rock","secondaryGenre":"Beach","suggester":"Rolling Stones","listnedYet":false},{"order":195,"band":"We Are Augustines","album":"We Are Augustines","year":2011,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Mitch fee","listnedYet":false},{"order":30,"band":"Alt-J","album":"An Awesome Wave","year":2012,"decade":"2010s","genre":"Indie Rock","suggester":"Katie Chilton, ","listnedYet":false},{"order":182,"band":"Death Grips","album":"The Money Stone","year":2012,"decade":"2010s","genre":"Hip Hop","suggester":"Evan Boyd","listnedYet":false},{"order":140,"band":"Melody's Echo Chamber","album":"Melody's Echo Chamber","year":2012,"decade":"2010s","genre":"Pysch Rock","secondaryGenre":"Rock","suggester":"Dr. C","listnedYet":false},{"band":"The Shins","album":"Port of Marrow","year":2012,"decade":"2010s","genre":"Indie Rock","listnedYet":true},{"order":47,"band":"Childish Gambino","album":"Because the Internet","year":2013,"decade":"2010s","genre":"Hip Hop ","suggester":"Cashie Rohlay","listnedYet":false},{"order":23,"band":"Daft Punk","album":"Random access Memories","year":2013,"decade":"2010s","genre":"Electronica","secondaryGenre":"Disco","suggester":"Katie Chilton ","listnedYet":false},{"order":42,"band":"Lady GaGa","album":"ArtPOP","year":2013,"decade":"2010s","genre":"Pop","suggester":"Cole Cooper","listnedYet":false},{"order":168,"band":"Laura Mvula","album":"Sing to the Moon","year":2013,"decade":"2010s","genre":"R&B","suggester":"Erin Green","listnedYet":false},{"order":84,"band":"Psychic","album":"Darkside","year":2013,"decade":"2010s","genre":"Electronica","secondaryGenre":"Down tempo","suggester":"Katie Chilton ","listnedYet":false},{"order":75,"band":"Lady GaGa & Tony Bennett","album":"Cheek to Cheek ","year":2014,"decade":"2010s","genre":"Jazz","secondaryGenre":"Pop","suggester":"Cole Cooper","listnedYet":false},{"band":"Little Timmy McFarland of Flight 19","album":"Cruelty","year":2014,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":174,"band":"Microwave","album":"Stovall","year":2014,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Brooks Breyel","listnedYet":false},{"order":1,"band":"Modern Baseball","album":"You're Going to Miss It All","year":2014,"decade":"2010s","genre":"Emo","secondaryGenre":"Indie Rock","suggester":"Caleb Upson","listnedYet":true,"score":7,"quote":"I hate having to think about my future","review":"I’m 22 again, living in Bloomington, Indiana in an old house 2 blocks off campus with 4 of my best friends, a cat, and an intense desire to be involved and doing everything. I spend all my time on the front porch of a house that hosts an LP-FM radio station, with people who make me feel the most utterly like myself that I possibly could, working on purposely ridiculous listicle articles for the station website or on my capstone iOS project. In this chaotic bliss, the creeping graduation date being ignored just on the other side of the horizon, Modern Baseball is a time capsule bringing me right back to that spring. A memory of every ounce of passionate love squeezed from those last months. They sound like the music my friends played at parties in the unfinished basement of their college homes. Angry, sad, happy, and uncertain. Surrounded by the best friends you could imagine. After I graduated, I moved. That summer I drove 7 hours round trip on a week night to see Modern Baseball open with The Front Bottoms for Brand New in Corpus Christi. I’d do it again."},{"order":74,"band":"Sufjan Stevens","album":"Carrie and Lowell","year":2014,"decade":"2010s","genre":"Indie Rock","suggester":"Annie Skirtic ","listnedYet":false},{"band":"(Sandy) Alex G","album":"Trick","year":2015,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":15,"band":"Alabama Shakes","album":"Sound and Color","year":2015,"decade":"2010s","genre":"Rock","secondaryGenre":"Blues","suggester":"Katie Chilton ","listnedYet":false},{"order":90,"band":"Carly Rey Jepson","album":"EMOTION","year":2015,"decade":"2010s","genre":"Pop","suggester":"Cole Cooper, Ryan Daigle","listnedYet":false},{"order":17,"band":"Courtney Barnett's Southtimes I sit and Think, And sometimes I just Sit","album":"Sometimes I Sit and Think, and Sometimes I Just Sit","year":2015,"decade":"2010s","genre":"Indie Rock","suggester":"Evan Boyd","listnedYet":false},{"order":114,"band":"Father John Misty","album":"I love you, Honey Bear","year":2015,"decade":"2010s","genre":"Indie Rock","suggester":"Caleb Upson","listnedYet":false},{"order":270,"band":"Hamilton","album":"Various","year":2015,"decade":"2010s","genre":"Sound Track","secondaryGenre":"Hip Hop","suggester":"Cameron Brenson","listnedYet":true,"score":6,"review":"This album fits perfectly into my niche passion for consumable media that tricks people into learning. Another example could include the computer game Age of Mythology. Hamilton, a rapping musical about one of America’s founding fathers, Alexander Hamilton, that crosses over into pop culture it an enigma. To be frank I think this is crossing over into Operatic territory. It makes me want to re-read the histories, the stories that make up that revolutionary time."},{"order":76,"band":"Laura Stevenson","album":"Cocksure","year":2015,"decade":"2010s","genre":"Indie Rock","suggester":"Carolyn Suna","listnedYet":false},{"band":"Mike Adams at His Hoenst WEight","album":"Best of Boiler Room Classics","year":2015,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":33,"band":"Angel Olsen","album":"My Women","year":2016,"decade":"2010s","genre":"Singer-Songwirter","suggester":"Brendan Bisen","listnedYet":false},{"order":35,"band":"Ariana Grande","album":"Dangerous Women","year":2016,"decade":"2010s","genre":"Pop","suggester":"Cole Cooper","listnedYet":false},{"order":37,"band":"Beyonce","album":"Lemonade","year":2016,"decade":"2010s","genre":"Pop","suggester":"Cole Cooper","listnedYet":false},{"order":176,"band":"Carseat Headrest","album":"Teens of Denial","year":2016,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Evan Boyd","listnedYet":false},{"band":"Frankie and the Witch Fingers","album":"Heavy Roller","year":2016,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":98,"band":"Injury Reserve","album":"Floss","year":2016,"decade":"2010s","genre":"Hip Hop","suggester":"Caleb Upson","listnedYet":false},{"order":72,"band":"Lawrence","album":"Breakfast","year":2016,"decade":"2010s","genre":"R&B","suggester":"Erin Green","listnedYet":false},{"band":"Pinegrove","album":"Cardinal","year":2016,"decade":"2010s","genre":"Indie Rock"},{"band":"Porches","album":"Pool","year":2016,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":11,"band":"Pup","album":"The Dream is Over","year":2016,"decade":"2010s","genre":"Punk","suggester":"Caleb Upson","listnedYet":false},{"order":40,"band":"Sturgill Simpson","album":"A Sailor's Guide to Earth","year":2016,"decade":"2010s","genre":"Country","suggester":"Caleb Upson","listnedYet":false},{"order":38,"band":"Big KRIT","album":"4eva is a Mighty Long Time","year":2017,"decade":"2010s","genre":"Hip Hop","suggester":"Ryan Daigle","listnedYet":false},{"band":"Hoops","album":"Routines","year":2017,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":194,"band":"Lorde","album":"Melodrama","year":2017,"decade":"2010s","genre":"Pop","secondaryGenre":"Electronica","suggester":"Addy Wilson","listnedYet":false},{"order":25,"band":"nilufer yanya","album":"plant feed","year":2017,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Brendan Bisen","listnedYet":false},{"order":106,"band":"Novo Amor","album":"Heiress","year":2017,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Erin Green","listnedYet":false},{"order":164,"band":"Swordfish","album":"Rodia","year":2017,"decade":"2010s","genre":"Emo","suggester":"Mitch fee","listnedYet":false},{"order":80,"band":"SZA","album":"ctrl","year":2017,"decade":"2010s","genre":"R&B","suggester":"Cole Cooper","listnedYet":false},{"order":24,"band":"Tyler Childers","album":"Purgatory","year":2017,"decade":"2010s","genre":"Country","suggester":"Caleb Upson","listnedYet":false},{"order":146,"band":"Vulfpeck","album":"Mr. Finish Line","year":2017,"decade":"2010s","genre":"Pop","suggester":"Caleb Upson","listnedYet":false},{"order":12,"band":"Ariana Grande","album":"Thank U, Next","year":2018,"decade":"2010s","genre":"Pop","suggester":"Cashie Rohlay","listnedYet":false},{"band":"Jukebox the Ghost","album":"Off To the Races","year":2018,"decade":"2010's","genre":"Indie Rock","listnedYet":false},{"order":102,"band":"Kacey Musgraves","album":"Golden Hour","year":2018,"decade":"2010s","genre":"Country","suggester":"Cole Cooper","listnedYet":false},{"order":197,"band":"Parquet Court","album":"Wild Awake","year":2018,"decade":"2010s","genre":"Indie Rock","suggester":"Evan Boyd","listnedYet":false},{"band":"Soccer Mommy","album":"Clean","year":2018,"listnedYet":false},{"order":181,"band":"The Wombats","album":"Beautiful People Will Ruin Your Life","year":2018,"decade":"2010s","genre":"Indie Rock","suggester":"Matthew Thompson","listnedYet":false},{"order":198,"band":"Tierra Whack","album":"Whack World","year":2018,"decade":"2010s","genre":"Hip Hop","suggester":"Evan Boyd","listnedYet":false},{"band":"Whale Bones","album":"Island Fire","year":2018,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":29,"band":"Altin Gun","album":"Gece","year":2019,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Brendan Bisen","listnedYet":false},{"order":32,"band":"Andrew Bird","album":"My Finest Work Yet","year":2019,"decade":"2010s","genre":"Singer-Songwirter","secondaryGenre":"Indie Rock","suggester":"Lisa McGovern","listnedYet":false},{"band":"Heart Attack Man","album":"Fake Blood","year":2019,"genre":"Rock","secondaryGenre":"Garage Rock","listnedYet":false},{"band":"Hovvy","album":"Heavy Lifter","year":2019,"decade":"2010s","genre":"Indie Rock","listnedYet":false},{"order":44,"band":"James Blake","album":"Assume Form","year":2019,"decade":"2010s","genre":"Electronica","secondaryGenre":"R&B","suggester":"Erin Green","listnedYet":false},{"order":128,"band":"Jamilla Wood","album":"Legacy","year":2019,"decade":"2010s","genre":"R&B","suggester":"Carolyn Suna","listnedYet":false},{"order":121,"band":"Jonas Brothers","album":"Happiness Begins","year":2019,"decade":"2010s","genre":"Pop","secondaryGenre":"Rock","suggester":"Rolling Stones","listnedYet":false},{"order":154,"band":"Lana Del Rey","album":"Norman Fucking Rockwell","year":2019,"decade":"2010s","genre":"Hip Hop","secondaryGenre":"Psych Rock","suggester":"Cashie Rohlay","listnedYet":false},{"order":48,"band":"Palehound","album":"Black Friday","year":2019,"decade":"2010s","genre":"Alternative","secondaryGenre":"Indie Rock","suggester":"Carolyn Suna","listnedYet":false},{"order":96,"band":"Vampie Weekend","album":"Father of the Bride","year":2019,"decade":"2010s","genre":"Indie Rock","suggester":"Erin Green","listnedYet":false},{"order":5,"band":"Various","album":"Tiny Changes: A Celebration of the Songs of Scott Hutchison","year":2019,"decade":"2010s","genre":"Folk","suggester":"Mitch fee","listnedYet":false},{"band":"Pinegrove","album":"Marigold","year":2020,"decade":"2020s","genre":"Indie Rock","listnedYet":true,"review":"It's not that I don't really enjoy this album, it is just that this album isn't Cardinal. Glad they are growing and making things that are new, maybe a handful more listens and I'll love it just as much."}]};

/***/ }),

/***/ "./src/app/main/tech/tech.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/tech/tech.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div>\n    <div>\n      <h3> tech etc</h3>\n    </div>\n  </div>\n  <div>\n    <p> things for tech</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/tech/tech.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/tech/tech.component.ts ***!
  \*********************************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechComponent = /** @class */ (function () {
    function TechComponent() {
    }
    TechComponent.prototype.ngOnInit = function () {
    };
    TechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech',
            template: __webpack_require__(/*! ./tech.component.html */ "./src/app/main/tech/tech.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechComponent);
    return TechComponent;
}());



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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahthompson/Desktop/sarahSite/sarah-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map