import styles from './Tabela.module.css'
import React, { useState } from 'react';

const Tabela = () => {
    const [imc, setImc] = useState(null);
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);

    function resultado(){

        const resultadoImc = peso / (altura * altura);
        setImc(resultadoImc.toFixed(2));

        
    }

    const mensagemIMC = () => {
        if (imc < 18.5) {
            return 'Você está abaixo do peso ideal.';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Seu peso está normal.';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Você está com sobrepeso.';
        } else if (imc >= 30) {
            return 'Você está com obesidade.';
        }
        return null;
    };
    

    function Resetar(){ 
        setAltura('');
        setPeso('');
        setImc('');
    }


    return(
        <div className={styles.container}>
            <h1>Calculadora IMC</h1>
            <div className={styles.containerCalculadora}>
                <label>Altura:</label>
                <input placeholder='ex: 1.70' id='altura' type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                <label>Peso:</label>
                <input placeholder='ex: 70' id='peso' type="number" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                <button onClick={resultado}>Calcular</button>
                <button onClick={Resetar}>Resetar</button>
                <div className={styles.containerResultado}>
                <p>Resultado: {imc}</p>
                </div>
                  {/* Se o imc for igual a null ou 0, exibe a mensagem */}
                {imc === null || imc === 0 ? (
                    <p>O Campo está vazio, preencha para calcla o seu IMC</p> 
                ) : ( <p className={styles.mensagemIMC}>{mensagemIMC()}</p> )}
                </div>
        </div>
    )
}

export default Tabela;