import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import AdminRoute from './routes/AdminRoute';
import NotAuthRoutes from './routes/NotAuthRoutes';
import StudentRoutes from './routes/StudentRoutes';
import UserRoutes from './routes/UserRoutes';
import HomePage from './pages/HomePage';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          {AdminRoute}
          {NotAuthRoutes}
          {StudentRoutes}
          {UserRoutes}
        </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
