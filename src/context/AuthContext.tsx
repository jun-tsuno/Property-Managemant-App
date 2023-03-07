'use client';
import { createContext, useState } from 'react';
import { browserSessionPersistence, onAuthStateChanged, setPersistence, User } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { AuthType } from '@/types/types';

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthContextProvider = ({ children }: any): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  // setPersistence(auth, browserSessionPersistence);

  onAuthStateChanged(auth, (currUser) => {
    if (currUser) {
      setUser(currUser);
    } else {
      setUser(null);
    }
  });

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
