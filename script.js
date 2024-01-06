function calcGrade(grade, unit) {
    if (grade === "A") {
        return 5 * unit;
    } else if (grade === "B") {
        return 4 * unit;
    } else if (grade === "C") {
        return 3 * unit;
    } else if (grade === "D") {
        return 2 * unit;
    } else if (grade === "E") {
        return 1 * unit;
    } else return 0 * unit;
}

let counter = 1;

function addCourse() {
    let addNewCourse = document.createElement("form");
    addNewCourse.classList.add("add_new", `key-${counter}`); //not done
    const course_code =`
    <form class="add_new key-${counter}">
        <input type="text" placeholder= "Course Code" class = "courses key-${counter}" required/>
            <input type="number" placeholder="Units" class= "units key-${counter}" required/>
            <select class="grade key-${counter}" required>
                <option value="select">Select</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
            </select>
    </form>
    `;

    addNewCourse.innerHTML = course_code;
    document.getElementById("course-area").appendChild(addNewCourse);
    counter++;
}

function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm?.remove();
}

const reports = [];

function calcCgpa() {
    const RUNCGPA = document.getElementById("calc");
    const SELECTGRADE = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.units"); 

    const courseReport = {};
    
    const gradeList = [];
    const unitList = [];
    let totalUnits = 0;

    SELECTGRADE.forEach((e) => {
        let GRADE = e.options;
        const selectedIndex = e.selectedIndex;
        const selectGrade = GRADE[selectedIndex];
        const valueGrade = selectGrade.text.toUpperCase();
        gradeList.push(valueGrade);
    });
    console.log(gradeList);

    UNIT.forEach((e) => {
        const unitValue = parseInt(e.value);
        totalUnits += unitValue;
        unitList.push(unitValue);
    });
    console.log(unitList);

    let totalGottenUnits = 0;

    for (let i = 0; i < unitList.length; i++) {
        totalGottenUnits += calcGrade(gradeList[i], unitList[i]);
    }
    const gpa = totalGottenUnits / totalUnits;

    if (gpa >= 0){
        RUNCGPA.innerHTML = "Your CGPA is " + gpa.toFixed(2);
    } else {
        RUNCGPA.innerHTML ="Enter a valid grade and unit.";
    }

}