import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2> Get In Touch</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        aperiam.
      </p>
      <div className="container contact__container">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>{contact.icon}</i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
