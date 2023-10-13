export default {
  title: 'Forms/date',
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

const Template = args => `<andeanux-input-date></andeanux-input-date>`;

export const Example = Template.bind({});
Example.args = {};
