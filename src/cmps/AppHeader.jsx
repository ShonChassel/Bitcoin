import { Component } from "react";
import { UserInfo } from "../cmps/UserInfo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userService } from "../services/user-service";
import { NavLink, withRouter } from "react-router-dom";
import { UserMenuModal } from "./UserMenuModal";
import { ContactFilter } from "./ContactFilter";
import { loadContact, setFilterBy,onSearchOpen } from "../store/actions/contact.actions";

class _AppHeader extends Component {
    state = {
        user: null,
        openMenu: false,
    };

    componentDidMount() {
        this.loadUser();
    }
    componentWillUnmount() {
        this.props.onSearchOpen(false)
    }
    

    loadUser = async () => {
        try {
            const user = await userService.getUser();
            console.log(user);
            this.setState({ user });
        } catch (err) {
            console.log("err:", err);
        }
    };

    onBack = () => {
        console.log(this.props);
        this.props.history.push("/");
    };

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy);
        this.props.loadContact();
    };

    onOpenMenu = () => {
        const { openMenu } = this.state;
        if (!openMenu) {
            this.setState({ openMenu: true });
        } else {
            this.setState({ openMenu: false });
        }
        // this.props.history.push("/");
    };

    render() {
        const { user, openMenu } = this.state;
        const { filterBy, onSearch } = this.props;
        if (!user) return <div>Loading...</div>;
        return (
            <div>
                <header className="app-header2 "></header>

                <header className="app-header container">
                    <section className="logo-container">
                        <img
                            onClick={this.onBack}
                            src="../imgs/logotop.svg"
                        ></img>
                    </section>
                    {onSearch && (
                        <ContactFilter
                            onChangeFilter={this.onChangeFilter}
                            filterBy={filterBy}
                        />
                    )}
                    <UserInfo user={user} onOpenMenu={this.onOpenMenu} />
                </header>
                {openMenu && <UserMenuModal user={user} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filterBy: state.contactModule.filterBy,
    onSearch: state.contactModule.onSearch,
});

const mapDispatchToProps = {
    loadContact,
    setFilterBy,
    onSearchOpen,
    // spendBalance
};

export const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(_AppHeader));
