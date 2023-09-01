# Foxxy_input_value
---
__Názov balíčka:__ f_translator  
__Popis:__ Prekladac pre vyvoj frontend projektov
__Inštalácia:__ [npm i f_translator](https://www.npmjs.com/package/f_translator)  
__Licencia:__ MIT  
__Email:__ suchovsky.michal@gmail.com  

---
## Priklad pouzitia:   

## Krok 1:   
### V tvojom projekte vytvor subor: __f_translator_config.ts__    

```javascript
 export const f_translator_config = {
    f_language: {
        sk: {
            nadpis: "Moj nadpis",
            podpis: "Slovakia"
        },
        en: {
            nadpis: "My caption",
            podpis: "En"
        },
        esp: {
            nadpis: "Mi título",
            podpis: "Spanish"
        },
    },
    default_language: {
        name: "Slovakia",
        sign: "sk"
    },
}

```   
## Krok 2:      
### Import kniznice a __f_translator_config.ts__ do pozadovaneho suboru   

```javascript
import { f_translator_config } from '...';
import { Use_F_translator } from '...';
import { F_t } from '...';

function App() {
  const { f_switch } = Use_F_translator(f_translator_config)

  return (
    <div className="App">
      <button onClick={() => f_switch("sk")}>sk</button>
      <button onClick={() => f_switch("en")}>en</button>
      <button onClick={() => f_switch("esp")}>esp</button>

      <div>
        <h1>{F_t("nadpis")}</h1>
      </div>
      <div>
        <h1>{F_t("podpis")}</h1>
      </div>
    </div>
  )
}
export default App

```
