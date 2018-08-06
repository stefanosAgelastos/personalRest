webpackJsonp(["styles"],{

/***/ "./node_modules/ngx-toastr/toastr.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ngx-toastr/toastr.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./toastr.css", function() {
			var newContent = require("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./toastr.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ngx-toastr/toastr.css":
/***/ (function(module, exports) {

module.exports = "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  -webkit-box-shadow: 0 0 12px #999999;\n          box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .toast:hover {\n  -webkit-box-shadow: 0 0 12px #000000;\n          box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/styles.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Raleway\");\n/* Login template style */\n/* You can add global styles to this file, and also import other style files */\n.detailCard {\n  cursor: pointer; }\n.buttonChild {\n  visibility: hidden; }\n.detailCard:hover .buttonChild {\n  visibility: visible; }\nbutton.btn-submit {\n  background-color: #38547b;\n  color: #fff;\n  width: 100%; }\nbutton.btn-submit:focus, button.btn-submit:hover {\n  background-color: #38547b; }\ninput.ng-invalid.ng-dirty {\n  border-bottom-color: #e91e63 !important;\n  -webkit-box-shadow: 0 1px 0 0 #e91e63 !important;\n          box-shadow: 0 1px 0 0 #e91e63 !important; }\n/*for error div i*/\ndiv.error-message i {\n  vertical-align: middle !important; }\n/*for tab control*/\n.tabs {\n  height: 65px; }\n.tabs .tab {\n  text-transform: none !important;\n  line-height: 65px;\n  height: 65px; }\n.tabs .tab a {\n  font-size: 25px;\n  color: grey !important; }\n.tabs .tab a.active {\n  background-color: #fff !important; }\n/* Original WWW3 */\nbody, h1, h2, h3, h4, h5 {\n  font-family: \"Raleway\", sans-serif; }\n/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\nbody {\n  margin: 0; }\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block; }\naudio, canvas, progress, video {\n  display: inline-block; }\nprogress {\n  vertical-align: baseline; }\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n[hidden], template {\n  display: none; }\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\na:active, a:hover {\n  outline-width: 0; }\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; }\ndfn {\n  font-style: italic; }\nmark {\n  background: #ff0;\n  color: #000; }\nsmall {\n  font-size: 80%; }\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\nfigure {\n  margin: 1em 40px; }\nimg {\n  border-style: none; }\nsvg:not(:root) {\n  overflow: hidden; }\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\nbutton, input, select, textarea {\n  font: inherit;\n  margin: 0; }\noptgroup {\n  font-weight: bold; }\nbutton, input {\n  overflow: visible; }\nbutton, select {\n  text-transform: none; }\nbutton, html [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button; }\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\ntextarea {\n  overflow: auto; }\n[type=checkbox], [type=radio] {\n  padding: 0; }\n[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\n  height: auto; }\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n/* End extract */\nhtml, body {\n  font-family: Verdana,sans-serif;\n  font-size: 15px;\n  line-height: 1.5; }\nhtml {\n  overflow-x: hidden; }\nh1 {\n  font-size: 36px; }\nh2 {\n  font-size: 30px; }\nh3 {\n  font-size: 24px; }\nh4 {\n  font-size: 20px; }\nh5 {\n  font-size: 18px; }\nh6 {\n  font-size: 16px; }\n.w3-serif {\n  font-family: serif; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Segoe UI\",Arial,sans-serif;\n  font-weight: 400;\n  margin: 10px 0; }\n.w3-wide {\n  letter-spacing: 4px; }\nhr {\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 20px 0; }\n.w3-image {\n  max-width: 100%;\n  height: auto; }\nimg {\n  vertical-align: middle; }\na {\n  color: inherit; }\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table; }\n.w3-table-all {\n  border: 1px solid #ccc; }\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd; }\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1; }\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff; }\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1; }\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc; }\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center; }\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top; }\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px; }\n.w3-btn, .w3-button {\n  border: none;\n  display: inline-block;\n  padding: 8px 16px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: inherit;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap; }\n.w3-btn:hover {\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n.w3-btn, .w3-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.w3-disabled, .w3-btn:disabled, .w3-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.3; }\n.w3-disabled *, :disabled * {\n  pointer-events: none; }\n.w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n.w3-badge, .w3-tag {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center; }\n.w3-badge {\n  border-radius: 50%; }\n.w3-ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n.w3-ul li {\n  padding: 8px 16px;\n  border-bottom: 1px solid #ddd; }\n.w3-ul li:last-child {\n  border-bottom: none; }\n.w3-tooltip, .w3-display-container {\n  position: relative; }\n.w3-tooltip .w3-text {\n  display: none; }\n.w3-tooltip:hover .w3-text {\n  display: inline-block; }\n.w3-ripple:active {\n  opacity: 0.5; }\n.w3-ripple {\n  -webkit-transition: opacity 0s;\n  transition: opacity 0s; }\n.w3-input {\n  padding: 8px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  width: 100%; }\n.w3-select {\n  padding: 9px 0;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #ccc; }\n.w3-dropdown-click, .w3-dropdown-hover {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.w3-dropdown-hover:hover .w3-dropdown-content {\n  display: block; }\n.w3-dropdown-hover:first-child, .w3-dropdown-click:hover {\n  background-color: #ccc;\n  color: #000; }\n.w3-dropdown-hover:hover > .w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {\n  background-color: #ccc;\n  color: #000; }\n.w3-dropdown-content {\n  cursor: auto;\n  color: #000;\n  background-color: #fff;\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n  z-index: 1; }\n.w3-check, .w3-radio {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 6px; }\n.w3-sidebar {\n  height: 100%;\n  width: 200px;\n  background-color: #fff;\n  position: fixed !important;\n  z-index: 1;\n  overflow: auto; }\n.w3-bar-block .w3-dropdown-hover, .w3-bar-block .w3-dropdown-click {\n  width: 100%; }\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {\n  min-width: 100%; }\n.w3-bar-block .w3-dropdown-hover .w3-button, .w3-bar-block .w3-dropdown-click .w3-button {\n  width: 100%;\n  text-align: left;\n  padding: 8px 16px; }\n.w3-main, #main {\n  -webkit-transition: margin-left .4s;\n  transition: margin-left .4s; }\n.w3-modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n.w3-modal-content {\n  margin: auto;\n  background-color: #fff;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 600px; }\n.w3-bar {\n  width: 100%;\n  overflow: hidden; }\n.w3-center .w3-bar {\n  display: inline-block;\n  width: auto; }\n.w3-bar .w3-bar-item {\n  padding: 8px 16px;\n  float: left;\n  width: auto;\n  border: none;\n  display: block;\n  outline: 0; }\n.w3-bar .w3-dropdown-hover, .w3-bar .w3-dropdown-click {\n  position: static;\n  float: left; }\n.w3-bar .w3-button {\n  white-space: normal; }\n.w3-bar-block .w3-bar-item {\n  width: 100%;\n  display: block;\n  padding: 8px 16px;\n  text-align: left;\n  border: none;\n  white-space: normal;\n  float: none;\n  outline: 0; }\n.w3-bar-block.w3-center .w3-bar-item {\n  text-align: center; }\n.w3-block {\n  display: block;\n  width: 100%; }\n.w3-responsive {\n  display: block;\n  overflow-x: auto; }\n.w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before,\n.w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n.w3-col, .w3-half, .w3-third, .w3-twothird, .w3-threequarter, .w3-quarter {\n  float: left;\n  width: 100%; }\n.w3-col.s1 {\n  width: 8.33333%; }\n.w3-col.s2 {\n  width: 16.66666%; }\n.w3-col.s3 {\n  width: 24.99999%; }\n.w3-col.s4 {\n  width: 33.33333%; }\n.w3-col.s5 {\n  width: 41.66666%; }\n.w3-col.s6 {\n  width: 49.99999%; }\n.w3-col.s7 {\n  width: 58.33333%; }\n.w3-col.s8 {\n  width: 66.66666%; }\n.w3-col.s9 {\n  width: 74.99999%; }\n.w3-col.s10 {\n  width: 83.33333%; }\n.w3-col.s11 {\n  width: 91.66666%; }\n.w3-col.s12 {\n  width: 99.99999%; }\n@media (min-width: 601px) {\n  .w3-col.m1 {\n    width: 8.33333%; }\n  .w3-col.m2 {\n    width: 16.66666%; }\n  .w3-col.m3, .w3-quarter {\n    width: 24.99999%; }\n  .w3-col.m4, .w3-third {\n    width: 33.33333%; }\n  .w3-col.m5 {\n    width: 41.66666%; }\n  .w3-col.m6, .w3-half {\n    width: 49.99999%; }\n  .w3-col.m7 {\n    width: 58.33333%; }\n  .w3-col.m8, .w3-twothird {\n    width: 66.66666%; }\n  .w3-col.m9, .w3-threequarter {\n    width: 74.99999%; }\n  .w3-col.m10 {\n    width: 83.33333%; }\n  .w3-col.m11 {\n    width: 91.66666%; }\n  .w3-col.m12 {\n    width: 99.99999%; } }\n@media (min-width: 993px) {\n  .w3-col.l1 {\n    width: 8.33333%; }\n  .w3-col.l2 {\n    width: 16.66666%; }\n  .w3-col.l3 {\n    width: 24.99999%; }\n  .w3-col.l4 {\n    width: 33.33333%; }\n  .w3-col.l5 {\n    width: 41.66666%; }\n  .w3-col.l6 {\n    width: 49.99999%; }\n  .w3-col.l7 {\n    width: 58.33333%; }\n  .w3-col.l8 {\n    width: 66.66666%; }\n  .w3-col.l9 {\n    width: 74.99999%; }\n  .w3-col.l10 {\n    width: 83.33333%; }\n  .w3-col.l11 {\n    width: 91.66666%; }\n  .w3-col.l12 {\n    width: 99.99999%; } }\n.w3-content {\n  max-width: 980px;\n  margin: auto; }\n.w3-rest {\n  overflow: hidden; }\n.w3-cell-row {\n  display: table;\n  width: 100%; }\n.w3-cell {\n  display: table-cell; }\n.w3-cell-top {\n  vertical-align: top; }\n.w3-cell-middle {\n  vertical-align: middle; }\n.w3-cell-bottom {\n  vertical-align: bottom; }\n.w3-hide {\n  display: none !important; }\n.w3-show-block, .w3-show {\n  display: block !important; }\n.w3-show-inline-block {\n  display: inline-block !important; }\n@media (max-width: 600px) {\n  .w3-modal-content {\n    margin: 0 10px;\n    width: auto !important; }\n  .w3-modal {\n    padding-top: 30px; }\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content, .w3-dropdown-click.w3-mobile .w3-dropdown-content {\n    position: relative; }\n  .w3-hide-small {\n    display: none !important; }\n  .w3-mobile {\n    display: block;\n    width: 100% !important; }\n  .w3-bar-item.w3-mobile, .w3-dropdown-hover.w3-mobile, .w3-dropdown-click.w3-mobile {\n    text-align: center; }\n  .w3-dropdown-hover.w3-mobile, .w3-dropdown-hover.w3-mobile .w3-btn, .w3-dropdown-hover.w3-mobile .w3-button, .w3-dropdown-click.w3-mobile, .w3-dropdown-click.w3-mobile .w3-btn, .w3-dropdown-click.w3-mobile .w3-button {\n    width: 100%; } }\n@media (max-width: 768px) {\n  .w3-modal-content {\n    width: 500px; }\n  .w3-modal {\n    padding-top: 50px; } }\n@media (min-width: 993px) {\n  .w3-modal-content {\n    width: 900px; }\n  .w3-hide-large {\n    display: none !important; }\n  .w3-sidebar.w3-collapse {\n    display: block !important; } }\n@media (max-width: 992px) and (min-width: 601px) {\n  .w3-hide-medium {\n    display: none !important; } }\n@media (max-width: 992px) {\n  .w3-sidebar.w3-collapse {\n    display: none; }\n  .w3-main {\n    margin-left: 0 !important;\n    margin-right: 0 !important; } }\n.w3-top, .w3-bottom {\n  position: fixed;\n  width: 100%;\n  z-index: 1; }\n.w3-top {\n  top: 0; }\n.w3-bottom {\n  bottom: 0; }\n.w3-overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2; }\n.w3-display-topleft {\n  position: absolute;\n  left: 0;\n  top: 0; }\n.w3-display-topright {\n  position: absolute;\n  right: 0;\n  top: 0; }\n.w3-display-bottomleft {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n.w3-display-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n.w3-display-middle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n.w3-display-left {\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n.w3-display-right {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n.w3-display-topmiddle {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n.w3-display-bottommiddle {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n.w3-display-container:hover .w3-display-hover {\n  display: block; }\n.w3-display-container:hover span.w3-display-hover {\n  display: inline-block; }\n.w3-display-hover {\n  display: none; }\n.w3-display-position {\n  position: absolute; }\n.w3-circle {\n  border-radius: 50%; }\n.w3-round-small {\n  border-radius: 2px; }\n.w3-round, .w3-round-medium {\n  border-radius: 4px; }\n.w3-round-large {\n  border-radius: 8px; }\n.w3-round-xlarge {\n  border-radius: 16px; }\n.w3-round-xxlarge {\n  border-radius: 32px; }\n.w3-row-padding, .w3-row-padding > .w3-half, .w3-row-padding > .w3-third, .w3-row-padding > .w3-twothird, .w3-row-padding > .w3-threequarter, .w3-row-padding > .w3-quarter, .w3-row-padding > .w3-col {\n  padding: 0 8px; }\n.w3-container, .w3-panel {\n  padding: 0.01em 16px; }\n.w3-panel {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n.w3-code, .w3-codespan {\n  font-family: Consolas,\"courier new\";\n  font-size: 16px; }\n.w3-code {\n  width: auto;\n  background-color: #fff;\n  padding: 8px 12px;\n  border-left: 4px solid #4CAF50;\n  word-wrap: break-word; }\n.w3-codespan {\n  color: crimson;\n  background-color: #f1f1f1;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 110%; }\n.w3-card, .w3-card-2 {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n.w3-card-4, .w3-hover-shadow:hover {\n  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n.w3-spin {\n  -webkit-animation: w3-spin 2s infinite linear;\n          animation: w3-spin 2s infinite linear; }\n@-webkit-keyframes w3-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n@keyframes w3-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n.w3-animate-fading {\n  -webkit-animation: fading 10s infinite;\n          animation: fading 10s infinite; }\n@-webkit-keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.w3-animate-opacity {\n  -webkit-animation: opac 0.8s;\n          animation: opac 0.8s; }\n@-webkit-keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.w3-animate-top {\n  position: relative;\n  -webkit-animation: animatetop 0.4s;\n          animation: animatetop 0.4s; }\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n.w3-animate-left {\n  position: relative;\n  -webkit-animation: animateleft 0.4s;\n          animation: animateleft 0.4s; }\n@-webkit-keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n@keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n.w3-animate-right {\n  position: relative;\n  -webkit-animation: animateright 0.4s;\n          animation: animateright 0.4s; }\n@-webkit-keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n@keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n.w3-animate-bottom {\n  position: relative;\n  -webkit-animation: animatebottom 0.4s;\n          animation: animatebottom 0.4s; }\n@-webkit-keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n@keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n.w3-animate-zoom {\n  -webkit-animation: animatezoom 0.6s;\n          animation: animatezoom 0.6s; }\n@-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.w3-animate-input {\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out; }\n.w3-animate-input:focus {\n  width: 100% !important; }\n.w3-opacity, .w3-hover-opacity:hover {\n  opacity: 0.60; }\n.w3-opacity-off, .w3-hover-opacity-off:hover {\n  opacity: 1; }\n.w3-opacity-max {\n  opacity: 0.25; }\n.w3-opacity-min {\n  opacity: 0.75; }\n.w3-greyscale-max, .w3-grayscale-max, .w3-hover-greyscale:hover, .w3-hover-grayscale:hover {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n.w3-greyscale, .w3-grayscale {\n  -webkit-filter: grayscale(75%);\n          filter: grayscale(75%); }\n.w3-greyscale-min, .w3-grayscale-min {\n  -webkit-filter: grayscale(50%);\n          filter: grayscale(50%); }\n.w3-sepia {\n  -webkit-filter: sepia(75%);\n          filter: sepia(75%); }\n.w3-sepia-max, .w3-hover-sepia:hover {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%); }\n.w3-sepia-min {\n  -webkit-filter: sepia(50%);\n          filter: sepia(50%); }\n.w3-tiny {\n  font-size: 10px !important; }\n.w3-small {\n  font-size: 12px !important; }\n.w3-medium {\n  font-size: 15px !important; }\n.w3-large {\n  font-size: 18px !important; }\n.w3-xlarge {\n  font-size: 24px !important; }\n.w3-xxlarge {\n  font-size: 36px !important; }\n.w3-xxxlarge {\n  font-size: 48px !important; }\n.w3-jumbo {\n  font-size: 64px !important; }\n.w3-left-align {\n  text-align: left !important; }\n.w3-right-align {\n  text-align: right !important; }\n.w3-justify {\n  text-align: justify !important; }\n.w3-center {\n  text-align: center !important; }\n.w3-border-0 {\n  border: 0 !important; }\n.w3-border {\n  border: 1px solid #ccc !important; }\n.w3-border-top {\n  border-top: 1px solid #ccc !important; }\n.w3-border-bottom {\n  border-bottom: 1px solid #ccc !important; }\n.w3-border-left {\n  border-left: 1px solid #ccc !important; }\n.w3-border-right {\n  border-right: 1px solid #ccc !important; }\n.w3-topbar {\n  border-top: 6px solid #ccc !important; }\n.w3-bottombar {\n  border-bottom: 6px solid #ccc !important; }\n.w3-leftbar {\n  border-left: 6px solid #ccc !important; }\n.w3-rightbar {\n  border-right: 6px solid #ccc !important; }\n.w3-section, .w3-code {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n.w3-margin {\n  margin: 16px !important; }\n.w3-margin-top {\n  margin-top: 16px !important; }\n.w3-margin-bottom {\n  margin-bottom: 16px !important; }\n.w3-margin-left {\n  margin-left: 16px !important; }\n.w3-margin-right {\n  margin-right: 16px !important; }\n.w3-padding-small {\n  padding: 4px 8px !important; }\n.w3-padding {\n  padding: 8px 16px !important; }\n.w3-padding-large {\n  padding: 12px 24px !important; }\n.w3-padding-16 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important; }\n.w3-padding-24 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important; }\n.w3-padding-32 {\n  padding-top: 32px !important;\n  padding-bottom: 32px !important; }\n.w3-padding-48 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important; }\n.w3-padding-64 {\n  padding-top: 64px !important;\n  padding-bottom: 64px !important; }\n.w3-left {\n  float: left !important; }\n.w3-right {\n  float: right !important; }\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important; }\n.w3-transparent, .w3-hover-none:hover {\n  background-color: transparent !important; }\n.w3-hover-none:hover {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n/* Colors */\n.w3-amber, .w3-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n.w3-aqua, .w3-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n.w3-blue, .w3-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196F3 !important; }\n.w3-light-blue, .w3-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87CEEB !important; }\n.w3-brown, .w3-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important; }\n.w3-cyan, .w3-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n.w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n.w3-green, .w3-hover-green:hover {\n  color: #fff !important;\n  background-color: #4CAF50 !important; }\n.w3-light-green, .w3-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n.w3-indigo, .w3-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n.w3-khaki, .w3-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n.w3-lime, .w3-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n.w3-orange, .w3-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n.w3-deep-orange, .w3-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n.w3-pink, .w3-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n.w3-purple, .w3-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n.w3-deep-purple, .w3-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n.w3-red, .w3-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n.w3-customRed {\n  color: #fff !important;\n  background-color: #dd0f11 !important; }\n.w3-sand, .w3-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important; }\n.w3-yellow, .w3-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n.w3-white, .w3-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important; }\n.w3-black, .w3-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important; }\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n.w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {\n  color: #fff !important;\n  background-color: #616161 !important; }\n.w3-pale-red, .w3-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n.w3-pale-green, .w3-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n.w3-pale-yellow, .w3-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n.w3-pale-blue, .w3-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n.w3-text-amber, .w3-hover-text-amber:hover {\n  color: #ffc107 !important; }\n.w3-text-aqua, .w3-hover-text-aqua:hover {\n  color: #00ffff !important; }\n.w3-text-blue, .w3-hover-text-blue:hover {\n  color: #2196F3 !important; }\n.w3-text-light-blue, .w3-hover-text-light-blue:hover {\n  color: #87CEEB !important; }\n.w3-text-brown, .w3-hover-text-brown:hover {\n  color: #795548 !important; }\n.w3-text-cyan, .w3-hover-text-cyan:hover {\n  color: #00bcd4 !important; }\n.w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {\n  color: #607d8b !important; }\n.w3-text-green, .w3-hover-text-green:hover {\n  color: #4CAF50 !important; }\n.w3-text-light-green, .w3-hover-text-light-green:hover {\n  color: #8bc34a !important; }\n.w3-text-indigo, .w3-hover-text-indigo:hover {\n  color: #3f51b5 !important; }\n.w3-text-khaki, .w3-hover-text-khaki:hover {\n  color: #b4aa50 !important; }\n.w3-text-lime, .w3-hover-text-lime:hover {\n  color: #cddc39 !important; }\n.w3-text-orange, .w3-hover-text-orange:hover {\n  color: #ff9800 !important; }\n.w3-text-deep-orange, .w3-hover-text-deep-orange:hover {\n  color: #ff5722 !important; }\n.w3-text-pink, .w3-hover-text-pink:hover {\n  color: #e91e63 !important; }\n.w3-text-purple, .w3-hover-text-purple:hover {\n  color: #9c27b0 !important; }\n.w3-text-deep-purple, .w3-hover-text-deep-purple:hover {\n  color: #673ab7 !important; }\n.w3-text-red, .w3-hover-text-red:hover {\n  color: #f44336 !important; }\n.w3-text-sand, .w3-hover-text-sand:hover {\n  color: #fdf5e6 !important; }\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #009688 !important; }\n.w3-text-yellow, .w3-hover-text-yellow:hover {\n  color: #d2be0e !important; }\n.w3-text-white, .w3-hover-text-white:hover {\n  color: #fff !important; }\n.w3-text-black, .w3-hover-text-black:hover {\n  color: #000 !important; }\n.w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {\n  color: #757575 !important; }\n.w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {\n  color: #f1f1f1 !important; }\n.w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {\n  color: #3a3a3a !important; }\n.w3-border-amber, .w3-hover-border-amber:hover {\n  border-color: #ffc107 !important; }\n.w3-border-aqua, .w3-hover-border-aqua:hover {\n  border-color: #00ffff !important; }\n.w3-border-blue, .w3-hover-border-blue:hover {\n  border-color: #2196F3 !important; }\n.w3-border-light-blue, .w3-hover-border-light-blue:hover {\n  border-color: #87CEEB !important; }\n.w3-border-brown, .w3-hover-border-brown:hover {\n  border-color: #795548 !important; }\n.w3-border-cyan, .w3-hover-border-cyan:hover {\n  border-color: #00bcd4 !important; }\n.w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {\n  border-color: #607d8b !important; }\n.w3-border-green, .w3-hover-border-green:hover {\n  border-color: #4CAF50 !important; }\n.w3-border-light-green, .w3-hover-border-light-green:hover {\n  border-color: #8bc34a !important; }\n.w3-border-indigo, .w3-hover-border-indigo:hover {\n  border-color: #3f51b5 !important; }\n.w3-border-khaki, .w3-hover-border-khaki:hover {\n  border-color: #f0e68c !important; }\n.w3-border-lime, .w3-hover-border-lime:hover {\n  border-color: #cddc39 !important; }\n.w3-border-orange, .w3-hover-border-orange:hover {\n  border-color: #ff9800 !important; }\n.w3-border-deep-orange, .w3-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important; }\n.w3-border-pink, .w3-hover-border-pink:hover {\n  border-color: #e91e63 !important; }\n.w3-border-purple, .w3-hover-border-purple:hover {\n  border-color: #9c27b0 !important; }\n.w3-border-deep-purple, .w3-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important; }\n.w3-border-red, .w3-hover-border-red:hover {\n  border-color: #f44336 !important; }\n.w3-border-sand, .w3-hover-border-sand:hover {\n  border-color: #fdf5e6 !important; }\n.w3-border-teal, .w3-hover-border-teal:hover {\n  border-color: #009688 !important; }\n.w3-border-yellow, .w3-hover-border-yellow:hover {\n  border-color: #ffeb3b !important; }\n.w3-border-white, .w3-hover-border-white:hover {\n  border-color: #fff !important; }\n.w3-border-black, .w3-hover-border-black:hover {\n  border-color: #000 !important; }\n.w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {\n  border-color: #9e9e9e !important; }\n.w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {\n  border-color: #f1f1f1 !important; }\n.w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {\n  border-color: #616161 !important; }\n.w3-border-pale-red, .w3-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important; }\n.w3-border-pale-green, .w3-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important; }\n.w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important; }\n.w3-border-pale-blue, .w3-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/styles.scss");
module.exports = __webpack_require__("./node_modules/ngx-toastr/toastr.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map