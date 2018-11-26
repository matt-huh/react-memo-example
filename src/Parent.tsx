import * as React from 'react';
import {
  ImNotPure,
  ImPure,
  ImPureWithComparer,
  IUser,
} from './Children';

/**
 * Parent component that contains our pure component
 */
export class Parent extends React.Component<{}, IParentState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.updateUsers = this.updateUsers.bind(this);
    this.state = {
      users: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ],
    };
  }

  public updateUsers() {
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
        ],
      };
    });
  }

  public render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '400px',
        }}
      >
        <span>Open dev console of your browser.</span>
        <button onClick={this.updateUsers}>Click to trigger event</button>
        <ImNotPure users={this.state.users} />
        <ImPure users={this.state.users} />
        <ImPureWithComparer users={this.state.users} />
      </div>
    );
  }
}

interface IParentState {
  users: IUser[];
}
