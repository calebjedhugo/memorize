import Graphs from '.';
import { sortedArrayKeys } from './Gradiants';

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
  argTypes: { sortedBy: { options: sortedArrayKeys } },
};

export { Example };
export default story;
