
const F_t = (sign: string): string => {

    const f_translator_config = sessionStorage.getItem("f_translator_config");
    const f_translator_config_DATA = JSON.parse(f_translator_config!);

    const def_language = f_translator_config_DATA.default_language.sign;
    const selectedLang = sessionStorage.getItem("selectedLang") || def_language;

    return f_translator_config_DATA.f_language[selectedLang][sign];
};

export default F_t