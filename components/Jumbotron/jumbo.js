import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Clicky Game</h1>
        <p className="lead"> The Clicky game is a matching game using Fast and the Furious cars.</p>
        <hr className="my-2" />
        <p>Try and remember where the cars are click each car to try and match.</p>
        <p className="lead">
          <Button color="primary">Start Game</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;