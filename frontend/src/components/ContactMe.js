import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import the icons

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const serviceId = 'service_ewy7nnm';
    const templateId = 'template_w9i05gp';
    const publicKey = 'pik0GG3jNrDBRhcgs';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Abhiram_Gattamneni',
      message: message,
    };

    setLoading(true);

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Dark theme styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '500px', // Reduced form width
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #333',
      borderRadius: '10px',
      backgroundColor: '#1c1f24',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#ffffff',
      fontSize: '36px', // Larger font for highlighted effect
      fontWeight: 'bold', // Bold for emphasis
      letterSpacing: '1.5px', // Slightly increased spacing
    },
    intro: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#cccccc',
      fontSize: '18px',
      fontStyle: 'italic',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    input: {
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #555',
      borderRadius: '5px',
      fontSize: '14px',
      backgroundColor: '#2d2f33',
      color: '#ffffff',
      transition: 'border-color 0.3s',
    },
    textarea: {
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #555',
      borderRadius: '5px',
      fontSize: '14px',
      backgroundColor: '#2d2f33',
      color: '#ffffff',
      resize: 'none',
      transition: 'border-color 0.3s',
    },
    button: {
      padding: '10px',
      backgroundColor: '#6a0dad', // Purple color for send message button
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
    success: {
      color: 'green',
      textAlign: 'center',
      marginTop: '10px',
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
      fontSize: '28px',
      color: '#ffffff',
    },
    linkedinIcon: {
      color: '#0077b5',
    },
    githubIcon: {
      color: '#ffffff',
    },
    instagramIcon: {
      color: '#C13584',
    },
    resumeButton: {
      padding: '10px',
      backgroundColor: '#6a0dad', // Purple color for resume button
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px', // Space below resume button
      transition: 'transform 0.3s', // Transition for the popout effect
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 50, 
        duration: 2 
      } 
    },
  };

  const handleResumeClick = () => {
    // Popout animation when the resume button is clicked
    document.querySelector('#resume-button').style.transform = 'scale(1.1)';
    setTimeout(() => {
      document.querySelector('#resume-button').style.transform = 'scale(1)';
    }, 300);
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Resume Download Button */}
      <a
        href="https://drive.google.com/uc?id=14CXRzozU8h4wrPj94FqcBJmjwDS5Yd_w"  // Google Drive direct download link
        download="My_Resume.pdf"
        onClick={handleResumeClick} // Handle button popout on click
      >
        <motion.button
          id="resume-button"
          style={styles.resumeButton}
          whileTap={{ scale: 1.2 }} // Popout effect with Framer Motion
        >
          Download My Resume
        </motion.button>
      </a>

      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.intro}>Get in Touch with Me and let’s Build Something Great Together</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
      </form>

      {/* Social Media Icons */}
      <div style={styles.icons}>
        <a href='https://www.linkedin.com/in/abhiram-gattamneni-309183258' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin style={styles.linkedinIcon} className='hover:scale-150 transform transition duration-200' />
        </a>
        <a href='https://github.com/abhiram050904' target='_blank' rel='noopener noreferrer'>
          <FaGithub style={styles.githubIcon} className='hover:scale-150 transform transition duration-200' />
        </a>
        <a href='https://www.instagram.com/abhiram050904?igsh=aGo2OWIwdGNyZ3Uy' target='_blank' rel='noopener noreferrer'>
          <FaInstagram style={styles.instagramIcon} className='hover:scale-150 transform transition duration-200' />
        </a>
      </div>
    </motion.div>
  );
};

export default ContactPage;
