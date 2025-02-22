"use client"
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { motion } from 'framer-motion';
import imga from "../assets/img/f1.png";
import klogo from "../assets/img/k-logo.png";
import klarge from "../assets/img/k-head2.png";
import Image from 'next/image';
const Container = styled.div`
`;

const TextWrapper = styled(motion.span)`

.bar-nav{
  position:absolute;
  z-index:99;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f2f0ef;
  border-radius: 20px;
  position: fixed;
  left: 5px;
  top: 10px;
  width: 99%;
}

li {
  float: right;
}
li a:hover{
  color: #7b3911;

}
li a {
  font-family: 'Albert Sans', sans-serif;
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li a:hover:after{

  transform: scaleX(1);
  transform-origin: bottom left;
}



.logo-av{
  position:absolute;
  top: -37.5px;
  left: 5px;
  height: 160px;
  width: 160px;
  
}
.logo-av2{
  position:absolute;
  top: -55px;
  left: 5px;
  height: 160px;
  width: 160px;
  
}

.active{
color: #7b3911;
}
`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link href={'/'}>
         
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
      <div className='bar-nav'>
        <ul>
         {/* <img className="logo-av" src={imga} alt="" /> */}
         <Image src={klarge} alt="" className="hidden sm:block logo-av2 pt-2 pb-2" style={{width:"160px",height:"160px"}}/>
         <Image src={klogo} alt="Kohinoor Mobile Logo" 
className="sm:hidden logo-av pt-2 pb-2" 
style={{ width: "120px", height: "120px" }} 
/> 
        <li><Link href="/about">About</Link></li>
        <li><Link href="https://www.instagram.com/kohinoor_watches.__/">Contact</Link></li>
        {/* <li><Link href="https://www.instagram.com/omkar_jadhav_ninja/">News</Link></li> */}
        <li><Link className="active" href="/">Home</Link></li>
          
          
          
        </ul>
      </div>

        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;


{/* <Image src={klarge} alt="" className="hidden sm:block logo-av pt-2 pb-2" style={{width:"160px",height:"160px"}}/>
<Image src={klogo} alt="Kohinoor Mobile Logo" 
className="block sm:hidden pt-2 pb-2" 
style={{ width: "120px", height: "120px" }} 
/> */}
