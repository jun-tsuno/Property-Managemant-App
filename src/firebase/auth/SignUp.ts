import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = async (userName: string, email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password).then(() => {
    updateProfile(auth.currentUser!, {
      displayName: userName
    }).catch((error) => {
      alert(`Error ${error.message}`);
    });
  });
};

export default SignUp;
