import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Spinner from './components/Spinner';
import Loader from './components/Loader';

import Pages from './pages';
import { initFirebase } from './store/actions';

function App() {
  const firebase = useSelector(state => state.firebase);
  const user = useSelector(state => (state.user && state.user.profile) || {});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initFirebase(dispatch));
  }, [dispatch]);
  return (
    <div className="App">
      {firebase.firebaseInitialized !== false ? (
        <Router basename="/">
          <Loader />
          <Navbar isAuth={!!user.id} />
          <Pages isAuth={!!user.id} />
        </Router>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
