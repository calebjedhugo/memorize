import styled from 'styled-components';

const Sdiv = styled('div')``;

const OrderContainer = styled('div')``;

const PassageChunk = ({ children, order }) => {
	const lines = children.split('\n');
	return (
		<Sdiv>
			<OrderContainer>{order}</OrderContainer>
			{lines.map(line => (
				<div>{line}</div>
			))}
		</Sdiv>
	);
};

export default PassageChunk;
