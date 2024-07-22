import assets from '../../assets/assets';
import './get_app.css';

const GetApp = () => (
  <div className="get-app" id="get-app">
    <p>
      For better experience download
      <br />
      Tomato App
    </p>
    <div className="get-app-platforms">
      <img src={assets.playStore} alt="Play Store" />
      <img src={assets.appStore} alt="App Store" />
    </div>
  </div>
);

export default GetApp;
