import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Account from '../Account';
import './MyAccount.css';

const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (!token || !storedUser) {
      navigate('/account/login');
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      console.error('Error parsing user:', e);
    }
  }, [navigate]);

  const handleLogout = () => {
  localStorage.removeItem('token');  // removes the saved auth token
  localStorage.removeItem('user');   // removes the saved user data
  navigate('/shop');        // redirects the user back to the login page
};


  return (
    <Account>
      <div className="order__history__container">
        <div className="order__history">
          <div className="order__history__header">Order History</div>
          <div className="order__history__detail">You have not placed any orders yet</div>
        </div>
      </div>

      <div className="account__details__container">
        <div className="account__details__header">
          <div className="details__header">Account Details</div>
          <button className="logout__action" onClick={handleLogout}>
  Logout
</button>

        </div>
        <div className="account__details">
          <div className="account__holder__name">
            {user.firstName} {user.lastName}
          </div>
          <div className="account__holder__email">{user.email}</div>
          <div className="manage__account__action">
            <Link to="/account/manage">Manage account</Link>
          </div>
        </div>
      </div>
    </Account>
  );
};

export default MyAccount;
