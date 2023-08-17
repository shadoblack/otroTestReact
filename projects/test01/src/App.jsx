import "./App.css";
import { FollowCard } from "./FollowCard";
import { useState } from "react";

export function App() {
   const [name,setName] = useState('Karen')
  return (
    <section className="App">
      <FollowCard isFollowing={true} userName={name}>
        Gran
      </FollowCard>
      <FollowCard isFollowing={false} userName="omidnikrah">
        Torino
      </FollowCard>

      <button onClick={() => setName('Wilfreed')}>Cambio de nombre</button>
   
    </section>
  );
}
