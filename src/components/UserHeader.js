import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  // ownProps fait référence aux props recues par le composant (this.props)
  user: state.users.find(user => user.id === ownProps.userId)
});

export default connect(mapStateToProps)(UserHeader);
