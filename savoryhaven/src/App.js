
import './App.css';
import Navbar from './component/navbar.js';
import SubHead from './component/sub_head.js';
import Cards from './component/OurSpecialCoffe.js';
import Cards2 from './component/OurSpecialDessert.js';
import Footer from './component/footer.js';
function App() {
  return (
    <>
   <Navbar/>
   {/* <SubHead/> */}
   <Cards/>
   <Cards2/>
   <Footer/>
   
    </>
  );
}

export default App;
