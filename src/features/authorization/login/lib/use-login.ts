import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { authHooks, authSchemas } from '~/shared/api';
import { useAppDispatch } from '~/shared/lib';

import { userModel } from '~/entities/user';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync: login } = authHooks.useAuthControllerLogin();

  const schema = authSchemas.authControllerLoginMutationRequestSchema;
  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  async function onSubmit(mutationData: Schema) {
    try {
      const { accessToken, user } = await login(mutationData);
      if (accessToken && user) {
        localStorage.setItem('accessToken', accessToken);
        dispatch(userModel.setUser({ userName: user.userName }));
      }
    } catch (e) {
      toast.error(`${e}. Не правильний логін чи пароль`);
    } finally {
      form.reset();
    }
  }

  return { form, onSubmit };
};
