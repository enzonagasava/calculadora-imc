import { useState } from 'react';
import Tabela from "./components/Calculadora";
import Section from "./components/Section";
import './App.css';

function App() {
  const [classificacao, setClassificacao] = useState(null);

  return (
    <main>
      <div className="container">
        <h1>Calculadora IMC</h1>
        <div className="containerCalculadora">
          <Tabela onClassificacaoChange={setClassificacao} />
          <Section classificacao={classificacao} />
        </div>
      </div>
    </main>
  )
}

export default App;
