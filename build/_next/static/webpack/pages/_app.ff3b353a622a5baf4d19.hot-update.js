webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/style/style.css":
/*!*******************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./pages/style/style.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*{\\n    box-sizing:border-box;\\n}\\nbody{\\n    height:100vh;\\n    font-family: 'Roboto', sans-serif;\\n    padding:0px;\\n    margin:0px;\\n}\\n\\n.container{\\n    display:flex;\\n    flex-direction: column;\\n    padding:0px 15px;\\n\\n}\\n\\n.row, nav{\\n    display:flex;\\n    width:100%;\\n}\\n.row{\\n    flex-wrap: wrap;\\n}\\n\\n.logo{\\n    margin-left:5px;\\n}\\n\\n.img{\\n    width:100%;\\n}\\n\\n/* Extra small devices (phones, 600px and down) */\\n@media only screen and (max-width: 600px) {\\n    .col-12{\\n        width:100%;\\n    }\\n\\n    .col-6{\\n        width:51%;\\n    }\\n}\\n\\n/* Small devices (portrait tablets and large phones, 600px and up) */\\n@media only screen and (min-width: 600px) {\\n    .col-sm-12{\\n        width:100%;\\n    }\\n\\n    .col-sm-6{\\n        width:50%;\\n    }\\n}\\n\\n/* Medium devices (landscape tablets, 768px and up) */\\n@media only screen and (min-width: 768px) {\\n    .col-md-12{\\n        width:100%;\\n    }\\n\\n    .col-md-6{\\n        width:50%;\\n    }\\n\\n}\\n\\n/* Large devices (laptops/desktops, 992px and up) */\\n@media only screen and (min-width: 992px) {\\n    .col-lg-12{\\n        width:100%;\\n    }\\n\\n    .col-lg-6{\\n        width:50%;\\n        padding:0 5px;\\n    }\\n\\n    .img{\\n        width:100%;\\n    }\\n\\n}\\n\\n/* Extra large devices (large laptops and desktops, 1200px and up) */\\n@media only screen and (min-width: 1200px) {\\n    .col-xl-12{\\n        width:100%;\\n        padding:0 5px;\\n    }\\n\\n    .col-xl-6{\\n        width:50%;\\n        padding:0 5px;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/style/style.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,iCAAiC;IACjC,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA,iDAAiD;AACjD;IACI;QACI,UAAU;IACd;;IAEA;QACI,SAAS;IACb;AACJ;;AAEA,oEAAoE;AACpE;IACI;QACI,UAAU;IACd;;IAEA;QACI,SAAS;IACb;AACJ;;AAEA,qDAAqD;AACrD;IACI;QACI,UAAU;IACd;;IAEA;QACI,SAAS;IACb;;AAEJ;;AAEA,mDAAmD;AACnD;IACI;QACI,UAAU;IACd;;IAEA;QACI,SAAS;QACT,aAAa;IACjB;;IAEA;QACI,UAAU;IACd;;AAEJ;;AAEA,oEAAoE;AACpE;IACI;QACI,UAAU;QACV,aAAa;IACjB;;IAEA;QACI,SAAS;QACT,aAAa;IACjB;AACJ\",\"sourcesContent\":[\"*{\\n    box-sizing:border-box;\\n}\\nbody{\\n    height:100vh;\\n    font-family: 'Roboto', sans-serif;\\n    padding:0px;\\n    margin:0px;\\n}\\n\\n.container{\\n    display:flex;\\n    flex-direction: column;\\n    padding:0px 15px;\\n\\n}\\n\\n.row, nav{\\n    display:flex;\\n    width:100%;\\n}\\n.row{\\n    flex-wrap: wrap;\\n}\\n\\n.logo{\\n    margin-left:5px;\\n}\\n\\n.img{\\n    width:100%;\\n}\\n\\n/* Extra small devices (phones, 600px and down) */\\n@media only screen and (max-width: 600px) {\\n    .col-12{\\n        width:100%;\\n    }\\n\\n    .col-6{\\n        width:51%;\\n    }\\n}\\n\\n/* Small devices (portrait tablets and large phones, 600px and up) */\\n@media only screen and (min-width: 600px) {\\n    .col-sm-12{\\n        width:100%;\\n    }\\n\\n    .col-sm-6{\\n        width:50%;\\n    }\\n}\\n\\n/* Medium devices (landscape tablets, 768px and up) */\\n@media only screen and (min-width: 768px) {\\n    .col-md-12{\\n        width:100%;\\n    }\\n\\n    .col-md-6{\\n        width:50%;\\n    }\\n\\n}\\n\\n/* Large devices (laptops/desktops, 992px and up) */\\n@media only screen and (min-width: 992px) {\\n    .col-lg-12{\\n        width:100%;\\n    }\\n\\n    .col-lg-6{\\n        width:50%;\\n        padding:0 5px;\\n    }\\n\\n    .img{\\n        width:100%;\\n    }\\n\\n}\\n\\n/* Extra large devices (large laptops and desktops, 1200px and up) */\\n@media only screen and (min-width: 1200px) {\\n    .col-xl-12{\\n        width:100%;\\n        padding:0 5px;\\n    }\\n\\n    .col-xl-6{\\n        width:50%;\\n        padding:0 5px;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGUvc3R5bGUuY3NzPzE1YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLEtBQUssNEJBQTRCLEdBQUcsT0FBTyxtQkFBbUIsd0NBQXdDLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQiw2QkFBNkIsdUJBQXVCLEtBQUssY0FBYyxtQkFBbUIsaUJBQWlCLEdBQUcsT0FBTyxzQkFBc0IsR0FBRyxVQUFVLHNCQUFzQixHQUFHLFNBQVMsaUJBQWlCLEdBQUcsbUdBQW1HLGNBQWMscUJBQXFCLE9BQU8sZUFBZSxvQkFBb0IsT0FBTyxHQUFHLHNIQUFzSCxpQkFBaUIscUJBQXFCLE9BQU8sa0JBQWtCLG9CQUFvQixPQUFPLEdBQUcsdUdBQXVHLGlCQUFpQixxQkFBcUIsT0FBTyxrQkFBa0Isb0JBQW9CLE9BQU8sS0FBSyxxR0FBcUcsaUJBQWlCLHFCQUFxQixPQUFPLGtCQUFrQixvQkFBb0Isd0JBQXdCLE9BQU8sYUFBYSxxQkFBcUIsT0FBTyxLQUFLLHVIQUF1SCxpQkFBaUIscUJBQXFCLHdCQUF3QixPQUFPLGtCQUFrQixvQkFBb0Isd0JBQXdCLE9BQU8sR0FBRyxPQUFPLHNGQUFzRixZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLDJCQUEyQiw0QkFBNEIsR0FBRyxPQUFPLG1CQUFtQix3Q0FBd0Msa0JBQWtCLGlCQUFpQixHQUFHLGVBQWUsbUJBQW1CLDZCQUE2Qix1QkFBdUIsS0FBSyxjQUFjLG1CQUFtQixpQkFBaUIsR0FBRyxPQUFPLHNCQUFzQixHQUFHLFVBQVUsc0JBQXNCLEdBQUcsU0FBUyxpQkFBaUIsR0FBRyxtR0FBbUcsY0FBYyxxQkFBcUIsT0FBTyxlQUFlLG9CQUFvQixPQUFPLEdBQUcsc0hBQXNILGlCQUFpQixxQkFBcUIsT0FBTyxrQkFBa0Isb0JBQW9CLE9BQU8sR0FBRyx1R0FBdUcsaUJBQWlCLHFCQUFxQixPQUFPLGtCQUFrQixvQkFBb0IsT0FBTyxLQUFLLHFHQUFxRyxpQkFBaUIscUJBQXFCLE9BQU8sa0JBQWtCLG9CQUFvQix3QkFBd0IsT0FBTyxhQUFhLHFCQUFxQixPQUFPLEtBQUssdUhBQXVILGlCQUFpQixxQkFBcUIsd0JBQXdCLE9BQU8sa0JBQWtCLG9CQUFvQix3QkFBd0IsT0FBTyxHQUFHLG1CQUFtQjtBQUMzcUg7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vcGFnZXMvc3R5bGUvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIG1hcmdpbjowcHg7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzowcHggMTVweDtcXG5cXG59XFxuXFxuLnJvdywgbmF2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbi5yb3d7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OjVweDtcXG59XFxuXFxuLmltZ3tcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jb2wtMTJ7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5jb2wtNntcXG4gICAgICAgIHdpZHRoOjUxJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC5jb2wtc20tMTJ7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5jb2wtc20tNntcXG4gICAgICAgIHdpZHRoOjUwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb2wtbWQtMTJ7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5jb2wtbWQtNntcXG4gICAgICAgIHdpZHRoOjUwJTtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAuY29sLWxnLTEye1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29sLWxnLTZ7XFxuICAgICAgICB3aWR0aDo1MCU7XFxuICAgICAgICBwYWRkaW5nOjAgNXB4O1xcbiAgICB9XFxuXFxuICAgIC5pbWd7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5jb2wteGwtMTJ7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgcGFkZGluZzowIDVweDtcXG4gICAgfVxcblxcbiAgICAuY29sLXhsLTZ7XFxuICAgICAgICB3aWR0aDo1MCU7XFxuICAgICAgICBwYWRkaW5nOjAgNXB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLGlEQUFpRDtBQUNqRDtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBRUEsb0VBQW9FO0FBQ3BFO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7QUFDSjs7QUFFQSxxREFBcUQ7QUFDckQ7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7QUFFSjs7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFNBQVM7UUFDVCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBLG9FQUFvRTtBQUNwRTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6MHB4IDE1cHg7XFxuXFxufVxcblxcbi5yb3csIG5hdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG4ucm93e1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sb2dve1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxufVxcblxcbi5pbWd7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuY29sLTEye1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29sLTZ7XFxuICAgICAgICB3aWR0aDo1MSU7XFxuICAgIH1cXG59XFxuXFxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAuY29sLXNtLTEye1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29sLXNtLTZ7XFxuICAgICAgICB3aWR0aDo1MCU7XFxuICAgIH1cXG59XFxuXFxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY29sLW1kLTEye1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcblxcbiAgICAuY29sLW1kLTZ7XFxuICAgICAgICB3aWR0aDo1MCU7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLmNvbC1sZy0xMntcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbC1sZy02e1xcbiAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgcGFkZGluZzowIDVweDtcXG4gICAgfVxcblxcbiAgICAuaW1ne1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuY29sLXhsLTEye1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIHBhZGRpbmc6MCA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbC14bC02e1xcbiAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgcGFkZGluZzowIDVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/style/style.css\n");

/***/ })

})