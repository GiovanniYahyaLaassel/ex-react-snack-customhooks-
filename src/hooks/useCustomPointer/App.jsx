import useCustomPointer from "./useCustomPointer";
import styles from "./styles/CustomPointer.module.css";

function App() {
    const customPointer = useCustomPointer("🔥");

    return(
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      <div ref={customPointer} className={styles.pointer}></div>
    </div>
    )
}

export default App;