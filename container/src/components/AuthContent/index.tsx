import auth from 'auth/AuthApp';
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    auth();
  }, []);

  return <div />;
};
