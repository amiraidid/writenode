import { addDoc, collection } from "firebase/firestore";
import {db, auth} from '../firebase/config';
import { useNavigate } from "react-router-dom";
import useTitle from '../hooks/useTitle'


function CreatePost() {

    const postRef = collection(db, "posts");
    const navigate = useNavigate()
    useTitle("Create-Post")

    async function handleCreatePost(event) {
        event.preventDefault();

        const document = {
            title: event.target.title.value,
            description: event.target.description.value,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        }
        await addDoc(postRef, document)
        navigate("/")
    }

    return (
        <section className="create-post">
            <h1 className='title'>Add New Post</h1>

            <form onSubmit={handleCreatePost}>
                <input type="text" placeholder='Title' name='title' maxLength='50' autoComplete='off' />
                <textarea type='text' name="description" placeholder='Description' maxLength='200'></textarea>
                <button type="submit">Create</button>
            </form>

        </section>
    )
}

export default CreatePost