import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '~/shared/ui';

import { useFirstNameForm } from '../lib';

export function FirstNameForm({ specialist }: { specialist: string }) {
  const { form, onSubmit } = useFirstNameForm(specialist);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-96 gap-4 space-y-8"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="min-w-60">
              <FormLabel>Ім&apos;я</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              {form.formState.errors.firstName && (
                <FormMessage>
                  {form.formState.errors.firstName.message}
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
