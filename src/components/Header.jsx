import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavLink,
} from "mdbreact";
import Toggle from './Toggle'
import RouteLink from "./RouteLink";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  menu = [
    {
      name: 'Home',
      route: '/',
      active: true
    },
    {
      name: 'About',
      route: '/about'
    },
    {
      name: 'Contact',
      route: '/contact'
    }
  ]

  render() {
    const bgPink = { backgroundColor: "transparent" };
    const { theme, toggleTheme } = this.props
    return (
      <div>
          <header>
            <MDBNavbar style={bgPink} light={theme === 'light'} dark={theme === 'dark'} expand="md" scrolling fixed="top">
              <MDBNavbarBrand>
                <MDBNavLink to="/" className='cyan-text'>
                  <img className="logo" alt='logo' src='/images/logo.png'></img>
                </MDBNavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left></MDBNavbarNav>
                <MDBNavbarNav left></MDBNavbarNav>
                <MDBNavbarNav left>
                  {
                    this.menu.map(item => (
                      <RouteLink 
                        key={item.name}
                        item={item}
                      />
                    ))
                  }
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <Toggle theme={theme} toggleTheme={toggleTheme}/>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}

export default Header;
