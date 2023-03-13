import React from 'react'

import vg from "../assests/2.webp"

import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} 
from 'react-icons/ai'




const Home = () => {
  return (
    <>
    <div className='home' id="home" >
    <main>
        <h1>Zombie Developer</h1>
        <p>Life sucks so be Die and Develop your Dream</p>
    </main>
    </div>



    <div className="home2">
        <img src={vg} alt="graphics" />


        <div>
            <p>
                We are your one and only solution to the tech problems
                you face
                every day. We are leading tech company whose aim is to
                increase the
                problem solving ability in children.
            </p>
        </div>
    </div>


    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p> We are ZOMBIE DEVELOPERS. A Zombie Developer will have excellent problem-solving skills. Often, they will need to have the ability to think outside the box to find solutions to complex problems that are not only creative but efficient. In addition, Zombie Developers must have excellent communication skills to ensure all parties involved are satisfied with the website’s performance, from website development to content management.
            Zombie Developers typically work in teams that include other Developers, Software Developers, Web Designers and IT professionals. However, since they are often at the forefront of new technology, Zombie Developers can work closely with various individuals from different disciplines.
            </p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1 className='brand'>Brands</h1>

            <article>

                <div style={{animationDelay:'0.3s'}}>
                    <AiFillGoogleCircle className='ico'/>
                    <p className='g'>Google</p>
                </div>

                <div style={{animationDelay:'0.5s'}}>
                    <AiFillAmazonCircle className='ico'/>
                    <p className='g'>Amazon</p>
                </div>

                <div style={{animationDelay:'0.7s'}}>
                    <AiFillYoutube className='ico'/>
                    <p className='g'>Youtube</p>
                </div>

                <div style={{animationDelay:'0.1s'}}>
                    <AiFillInstagram className='ico'/>
                    <p className='g'>Instagram</p>
                </div>

            </article>
        </div>
    </div>

    </>
  );
}

export default Home