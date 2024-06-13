import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { profilesHooks } from '~/shared/api';
import { useAppDispatch, useAppSelector } from '~/shared/lib';

import { coreDataModel } from '~/entities/core-data';
import { userModel } from '~/entities/user';

export const useMainPage = () => {
  const dispatch = useAppDispatch();

  const { userName } = useAppSelector(userModel.selectUserName);
  const { specialist = userName } = useParams<string>();
  const { data } = profilesHooks.useGetCoreControllerHandleSuspense(specialist);

  useEffect(() => {
    dispatch(coreDataModel.setCoreData(data));
  }, [data]);

  return { data, specialist };
};
