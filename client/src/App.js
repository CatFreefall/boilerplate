import { useEffect, useState } from "react";

function App() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setServerData(data));
  }, []);

  return (
    <div>
      Data:
      {typeof serverData.users === "undefined" ? (
        <p>Server data not loaded</p>
      ) : (
        serverData.users.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
}

export default App;
