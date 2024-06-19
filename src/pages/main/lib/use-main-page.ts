import { useEffect } from 'react';

import { profilesHooks } from '~/shared/api';
import { useAppDispatch } from '~/shared/lib';

import { coreDataModel } from '~/entities/core-data';
import { useSpecialist } from '~/entities/specialist';

export const useMainPage = () => {
  const dispatch = useAppDispatch();

  const { specialist } = useSpecialist();
  const { data } = profilesHooks.useGetCoreControllerHandleSuspense(specialist);

  useEffect(() => {
    dispatch(coreDataModel.setCoreData(data));
  }, [data]);

  return { data, specialist };
};
