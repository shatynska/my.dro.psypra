import { useParams } from 'react-router-dom';

import { useAppSelector } from '~/shared/lib';

// TODO Find out how to fix eslint rules to use @x
// eslint-disable-next-line import/no-internal-modules, boundaries/element-types
import { userModel } from '~/entities/user/@x/specialist';

export const useSpecialist = () => {
  const { userName } = useAppSelector(userModel.selectUserName);
  const { specialist = userName } = useParams<string>();

  return { specialist };
};
