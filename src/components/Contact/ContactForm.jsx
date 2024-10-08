import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country_code: 'IN',
    mobile_number: '',
    company_name: '',
    reference_links: '',
    project_requirements: '',
    budget: '',
    business_category: '',
    services: [],
  });

  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
          name: '',
          email: '',
          mobile_number: '',
          company_name: '',
          reference_links: '',
          project_requirements: '',
          budget: '',
          business_category: '',
          services: [],
          country_code: 'IN',
        });
      } else {
        if (response.status === 429) {
          setStatus('too_many_requests');
        } else {
          setStatus('error');
        }
      }
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="container-left">
      <div className="form-wrapper">
        <h2 className="form-title">Request for Project Proposal</h2>
        <form id="projectForm" name="projectForm" className="projectForm" onSubmit={handleSubmit}>
          <input type="hidden" name="formType" value="Project Form" />
          <div className="form-group">
            <label className="label-heading">1. Tell us about you and your project</label>
            <input
              type="text"
              className="form-itm"
              placeholder="Full Name *"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              className="form-itm"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="form-row">
              <div className="form-col">
                <select
                  className="form-itm"
                  name="country_code"
                  title="Select Country code"
                  value={formData.country_code}
                  onChange={handleInputChange}
                >
                  <option value="IN(+91)">India (+91)</option>
                  <option value="US(+1)">United States (+1)</option>
                  <option value="CA(+1)">Canada (+1)</option>
                  <option value="GB(+44)">United Kingdom (+44)</option>
                  <option value="AU(+61)">Australia (+61)</option>
                  <option value="DE(+49)">Germany (+49)</option>
                  <option value="FR(+33)">France (+33)</option>
                  <option value="JP(+81)">Japan (+81)</option>
                  <option value="ZA(+27)">South Africa (+27)</option>
                  <option value="RU(+7)">Russia (+7)</option>
                  <option value="BR(+55)">Brazil (+55)</option>
                  <option value="SG(+65)">Singapore (+65)</option>
                  <option value="AE(+971)">United Arab Emirates (+971)</option>
                </select>
              </div>
              <div className="form-col">
                <input
                  type="text"
                  className="form-itm"
                  placeholder="Mobile Phone Number *"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <input
              type="text"
              className="form-itm"
              placeholder="Company Name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-itm"
              placeholder="Share reference links or name."
              name="reference_links"
              value={formData.reference_links}
              onChange={handleInputChange}
            />
            <textarea
              className="form-itm"
              placeholder="Share brief about your project requirement *"
              name="project_requirements"
              value={formData.project_requirements}
              onChange={handleInputChange}
              required
            />
            <div className="form-row">
              <div className="form-col">
                <select
                  className="form-itm"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  title="Select budget"
                >
                  <option>Budget *</option>
                  <option value="less than $1,000">Less than $1,000</option>
                  <option value="$1,000 to $5,000">$1,000 to $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
              <div className="form-col">
                <select
                  className="form-itm"
                  name="business_category"
                  value={formData.business_category}
                  onChange={handleInputChange}
                  required
                  title="Select business category"
                >
                  <option>Your Business Categorizes *</option>
                  <option value="startup">Startup</option>
                  <option value="sme">SME</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="label-heading">2. What Services You are Looking For? *</label>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="webapp"
                name="services"
                value="Web App"
                checked={formData.services.includes('Web App')}
                onChange={handleInputChange}
              />
              <label htmlFor="webapp" className="clabel">
                Web App
              </label>

              <input
                type="checkbox"
                id="mobileapp"
                name="services"
                value="Mobile App"
                checked={formData.services.includes('Mobile App')}
                onChange={handleInputChange}
              />
              <label htmlFor="mobileapp" className="clabel">
                Mobile App
              </label>

              <input
                type="checkbox"
                id="uiux"
                name="services"
                value="UI/UX"
                checked={formData.services.includes('UI/UX')}
                onChange={handleInputChange}
              />
              <label htmlFor="uiux" className="clabel">
                UI/UX
              </label>

              <input
                type="checkbox"
                id="itconsulting"
                name="services"
                value="IT Consulting"
                checked={formData.services.includes('IT Consulting')}
                onChange={handleInputChange}
              />
              <label htmlFor="itconsulting" className="clabel">
                IT Consulting
              </label>

              <input
                type="checkbox"
                id="backend-development"
                name="services"
                value="Back-End Development"
                checked={formData.services.includes('Back-End Development')}
                onChange={handleInputChange}
              />
              <label htmlFor="backend-development" className="clabel">
                Back-End Development
              </label>

              <input
                type="checkbox"
                id="api-development"
                name="services"
                value="API Development"
                checked={formData.services.includes('API Development')}
                onChange={handleInputChange}
              />
              <label htmlFor="api-development" className="clabel">
                API Development
              </label>

              <input
                type="checkbox"
                id="software-testing"
                name="services"
                value="Software Testing"
                checked={formData.services.includes('Software Testing')}
                onChange={handleInputChange}
              />
              <label htmlFor="software-testing" className="clabel">
                Software Testing
              </label>

              <input
                type="checkbox"
                id="other"
                name="services"
                value="Other"
                checked={formData.services.includes('Other')}
                onChange={handleInputChange}
              />
              <label htmlFor="other" className="clabel">
                Other
              </label>
            </div>
            <input
              type="text"
              name="Other Service Name"
              placeholder="Please specify the domain you're looking for"
              id="other-service"
              className="other-service"
            />
          </div>

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
          <div className="btn-container">
            <input type="submit" className="submit-btn" />
        </div>
        </form>
      </div>
    </div>
  );
}
