import React from 'react';
import styles from './Notification.module.css';
const Notification = ({ message }) => (
  <span className={styles.notification}>{message}</span>
);

export default Notification;
