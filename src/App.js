import React from 'react';
import Navbar from './components/Navbar';
import MainApp from './components/MainApp';
import Footer from './components/Footer';


function App(props) {
   return (
      <div>
         <Navbar/>
         <MainApp/>
         <Footer/>
      </div>
   );
}

export default App;