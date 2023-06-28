import { useEffect, useState } from "react";

function App() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setServerData(data));
  }, []);

  return (
    <div>
      Data:
      {serverData.map((data, index) => (
        <p key={index}>
          {data.id +
            " " +
            data.first_name +
            " " +
            data.last_name +
            " " +
            data.age +
            " " +
            data.birth_data +
            " " +
            data.team}
        </p>
      ))}
    </div>
  );
}

export default App;
