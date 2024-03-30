import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './index.css'

import Articles from "./components/pages/Articles";
import Exercises from "./components/pages/Exercises";
import AboutUs from "./components/pages/AboutUs";
import Course1 from "./components/pages/Course1";
import Course2 from "./components/pages/Course2";
import Course3 from "./components/pages/Course3";
import Exercise1 from './components/pages/Exercise1';
import Exercise2 from './components/pages/Exercise2';


const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/articles/course1" element={<Course1 />} />
            <Route path="/articles/course2" element={<Course2 />} />
            <Route path="/articles/course3" element={<Course3 />} />
          </Routes>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  </Router>
);

export default App;