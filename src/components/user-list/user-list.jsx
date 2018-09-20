import React, {Component} from 'react';

import PropTypes from 'prop-types'

export default class UserList extends Component {
  static propTypes = {
    userList : PropTypes.array.isRequired
  };
  render () {
    return (
      <div></div>
    )
  }
}

