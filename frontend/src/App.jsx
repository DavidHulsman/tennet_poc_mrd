import logo from "./logo.svg";
import styles from "./App.module.css";
import { Routes, Route, Link } from "@solidjs/router";
import InsertEntity from "./InsertEntity";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <nav>
          <Link class={styles.link} href="/insert">Insert entity</Link><br />
          <Link class={styles.link} href="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/insert" component={InsertEntity} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
