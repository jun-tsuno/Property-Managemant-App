import { getAuth } from 'firebase/auth';

const isAuthenticated = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;
