'use client';

import { Button } from '~/shared/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/shared/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/shared/ui/form';
import { Input } from '~/shared/ui/input';

import { useLogin } from '../lib';

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Вхід</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Логін</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  {form.formState.errors.identifier && (
                    <FormMessage>
                      {form.formState.errors.identifier.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  {form.formState.errors.password && (
                    <FormMessage>
                      {form.formState.errors.password.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button type="reset" onClick={() => form.reset()} variant="outline">
              Очистити
            </Button>
            <Button disabled={form.formState.isSubmitting} type="submit">
              Увійти
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
