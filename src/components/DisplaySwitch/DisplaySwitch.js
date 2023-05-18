import { useContext } from 'react';
import PassageContext from '../../contexts/PassageContext';
import PassageChunker from '../PassageChunker/PassageChunker';
import PassageSelector from '../PassageSelector/PassageSelector';

const DisplaySwitch = () => {
	const [passage] = useContext(PassageContext);
	return passage ? <PassageChunker /> : <PassageSelector />;
};

export default DisplaySwitch;
