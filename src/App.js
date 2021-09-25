import logo from './logo.svg';
import './App.css';
import profile_pic from './Yashwant Baggam_Photo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={profile_pic} className="img_propic" alt="pro_pic"/>
        <h2 style={{ margin:"0px"}}>Yashwant Baggam</h2>
        <div style={{margin:"2px", paddingBottom:"2px"}}>React Developer</div>
      </header>
    </div>
  );
}

export default App;
