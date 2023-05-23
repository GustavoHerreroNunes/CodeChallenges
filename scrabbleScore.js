const verifyPremiumSquares = (nextLetter) => {
	let scoreBonusLetter = 1, scoreBonusWord = 1;
	
	const premiumSquareMultipliers = {b: 2, g: 3, r: 2, o: 3};
	
	const premiumSquareLettersPatterns = /(b|g)/;
	const premiumSquareWordsPatterns = /(r|o)/;
	
	if(premiumSquareLettersPatterns.test(nextLetter))
		scoreBonusLetter = premiumSquareMultipliers[nextLetter];

	else if(premiumSquareWordsPatterns.test(nextLetter))
		scoreBonusWord = premiumSquareMultipliers[nextLetter];
	
	return { scoreBonusLetter, scoreBonusWord };
}

const scrabbleScore = (word) => {
	let score = 0, scoreMultiplier = 1;
	
	const scorePatterns = [
		/(E|A|I|O|N|R|T|L|S|U)/g,
		/(D|G)/g,
		/(B|C|M|P)/g,
		/(F|H|V|W|Y)/g,
		/(K)/g,
		/(J|X)/g,
		/(Q|Z)/g
	];
	
	const scoreValues = [1, 2, 3, 4, 5, 6, 8, 10];
		
	const specialPossibleScores = [8, 10];
	
	for(let index = 0; index < scorePatterns.length; index++){
		
		const patternMatches = word.matchAll(scorePatterns[index]);
		
		for(match of patternMatches){
			const nextLetter = word[match.index + 1];
			
			let { scoreBonusLetter, scoreBonusWord } = verifyPremiumSquares(nextLetter);
			
			const baseScore = (index < 5) ? (index + 1) : specialPossibleScores[index-5];

			score += baseScore * scoreBonusLetter;
			scoreMultiplier *= scoreBonusWord;
		}
		
	}
	
	return score * scoreMultiplier;
}