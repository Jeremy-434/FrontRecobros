import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { AppTheme } from './theme/AppTheme';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './services';

export const AdmPortfolioApp = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <MsalProvider instance={msalInstance}>
          <AppRouter />
        </MsalProvider>
      </AppTheme>
    </Provider>
  )
}
