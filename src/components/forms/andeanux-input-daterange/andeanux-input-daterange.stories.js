export default {
  title: 'Forms/daterange',
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

const Template = args => `<andeanux-input-daterange></andeanux-input-daterange>`;

export const Example = Template.bind({});
Example.args = {};
