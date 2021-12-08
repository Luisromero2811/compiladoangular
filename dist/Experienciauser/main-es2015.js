(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/H/historial/historial.component.ts":
/*!****************************************************!*\
  !*** ./src/app/H/historial/historial.component.ts ***!
  \****************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _L_iconos_iconos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../L/iconos/iconos.component */ "./src/app/L/iconos/iconos.component.ts");




function HistorialComponent_app_iconos_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-iconos", 23);
} }
class HistorialComponent {
    constructor() {
        this.ShowVolley = true;
        this.ShowSoccer = false;
        this.ShowBasquet = false;
        this.ShowNata = false;
    }
    ShowVolleys() {
        this.ShowVolley = true;
        this.ShowSoccer = false;
        this.ShowBasquet = false;
        this.ShowNata = false;
    }
    ShowSoccers() {
        this.ShowVolley = false;
        this.ShowSoccer = true;
        this.ShowBasquet = false;
        this.ShowNata = false;
    }
    ShowBasquets() {
        this.ShowVolley = false;
        this.ShowSoccer = false;
        this.ShowBasquet = true;
        this.ShowNata = false;
    }
    ShowNatas() {
        this.ShowVolley = false;
        this.ShowSoccer = false;
        this.ShowBasquet = false;
        this.ShowNata = true;
    }
    ngOnInit() {
    }
}
HistorialComponent.ɵfac = function HistorialComponent_Factory(t) { return new (t || HistorialComponent)(); };
HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistorialComponent, selectors: [["app-historial"]], decls: 50, vars: 1, consts: [[1, "Body"], [1, "uno"], ["role", "main", 1, ""], [1, "d-flex", "listas", "flex-wrap", "m-2"], [1, "registro"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "reg-basquet"], [1, "list-volley"], [1, "hist-natacion"], [1, "pag-soccer"], ["class", "container2", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "list-group"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal2", 1, "list-group-item"], [1, "list-group-item"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "exampleModal2", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "container2"]], template: function HistorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Historial de Alumnado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HistorialComponent_app_iconos_14_Template, 1, 0, "app-iconos", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Historial Basquetball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Luis Romero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mariana Rivera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jared Riesco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Guillermo C\u00E1rdenas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mariana Meza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Luis Romero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowVolley);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _L_iconos_iconos_component__WEBPACK_IMPORTED_MODULE_2__["IconosComponent"]], styles: [".Body[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 285px;\r\n}\r\n.uno[_ngcontent-%COMP%]{    \r\n  background-color:#023047;\r\n  width: 500px;\r\n  height: 50px;\r\n  margin-left: -70px;\r\n  margin-top: 10px;\r\n  color: #f9f9f9;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n.registro[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n    }\r\n.reg-basquet[_ngcontent-%COMP%]{\r\n    background-image: url('44.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n    color: #f9f9f9;\r\n}\r\n.R[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    position: relative;\r\n}\r\n.listas[_ngcontent-%COMP%]{\r\n    width: 365px;\r\n}\r\n.list-volley[_ngcontent-%COMP%]{\r\n    background-image: url('11.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 1px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.historial[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n.hist-natacion[_ngcontent-%COMP%]{\r\n    background-image: url('22.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 1px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.pagos[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n}\r\n.pag-soccer[_ngcontent-%COMP%]{\r\n    background-image: url('33.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 4px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSC9oaXN0b3JpYWwvaGlzdG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7QUFDSjtJQUNJLCtCQUE2QztJQUM3QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtCQUE2QztJQUM3QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0JBQTZDO0lBQzdDLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwrQkFBNkM7SUFDN0MsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9IL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Cb2R5e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyODVweDtcclxufVxyXG4udW5veyAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjMwNDc7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiAgLnJlZ2lzdHJve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4ucmVnLWJhc3F1ZXR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzLzQ0LnBuZyk7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuLlJ7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5saXN0YXN7XHJcbiAgICB3aWR0aDogMzY1cHg7XHJcbn1cclxuLmxpc3Qtdm9sbGV5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8xMS5wbmcpO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbi5oaXN0b3JpYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmhpc3QtbmF0YWNpb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzLzIyLnBuZyk7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmZmE5YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmZhOWM7XHJcbn1cclxuLnBhZ29ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wYWctc29jY2Vye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8zMy5wbmcpO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historial',
                templateUrl: './historial.component.html',
                styleUrls: ['./historial.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/L/iconos/iconos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/L/iconos/iconos.component.ts ***!
  \**********************************************/
/*! exports provided: IconosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconosComponent", function() { return IconosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IconosComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconosComponent.ɵfac = function IconosComponent_Factory(t) { return new (t || IconosComponent)(); };
IconosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconosComponent, selectors: [["app-iconos"]], decls: 2, vars: 0, template: function IconosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "iconos works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0wvaWNvbm9zL2ljb25vcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iconos',
                templateUrl: './iconos.component.html',
                styleUrls: ['./iconos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/L/listas/listas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/L/listas/listas.component.ts ***!
  \**********************************************/
/*! exports provided: ListasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListasComponent", function() { return ListasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListasComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListasComponent.ɵfac = function ListasComponent_Factory(t) { return new (t || ListasComponent)(); };
ListasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListasComponent, selectors: [["app-listas"]], decls: 14, vars: 0, consts: [[1, "Body"], [1, "con"], ["role", "main", 1, ""], [1, "d-flex", "listas", "flex-wrap", "m-2"], [1, "registro"], [1, "reg-basquet"], [1, "list-volley"], [1, "hist-natacion"], [1, "pag-soccer"]], template: function ListasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Listado de Alumnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Body[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 100px;\r\n  margin-left: 285px;\r\n}\r\n.con[_ngcontent-%COMP%]{    \r\nbackground-color:#023047;\r\nwidth: 500px;\r\nheight: 50px;\r\nmargin-left: -70px;\r\nmargin-top: 10px;\r\ncolor: #f9f9f9;\r\ntext-align: center;\r\nfont-size: 40px;\r\n}\r\n.registro[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  }\r\n.reg-basquet[_ngcontent-%COMP%]{\r\n  background-image: url('44.png');\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  border-radius: 100%;\r\n  border-color: #6ffa9c;\r\n  background-color: #6ffa9c;\r\n  color: #f9f9f9;\r\n}\r\n.R[_ngcontent-%COMP%]{\r\n  bottom: 0%;\r\n  position: relative;\r\n}\r\n.listas[_ngcontent-%COMP%]{\r\n  width: 365px;\r\n}\r\n.list-volley[_ngcontent-%COMP%]{\r\n  background-image: url('11.png');\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-position-x: 1px;\r\n  background-repeat: no-repeat;\r\n  border-radius: 100%;\r\n  border-color: #6ffa9c;\r\n  background-color: #6ffa9c;\r\n}\r\n.historial[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n.hist-natacion[_ngcontent-%COMP%]{\r\n  background-image: url('22.png');\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-position-x: 1px;\r\n  background-repeat: no-repeat;\r\n  border-radius: 100%;\r\n  border-color: #6ffa9c;\r\n  background-color: #6ffa9c;\r\n}\r\n.pagos[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  margin-top: 20px;\r\n}\r\n.pag-soccer[_ngcontent-%COMP%]{\r\n  background-image: url('33.png');\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-position-x: 4px;\r\n  background-repeat: no-repeat;\r\n  border-radius: 100%;\r\n  border-color: #6ffa9c;\r\n  background-color: #6ffa9c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTC9saXN0YXMvbGlzdGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQjtBQUNGO0VBQ0UsK0JBQTZDO0VBQzdDLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwrQkFBNkM7RUFDN0MsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtCQUE2QztFQUM3QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0JBQTZDO0VBQzdDLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvTC9saXN0YXMvbGlzdGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQm9keXtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMjg1cHg7XHJcbn1cclxuLmNvbnsgICAgXHJcbmJhY2tncm91bmQtY29sb3I6IzAyMzA0Nztcclxud2lkdGg6IDUwMHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbm1hcmdpbi1sZWZ0OiAtNzBweDtcclxubWFyZ2luLXRvcDogMTBweDtcclxuY29sb3I6ICNmOWY5Zjk7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5yZWdpc3Ryb3tcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuLnJlZy1iYXNxdWV0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvNDQucG5nKTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZmE5YztcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxufVxyXG4uUntcclxuICBib3R0b206IDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGlzdGFze1xyXG4gIHdpZHRoOiAzNjVweDtcclxufVxyXG4ubGlzdC12b2xsZXl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8xMS5wbmcpO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzZmZmE5YztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbi5oaXN0b3JpYWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaGlzdC1uYXRhY2lvbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzLzIyLnBuZyk7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDFweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmZmYTljO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmZhOWM7XHJcbn1cclxuLnBhZ29ze1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnBhZy1zb2NjZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8zMy5wbmcpO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzZmZmE5YztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listas',
                templateUrl: './listas.component.html',
                styleUrls: ['./listas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/P/pago/pago.component.ts":
/*!******************************************!*\
  !*** ./src/app/P/pago/pago.component.ts ***!
  \******************************************/
/*! exports provided: PagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoComponent", function() { return PagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/functions/alerts */ "./src/app/functions/alerts.ts");



class PagoComponent {
    constructor() { }
    ngOnInit() {
    }
    click() {
        Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__["timeMessage"])('Iniciando', 1500).then(() => {
            Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__["successDialog"])('Alumno Registrado').then(() => {
            });
        });
    }
}
PagoComponent.ɵfac = function PagoComponent_Factory(t) { return new (t || PagoComponent)(); };
PagoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagoComponent, selectors: [["app-pago"]], decls: 28, vars: 0, consts: [[1, "loo"], [1, "Body"], [1, "row"], [1, "col"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "mb-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function PagoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Formulario de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cantidad de monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fecha de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fecha de vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagoComponent_Template_button_click_26_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loo[_ngcontent-%COMP%]{\r\n  background-color:#023047;\r\n  width: 500px;\r\n  height: 50px;\r\n  margin-left: 180px;\r\n  margin-top: 10px;\r\n  color: #f9f9f9;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n.Body[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n  margin-left: 180px;\r\n  margin-top: 10px;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  background-color: #6ff49c;\r\n  border-radius: 5px;\r\n  width: 500px;\r\n  height: 50px;\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUC9wYWdvL3BhZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL1AvcGFnby9wYWdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9ve1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAyMzA0NztcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjZjlmOWY5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLkJvZHl7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZjQ5YztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pago',
                templateUrl: './pago.component.html',
                styleUrls: ['./pago.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/R/registro/registro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/R/registro/registro.component.ts ***!
  \**************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/functions/alerts */ "./src/app/functions/alerts.ts");



class RegistroComponent {
    constructor() { }
    ngOnInit() {
    }
    click() {
        Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__["timeMessage"])('Iniciando', 1500).then(() => {
            Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_1__["successDialog"])('Alumno Registrado').then(() => {
            });
        });
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 32, vars: 0, consts: [[1, "loo"], [1, "Body"], [1, "row"], [1, "col"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registro de Alumnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Disciplina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Horario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_30_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loo[_ngcontent-%COMP%]{\r\n  background-color:#023047;\r\n  width: 500px;\r\n  height: 50px;\r\n  margin-left: 180px;\r\n  margin-top: 10px;\r\n  color: #f9f9f9;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n.Body[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n  margin-left: 180px;\r\n  margin-top: 10px;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  background-color: #6ff49c;\r\n  border-radius: 5px;\r\n  width: 500px;\r\n  height: 50px;\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUi9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvUi9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvb3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjMwNDc7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5Cb2R5e1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmY0OWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/T/tablero/tablero.component.ts":
/*!************************************************!*\
  !*** ./src/app/T/tablero/tablero.component.ts ***!
  \************************************************/
/*! exports provided: TableroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroComponent", function() { return TableroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableroComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableroComponent.ɵfac = function TableroComponent_Factory(t) { return new (t || TableroComponent)(); };
TableroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableroComponent, selectors: [["app-tablero"]], decls: 38, vars: 0, consts: [[1, "Body"], [1, "con"], ["role", "main", 1, ""], [1, "d-flex", "listas", "flex-wrap", "m-2"], [1, "registro"], [1, "reg-basquet"], [1, "list-volley"], [1, "hist-natacion"], [1, "pag-soccer"], [1, "d-flex"], [1, "ol"], [1, "day-name"], [1, "first-day"]], template: function TableroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tablero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Diciembre 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mi\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Jue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Vie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "S\u00E1b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Body[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 20px;\r\n}\r\n.con[_ngcontent-%COMP%]{    \r\n  background-color:#023047;\r\n  width: 320px;\r\n  height: 50px;\r\n  margin-left: 5px;\r\n  margin-top: 10px;\r\n  color: #f9f9f9;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  \r\n}\r\n.registro[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 5px;\r\n    }\r\n.reg-basquet[_ngcontent-%COMP%]{\r\n    background-image: url('44.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n    color: #f9f9f9;\r\n}\r\n.R[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    position: relative;\r\n}\r\n.listas[_ngcontent-%COMP%]{\r\n    width: 365px;\r\n}\r\n.list-volley[_ngcontent-%COMP%]{\r\n    background-image: url('11.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 1px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.historial[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n.hist-natacion[_ngcontent-%COMP%]{\r\n    background-image: url('22.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 1px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.pagos[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n}\r\n.pag-soccer[_ngcontent-%COMP%]{\r\n    background-image: url('33.png');\r\n    width: 150px;\r\n    height: 150px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 4px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\nol[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(7, 1fr);\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n.first-day[_ngcontent-%COMP%] {\r\n    grid-column-start: 7\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVC90YWJsZXJvL3RhYmxlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7QUFDRTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7QUFDSjtJQUNJLCtCQUE2QztJQUM3QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtCQUE2QztJQUM3QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0JBQTZDO0lBQzdDLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwrQkFBNkM7SUFDN0MsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtBQUNBO0lBQ0U7RUFDRiIsImZpbGUiOiJzcmMvYXBwL1QvdGFibGVyby90YWJsZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQm9keXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uY29ueyAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjMwNDc7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBcclxufVxyXG4gIC5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4ucmVnLWJhc3F1ZXR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzLzQ0LnBuZyk7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuLlJ7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5saXN0YXN7XHJcbiAgICB3aWR0aDogMzY1cHg7XHJcbn1cclxuLmxpc3Qtdm9sbGV5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8xMS5wbmcpO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbi5oaXN0b3JpYWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmhpc3QtbmF0YWNpb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzLzIyLnBuZyk7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmZmE5YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmZhOWM7XHJcbn1cclxuLnBhZ29ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wYWctc29jY2Vye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8zMy5wbmcpO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmZhOWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbm9se1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmZpcnN0LWRheSB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogN1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tablero',
                templateUrl: './tablero.component.html',
                styleUrls: ['./tablero.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_main_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/home/home.component */ "./src/app/components/main/home/home.component.ts");
/* harmony import */ var _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./R/registro/registro.component */ "./src/app/R/registro/registro.component.ts");
/* harmony import */ var _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./H/historial/historial.component */ "./src/app/H/historial/historial.component.ts");
/* harmony import */ var _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./L/listas/listas.component */ "./src/app/L/listas/listas.component.ts");
/* harmony import */ var _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./P/pago/pago.component */ "./src/app/P/pago/pago.component.ts");
/* harmony import */ var _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./T/tablero/tablero.component */ "./src/app/T/tablero/tablero.component.ts");












const routes = [
    { path: 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    //Ruta hacia el registro de alumnado
    { path: 'Registro', component: _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"] },
    //Ruta para tablero
    { path: 'Tablero', component: _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_9__["TableroComponent"] },
    //Ruta hacia el historial de alumnado
    { path: 'Historial', component: _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_6__["HistorialComponent"] },
    //Ruta hacia el listado de alumnado
    { path: 'Listas', component: _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_7__["ListasComponent"] },
    //Ruta hacia el pago de alumnado
    { path: 'Pago', component: _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_8__["PagoComponent"] },
    { path: 'home', component: _components_main_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    //Ruta de default para reedirigir a login
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //Ruta no existente redirige al login
    { path: '**', redirectTo: '/login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Experienciauser';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_main_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/home/home.component */ "./src/app/components/main/home/home.component.ts");
/* harmony import */ var _nf_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nf/nav/nav.component */ "./src/app/nf/nav/nav.component.ts");
/* harmony import */ var _nf_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nf/footer/footer.component */ "./src/app/nf/footer/footer.component.ts");
/* harmony import */ var _b_body_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./b/body/body.component */ "./src/app/b/body/body.component.ts");
/* harmony import */ var _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./T/tablero/tablero.component */ "./src/app/T/tablero/tablero.component.ts");
/* harmony import */ var _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./R/registro/registro.component */ "./src/app/R/registro/registro.component.ts");
/* harmony import */ var _L_iconos_iconos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./L/iconos/iconos.component */ "./src/app/L/iconos/iconos.component.ts");
/* harmony import */ var _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./L/listas/listas.component */ "./src/app/L/listas/listas.component.ts");
/* harmony import */ var _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./P/pago/pago.component */ "./src/app/P/pago/pago.component.ts");
/* harmony import */ var _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./H/historial/historial.component */ "./src/app/H/historial/historial.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_main_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _nf_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
        _nf_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _b_body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"],
        _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_12__["TableroComponent"],
        _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_13__["RegistroComponent"],
        _L_iconos_iconos_component__WEBPACK_IMPORTED_MODULE_14__["IconosComponent"],
        _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_15__["ListasComponent"],
        _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_16__["PagoComponent"],
        _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_17__["HistorialComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _components_main_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _nf_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                    _nf_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _b_body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"],
                    _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_12__["TableroComponent"],
                    _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_13__["RegistroComponent"],
                    _L_iconos_iconos_component__WEBPACK_IMPORTED_MODULE_14__["IconosComponent"],
                    _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_15__["ListasComponent"],
                    _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_16__["PagoComponent"],
                    _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_17__["HistorialComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/b/body/body.component.ts":
/*!******************************************!*\
  !*** ./src/app/b/body/body.component.ts ***!
  \******************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../R/registro/registro.component */ "./src/app/R/registro/registro.component.ts");
/* harmony import */ var _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../L/listas/listas.component */ "./src/app/L/listas/listas.component.ts");
/* harmony import */ var _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../H/historial/historial.component */ "./src/app/H/historial/historial.component.ts");
/* harmony import */ var _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../P/pago/pago.component */ "./src/app/P/pago/pago.component.ts");
/* harmony import */ var _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../T/tablero/tablero.component */ "./src/app/T/tablero/tablero.component.ts");








function BodyComponent_app_registro_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-registro", 9);
} }
function BodyComponent_app_listas_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-listas", 9);
} }
function BodyComponent_app_historial_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-historial", 9);
} }
function BodyComponent_app_pago_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pago", 9);
} }
function BodyComponent_app_tablero_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tablero", 9);
} }
class BodyComponent {
    constructor() {
        this.ShowTablero = true;
        this.ShowRegister = false;
        this.ShowList = false;
        this.ShowHist = false;
        this.ShowPay = false;
    }
    ShowRegisters() {
        this.ShowRegister = true;
        this.ShowHist = false;
        this.ShowList = false;
        this.ShowPay = false;
        this.ShowTablero = false;
    }
    ShowLists() {
        this.ShowList = true;
        this.ShowHist = false;
        this.ShowRegister = false;
        this.ShowPay = false;
        this.ShowTablero = false;
    }
    ShowHistorial() {
        this.ShowHist = true;
        this.ShowRegister = false;
        this.ShowList = false;
        this.ShowPay = false;
        this.ShowTablero = false;
    }
    ShowPays() {
        this.ShowPay = true;
        this.ShowHist = false;
        this.ShowList = false;
        this.ShowRegister = false;
        this.ShowTablero = false;
    }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 16, vars: 5, consts: [[1, "d-flex"], [2, "border-right", "2px solid #9b9b9b", "margin-right", "15px"], [1, "d-flex", "listas", "flex-wrap", "m-2"], [1, "registro"], [1, "reg", 3, "click"], [1, "list", 3, "click"], [1, "hist", 3, "click"], [1, "pag", 3, "click"], ["class", "container2", 4, "ngIf"], [1, "container2"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_4_listener() { return ctx.ShowRegisters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_6_listener() { return ctx.ShowLists(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_8_listener() { return ctx.ShowHistorial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_Template_button_click_10_listener() { return ctx.ShowPays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BodyComponent_app_registro_11_Template, 1, 0, "app-registro", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BodyComponent_app_listas_12_Template, 1, 0, "app-listas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BodyComponent_app_historial_13_Template, 1, 0, "app-historial", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BodyComponent_app_pago_14_Template, 1, 0, "app-pago", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BodyComponent_app_tablero_15_Template, 1, 0, "app-tablero", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowHist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowPay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowTablero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _R_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__["RegistroComponent"], _L_listas_listas_component__WEBPACK_IMPORTED_MODULE_3__["ListasComponent"], _H_historial_historial_component__WEBPACK_IMPORTED_MODULE_4__["HistorialComponent"], _P_pago_pago_component__WEBPACK_IMPORTED_MODULE_5__["PagoComponent"], _T_tablero_tablero_component__WEBPACK_IMPORTED_MODULE_6__["TableroComponent"]], styles: [".registro[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    }\r\n.reg[_ngcontent-%COMP%]{\r\n    background-image: url('1.png');\r\n    width: 170px;\r\n    height: 170px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 10px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n    color: #f9f9f9;\r\n}\r\n.R[_ngcontent-%COMP%]{\r\n    bottom: 0%;\r\n    position: relative;\r\n}\r\n.listas[_ngcontent-%COMP%]{\r\n    width: 365px;\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n    background-image: url('2.png');\r\n    width: 170px;\r\n    height: 170px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 5px;\r\n    background-position-y: 5px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.historial[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n}\r\n.hist[_ngcontent-%COMP%]{\r\n    background-image: url('Historial.png');\r\n    width: 170px;\r\n    height: 170px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 10px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.pagos[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n}\r\n.pag[_ngcontent-%COMP%]{\r\n    background-image: url('4.png');\r\n    width: 170px;\r\n    height: 170px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-position-x: 2px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 100%;\r\n    border-color: #6ffa9c;\r\n    background-color: #6ffa9c;\r\n}\r\n.principal[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.principal2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.container2[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    border-right:2px solid #9b9b9b ;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYi9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7QUFDSjtJQUNJLDhCQUFxRDtJQUNyRCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4QkFBcUQ7SUFDckQsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQ0FBNkQ7SUFDN0QsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDhCQUFxRDtJQUNyRCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSwrQkFBK0I7O0FBRW5DIiwiZmlsZSI6InNyYy9hcHAvYi9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Ryb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuLnJlZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9JY29ub3MvMS5wbmcpO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmZmE5YztcclxuICAgIGNvbG9yOiAjZjlmOWY5O1xyXG59XHJcbi5Se1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGlzdGFze1xyXG4gICAgd2lkdGg6IDM2NXB4O1xyXG59XHJcbi5saXN0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL0ljb25vcy8yLnBuZyk7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDVweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmZmE5YztcclxufVxyXG4uaGlzdG9yaWFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5oaXN0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL0ljb25vcy9IaXN0b3JpYWwucG5nKTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmZmE5YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmZhOWM7XHJcbn1cclxuLnBhZ29ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wYWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vSWNvbm9zLzQucG5nKTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmZmE5YztcclxufVxyXG4ucHJpbmNpcGFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucHJpbmNpcGFsMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWluZXIye1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjOWI5YjliIDtcclxuICAgIFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/functions/alerts */ "./src/app/functions/alerts.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(fb, authservice, router) {
        this.fb = fb;
        this.authservice = authservice;
        this.router = router;
        this.createForm();
    }
    ngOnInit() {
    }
    login() {
        if (this.loginForm.invalid) {
            return Object.values(this.loginForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            this.setUser();
            this.authservice.login(this.user).subscribe((data) => {
                Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["timeMessage"])('Iniciando', 1500).then(() => {
                    Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["successDialog"])('Iniciado').then(() => {
                        this.router.navigate(['/home']);
                    });
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("token", data.token);
                });
            }, error => {
                Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["errorMessage"])('Usuario o contraseña incorrectos');
            });
        }
    }
    get emailValidate() {
        return (this.loginForm.get('email').invalid && this.loginForm.get('email').touched);
    }
    get passwordValidate() {
        return (this.loginForm.get('password').invalid && this.loginForm.get('password').touched);
    }
    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    setUser() {
        this.user = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 7, consts: [[1, "background", "text-center"], ["autocomplete", "off", 1, "form-signin", "animated", "fadeIn", "form-color", 3, "formGroup", "ngSubmit"], [1, "h3", "font-weight-normal"], ["type", "email", "id", "inputEmail", "placeholder", "Correo Electronico", "formControlName", "email", 1, "form-control", "mb-4", "mt-4"], ["type", "password", "id", "inputPassword", "placeholder", "Contrase\u00F1a", "formControlName", "password", 1, "form-control", "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-2"], [1, "link", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00BFA\u00FAn no tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.emailValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.passwordValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".background[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed; \r\n    background-image: url('Collage1.png');\r\n  }\r\n  \r\n  .form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n  }\r\n  \r\n  .background[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n  \r\n  .form-color[_ngcontent-%COMP%]{\r\n  background-color: #023047;\r\n  border-radius: 5%;\r\n  padding-top: 10px;\r\n}\r\n  \r\n  .img[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n  \r\n  .form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  margin: 0 auto;\r\n}\r\n  \r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 45px;\r\n}\r\n  \r\n  .h3[_ngcontent-%COMP%]{\r\n  color: #f9f9f9;\r\n  padding: 10px;\r\n  margin-bottom: 35px;\r\n}\r\n  \r\n  .btn[_ngcontent-%COMP%]{\r\n  background-color: #6ffa9c;\r\n  width: 180px;\r\n}\r\n  \r\n  .link[_ngcontent-%COMP%]{\r\n  color: #f9f9f9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIscUNBQWlFO0VBQ25FOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFBQztFQUNELGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL0ltYWdlbmVzL0NvbGxhZ2UxLnBuZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gICBcclxuICAuZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfS5iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiBcclxuLmltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiBcclxuLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIFxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5oM3tcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4ubGlua3tcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/functions/alerts */ "./src/app/functions/alerts.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class RegisterComponent {
    constructor(fb, authservice, router) {
        this.fb = fb;
        this.authservice = authservice;
        this.router = router;
        this.createFrom();
    }
    ngOnInit() {
    }
    register() {
        if (this.registerForm.invalid) {
            return Object.values(this.registerForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            this.setUser();
            this.authservice.register(this.user).subscribe((data) => {
                Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["timeMessage"])('Registrando', 1500).then(() => {
                    Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["successDialog"])('Registro Completado');
                    this.router.navigate(['/login']);
                });
            }, error => {
                Object(src_app_functions_alerts__WEBPACK_IMPORTED_MODULE_2__["errorMessage"])('Ha ocurrido un error');
            });
        }
    }
    createFrom() {
        this.registerForm = this.fb.group({
            Nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get emailValidate() {
        return (this.registerForm.get('email').invalid && this.registerForm.get('email').touched);
    }
    get passwordValidate() {
        return (this.registerForm.get('password').invalid && this.registerForm.get('password').touched);
    }
    get password2Validate() {
        const pass = this.registerForm.get('password').value;
        const pass2 = this.registerForm.get('password2').value;
        return pass === pass2 ? false : true;
    }
    setUser() {
        this.user = {
            Nombre: this.registerForm.get('Nombre').value,
            email: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value
        };
        console.log(this.user);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 13, vars: 8, consts: [[1, "background", "text-center"], ["autocomplete", "off", 1, "form-signin", "animated", "fadeIn", 3, "formGroup", "ngSubmit"], [1, "h3", "font-weight-normal"], ["type", "text", "id", "inputName", "placeholder", "Nombre Completo", "formControlName", "Nombre", 1, "form-control"], ["type", "email", "id", "inputEmail", "placeholder", "Correo Electronico", "formControlName", "email", 1, "form-control"], ["type", "password", "id", "inputPassword", "placeholder", "Contrase\u00F1a", "formControlName", "password", 1, "form-control", "pass"], ["type", "password", "id", "inputPassword2", "placeholder", "Confirmar Contrase\u00F1a", "formControlName", "password2", 1, "form-control", "pass2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-2", 3, "disabled"], ["routerLink", "/login", 1, "link"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Registrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00BFYa tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.emailValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.passwordValidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.password2Validate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.password2Validate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".background[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed; \r\n  background-image: url('Collage2.png');\r\n  }\r\n   \r\n  \r\n   \r\n  .form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    background-color: #023047;\r\n    margin: 0 auto;\r\n    padding: 15px;\r\n   padding-top: 40px;\r\n   padding-bottom: 40px;\r\n   padding-left: 40px;\r\n   padding-right: 40px;\r\n   margin: 0 auto;\r\n   border-radius: 5%;\r\n  }\r\n   \r\n  \r\n   \r\n  .background[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n   \r\n  \r\n   \r\n  .form-color[_ngcontent-%COMP%]{\r\n  background-color: #023047;\r\n  padding-top: 10px;\r\n}\r\n   \r\n  \r\n   \r\n  .img[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n   \r\n  \r\n   \r\n  .btn[_ngcontent-%COMP%]{\r\n  background-color: #6ffa9c;\r\n  width: 150px;\r\n}\r\n   \r\n  \r\n   \r\n  .h3[_ngcontent-%COMP%]{\r\n  color: #f9f9f9;\r\n  padding: 10px;\r\n  margin-bottom: 25px;\r\n}\r\n   \r\n  \r\n   \r\n  .form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 45px;\r\n}\r\n   \r\n  \r\n   \r\n  .form-control[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n}\r\n   \r\n  \r\n   \r\n  .link[_ngcontent-%COMP%]{\r\n  color: #f9f9f9;\r\n}\r\n   \r\n  \r\n   \r\n  .form-control[_ngcontent-%COMP%]   pass[_ngcontent-%COMP%]{\r\n margin-bottom: 30px;\r\n}\r\n   \r\n  \r\n   \r\n  .form-control[_ngcontent-%COMP%]   pass2[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIscUNBQWlFO0VBQ2pFOzs7O0VBSUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtHQUNkLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixjQUFjO0dBQ2QsaUJBQWlCO0VBQ2xCOzs7O0VBR0E7RUFDQSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOzs7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COzs7O0VBRUE7RUFDRSxZQUFZO0FBQ2Q7Ozs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7Ozs7RUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7O0VBQ0E7RUFDRSxZQUFZO0FBQ2Q7Ozs7RUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7OztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7OztFQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOzs7O0VBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vSW1hZ2VuZXMvQ29sbGFnZTIucG5nKTtcclxuICB9XHJcbiAgIFxyXG4gIFxyXG4gICBcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzA0NztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBib3JkZXItcmFkaXVzOiA1JTtcclxuICB9XHJcbiAgIFxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiBcclxuLmltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmZhOWM7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5oM3tcclxuICBjb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmxpbmt7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuLmZvcm0tY29udHJvbCBwYXNze1xyXG4gbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHBhc3Mye1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/main/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nf_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../nf/nav/nav.component */ "./src/app/nf/nav/nav.component.ts");
/* harmony import */ var _b_body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../b/body/body.component */ "./src/app/b/body/body.component.ts");
/* harmony import */ var _nf_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../nf/footer/footer.component */ "./src/app/nf/footer/footer.component.ts");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nf_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _b_body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"], _nf_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/functions/alerts.ts":
/*!*************************************!*\
  !*** ./src/app/functions/alerts.ts ***!
  \*************************************/
/*! exports provided: successDialog, warningMessage, errorMessage, confirmDialog, timeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successDialog", function() { return successDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningMessage", function() { return warningMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmDialog", function() { return confirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeMessage", function() { return timeMessage; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

function successDialog(msg) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        position: 'center',
        icon: 'success',
        text: msg,
        showConfirmButton: false,
        timer: 1500
    });
}
function warningMessage(msg) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        position: 'center',
        icon: 'warning',
        text: msg,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#65c005'
    });
}
function errorMessage(msg) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        position: 'center',
        icon: 'error',
        text: msg,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ce2b16'
    });
}
function confirmDialog(msg, cancel, confirm) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        position: 'center',
        icon: 'warning',
        text: msg,
        showCancelButton: true,
        cancelButtonText: cancel,
        cancelButtonColor: '#ce2b16',
        showConfirmButton: true,
        confirmButtonText: confirm,
        confirmButtonColor: '#65c005'
    });
}
function timeMessage(text, time) {
    let timerInterval;
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        html: text,
        timer: time,
    });
}


/***/ }),

/***/ "./src/app/nf/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/nf/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "footer", "mt-auto"], [1, "general"], [1, "div", "img"], [1, "parrafo1"], [1, "parrafo2"], [1, "parrafo3"], [1, "contacto"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " En FitHealth trabajamos para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "dar un buen servicio de alta calidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "en beneficio de nuestros jovenes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " COPYRIGHT 2021. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contactanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Blvd Laguna Sur. Segunda Rinconada de la Uni\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " T\u00E9lefono:871 500 7097");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Email: Complejodeportejabonera@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n    background-color: #023047;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n.div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    background-image: url('LogotipoHF.png');\r\n    width: 120px;\r\n    height: 90px;\r\n    margin: 10px;\r\n    margin-left: 40px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    border-radius: 5%;\r\n\r\n}\r\n.general[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.parrafo1[_ngcontent-%COMP%]{\r\n    color: #f9f9f9;\r\n    margin-left: 0.5%;\r\n    margin-top: 1%;\r\n}\r\n.parrafo2[_ngcontent-%COMP%]{\r\n    color: #f9f9f9;\r\n    margin: 0 auto 0;\r\n    margin-top: 5.8%;\r\n}\r\n.parrafo3[_ngcontent-%COMP%]{\r\n    color: #f9f9f9;\r\n    margin-right: 2%;\r\n}\r\n.contacto[_ngcontent-%COMP%]{\r\n    color: #6ffa9c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmYvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSx1Q0FBZ0U7SUFDaEUsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL25mL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2IGltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9JbWFnZW5lcy9Mb2dvdGlwb0hGLnBuZyk7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcblxyXG59XHJcbi5nZW5lcmFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucGFycmFmbzF7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLnBhcnJhZm8ye1xyXG4gICAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwO1xyXG4gICAgbWFyZ2luLXRvcDogNS44JTtcclxufVxyXG4ucGFycmFmbzN7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuLmNvbnRhY3Rve1xyXG4gICAgY29sb3I6ICM2ZmZhOWM7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nf/nav/nav.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nf/nav/nav.component.ts ***!
  \*****************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavComponent {
    constructor() {
        this.username = " ";
    }
    ngOnInit() {
        this.username = localStorage.getItem("username");
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 10, vars: 1, consts: [[1, "body"], [1, "principal"], [1, "div", "img"], [1, "label"], [1, "divbutton"], ["type", "button", 1, "btn", "btn-lg", "btn-primary"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cerrar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
    } }, styles: [".body[_ngcontent-%COMP%]{\r\n    background-color: #023047;\r\n    padding: 10px;\r\n}\r\n.div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    background-image: url('55.png');\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 10px;\r\n    margin-left: 20px;\r\n    background-size: contain;\r\n    border-radius: 100%;\r\n    background-color: #6ffa9c;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    background-color: #6ffa9c;\r\n    width: 180px;\r\n   \r\n}\r\n.principal[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.divbutton[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    padding-top: 25px;\r\n    padding-right: 10px;\r\n}\r\n.label[_ngcontent-%COMP%]{\r\n    color: #f9f9f9;\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmYvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLCtCQUFzRDtJQUN0RCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uZi9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjMwNDc7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kaXYgaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL0ljb25vcy81NS5wbmcpO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG59XHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZmYTljO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICBcclxufVxyXG4ucHJpbmNpcGFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZGl2YnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthService {
    constructor(http) {
        this.http = http;
        this.apiURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
    }
    register(user) {
        return this.http.post(this.apiURL + 'users', user);
    }
    login(user) {
        return this.http.post(`http://api.fithealth.website/login`, user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiURL: 'http://api.fithealth.website/'
};


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luis Romero\Desktop\ProyectoExperienciaUsuario\Experiencia\compiladoangular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map