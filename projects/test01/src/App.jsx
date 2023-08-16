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
      <FollowCard isFollowing userName="omidnikrah">
        Masto
      </FollowCard>
      <FollowCard isFollowing userName="omidnikrah">
        Donte
      </FollowCard>
    </section>
  );
}
