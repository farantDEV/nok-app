import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="fas fa-mug-hot fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Au plaisir de vous renconter...</h2>

            <form className="contactForm form-inline d-flex" method="post" data-netlify="true" data-netlify-honeypota="bot-field">
              <input type="hidden" className="bot-field"/>
              <input type="hidden" className="form-name" value="contactForm"/>
              <div className="w-75">
                <input
                  type="email"
                  className="form-control mr-0 mr-sm-2 mb-3 mb-sm-0 w-100"
                  id="inputEmail"
                  placeholder="Votre adresse email..."
                />
              </div>
              <button type="submit" className="btn btn-contact ml-0 mx-auto">
                Inscription
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
