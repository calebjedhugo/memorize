import Graphs from '.';

const Template = (props) => <Graphs {...props} />;

const Example = Template.bind({});

const story = {
  component: Graphs,
  title: 'useGradiantFromColor/Graphs',
  args: {
    sortedBy: 'redSource',
    showRed: true,
    showGreen: false,
    showBlue: false,
    showSource: true,
    showOne: true,
    showtwo: false,
  },
};

export { Example };
export default story;
