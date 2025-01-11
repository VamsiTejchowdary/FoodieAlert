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
exports.id = "app/api/fetchlocationsbyids/route";
exports.ids = ["app/api/fetchlocationsbyids/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsbyids%2Froute&page=%2Fapi%2Ffetchlocationsbyids%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsbyids%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsbyids%2Froute&page=%2Fapi%2Ffetchlocationsbyids%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsbyids%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_fetchlocationsbyids_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/fetchlocationsbyids/route.js */ \"(rsc)/./app/api/fetchlocationsbyids/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/fetchlocationsbyids/route\",\n        pathname: \"/api/fetchlocationsbyids\",\n        filename: \"route\",\n        bundlePath: \"app/api/fetchlocationsbyids/route\"\n    },\n    resolvedPagePath: \"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/fetchlocationsbyids/route.js\",\n    nextConfigOutput,\n    userland: _Users_vamsitejchowdary_Documents_GitHub_FoodieAlert_app_api_fetchlocationsbyids_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmZXRjaGxvY2F0aW9uc2J5aWRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmZXRjaGxvY2F0aW9uc2J5aWRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZmV0Y2hsb2NhdGlvbnNieWlkcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnZhbXNpdGVqY2hvd2RhcnklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZGb29kaWVBbGVydCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ2YW1zaXRlamNob3dkYXJ5JTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGRm9vZGllQWxlcnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvZmV0Y2hsb2NhdGlvbnNieWlkcy9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmV0Y2hsb2NhdGlvbnNieWlkcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ZldGNobG9jYXRpb25zYnlpZHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ZldGNobG9jYXRpb25zYnlpZHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2FwcC9hcGkvZmV0Y2hsb2NhdGlvbnNieWlkcy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsbyids%2Froute&page=%2Fapi%2Ffetchlocationsbyids%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsbyids%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/fetchlocationsbyids/route.js":
/*!**********************************************!*\
  !*** ./app/api/fetchlocationsbyids/route.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/locations */ \"(rsc)/./models/locations.js\");\n/* harmony import */ var _models_locations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_locations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    try {\n        // Connect to the MongoDB database\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n        // Parse the request body\n        console.log(\"Here in grouplocationids fetching\");\n        const { locationIds } = await req.json();\n        // Validate the input\n        if (!locationIds || !Array.isArray(locationIds)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: false,\n                message: \"Invalid or missing locationIds array.\"\n            }, {\n                status: 400\n            });\n        }\n        // Fetch the location details\n        const locations = await _models_locations__WEBPACK_IMPORTED_MODULE_1___default().find({\n            _id: {\n                $in: locationIds\n            }\n        });\n        // Return the response with the fetched locations\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            locations\n        });\n    } catch (error) {\n        console.error(\"Error fetching location details:\", error);\n        // Handle errors gracefully\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"An error occurred while fetching location details.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZldGNobG9jYXRpb25zYnlpZHMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDTDtBQUNDO0FBRXBDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLGtDQUFrQztRQUNsQyxNQUFNSiw0REFBY0E7UUFFcEIseUJBQXlCO1FBQ3pCSyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU1ILElBQUlJLElBQUk7UUFFdEMscUJBQXFCO1FBQ3JCLElBQUksQ0FBQ0QsZUFBZSxDQUFDRSxNQUFNQyxPQUFPLENBQUNILGNBQWM7WUFDL0MsT0FBT0wscURBQVlBLENBQUNNLElBQUksQ0FDdEI7Z0JBQUVHLFNBQVM7Z0JBQU9DLFNBQVM7WUFBd0MsR0FDbkU7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLDZCQUE2QjtRQUM3QixNQUFNQyxZQUFZLE1BQU1iLDZEQUFhLENBQUM7WUFBRWUsS0FBSztnQkFBRUMsS0FBS1Y7WUFBWTtRQUFFO1FBRWxFLGlEQUFpRDtRQUNqRCxPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVHLFNBQVM7WUFBTUc7UUFBVTtJQUN0RCxFQUFFLE9BQU9JLE9BQU87UUFDZGIsUUFBUWEsS0FBSyxDQUFDLG9DQUFvQ0E7UUFFbEQsMkJBQTJCO1FBQzNCLE9BQU9oQixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQU9DLFNBQVM7UUFBcUQsR0FDaEY7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy92YW1zaXRlamNob3dkYXJ5L0RvY3VtZW50cy9HaXRIdWIvRm9vZGllQWxlcnQvYXBwL2FwaS9mZXRjaGxvY2F0aW9uc2J5aWRzL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RNb25nb0RCIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiQC9tb2RlbHMvbG9jYXRpb25zXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIHRyeSB7XG4gICAgLy8gQ29ubmVjdCB0byB0aGUgTW9uZ29EQiBkYXRhYmFzZVxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XG5cbiAgICAvLyBQYXJzZSB0aGUgcmVxdWVzdCBib2R5XG4gICAgY29uc29sZS5sb2coXCJIZXJlIGluIGdyb3VwbG9jYXRpb25pZHMgZmV0Y2hpbmdcIik7XG4gICAgY29uc3QgeyBsb2NhdGlvbklkcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIFZhbGlkYXRlIHRoZSBpbnB1dFxuICAgIGlmICghbG9jYXRpb25JZHMgfHwgIUFycmF5LmlzQXJyYXkobG9jYXRpb25JZHMpKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSW52YWxpZCBvciBtaXNzaW5nIGxvY2F0aW9uSWRzIGFycmF5LlwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGZXRjaCB0aGUgbG9jYXRpb24gZGV0YWlsc1xuICAgIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IExvY2F0aW9uLmZpbmQoeyBfaWQ6IHsgJGluOiBsb2NhdGlvbklkcyB9IH0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSByZXNwb25zZSB3aXRoIHRoZSBmZXRjaGVkIGxvY2F0aW9uc1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGxvY2F0aW9ucyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbG9jYXRpb24gZGV0YWlsczpcIiwgZXJyb3IpO1xuXG4gICAgLy8gSGFuZGxlIGVycm9ycyBncmFjZWZ1bGx5XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBsb2NhdGlvbiBkZXRhaWxzLlwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiTG9jYXRpb24iLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uSWRzIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwibG9jYXRpb25zIiwiZmluZCIsIl9pZCIsIiRpbiIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/fetchlocationsbyids/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.log(\"Error connecting to MongoDB: \", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsaUJBQWlCO0lBQzVCLElBQUk7UUFDRixNQUFNRCx1REFBZ0IsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQzlDQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0M7SUFDL0M7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L2xpYi9tb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6IFwiLCBlcnJvcik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/locations.js":
/*!*****************************!*\
  !*** ./models/locations.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema } = mongoose;\n// Define the location schema\nconst locationSchema = new Schema({\n    business_id: {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: 'User',\n        required: true\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    address: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    adminstatus: {\n        type: String,\n        default: 'pending'\n    },\n    activestatus: {\n        type: Boolean,\n        default: true\n    }\n}, {\n    timestamps: true\n} // Automatically adds createdAt and updatedAt fields\n);\n// Check if the model is already defined\nconst Location = mongoose.models.Location || mongoose.model('Location', locationSchema);\nmodule.exports = Location;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvbG9jYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUNuQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtBQUVuQiw2QkFBNkI7QUFDN0IsTUFBTUcsaUJBQWlCLElBQUlELE9BQ3pCO0lBQ0VFLGFBQWE7UUFDWEMsTUFBTUwsU0FBU0UsTUFBTSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBQ0FDLE1BQU07UUFDSkwsTUFBTU07UUFDTkYsVUFBVTtRQUNWRyxNQUFNO0lBQ1I7SUFDQUMsU0FBUztRQUNQUixNQUFNTTtRQUNORixVQUFVO1FBQ1ZHLE1BQU07SUFDUjtJQUNBRSxhQUFhO1FBQUVULE1BQU1NO1FBQVFJLFNBQVM7SUFBVTtJQUNoREMsY0FBYztRQUFFWCxNQUFNWTtRQUFTRixTQUFTO0lBQUs7QUFDL0MsR0FDQTtJQUFFRyxZQUFZO0FBQUssRUFBRSxvREFBb0Q7O0FBRzNFLHdDQUF3QztBQUN4QyxNQUFNQyxXQUFXbkIsU0FBU29CLE1BQU0sQ0FBQ0QsUUFBUSxJQUFJbkIsU0FBU3FCLEtBQUssQ0FBQyxZQUFZbEI7QUFFeEVtQixPQUFPQyxPQUFPLEdBQUdKIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L21vZGVscy9sb2NhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG4vLyBEZWZpbmUgdGhlIGxvY2F0aW9uIHNjaGVtYVxuY29uc3QgbG9jYXRpb25TY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgYnVzaW5lc3NfaWQ6IHtcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgIHJlZjogJ1VzZXInLCAvLyBSZWZlcmVuY2luZyB0aGUgJ1VzZXInIG1vZGVsIGZvciB0aGUgYnVzaW5lc3Mgb3duZXJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLCAvLyBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSBuYW1lXG4gICAgfSxcbiAgICBhZGRyZXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsIC8vIFJlbW92ZXMgd2hpdGVzcGFjZSBmcm9tIGFkZHJlc3NcbiAgICB9LFxuICAgIGFkbWluc3RhdHVzOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3BlbmRpbmcnIH0sXG4gICAgYWN0aXZlc3RhdHVzOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfSAvLyBBdXRvbWF0aWNhbGx5IGFkZHMgY3JlYXRlZEF0IGFuZCB1cGRhdGVkQXQgZmllbGRzXG4pO1xuXG4vLyBDaGVjayBpZiB0aGUgbW9kZWwgaXMgYWxyZWFkeSBkZWZpbmVkXG5jb25zdCBMb2NhdGlvbiA9IG1vbmdvb3NlLm1vZGVscy5Mb2NhdGlvbiB8fCBtb25nb29zZS5tb2RlbCgnTG9jYXRpb24nLCBsb2NhdGlvblNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsImxvY2F0aW9uU2NoZW1hIiwiYnVzaW5lc3NfaWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwibmFtZSIsIlN0cmluZyIsInRyaW0iLCJhZGRyZXNzIiwiYWRtaW5zdGF0dXMiLCJkZWZhdWx0IiwiYWN0aXZlc3RhdHVzIiwiQm9vbGVhbiIsInRpbWVzdGFtcHMiLCJMb2NhdGlvbiIsIm1vZGVscyIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/locations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffetchlocationsbyids%2Froute&page=%2Fapi%2Ffetchlocationsbyids%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffetchlocationsbyids%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();