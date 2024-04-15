import Skeleton from 'react-loading-skeleton'

function SkeletonCard() {
    return (
        <div className='post-card'>
            <h2 className='title'>{<Skeleton />}</h2>
            <p className='post'><Skeleton count={3}/></p>
            <p className='controls'>
                <Skeleton width="70px"/>
            </p>
        </div>
    )
}

export default SkeletonCard