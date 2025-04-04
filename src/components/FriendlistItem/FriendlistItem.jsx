import s from '../Friendlist/Friendlist.module.css'
const FriendListItem = ({ avatar, name, isOnline }) =>
{
    return (
        
<div className={s.itemWrapper}>
            <img src={avatar} alt="Avatar" width={100} />
  <p>{name}</p>
            <p className={isOnline ? s.online : s.offline}>{isOnline ? 'Online' : 'Offline'}</p>
            
</div>

    )
}
export default FriendListItem;