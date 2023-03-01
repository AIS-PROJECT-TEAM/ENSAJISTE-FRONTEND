import {useState, useEffect} from 'react'
import { postData } from '../data/postData'
function usePost({pageNumber}) {

    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    {/* useEffect to handle  */}

    console.log("rundered")

    
    

    // Get data from api
    //TODO FETCH DATA FROM api
    useEffect(() => {
        console.log("runned")
        setLoading(true)
        setError(false)
        try {
            const temp = [...posts, ...postData];
            console.log(temp)
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
