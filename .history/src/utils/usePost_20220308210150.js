import {useState, useEffect} from 'react'
import { postData } from '../data/postData'
function usePost({pageNumber}) {

    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPost] = useState([])

    {/* useEffect to handle  */}


    setLoading(true)
    setError(false)

    // Get data from api
    //TODO FETCH DATA FROM api
    useEffect(() => {
        try{
            setPost(prevPost => {
                return [...prevPost, postData]
            })
        }catch(error) {
            setError(true)
        }
        setLoading(false)
    }, [pageNumber])


  return {
      loading,
      posts,
      error,
      hasMore
  }
}

export default usePost
