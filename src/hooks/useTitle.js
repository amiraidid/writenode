import {useEffect} from 'react'

function useTitle(title) {

    useEffect(() => {
        document.title = `${title} + WriteNote`
    }, [title])

    return null
}

export default useTitle