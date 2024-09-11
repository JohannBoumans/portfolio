import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta = {
  // eslint-disable-next-line
  title: 'Input',
  component: InputText,
  parameters: { layout: `centered` },
  // eslint-disable-next-line
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    name: `name`,
    label: `Email address`,
    type: `text`,
  },
};
