import React, { Component } from 'react';
import { Link } from "gatsby";
import Scroll from './Scroll';
import config from '../../config';
import logo from '../assets/img/nok-logo.svg'
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Link to="/"><img className="navbar-brand" src= {logo} alt= {config.siteTitle} /></Link>
          
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/#about" className="nav-link">A propos</Link>
              </li>
              <li className="nav-item">
                <Link to="/#benefices" className="nav-link">Avantages</Link>
              </li>
              <li className="nav-item">
                
                  <Link to="/articles/" className="nav-link">Blog</Link>
               
              </li>
              <li className="nav-item">
                <Link to="/#signup" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
