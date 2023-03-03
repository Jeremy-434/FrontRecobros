import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { AppTheme } from './theme/AppTheme';

export const AdmPortfolioApp = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  )
}
