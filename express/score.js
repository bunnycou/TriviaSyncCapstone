export function scoreSubmission(submissions, answers, startTime) { // return int score, currently 1 point for each correct answer
    let score = 0
    let time = Math.floor((new Date().getTime()/1000) - startTime)

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].selectedAnswer == answers[i]) { score++ }
    }

    return score
}

// code for when quiz was extended response
// function isCorrect(submission, answer) { // return bool correct, placeholder
//     // return parse(submission) == parse(answer)
//     submission = parse(submission)
//     answer = parse(answer)

//     let levdist = levenshteinDistance(submission, answer)

//     // compare lengths of strings?
//     // base levensthein distance threshold on lenth of strings
//     return levdist <= 2
// }

// function parse(s) { // return string submission, remove whitespace, 'the', 'a', make lowercase
//     let removeWords = ["the", "a"]
//     let removeEnders = [".", "!", "?"]
    
//     s = s.trim()
//     s = s.toLowerCase()
//     removeWords.forEach(word => { // remove basic words
//         if (s.startsWith(word)) {
//             s = s.substring(word.length)
//             s = s.trim()
//         }
//     });

//     removeEnders.forEach(ender => { // remove unnecessary enders
//         if (s.endsWith(ender)) {
//             s = s.substring(0, s.length-1)
//         }
//     })

//     if (s.endsWith("s")) { // remove unnecessary plurals
//         s = s.substring(0, s.length-1)
//     }

//     return s
// }

// function levenshteinDistance(s1, s2) {
//     let m = s1.length
//     let n = s2.length

//     let matrix = [[]]

//     for (let i = 1; i <= m; i++) {
//         matrix.push([i])
//     }
//     for (let j = 0; j <= n; j++) {
//         matrix[0].push(j)
//     }

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (s1[i-1] == s2[j-1]) {
//                 matrix[i].push(matrix[i-1][j-1])
//             } else {
//                 let pushval = 1 + Math.min(matrix[i][j-1], Math.min(matrix[i-1][j], matrix[i-1][j-1]))
//                 matrix[i].push(pushval)
//             }
//         }
//     }

//     return matrix[m][n]
// }