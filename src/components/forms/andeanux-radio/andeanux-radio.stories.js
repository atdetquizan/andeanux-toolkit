export default {
  title: 'Forms/radio',
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

const Template = args => `<andeanux-radio></andeanux-radio>`;

export const Example = Template.bind({});
Example.args = {};
