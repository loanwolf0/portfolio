import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label> Your Name</label>
        <input type="text" />

        <label> Your Email</label>
        <input type="email" />
        <label> Your Subject</label>
        <input type="text" />
        <label> Your Message</label>
        <textarea type="text" rows="6" placeholder="type your message" />

        <button className="btn"> Submit</button>
      </form>
    </div>
  );
};
export default Form;
