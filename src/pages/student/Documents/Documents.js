import React, {useEffect} from 'react'
import {AiOutlineLike,AiOutlineUser,AiOutlineDownload} from "react-icons/ai"
import {FcDocument} from "react-icons/fc"
import {Card,Card2, CardInfo,Img ,H1,Div,GridContainer,GridContainer1,Div1,Div2} from './StyledDocuments';
import { useAuth } from "../../../Context/AuthContext"

export default function () {

  const {getAccessToken} = useAuth();
  
  
  return (
    <div>
      <button onClick={() => console.log(getAccessToken())}>test</button>
    <H1 className="text-info">Documents</H1>
      <GridContainer1>
        <Card2>
          <Div1>
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Filter par Classe</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Div1>
        </Card2>
        <Card2>
          <Div1>
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Filtrer par Module</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Div1>
        </Card2>
        <Card2>
          <Div1>
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Filtrer par Filiere</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Div1>
        </Card2>
      </GridContainer1>
      <GridContainer>
        <Card>
          {" "}
          <Div>
            <p className="p-2 mb-4 bg-primary text-white">Travaux pratiques</p>
          </Div>
          <Div>
            {/* <Img

                  src="assets/img/courses.png"
                  alt="Card image cap"
                /> */}
            <FcDocument style={{ height: "200px", width: "350px" }} />
          </Div>
          <div class="card-body">
            <h5 class="card-title text-info text-center">Card title</h5>
            <CardInfo className="text-dark"></CardInfo>
          </div>
          <Div1>
            <Div2>
              <AiOutlineLike style={{ height: "15px", fitObject: "cover" }} />
              <div>100001</div>
            </Div2>
            <Div2>
              <AiOutlineUser style={{ height: "15px", fitObject: "cover" }} />
              <div>CHANTIR WADIE</div>
            </Div2>
          </Div1>
          <div class="card-body">
            <Div1>
              <Div2>
                <AiOutlineLike
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Like</div>
              </Div2>
              <Div2>
                <AiOutlineDownload
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Download </div>
              </Div2>
            </Div1>
          </div>
        </Card>
        <Card>
          {" "}
          <Div>
            <p className="p-2 mb-4 bg-primary text-white">Travaux pratiques</p>
          </Div>
          <Div>
            {/* <Img

                  src="assets/img/courses.png"
                  alt="Card image cap"
                /> */}
            <FcDocument style={{ height: "200px", width: "350px" }} />
          </Div>
          <div class="card-body">
            <h5 class="card-title text-info text-center">Card title</h5>
            <CardInfo className="text-dark"></CardInfo>
          </div>
          <Div1>
            <Div2>
              <AiOutlineLike style={{ height: "15px", fitObject: "cover" }} />
              <div>100001</div>
            </Div2>
            <Div2>
              <AiOutlineUser style={{ height: "15px", fitObject: "cover" }} />
              <div>CHANTIR WADIE</div>
            </Div2>
          </Div1>
          <div class="card-body">
            <Div1>
              <Div2>
                
                <AiOutlineLike
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Like</div>
              </Div2>
              <Div2>
                <AiOutlineDownload
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Download </div>
              </Div2>
            </Div1>
          </div>
        </Card>
        <Card>
          {" "}
          <Div>
            <p className="p-2 mb-4 bg-primary text-white">Travaux pratiques</p>
          </Div>
          <Div>
            {/* <Img

                  src="assets/img/courses.png"
                  alt="Card image cap"
                /> */}
            <FcDocument style={{ height: "200px", width: "350px" }} />
          </Div>
          <div class="card-body">
            <h5 class="card-title text-info text-center">Card title</h5>
            <CardInfo className="text-dark"></CardInfo>
          </div>
          <Div1>
            <Div2>
              <AiOutlineLike style={{ height: "15px", fitObject: "cover" }} />
              <div>100001</div>
            </Div2>
            <Div2>
              <AiOutlineUser style={{ height: "15px", fitObject: "cover" }} />
              <div>CHANTIR WADIE</div>
            </Div2>
          </Div1>
          <div class="card-body">
            <Div1>
              <Div2>
                <AiOutlineLike
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Like</div>
              </Div2>
              <Div2>
                <AiOutlineDownload
                  style={{
                    height: "25px",
                    width: "25px",
                    fitObject: "cover",
                  }}
                />
                <div>Download </div>
              </Div2>
            </Div1>
          </div>
        </Card>
      </GridContainer>
    </div>
  );
}
