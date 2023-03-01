import React, {useState, useEffect} from 'react'
import { postData } from '../data/postData'
function usePost({pageNumber}) {

    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    {/* useEffect to handle  */}


    
    

    // Get data from api
    //TODO FETCH DATA FROM api
    useEffect(() => {
        setLoading(true)
        setError(false)
        try {
            setPosts(prevPost => {
                return [...prevPost, ...postData]
            })
            console.log(posts)
            setLoading(false)
        }catch(err){
            setError(true)
        }
    }, [pageNumber])


  return {
      loading,
      posts,
      error,
      hasMore
  }

 
}

export default usePost
