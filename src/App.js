import './App.scss';
import Main from './components/Layout/main';
import Introduction from './components/Layout/introduction';
import Shop from "./components/Layout/shop";
import HomeAbout from './components/Layout/home_about';
import Hero from "./components/Layout/hero";
import Footer from "./components/Layout/footer";
import Cart from "./components/Layout/Cart/cart";

function App() {
  return (
    <div className="App">
      
       <Cart />
       <Main />
       <Introduction />
       <Shop />
       <HomeAbout />
       <Hero />
       <Footer />

       
    </div>
  );
}

export default App;
