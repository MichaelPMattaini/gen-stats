import React, { PropTypes } from "react";
import { Grid, Statistic } from "semantic-ui-react";

const StatsDisplay = props => {
  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[0]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[1]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[2]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[3]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[4]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statArray[5]}
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

StatsDisplay.propTypes = {
  statArray: PropTypes.array.isRequired
};

export default StatsDisplay;
