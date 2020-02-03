import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import homePic from '../assets/images/homePic.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header id="Home" className="masthead">
      <div className="container d-flex h-100 align-items-center home-cont">
        <div className="mx-auto text-center home-txt">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-black-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-about">
              Départ !
            </a>
          </Scroll>
        </div>
        <div className="home-img"><img src={homePic} className="img-fluid " alt="" /></div>
      </div>
    </header>

    <section id="about" className="about-section ">
      <div className="container d-flex about-cont">
        <div className="about-txt">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">A propos</h2>
            <p className="text-white-50">
              Je suis un développeur web, passionné de nouvelles technologies. Ce site me permet de tester de nouveaux outils front-end.<br/> 
              Des modifications seront amenés régulièrement sur le site. Vous pouvez si vous le souhaitez suivre ces évolutions en vous inscrivant <a href="#signup">ici</a>.<br/>
              <br/>
              Pour en savoir plus sur la Jamstack et Gatsby, je vous invite à visiter les sites suivants:<br/>
              <br/>
              <ul>
                <li><a href="https://jamstack.wtf/" rel="noopener">Jamstack WTF!</a></li>
                <li><a href="https://www.gatsbyjs.org/" rel="noopener">Gatsby.js</a></li>
              </ul> 
              <br/>
              </p>
              <p className="txt-mini">

             Ce site utilise le strater gatsby <a href="https://www.gatsbyjs.org/starters/anubhavsrivastava/gatsby-starter-grayscale/"> grayscale</a>.
             Dévellopé par <a href="https://github.com/anubhavsrivastava">Anubhav Srivastava</a><br/>
             Date de mise en ligne de la v1.0: 2020.2.3   
              
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="benefices" className="projects-section bg-light">
      <div className="container">
      <h2 className="text-black mb-4">Bénéfices</h2>
      <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 text-center my-auto">
            <i className="fas fa-shield-alt fa-10x"></i>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Sécurité</h4>
                  <p className="mb-0 text-white-50">
                    Ne vous souciez plus de la vulnérabilité de votre serveur ou de votre base de données.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 text-center my-auto">
            <i className="fas fa-tachometer-alt fa-10x"></i>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Performances</h4>
                  <p className="mb-0 text-white-50">
                    Les assets et le code généré sont servis à partir d'un CDN.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 text-center my-auto">
            <i className="fas fa-code fa-10x"></i>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Expérience de développement</h4>
                  <p className="mb-0 text-white-50">
                  Les développeurs front end peuvent se focaliser sur la partie client,
                   cela se traduit par un développement plus rapide et plus ciblé.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 text-center my-auto">
            <i className="fas fa-piggy-bank fa-10x"></i>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Coûts</h4>
                  <p className="mb-0 text-white-50">
                    L'hébergement de fichiers statiques est sensiblement moins cher, il existe même des offres
                    gratuites.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 text-center my-auto">
            <i className="fas fa-rocket fa-10x"></i>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Scalabilité</h4>
                  <p className="mb-0 text-white-50">
                  Si votre site devient viral ou est soumis à un pic d'activité, le CDN compensera sans problèmes.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
