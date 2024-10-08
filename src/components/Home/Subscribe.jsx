import React, { useRef, useState} from 'react'

export default function Subscribe() {

    let formRef = useRef();

    let handleInptFocus = () => {
        formRef.current.style.borderColor = '#c93357'
    }

    const [formData, setFormData] = useState({
        email: '',
    });

    const [status, setStatus] = useState(null);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(import.meta.env.VITE_SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        setStatus('success');
        setFormData({
            email: '',
        });
        }
        else {
        if (response.status === 429) {
            setStatus('too_many_requests');
        } else {
            setStatus('error');
        }
        }
        setTimeout(() => {
        setStatus(null);
        }, 5000);

    } 
    
    catch (error) {
        setStatus('error');
        setTimeout(() => {
        setStatus(null);
        }, 5000);
    }
    };
    
  return (
    <section className="subscribe-section">
        <div className="subscribe-tag" data-aos="zoom-out">
            <div className="tag-text" data-i18n-key="subscribe-now">Subscribe Now</div>
        </div>
        <h2 data-i18n-key="section-header6">Want to get updates ?</h2>
        <p data-i18n-key="subscribe-para">Stay informed with the latest news and exclusive insights, delivered directly to your inbox, ensuring you never miss a thing.</p>
        <form id="subscribe-form" ref={formRef} onSubmit={handleSubmit}>

            <input 
                type="hidden" 
                name="formType" 
                value="Subcribe Form"
            />
            <input 
                type="email" 
                name="email" 
                maxLength="256" 
                placeholder="Enter your email" 
                value={formData.email}
                style={{backdropFilter: "blur(10px)"}} 
                className="subscribe-emailInpt" 
                data-i18n-key="subscribe-email-placeholder" 
                onFocus={handleInptFocus}
                onChange={handleInputChange}
            />
            <button type="submit" className="subscribe-btn">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </form>

        {status === 'success' && (
        <div className="form-success" tabIndex="-1" role="region">
            <div data-i18n-key="contact-form-success">
            Thank you! Your submission has been received!
            </div>
        </div>
        )}
        {status === 'too_many_requests' && (
        <div className="form-fail" tabIndex="-1" role="region">
            <div data-i18n-key="contact-form-failure">
            Too many requests...
            </div>
        </div>
        )}
        {status === 'error' && (
        <div className="form-fail" tabIndex="-1" role="region">
            <div data-i18n-key="contact-form-failure">
            Oops! Something went wrong while submitting the form.
            </div>
        </div>
        )}

        <div className="social-logos">
            <a className="social-btn" href="">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a className="social-btn" href="https://www.linkedin.com/company/stick-on-tech/">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </section>
  )
}
