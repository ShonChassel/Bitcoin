import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onRemoveContact}) {


    return (
        <section className="contact-list simple-cards-grid">
            {contacts.map(contact => <ContactPreview  key={contact._id}  contact={contact} onRemoveContact={onRemoveContact} />
            )}
        </section>
    )
}