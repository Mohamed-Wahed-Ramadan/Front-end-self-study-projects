import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11,}$/;

    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'يجب أن يتكون الرقم من 11 رقم على الأقل';
    if (!emailRegex.test(formData.email)) newErrors.email = 'البريد الإلكتروني غير صالح';
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
     const templateParams = {
  from_name: formData.name,
  phone: formData.phone,
  user_email: formData.email,  // خلي بالك اسمها كده في الـ template
  message: formData.message,
  subject: "New message from your portoflio   " // أو ممكن تخليها ديناميكية لو حبيت
};

      emailjs.send(
        'service_0of5bev',
        'template_oyyme7i',
        templateParams,
        'DGeDlkpkremAshZ9G'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div name="Contact">
      <footer>
        <section className="contact container">
          <p className="con-p">Let's contact</p>
          <p className="con-p">You can send mail for me from here</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                pattern="\d*"
                inputMode="numeric"
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Enter your mail"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows="5"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            
            <div className='div-btnn'>
                <button
              type="submit"
              className="btnn "
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
            </button>
            </div>
          </form>
        </section>  
        
        <div className="con-inf">
          <p className="my-name">Eng: Mohamed Wahed Ramadan</p>
          <p><i className="bi bi-person-badge fs-4"></i> Egypt - Cairo</p>
          <p><i className="bi bi-telephone fs-4"></i> (+20) 01123002663</p>
          <p><i className="bi bi-envelope fs-4"></i> mohamed.wahed.work@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mohamed-wahed-ramadan/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin fs-1 mx-2"></i>
            </a>
            <a href="https://www.facebook.com/mhmd.whyd.168757/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook fs-1 mx-2"></i>
            </a>
            <a href="https://github.com/Mohamed-Wahed-Ramadan" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-1 mx-2"></i>
            </a>
          </div>
        </div>
        
        <div className="i1">
          <div className="i2">
            <img src="./img/wahed.jpg" alt="mohamed wahed" loading="lazy"/>
          </div>
        </div>
      </footer>
      
      <div className="hr">
        <hr className="container"/>
        <p className="ppp">Eng: Mohamed Wahed Ramadan. All rights reserved. &copy;</p> 
      </div>
    </div>
  );
}

export default Contact;