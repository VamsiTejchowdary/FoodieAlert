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
exports.id = "app/api/fetchlocationsusingcustomerid/route";
exports.ids = ["app/api/fetchlocationsusingcustomerid/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&page=%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsusingcustomerid%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&page=%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsusingcustomerid%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_fetchlocationsusingcustomerid_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/fetchlocationsusingcustomerid/route.js */ \"(rsc)/./app/api/fetchlocationsusingcustomerid/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/fetchlocationsusingcustomerid/route\",\n        pathname: \"/api/fetchlocationsusingcustomerid\",\n        filename: \"route\",\n        bundlePath: \"app/api/fetchlocationsusingcustomerid/route\"\n    },\n    resolvedPagePath: \"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/fetchlocationsusingcustomerid/route.js\",\n    nextConfigOutput,\n    userland: _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_fetchlocationsusingcustomerid_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmZXRjaGxvY2F0aW9uc3VzaW5nY3VzdG9tZXJpZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmV0Y2hsb2NhdGlvbnN1c2luZ2N1c3RvbWVyaWQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmZXRjaGxvY2F0aW9uc3VzaW5nY3VzdG9tZXJpZCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnZhbXNpdGVqY2hvd2RhcnklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZGb29kaWVBbGVydCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ2YW1zaXRlamNob3dkYXJ5JTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGRm9vZGllQWxlcnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvZmV0Y2hsb2NhdGlvbnN1c2luZ2N1c3RvbWVyaWQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ZldGNobG9jYXRpb25zdXNpbmdjdXN0b21lcmlkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZmV0Y2hsb2NhdGlvbnN1c2luZ2N1c3RvbWVyaWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ZldGNobG9jYXRpb25zdXNpbmdjdXN0b21lcmlkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3ZhbXNpdGVqY2hvd2RhcnkvRG9jdW1lbnRzL0dpdEh1Yi9Gb29kaWVBbGVydC9hcHAvYXBpL2ZldGNobG9jYXRpb25zdXNpbmdjdXN0b21lcmlkL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&page=%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsusingcustomerid%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/fetchlocationsusingcustomerid/route.js":
/*!********************************************************!*\
  !*** ./app/api/fetchlocationsusingcustomerid/route.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_customerslocations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/customerslocations */ \"(rsc)/./models/customerslocations.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n        // Extract customerId from the request\n        const { customerId } = await req.json();\n        // Find all location IDs associated with the customerId\n        const locations = await _models_customerslocations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            customer_id: customerId,\n            subscription: true\n        }).select(\"location_id\");\n        // Check if any locations are found\n        if (locations.length > 0) {\n            const locationIds = locations.map((location)=>location.location_id);\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                locationIds\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"No locations found for the provided customer ID\"\n            }, {\n                status: 404\n            });\n        }\n    } catch (error) {\n        console.error(\"Error in fetching locations:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"An error occurred while fetching locations\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZldGNobG9jYXRpb25zdXNpbmdjdXN0b21lcmlkL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFDWTtBQUNoQjtBQUVwQyxlQUFlRyxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNSiw0REFBY0E7UUFFcEIsc0NBQXNDO1FBQ3RDLE1BQU0sRUFBRUssVUFBVSxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUVyQyx1REFBdUQ7UUFDdkQsTUFBTUMsWUFBWSxNQUFNTixrRUFBZ0JBLENBQUNPLElBQUksQ0FBQztZQUMxQ0MsYUFBYUo7WUFDYkssY0FBYztRQUNoQixHQUFHQyxNQUFNLENBQUM7UUFFWixtQ0FBbUM7UUFDbkMsSUFBSUosVUFBVUssTUFBTSxHQUFHLEdBQUc7WUFDeEIsTUFBTUMsY0FBY04sVUFBVU8sR0FBRyxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLFdBQVc7WUFDcEUsT0FBT2QscURBQVlBLENBQUNJLElBQUksQ0FBQztnQkFBRU87WUFBWTtRQUN6QyxPQUFPO1lBQ0wsT0FBT1gscURBQVlBLENBQUNJLElBQUksQ0FBQztnQkFBRVcsU0FBUztZQUFrRCxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekc7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBT2pCLHFEQUFZQSxDQUFDSSxJQUFJLENBQ3RCO1lBQUVXLFNBQVM7WUFBOENFLE9BQU9BLE1BQU1GLE9BQU87UUFBQyxHQUM5RTtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3ZhbXNpdGVqY2hvd2RhcnkvRG9jdW1lbnRzL0dpdEh1Yi9Gb29kaWVBbGVydC9hcHAvYXBpL2ZldGNobG9jYXRpb25zdXNpbmdjdXN0b21lcmlkL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RNb25nb0RCIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBMb2NhdGlvbkN1c3RvbWVyIGZyb20gXCJAL21vZGVscy9jdXN0b21lcnNsb2NhdGlvbnNcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xuXG4gICAgLy8gRXh0cmFjdCBjdXN0b21lcklkIGZyb20gdGhlIHJlcXVlc3RcbiAgICBjb25zdCB7IGN1c3RvbWVySWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAvLyBGaW5kIGFsbCBsb2NhdGlvbiBJRHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXN0b21lcklkXG4gICAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgTG9jYXRpb25DdXN0b21lci5maW5kKHtcbiAgICAgICAgY3VzdG9tZXJfaWQ6IGN1c3RvbWVySWQsXG4gICAgICAgIHN1YnNjcmlwdGlvbjogdHJ1ZSwgLy8gRW5zdXJlIHN1YnNjcmlwdGlvbiBpcyB0cnVlXG4gICAgICB9KS5zZWxlY3QoXCJsb2NhdGlvbl9pZFwiKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBsb2NhdGlvbnMgYXJlIGZvdW5kXG4gICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsb2NhdGlvbklkcyA9IGxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uKSA9PiBsb2NhdGlvbi5sb2NhdGlvbl9pZCk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBsb2NhdGlvbklkcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJObyBsb2NhdGlvbnMgZm91bmQgZm9yIHRoZSBwcm92aWRlZCBjdXN0b21lciBJRFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBmZXRjaGluZyBsb2NhdGlvbnM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgbG9jYXRpb25zXCIsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiTG9jYXRpb25DdXN0b21lciIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJjdXN0b21lcklkIiwianNvbiIsImxvY2F0aW9ucyIsImZpbmQiLCJjdXN0b21lcl9pZCIsInN1YnNjcmlwdGlvbiIsInNlbGVjdCIsImxlbmd0aCIsImxvY2F0aW9uSWRzIiwibWFwIiwibG9jYXRpb24iLCJsb2NhdGlvbl9pZCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/fetchlocationsusingcustomerid/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB: \", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsaUJBQWlCO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQzlDQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0M7SUFDL0M7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2xpYi9tb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6IFwiLCBlcnJvcik7XG4gIH1cbn07Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/customerslocations.js":
/*!**************************************!*\
  !*** ./models/customerslocations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst locationCustomerSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    location_id: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Location\",\n        required: true\n    },\n    customer_id: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Customer\",\n        required: true\n    },\n    subscription: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n});\n// Check if the model is already compiled, and use it if so\nconst LocationCustomer = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).LocationCustomer || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"LocationCustomer\", locationCustomerSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationCustomer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvY3VzdG9tZXJzbG9jYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyx5QkFBeUIsSUFBSUQsd0RBQWUsQ0FDaEQ7SUFDRUcsYUFBYTtRQUNYQyxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBQ0FDLGFBQWE7UUFDWEwsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBRSxjQUFjO1FBQUVOLE1BQU1PO1FBQVNDLFNBQVM7SUFBSztBQUMvQyxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUdyQiwyREFBMkQ7QUFDM0QsTUFBTUMsbUJBQW1CZCx3REFBZSxDQUFDYyxnQkFBZ0IsSUFBSWQscURBQWMsQ0FBQyxvQkFBb0JDO0FBRWhHLGlFQUFlYSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW1zaXRlamNob3dkYXJ5L0RvY3VtZW50cy9HaXRIdWIvRm9vZGllQWxlcnQvbW9kZWxzL2N1c3RvbWVyc2xvY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGxvY2F0aW9uQ3VzdG9tZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgbG9jYXRpb25faWQ6IHsgXG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIFxuICAgICAgcmVmOiBcIkxvY2F0aW9uXCIsIFxuICAgICAgcmVxdWlyZWQ6IHRydWUgXG4gICAgfSxcbiAgICBjdXN0b21lcl9pZDogeyBcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgXG4gICAgICByZWY6IFwiQ3VzdG9tZXJcIiwgXG4gICAgICByZXF1aXJlZDogdHJ1ZSBcbiAgICB9LFxuICAgIHN1YnNjcmlwdGlvbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH1cbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbi8vIENoZWNrIGlmIHRoZSBtb2RlbCBpcyBhbHJlYWR5IGNvbXBpbGVkLCBhbmQgdXNlIGl0IGlmIHNvXG5jb25zdCBMb2NhdGlvbkN1c3RvbWVyID0gbW9uZ29vc2UubW9kZWxzLkxvY2F0aW9uQ3VzdG9tZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJMb2NhdGlvbkN1c3RvbWVyXCIsIGxvY2F0aW9uQ3VzdG9tZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkN1c3RvbWVyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImxvY2F0aW9uQ3VzdG9tZXJTY2hlbWEiLCJTY2hlbWEiLCJsb2NhdGlvbl9pZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJjdXN0b21lcl9pZCIsInN1YnNjcmlwdGlvbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIkxvY2F0aW9uQ3VzdG9tZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/customerslocations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&page=%2Fapi%2Ffetchlocationsusingcustomerid%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsusingcustomerid%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();