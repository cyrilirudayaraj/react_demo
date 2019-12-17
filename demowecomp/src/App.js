import React, { Component } from "react";
import data from "./data";
import Child from "./Child";
import ParentComp from "./ParentComp";
const requestList = data.demoJson;
const requestListFirstSlice = data.demoJson.slice(0, 4);
const requestListTailingList = data.demoJson.slice(4, data.demoJson.length);

class App extends Component {
  constructor() {
    super();
    this.state = {
      threshold: 4,
      expand: false,
      requestList: requestList,
      requestListFirstSlice: requestListFirstSlice,
      requestListTailingList: requestListTailingList
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(rowCount) {
    this.setState(prevState => {
      prevState.toExpand = !prevState.toExpand;
      console.log("afterFlip" + prevState.toExpand);
      if (prevState.toExpand) {
        console.log("expanding");
        const rowToBeAdded = prevState.requestListTailingList;
        return {
          requestListFirstSlice: prevState.requestListFirstSlice.concat(
            rowToBeAdded
          ),
          expand: prevState.toExpand
        };
      } else {
        console.log("collapsing");
        return {
          requestListFirstSlice: prevState.requestListFirstSlice.splice(
            0,
            this.state.threshold
          ),
          expand: prevState.toExpand
        };
      }
    });
  }

  render() {
    return (
      <div>
        <ParentComp
          threshold={this.state.threshold}
          items={this.state.requestList}
          slicedList={this.state.requestListFirstSlice}
        />
        <Child
          items={this.state.requestList}
          threshold={this.state.threshold}
          handleAdd={this.handleAdd}
          toExpand={this.state.expand}
        />
      </div>
    );
  }
}
export default App;
