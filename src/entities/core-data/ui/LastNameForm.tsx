import { Button } from '~/shared/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/shared/ui/form';
import { Input } from '~/shared/ui/input';

import { useLastNameForm } from '../lib';

export function LastNameForm({ specialist }: { specialist: string }) {
  const { form, onSubmit } = useLastNameForm(specialist);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-96 gap-4 space-y-8"
      >
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="min-w-60">
              <FormLabel>Прізвище</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              {form.formState.errors.lastName && (
                <FormMessage>
                  {form.formState.errors.lastName.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          Зберегти
        </Button>
        <Button type="reset" onClick={() => form.reset()} variant="outline">
          Відмінити
        </Button>
      </form>
    </Form>
  );
}
