import { PropsWithChildren } from 'react';
import { useFormState } from '../../../../../common/form/_advanced/hooks/use-form-state/use-form-state';
import { Button } from '../../../../../components/server/button/Button';

export function ContactFormSubmit(props: PropsWithChildren) {
  const { children } = props;
  const { isSubmitting } = useFormState();
  return (
    <Button
      type="submit"
      isLoading={isSubmitting}
      isDisabled={isSubmitting}
      additionalStyle={{
        rightIcon: `text-red group`,
        root: `button-class`,
      }}
    >
      {children}
    </Button>
  );
}
