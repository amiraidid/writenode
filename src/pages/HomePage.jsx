import { useEffect, useRef, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config'
import {PostCard, SkeletonCard} from '../components'
import useTitle from '../hooks/useTitle'

function HomePage() {

    const [toggle, setToggle] = useState(false)
    const [posts, setPosts] = useState(new Array(3).fill(false));
    useTitle("Home")
    const postRef = useRef(collection(db, "posts"));

    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postRef.current)
            setPosts(data.docs.map((document) => (
                {...document.data(), id: document.id})
            ))
        }
        getPosts();
    }, [postRef ,toggle])


    return (
        <section>
            {
                posts.map((post, index) => (
                    post ? (
                        <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>
                    ) : (<SkeletonCard key={index}/>)
                    
                ))
            }
        </section>
    )
}

export default HomePage