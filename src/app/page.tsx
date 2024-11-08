import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="license.JPG" alt="Ryan Agdassi" className={styles.profilePic} />

        <h1 className={styles.name}>Shawn Gill</h1>
        <h2 className={styles.title}>Tech Lead at Hack4Impact-Cal Poly</h2>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.about}>
            Shawn Gill is a computer science student at California Polytechnic State University - San Luis Obispo. 
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <ul className={styles.list}>
            <li>Tech Lead - Hack4Impact, Spokes</li>
            <li>Software Developer - Hack4Impact, SLO Beaver Brigade</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.list}>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js, Node.js</li>
            <li>Python, Java, C</li>
            <li>MongoDB, PostgreSQL</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
