/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admindashboard/updateuserstatus/route";
exports.ids = ["app/api/admindashboard/updateuserstatus/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_admindashboard_updateuserstatus_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admindashboard/updateuserstatus/route.js */ \"(rsc)/./app/api/admindashboard/updateuserstatus/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admindashboard/updateuserstatus/route\",\n        pathname: \"/api/admindashboard/updateuserstatus\",\n        filename: \"route\",\n        bundlePath: \"app/api/admindashboard/updateuserstatus/route\"\n    },\n    resolvedPagePath: \"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/admindashboard/updateuserstatus/route.js\",\n    nextConfigOutput,\n    userland: _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_admindashboard_updateuserstatus_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbmRhc2hib2FyZCUyRnVwZGF0ZXVzZXJzdGF0dXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluZGFzaGJvYXJkJTJGdXBkYXRldXNlcnN0YXR1cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluZGFzaGJvYXJkJTJGdXBkYXRldXNlcnN0YXR1cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnZhbXNpdGVqY2hvd2RhcnklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZGb29kaWVBbGVydCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ2YW1zaXRlamNob3dkYXJ5JTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGRm9vZGllQWxlcnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FEO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRldXNlcnN0YXR1cy9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRldXNlcnN0YXR1cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZXVzZXJzdGF0dXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZXVzZXJzdGF0dXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRldXNlcnN0YXR1cy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/admindashboard/updateuserstatus/route.js":
/*!**********************************************************!*\
  !*** ./app/api/admindashboard/updateuserstatus/route.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    try {\n        const { id, status } = await req.json(); // Extract user ID and status from the request\n        // Connect to MongoDB\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n        // Find the user by ID and update their status\n        const updatedUser = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            status\n        }, {\n            new: true\n        } // Return the updated document\n        );\n        if (!updatedUser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"User not found.\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"User status updated successfully.\",\n            user: updatedUser\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"An error occurred while updating the user status.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZXVzZXJzdGF0dXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNkO0FBQ1U7QUFFcEMsZUFBZUcsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUksSUFBSSw4Q0FBOEM7UUFFdkYscUJBQXFCO1FBQ3JCLE1BQU1QLDREQUFjQTtRQUVwQiw4Q0FBOEM7UUFDOUMsTUFBTVEsY0FBYyxNQUFNUCxvREFBSUEsQ0FBQ1EsaUJBQWlCLENBQzlDSixJQUNBO1lBQUVDO1FBQU8sR0FDVDtZQUFFSSxLQUFLO1FBQUssRUFBRSw4QkFBOEI7O1FBRzlDLElBQUksQ0FBQ0YsYUFBYTtZQUNoQixPQUFPTixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRUksU0FBUztZQUFrQixHQUM3QjtnQkFBRUwsUUFBUTtZQUFJO1FBRWxCO1FBRUEsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUksU0FBUztZQUFxQ0MsTUFBTUo7UUFBWSxHQUNsRTtZQUFFRixRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPTyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPWCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFSSxTQUFTO1FBQW9ELEdBQy9EO1lBQUVMLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRldXNlcnN0YXR1cy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0TW9uZ29EQiB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWQsIHN0YXR1cyB9ID0gYXdhaXQgcmVxLmpzb24oKTsgLy8gRXh0cmFjdCB1c2VyIElEIGFuZCBzdGF0dXMgZnJvbSB0aGUgcmVxdWVzdFxuXG4gICAgLy8gQ29ubmVjdCB0byBNb25nb0RCXG4gICAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcblxuICAgIC8vIEZpbmQgdGhlIHVzZXIgYnkgSUQgYW5kIHVwZGF0ZSB0aGVpciBzdGF0dXNcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICBpZCxcbiAgICAgIHsgc3RhdHVzIH0sIC8vIFVwZGF0ZSB0aGUgc3RhdHVzIGZpZWxkXG4gICAgICB7IG5ldzogdHJ1ZSB9IC8vIFJldHVybiB0aGUgdXBkYXRlZCBkb2N1bWVudFxuICAgICk7XG5cbiAgICBpZiAoIXVwZGF0ZWRVc2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZC5cIiB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiBcIlVzZXIgc3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiLCB1c2VyOiB1cGRhdGVkVXNlciB9LFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIHVzZXIgc3RhdHVzLlwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiVXNlciIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJpZCIsInN0YXR1cyIsImpzb24iLCJ1cGRhdGVkVXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIiwibmV3IiwibWVzc2FnZSIsInVzZXIiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admindashboard/updateuserstatus/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB: \", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsaUJBQWlCO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQzlDQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0M7SUFDL0M7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2xpYi9tb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6IFwiLCBlcnJvcik7XG4gIH1cbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true\n    },\n    number: {\n        type: Number,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    passcode: {\n        type: Number,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'user'\n    },\n    status: {\n        type: String,\n        default: 'pending'\n    }\n}, {\n    timestamps: true\n});\nuserSchema.pre(\"save\", function(next) {\n    this.email = this.email.toLowerCase();\n    next();\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUcsYUFBYSxJQUFJRiw0Q0FBTUEsQ0FDM0I7SUFDRUcsTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZFLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFFBQVE7UUFDTk4sTUFBTU87UUFDTkwsVUFBVTtJQUNaO0lBQ0FNLFVBQVU7UUFDUlIsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FPLFVBQVU7UUFDUlQsTUFBTU87UUFDTkwsVUFBVTtJQUNaO0lBQ0FRLE1BQU07UUFDSlYsTUFBTUM7UUFDTlUsU0FBUztJQUNYO0lBQ0FDLFFBQVE7UUFDTlosTUFBTUM7UUFDTlUsU0FBUztJQUNYO0FBQ0YsR0FDQTtJQUFFRSxZQUFZO0FBQUs7QUFHckJmLFdBQVdnQixHQUFHLENBQUMsUUFBUSxTQUFVQyxJQUFJO0lBQ25DLElBQUksQ0FBQ1osS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxDQUFDYSxXQUFXO0lBQ25DRDtBQUNGO0FBR0EsTUFBTUUsT0FBT3BCLDRDQUFNQSxDQUFDb0IsSUFBSSxJQUFJdEIscURBQWMsQ0FBQyxRQUFRRztBQUNuRCxpRUFBZW1CLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW1zaXRlamNob3dkYXJ5L0RvY3VtZW50cy9HaXRIdWIvRm9vZGllQWxlcnQvbW9kZWxzL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICBsb3dlcmNhc2U6IHRydWUgXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwYXNzY29kZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndXNlcicsIC8vIERlZmF1bHQgdmFsdWUgZm9yIHJvbGVcbiAgICB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3BlbmRpbmcnLCAvLyBEZWZhdWx0IHZhbHVlIGZvciBzdGF0dXNcbiAgICB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxudXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGZ1bmN0aW9uIChuZXh0KSB7XG4gIHRoaXMuZW1haWwgPSB0aGlzLmVtYWlsLnRvTG93ZXJDYXNlKCk7XG4gIG5leHQoKTtcbn0pO1xuXG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWxzIiwidXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsImxvd2VyY2FzZSIsIm51bWJlciIsIk51bWJlciIsInBhc3N3b3JkIiwicGFzc2NvZGUiLCJyb2xlIiwiZGVmYXVsdCIsInN0YXR1cyIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwidG9Mb3dlckNhc2UiLCJVc2VyIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdateuserstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();