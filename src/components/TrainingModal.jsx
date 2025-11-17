import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const TrainingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    course: '',
    duration: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const courses = [
    'Full Stack Development',
    'Front-End Development',
    'Back-End Development',
    'Website Development',
    'Mobile App Development',
    'Software Development'
  ];

  const durations = [
    { value: '1', label: '1 Month' },
    { value: '2', label: '2 Months' },
    { value: '3', label: '3 Months' },
    { value: '4', label: '4 Months' },
    { value: '5', label: '5 Months' },
    { value: '6', label: '6 Months' }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Save to Firebase - using freequotefromwebsite collection for training inquiries
      await addDoc(collection(db, 'freequotefromwebsite'), {
        fullName: formData.fullName,
        mobile: formData.mobile,
        city: formData.city,
        course: formData.course,
        duration: formData.duration,
        type: 'training',
        submittedAt: serverTimestamp(),
        status: 'new'
      });
      
      setSubmitStatus('success');
      alert('Thank you for enrolling! We will contact you soon to confirm your training.');
      setFormData({ fullName: '', mobile: '', city: '', course: '', duration: '' });
      
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 1500);
    } catch (error) {
      console.error('Error submitting training form:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Enroll in Training</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-white mt-2">Start your learning journey with us today!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Enter your city"
            />
          </div>

          {/* Required Training Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Required Training Course <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Duration (in Months) <span className="text-red-500">*</span>
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">Select duration</option>
              {durations.map((duration, index) => (
                <option key={index} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Enroll Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingModal;
