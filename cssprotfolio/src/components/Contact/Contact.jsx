// import React from 'react'
// import './Contact.css'
// import xicon from '../../assets/xicon.png'
// import linkedin from '../../assets/linkedin.png'
// import email from '../../assets/email.png'
// import githubicon from '../../assets/githubicon.png'

// const Contact = () => {
//   return (
//     <div>
//         <div className="fullbody">
//             <div className="middlebody">
//            <h1>Get in Touch</h1>
//            <h2>Yashwanth</h2>
//             </div>
//             <div className="iconssec">
//           <a href="https://www.linkedin.com/in/yashwanth-k-aa3213222/" target='blank' >
//                     <img src={linkedin} alt='linkedin'/>
            
//             </a>
//             <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target='blank' >  
//                <img src={email} alt='email' />
//              </a>   
//                   <img src={xicon} alt='xicon' />
//                   <img src={githubicon} alt='github' />
//             </div>
// <div className="footer">
//     <p>© 2023 copyright all right reserved</p>
// </div>
//         </div>
//     </div>
//   )
// }

// export default Contact


import React from 'react';
import './Contact.css';
import xicon from '../../assets/xicon.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';
import githubicon from '../../assets/githubicon.png';

const Contact = () => {
  const yourEmail = 'kesagoniyashwanth@gmail.com'; // Replace with your actual email address

  const handleEmailClick = () => {
    window.location.href = `mailto:${yourEmail}`;
  };

  return (
    <div id='contact'>
      <div className="fullbody">
        <div className="middlebody">
          <h1>Get in Touch</h1>
          <h2>Yashwanth</h2>
        </div>
        <div className="iconssec">
          <a href="https://www.linkedin.com/in/yashwanth-k-aa3213222/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <img src={email} alt="Email" onClick={handleEmailClick} style={{ cursor: 'pointer' }} />
         
            <img src={xicon} alt="Twitter" />

          <a href="https://github.com/YASHWANTHKESAGONI" target="_blank" rel="noopener noreferrer">
            <img src={githubicon} alt="GitHub" />
          </a>
        </div>
        <div className="footer">
          <p>© 2023 copyright all right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
