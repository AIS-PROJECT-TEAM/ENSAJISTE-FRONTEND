import {useState} from 'react'
import { postData } from '../data/postData'
function usePost({pageNumber}) {

    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState([])

    {/* useEffect to handle  */}


    setLoading(true)
    setError(false)

    // Get data from api
    //TODO FETCH DATA FROM api
    
    setPost(prevPost => {
        return [...prevPost, postData]
    })
    







  return null;
}

export default usePost
