import Footer from './components/Footer';
import Header from './components/pages/Header';
import MainSection from './components/pages/MainSection';
import Second from './components/pages/Second';
import Testimonials from './components/pages/Testimonials';
import './globals.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainSection/>
        <Second/>
        <Testimonials/>
        <Footer/>
    </div>  
  );
}

export default App;
