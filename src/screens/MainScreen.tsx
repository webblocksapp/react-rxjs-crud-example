import React from 'react';
import Card from '../components/Card';

const MainScreen: React.FC = () => {
  return (
    <>
      <Card data={{ name: 'Mauricio', age: 30, detail: { email: 'test@.com', gender: 'male' } }} />
    </>
  );
};

export default MainScreen;
