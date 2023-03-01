import React from 'react'
import styled from "styled-components"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>

      </FeedMain>
      <FeedWidget>

      </FeedWidget>
    </FeedContainer>
  )
}

export default Feed



const FeedContainer = styled.div`
    display: flex;
`

const FeedMain = styled.div`
background-color: blue;
    flex: .6;
`
const FeedWidget = styled.div`
    flex: .4;
    background-color:red;
`