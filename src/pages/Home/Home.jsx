import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Food from '../../components/Food/Food';
import GetApp from '../../components/GetApp/GetApp';
import './home.css';

const Home = () => (
  <div className="home">
    <Header />
    <Menu />
    <Food />
    <GetApp />
  </div>
);

export default Home;
