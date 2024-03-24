"use client"
import React from 'react';
import { Container, Heading } from '../../compoenents/containers/containers';

// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';

const About = () => {
    const percentage = 60;

  return (
    <div id='about' className='bg-dark text-light about'>
        <Container>
            <div className='row'>
                <Heading>Preko deset godina sa vama</Heading>
                <div className='col-12 col-lg-6 py-5 about_content'>
                    <p>
                    Naša strast leži u stvaranju funkcionalnih, estetski privlačnih komada namještaja koji savršeno odgovaraju vašem domu ili poslovnom prostoru. Bez obzira tražite li elegantan komad namještaja za dnevnu sobu, praktično rješenje za kuhinju ili elegantan radni prostor za vaš ured, mi smo ovdje da vam pomognemo.
                    </p>
                </div>
                <div className='col-12 col-lg-6 row text-center py-5'>
                    <div className='col'>
                        <p>
                            <strong>Klijenti</strong>
                        </p> 
                        <CircularProgressbar value={percentage} text={`365`} styles={{trail:{stroke:`transparent`},path:{stroke:`#CD3927`},text:{fill:`#CD3927`}}}/>
                    </div>
                    <div className='col'>
                        <p>
                        <strong>Projekti</strong>
                        </p> 
                        <CircularProgressbar value={percentage} text={`583`} styles={{trail:{stroke:`transparent`},path:{stroke:`#CD3927`},text:{fill:`#CD3927`}}}/>
                    </div>
                    <div className='col'>
                        <p>
                        <strong>Iskustvo</strong>
                        </p> 
                        <CircularProgressbar value={percentage} text={`10`} styles={{trail:{stroke:`transparent`},path:{stroke:`#CD3927`},text:{fill:`#CD3927`}}}/>
                    </div>
                    <div className='col'>
                        <p>
                        <strong>Saradnici</strong>
                        </p> 
                        <CircularProgressbar value={percentage} text={`30`} styles={{trail:{stroke:`transparent`},path:{stroke:`#CD3927`},text:{fill:`#CD3927`}}}/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About