import {GlobalStyle} from './styles/globalStyle'
import {Provider} from 'react-redux';
import store from './redux-store/store'
import MainLayout from './modules/Layout/MainLayout'
import {Router, BrowserRouter} from 'react-router-dom'
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router history={history}>
          <BrowserRouter>
            <MainLayout />
          </BrowserRouter>
        </Router>
      </Provider>
    </>
  );
}

export default App;
