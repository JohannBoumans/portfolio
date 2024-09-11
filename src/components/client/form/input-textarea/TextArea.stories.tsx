import type { Meta, StoryObj } from '@storybook/react';

import { InputTextarea } from './InputTextarea';

const meta = {
  // eslint-disable-next-line
  title: 'TextArea',
  component: InputTextarea,
  parameters: { layout: `centered` },
  // eslint-disable-next-line
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaBase: Story = {
  args: {
    name: `message`,
    label: `Votre message`,
  },
};
