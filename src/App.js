import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';
import Main from './components/MainPage/Main';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
