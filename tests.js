function runTests(){

    let problems = [
        testProblemOne(),
        testProblemTwo(),
        testProblemThree(),
        testProblemFour(),
    ];

    addProblemsToHTML(problems, problems.length, Math.ceil(problems.length / 2));
}

function testProblemOne() {

    let description = `Find the smallest and biggest numbers in an array`;

    let example = `problemOne([1, 2, 3, 4, 5]) should return [1, 5]`;

    let tests = [
        {input: `[1, 2, 3, 4, 5]`, expected: [1,5], actual: problemOne([1, 2, 3, 4, 5])},
        {input: `[5, 4, 3, -2, 1]`, expected: [-2, 5], actual: problemOne([5, 4, 3, -2, 1])},
        {input: `[5, 1]`, expected: [1, 5], actual: problemOne([5, 1])},
        {input: `[1]`, expected: [1, 1], actual: problemOne([1])},
    ];

    return {description, example, tests};
}

function testProblemTwo() {

    let description = `Create a function that takes two numbers and returns the array of multiples 
    of the first number until the array's last value reaches the second number.
    If the second number is a multiple of the first number, it should be included in the array.`;

    let example = `problemTwo(7, 100) should return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]`;

    let tests = [
        {input: `3, 17`, expected: [3, 6, 9, 12, 15], actual: problemTwo(3, 17)},
        {input: `5, 50`, expected: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], actual: problemTwo(5, 50)}
    ];

    return {description, example, tests};
}

function testProblemThree() {

    let description = `Create a function that finds all common elements between two arrays.`;

    let example = `problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [2, 4]`;

    let tests = [
        {input: `[1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48]`, expected: [8, 23], actual: problemThree([1, 4, 6, 8, 15, 23, 45], [5, 8, 17, 23, 48])},
        {input: `[], []`, expected: [], actual: problemThree([], [])},
        {input: `[1, 2, 3], [4, 5, 6]`, expected: [], actual: problemThree([1, 2, 3], [4, 5, 6])},
        {input: `[1, 2, 3], [1, 2, 3]`, expected: [1, 2, 3], actual: problemThree([1, 2, 3], [1, 2, 3])},
    ];

    return {description, example, tests};
}
function testProblemFour() {

    let description = `Create a function that takes a nested array and 
    counts the total number of items in all the arrays.`;

    let example = `problemFour([1, [2, 3], [4, [5, 6]], [7, 8, 9]]) should return 9`;

    let tests = [
        {input: `[1,2,3,4]`, expected: 4, actual: problemFour([1,2,3,4])},
        {input: `[]`, expected: 0, actual: problemFour([])},
        {input: `[1, [2,[3,4],5]]`, expected: 5, actual: problemFour([1, [2,[3,4],5]])},
        {input: `[[1,2],[3,4], [5, 6]]`, expected: 6, actual: problemFour([[1,2],[3,4], [5, 6]])},
    ];

    return {description, example, tests};
}


function addProblemsToHTML(problems, numberOfProblems, numberOfRows) {
    let container = document.getElementById("problems");

    for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < 2; j++) {
        
            let problemNumber = (i * 2) + j + 1;
            if (problemNumber <= numberOfProblems) {
                
                let card = document.createElement("div");
                card.className = "card";
                row.appendChild(card);

                let cardHeading = document.createElement("h2");
                cardHeading.className = "card-heading";
                cardHeading.innerText = "Problem " + problemNumber;
                card.appendChild(cardHeading);
                
                let cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                let problemDescription = document.createElement("p");
                problemDescription.className = "problem-description";
                problemDescription.innerText = problems[problemNumber - 1].description;
                cardBody.appendChild(problemDescription);

                let problemExample = document.createElement("p");
                problemExample.className = "problem-example";
                problemExample.innerHTML = `<span class='example'>Example: </span>${problems[problemNumber - 1].example}`;
                cardBody.appendChild(problemExample);

                let problemTests = document.createElement("div");
                problemTests.className = "problem-tests";
                cardBody.appendChild(problemTests);

                for (let k = 0; k < problems[problemNumber - 1].tests.length; k++) {
                    let test = document.createElement("li");
                    test.className = "problem-test";
                    let parameters = document.createElement("p");
                    parameters.className = "test-parameters";
                    parameters.innerHTML = `<span class='parameter'>Test Parameter: </span>${problems[problemNumber - 1].tests[k].input}`;
                    test.appendChild(parameters);

                    let results = document.createElement("p");
                    results.className = "test-results";
                    results.innerHTML = `<span class='expected'>Expected: </span>${problems[problemNumber - 1].tests[k].expected} &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class='actual'>Actual: </span>${problems[problemNumber - 1].tests[k].actual}`;
                    test.appendChild(results);
                    problemTests.appendChild(test);


                    let expected = problems[problemNumber - 1].tests[k].expected;
                    let actual = problems[problemNumber - 1].tests[k].actual;

                    if (Array.isArray(expected) && Array.isArray(actual)) {
                        if (expected.length === actual.length) {
                            isSame = true;
                            actual.forEach((item, index) => {
                                if (item !== expected[index]) {
                                    isSame = false;
                                }
                            });
                            if(isSame){
                                test.className += " test-pass";
                            }
                        }
                    } else if (problems[problemNumber - 1].tests[k].expected === problems[problemNumber - 1].tests[k].actual) {
                        test.className += " test-pass";
                    }
                }
            }
        }
    }
}

