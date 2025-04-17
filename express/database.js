import mysql from "mysql2/promise"
import conf from "./database.json" with { type: "json" }
import { Question } from "./questionData.js"

export async function getConnection() {
    const connection = await mysql.createConnection({
        host: conf.host,
        port: conf.port,
        user: conf.user,
        password: conf.password,
        database: conf.database,
    })

    return connection
}

export async function getQuestions(category, amount) {
    const categories = ["Geography", "Science", "Pop Culture", "History", "Sports"] // Manually set what categories we are using

    const questions = []

    for (let i = 0; i < categories.length; i++) {
        const connection = await getConnection()
        
        try {
            const [results, fields] = await connection.query(
                `SELECT * FROM Questions WHERE category = '${categories[i]}' ORDER BY RAND() LIMIT 1` 
            );
            
            connection.close()

            results.forEach(element => {
                let question = element.question
                let answer = element.answer
                let choice1 = element.choice1 //need to wait for actual name once implemented
                let choice2 = element.choice2 //need to wait for actual name once implemented
                let choice3 = element.choice3 //need to wait for actual name once implemented
                let category = element.category
                questions.push(new Question(question,answer,[choice1,choice2,choice3],category))
            });

        } catch (err) {
            connection.close()
            console.log(err)
            return []
        }
    }

    return questions
}

export async function submitScore(name, score) {
    const connection = await getConnection()

    name = nameParse(name)

    try {
        await connection.query(
            `INSERT INTO Scores (username,score) VALUES ('${name}', '${score}')`
        )
        connection.close()
        return name
    } catch (err) {
        console.log(err)
        connection.close()
        return "null"
    }
}

export async function getPosition(name, score) {
    const connection = await getConnection()

    name = nameParse(name)

    try {
        const [results, fields] = await connection.query(
            `SELECT * FROM Scores`
        )
        connection.close()
        return results.findIndex(l => l.username == name && l.score == score) + 1
    }
    catch (err) {
        console.log(err)
        connection.close()
        return -1
    }
}

export async function getScores(limit = 100) {
    const connection = await getConnection()

    try {
        const [results, fields] = await connection.query(
            `SELECT * FROM Scores ORDER BY score DESC LIMIT ${limit}`
        );
        connection.close()
        return results
    } catch (err) {
        console.log(err)
        connection.close()
        return null
    }
}

function nameParse(name) {
    // take name, check for symbols, remove dangerous ones, and return new name
    //should remove ;, ', \, and _
    return name.replace(/[';\\_]/g, '')
}
