import { useState } from 'react'
import './App.css'

function App() {
  const [css, setCss] = useState<string>("");
  
  function minify() {
    let newCss = css;
    newCss = newCss.replace(/\/\*[\s\S]*?\*\//g, "");
    newCss = newCss.replace(/\s*([{}:;,])\s*/g, "$1");
    newCss = newCss.replace(/\s+/g, " ");
    newCss = newCss.replace(/;}/g, '}');
    newCss = newCss.trim();
    setCss(newCss);
  }

  return (
    <main>
      <h4 className="main__text">Por que "minificar" CSS?</h4>
      <p>oii</p>
      <div className="main__container">
        <button type='button' onClick={() => console.log(css)}>teste</button>
        <form className="main__form">
          <textarea onChange={(e) => setCss(e.target.value)} value={css} className="main__textarea" rows={25} cols={50}></textarea>
        </form>
        <div className="main__div"></div>
      </div>
      <button className="main__button--reset" type="reset">Limpar</button>
      <button className="main__button--submit" type="button" onClick={minify}>Minimizar</button>
    </main>
  )
}

export default App
