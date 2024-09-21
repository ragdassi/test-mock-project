import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQFcya7jebNo2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724012519952?e=2147483647&v=beta&t=eTR6xwLbsXt6cUCogxfQUG1pujj0Gub6ns2h_sl4aXI" alt="Ryan Agdassi" className={styles.profilePic} />

        <h1 className={styles.name}>Ryan Agdassi</h1>
        <h2 className={styles.title}>Tech Advisor at Hack4Impact-Cal Poly</h2>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.about}>
            Ryan Agdassi is a computer science student at California Polytechnic State University - San Luis Obispo. 
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <ul className={styles.list}>
            <li>Tech Advisor - Hack4Impact</li>
            <li>Tech Lead - Hack4Impact, Go See Foundation</li>
            <li>Software Developer - Hack4Impact, Partners in Equestrian Therapy</li>
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
