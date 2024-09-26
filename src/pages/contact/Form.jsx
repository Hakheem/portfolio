import React, { useState } from "react";
import { FaArrowRight, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Kindly enter your name";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      formErrors.message = "At least say something 😊";
    }

    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, prepare form data for submission
      const formDataToSubmit = new FormData(event.target);
      formDataToSubmit.append(
        "access_key",
        "2e87e991-b0d8-4c45-8efb-b653ffa7a54c"
      );

      const object = Object.fromEntries(formDataToSubmit.entries());
      const json = JSON.stringify(object);

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });
        const result = await res.json();

        if (result.success) {
          setSubmitted(true);
          console.log("Form successfully submitted", result);
         
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({});
        } else {
          console.error("Form submission failed", result);
        }
      } catch (error) {
        console.error("Error submitting form", error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <div
          className={`flex items-center border rounded-lg px-4 py-2 w-full focus-within:outline-none ${
            errors.name ? "border-red-400" : ""
          }`}
        >
          <FaUser className="mr-2 text-gray-500" />
          <input
            className="flex-grow focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <p className="text-red-400">{errors.name}</p>}
      </div>

      <div>
        <div
          className={`flex items-center border rounded-lg px-4 py-2 w-full focus-within:outline-none ${
            errors.email ? "border-red-400" : ""
          }`}
        >
          <FaEnvelope className="mr-2 text-gray-500" />
          <input
            className="flex-grow focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="text-red-400">{errors.email}</p>}
      </div>

      <div>
        <div
          className={`flex items-start border rounded-lg px-4 py-2 w-full focus-within:outline-none ${
            errors.message ? "border-red-400" : ""
          }`}
        >
          <FaComment className="mr-2 text-gray-500 mt-1" />
          <textarea
            className="flex-grow focus:outline-none"
            name="message"
            id="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {errors.message && <p className="text-red-400">{errors.message}</p>}
      </div>

      <div>
        <button
          className="py-3 px-8 btn2 flex gap-2 items-center rounded-full"
          type="submit"
        >
          Let's Talk <FaArrowRight size={18} />
        </button>
      </div>

      {submitted && (
        <p className="text-green-500">Form submitted successfully!</p>
      )}
    </form>
  );
};

export default Form;
