import UserService from './UserService';

const ViewUsers = () => {
  const users = UserService.getUsers(); 

  return (
    <div>
      <h2>View All Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Category</th>
            <th>Technology</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.category}</td>
              <td>{user.technology && user.technology.join(', ')}</td>
              <td>
                {user.profilePicture && (
                  <img
                    src={URL.createObjectURL(user.profilePicture)}
                    alt="Profile"
                    style={{ width: '50px' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );

  function handleConfirm() {
    console.log('Records saved');
  }
};

export default ViewUsers;
