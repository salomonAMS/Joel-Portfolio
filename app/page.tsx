import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
