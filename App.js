// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, {Component} from 'react';
// // class App extends Component{
// // render(){
// //   return(
// //     <div>
// //       <h1 >React js</h1>
// //     </div>
// //   );
  
// //   }
// // }
// // export default App;
// // import React, {Component} from 'react';
// //  class App1 extends Component {
// //   render(){
// //   return(
// //   <div>
// //     <h1>I am  a  fruit</h1>
// //   </div>
// //   );
// //   }
// // }
// // class App2 extends Component {
// //     render(){
// //     return(
// //     <div>
// //       <h1>who am I?</h1>
// //       <App1/>
// //     </div>
// //     );
// //     }
// //   }
// //   export default App2;
// // import ReactDOM from "react-dom";
// // import React from "react";
// //  class Css extends
// //  React.Component{
// //   render()
// //   {
// //     return(
// //       <div>
// //         <h1 style={{color:"blue",textAlign:"center"}}>Happy days</h1>
// //         <h2 style={{color:"red"}}>Make your days better</h2>
// //       </div>
// //     )
// //   }
// //  }
// //  ReactDOM.render(<Css/>,document.getElementById('root'));
// // import ReactDOM from "react-dom";
// // import React from "react";
// // class Style extends React.Component{
// //   render()
// //   {
// // const mystyle={
// //   color:"Blue",
// //   fontFamily:"Arial"
// // };
// // return(
// //   <h1 style={mystyle}>hii</h1>
// // )
// //   }
// // }
// // ReactDOM.render(<Style/>,document.getElementById('root'));
import React, { Component } from "react";
import './file.css'

//  import './about.css'
class App extends Component{
  constructor(){
    super();
    this.state={
      data :[
        {
          "name":"David Warner: One man Army"
        },
        {
          "name":"Virat Kohli : Run Machine"
        },
        {
          "name":"Msd : Captain Cool"
        }
      ]
    };
  }

  render(){
    return(
      <div>
        
        <Fruits/>
        <Fruits1/>
        <ul>
          {this.state.data.map((item)=> <List data = {item}/>)}
        </ul>
    
        <br/>
       
      </div>
    );
  }
}

class Fruits extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to Buddy Club</h2>
      </div>
    )
  }
  }

  class Fruits1 extends Component{
    render(){
      return(
        <div>
          <h2>It's about crickters buddy names</h2>
        </div>
      )
    }
    }

class List extends Component{
  render(){
    return(
      <div>
        <ul>
          <li><p>{this.props.data.name}</p></li>
        </ul>
      </div>
    )
  }
}

export default App;