import { createContext, useState } from 'react';
import React from 'react';

export type AccountDetails = {
  email: string;
  updateEmail: (email: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<AccountDetails | null>(null);

const UserProvider = ({ children }: Props) => {
  const [email, setEmail] = useState<string>('');

  const updateEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider
      value={{
        email,
        updateEmail,
      }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
