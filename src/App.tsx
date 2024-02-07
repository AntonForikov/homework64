import AppBar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Add from './containers/Add/Add';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';

function App() {

  return (
    <div>
      <AppBar />
      <div className="px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
