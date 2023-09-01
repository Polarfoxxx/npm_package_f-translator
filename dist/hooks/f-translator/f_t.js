"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var F_t = function (sign) {
    var f_translator_config = sessionStorage.getItem("f_translator_config");
    var f_translator_config_DATA = JSON.parse(f_translator_config);
    var def_language = f_translator_config_DATA.default_language.sign;
    var selectedLang = sessionStorage.getItem("selectedLang") || def_language;
    return f_translator_config_DATA.f_language[selectedLang][sign];
};
exports.default = F_t;
//# sourceMappingURL=f_t.js.map