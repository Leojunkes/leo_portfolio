import React from 'react';
import './portfolio.css';
import leoFoto from '../imagens/leoFoto.png';
import LeoMePortfolio from '../imagens/imgPortfolioMe.png';
import leoNihongo from '../imagens/tela_nihongo.png';
import leoNiho1 from '../imagens/tela_nihongo3.png';
import leoniho2 from '../imagens/tela_nihongo4.png';
import conversorLeo from '../imagens/conversorLeo.png';


export default function Portfolio(){
    return(
        <>
        <nav id="navbarLeo" className="navbar navbar-expand-md navbar-light ">
            <div className="container-fluid">
                <a id="navText" className="navbar-brand" href="#">LeoJunkes</a>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#leoPortfolio" 
                aria-controls="leoPortifolio" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="leoPortfolio">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a id="navText" className="nav-link" href="#projetosText">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <a id="navText" className="nav-link" href="#sobremimText">Sobre mim</a>
                    </li>
                   
                    <li className="nav-item">
                        <a id="navText" className="nav-link" href="#gmailText">Contato</a>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
        <div className="container-fluid" id="leoDescricao">
        <div  className ="col-lg-6 col-md-8 mx-auto">
            <img className="leoImg" src={leoFoto}/>
        <h1 id="leoTextdescricao" className ="fw-light">Leonardo Junkes</h1>
        <p id="leoTextdescricao" className="lead ">Estudante de Programação (React-Js e React-Native) - Motorista de App.</p>
        <p>
          <a href="#gmailText" className="btn btn-dark my-2">Contato</a>
          
        </p>
        <a id="icones" href="https://www.linkedin.com/in/leonardo-junkes-nicolodelli-88089866/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a id="icones" href="https://github.com/Leojunkes"><i class="fab fa-github"target="_blank"></i></a>
        <a id="icones" href="https://api.whatsapp.com/send?phone=5548999311384"target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
      </div>
      <h2 id="projetosText" className="jumbotron-heading text-center">Projetos</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={LeoMePortfolio}  preserveAspectRatio="xMidYMid slice"/>

            <div className="card-body">
              <p className="card-text">Site criado por mim, para Melissa, criado em React-Js.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="http://docesmel.s3-website-sa-east-1.amazonaws.com/" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-success">Ver Projeto</button>
                  </a>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={conversorLeo}  preserveAspectRatio="xMidYMid slice"/>

            <div className="card-body">
              <p className="card-text">Aprendi o conceito, e criei do meu jeito um conversor de moedas, criado em React-Js.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="http://conversorjunkes.s3-website-sa-east-1.amazonaws.com/" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-success">Ver Projeto</button>
                  </a>
                  <a href="https://github.com/Leojunkes/conversor" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-primary">Código</button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
              <div className="nihongoPortfolio">
            <img id="nihonLeo" class="bd-placeholder-img card-img-top" src={leoNihongo}  preserveAspectRatio="xMidYMid slice"/>
            <img id="nihonLeo" class="bd-placeholder-img card-img-top" src={leoNiho1}  preserveAspectRatio="xMidYMid slice"/>
            <img id="nihonLeo" class="bd-placeholder-img card-img-top" src={leoniho2}  preserveAspectRatio="xMidYMid slice"/>
          </div>
            <div class="card-body">
              <p class="card-text">Quizz de memorização de caracteres japonês, escolha entre alfabeto Hiragana ou Katakana, criado em React-Native.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-success">Breve na Playstore</button>
                  <a href="https://github.com/Leojunkes/Nihongo" target="blank">
                  <button type="button" class="btn btn-sm btn-outline-primary">Código</button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
   </div>
   
   <section id="sobremimText" className="jumbotron text-center">
     <div className="container">
       <h2 id="sobreLeoText" className="jumbotron-heading">Sobre mim</h2>
       <p id="leoTextdescricao" className="lead">Olá sou Leonardo junkes, estudo e desenvolvo fazem mais de 2 anos (Angular, CSS, HTML...), mas com uma ênfase e comprometimento maior em React-Js e React-native neste ano de 2020.
          Adoro esse mundo do desenvolvimento, e quando posso adoro jogar games, estou a cada dia mais motivado para aprender e criar!
       </p>
     </div>
   </section>
      <section>
        <div id="disponivelText">
          <h3 id="disponivelLeoText" className="text-center">Disponível para oportunidades</h3>
          <a href="mailto:leojn8@gmail.com">
            <h4 id="gmailText" className="text-center">leojn8@gmail.com</h4>
          </a>
            
          
        </div>
      </section>
      <footer id="footerleo" className="text-center">
        <p>Copyright 2020 LeoJunkes</p>
      </footer>
   

        </>
    )
}