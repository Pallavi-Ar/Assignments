const users = [];

const saveUser = (user) => {
  users.push(user);
};

const getUsers = () => {
  return users;
};

export default {
  saveUser,
  getUsers,
};
