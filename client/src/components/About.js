import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
  return (
    <div>
      <br/><br/>
      <Jumbotron className="text-center">
        <h1 className="display-3">Hey There!</h1>
        <p className="lead">This is a simple web app called shopping list, created using React, Node and MongoDB. It allows you to add and delete items as per your preference</p>
        <hr className="my-2" />
        <p>It was created in the process of learning the "MERN stack". Click below to view my profile</p>
        <p className="lead">
          <Button color="primary" href="https://lk-portfolio.herokuapp.com/" target="_blank">Go to Profile</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;