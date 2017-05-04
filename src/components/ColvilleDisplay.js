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
                {props.statObject["str"]}
              </Statistic.Value>
              <Statistic.Label>
                STR
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statObject["dex"]}
              </Statistic.Value>
              <Statistic.Label>
                DEX
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statObject["con"]}
              </Statistic.Value>
              <Statistic.Label>
                CON
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statObject["int"]}
              </Statistic.Value>
              <Statistic.Label>
                INT
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statObject["wis"]}
              </Statistic.Value>
              <Statistic.Label>
                WIS
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Value>
                {props.statObject["cha"]}
              </Statistic.Value>
              <Statistic.Label>
                CHA
              </Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

StatsDisplay.propTypes = {
  statObject: PropTypes.object.isRequired
};

export default StatsDisplay;
