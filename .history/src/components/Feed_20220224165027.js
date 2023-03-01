import React from 'react'
import { Card } from 'react-bootstrap'
import styled from "styled-components"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        <Card>
            <PostHeader>Hello</PostHeader>
            <Card.Body>Body</Card.Body>
            <Card.Footer>Footer</Card.Footer>
        </Card>
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


const PostHeader = styled(Card.Header)`
    background-color: red;
`