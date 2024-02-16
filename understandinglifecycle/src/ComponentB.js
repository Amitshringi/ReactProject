import React from "react";
import ComponentB from "./ComponentB";
class App extends React.Component {
  constructor(){
    super();

    this.state={
      name:"ComponentB"
    }
    console.log("ComponentB Constructor");
  }

  static getDerivedStateFromProps(){
    console.log("ComponentB getDrivedByProps");
    return null;
  }

  componentDidMount(){
    console.log("ComponentB componentDidMount");
  }

  render(){
    console.log("ComponentB render");
    return (
    <h2>{this.state.name}</h2>


      );

  }
  
}

export default App;
