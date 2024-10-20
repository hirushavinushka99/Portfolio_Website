import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a dedicated UI/UX designer and frontend web developer with a strong foundation in HTML, CSS, and JavaScript, along with expertise in React. As an undergraduate, I’m passionate about creating intuitive, visually appealing, and user-centered web applications. Although I am still gaining experience, I am eager to collaborate and apply my skills to real-world projects, delivering innovative and effective solutions. Let's work together to build something impactful!
      </motion.p>

      <div className='mt -20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}
      </div>
    </>
  )
}

export default About