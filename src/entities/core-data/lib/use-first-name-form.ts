import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { profileHooks, profileSchemas } from '~/shared/api';
import { useAppDispatch, useAppSelector } from '~/shared/lib';

import { selectCoreData, setFirstName } from '../model';

export const useFirstNameForm = (specialist: string) => {
  const { firstName } = useAppSelector(selectCoreData);

  const dispatch = useAppDispatch();

  const { mutateAsync } =
    profileHooks.useUpdateFirstNameControllerHandle(specialist);

  const schema =
    profileSchemas.updateFirstNameControllerHandleMutationRequestSchema;
  type Schema = z.infer<typeof schema>;
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    values: { firstName },
  });

  async function onSubmit(mutationData: Schema) {
    try {
      await mutateAsync(mutationData);
      dispatch(setFirstName(mutationData.firstName));
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      form.reset();
    }
  }

  return { form, onSubmit };
};
