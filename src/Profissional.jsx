import prjPlayCodeDog from './img/proj_playcodedog.png';
import imgEstagioXC from './img/proj_estagio_xc.png';
import imgUniversal from './img/proj_universalplasticos.png';
import imgAPI from './img/api512.png';
import imgLinkedin from './img/linkedin.svg';
import imgMail from './img/mail.svg';
import imgCopyR from './img/copyright.svg';
import imgSeta from './img/setadireita.svg';
import tEsquerda from './img/icons/caret-left.svg';
import React from 'react'
import './App.css';


const Profissional = () => {
    function getMailUi() {
        if (window.innerWidth > 420) {
            return <span>contato.caciano.genz@gmail.com</span>
        }
        return <img src={imgMail} className='img-buttom p5' />
    }
    function getSince() {
        const d = new Date();
        let ccDesc = 'copyright';
        if (window.innerWidth < 420) {
            ccDesc = '';
        }
        return <span className='ml10'>{ccDesc}  22 - {d.getFullYear().toString().substring(2, 4)}</span>
    }

    return (
        <>
            <div className="App"  >
                {/* {getEspecialUi()} */}
                {/* onScroll={onScroll()} */}
                {/* bac bac k */}
                <section id='section-1' className="App-header section-1" >

                    <div className='cabecalho'></div>

                    <img className="App-Perfil slide-rotate" alt="perfil" />
                    <span className='text-cursive'>Caciano Genz</span>
                    <div className='mt10 conteudo'>Desenvolvedor <span className=''>mobile</span>, web e <span className=''>desktop</span>
                        <br />que acredita que <span className='text-red-l'>desafios</span> geram novos <span className='text-blue-l'>aprendizados</span>
                    </div>
                </section>


                <section id='section-2' className="App-header section-2" >
                    <div className='comandos lines p20'>
                        <div className='pess-colun-itens'>
                            <div className='bt-nano'>k</div>
                            <div className='bt-nano'>
                                <img src={tEsquerda} className="rotate90" />
                            </div>
                            <div className='bt-nano'>o</div>
                        </div>
                        <div className='pess-colun-itens'>
                            <div className='bt-nano'>
                                <img src={tEsquerda} className="" />
                            </div>
                            <div className='bt-nano'>
                                <img src={tEsquerda} className="rotate270" />
                            </div>
                            <div className='bt-nano'>
                                <img src={tEsquerda} className="rotate180" />
                            </div>
                        </div>
                        <div className='text-nano pess-colun-itens'>
                            Get over here!<br /> MK4
                        </div>
                    </div>
                    <div className='text-pixel '>Quem sou eu?</div>
                    <div className='mt10 conteudo'>Desenvolvedor Junior full-stack.
                        No decorrer de seu crescimento enfrentou <span className='text-red-l'>desafios</span> em empresas
                        e como profissional autônomo, onde trabalhou identidade empresarial, visão sistêmica,
                        e compreensão de problemas cotidianos organizacionais.
                        Sempre em busca do continuo <span className='text-blue-l'>aprendizado</span> pessoal e profissional.</div>
                </section>

                <section className="App-header">
                    <div >
                        <span className='text-pixel'>Trabalhos</span>
                    </div>
                    <div className='colun-itens hidescroll'>
                        <div className='lines p20'>
                            <span className='title-proj bold'>2016</span>
                            <img src={imgEstagioXC} className="img-proj expand mt10" alt="estagio desenvolvimento mobile" /><br />
                            <span className='title-proj'>Estágio em desenvolvimento mobile, Visualização e pesquisa de informações ERP.
                            </span>
                        </div>
                        <div className='lines p20'>
                            <span className='title-proj bold'>2017</span>
                            <img src={prjPlayCodeDog} className="img-proj expand mt10" alt="play code dog" /><br />
                            <span className='title-proj'>Artigo: <a className='link text-blue-l' target="_blank" rel="noopener"
                                href='https://sol.sbc.org.br/index.php/wie/article/view/16246'>
                                Iniciação Lúdica com Play Code Dog</a>
                            </span>
                        </div>
                        <div className='lines p20'>
                            <span className='title-proj bold'>2018</span>
                            <img src={imgUniversal} className="img-proj expand mt10" alt="play code dog" /><br />
                            <span className='title-proj'>Desenvolvimento do site: Universal Plasticos e Comunicação visual
                            </span>
                        </div>
                        <div className='lines p20'>
                            <span className='title-proj bold'>2019 - {new Date().getFullYear().toString().substring(0, 4)}</span>
                            <img src={imgAPI} className="img-proj expand mt10" alt="play code dog" /><br />
                            <span className='title-proj'>Desenvolvimento em sistemas ERP:
                                integração de serviços em desktop, construção de APIs e desenvolvimento web
                            </span>
                        </div>


                    </div>

                </section>

                <section className='rodape'>
                    <div className='rodape-esquerda'>
                        <a className='text-grey link ' target="_blank" rel="noopener" href='https://www.linkedin.com/in/caciano-genz-b56761a9'>
                            <img src={imgLinkedin} alt="in" className='img-buttom ' />
                        </a>
                        <a className='text-grey link ml20' target="_blank" rel="noopener" href='mailto:contato.caciano.genz@gmail.com' >
                            {getMailUi()}
                        </a>
                    </div>

                    <div className='text-grey rodape-direita'>

                        <img src={imgCopyR} alt="in" className='img-buttom ' />
                        {getSince()}</div>
                    {/* <div className='rodape-fim' /> */}
                </section>

            </div>
        </>
    );
}
export default Profissional;