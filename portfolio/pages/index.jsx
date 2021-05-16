import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Full Stack Web Developer." subtitle="A list of full stack, front end, and back end projects I worked on" />
    <h3>Full Stack Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/top-port-screenshot.png" alt="webportfolio" deployed="https://www..com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/scheduler.png" alt="scheduler" deployed="https://.com/" />
      </div>
    </div>
    <h3 className="frontend">Front End Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/donnie-drr.png" alt="donniedarko" github="https://github.com/Rachel-Reidenga" deployed="https://.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/luna-mothrr.png" alt="lunamoth" github="https://github.com/Rachel-Reidenga" deployed="https:////" />
      </div>
    </div>
    <h3 className="backend">CLI Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source="../static/pics/fishu-fishrr.png" alt="fish" github="https://github.com/Rachel-Reidenga" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/" alt="altname" github="https://github.com/Rachel-Reidenga" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/" alt="altname" github="https://github.com/Rachel-Reidenga" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
