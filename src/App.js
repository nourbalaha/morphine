import React, {useState} from 'react';
import './App.scss';

import jisho from "./assets/jisho"

function App() {
  const [word,setWord] = useState(jisho[0])
  const [search,setSearch] = useState("")

  console.log(search==="")
  return (
    <div className="app">
      <header className="app-header">
        <h1>القاموس الطبي</h1>
      </header>
      <main className="main">
        <div className="side-bar">
          <div className="search-bar">
            <input className="search-input" type="text" placeholder="بحث" value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <div className="word-list">
          {
            search===""
            ?
            jisho
            .filter(word=>word.Arabic)
            .map(word=><span className="word" onClick={()=>setWord(word)}>{word.Arabic}</span>)
            :
            jisho
            .filter(word=>word.Arabic)
            .filter(word=>word.Arabic.includes(search))
            .map(word=><span className="word" onClick={()=>setWord(word)}>{word.Arabic}</span>)
          }
          </div>
        </div>
        <div className="result-page">
          <h3>العربية</h3>
          <p>{word.Arabic}</p>
          <hr />
          <h3>日本語</h3>
          <p>{word.Japanese}</p>
          <p>{word.Furigana}</p>
          <hr />
          <h3>English</h3>
          <p>{word.English}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
