import { Button } from '~/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/shared/ui/form';
import { Switch } from '~/shared/ui/switch';

import { useIsPublicForm } from '../lib';

export function IsPublicForm({ specialist }: { specialist: string }) {
  const { form, onSubmit } = useIsPublicForm(specialist);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-96 gap-4 space-y-8"
      >
        <FormField
          control={form.control}
          name="isPublic"
          render={({ field }) => (
            <FormItem className="min-w-60">
              <FormLabel>Видимість на dro.psypra.com</FormLabel>

              <div className="flex min-w-72 flex-row items-center gap-4  p-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
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
