import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Form from '../../components/Form/Form.jsx';
import Hero from '../../components/Hero/Hero.jsx'
import ServicesSection from '../../components/ServicesSection/ServicesSection.jsx';
import Route from '../../components/Route/Route.jsx';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ServicesSection/>
      <Route/>
      <Form/>
    </div>
  )
}
