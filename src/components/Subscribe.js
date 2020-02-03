import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="fas fa-mug-hot fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Nous serions enchanté de vous renconter !</h2>

            <form className="contact form-inline d-flex" method="post" data-netlify="true" data-netlify-recaptcha="true">
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="Votre adresse email..."
              />
              <div data-netlify-recaptcha="true"></div>
              <button type="submit" className="btn btn-about mx-auto">
                Inscription
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
