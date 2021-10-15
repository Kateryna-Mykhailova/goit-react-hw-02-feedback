import React from 'react';
import styles from './Section.module.css';
const Section = ({ title, children }) => (
  <div>
    <span className={styles.Feedback_title}>{title}</span>
    {children}
  </div>
);

export default Section;
