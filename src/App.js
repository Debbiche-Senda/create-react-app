import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./Image.css";

function App() {
  return (
    <div>
      <div className="seediv" style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="titlered"> SEE</h1>
        <br />
        <img className="myimg1" src="./imageInPublic.jpg" alt="img"/> <br />
        <img className="myimg2" src={imageInSrc} alt="img" /> 
      </div>
      <video width="320" height="240" controls>
        {" "}
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
