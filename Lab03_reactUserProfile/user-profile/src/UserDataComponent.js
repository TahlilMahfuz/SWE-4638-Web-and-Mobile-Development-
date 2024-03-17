import React, { Component } from 'react';
import userData from './user.json';
import './UserDataComponent.css'; 

class UserDataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  handleLoadData = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="user-data-container">
        <h2>User Data</h2>
        {loading ? (
          <p>Loading user data...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {userData.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button className='reload-button' onClick={this.handleLoadData} disabled={loading}>
          Reload
        </button>
      </div>
    );
  }
}

export default UserDataComponent;
