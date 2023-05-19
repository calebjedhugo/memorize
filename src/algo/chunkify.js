const transpositions = { 1: 1, 2: 6, 3: 2, 4: 5, 5: 3, 6: 8, 7: 4, 0: 7 };

const orderChunks = linearChunks => {
	const sorted = [];

	linearChunks.forEach((chunk, idx) => {
		sorted[transpositions[(idx + 1) % 8] + Math.floor(idx / 8) * 8 - 1] = { idx, chunk };
	});

	return sorted;
};

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
		currentChunk = chunk;
	});

	return orderChunks(chunks);
};

export default chunkify;
