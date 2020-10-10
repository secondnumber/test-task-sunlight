import Head from 'next/head';
import styles from './MainLayout.module.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export function MainLayout({ children, name }) {
  const makeShortName = (name) => {
    const nameArr = name.split(' ');
    const shortName = `${nameArr[0]} ${nameArr[1].charAt(0)}.`;
    return shortName;
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Test task for Sunlight company</title>
      </Head>
      <header className={styles.header}>
        <section className={styles.menu}>
          <NotificationsNoneIcon style={{ fontSize: 24, marginRight: 20 }} />
          <div className={styles.stroke}></div>
          <div className={styles.icon}></div>
          <div className={styles.name}>{makeShortName(name)}</div>
        </section>
        <section className={styles.title}>
          <h2 className={styles.label}>ЛИЧНЫЙ ПРОФИЛЬ</h2>
          <p>Главная / Личный профиль</p>
        </section>
      </header>
      <main>{children}</main>
    </div>
  );
}
