import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export function RequireAuth({ children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  console.log('TEST LOCATION IN REQUIRE AUTH', location);
  if (route !== 'authenticated') {
    const newRoute = location.state ? location.state.from : "/";
    return <Navigate to={newRoute} state={{ from: location, requireAuth: true }} replace />;
  }
  return children;
}
