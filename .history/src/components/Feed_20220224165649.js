import React from 'react'
import { Card } from 'react-bootstrap'
import styled from "styled-components"

function Feed() {
  return (
    <FeedContainer>
      <FeedMain>
        <Card>
            <PostHeader>
                <PostHeaderLeft>
                    Left
                </PostHeaderLeft>
                <PostHeaderRight>
                    Right
                </PostHeaderRight>
            </PostHeader>
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
    border-bottom: none;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostHeaderLeft = styled.div`

`
const PostHeaderRight = styled.div`

`