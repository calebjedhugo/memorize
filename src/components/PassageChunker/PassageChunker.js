import PassageChunk from '../PassageChunk/PassageChunk';
import chunkify from '../../algo/chunkify';
import { useContext, useMemo } from 'react';
import styled from 'styled-components';
import PassageContext from '../../contexts/PassageContext';

const Container = styled('div')`
	display: grid;
	grid-auto-rows: 430px;
	grid-template-columns: 49% 49%;
	gap: 2%;
`;

const PassageChunker = () => {
	const [passage] = useContext(PassageContext);

	const chunks = useMemo(() => chunkify(passage), [passage]);
	return (
		<Container>
			{chunks.map((chunk, idx) => {
				return (
					<PassageChunk key={chunk} order={idx + 1}>
						{chunk}
					</PassageChunk>
				);
			})}
		</Container>
	);
};

export default PassageChunker;
