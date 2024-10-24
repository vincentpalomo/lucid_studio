import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbyo6AT7zZkQhcPe4UH32D8i5ZyEew_IKvaGdtM05RyeLJz4sZo1ShvLk1ggAsE5FbVeFQ/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    if (submitted) {
      return <div className="bg-purple-400">Thank you for your message! We will get back to you soon.</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full sm:w-[400px] lowercase 2xl:w-[600px] mx-0 pr-5 sm:pr-0">
      <div className="mb-4 sm:mb-1">
        {/* <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        {/* <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label> */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        {/* <label htmlFor="phone" className="block mb-1 font-medium">
          Phone Number
        </label> */}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        {/* <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label> */}
        <textarea
          id="message"
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
          rows={2}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-off-white text-off-black w-[200px] h-[50px] rounded-[20px] hover:bg-purple-400 mt-2"
      >
        send
      </button>
    </form>
  );
}
