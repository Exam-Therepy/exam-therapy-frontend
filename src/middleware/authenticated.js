import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

export default function useAuthenticated() {
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  if (!isAuthenticated && !isLoading) {
    router.push('/login'); // Redirect to login page if not authenticated
  }
}
