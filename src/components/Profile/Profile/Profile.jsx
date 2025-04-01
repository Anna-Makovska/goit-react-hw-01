import s from '../Profile/Profile.module.css'
const Profile = ({ name, tag, location, image, stats }) => {  
  return (  
    <div className={s.wrapper}>  
      <div className={s.avatar}>  
              <img src={image} width={200} alt="User avatar" />  
        <p className={s.username}>{name}</p>  
        <p className={s.nickname}>@{tag}</p>  
        <p className={s.location}>{location}</p>  
      </div>  

      <ul className={s.list}>  
        <li className={s.item}>  
          <span>Followers</span>  
          <span>{stats.followers}</span>  
        </li>  
        <li className={s.item}>  
          <span>Views</span>  
          <span>{stats.views}</span>  
        </li>  
        <li className={s.item}>  
          <span>Likes</span>  
          <span>{stats.likes}</span>  
        </li>  
      </ul>  
    </div>  
  );  
};  




export default Profile;  