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

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center home-cont">
        <div className="mx-auto text-center home-txt">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-black-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-about">
              About
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
             Ce site me permet de tester par la pratique de nouvelles technologie de développement web. Des modifications y seront 
             apporté en fonction de mes apprentissages et de mes diponibilités.<br/> Si vous souhaitez en savoir plus sur la JAMstack, je vous invite à visiter
             ce lien.<br/>
             L.Farant   
              
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
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
