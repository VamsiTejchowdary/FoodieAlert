/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dotenv";
exports.ids = ["vendor-chunks/dotenv"];
exports.modules = {

/***/ "(rsc)/./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst os = __webpack_require__(/*! os */ \"os\")\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\")\nconst packageJson = __webpack_require__(/*! ../package.json */ \"(rsc)/./node_modules/dotenv/package.json\")\n\nconst version = packageJson.version\n\nconst LINE = /(?:^|^)\\s*(?:export\\s+)?([\\w.-]+)(?:\\s*=\\s*?|:\\s+?)(\\s*'(?:\\\\'|[^'])*'|\\s*\"(?:\\\\\"|[^\"])*\"|\\s*`(?:\\\\`|[^`])*`|[^#\\r\\n]+)?\\s*(?:#.*)?(?:$|$)/mg\n\n// Parse src into an Object\nfunction parse (src) {\n  const obj = {}\n\n  // Convert buffer to string\n  let lines = src.toString()\n\n  // Convert line breaks to same format\n  lines = lines.replace(/\\r\\n?/mg, '\\n')\n\n  let match\n  while ((match = LINE.exec(lines)) != null) {\n    const key = match[1]\n\n    // Default undefined or null to empty string\n    let value = (match[2] || '')\n\n    // Remove whitespace\n    value = value.trim()\n\n    // Check if double quoted\n    const maybeQuote = value[0]\n\n    // Remove surrounding quotes\n    value = value.replace(/^(['\"`])([\\s\\S]*)\\1$/mg, '$2')\n\n    // Expand newlines if double quoted\n    if (maybeQuote === '\"') {\n      value = value.replace(/\\\\n/g, '\\n')\n      value = value.replace(/\\\\r/g, '\\r')\n    }\n\n    // Add to object\n    obj[key] = value\n  }\n\n  return obj\n}\n\nfunction _parseVault (options) {\n  const vaultPath = _vaultPath(options)\n\n  // Parse .env.vault\n  const result = DotenvModule.configDotenv({ path: vaultPath })\n  if (!result.parsed) {\n    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`)\n    err.code = 'MISSING_DATA'\n    throw err\n  }\n\n  // handle scenario for comma separated keys - for use with key rotation\n  // example: DOTENV_KEY=\"dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=prod,dotenv://:key_7890@dotenvx.com/vault/.env.vault?environment=prod\"\n  const keys = _dotenvKey(options).split(',')\n  const length = keys.length\n\n  let decrypted\n  for (let i = 0; i < length; i++) {\n    try {\n      // Get full key\n      const key = keys[i].trim()\n\n      // Get instructions for decrypt\n      const attrs = _instructions(result, key)\n\n      // Decrypt\n      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key)\n\n      break\n    } catch (error) {\n      // last key\n      if (i + 1 >= length) {\n        throw error\n      }\n      // try next key\n    }\n  }\n\n  // Parse decrypted .env string\n  return DotenvModule.parse(decrypted)\n}\n\nfunction _log (message) {\n  console.log(`[dotenv@${version}][INFO] ${message}`)\n}\n\nfunction _warn (message) {\n  console.log(`[dotenv@${version}][WARN] ${message}`)\n}\n\nfunction _debug (message) {\n  console.log(`[dotenv@${version}][DEBUG] ${message}`)\n}\n\nfunction _dotenvKey (options) {\n  // prioritize developer directly setting options.DOTENV_KEY\n  if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {\n    return options.DOTENV_KEY\n  }\n\n  // secondary infra already contains a DOTENV_KEY environment variable\n  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {\n    return process.env.DOTENV_KEY\n  }\n\n  // fallback to empty string\n  return ''\n}\n\nfunction _instructions (result, dotenvKey) {\n  // Parse DOTENV_KEY. Format is a URI\n  let uri\n  try {\n    uri = new URL(dotenvKey)\n  } catch (error) {\n    if (error.code === 'ERR_INVALID_URL') {\n      const err = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development')\n      err.code = 'INVALID_DOTENV_KEY'\n      throw err\n    }\n\n    throw error\n  }\n\n  // Get decrypt key\n  const key = uri.password\n  if (!key) {\n    const err = new Error('INVALID_DOTENV_KEY: Missing key part')\n    err.code = 'INVALID_DOTENV_KEY'\n    throw err\n  }\n\n  // Get environment\n  const environment = uri.searchParams.get('environment')\n  if (!environment) {\n    const err = new Error('INVALID_DOTENV_KEY: Missing environment part')\n    err.code = 'INVALID_DOTENV_KEY'\n    throw err\n  }\n\n  // Get ciphertext payload\n  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`\n  const ciphertext = result.parsed[environmentKey] // DOTENV_VAULT_PRODUCTION\n  if (!ciphertext) {\n    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`)\n    err.code = 'NOT_FOUND_DOTENV_ENVIRONMENT'\n    throw err\n  }\n\n  return { ciphertext, key }\n}\n\nfunction _vaultPath (options) {\n  let possibleVaultPath = null\n\n  if (options && options.path && options.path.length > 0) {\n    if (Array.isArray(options.path)) {\n      for (const filepath of options.path) {\n        if (fs.existsSync(filepath)) {\n          possibleVaultPath = filepath.endsWith('.vault') ? filepath : `${filepath}.vault`\n        }\n      }\n    } else {\n      possibleVaultPath = options.path.endsWith('.vault') ? options.path : `${options.path}.vault`\n    }\n  } else {\n    possibleVaultPath = path.resolve(process.cwd(), '.env.vault')\n  }\n\n  if (fs.existsSync(possibleVaultPath)) {\n    return possibleVaultPath\n  }\n\n  return null\n}\n\nfunction _resolveHome (envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath\n}\n\nfunction _configVault (options) {\n  _log('Loading env from encrypted .env.vault')\n\n  const parsed = DotenvModule._parseVault(options)\n\n  let processEnv = process.env\n  if (options && options.processEnv != null) {\n    processEnv = options.processEnv\n  }\n\n  DotenvModule.populate(processEnv, parsed, options)\n\n  return { parsed }\n}\n\nfunction configDotenv (options) {\n  const dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding = 'utf8'\n  const debug = Boolean(options && options.debug)\n\n  if (options && options.encoding) {\n    encoding = options.encoding\n  } else {\n    if (debug) {\n      _debug('No encoding is specified. UTF-8 is used by default')\n    }\n  }\n\n  let optionPaths = [dotenvPath] // default, look for .env\n  if (options && options.path) {\n    if (!Array.isArray(options.path)) {\n      optionPaths = [_resolveHome(options.path)]\n    } else {\n      optionPaths = [] // reset default\n      for (const filepath of options.path) {\n        optionPaths.push(_resolveHome(filepath))\n      }\n    }\n  }\n\n  // Build the parsed data in a temporary object (because we need to return it).  Once we have the final\n  // parsed data, we will combine it with process.env (or options.processEnv if provided).\n  let lastError\n  const parsedAll = {}\n  for (const path of optionPaths) {\n    try {\n      // Specifying an encoding returns a string instead of a buffer\n      const parsed = DotenvModule.parse(fs.readFileSync(path, { encoding }))\n\n      DotenvModule.populate(parsedAll, parsed, options)\n    } catch (e) {\n      if (debug) {\n        _debug(`Failed to load ${path} ${e.message}`)\n      }\n      lastError = e\n    }\n  }\n\n  let processEnv = process.env\n  if (options && options.processEnv != null) {\n    processEnv = options.processEnv\n  }\n\n  DotenvModule.populate(processEnv, parsedAll, options)\n\n  if (lastError) {\n    return { parsed: parsedAll, error: lastError }\n  } else {\n    return { parsed: parsedAll }\n  }\n}\n\n// Populates process.env from .env file\nfunction config (options) {\n  // fallback to original dotenv if DOTENV_KEY is not set\n  if (_dotenvKey(options).length === 0) {\n    return DotenvModule.configDotenv(options)\n  }\n\n  const vaultPath = _vaultPath(options)\n\n  // dotenvKey exists but .env.vault file does not exist\n  if (!vaultPath) {\n    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`)\n\n    return DotenvModule.configDotenv(options)\n  }\n\n  return DotenvModule._configVault(options)\n}\n\nfunction decrypt (encrypted, keyStr) {\n  const key = Buffer.from(keyStr.slice(-64), 'hex')\n  let ciphertext = Buffer.from(encrypted, 'base64')\n\n  const nonce = ciphertext.subarray(0, 12)\n  const authTag = ciphertext.subarray(-16)\n  ciphertext = ciphertext.subarray(12, -16)\n\n  try {\n    const aesgcm = crypto.createDecipheriv('aes-256-gcm', key, nonce)\n    aesgcm.setAuthTag(authTag)\n    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`\n  } catch (error) {\n    const isRange = error instanceof RangeError\n    const invalidKeyLength = error.message === 'Invalid key length'\n    const decryptionFailed = error.message === 'Unsupported state or unable to authenticate data'\n\n    if (isRange || invalidKeyLength) {\n      const err = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)')\n      err.code = 'INVALID_DOTENV_KEY'\n      throw err\n    } else if (decryptionFailed) {\n      const err = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY')\n      err.code = 'DECRYPTION_FAILED'\n      throw err\n    } else {\n      throw error\n    }\n  }\n}\n\n// Populate process.env with parsed values\nfunction populate (processEnv, parsed, options = {}) {\n  const debug = Boolean(options && options.debug)\n  const override = Boolean(options && options.override)\n\n  if (typeof parsed !== 'object') {\n    const err = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate')\n    err.code = 'OBJECT_REQUIRED'\n    throw err\n  }\n\n  // Set process.env\n  for (const key of Object.keys(parsed)) {\n    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {\n      if (override === true) {\n        processEnv[key] = parsed[key]\n      }\n\n      if (debug) {\n        if (override === true) {\n          _debug(`\"${key}\" is already defined and WAS overwritten`)\n        } else {\n          _debug(`\"${key}\" is already defined and was NOT overwritten`)\n        }\n      }\n    } else {\n      processEnv[key] = parsed[key]\n    }\n  }\n}\n\nconst DotenvModule = {\n  configDotenv,\n  _configVault,\n  _parseVault,\n  config,\n  decrypt,\n  parse,\n  populate\n}\n\nmodule.exports.configDotenv = DotenvModule.configDotenv\nmodule.exports._configVault = DotenvModule._configVault\nmodule.exports._parseVault = DotenvModule._parseVault\nmodule.exports.config = DotenvModule.config\nmodule.exports.decrypt = DotenvModule.decrypt\nmodule.exports.parse = DotenvModule.parse\nmodule.exports.populate = DotenvModule.populate\n\nmodule.exports = DotenvModule\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZG90ZW52L2xpYi9tYWluLmpzIiwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbUJBQU8sQ0FBQyxjQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixXQUFXLG1CQUFPLENBQUMsY0FBSTtBQUN2QixlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0Isb0JBQW9CLG1CQUFPLENBQUMsaUVBQWlCOztBQUU3Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQSx3REFBd0QsV0FBVztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixRQUFRLFVBQVUsUUFBUTtBQUNuRDs7QUFFQTtBQUNBLHlCQUF5QixRQUFRLFVBQVUsUUFBUTtBQUNuRDs7QUFFQTtBQUNBLHlCQUF5QixRQUFRLFdBQVcsUUFBUTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QywwQkFBMEI7QUFDbkU7QUFDQTtBQUNBLHFGQUFxRixnQkFBZ0I7QUFDckc7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLFNBQVM7QUFDbkY7QUFDQTtBQUNBLE1BQU07QUFDTiw4RUFBOEUsYUFBYTtBQUMzRjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxVQUFVOztBQUUxRTtBQUNBLE1BQU07QUFDTjtBQUNBLGlDQUFpQyxNQUFNLEVBQUUsVUFBVTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0osYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsVUFBVTs7QUFFbkY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBMEIsRUFBRSxlQUFlO0FBQ3pELElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixJQUFJO0FBQ3pCLFVBQVU7QUFDVixxQkFBcUIsSUFBSTtBQUN6QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQix1QkFBdUI7O0FBRXZCIiwic291cmNlcyI6WyIvVXNlcnMvdmFtc2l0ZWpjaG93ZGFyeS9Eb2N1bWVudHMvR2l0SHViL0Zvb2RpZUFsZXJ0L25vZGVfbW9kdWxlcy9kb3RlbnYvbGliL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJylcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG5cbmNvbnN0IHZlcnNpb24gPSBwYWNrYWdlSnNvbi52ZXJzaW9uXG5cbmNvbnN0IExJTkUgPSAvKD86XnxeKVxccyooPzpleHBvcnRcXHMrKT8oW1xcdy4tXSspKD86XFxzKj1cXHMqP3w6XFxzKz8pKFxccyonKD86XFxcXCd8W14nXSkqJ3xcXHMqXCIoPzpcXFxcXCJ8W15cIl0pKlwifFxccypgKD86XFxcXGB8W15gXSkqYHxbXiNcXHJcXG5dKyk/XFxzKig/OiMuKik/KD86JHwkKS9tZ1xuXG4vLyBQYXJzZSBzcmMgaW50byBhbiBPYmplY3RcbmZ1bmN0aW9uIHBhcnNlIChzcmMpIHtcbiAgY29uc3Qgb2JqID0ge31cblxuICAvLyBDb252ZXJ0IGJ1ZmZlciB0byBzdHJpbmdcbiAgbGV0IGxpbmVzID0gc3JjLnRvU3RyaW5nKClcblxuICAvLyBDb252ZXJ0IGxpbmUgYnJlYWtzIHRvIHNhbWUgZm9ybWF0XG4gIGxpbmVzID0gbGluZXMucmVwbGFjZSgvXFxyXFxuPy9tZywgJ1xcbicpXG5cbiAgbGV0IG1hdGNoXG4gIHdoaWxlICgobWF0Y2ggPSBMSU5FLmV4ZWMobGluZXMpKSAhPSBudWxsKSB7XG4gICAgY29uc3Qga2V5ID0gbWF0Y2hbMV1cblxuICAgIC8vIERlZmF1bHQgdW5kZWZpbmVkIG9yIG51bGwgdG8gZW1wdHkgc3RyaW5nXG4gICAgbGV0IHZhbHVlID0gKG1hdGNoWzJdIHx8ICcnKVxuXG4gICAgLy8gUmVtb3ZlIHdoaXRlc3BhY2VcbiAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuXG4gICAgLy8gQ2hlY2sgaWYgZG91YmxlIHF1b3RlZFxuICAgIGNvbnN0IG1heWJlUXVvdGUgPSB2YWx1ZVswXVxuXG4gICAgLy8gUmVtb3ZlIHN1cnJvdW5kaW5nIHF1b3Rlc1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXihbJ1wiYF0pKFtcXHNcXFNdKilcXDEkL21nLCAnJDInKVxuXG4gICAgLy8gRXhwYW5kIG5ld2xpbmVzIGlmIGRvdWJsZSBxdW90ZWRcbiAgICBpZiAobWF5YmVRdW90ZSA9PT0gJ1wiJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXHIvZywgJ1xccicpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRvIG9iamVjdFxuICAgIG9ialtrZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gX3BhcnNlVmF1bHQgKG9wdGlvbnMpIHtcbiAgY29uc3QgdmF1bHRQYXRoID0gX3ZhdWx0UGF0aChvcHRpb25zKVxuXG4gIC8vIFBhcnNlIC5lbnYudmF1bHRcbiAgY29uc3QgcmVzdWx0ID0gRG90ZW52TW9kdWxlLmNvbmZpZ0RvdGVudih7IHBhdGg6IHZhdWx0UGF0aCB9KVxuICBpZiAoIXJlc3VsdC5wYXJzZWQpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYE1JU1NJTkdfREFUQTogQ2Fubm90IHBhcnNlICR7dmF1bHRQYXRofSBmb3IgYW4gdW5rbm93biByZWFzb25gKVxuICAgIGVyci5jb2RlID0gJ01JU1NJTkdfREFUQSdcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIGhhbmRsZSBzY2VuYXJpbyBmb3IgY29tbWEgc2VwYXJhdGVkIGtleXMgLSBmb3IgdXNlIHdpdGgga2V5IHJvdGF0aW9uXG4gIC8vIGV4YW1wbGU6IERPVEVOVl9LRVk9XCJkb3RlbnY6Ly86a2V5XzEyMzRAZG90ZW52eC5jb20vdmF1bHQvLmVudi52YXVsdD9lbnZpcm9ubWVudD1wcm9kLGRvdGVudjovLzprZXlfNzg5MEBkb3RlbnZ4LmNvbS92YXVsdC8uZW52LnZhdWx0P2Vudmlyb25tZW50PXByb2RcIlxuICBjb25zdCBrZXlzID0gX2RvdGVudktleShvcHRpb25zKS5zcGxpdCgnLCcpXG4gIGNvbnN0IGxlbmd0aCA9IGtleXMubGVuZ3RoXG5cbiAgbGV0IGRlY3J5cHRlZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCBmdWxsIGtleVxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXS50cmltKClcblxuICAgICAgLy8gR2V0IGluc3RydWN0aW9ucyBmb3IgZGVjcnlwdFxuICAgICAgY29uc3QgYXR0cnMgPSBfaW5zdHJ1Y3Rpb25zKHJlc3VsdCwga2V5KVxuXG4gICAgICAvLyBEZWNyeXB0XG4gICAgICBkZWNyeXB0ZWQgPSBEb3RlbnZNb2R1bGUuZGVjcnlwdChhdHRycy5jaXBoZXJ0ZXh0LCBhdHRycy5rZXkpXG5cbiAgICAgIGJyZWFrXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGxhc3Qga2V5XG4gICAgICBpZiAoaSArIDEgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG4gICAgICAvLyB0cnkgbmV4dCBrZXlcbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZSBkZWNyeXB0ZWQgLmVudiBzdHJpbmdcbiAgcmV0dXJuIERvdGVudk1vZHVsZS5wYXJzZShkZWNyeXB0ZWQpXG59XG5cbmZ1bmN0aW9uIF9sb2cgKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coYFtkb3RlbnZAJHt2ZXJzaW9ufV1bSU5GT10gJHttZXNzYWdlfWApXG59XG5cbmZ1bmN0aW9uIF93YXJuIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKGBbZG90ZW52QCR7dmVyc2lvbn1dW1dBUk5dICR7bWVzc2FnZX1gKVxufVxuXG5mdW5jdGlvbiBfZGVidWcgKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coYFtkb3RlbnZAJHt2ZXJzaW9ufV1bREVCVUddICR7bWVzc2FnZX1gKVxufVxuXG5mdW5jdGlvbiBfZG90ZW52S2V5IChvcHRpb25zKSB7XG4gIC8vIHByaW9yaXRpemUgZGV2ZWxvcGVyIGRpcmVjdGx5IHNldHRpbmcgb3B0aW9ucy5ET1RFTlZfS0VZXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuRE9URU5WX0tFWSAmJiBvcHRpb25zLkRPVEVOVl9LRVkubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBvcHRpb25zLkRPVEVOVl9LRVlcbiAgfVxuXG4gIC8vIHNlY29uZGFyeSBpbmZyYSBhbHJlYWR5IGNvbnRhaW5zIGEgRE9URU5WX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICBpZiAocHJvY2Vzcy5lbnYuRE9URU5WX0tFWSAmJiBwcm9jZXNzLmVudi5ET1RFTlZfS0VZLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuRE9URU5WX0tFWVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gZW1wdHkgc3RyaW5nXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBfaW5zdHJ1Y3Rpb25zIChyZXN1bHQsIGRvdGVudktleSkge1xuICAvLyBQYXJzZSBET1RFTlZfS0VZLiBGb3JtYXQgaXMgYSBVUklcbiAgbGV0IHVyaVxuICB0cnkge1xuICAgIHVyaSA9IG5ldyBVUkwoZG90ZW52S2V5KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlID09PSAnRVJSX0lOVkFMSURfVVJMJykge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdJTlZBTElEX0RPVEVOVl9LRVk6IFdyb25nIGZvcm1hdC4gTXVzdCBiZSBpbiB2YWxpZCB1cmkgZm9ybWF0IGxpa2UgZG90ZW52Oi8vOmtleV8xMjM0QGRvdGVudnguY29tL3ZhdWx0Ly5lbnYudmF1bHQ/ZW52aXJvbm1lbnQ9ZGV2ZWxvcG1lbnQnKVxuICAgICAgZXJyLmNvZGUgPSAnSU5WQUxJRF9ET1RFTlZfS0VZJ1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIC8vIEdldCBkZWNyeXB0IGtleVxuICBjb25zdCBrZXkgPSB1cmkucGFzc3dvcmRcbiAgaWYgKCFrZXkpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0lOVkFMSURfRE9URU5WX0tFWTogTWlzc2luZyBrZXkgcGFydCcpXG4gICAgZXJyLmNvZGUgPSAnSU5WQUxJRF9ET1RFTlZfS0VZJ1xuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gR2V0IGVudmlyb25tZW50XG4gIGNvbnN0IGVudmlyb25tZW50ID0gdXJpLnNlYXJjaFBhcmFtcy5nZXQoJ2Vudmlyb25tZW50JylcbiAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSU5WQUxJRF9ET1RFTlZfS0VZOiBNaXNzaW5nIGVudmlyb25tZW50IHBhcnQnKVxuICAgIGVyci5jb2RlID0gJ0lOVkFMSURfRE9URU5WX0tFWSdcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIEdldCBjaXBoZXJ0ZXh0IHBheWxvYWRcbiAgY29uc3QgZW52aXJvbm1lbnRLZXkgPSBgRE9URU5WX1ZBVUxUXyR7ZW52aXJvbm1lbnQudG9VcHBlckNhc2UoKX1gXG4gIGNvbnN0IGNpcGhlcnRleHQgPSByZXN1bHQucGFyc2VkW2Vudmlyb25tZW50S2V5XSAvLyBET1RFTlZfVkFVTFRfUFJPRFVDVElPTlxuICBpZiAoIWNpcGhlcnRleHQpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYE5PVF9GT1VORF9ET1RFTlZfRU5WSVJPTk1FTlQ6IENhbm5vdCBsb2NhdGUgZW52aXJvbm1lbnQgJHtlbnZpcm9ubWVudEtleX0gaW4geW91ciAuZW52LnZhdWx0IGZpbGUuYClcbiAgICBlcnIuY29kZSA9ICdOT1RfRk9VTkRfRE9URU5WX0VOVklST05NRU5UJ1xuICAgIHRocm93IGVyclxuICB9XG5cbiAgcmV0dXJuIHsgY2lwaGVydGV4dCwga2V5IH1cbn1cblxuZnVuY3Rpb24gX3ZhdWx0UGF0aCAob3B0aW9ucykge1xuICBsZXQgcG9zc2libGVWYXVsdFBhdGggPSBudWxsXG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wYXRoICYmIG9wdGlvbnMucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5wYXRoKSkge1xuICAgICAgZm9yIChjb25zdCBmaWxlcGF0aCBvZiBvcHRpb25zLnBhdGgpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZXBhdGgpKSB7XG4gICAgICAgICAgcG9zc2libGVWYXVsdFBhdGggPSBmaWxlcGF0aC5lbmRzV2l0aCgnLnZhdWx0JykgPyBmaWxlcGF0aCA6IGAke2ZpbGVwYXRofS52YXVsdGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3NzaWJsZVZhdWx0UGF0aCA9IG9wdGlvbnMucGF0aC5lbmRzV2l0aCgnLnZhdWx0JykgPyBvcHRpb25zLnBhdGggOiBgJHtvcHRpb25zLnBhdGh9LnZhdWx0YFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwb3NzaWJsZVZhdWx0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLmVudi52YXVsdCcpXG4gIH1cblxuICBpZiAoZnMuZXhpc3RzU3luYyhwb3NzaWJsZVZhdWx0UGF0aCkpIHtcbiAgICByZXR1cm4gcG9zc2libGVWYXVsdFBhdGhcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIF9yZXNvbHZlSG9tZSAoZW52UGF0aCkge1xuICByZXR1cm4gZW52UGF0aFswXSA9PT0gJ34nID8gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgZW52UGF0aC5zbGljZSgxKSkgOiBlbnZQYXRoXG59XG5cbmZ1bmN0aW9uIF9jb25maWdWYXVsdCAob3B0aW9ucykge1xuICBfbG9nKCdMb2FkaW5nIGVudiBmcm9tIGVuY3J5cHRlZCAuZW52LnZhdWx0JylcblxuICBjb25zdCBwYXJzZWQgPSBEb3RlbnZNb2R1bGUuX3BhcnNlVmF1bHQob3B0aW9ucylcblxuICBsZXQgcHJvY2Vzc0VudiA9IHByb2Nlc3MuZW52XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvY2Vzc0VudiAhPSBudWxsKSB7XG4gICAgcHJvY2Vzc0VudiA9IG9wdGlvbnMucHJvY2Vzc0VudlxuICB9XG5cbiAgRG90ZW52TW9kdWxlLnBvcHVsYXRlKHByb2Nlc3NFbnYsIHBhcnNlZCwgb3B0aW9ucylcblxuICByZXR1cm4geyBwYXJzZWQgfVxufVxuXG5mdW5jdGlvbiBjb25maWdEb3RlbnYgKG9wdGlvbnMpIHtcbiAgY29uc3QgZG90ZW52UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLmVudicpXG4gIGxldCBlbmNvZGluZyA9ICd1dGY4J1xuICBjb25zdCBkZWJ1ZyA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcpIHtcbiAgICBlbmNvZGluZyA9IG9wdGlvbnMuZW5jb2RpbmdcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIF9kZWJ1ZygnTm8gZW5jb2RpbmcgaXMgc3BlY2lmaWVkLiBVVEYtOCBpcyB1c2VkIGJ5IGRlZmF1bHQnKVxuICAgIH1cbiAgfVxuXG4gIGxldCBvcHRpb25QYXRocyA9IFtkb3RlbnZQYXRoXSAvLyBkZWZhdWx0LCBsb29rIGZvciAuZW52XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucGF0aCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zLnBhdGgpKSB7XG4gICAgICBvcHRpb25QYXRocyA9IFtfcmVzb2x2ZUhvbWUob3B0aW9ucy5wYXRoKV1cbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uUGF0aHMgPSBbXSAvLyByZXNldCBkZWZhdWx0XG4gICAgICBmb3IgKGNvbnN0IGZpbGVwYXRoIG9mIG9wdGlvbnMucGF0aCkge1xuICAgICAgICBvcHRpb25QYXRocy5wdXNoKF9yZXNvbHZlSG9tZShmaWxlcGF0aCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIHBhcnNlZCBkYXRhIGluIGEgdGVtcG9yYXJ5IG9iamVjdCAoYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBpdCkuICBPbmNlIHdlIGhhdmUgdGhlIGZpbmFsXG4gIC8vIHBhcnNlZCBkYXRhLCB3ZSB3aWxsIGNvbWJpbmUgaXQgd2l0aCBwcm9jZXNzLmVudiAob3Igb3B0aW9ucy5wcm9jZXNzRW52IGlmIHByb3ZpZGVkKS5cbiAgbGV0IGxhc3RFcnJvclxuICBjb25zdCBwYXJzZWRBbGwgPSB7fVxuICBmb3IgKGNvbnN0IHBhdGggb2Ygb3B0aW9uUGF0aHMpIHtcbiAgICB0cnkge1xuICAgICAgLy8gU3BlY2lmeWluZyBhbiBlbmNvZGluZyByZXR1cm5zIGEgc3RyaW5nIGluc3RlYWQgb2YgYSBidWZmZXJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IERvdGVudk1vZHVsZS5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZyB9KSlcblxuICAgICAgRG90ZW52TW9kdWxlLnBvcHVsYXRlKHBhcnNlZEFsbCwgcGFyc2VkLCBvcHRpb25zKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBfZGVidWcoYEZhaWxlZCB0byBsb2FkICR7cGF0aH0gJHtlLm1lc3NhZ2V9YClcbiAgICAgIH1cbiAgICAgIGxhc3RFcnJvciA9IGVcbiAgICB9XG4gIH1cblxuICBsZXQgcHJvY2Vzc0VudiA9IHByb2Nlc3MuZW52XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJvY2Vzc0VudiAhPSBudWxsKSB7XG4gICAgcHJvY2Vzc0VudiA9IG9wdGlvbnMucHJvY2Vzc0VudlxuICB9XG5cbiAgRG90ZW52TW9kdWxlLnBvcHVsYXRlKHByb2Nlc3NFbnYsIHBhcnNlZEFsbCwgb3B0aW9ucylcblxuICBpZiAobGFzdEVycm9yKSB7XG4gICAgcmV0dXJuIHsgcGFyc2VkOiBwYXJzZWRBbGwsIGVycm9yOiBsYXN0RXJyb3IgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHBhcnNlZDogcGFyc2VkQWxsIH1cbiAgfVxufVxuXG4vLyBQb3B1bGF0ZXMgcHJvY2Vzcy5lbnYgZnJvbSAuZW52IGZpbGVcbmZ1bmN0aW9uIGNvbmZpZyAob3B0aW9ucykge1xuICAvLyBmYWxsYmFjayB0byBvcmlnaW5hbCBkb3RlbnYgaWYgRE9URU5WX0tFWSBpcyBub3Qgc2V0XG4gIGlmIChfZG90ZW52S2V5KG9wdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBEb3RlbnZNb2R1bGUuY29uZmlnRG90ZW52KG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCB2YXVsdFBhdGggPSBfdmF1bHRQYXRoKG9wdGlvbnMpXG5cbiAgLy8gZG90ZW52S2V5IGV4aXN0cyBidXQgLmVudi52YXVsdCBmaWxlIGRvZXMgbm90IGV4aXN0XG4gIGlmICghdmF1bHRQYXRoKSB7XG4gICAgX3dhcm4oYFlvdSBzZXQgRE9URU5WX0tFWSBidXQgeW91IGFyZSBtaXNzaW5nIGEgLmVudi52YXVsdCBmaWxlIGF0ICR7dmF1bHRQYXRofS4gRGlkIHlvdSBmb3JnZXQgdG8gYnVpbGQgaXQ/YClcblxuICAgIHJldHVybiBEb3RlbnZNb2R1bGUuY29uZmlnRG90ZW52KG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gRG90ZW52TW9kdWxlLl9jb25maWdWYXVsdChvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBkZWNyeXB0IChlbmNyeXB0ZWQsIGtleVN0cikge1xuICBjb25zdCBrZXkgPSBCdWZmZXIuZnJvbShrZXlTdHIuc2xpY2UoLTY0KSwgJ2hleCcpXG4gIGxldCBjaXBoZXJ0ZXh0ID0gQnVmZmVyLmZyb20oZW5jcnlwdGVkLCAnYmFzZTY0JylcblxuICBjb25zdCBub25jZSA9IGNpcGhlcnRleHQuc3ViYXJyYXkoMCwgMTIpXG4gIGNvbnN0IGF1dGhUYWcgPSBjaXBoZXJ0ZXh0LnN1YmFycmF5KC0xNilcbiAgY2lwaGVydGV4dCA9IGNpcGhlcnRleHQuc3ViYXJyYXkoMTIsIC0xNilcblxuICB0cnkge1xuICAgIGNvbnN0IGFlc2djbSA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KCdhZXMtMjU2LWdjbScsIGtleSwgbm9uY2UpXG4gICAgYWVzZ2NtLnNldEF1dGhUYWcoYXV0aFRhZylcbiAgICByZXR1cm4gYCR7YWVzZ2NtLnVwZGF0ZShjaXBoZXJ0ZXh0KX0ke2Flc2djbS5maW5hbCgpfWBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBpc1JhbmdlID0gZXJyb3IgaW5zdGFuY2VvZiBSYW5nZUVycm9yXG4gICAgY29uc3QgaW52YWxpZEtleUxlbmd0aCA9IGVycm9yLm1lc3NhZ2UgPT09ICdJbnZhbGlkIGtleSBsZW5ndGgnXG4gICAgY29uc3QgZGVjcnlwdGlvbkZhaWxlZCA9IGVycm9yLm1lc3NhZ2UgPT09ICdVbnN1cHBvcnRlZCBzdGF0ZSBvciB1bmFibGUgdG8gYXV0aGVudGljYXRlIGRhdGEnXG5cbiAgICBpZiAoaXNSYW5nZSB8fCBpbnZhbGlkS2V5TGVuZ3RoKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0lOVkFMSURfRE9URU5WX0tFWTogSXQgbXVzdCBiZSA2NCBjaGFyYWN0ZXJzIGxvbmcgKG9yIG1vcmUpJylcbiAgICAgIGVyci5jb2RlID0gJ0lOVkFMSURfRE9URU5WX0tFWSdcbiAgICAgIHRocm93IGVyclxuICAgIH0gZWxzZSBpZiAoZGVjcnlwdGlvbkZhaWxlZCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdERUNSWVBUSU9OX0ZBSUxFRDogUGxlYXNlIGNoZWNrIHlvdXIgRE9URU5WX0tFWScpXG4gICAgICBlcnIuY29kZSA9ICdERUNSWVBUSU9OX0ZBSUxFRCdcbiAgICAgIHRocm93IGVyclxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxufVxuXG4vLyBQb3B1bGF0ZSBwcm9jZXNzLmVudiB3aXRoIHBhcnNlZCB2YWx1ZXNcbmZ1bmN0aW9uIHBvcHVsYXRlIChwcm9jZXNzRW52LCBwYXJzZWQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBkZWJ1ZyA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKVxuICBjb25zdCBvdmVycmlkZSA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLm92ZXJyaWRlKVxuXG4gIGlmICh0eXBlb2YgcGFyc2VkICE9PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignT0JKRUNUX1JFUVVJUkVEOiBQbGVhc2UgY2hlY2sgdGhlIHByb2Nlc3NFbnYgYXJndW1lbnQgYmVpbmcgcGFzc2VkIHRvIHBvcHVsYXRlJylcbiAgICBlcnIuY29kZSA9ICdPQkpFQ1RfUkVRVUlSRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBTZXQgcHJvY2Vzcy5lbnZcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyc2VkKSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvY2Vzc0Vudiwga2V5KSkge1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSB7XG4gICAgICAgIHByb2Nlc3NFbnZba2V5XSA9IHBhcnNlZFtrZXldXG4gICAgICB9XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBpZiAob3ZlcnJpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICBfZGVidWcoYFwiJHtrZXl9XCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFuZCBXQVMgb3ZlcndyaXR0ZW5gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9kZWJ1ZyhgXCIke2tleX1cIiBpcyBhbHJlYWR5IGRlZmluZWQgYW5kIHdhcyBOT1Qgb3ZlcndyaXR0ZW5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3NFbnZba2V5XSA9IHBhcnNlZFtrZXldXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IERvdGVudk1vZHVsZSA9IHtcbiAgY29uZmlnRG90ZW52LFxuICBfY29uZmlnVmF1bHQsXG4gIF9wYXJzZVZhdWx0LFxuICBjb25maWcsXG4gIGRlY3J5cHQsXG4gIHBhcnNlLFxuICBwb3B1bGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cy5jb25maWdEb3RlbnYgPSBEb3RlbnZNb2R1bGUuY29uZmlnRG90ZW52XG5tb2R1bGUuZXhwb3J0cy5fY29uZmlnVmF1bHQgPSBEb3RlbnZNb2R1bGUuX2NvbmZpZ1ZhdWx0XG5tb2R1bGUuZXhwb3J0cy5fcGFyc2VWYXVsdCA9IERvdGVudk1vZHVsZS5fcGFyc2VWYXVsdFxubW9kdWxlLmV4cG9ydHMuY29uZmlnID0gRG90ZW52TW9kdWxlLmNvbmZpZ1xubW9kdWxlLmV4cG9ydHMuZGVjcnlwdCA9IERvdGVudk1vZHVsZS5kZWNyeXB0XG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IERvdGVudk1vZHVsZS5wYXJzZVxubW9kdWxlLmV4cG9ydHMucG9wdWxhdGUgPSBEb3RlbnZNb2R1bGUucG9wdWxhdGVcblxubW9kdWxlLmV4cG9ydHMgPSBEb3RlbnZNb2R1bGVcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dotenv/lib/main.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/dotenv/package.json":
/*!******************************************!*\
  !*** ./node_modules/dotenv/package.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"dotenv","version":"16.4.7","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","pretest":"npm run lint && npm run dts-check","test":"tap run --allow-empty-coverage --disable-coverage --timeout=60000","test:coverage":"tap run --show-full-coverage --timeout=60000 --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^18.11.3","decache":"^4.6.2","sinon":"^14.0.1","standard":"^17.0.0","standard-version":"^9.5.0","tap":"^19.2.0","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}');

/***/ })

};
;