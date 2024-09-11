'use client';

import axios from 'axios';
import { useToast } from '../../../../common/toast/hooks/use-toast';
import { ContactFormValues } from '../../../../domain/form';
import { Form } from '../../../../common/form/_advanced/components/form/Form';
import { FieldEmail } from '../../../../common/form/_advanced/components/fields/FieldEmail';
import { FieldTextarea } from '../../../../common/form/_advanced/components/fields/FieldTextarea';
import { FormRow } from '../../../../components/client/form/form-row/FormRow';
import { ContactFormSubmit } from './components/ContactFormSubmit';

type Props = {};

export function ContactForm(props: Props) {
  const {} = props;
  const { success, error } = useToast();

  async function onSubmit(formValues: ContactFormValues) {
    const { firstName, lastName, phoneNumber, emailAddress, message } =
      formValues;
    axios({
      method: `POST`,
      url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!,
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        message,
      },
    })
      .then(() => {
        success(`Votre message à bien été envoyé !`);
      })
      .catch(() => {
        error(`Une erreur est survenue`);
      });
  }

  return (
    <div className="mb-10 lg:mb-0">
      <Form<ContactFormValues> method="POST" onSubmit={onSubmit}>
        <div className="mb-5 flex max-w-full flex-col gap-3 lg:max-w-[652px]">
          <FormRow columns={1}>
            <FieldEmail<ContactFormValues>
              name="emailAddress"
              label="Email"
              isRequired
            />
          </FormRow>
          <div>
            <FieldTextarea<ContactFormValues>
              name="message"
              label="Message"
              isRequired
            />
          </div>
          <div>
            <ContactFormSubmit />
          </div>
        </div>
      </Form>
    </div>
  );
}
