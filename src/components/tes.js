import React, {useContext} from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {FirebaseContext} from './Firebase'


const Navbar = () => {
 const [active, setActive] = useState(false);
 const [navBarActiveClass, setNavBarActiveClass] = useState('');

 function toggleHamburger() {
    setActive(!active);
    if(active){
      setNavBarActiveClass('is-active')
    } else {
      setNavBarActiveClass('')
    }
      }

    library.add(fab)
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: 'fixed',
          width: '100%',
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src="/img/logo-demo.png" alt="Logo" style={{ width: '160px' }} />
            </Link>
            <div 
            className="navbar-logincontainer"
            style=
                {{ 
                  width: '120px'
                  }}
            >
              <Link 
              to="/login" 
              className="navbar-login" 
              title="Login"
              >

                <p>
                {/* <FontAwesomeIcon icon={faSignInAlt} />
                 <span> </span> */}
                 <span>Login</span>
                </p>
              </Link>
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/products">
                適宜
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                適宜
              </Link>
              <div 
            className="navbar-logincontainer-in-menu"
            style=
                {{ 
                  width: '90px'
                  }}
            >
              <Link 
              to="/login" 
              className="navbar-login" 
              title="Login"
              >
                <p>
                {/* <FontAwesomeIcon icon={faSignInAlt} />
                 <span> </span> */}
                 <span>Login</span>
                </p>
              </Link>
            </div>
            </div>
          </div>
          <FirebaseContext.Consumer>
            {props => {
              console.log(props);
              return <div/>
            }}
          </FirebaseContext.Consumer>
        </div>
      </nav>
    )
  }

export default Navbar
