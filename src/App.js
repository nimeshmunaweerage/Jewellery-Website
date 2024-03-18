import './styles.css';
import Navbar from './components/Navbar.js'
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home.js';
import About from './routes/About.js';
import Service from './routes/Service.js';
import Contact from './routes/Contact.js';


function App() {
  return (
    <div className='App'>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/jewellery" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          
        

          <Navbar/>
          
      
    </div>
  );
  }

export default App;