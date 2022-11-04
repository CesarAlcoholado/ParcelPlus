import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Form from '../../components/Form/Form.jsx';
import Hero from '../../components/Hero/Hero.jsx'
import ServicesSection from '../../components/ServicesSection/ServicesSection.jsx';
import Route from '../../components/Route/Route.jsx';
import Vehicles from '../../components/Vehicles/Vehicles.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Contact from '../../components/Contact/Contact.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import AboutUs from '../../components/AboutUs/AboutUs.jsx';

export default function Home() {
  
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Contact/>
      <ServicesSection/>
      <Route/>
      <Vehicles/>
      <Form/>
      <AboutUs/>
      <Modal/>
      <Footer/>
    </div>
  );
}
