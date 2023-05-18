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
	roughChunks.forEach((chunk, idx) => {
		if (currentChunk.length + chunk.length < charLimit) {
			currentChunk += `\n${chunk}`;
			if (idx === roughChunks.length - 1) {
				chunks.push(currentChunk);
			}
			return;
		}
		if (currentChunk) {
			chunks.push(currentChunk);
		} else {
			chunks.push(chunk);
		}
		currentChunk = '';
	});

	return chunks;
};

export default chunkify;
