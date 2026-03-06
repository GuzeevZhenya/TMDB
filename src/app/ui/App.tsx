import Header from "../../common/components/Header/Header";
import { Footer } from "../../common/components/Footer/Footer";
import { Routing } from "../../common/routing/routing";
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routing />
      </main>
      <Footer />
    </div>
  );
};