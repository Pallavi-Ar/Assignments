import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import ViewUsers from './ViewUsers';

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users/create">Create User</Link>
            </li>
            <li>
              <Link to="/users/view">View All Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<CreateUser />} />
            <Route path="/users/create" element={<CreateUser/>} />
            <Route path="/users/view" element={<ViewUsers/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
