import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { profileHooks, profileSchemas } from '~/shared/api';
import { useAppDispatch, useAppSelector } from '~/shared/lib';

import { selectCoreData, setIsPublic } from '../model';

export const useIsPublicForm = (specialist: string) => {
  const { isPublic } = useAppSelector(selectCoreData);

  const dispatch = useAppDispatch();

  const { mutateAsync } =
    profileHooks.useUpdateIsPublicControllerHandle(specialist);

  const schema =
    profileSchemas.updateIsPublicControllerHandleMutationRequestSchema;
  type Schema = z.infer<typeof schema>;
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    values: { isPublic },
  });

  async function onSubmit(mutationData: Schema) {
    try {
      await mutateAsync(mutationData);
      dispatch(setIsPublic(mutationData.isPublic));
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      form.reset();
    }
  }

  return { form, onSubmit };
};
