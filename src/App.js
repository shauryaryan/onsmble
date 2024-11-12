// // src/App.js
// import React from 'react';
// import HeroSection from './components/HeroSection';
//
// import FloatingImages from './components/FloatingImages';
//
// function App() {
//   return (
//       <div className="App">
//         <HeroSection />
//         <FloatingImages />
//       </div>
//   );
// }
//
// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import JoinForm from './components/JoinForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/join" element={<JoinForm />} />
            </Routes>
        </Router>
    );
};

export default App;
