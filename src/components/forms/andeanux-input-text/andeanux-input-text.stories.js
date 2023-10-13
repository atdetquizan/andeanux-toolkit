export default {
  title: 'Forms/input-text',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'alabaster',
      values: [
        {
          name: 'alabaster',
          value: '#FAFAFA',
        },
      ],
    },
  },
  argTypes: {
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
  }
};

const Template = args => `<andeanux-input-text placeholder="${args.placeholder}" label="${args.label}"></andeanux-input-text>`;

export const Example = Template.bind({});
Example.args = {
  label: 'Example label',
  placeholder: 'Placeholder',
};
