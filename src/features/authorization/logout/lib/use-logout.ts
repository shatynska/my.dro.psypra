import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '~/shared/lib';

import { userModel } from '~/entities/user';

import { persistor } from '~/app/store';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userModel.logout());
    persistor.purge();
    navigate('/', { replace: true });
  };

  return { handleLogout };
};
