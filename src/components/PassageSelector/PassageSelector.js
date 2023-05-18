import { useContext } from 'react';
import PassageContext from '../../contexts/PassageContext';

import sermonOnTheMount from '../../passages/sermonOnTheMount';

const passages = { 'Sermon On the Mount': sermonOnTheMount };

const passageKeys = Object.keys(passages);

const PassageSelector = () => {
	const [, setPassage] = useContext(PassageContext);

	return passageKeys.map(key => (
		<span key={key} onClick={() => setPassage(passages[key])}>
			{key}
		</span>
	));
};

export default PassageSelector;
