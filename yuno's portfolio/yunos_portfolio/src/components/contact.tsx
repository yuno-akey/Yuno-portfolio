import React from 'react';

const Contact: React.FC = () => {
    return (
      <section id="contact" style={{ padding: '4rem 2rem', backgroundColor: 'rgba(40, 44, 52, 0.7)', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem' }}>Contact</h2>
      <p>お仕事のご依頼・ご相談は、以下のメールアドレスまでご連絡ください。</p>
      <a href="yunoakey@gmail.com" style={{ fontSize: '1.2rem', color: '#007bff', textDecoration: 'none' }}>
        yunoakey@gmail.com
      </a>
    </section>
  );
};

export default Contact;