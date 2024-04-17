// App.js
import { useState, useEffect } from 'react'; // Import useEffect
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import MyForm from '@/components/form';

const App = () => {
  useEffect(() => {
    document.body.classList.add('text-bg-light');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('text-bg-light');
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <NavBar />
      <MyForm />
      <Footer />
    </div>
  );
};

export default App;
