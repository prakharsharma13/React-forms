import { useState } from "react";

const FormWithCard = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form fields
  };
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input name="message" type="text" value={formData.message} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
    </form>

    {submittedData && (
        <>
        <h3>Submitted data: </h3>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Message: {submittedData.message}</p>
        </>
    )}
    </>
    )
    
}

export default FormWithCard;