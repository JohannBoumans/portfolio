import axios from 'axios';
import { useToast } from '../../../../common/toast/hooks/use-toast';
import { ContactFormValues } from '../../../../domain/form';
import { Form } from '../../../../common/form/_advanced/components/form/Form';
import { FieldEmail } from '../../../../common/form/_advanced/components/fields/FieldEmail';
import { FieldTextarea } from '../../../../common/form/_advanced/components/fields/FieldTextarea';
import { FormRow } from '../../../../components/client/form/form-row/FormRow';
import { useIntl } from '../../../../common/intl/hooks/use-intl';
import { ContactFormSubmit } from './components/ContactFormSubmit';

export function ContactForm() {
  const { success, error } = useToast();
  const { translate } = useIntl();

  async function onSubmit(formValues: ContactFormValues) {
    const { emailAddress, message } = formValues;
    axios({
      method: `POST`,
      url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!,
      data: {
        emailAddress,
        message,
      },
    })
      .then(() => {
        success(translate(`contact_section.success`));
      })
      .catch(() => {
        error(translate(`contact_section.error`));
      });
  }

  return (
    <div className="mb-10 lg:mb-0">
      <Form<ContactFormValues> method="POST" onSubmit={onSubmit}>
        <div className="mb-5 flex max-w-full flex-col gap-3 lg:max-w-[652px]">
          <FormRow columns={1}>
            <FieldEmail<ContactFormValues>
              name="emailAddress"
              label={translate(`placeholder.email_address`)}
              isRequired
            />
          </FormRow>
          <div>
            <FieldTextarea<ContactFormValues>
              name="message"
              label={translate(`placeholder.message`)}
              isRequired
            />
          </div>
          <div>
            <ContactFormSubmit>
              {translate(`placeholder.send`)}
            </ContactFormSubmit>
          </div>
        </div>
      </Form>
    </div>
  );
}
