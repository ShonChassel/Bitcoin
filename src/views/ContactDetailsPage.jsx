import { Component } from "react";
import { Link } from 'react-router-dom'
import { contactService } from "../services/contact-service";

export class ContactDetailsPage extends Component {
    state = {
        contact: null,
    };

    componentDidMount() {
        this.loadContact();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(
            this.props.match.params.id
        );
        this.setState({ contact });
    };

    onBack = () => {
        this.props.history.push("/");
    };

    render() {
        const { contact } = this.state;
        if (!contact) return <div>Loading...</div>;
        return (
            <section className="contact-details">
                <section>
                    <h3>name: {contact.name}</h3>
                </section>
                <section>
                    <h3>email: {contact.email}</h3>
                </section>
                <section>
                    <h3>phone: {contact.phone}</h3>
                </section>
                <button onClick={this.onBack}>Back</button>
            </section>
        );
    }
}
