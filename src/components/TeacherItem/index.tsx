import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
function TeacherItem() {
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/64752639?s=460&u=2c45d368dba2a21495d4d99d4d806100da3c5d23&v=4" alt="Profile"/>
                    <div>
                      <strong>Rossano Dala Rosa</strong>  
                      <span>Odonto</span>
                    </div>
                </header>

                <p>
                Seu planejamento deve ser escrito mesmo, lá, no cantinho da folha. <br></br>Escreva seu posicionamento e o resumo dos argumentos selecionados por você e, finalmente, a sugestão de ação para a conclusão. Dessa forma, você não se perde ao executar sua redação, pois você fez um planejamento. Fica a dica!! E é preciosa, viu!!! As notas dos alunos que fazem esse pequeno  planejamento aumenta muito
                </p>
                
                <footer>
                    <p>
                        Preço/hora 
                        <strong>R$150,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        entrar em contato
                    </button>
                </footer>

              </article>  
    );
}

export default TeacherItem;