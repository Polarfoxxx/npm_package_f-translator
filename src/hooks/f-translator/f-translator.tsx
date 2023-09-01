import React from "react";
import { Type_returnFunctionPackage, Type_TranslatorConfig } from "../types/types";

function Use_F_translator(f_translator_config: Type_TranslatorConfig): Type_returnFunctionPackage {
    sessionStorage.setItem("f_translator_config", JSON.stringify(f_translator_config));
  
    const [render, setRender] = React.useState<boolean>(false);
  
    const f_switch = (language: string) => {
        setRender(!render);
        sessionStorage.setItem("selectedLang", language);
    };

    return {
        f_switch
    };
}

export default Use_F_translator;
