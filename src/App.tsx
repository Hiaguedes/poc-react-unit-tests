import {GlobalStyle} from './styles/globalStyle'
import {Provider} from 'react-redux';
import store from './redux-store/store'
import MainLayout from './modules/Layout/MainLayout'
import {Router, BrowserRouter} from 'react-router-dom'
import { createBrowserHistory } from "history";
import {AuthProvider} from './modules/Login/hooks/useAuth'
import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme'

function App() {

  const history = createBrowserHistory();
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <AuthProvider>
          <ThemeProvider theme={theme}>
          <Router history={history}>
            <BrowserRouter>
              <MainLayout />
            </BrowserRouter>
          </Router>
          </ThemeProvider>
          </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
