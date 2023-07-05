import { AuthProvider } from './context/auth';
import './global.css'
import { AppRoutes } from './routes';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from "./styles-notifications";

export const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer />
       <AppRoutes/>
    </AuthProvider>
    
  );
}

export default App;
