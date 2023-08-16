import "./FollowCard.css";

export function FollowCard({children, userName, isFollowing }) {
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
        <button className="test-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
