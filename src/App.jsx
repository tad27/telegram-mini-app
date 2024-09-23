import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();


  return (
    <>
      <div>
        <a href="https://tokenminds.co" target="_blank">
          <img
            src={`https://framerusercontent.com/images/7Fjd4JhBn4XdPoBAztnI31U.webp`}
            className="logo"
            alt="Tokenminds logo"
          />
        </a>
      </div>
      Hello I'm Tad, Welcome to my first <h1>telegram mini app.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         <button className="primary" onClick={() => navigate('/contact', {replace: true})}>
          Contact Me
        </button>
      </div>
      <div>
        <p>
          Click{" "}
          <a
            href="https://docs.ton.org/develop/dapps/telegram-apps/app-examples"
            target="_blank"
          >
            here
          </a>{" "}
          to learn more.
        </p>
      </div>
    </>
  );
}

export default App;
