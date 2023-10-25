import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
       return (
              <div>
                     <Banner></Banner>
                     <About></About>
                     <Services></Services>
                     <h1>This is home</h1>
                     
              </div>
       );
};

export default Home;