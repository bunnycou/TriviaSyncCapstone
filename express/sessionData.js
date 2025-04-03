export class Session {
    constructor(questions, id) {
        this.id = id
        this.questions = randomSort(questions)
        this.questionsPublic = this.getQuestionsPublic()
        this.startTime = Math.floor(new Date().getTime()/1000)
        this.wsc = null
    }

    getAnswers() {
        let answers = []
        this.questions.forEach(question => {
            answers.push(question.answer)
        })
        return answers
    }

    getQuestionsPublic() {
        return(new PublicData(this.id, this.questions))
    }
}

class PublicData {
    constructor (sessionId, questions) {
        this.sessionId = sessionId
        this.questions = this.questionsRandom(questions)
    }

    questionsRandom(questions) {
        let publicQuestions = []
        questions.forEach(question => {
            publicQuestions.push(new QuestionPublic(question.question, question.answer, question.choices, question.category))
        });
        return publicQuestions
    }
}

class QuestionPublic {
    constructor(question, answer, choices, category) {
        this.question = question
        this.category = category
        this.options = this.randomChoices(answer, choices)
    }

    randomChoices(answer, choices) {
        let options = [answer, choices[0], choices[1], choices[2]]
        return randomSort(options)
    }
}

function randomSort(original) {
    let origarr = original
    let retarr = []

    while (origarr.length > 0) {
        let index = Math.floor(Math.random()*origarr.length)
        retarr.push(origarr[index])
        origarr.splice(index, 1)
    }

    return retarr
}