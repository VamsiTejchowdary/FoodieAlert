"use strict";
exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 14723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ handler),
/* harmony export */   POST: () => (/* binding */ handler),
/* harmony export */   authOptions: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30729);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90796);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17185);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42446);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54989);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);





const authOptions = {
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            name: "credentials",
            credentials: {},
            async authorize (credentials) {
                const { email, password } = credentials;
                try {
                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectMongoDB */ .q)();
                    const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.findOne({
                        email
                    });
                    if (!user) {
                        return null;
                    }
                    //const passwordsMatch = await compare(password, user.password);
                    if (password != user.password) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
};
const handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__["default"])(authOptions);



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


/***/ }),

/***/ 90796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ })

};
;