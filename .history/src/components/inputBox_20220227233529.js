import React from 'react'
import styled from "styled-components"
import { Modal , Button } from "react-bootstrap"

function inputBox() {
  return (
    <InputContainer className="shadow">
      <FormContainer>
          <ImageContainer>
            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
          </ImageContainer>
          <Form>
              <textarea  placeholder="What on your mind, Ibrahim" rows="1"></textarea>
          </Form>
      </FormContainer>
      <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </InputContainer>
  )
}

export default inputBox


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

    textarea {
        flex-grow: 1;
        border: none;
        background: #F0F2F5;
        border-radius: 18px;
        height: 40px;
        padding: 5px 10px;

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