// App.js
import { useState } from 'react';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import MyForm from '@/components/form';
const App = () => {
  return (
    <div>
      <NavBar/>
      <MyForm/>
      <Footer/>
    </div>
  );
};

export default App;
