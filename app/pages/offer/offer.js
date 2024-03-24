import React from 'react'

import { Container, ContainerFluid, Heading } from '../../compoenents/containers/containers'

import { offersData } from './offersData'

import {LimitedText} from './limitedText'

const Offer = () => {
  return (
    <ContainerFluid id={"offer"} style={"bg-white offerWrap"}>
    <Container style={"offer"}>
      <div className='row'>
        <div>
          <Heading>Vaše ideje pretvaramo u stvarnost</Heading>
        </div>
        {
          offersData !== null && offersData.map((item,key)=>(
            <div key={key} className='col-12 col-sm-6 col-lg-3'>
              <div className="card text-center border-0">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className='d-flex rounded-circle border border border-1 p-4 mx-auto flex-row card_iconWrap'>
                  {/* <div className='card_iconCircle'> */}
                  {item.icon}
                  {/* </div> */}
                </div>
                <div className="card-body">
                  <h5 className="card-title my-3">{item.title}</h5>
                  {/* {item.desc} */}

                    {/* {LimitedText(item.desc)} */}
                    <LimitedText text={item.desc}/>
                      {/* {console.log(item.desc)} */}
                </div>
              </div>
            </div>
          ))
        }
        
      </div>

    </Container>
    </ContainerFluid>
  )
}

export default Offer