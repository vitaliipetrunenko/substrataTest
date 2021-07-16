import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './types/app.types';
import { Navbar } from './components/NavSidebar/NavSidebar';
import { Header } from './components/Header/Header';
import { HistorySidebar } from './components/HistorySidebar/HistorySidebar';
import { store } from './store/store';



const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col max-h-screen h-screen box-border">
    <Provider store={store}>
       <Router>
      <Header />
      <div className="flex justify-between flex-grow max-h-93vh">
      <Navbar />
      <Switch>
        {Object.values(routes).map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
        <Route path="*">
          <Redirect to={routes.my_wallet.path} />
        </Route>
      </Switch>
      <HistorySidebar />
      </div>
    </Router>
    </Provider>
    </div>
  );
};

export default App;
