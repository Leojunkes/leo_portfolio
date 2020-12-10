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
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LeoJunkes</a>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#leoPortfolio" 
                aria-controls="leoPortifolio" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="leoPortfolio">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre mim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Depoimentos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
        <div className ="col-lg-6 col-md-8 mx-auto">
            <img className="leoImg" src={leoFoto}/>
        <h1 className ="fw-light">Leonardo Junkes</h1>
        <p className="lead text-muted">Estudante de Programação (React-Js e React-Native) - Motorista de App.</p>
        <p>
          <a href="#" className="btn btn-dark my-2">Contato</a>
          
        </p>
        <a href="https://www.linkedin.com/in/leonardo-junkes-nicolodelli-88089866/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Leojunkes"><i class="fab fa-github"target="_blank"></i></a>
        <a href="https://api.whatsapp.com/send?phone=5548999311384"target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={LeoMePortfolio}  preserveAspectRatio="xMidYMid slice"/>

            <div class="card-body">
              <p class="card-text">Site criado por mim, para Melissa, criado em React-Js.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="http://docesmel.s3-website-sa-east-1.amazonaws.com/" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-success">Ver Projeto</button>
                  </a>
                  <a href="https://github.com/Leojunkes/site-melissa">
                  <button type="button" class="btn btn-sm btn-outline-primary">Código</button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={conversorLeo}  preserveAspectRatio="xMidYMid slice"/>

            <div class="card-body">
              <p class="card-text">Aprendi o conceito, e criei do meu jeito um conversor de moedas, criado em React-Js.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
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
        </>
    )
}