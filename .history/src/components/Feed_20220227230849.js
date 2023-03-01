import React, {useRef, useState} from 'react'
import styled from "styled-components"
import Post from "./Post"



function Feed() {

    

  return (
    <FeedContainer>
      <FeedMain>
        <Post />
      </FeedMain>
      <FeedWidget>
        FeedWidget
      </FeedWidget>
    </FeedContainer>
  )
}

export default Feed



const FeedContainer = styled.div`
    display: flex;
    width: 100%;
`

const FeedMain = styled.section`
    flex: .6;
    padding: 10px;
`
const FeedWidget = styled.section`
    flex: .4;
`



