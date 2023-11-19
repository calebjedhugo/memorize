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
    showGreen: true,
    showBlue: true,
    showSource: true,
    showOne: true,
    showtwo: true,
  },
  argTypes: { sortedBy: { options: sortedArrayKeys } },
};

export { Example };
export default story;
