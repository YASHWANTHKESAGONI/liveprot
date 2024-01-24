// import React, { useState } from 'react';
// import './Home.css';
// import Myphoto from '../../assets/Rightside.jpg';
// import cv from '../../assets/cv.pdf'

// const Home = () => {
 
  
//   return (
//     <div className="home">
//       <div className="left">
//         <h1>Hi, I am <span>Yashwanth</span></h1>
//         <h2>a <span>FullStack</span> Web Developer</h2>
//         <p> I am a passionate and experienced FullStack Web Developer with expertise in front-end and back-end technologies. My journey in the world of web development has equipped me with the skills to create dynamic and responsive web applications. I enjoy solving complex problems and turning ideas into reality using the power of code.</p>
     
//     <button  >My Resume</button>

//       </div>
//       <div className="right">
//         <img className='rightimag' src={Myphoto} alt="Working Photo" />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import './Home.css';
import Myphoto from '../../assets/Rightside.jpg';
import cv from '../../assets/cv.pdf';

const Home = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href attribute to the URL of the PDF file
    link.href = cv;
    
    // Set the download attribute to specify the file name
    link.download = 'Yashwanth_Resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <div className="left">
        <h1>Hi, I am <span>Yashwanth</span></h1>
        <h2>a <span>FullStack</span> Web Developer</h2>
        <p> I am a passionate and experienced FullStack Web Developer with expertise in front-end and back-end technologies. My journey in the world of web development has equipped me with the skills to create dynamic and responsive web applications. I enjoy solving complex problems and turning ideas into reality using the power of code.</p>
     
        <button onClick={handleDownload}>My Resume</button>
      </div>
      <div className="right">
        <img className='rightimag' src={Myphoto} alt="Working Photo" />
      </div>
    </div>
  );
};

export default Home;
