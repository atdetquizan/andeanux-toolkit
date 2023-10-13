export default {
  title: 'Forms/select',
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

const Template = args => `<andeanux-select></andeanux-select>`;

export const Example = Template.bind({});
Example.args = {};
