import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { profileHooks, profileSchemas } from '~/shared/api';
import { useAppDispatch, useAppSelector } from '~/shared/lib';

import { selectCoreData, setLastName } from '../model';

export const useLastNameForm = (specialist: string) => {
  const { lastName } = useAppSelector(selectCoreData);

  const dispatch = useAppDispatch();

  const { mutateAsync } =
    profileHooks.useUpdateLastNameControllerHandle(specialist);

  const schema =
    profileSchemas.updateLastNameControllerHandleMutationRequestSchema;
  type Schema = z.infer<typeof schema>;
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    values: { lastName },
  });

  async function onSubmit(mutationData: Schema) {
    try {
      await mutateAsync(mutationData);
      dispatch(setLastName(mutationData.lastName));
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      form.reset();
    }
  }

  return { form, onSubmit };
};
