function calculateLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    }
    else if ( average >= 80) {
        return 'B';
    }
    else if (average >= 70) {
        return 'C';
    }
    else if (average >= 60) {
        return 'D';
    }
    else {
        return 'F'
    } 
}

function main() {
    let repeatProgram = true;

    while (repeatProgram) {
        let numAssignments= parseInt(prompt("Enter the number of assignments to grade (maxium of 10):"));
        if (isNaN(numAssignments)|| numAssignments < 1 || numAssignments > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }

        let totalScore = 0;

        for (let i = 1; i <= numAssignments; i++) {
            let score = parseFloat(prompt(`Enter the score for assignment ${i} (as a percentage):`));
            
            
            if (isNaN(score) || score < 0 || score > 100) {
                alert("Please enter a valid score between 0 and 100.");
                i--; 
                continue; 
            }

            totalScore += score;
        }

        let averageScore = totalScore / numAssignments;
        let letterGrade = calculateLetterGrade(averageScore);

       
        alert(`The average score is ${averageScore.toFixed(2)}%.`);
        alert(`The letter grade is ${letterGrade}.`);

       
        let repeatResponse = prompt("Would you like to grade another set of assignments? (yes/no):").toLowerCase();
        repeatProgram = repeatResponse === 'yes';
    }
}

main();
    

