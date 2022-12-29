import { Component } from "react";
import { connect } from 'react-redux'
import { ContactList } from "../cmps/ContactList";
import { ContactDetailsPage } from "../views/ContactDetailsPage";
import { ContactFilter } from "../cmps/ContactFilter";
import { contactService } from "../services/contact-service";
import { bitcoinService } from "../services/bitcoin-service";
import { loadContact, removeContact, setFilterBy, onSearchOpen } from '../store/actions/contact.actions'
import { Chart } from "../cmps/Chart";
import { Link } from 'react-router-dom'

 class _BitcoinApp extends Component {
    state = {
        data: null,
        rate: null,
        openContacts: false,
        selectedContactId: null,
        
    };

    componentDidMount() {
        this.props.loadContact()
        this.loadBitcoin();
        this.loadData();
    }

    componentWillUnmount() {
        this.props.onSearchOpen(false)
    }

    // loadContacts = async () => {
    //     try {
    //         const contacts = await contactService.getContacts(this.state.filterBy);
    //         this.setState({ contacts });
    //     } catch (err) {
    //         console.log("err:", err);
    //     }
    // };

    loadBitcoin = async () => {
        try {
            const rate = await bitcoinService.getRate(1);
            this.setState({ rate });
            
        } catch (err) {
            console.log("err:", err);
        }
    };

    loadData = async () => {
        try {
            const data = await bitcoinService.getData();
            this.setState({ data });
        } catch (err) {
            console.log("err:", err);
        }
    };

    openContacts = () => {
        this.setState({ openContacts: true });
        this.props.onSearchOpen(true)
    };

    onSelectContactId = (contactId) => {
        this.setState({ selectedContactId: contactId })
    };

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContact()
    }

    onRemoveContact = async (contactId) => {
        try {
           this.props.removeContact(contactId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const {rate, data, openContacts , selectedContactId,} = this.state;
        const { contacts, filterBy, onSearch } = this.props
        if (!contacts) return <div>Loading...</div>;
        return (
        <div className="App">
                
            <main className="main-container ">
                {!openContacts && <p className="mainsummary">Bitcoin is an innovative payment network and a new kind of money.</p>}
                {!openContacts && <p className="rate">{rate} <span className="rate2"></span></p>}
                
                <div className="main-btn container">
                    {!openContacts && (
                        <>
                            <button onClick={this.openContacts}> Get Contant List </button>
                            <button>Check Chart</button>
                            <button><Link to='/contact/edit'>Add Contant</Link></button>
                        </>
                    )}
                 </div>
                 
                 
             </main>
                <footer className="footer-container"></footer>

                <section className="bitcoin-index container">
                    { !selectedContactId && openContacts &&
                    <>
                    {/* <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy}/> */}
                     <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}/>
                     </>
                     }
                    {selectedContactId && <ContactDetailsPage  contactId={selectedContactId}/>}
                    {/* {data && <Chart data={data}/>}  */}
                </section>
                
        </div>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy,
    onSearch: state.contactModule.onSearch,

})

const mapDispatchToProps = {
    loadContact,
    removeContact,
    setFilterBy,
    onSearchOpen,
    // spendBalance
}

export const BitcoinApp = connect(mapStateToProps, mapDispatchToProps)(_BitcoinApp)