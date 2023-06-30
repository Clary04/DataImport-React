import { AuthProvider } from './context/auth';
import './global.css'
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AuthProvider>
       <AppRoutes/>
    </AuthProvider>
  );
}

export default App;
