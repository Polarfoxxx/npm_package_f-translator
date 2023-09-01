"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Use_F_translator(f_translator_config) {
    sessionStorage.setItem("f_translator_config", JSON.stringify(f_translator_config));
    var _a = react_1.default.useState(false), render = _a[0], setRender = _a[1];
    var f_switch = function (language) {
        setRender(!render);
        sessionStorage.setItem("selectedLang", language);
    };
    return {
        f_switch: f_switch
    };
}
exports.default = Use_F_translator;
//# sourceMappingURL=f-translator.js.map