import React from 'react'
import styles from './About.module.css'

import { maissoun } from '../images'
import { concert, realmadrid, plane } from '../images/extra'

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMeContainer}>
      <div className={styles.avatar}>
      <div className={styles.background}></div>
      {/* <div class={styles.background-hide}></div> */}
        <div className={styles.head}>
          <div className={styles.hairpiece_back1}></div>
          <div className={styles.hairpiece_back2}></div>
          <div className={styles.hairpiece_back3}></div>
          <div className={styles.hairpiece_back4}></div>
          <div className={styles.hairpiece_back5}></div>
          <div className={styles.hairpiece_back6}></div>
          <div className={styles.hairpiece_back7}></div>
          <div className={styles.hairpiece_back8}></div>
          <div className={styles.hairpiece_back9}></div>
          <div className={styles.hairpiece_back10}></div>
          <div className={styles.hairpiece_back11}></div>
          <div className={styles.hairpiece_back12}></div>
          <div className={styles.hairpiece_back13}></div>
          <div className={styles.hairpiece_back14}></div>
          <div className={styles.hairpiece_back15}></div>
          <div className={styles.hairpiece_back16}></div>
          <div className={styles.hair_back17}></div>
          <div className={styles.eyebrows}></div>
          <div className={styles.eyes}></div>
          <div className={styles.nose}></div>
          <div className={styles.mouth}></div>
        </div>
      <div className={styles.neck}></div>
      <div className={styles.body}></div>
      <div className={styles.arm_right}></div>
      <div className={styles.arm_left}></div>
      <div className={styles.animate}>
          <div className={styles.arm_left_wave}></div>
          <div className={styles.hand}></div>
      </div>
      </div>

      {/* <div className={styles.aboutPhoto}> */}
        {/* <img src={maissoun} alt="" /> */}
        {/* </div> */}

      <div className={styles.aboutText}>
        <h2>Hey there! I'm <h5>Maissoun Ksara</h5>, a structural engineer turned programmer.</h2>
        <h4>
          After making strides in the structural engineering industry for a couple of years, the urge to explore and dive further into tech grew too strong to ignore.
        </h4>
        <h4>
          My passion for developing is unmatched. Every day I wake up pumped to learn new skills on YouTube, edX, or Udemy. With a plethora of information and free resources online, my motivation to code is invigorating. 
        </h4>
        <h4>
          I love every aspect of bringing an idea to fruition and find each step of the way exciting.
        </h4>

        <div className={styles.techStack}>
          <div>
            <h3>Front-End</h3>
            <h4>JavaScript • ReactJS • Redux • HTML5 • CSS3</h4>
          </div>
          <div>
            <h3>Back-End</h3>
            <h4>C • Python • NodeJS • MySQL</h4>
          </div>
        </div>

      </div>

    </div>
  </div>
) 

export default About
