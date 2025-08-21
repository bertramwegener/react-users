import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
      const data = await response.json();

      setUsers(data);
    }
    fetchUsers();
  }, []);


  function User({ name, mail, title, image, id }) {
    // Nu kan du bruge name, mail osv. direkte
    console.log("Enkeltvis props:", name, mail, title, image, id);
  }
  // I App.jsx:
  <User name={user.name} mail={user.mail} title={user.title} image={user.image} id={user.id} />;



  return (
    <div className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map(user => (
          <User key={user.id} name={user.name} mail={user.mail} image={user.image} />
        ))}
      </section>
    </div>
  );
}

export default App;
