import { useState } from "react";
import "./App.css";

export function FollowCard({ children, userName, initialIsFollowing }) {
  /* estados del useState y lo que devuelve,manera larga y no buena practica, la buena es la de abajo.
const state = useState(false)
const isFollowing = state[0]
const setIsFollowing = state[1]*/

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "test-followCard-button is-following"
    : "test-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="test-followCard">
      <header className="test-followCard-header">
        <img
          className="test-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/dribbble/${userName} `}
        />
        <div className="test-followCard-info">
          <strong>{children}</strong>
          <span className="test-followCard-infoUserName">{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
