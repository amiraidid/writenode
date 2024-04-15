import { auth, db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore';

const PostCard = ({post, toggle, setToggle}) => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    const {id, title, description, author} = post;

    function handleDelete () {
        const document = doc(db, "posts", id);
        deleteDoc(document);
        setToggle(!toggle)
    }

    return (
        <div className='post-card'>
            <h2 className='title'>{title}</h2>
            <p className='post'>{description}</p>
            <p className='controls'>
                <span className='author'>{author.name}</span>
                {isAuth && (author.id === auth.currentUser.uid) && <span className="delete" onClick={handleDelete}><i className="bi bi-trash-fill"></i></span>}
                
            </p>
        </div>
    )
}

export default PostCard