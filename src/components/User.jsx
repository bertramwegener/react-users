import { useEffect, useState } from "react";
export default function User({ user }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="user-card">
      <img src={user.image} />
      <h2>{user.name}</h2>

{
  showDetails && <div>{
    <div>
      <p>Mail: {user.mail}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <button onClick={() => setLikes(0)}>Reset likes</button>
    </div>}
  </div>
}
  
      <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Skjul" : "Vis"} detaljer</button>
    </div>
  );
}
