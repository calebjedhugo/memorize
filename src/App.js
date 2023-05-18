import { useState } from 'react';
import DisplaySwitch from './components/DisplaySwitch';
import PassageContext from './contexts/PassageContext';

const App = () => {
	const [passage, setPassage] = useState('');
	return (
		<PassageContext.Provider value={[passage, setPassage]}>
			<DisplaySwitch />
		</PassageContext.Provider>
	);
};

export default App;
