/**
 *
 * @param {string} passage
 * @returns {Array}
 */
const chunkify = passage => {
	if (!passage) return [];

	const roughChunks = passage.split('\n').filter(Boolean);

	const chunks = [];

	let currentChunk = '';
	let charLimit = 700;
	roughChunks.forEach(chunk => {
		if (currentChunk.length + chunk.length < charLimit) {
			currentChunk += `\n${chunk}`;
			return;
		}

		chunks.push(currentChunk);
		currentChunk = chunk;
	});

	return chunks;
};

export default chunkify;
