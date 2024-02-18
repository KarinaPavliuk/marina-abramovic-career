import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Career from './components/Career/Career';
import Awards from './components/Awards/Awards';
import FirstProjectPart from './components/ProjectPart/FirstProjectPart/FirstProjectPart';
import Books from './components/Books/Books';
import SecondProjectPart from './components/ProjectPart/SecondProjectPart/SecondProjectPart';
import SubscribePart from './components/SubscribePart/SubscribePart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Career></Career>
      <Awards></Awards>
      <FirstProjectPart></FirstProjectPart>
      <Books></Books>
      <SecondProjectPart></SecondProjectPart>
      <SubscribePart></SubscribePart>
      <Footer></Footer>
    </div>
  );
}

export default App;
