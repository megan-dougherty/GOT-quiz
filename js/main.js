var questions = [ 
	{
		question: "Who killed Tywin Lannister?",
		answer: "Tyrion Lannister"
	},
	{
		question: "How Many Dragons does Daenerys Targaryen have?",
		answer: 3
	},
	{
		question: "Who almost killed the Hound?",
		answer: "Breane"
	},
	{
		question: "Who is Sansa Stark's little sister?",
		answer: "Arya Stark"
	},
	{
		question: "Who is the Youngest Lannister sibling",
		answer: "Tyrion"
	},
	{
		question: "Where are the Starks From?",
		answer: "Winterfell"
	},
	{
		question: "True or False: Jaime Lannister has both hands in Season 3?",
		answer: "True"
	},
	{
		question: "What House leader murdered his daughter",
		answer: "Baratheon"
	},
	{
		question: "Who asked Tyrion Lannister to be their advisor?",
		answer: "Daenerys Targaryen"
	},
	{
		question: "How many Direwolves do the starks find?",
		answer: 6
	}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}









