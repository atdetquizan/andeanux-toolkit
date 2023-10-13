export default {
  title: 'Forms/textarea',
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

const Template = args => `<andeanux-textarea></andeanux-textarea>`;

export const Example = Template.bind({});
Example.args = {};
