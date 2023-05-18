import styled from 'styled-components';

const Sdiv = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

const OrderContainer = styled('div')`
	position: absolute; /* Position the element relative to the container */
	bottom: 0; /* Position the element at the top */
	right: 0; /* Position the element at the right */
`;

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
