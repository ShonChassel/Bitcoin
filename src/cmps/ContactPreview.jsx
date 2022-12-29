import { Link } from "react-router-dom"


export function ContactPreview({ contact, onRemoveContact}) {
    return (
        <section className="contact-preview">
        
                <Link to={`/contact/${contact._id}`} className="info">
                <img src={contact.img} />
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                </Link>
            
                <section className="actions">
                <button onClick={() => onRemoveContact(contact._id)}>X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
               </section>
            {/* <section className="actions">
                <button onClick={() => onRemoveRobot(robot._id)}>X</button>
            </section> */}
        </section>
    );
}
