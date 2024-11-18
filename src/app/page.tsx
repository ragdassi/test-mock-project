// src/app/page.tsx
import React from 'react';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Project!</h1>
      <p>This is a simple homepage for my project. Feel free to explore and learn more about what I've been working on.</p>
      <a href="#features" className={styles.button}>Learn More</a>
    </div>
  );
}
