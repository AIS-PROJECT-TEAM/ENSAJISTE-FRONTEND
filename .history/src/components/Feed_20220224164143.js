import React from 'react'
import styled from "styled-components"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        Main Section
      </FeedMain>
      <FeedWidget>
        Widget Section
      </FeedWidget>
    </FeedContainer>
  )
}

export default Feed



const FeedContainer = styled.div`
    display: flex;
    width: 100%;
    margin-right: 5px;
`

const FeedMain = styled.section`
background-color: blue;
    flex: .6;
`
const FeedWidget = styled.section`
    flex: .4;
    background-color:red;
`