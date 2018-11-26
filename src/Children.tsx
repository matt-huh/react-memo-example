import * as React from 'react';

/**
 * Stateful function component
 */
export const ImNotPure: React.SFC<IChildProps> = ({ users }) => {
  console.log('ImNotPure is rendered.');
  return (
    <div
      style={{
        border: '1px solid #00d8ff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '400px',
      }}
    >
      <div style={{ width: '100px' }}>ImNotPure</div>
      {
        users.map((user, index) => (
          <div key={index} style={{ display: 'inline' }}>
            {user.name}
          </div>
        ))
      }
    </div>
  );
};

/**
 * Our pure component that will still render...
 */
export const ImPure = React.memo<IChildProps>(
  ({ users }) => {
    console.log('ImPure is rendered.');
    return (
      <div
        style={{
          border: '1px solid #e1ef15',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '400px',
        }}
      >
        <div style={{ width: '100px' }}>ImPure</div>
        {
          users.map((user, index) => (
            <div key={index} style={{ display: 'inline' }}>
              {user.name}
            </div>
          ))
        }
      </div>
    );
  }
);

/**
 * Our pure component that will not render again!
 */
export const ImPureWithComparer = React.memo<IChildProps>(
  ({ users }) => {
    console.log('ImPureWithComparer is rendered.');
    return (
      <div
        style={{
          border: '1px solid #e1ef15',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '400px',
        }}
      >
        <div style={{ width: '100px' }}>ImPure</div>
        {
          users.map((user, index) => (
            <div key={index} style={{ display: 'inline' }}>
              {user.name}
            </div>
          ))
        }
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.users.length !== nextProps.users.length) {
      return false;
    }
    let equal = true;
    prevProps.users.forEach((prevUser, index) => {
      if (prevUser.name !== nextProps.users[index].name) {
        equal = false;
      }
    });
    return equal;
  }
);

interface IChildProps {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
}
