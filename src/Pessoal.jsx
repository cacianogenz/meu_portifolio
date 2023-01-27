import './App.css';
import imgPerfil from './img/perfil_l.png';
import imgFoto from './img/pess_foto.png';
import imgDesenho from './img/pess_desenho.png';
import imgGaucho from './img/pess_gaucho.png';


const Pessoal = () => {

    return (
        <div className='App bg-l'>
            <div className='cabecalho bg-b'></div>
            <section className="section-1 App-header bg-l" >
                <img src={imgPerfil} className="img-proj expand" alt="perfil" />
                <span className='text-cursive'>Quem sou eu?</span>
                <div className='mt10 conteudo'>Apreciador do <span className='text-blue-l bold'>raciocínio lógico</span>,
                 do poder que temos de <span className='text-red-l bold'>criar coisas</span>,<br/>
                  um apreciador da arte, um aspirante a poeta, um <span className='text-red-l'> fandangueiro</span>
                  , um <span className='text-blue-l'> roqueiro</span>,
                   amante da vida,<br/> alguém que procura entender as pessoas e o mundo,
                    e não ter opinião formada sobre tudo.
                 
                </div>
            </section>
            <section className="section-2 App-header bg-l" >
                <span className='text-cursive'>O que eu amo?</span>
                <div className='pess-colun-itens hidescroll'>
                        <div className='lines p20'>
                            <span className='title-proj bold'>Fotografia</span>
                            <img  className="img-foto slide-rotate mt10" alt="foto" /><br />
                            <span className='title-proj'>Paixão descoberta por conhecer o mundo através dos 
                            <span className='text-blue-l'> detalhes</span> e um novo ponto de vista. 
                            </span>
                        </div>
                        <div className='lines p20'>
                            <span className='title-proj bold'>Desenho</span>
                            <img className="img-desenho slide-rotate mt10" alt="desenho" /><br />
                            <span className='title-proj'>Desde a infância, com 
                            <span className='text-red-l'> influência</span> e incentivo dos pais e professores. 
                            </span>
                        </div>
                        <div className='lines p20'>
                            <span className='title-proj bold'>Cultura Gaúcha</span>
                            <img  className="img-gaucho slide-rotate mt10" alt="gaucho" /><br />
                            <span className='title-proj'>Se criou no campo, e fortaleceu suas raízes através da 
                            <span className='text-blue-l'> dança</span> tradicionalista.
                            </span>
                        </div>
                        
                    </div>

            </section>


        </div>
    )

}
export default Pessoal;