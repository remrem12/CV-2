import React from 'react';
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './utils/theme'
import { GlobalStyles } from './utils/global'
import { Switch, Route } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'
import { useDarkMode } from './utils/useDarkMode'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play } from './utils/timeline'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error404';
import Header from './components/Header'


function App() {

  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme


  return (
    <ThemeProvider theme={ themeMode }>
      <>
        <GlobalStyles/>
        <Header toggleTheme = {toggleTheme} theme={theme}/>
        <MDBContainer className='content-wrapper' fluid>
          <Route render = { ({location}) => {
            const { pathname, key } = location
            return(
              <TransitionGroup>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  timeout={{enter: 500, exit: 0}}
                >
                  <Switch location = { location }>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route component={Error}/>
                  </Switch>
                </Transition>
              </TransitionGroup>
            )}}
          />
        </MDBContainer>
        {/* <Footer theme={theme}/> */}
      </>
    </ThemeProvider>
  );
}

export default App;
