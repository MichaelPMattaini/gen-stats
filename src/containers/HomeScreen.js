import React from "react";
import { rollStats } from "./../utils/utils";
import RollButton from "./../components/RollButton";
import { colvilleStats } from "./../utils/utils";
import StatsDisplay from "./../components/StatsDisplay";
import ColvilleDisplay from "./../components/ColvilleDisplay";
import TriesMessage from "./../components/TriesMessage";
import { Statistic, Grid } from "semantic-ui-react";
import is from "is_js";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      statObject: {},
      display: null,
      message: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.colvilleClick = this.colvilleClick.bind(this);
  }
  handleClick() {
    let statArray = rollStats();
    this.setState({ stats: statArray[1] });
    this.setState({ message: statArray[0] });
    this.setState({ statObject: {} });
    this.setState({ display: "array" });
  }
  colvilleClick() {
    let statArray = colvilleStats();
    this.setState({ statObject: statArray[1] });
    this.setState({ message: statArray[0] });
    this.setState({ stats: [] });
    this.setState({ display: "object" });
    // for(var stat in statArray[1]){
    //   console.log(stat + ": " + statArray[1][stat]);
    // };
  }
  render() {
    let resultsContent = null;
    switch (this.state.display) {
      case "array":
        resultsContent = (
          <div>
            <StatsDisplay statArray={this.state.stats} />
            <TriesMessage message={this.state.message} />
          </div>
        );
        break;
      case "object":
        resultsContent = (
          <div>
            <ColvilleDisplay statObject={this.state.statObject} />
            <TriesMessage message={this.state.message} />
          </div>
        );
        break;
      default:
        resultsContent = null;
    }
    const displayContent = (
      <div>
          <div>
            <Statistic>
              <Statistic.Value>
                How do you roll?
              </Statistic.Value>
            </Statistic>
            <p />
            <p />
          </div>
          <RollButton message="Roll Stats!" onClick={this.handleClick} />
          <RollButton
            message="Roll in order!"
            onClick={this.colvilleClick}
          />
          <p />
          {resultsContent}
        </div>
    );
    if (is.mobile()) {
      console.log(is.mobile());
      return (
        displayContent
      );
    } else{
       return (
      <Grid columns="equal">
        <Grid.Column />
        <Grid.Column>
         {displayContent}
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
    }
  }
}

export default HomeScreen;
