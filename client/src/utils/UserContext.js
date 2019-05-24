import React from 'react';

const UserContext = React.createContext();

export class UserProvider extends React.Component {
    state = {
        currentUser: null
    }

    onLogin = (currentUser) => {
        console.log(currentUser);
        this.setState({
            currentUser
        })
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