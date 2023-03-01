import React, { useState } from 'react'
import styled from "styled-components"
import { Modal , Button } from "react-bootstrap"

function InputBox() {



    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <InputContainer className="shadow">
      <FormContainer>
          <ImageContainer>
            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
          </ImageContainer>
          <Form>
              <div className="input" onClick={handleShow}>
                What on your mind, Ibrahim
              </div>
          </Form>
      </FormContainer>
      <Modal show={show} onHide={handleClose}>
        <PostHeader closeButton>
          <Modal.Title className="post__title">Créer un Post</Modal.Title>
        </PostHeader>
        <PostBody>
          <textarea placeholder="What on your mind, Ibrahim"></textarea>
        </PostBody>
        <PostFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </PostFooter>
      </Modal>
    </InputContainer>
  )
}

export default InputBox


const InputContainer = styled.div`
    width: 100%;
    margin: 25px 0px;
`


const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius:50%;
    object-fit: cover;

    img{
        width: 100%;
    }
`

const Form = styled.form`
    display: flex;
    flex: 1;
    width: 100%;

    .input {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content:start;
        border: none;
        background: #F0F2F5;
        border-radius: 18px;
        min-height: 40px;
        padding: 5px 10px;
        font-size: .8rem;
        color: grey;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    margin: 0 4px;
`

const PostHeader = styled(Modal.Header)`
  border-bottom: none;

  .post__title {
    font-size: 1.3rem;
    flex: 1 !important;
  }
`
const PostBody = styled(Modal.Body)`
  font-size: .8rem;
  color: grey;
  width: 100%;

  textarea {
    width: 100%;
  }
`
const PostFooter = styled(Modal.Footer)`

`