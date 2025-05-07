import React, { useState } from 'react'
import Home from './Screens/Home';
import Home2 from './Screens/Home2';
import { View } from 'react-native';
import Navbar from './Components/Navbar';
import Pokemon from './Screens/Pokemon';
import "./global.css";


function App() {

  const [page, setPage] = useState('Home');

  return (
    <View className='flex flex-col justify-center items-center h-full bg-slate-100 gap-4'>
     {page === 'Home' ? <Home/> :
      page === 'Lists' ? <Home2/> :
       page === 'Pokemon' ? <Pokemon/> :
        null}

      <Navbar setPage={setPage} />
    </View>
  )
}

export default App