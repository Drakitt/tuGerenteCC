import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialStates';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState } >
      <BrowserRouter>
        <Layout>
          {/* <Old /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;