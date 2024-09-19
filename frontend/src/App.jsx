// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import VideoCall from './components/VideoCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/video-call" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
