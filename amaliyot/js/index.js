 const students = [
    {
        name:"Abduboriy",
        score: 50,
    },
    {
        name:"Abduboriy1",
        score: 60,
    },
    {
        name:"Abduboriy2",
        score: 70,
    },
    {
        name:"Abduboriy3",
        score: 90,
    }
]
 const highScores = students.every(student => student.score > 30);
 console.log(highScores);

