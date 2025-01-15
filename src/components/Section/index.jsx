import section from './Section.module.css';

const Section = () => {
    return (
        <section>
            <div className={section.container}>
                    <h1>O que é imc?</h1>
                <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

        O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
                <h3>Veja a tabela completa:</h3>
                <table>
                    <thead>
                        <tr className={section.borderBottom}>
                            <th>IMC</th>
                            <th>Classificação</th>
                            <th>Obesidade (grau)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={section.borderBottom}>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        <tr className={section.borderBottom}>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>                
                        <tr className={section.borderBottom}>
                            <td>Entre 25,0 e 29,9</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>                
                        <tr className={section.borderBottom}>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>                
                        <tr>
                            <td>Maior que 40,0	</td>
                            <td>Obesidade Grave</td>
                            <td>III</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </section>
    );

}

export default Section;