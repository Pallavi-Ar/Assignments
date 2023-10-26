import React, { useState } from 'react';
import UserService from './UserService';
import { Button } from 'react-bootstrap';
import '../../css/assignment2.css';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    category: '',
    technology: [],
    profilePicture: null,
  });
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? [...user.technology] : value;

    if (type === "checkbox") {
        if (checked) {
        newValue.push(value); 
        } else {
        newValue = newValue.filter((item) => item !== value);
        }
    }

    setUser({ ...user, [name]: newValue });
    setErrors({ ...errors, [name]: '' });
  };

  const handlePreview = () => {
    const newErrors = {};

    if (!user.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(user.name)) {
      newErrors.name = 'Only letters and spaces are allowed';
    } else if (user.name.length < 2) {
      newErrors.name = 'Minimum length should be 2';
    } else if (user.name.length > 30) {
      newErrors.name = 'Maximum length allowed is 30';
    }

    if (!user.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!user.email) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)
    ) {
      newErrors.email = 'Invalid email format';
    }

    if (!user.mobile) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^[6-9]\d{9}$/.test(user.mobile)) {
      newErrors.mobile = 'Invalid Indian mobile number';
    }

    if (!user.category) {
      newErrors.category = 'Category is required';
    }

    if (user.technology.length === 0) {
      newErrors.technology = 'Select at least one technology';
    }

    if (
      user.profilePicture &&
      !['image/jpeg', 'image/jpg', 'image/png'].includes(
        user.profilePicture.type
      )
    ) {
      newErrors.profilePicture =
        'Only JPEG, JPG, and PNG file types are allowed';
    }

    if (Object.keys(newErrors).length === 0) {
      setIsPreviewing(true);
    } else {
      setErrors(newErrors);
      setIsPreviewing(false);
    }
  };

  const handleSubmit = () => {
    UserService.saveUser(user);
    setIsPreviewing(false);
  };

  const handleCancel = () => {
    setIsPreviewing(false);
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleInputChange}
          />
          <span className="error">{errors.name}</span>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div role="group" aria-labelledby="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === 'male'}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === 'female'}
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>
          <span className="error">{errors.gender}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={user.mobile}
            onChange={handleInputChange}
          />
          <span className="error">{errors.mobile}</span>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            onChange={handleInputChange}
            value={user.category}
          >
            <option value="">Select category</option>
            <option value="General">General</option>
            <option value="SC/ST">SC/ST</option>
            <option value="OBC">OBC</option>
          </select>
          <span className="error">{errors.category}</span>
        </div>

        <div className="form-group">
          <label>Technology</label>
          <div role="group" aria-labelledby="technology-group">
            <label>
              <input
                type="checkbox"
                name="technology"
                value="C"
                onChange={handleInputChange}
              />
              C
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                value="C++"
                onChange={handleInputChange}
              />
              C++
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                value="Java"
                onChange={handleInputChange}
              />
              Java
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                value="Python"                
                onChange={handleInputChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                value="Javascript"
                onChange={handleInputChange}
              />
              Javascript
            </label>
          </div>
          <span className="error">{errors.technology}</span>
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={(event) => {
              setUser({ ...user, profilePicture: event.target.files[0] });
              setErrors({ ...errors, profilePicture: '' });
            }}
          />
          <span className="error">{errors.profilePicture}</span>
        </div>

        <Button type="button" variant='primary' onClick={handlePreview}>
          Preview
        </Button>
      </form>

      {isPreviewing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Preview</h3>
            <ul>
              <li>Name: {user.name}</li>
              <li>Gender: {user.gender}</li>
              <li>Email: {user.email}</li>
              <li>Mobile: {user.mobile}</li>
              <li>Category: {user.category}</li>
              <li>Technology: {user.technology && user.technology.join(', ')}</li>
              {user.profilePicture && (
                <li>
                  Profile Picture: {user.profilePicture.name} (
                  {user.profilePicture.type})
                </li>
              )}
            </ul>
            <Button variant='success' onClick={handleSubmit}>Submit</Button>
            <Button variant='secondary' onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
