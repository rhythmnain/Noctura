import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });
    const [errors, SetErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors ={};
        if(!formData.name) newErrors.name = "Name is Required!";
        if(!formData.email) newErrors.email = "Email is required!";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventdefault();
        if(validateForm()) {
            console.log("Form submitted:", formData);
        }
    };
    return (
        <form
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
  
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
  
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    );
  };

  export default Form 