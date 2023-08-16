import "./App.css";
import { FollowCard } from "./FollowCard";

export function App() {
  return (
    <section className="App">
      <FollowCard isFollowing={true} userName="omidnikrah">
        Gran
      </FollowCard>
      <FollowCard isFollowing={false} userName="omidnikrah">
        Torino
      </FollowCard>
   
    </section>
  );
}
