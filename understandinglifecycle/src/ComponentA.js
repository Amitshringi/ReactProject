import React from "react";


class App extends React.Component {
  constructor(){
    super();

    this.state={
      name:"ComponentA",
      data:[]
    }
    console.log("ComponentA Constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("ComponentA getDrivedByProps");
    return null;
  }

  componentDidMount(){
    console.log("ComponentA componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data:data}))
  }

  render(){
    console.log(this.setState.data);
    return (<>
          <h1>{this.state.name}</h1>
          <ul>
            {this.state.data.map((d)=>{

              return(
                <li>{d.username}</li>
                
              )
            })}
          </ul>
    </>


      );

  }
  
}

export default App;
