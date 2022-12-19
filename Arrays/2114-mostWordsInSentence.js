/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let mostWords = 0, currentWordCount = 0;
    // seems really easy.
    for (let sentence of sentences) {
        currentWordCount = sentence.split(" ").length;
        if (currentWordCount > mostWords) {
            mostWords = currentWordCount;
        }
    }
    return mostWords;
};