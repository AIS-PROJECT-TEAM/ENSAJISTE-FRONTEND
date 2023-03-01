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
`

const FeedMain = styled.section`
    flex: .6;
    padding: 10px;
`
const FeedWidget = styled.section`
    flex: .4;
`