import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import MakeCard from "./components/makeCard/makeCard";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route
            path="/card"
            element={
              <MakeCard FileInput={FileInput} authService={authService} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
