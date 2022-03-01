import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/nav/Navbar';
import Des from './components/Des/Des';
import Search from './components/Search/Search';
import Select from './components/Select/select';
function App() {
  return (
    <div>
      <Navbar /> 
      <Hero/> 
      <Des/>
      <Search/>
      <Select/>
    </div>
  );
}

export default App;
