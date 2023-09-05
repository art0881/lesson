import './App.css';
import Header from './comp/Header/Header';
import Footer  from './comp/Footer/Footer';
import Users from './comp/Users/Users';
import Page from './comp/Page1/Page';
import Page2 from './comp/Page2/Page2';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Header/>
      <main className='main'>
          <Routes>
            <Route path="/" element={<Page/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/Page2" element={<Page2/>}/>
          </Routes>
          </main>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
