import React from 'react';

const userString = sessionStorage.getItem("user");
console.log(userString);
const initialUser = userString ? JSON.parse(userString) : null;

const UserContext = React.createContext();

export class UserProvider extends React.Component {
    state = {
        currentUser: initialUser
    }

    onLogin = (currentUser) => {
        console.log(currentUser);
        this.setState({
            currentUser
        });
        //save the user object as a string in the session storage
        sessionStorage.setItem("user", JSON.stringify(currentUser));
    }

    onLogout = (currentUser) => {
        this.setState({
            currentUser: null
        })
        sessionStorage.removeItem("user", JSON.stringify(currentUser));
    }

    render() {
        return(
            <UserContext.Provider value={{
                user: this.state.currentUser,
                onLogin: this.onLogin
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContext;