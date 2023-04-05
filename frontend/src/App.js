import './App.css';
// import { Button } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/chat" element={<Chatpage/>}/>
          {/* <Route path="/" component={Homepage} exact />
          <Route path="/chats" component={Chatpage} /> */}
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
