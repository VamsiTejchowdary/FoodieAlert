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
exports.id = "app/api/admindashboard/updatelocationstatus/route";
exports.ids = ["app/api/admindashboard/updatelocationstatus/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_admindashboard_updatelocationstatus_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admindashboard/updatelocationstatus/route.js */ \"(rsc)/./app/api/admindashboard/updatelocationstatus/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admindashboard/updatelocationstatus/route\",\n        pathname: \"/api/admindashboard/updatelocationstatus\",\n        filename: \"route\",\n        bundlePath: \"app/api/admindashboard/updatelocationstatus/route\"\n    },\n    resolvedPagePath: \"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/admindashboard/updatelocationstatus/route.js\",\n    nextConfigOutput,\n    userland: _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_admindashboard_updatelocationstatus_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbmRhc2hib2FyZCUyRnVwZGF0ZWxvY2F0aW9uc3RhdHVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbmRhc2hib2FyZCUyRnVwZGF0ZWxvY2F0aW9uc3RhdHVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW5kYXNoYm9hcmQlMkZ1cGRhdGVsb2NhdGlvbnN0YXR1cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnZhbXNpdGVqY2hvd2RhcnklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZGb29kaWVBbGVydCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ2YW1zaXRlamNob3dkYXJ5JTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGRm9vZGllQWxlcnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lEO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRlbG9jYXRpb25zdGF0dXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZWxvY2F0aW9uc3RhdHVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW5kYXNoYm9hcmQvdXBkYXRlbG9jYXRpb25zdGF0dXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZWxvY2F0aW9uc3RhdHVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3ZhbXNpdGVqY2hvd2RhcnkvRG9jdW1lbnRzL0dpdEh1Yi9Gb29kaWVBbGVydC9hcHAvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZWxvY2F0aW9uc3RhdHVzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/admindashboard/updatelocationstatus/route.js":
/*!**************************************************************!*\
  !*** ./app/api/admindashboard/updatelocationstatus/route.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/locations */ \"(rsc)/./models/locations.js\");\n/* harmony import */ var _models_locations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_locations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    try {\n        // Parse the request body\n        const { id, adminstatus } = await request.json();\n        // Check if the id and status are provided\n        if (!id || !adminstatus) {\n            return new Response(JSON.stringify({\n                message: \"Location ID and admin status are required.\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Establish connection to MongoDB\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n        // Find the location by id\n        const location = await _models_locations__WEBPACK_IMPORTED_MODULE_1___default().findById(id);\n        if (!location) {\n            return new Response(JSON.stringify({\n                message: \"Location not found.\"\n            }), {\n                status: 404,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Update the location's status\n        location.adminstatus = adminstatus;\n        // Save the updated location\n        await location.save();\n        return new Response(JSON.stringify({\n            message: \"Location status updated successfully.\"\n        }), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error while updating location status:\", error);\n        return new Response(JSON.stringify({\n            message: \"An error occurred while updating the location status.\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluZGFzaGJvYXJkL3VwZGF0ZWxvY2F0aW9uc3RhdHVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFDTDtBQUVuQyxlQUFlRSxLQUFLQyxPQUFPO0lBQ2hDLElBQUk7UUFDRix5QkFBeUI7UUFDekIsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFOUMsMENBQTBDO1FBQzFDLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxhQUFhO1lBQ3ZCLE9BQU8sSUFBSUUsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO2dCQUNiQyxTQUFTO1lBQ1gsSUFDQTtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQ2hEO1FBRUo7UUFFQSxrQ0FBa0M7UUFDbEMsTUFBTVosNERBQWNBO1FBRXBCLDBCQUEwQjtRQUMxQixNQUFNYSxXQUFXLE1BQU1aLGlFQUFpQixDQUFDRztRQUV6QyxJQUFJLENBQUNTLFVBQVU7WUFDYixPQUFPLElBQUlOLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFDYkMsU0FBUztZQUNYLElBQ0E7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUNoRDtRQUVKO1FBRUEsK0JBQStCO1FBQy9CQyxTQUFTUixXQUFXLEdBQUdBO1FBRXZCLDRCQUE0QjtRQUM1QixNQUFNUSxTQUFTRSxJQUFJO1FBRW5CLE9BQU8sSUFBSVIsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2JDLFNBQVM7UUFDWCxJQUNBO1lBQ0VDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFFSixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlDQUF5Q0E7UUFDdkQsT0FBTyxJQUFJVCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFDYkMsU0FBUztRQUNYLElBQ0E7WUFDRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUVKO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW1zaXRlamNob3dkYXJ5L0RvY3VtZW50cy9HaXRIdWIvRm9vZGllQWxlcnQvYXBwL2FwaS9hZG1pbmRhc2hib2FyZC91cGRhdGVsb2NhdGlvbnN0YXR1cy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0TW9uZ29EQiB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIkAvbW9kZWxzL2xvY2F0aW9uc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgLy8gUGFyc2UgdGhlIHJlcXVlc3QgYm9keVxuICAgIGNvbnN0IHsgaWQsIGFkbWluc3RhdHVzIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBpZCBhbmQgc3RhdHVzIGFyZSBwcm92aWRlZFxuICAgIGlmICghaWQgfHwgIWFkbWluc3RhdHVzKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbWVzc2FnZTogXCJMb2NhdGlvbiBJRCBhbmQgYWRtaW4gc3RhdHVzIGFyZSByZXF1aXJlZC5cIixcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdG8gTW9uZ29EQlxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XG5cbiAgICAvLyBGaW5kIHRoZSBsb2NhdGlvbiBieSBpZFxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgTG9jYXRpb24uZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiTG9jYXRpb24gbm90IGZvdW5kLlwiLFxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGxvY2F0aW9uJ3Mgc3RhdHVzXG4gICAgbG9jYXRpb24uYWRtaW5zdGF0dXMgPSBhZG1pbnN0YXR1cztcblxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgbG9jYXRpb25cbiAgICBhd2FpdCBsb2NhdGlvbi5zYXZlKCk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXNzYWdlOiBcIkxvY2F0aW9uIHN0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5cIixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHVwZGF0aW5nIGxvY2F0aW9uIHN0YXR1czpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGxvY2F0aW9uIHN0YXR1cy5cIixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvREIiLCJMb2NhdGlvbiIsIlBPU1QiLCJyZXF1ZXN0IiwiaWQiLCJhZG1pbnN0YXR1cyIsImpzb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsImxvY2F0aW9uIiwiZmluZEJ5SWQiLCJzYXZlIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admindashboard/updatelocationstatus/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB: \", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsaUJBQWlCO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQzlDQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0M7SUFDL0M7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2xpYi9tb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6IFwiLCBlcnJvcik7XG4gIH1cbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/locations.js":
/*!*****************************!*\
  !*** ./models/locations.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema } = mongoose;\n// Define the location schema\nconst locationSchema = new Schema({\n    business_id: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: 'User',\n        required: true\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    address: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    messagechannel: {\n        type: String,\n        required: true,\n        default: 'email'\n    },\n    adminstatus: {\n        type: String,\n        default: 'pending'\n    },\n    activestatus: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n} // Automatically adds createdAt and updatedAt fields\n);\n// Check if the model is already defined\nconst Location = mongoose.models.Location || mongoose.model('Location', locationSchema);\nmodule.exports = Location;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvbG9jYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtBQUVuQiw2QkFBNkI7QUFDN0IsTUFBTUcsaUJBQWlCLElBQUlELE9BQ3pCO0lBQ0VFLGFBQWE7UUFDWEMsTUFBTUwsU0FBU0UsTUFBTSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBQ0FDLE1BQU07UUFDSkwsTUFBTU07UUFDTkYsVUFBVTtRQUNWRyxNQUFNO0lBQ1I7SUFDQUMsU0FBUztRQUNQUixNQUFNTTtRQUNORixVQUFVO1FBQ1ZHLE1BQU07SUFDUjtJQUNBRSxnQkFBZ0I7UUFDZFQsTUFBTU07UUFDTkYsVUFBVTtRQUNWTSxTQUFTO0lBQ1g7SUFDQUMsYUFBYTtRQUFFWCxNQUFNTTtRQUFRSSxTQUFTO0lBQVU7SUFDaERFLGNBQWM7UUFBRVosTUFBTWE7UUFBU0gsU0FBUztJQUFLO0FBQy9DLEdBQ0E7SUFBRUksWUFBWTtBQUFLLEVBQUUsb0RBQW9EOztBQUczRSx3Q0FBd0M7QUFDeEMsTUFBTUMsV0FBV3BCLFNBQVNxQixNQUFNLENBQUNELFFBQVEsSUFBSXBCLFNBQVNzQixLQUFLLENBQUMsWUFBWW5CO0FBRXhFb0IsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsiL1VzZXJzL3ZhbXNpdGVqY2hvd2RhcnkvRG9jdW1lbnRzL0dpdEh1Yi9Gb29kaWVBbGVydC9tb2RlbHMvbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuLy8gRGVmaW5lIHRoZSBsb2NhdGlvbiBzY2hlbWFcbmNvbnN0IGxvY2F0aW9uU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGJ1c2luZXNzX2lkOiB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdVc2VyJywgLy8gUmVmZXJlbmNpbmcgdGhlICdVc2VyJyBtb2RlbCBmb3IgdGhlIGJ1c2luZXNzIG93bmVyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSwgLy8gUmVtb3ZlcyB3aGl0ZXNwYWNlIGZyb20gbmFtZVxuICAgIH0sXG4gICAgYWRkcmVzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLCAvLyBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSBhZGRyZXNzXG4gICAgfSxcbiAgICBtZXNzYWdlY2hhbm5lbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAnZW1haWwnLFxuICAgIH0sXG4gICAgYWRtaW5zdGF0dXM6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAncGVuZGluZycgfSxcbiAgICBhY3RpdmVzdGF0dXM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9XG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9IC8vIEF1dG9tYXRpY2FsbHkgYWRkcyBjcmVhdGVkQXQgYW5kIHVwZGF0ZWRBdCBmaWVsZHNcbik7XG5cbi8vIENoZWNrIGlmIHRoZSBtb2RlbCBpcyBhbHJlYWR5IGRlZmluZWRcbmNvbnN0IExvY2F0aW9uID0gbW9uZ29vc2UubW9kZWxzLkxvY2F0aW9uIHx8IG1vbmdvb3NlLm1vZGVsKCdMb2NhdGlvbicsIGxvY2F0aW9uU2NoZW1hKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwibG9jYXRpb25TY2hlbWEiLCJidXNpbmVzc19pZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwidHJpbSIsImFkZHJlc3MiLCJtZXNzYWdlY2hhbm5lbCIsImRlZmF1bHQiLCJhZG1pbnN0YXR1cyIsImFjdGl2ZXN0YXR1cyIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwiTG9jYXRpb24iLCJtb2RlbHMiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/locations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&page=%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmindashboard%2Fupdatelocationstatus%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();