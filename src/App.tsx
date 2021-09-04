import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import MainScreen from './screens/MainScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container style={{ marginTop: 100 }}>
        <Route exact path="/" component={MainScreen} />
      </Container>
    </Router>
  );
};

export default App;
