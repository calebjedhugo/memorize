import { useContext } from 'react';
import { GraphContext } from './Graphs';

const useGraphsContext = () => {
  return useContext(GraphContext);
};

export default useGraphsContext;
