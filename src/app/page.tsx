import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="/profile-photo.jfif" alt="Logan Barker" className={styles.profilePic} />

        <h1 className={styles.name}>Logan Barker</h1>
        <h2 className={styles.title}>Tech Lead at Hack4Impact-Cal Poly</h2>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.about}>
            Logan Barker is a 3rd year Blended Master&#39;s Computer Science student at California Polytechnic State University - San Luis Obispo. 
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <ul className={styles.list}>
            <li>Tech Lead - Hack4Impact</li>
            <li>Full Stack Developer - IntelliSAR, Franz Kurfess&#39; research project at Cal Poly</li>
            <li>Software Developer - RAN, Cal Poly Startup</li>
            <li>Meeting Facilator - CS+AI</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.list}>
            <li>JavaScript, TypeScript, Python</li>
            <li>React, Svelte, Next.js, Node.js</li>
            <li>Powerlifting</li>
            <li>MongoDB, MySQL, AWS, Azure</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
