import {Link} from 'react-router-dom';
import error404 from '../assets/404.jpg'
import useTitle from '../hooks/useTitle'


function PageNotFound() {
    useTitle("404&Page Not Found")
    return (
        <section className='page-not-found'>
            <h3>404 Page Not Found</h3>
            <img src={error404} alt="error 404" />
            <Link to='/'>
                <button className='btn'>Go Home Page</button> 
            </Link>
        </section>
    )
}

export default PageNotFound