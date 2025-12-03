import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
  });

  // Log when component mounts
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // Log whenever formData changes
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (e) => {
    console.log(`Field changed: ${e.target.name} = ${e.target.value}`);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== FORM SUBMISSION ===");
    console.log("Form submitted:", formData);
    console.log("Timestamp:", new Date().toISOString());
    console.log(
      "Total fields filled:",
      Object.values(formData).filter((val) => val !== "").length
    );
    console.table(formData);

    // Validate and log
    if (!formData.name || !formData.email) {
      console.warn("Warning: Name or Email is missing!");
    } else {
      console.log("✓ Form validation passed");
    }
  };

  return (
    <>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => console.log("Name field focused")}
            onBlur={() => console.log("Name field blurred")}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => console.log("Email field focused")}
            onBlur={() => console.log("Email field blurred")}
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => console.log("Phone field focused")}
            onBlur={() => console.log("Phone field blurred")}
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => console.log("Message field focused")}
            onBlur={() => console.log("Message field blurred")}
          />
        </div>

        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            onFocus={() => console.log("Country field focused")}
            onBlur={() => console.log("Country field blurred")}
          />
        </div>

        <button
          type="submit"
          onClick={() => console.log("Submit button clicked")}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
