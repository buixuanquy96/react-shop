import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/jquery/dist/jquery.min.js'



function App() {
  return (
    <div>
        {/* <!-- Header --> */}
        <Header />
        <Main />
        {/* <!-- Footer --> */}
        <Footer />
    </div>
  );
}

export default App;
