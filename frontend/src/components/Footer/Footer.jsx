
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import { AiFillYoutube ,AiFillGithub,AiFillInstagram} from 'react-icons/ai';


const socialLinks =[{
  path:'https://www.youtube.com/',
  icon:<AiFillYoutube className='group-hover:text-white w-4  '/>,
},

{
  path:'https://www.linkedin.com/',
  icon:<RiLinkedinFill className='group-hover:text-white w-4 '/>,
},
{
  path:'https://www.github.com/',
  icon:<AiFillGithub className='group-hover:text-white w-4  '/>,
},
{
  path:'https://www.instagram.com/',
  icon:<AiFillInstagram className='group-hover:text-white w-4  '/>,
},
];

const quickLinks01 = [
  {
    path:'/home',
    display:'Home',
  },
  {
    display:'About Us',
    path:'/',
  },
  {
    display:'Services',
    path:'/services',
  },
  {
    display:'Blog',
    path:'/',
  },
 
];

const quickLinks02 = [
  {
    path:"/find-a-doctor",
    display:"Find a Doctor",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/",
    display:"Find a Location",
  },
  {
    path:"/",
    display:"Get a Option",
  }];

const quickLinks03 = [
    {
      path:"/",
      display:"Donate",
    },
    {
      path:"/Contact",
      display:"Contact us",
    },
    ];

const Footer = () => {
  const year = new Date().getFullYear();
  return ( <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md'>
      <div>
      <img src={logo} alt="" />


      <p className='text-[15px leading-7 font-[400] text-textColor mt-4]'>
        Copyright @ {year} developed with ❤ by medimate all rights reserved.
      </p>


      <div className='flex items-conter gap-3 mt-4'>
        {socialLinks.map((link,index)=><Link to={link.path} key={index} className='w-9 h-9 border-solid border-[#18141E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>{link.icon}</Link>)}
              
      <div><h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '> Quick Links</h2>
      <ul>
        {
          quickLinks01.map((item,index)=> (
          <li key={index} className='mb-4'>
          <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
            {item.display}
          </Link>
          </li>))
        }</ul>
        </div>


        <div><h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '> Support</h2>
      <ul>
        {
          quickLinks03.map((item,index)=> (
          <li key={index} className='mb-4'>
          <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
            {item.display}
          </Link>
          </li>))
        }
        </ul>

        </div>
    <div>
      <h2 className='text-[20px] leading-[30px] font-[700] mb-6  text-headingColor'>Quick Link 1</h2>
     <ul>
      {quickLinks01.map((item,index)=> <li key={index} className='mb-4'> <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'> </Link>{item.display}</li>)}
     </ul>

    </div>



      </div>
    </div>

{/* ====================================================================================================== */}

    <div>
      <h2 className='text-[20px] leading-[30px] font-[700] mb-6  text-headingColor'>Quick Link 2</h2>
     <ul>
      {quickLinks02.map((item,index)=> <li key={index} className='mb-4'> <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'> </Link>{item.display}</li>)}
     </ul>

    </div>


    <div>
      <h2 className='text-[20px] leading-[30px] font-[700] mb-6  text-headingColor'>Quick Link 3</h2>
     <ul>
      {quickLinks03.map((item,index)=> <li key={index} className='mb-4'> <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'> </Link>{item.display}</li>)}
     </ul>

    </div>

    </div>
    </div>
  </footer>
 ) ;
};

export default Footer;


