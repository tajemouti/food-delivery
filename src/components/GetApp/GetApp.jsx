import { assets } from '../../assets/assets'
import './get_app.css'

const GetApp = () => {
  return (
    <div className='get-app' id='get-app'>
      <p>For better experience download <br />Tomato App</p>
      <div className="get-app-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  )
}

export default GetApp
