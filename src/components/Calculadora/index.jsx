import styles from './Tabela.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Tabela = ({ onClassificacaoChange }) => {
    const [imc, setImc] = useState(null);
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleAlturaChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, '');
        if (value.length > 1) {
            value = value.substring(0, 1) + '.' + value.substring(1, 3);
        }
        setAltura(value);
    };

    const handlePesoChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, '');
        setPeso(value);
    };

    function resultado() {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);
        
        if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
            alert("Por favor, preencha valores válidos para altura e peso");
            return;
        }
        
        const resultadoImc = pesoNum / (alturaNum * alturaNum);
        setImc(resultadoImc.toFixed(2));
        onClassificacaoChange(getClassificacao(resultadoImc));
    }

    const getClassificacao = (imc) => {
        console.log(imc)
        if (imc < 18.5) return 'Magreza';
        if (imc < 24.9) return 'Normal';
        if (imc < 29.9) return 'Sobrepeso';
        if (imc < 39.9) return 'Obesidade';
        return 'Obesidade Grave';
    };

    function Resetar() { 
        setAltura('');
        setPeso('');
        setImc(null);
        onClassificacaoChange(null);
    }

    return(
        <div className={styles.container}>
            <h2>Calculadora IMC</h2>
            <div className={styles.containerCalculadora}>
                <label>Altura (m):</label>
                <input 
                    placeholder='ex: 1.70' 
                    id='altura' 
                    type="text" 
                    value={altura} 
                    onChange={handleAlturaChange}
                    maxLength={4}
                />
                
                <label>Peso (kg):</label>
                <input 
                    placeholder='ex: 70' 
                    id='peso' 
                    type="text" 
                    value={peso} 
                    onChange={handlePesoChange}
                />
                
                <button onClick={resultado}>Calcular</button>
                <button onClick={Resetar}>Resetar</button>
                
                <div className={styles.containerResultado}>
                    <p>Resultado: {imc || '--'}</p>
                </div>
                
                {!imc ? (
                    <p>Preencha os campos para calcular seu IMC</p> 
                ) : ( 
                    <p className={styles.mensagemIMC}>{getClassificacao(imc)}</p> 
                )}
            </div>
        </div>
    )
}

Tabela.propTypes = {
    onClassificacaoChange: PropTypes.func.isRequired,
};

export default Tabela;