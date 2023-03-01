import React from 'react'
import styled from "styled-components"
import Post from "./Post"
import InputBox from "./InputBox"



function Feed() {

    

  return (
    <FeedContainer>
      <FeedMain>
        <InputBox />
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

    padding: 40px;
`



