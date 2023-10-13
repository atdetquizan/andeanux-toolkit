export default {
  title: 'Forms/checkbox',
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
  argTypes: {},
};

const Template = args => `<andeanux-checkbox></andeanux-checkbox>`;

export const Example = Template.bind({});
Example.args = {};
