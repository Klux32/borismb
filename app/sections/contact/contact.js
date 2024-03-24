import React from 'react'
import { Container, Heading } from '../../compoenents/containers/containers';
import Image from 'next/image';
// import CntactImg from '../../../public/contact.png';

import { elements } from '@/app/compoenents/forms/formElements';
import Form from '@/app/compoenents/forms/form';

import {socialItems} from "../../compoenents/navbars/navData";

const Contact = () => {
  return (
    <div id='contact' className='contact bg-dark text-light '>
      <Container>
      <Heading>Kontaktirajte nas</Heading>
      {/* <hr/> */}
        <div className='row'>
          <div className='col-12 col-lg-6 my-auto'>
            <i className="bi bi-envelope-fill fs-1"></i>
            <Form details={elements}/>
          </div>
          <div className='col-12 col-lg-6 mt-5 mt-lg-0'>

            <i className="bi bi-whatsapp fs-1"></i>
            <p>+382 69 069 793</p>

            <div className='pt-5'>
            <i className="bi bi-geo-alt-fill fs-1"></i>
            <p>Malo Brdo, Podgorica</p>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11521.965080015443!2d19.29465295!3d43.78341809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758455d364579ff%3A0xe6f1ab7a7ab149c9!2z0JLQuNGI0LXQs9GA0LDQtA!5e0!3m2!1ssr!2sba!4v1711038578438!5m2!1ssr!2sba" width="100%" height="150" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5887.669151640398!2d19.2529446!3d42.4525357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d94cc9960485f%3A0xa5e6bb5c5a381dda!2zTWFsbyBCcmRvLCDQn9C-0LTQs9C-0YDQuNGG0LAsINCm0YDQvdCwINCT0L7RgNCw!5e0!3m2!1ssr!2sba!4v1711228530233!5m2!1ssr!2sba" width="100%" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact