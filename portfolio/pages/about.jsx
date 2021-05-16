import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Art in Code." subtitle="How I use my skills as an illustrator to help create web applications." />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/rachelport.png" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
          Full-Stack developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptas consequuntur atque tenetur eos quis est magni accusamus impedit, earum quae quas aspernatur! Incidunt sint animi eius sed odio. Reprehenderit.
        </h4>
      </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/html.png" alt="html" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" />
            <IconImage source="../static/pics/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/githubIcon.png" alt="github" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/jquery.png" alt="jquery" />
            <IconImage source="../static/pics/mern.jpg" alt="mern" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/mysql.png" alt="mysql" />
            <IconImage source="../static/pics/nodejs.png" alt="node" />
            <IconImage source="../static/pics/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;