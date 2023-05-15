export const Profile =  ({username, tag, location, avatar, stats: {label, quantity}} ) => {
    return(
        <div class="profile">
        <div class="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className="stats">
          <li>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
          </li>
          <li>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
          </li>
          <li>
            <span className="label">{label}</span>
            <span className="quantity">{quantity}</span>
          </li>
        </ul>
      </div>
    );
};