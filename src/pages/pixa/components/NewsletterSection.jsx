import { useState } from 'react';

const NewsletterSection = () => {
  const [result, setResult] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    company: '',
    jobTitle: '',
    industry: '',
    enquiryType: '',
    courseInterests: [],
    otherCourse: '',
    message: '',
    consent: false
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile || !formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!validatePhone(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!formData.country) {
      newErrors.country = 'Country / Location is required';
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Nature of Enquiry is required';
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 50) {
      newErrors.message = 'Message must be at least 50 characters';
    } else if (formData.message.length > 700) {
      newErrors.message = 'Message must not exceed 700 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log("Validation result:", isValid, "Errors:", newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'consent') {
      setFormData(prev => ({ ...prev, consent: checked }));
    } else if (type === 'checkbox' && name.startsWith('course-')) {
      const courseName = name.replace('course-', '');
      setFormData(prev => {
        const interests = prev.courseInterests.includes(courseName)
          ? prev.courseInterests.filter(i => i !== courseName)
          : [...prev.courseInterests, courseName];
        return { ...prev, courseInterests: interests };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    console.log("Form submitted, validating...");
    
    if (!validateForm()) {
      console.log("Validation failed:", errors);
      setResult("Please fix the errors in the form.");
      setIsSubmitting(false);
      return;
    }

    console.log("Validation passed, preparing form data...");

    // Create FormData manually to ensure proper format
    const formDataToSend = new FormData();
    
    // Add web3forms required fields first
    formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formDataToSend.append("subject", "new contact request");
    formDataToSend.append("from_name", formData.name);
    
    // Add botcheck field - MUST be empty string (unchecked) for security
    formDataToSend.append("botcheck", "");
    
    // Add all form fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("company", formData.company || 'N/A');
    formDataToSend.append("job_title", formData.jobTitle || 'N/A');
    formDataToSend.append("industry", formData.industry || 'N/A');
    formDataToSend.append("enquiry_type", formData.enquiryType);
    formDataToSend.append("course_interests", formData.courseInterests.join(', ') || 'None');
    if (formData.otherCourse) {
      formDataToSend.append("other_course", formData.otherCourse);
    }
    formDataToSend.append("message", formData.message);
    
    console.log("FormData entries:", Array.from(formDataToSend.entries()));

    try {
      console.log("Sending request to web3forms...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      console.log("Response received:", response.status);
      const data = await response.json();
      console.log("Response data:", data);
      
      if (data.success) {
        setShowThankYou(true);
        setResult("");
        event.target.reset();
        setFormData({
          name: '',
          email: '',
          mobile: '',
          country: '',
          company: '',
          jobTitle: '',
          industry: '',
          enquiryType: '',
          courseInterests: [],
          otherCourse: '',
          message: '',
          consent: false
        });
      } else {
        // Show more detailed error message
        const errorMsg = data.message || 'Please try again.';
        console.error("Web3Forms error:", errorMsg, data);
        setResult(`Error: ${errorMsg}`);
        
        // If it's a security error, suggest waiting
        if (errorMsg.includes('security') || errorMsg.includes('Could not submit')) {
          setResult(`Security check failed. Please wait a moment and try again. If the problem persists, the form may be temporarily rate-limited.`);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult(`Error: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const courseOptions = [
    'FM Operations & Technical Management',
    'Digital FM & CAFM',
    'HSE & Compliance',
    'Sustainability / ESG',
    'FM Leadership & Management',
    'IFMA FMP / CFM Preparation'
  ];

  return (
    <section id="contact" className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%] max-md:tw-px-2">
      <div className="tw-flex tw-w-full tw-max-w-[900px] tw-place-content-center tw-place-items-center tw-flex-col tw-gap-6 tw-rounded-lg tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-p-8 max-md:tw-max-w-full max-md:tw-p-4">
        {showThankYou ? (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-text-center tw-py-12">
            <div className="tw-w-20 tw-h-20 tw-rounded-full tw-bg-green-500 dark:tw-bg-green-600 tw-flex tw-items-center tw-justify-center tw-mb-4">
              <i className="bi bi-check-lg tw-text-white tw-text-4xl"></i>
            </div>
            <h2 className="tw-text-4xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] max-md:tw-text-3xl">
              Thank You!
            </h2>
            <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-max-w-md">
              We've received your enquiry and will get back to you soon.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="btn tw-mt-4 tw-rounded-lg tw-px-6 tw-py-3 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <>
            <div className="tw-flex tw-flex-col tw-text-center tw-gap-1 tw-w-full">
              <h2 className="tw-text-3xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] max-md:tw-text-2xl">
                Get in Touch
              </h2>
              <div className="tw-text-gray-700 dark:tw-text-gray-300">
                Connect with us to learn more about our programs, consultancy services, or career opportunities.
              </div>
            </div>

            <form onSubmit={onSubmit} className="tw-flex tw-w-full tw-flex-col tw-gap-6">
              {/* Honeypot field for spam protection (must remain empty/unchecked) */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="tw-hidden" 
                style={{ display: 'none', position: 'absolute', left: '-9999px' }} 
                tabIndex="-1" 
                autoComplete="off"
                aria-hidden="true"
              />
              
              {/* Basic Details Section */}
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-pb-2">
                  Basic Details
                </h3>
                
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                      <span>Full Name</span> <span className="required-indicator"></span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 ${
                        errors.name 
                          ? 'tw-border-red-500 dark:tw-border-red-500' 
                          : 'tw-border-gray-600 dark:tw-border-gray-500'
                      } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="tw-text-red-500 tw-text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                      <span>Email Address</span> <span className="required-indicator"></span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 ${
                        errors.email 
                          ? 'tw-border-red-500 dark:tw-border-red-500' 
                          : 'tw-border-gray-600 dark:tw-border-gray-500'
                      } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="tw-text-red-500 tw-text-xs">{errors.email}</p>
                    )}
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                      <span>Mobile Number</span> <span className="required-indicator"></span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 ${
                        errors.mobile 
                          ? 'tw-border-red-500 dark:tw-border-red-500' 
                          : 'tw-border-gray-600 dark:tw-border-gray-500'
                      } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]`}
                      placeholder="+91 1234567890"
                    />
                    {errors.mobile && (
                      <p className="tw-text-red-500 tw-text-xs">{errors.mobile}</p>
                    )}
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                      <span>Country / Location</span> <span className="required-indicator"></span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white ${
                        errors.country 
                          ? 'tw-border-red-500 dark:tw-border-red-500' 
                          : 'tw-border-gray-600 dark:tw-border-gray-500'
                      } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]`}
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="UAE">UAE</option>
                      <option value="KSA">KSA</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="tw-text-red-500 tw-text-xs">{errors.country}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Organisation Details Section */}
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-pb-2">
                  Organisation Details
                </h3>
                
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white">
                      Company / Organisation Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-border-gray-600 dark:tw-border-gray-500 tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white">
                      Job Title / Role
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-border-gray-600 dark:tw-border-gray-500 tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]"
                      placeholder="Enter your job title"
                    />
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-2 md:tw-col-span-2">
                    <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-border-gray-600 dark:tw-border-gray-500 tw-bg-transparent tw-text-[#19300e] dark:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]"
                    >
                      <option value="">Select Industry</option>
                      <option value="Facilities Management">Facilities Management</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Aviation">Aviation</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Enquiry Type Section */}
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-pb-2">
                  Enquiry Type
                </h3>
                
                <div className="tw-flex tw-flex-col tw-gap-2">
                  <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                    <span>Nature of Enquiry</span> <span className="required-indicator"></span>
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    required
                    className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white tw-appearance-none tw-cursor-pointer tw-transition-all tw-duration-200 ${
                      errors.enquiryType 
                        ? 'tw-border-red-500 dark:tw-border-red-500' 
                        : 'tw-border-gray-600 dark:tw-border-gray-500 hover:tw-border-[#19300e] dark:hover:tw-border-[#c1fc75]'
                    } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75] focus:tw-border-[#19300e] dark:focus:tw-border-[#c1fc75]`}
                  >
                    <option value="">Select Enquiry Type</option>
                    <option value="Individual Training / Certification">Individual Training / Certification</option>
                    <option value="Corporate / Group Training">Corporate / Group Training</option>
                    <option value="Custom In-house Program">Custom In-house Program</option>
                    <option value="Consultancy / Project Guidance">Consultancy / Project Guidance</option>
                    <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                  {errors.enquiryType && (
                    <p className="tw-text-red-500 tw-text-xs">{errors.enquiryType}</p>
                  )}
                </div>
              </div>

              {/* Course Interest Section - Only show for Individual or Corporate Training */}
              {(formData.enquiryType === "Individual Training / Certification" || 
                formData.enquiryType === "Corporate / Group Training") && (
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-pb-2">
                    Course Interest (Optional)
                  </h3>
                  
                  <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3">
                    {courseOptions.map((course) => (
                      <label
                        key={course}
                        className="tw-flex tw-items-center tw-gap-3 tw-p-3 tw-rounded-lg tw-border tw-border-gray-600 dark:tw-border-gray-500 tw-cursor-pointer hover:tw-bg-gray-100 dark:hover:tw-bg-gray-900 tw-transition-colors"
                      >
                        <input
                          type="checkbox"
                          name={`course-${course}`}
                          checked={formData.courseInterests.includes(course)}
                          onChange={handleInputChange}
                          className="modern-checkbox tw-w-5 tw-h-5 tw-cursor-pointer"
                        />
                        <span className="tw-text-sm tw-text-[#19300e] dark:tw-text-white">{course}</span>
                      </label>
                    ))}
                  </div>

                  {formData.courseInterests.includes('Other') && (
                    <div className="tw-flex tw-flex-col tw-gap-2 tw-mt-2">
                      <input
                        type="text"
                        name="otherCourse"
                        value={formData.otherCourse}
                        onChange={handleInputChange}
                        className="input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-border-gray-600 dark:tw-border-gray-500 tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]"
                        placeholder="Please specify other course interest"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Message Section */}
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-border-b tw-border-gray-300 dark:tw-border-gray-700 tw-pb-2">
                  Message
                </h3>
                
                <div className="tw-flex tw-flex-col tw-gap-2">
                  <label className="tw-text-sm tw-font-medium tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                    <span>Your Message / Requirement</span> <span className="required-indicator"></span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    maxLength={700}
                    className={`input tw-w-full tw-p-3 tw-rounded-lg tw-border tw-bg-transparent tw-text-[#19300e] dark:tw-text-white placeholder:tw-text-gray-500 dark:placeholder:tw-text-gray-400 tw-resize-none ${
                      errors.message 
                        ? 'tw-border-red-500 dark:tw-border-red-500' 
                        : 'tw-border-gray-600 dark:tw-border-gray-500'
                    } focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#19300e] dark:focus:tw-ring-[#c1fc75]`}
                    placeholder="Please describe your requirements (50-700 characters)"
                  />
                  <div className="tw-flex tw-justify-between tw-items-center">
                    {errors.message && (
                      <p className="tw-text-red-500 tw-text-xs">{errors.message}</p>
                    )}
                    <p className={`tw-text-xs tw-ml-auto ${
                      formData.message.length > 700 
                        ? 'tw-text-red-500' 
                        : formData.message.length < 50 && formData.message.length > 0
                        ? 'tw-text-yellow-500'
                        : 'tw-text-gray-500 dark:tw-text-gray-400'
                    }`}>
                      {formData.message.length} / 700 characters (minimum 50)
                    </p>
                  </div>
                </div>
              </div>

              {/* Consent Section */}
              <div className="tw-flex tw-flex-col tw-gap-2">
                <label className="tw-flex tw-items-start tw-gap-3 tw-cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="modern-checkbox tw-mt-1 tw-w-5 tw-h-5 tw-cursor-pointer"
                  />
                  <span className="tw-text-sm tw-text-[#19300e] dark:tw-text-white tw-flex tw-items-center tw-gap-1.5">
                    <span>I agree to be contacted by Our Own FM Academy regarding my enquiry.</span> <span className="required-indicator"></span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="tw-text-red-500 tw-text-xs tw-ml-7">{errors.consent}</p>
                )}
              </div>

              {/* Validation Summary */}
              {Object.keys(errors).length > 0 && (
                <div className="tw-bg-red-50 dark:tw-bg-red-900/30 tw-border tw-border-red-200 dark:tw-border-red-700 tw-rounded-lg tw-p-4 tw-mb-2">
                  <p className="tw-text-red-700 dark:tw-text-white tw-font-semibold tw-mb-2">
                    Please fix the following errors:
                  </p>
                  <ul className="tw-list-disc tw-list-inside tw-space-y-1">
                    {errors.name && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.name}</li>
                    )}
                    {errors.email && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.email}</li>
                    )}
                    {errors.mobile && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.mobile}</li>
                    )}
                    {errors.country && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.country}</li>
                    )}
                    {errors.enquiryType && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.enquiryType}</li>
                    )}
                    {errors.message && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.message}</li>
                    )}
                    {errors.consent && (
                      <li className="tw-text-red-700 dark:tw-text-white tw-text-sm">• {errors.consent}</li>
                    )}
                  </ul>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn tw-w-full tw-rounded-lg tw-py-4 tw-text-lg tw-font-semibold tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02] ${
                  isSubmitting ? 'tw-opacity-50 tw-cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>

              {result && !showThankYou && (
                <div className={`tw-text-center tw-text-sm tw-mt-2 tw-p-3 tw-rounded-lg ${
                  result.includes("Success") 
                    ? "tw-text-green-700 dark:tw-text-green-300 tw-bg-green-50 dark:tw-bg-green-900/30" 
                    : "tw-text-red-700 dark:tw-text-red-300 tw-bg-red-50 dark:tw-bg-red-900/30"
                }`}>
                  {result}
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
