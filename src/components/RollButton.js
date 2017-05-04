import React from 'react';
import { Button } from 'semantic-ui-react';

const RollButton = props => {
    return(
      <div>
        <p />
        <Button fluid primary size="huge" onClick={props.onClick}>
          {props.message}
        </Button>
      </div>
    );
}

export default RollButton;