import {useState, useEffect} from 'react'
import { postData } from '../data/postData'
function usePost({pageNumber}) {

    const [page, setPage] = useState(pageNumber)
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    {/* useEffect to handle  */}

    console.log("rundered", posts)

    
    

    // Get data from api
    //TODO FETCH DATA FROM api
    useEffect(() => {
        setLoading(true)
        setError(false)
        try {
            console.log("runned")
            const temp = [...posts, ...postData];
            setPosts(temp)
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
