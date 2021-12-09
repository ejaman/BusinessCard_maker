import "./app.module.css";
import CardMaker from "./components/cardMaker/cardMaker";
import Login from "./components/login/login";

function App() {
  const signInWithGoogle = () => {
    console.log("google");
  };
  const signInWithGithub = () => {
    console.log("github");
  };
  return (
    <>
      <Login signInWithGoogle={signInWithGoogle} />
    </>
  );
}

export default App;
