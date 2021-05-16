import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From You to Me." subtitle="Get in contact with me" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../static/pics/gmail.png" text="reidenga@gmail.com" />
        <Card source="../static/pics/github.png" text={<a href="https://github.com/Rachel-Reidenga" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../static/pics/linkedin.png" text={<a href="https://www.linkedin.com/in/rachel-reidenga-443468198/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
          source="../static/pics/resume.png"
          text={
            <React.Fragment>
              <a href="https://github.com/Rachel-Reidenga/ReactPortfolio/blob/master/static/pics/Rachel.Reidenga.21.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>
              <a href="https://github.com/Rachel-Reidenga/ReactPortfolio/raw/master/static/pics/Rachel.Reidenga.21.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faDownload} /></button></a>
            </React.Fragment>
          }
        />
        <Card source="../static/pics/phone.png" text="906-250-0170" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
