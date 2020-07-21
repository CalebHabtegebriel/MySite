import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout className='layout' fixedHeader>
  <Header transparent className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Barlow Condensed'}} to="/">My Portfolio</Link>} scroll>
            <Navigation style={{fontFamily:'Barlow Condensed' ,fontSize: '3rem'}}>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Barlow Condensed'}} to="/">My Potfolio</Link>}>
            <Navigation style={{fontFamily:'Barlow Condensed' ,fontSize: '3rem'}}>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content> 
    </Layout>
</div>
  );
}

export default App;
