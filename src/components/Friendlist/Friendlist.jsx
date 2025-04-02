import FriendListItem from "../FriendlistItem/FriendlistItem"
import s from '../Friendlist/Friendlist.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={s.wrapper}> {
            friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />

                </li>

            )
            
        )}
</ul>

    )
}
export default FriendList;
