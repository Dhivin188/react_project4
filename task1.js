// import ReactDOM from "react-dom";
import React from "react";
import ABD from './Images/abd.jpg'
import VIRAT from './Images/i.jpg'
import FAF from './Images/im.jpg'
import MAXWELL from './Images/maxwell.jpg'
import DHONI from './Images/dhoni.jpg'
import './file.css'
import './Demo.Module.css'
import VIDEO from './video/BUM.mp4'
class Styles extends React.Component {
  render() {
    // const mystyle={
    //   color:"Blue",
    //   fontFamily:"Arial",
    //   TextAlign:"center"
    // };
    return (
      <div>
        <div>
          <i><h1 className="App" style={{ marginLeft: "20%" }}>UNFORGOTABLE PLAYERS IN CRICKET HISTORY</h1></i>
          <img className="img" style={{ marginLeft: "1px" }} src={ABD} alt="abd" width={300} height={300} />
          <img className="cri" style={{ marginLeft: "58.7%" }} src={VIRAT} alt="virat" width={300} height={300} />
        </div>
        <div className="jk">
          <h1 style={{ marginLeft: "7%" }}>ABD</h1>
          <h1 style={{ marginLeft: "75%" }}>VIRAT</h1>
        </div>
        <div className="h">
          <video src={VIDEO} width="600" height="300" controls="controls" autoplay="true" style={{ marginLeft: "31%" }} /><br></br>
          <br></br>
        </div>
        <div>
          <img className="cri" style={{ marginLeft: "1px" }} src={FAF} alt="faf" width={300} height={300} />
          <img className="cri" style={{ marginLeft: "58.7%" }} src={MAXWELL} alt="maxwell" width={300} height={300} />
        </div>
        <div className="jk">
          <h1 style={{ marginLeft: "7%" }}>FAF</h1>
          <h1 style={{ marginLeft: "75%" }}>MAXWELL</h1><br></br>
          <br></br>
        </div>
        <i><h1 className="j" style={{ textAlign: "center", backgroundColor: "black", marginLeft: "30%" }}>MSD THE CAPTAIN COOL</h1></i>
        <div className="dh">
          <img className="shs" style={{ padding: "7px" }} src={DHONI}  alt="msd" width={385} height={690} />
        </div>
      </div>
    )
  }
}
// ReactDOM.render(<Styles />, document.getElementById('root'));
 export default Styles;