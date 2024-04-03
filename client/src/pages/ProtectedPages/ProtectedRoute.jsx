import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  return sessionStorage.getItem(import.meta.env.VITE_SESSIONSTORAGE_KEY) ? <Outlet /> : <Navigate to='/' replace />
}
