import Header from './components/header';
import Home from './components/home';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;