"use strict";
(() => {
var exports = {};
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 24850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/customersubscribe/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/customers.js

const customerSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// Check if the model is already compiled, and use it if so
const Customer = (external_mongoose_default()).models.Customer || external_mongoose_default().model("Customer", customerSchema);
/* harmony default export */ const customers = (Customer);

;// CONCATENATED MODULE: ./models/customerslocations.js

const locationCustomerSchema = new (external_mongoose_default()).Schema({
    location_id: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        ref: "Location",
        required: true
    },
    customer_id: {
        type: (external_mongoose_default()).Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    }
}, {
    timestamps: true
});
// Check if the model is already compiled, and use it if so
const LocationCustomer = (external_mongoose_default()).models.LocationCustomer || external_mongoose_default().model("LocationCustomer", locationCustomerSchema);
/* harmony default export */ const customerslocations = (LocationCustomer);

// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(30729);
;// CONCATENATED MODULE: ./app/api/customersubscribe/route.js
 // Import customers model
 // Import CustomerLocations model
 // Import MongoDB connection function
async function POST(req) {
    try {
        const { name, phone, email, location_id } = await req.json();
        // Connect to the database
        await (0,mongodb/* connectMongoDB */.q)();
        // Log the incoming data for debugging
        console.log("name: ", name);
        console.log("phone: ", phone);
        console.log("email: ", email);
        console.log("location_id: ", location_id);
        // Create a new customer
        const customer = await customers.create({
            name,
            phone,
            email
        });
        // Link the customer to the location
        const locationCustomer = await customerslocations.create({
            location_id: location_id,
            customer_id: customer._id
        });
        // Return a success response
        return new Response(JSON.stringify({
            message: "Customer subscribed successfully.",
            customer,
            locationCustomer
        }), {
            status: 201,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error(error);
        // Return an error response
        return new Response(JSON.stringify({
            message: "An error occurred while subscribing.",
            error: error.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcustomersubscribe%2Froute&name=app%2Fapi%2Fcustomersubscribe%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcustomersubscribe%2Froute.js&appDir=%2FUsers%2Fvamsitejchowdary%2FDocuments%2FGitHub%2FFoodieAlert%2Fapp&appPaths=%2Fapi%2Fcustomersubscribe%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/customersubscribe/route","pathname":"/api/customersubscribe","filename":"route","bundlePath":"app/api/customersubscribe/route"},"resolvedPagePath":"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/customersubscribe/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/customersubscribe/route"

    

/***/ }),

/***/ 30729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ connectMongoDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongoDB = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,77,632], () => (__webpack_exec__(24850)));
module.exports = __webpack_exports__;

})();