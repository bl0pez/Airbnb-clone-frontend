import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const Router = () => {

    const { user, loading } = useContext(UserContext);

  return (
    <>
        {
            user
            ? (
                <PrivateRouter />
            )
            : (
                <PublicRouter />
            )
        }
    
    </>
  )
}
