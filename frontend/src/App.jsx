import logo from "./logo.svg";
import styles from "./App.module.css";
import { Routes, Route, Link } from "@solidjs/router";
import InsertEntity from "./InsertEntity";
import ShowEntities from "./ShowEntities";
import Home from "./Home";
import ShowEntity from "./ShowEntity";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <nav>
          <Link class={styles.link} href="/">Home</Link><br />
          <Link class={styles.link} href="/insertentity">Insert entity</Link><br />
          <Link class={styles.link} href="/showentities">Show entities</Link><br />
          <Link class={styles.link} href="/entity/1">one entity</Link><br />
        </nav>
      </header>

      <Routes>
        <Route path="/entity" component={ShowEntity} />
        <Route path="/insertentity" component={InsertEntity} />
        <Route path="/showentities" component={ShowEntities} />
        <Route path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
