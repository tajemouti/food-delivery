import { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import './home.css'
import Food from '../../components/Food/Food'

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className='home'>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <Food category={category} />
    </div>
  )
}

export default Home
