import React from 'react'
import styled from "styled-components"

function inputBox() {
  return (
    <div>
      <FormContainer>
          <ImageContainer>
            <img src="https://www.ibrahimchahboune.com/assets/images/image.JPG" alt="Ibrahim Chahboune" />
          </ImageContainer>
          <Form>
              <input type="text" placeholder="What on your mind, Ibrahim" />
          </Form>
      </FormContainer>
    </div>
  )
}

export default inputBox



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
`

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px;
`