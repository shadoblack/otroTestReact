import "./App.css";

export function FollowCard({ children, userName, isFollowing }) {
  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "test-followCard-button is-following"
    : "test-followCard-button";
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
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}
