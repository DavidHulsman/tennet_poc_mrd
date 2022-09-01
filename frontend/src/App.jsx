import styles from './App.module.css';
import CreateEntity from './entity/Creation'
function App() {
  return (
      <div class={styles.App}>
        {/* <body class={styles.body}> */}
          <CreateEntity/>
        {/* </body> */}
      </div>
  );
}

export default App;
