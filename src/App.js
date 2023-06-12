import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';
import Main from './pages/Main/Main';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
