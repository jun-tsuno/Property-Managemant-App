import { getAuth } from 'firebase/auth';

const isAuthenticated = () => {
  const auth = getAuth();
  return auth.currentUser;
};

export default isAuthenticated;
