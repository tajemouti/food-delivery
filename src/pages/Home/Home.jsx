import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './home.css';
import Food from '../../components/Food/Food';
import GetApp from '../../components/GetApp/GetApp';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className="home">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <Food category={category} />
      <GetApp />
    </div>
  );
};

export default Home;
