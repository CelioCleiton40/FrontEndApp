import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '../../store/useAuthStore';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? <>{children}</> : null;
};

export default ProtectedRoute;