import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <main className="w-full min-h-screen bg-cream selection:bg-maroon selection:text-cream scroll-smooth">
      <Navbar />
      <Hero />
      <Invitation />
      <Story />
      <Events />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </main>
  );
}

export default App;