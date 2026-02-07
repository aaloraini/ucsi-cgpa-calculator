const gradePoints = {
    'A+': 4.0,
    'A': 3.75,
    'A-': 3.5,
    'B+': 3.33,
    'B': 3.0,
    'B-': 2.75,
    'C+': 2.5,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0
};

let semesterCounter = 0;
let courseCounter = 0;

const semestersContainer = document.getElementById('semestersContainer');
const emptyState = document.getElementById('emptyState');
const addSemesterBtn = document.getElementById('addSemester');
const clearAllBtn = document.getElementById('clearAll');
const loadExampleBtn = document.getElementById('loadExample');

addSemesterBtn.addEventListener('click', addSemester);
clearAllBtn.addEventListener('click', clearAll);
loadExampleBtn.addEventListener('click', loadExample);

function addSemester() {
    semesterCounter++;
    
    const currentEmptyState = document.getElementById('emptyState');
    if (currentEmptyState) {
        currentEmptyState.style.display = 'none';
    }
    
    const semesterCard = document.createElement('div');
    semesterCard.className = 'semester-card';
    semesterCard.dataset.semesterId = semesterCounter;
    
    semesterCard.innerHTML = `
        <div class="semester-header">
            <div class="semester-title">
                <span class="semester-number">Semester ${semesterCounter}</span>
                <span class="semester-gpa">GPA: <strong>0.00</strong></span>
            </div>
            <div class="semester-controls">
                <button class="btn btn-small btn-outline" onclick="addCourse(${semesterCounter})">Add Course</button>
                <button class="btn btn-small btn-danger" onclick="removeSemester(${semesterCounter})">Remove Semester</button>
            </div>
        </div>
        <div class="courses-list" data-semester="${semesterCounter}">
            <div class="empty-state" style="padding: 2rem;">
                <p style="font-size: 0.875rem;">No courses added yet. Click "Add Course" to begin.</p>
            </div>
        </div>
    `;
    
    semestersContainer.appendChild(semesterCard);
    updateStatistics();
}

function addCourse(semesterId) {
    courseCounter++;
    const coursesList = document.querySelector(`.courses-list[data-semester="${semesterId}"]`);
    
    const emptyCourseState = coursesList.querySelector('.empty-state');
    if (emptyCourseState) {
        emptyCourseState.remove();
    }
    
    const courseRow = document.createElement('div');
    courseRow.className = 'course-row';
    courseRow.dataset.courseId = courseCounter;
    
    courseRow.innerHTML = `
        <div class="form-group">
            <label>Course Name</label>
            <input type="text" placeholder="e.g., Mathematics 101" class="course-name" onchange="calculateAll()">
        </div>
        <div class="form-group">
            <label>Grade</label>
            <select class="course-grade" onchange="calculateAll()">
                <option value="">Select Grade</option>
                ${Object.keys(gradePoints).map(grade => 
                    `<option value="${grade}">${grade}</option>`
                ).join('')}
            </select>
        </div>
        <div class="form-group">
            <label>Credits</label>
            <input type="number" min="0" step="0.5" placeholder="3" class="course-credits" onchange="calculateAll()">
        </div>
        <button class="btn-remove" onclick="removeCourse(${semesterId}, ${courseCounter})" title="Remove Course">✕</button>
    `;
    
    coursesList.appendChild(courseRow);
    updateStatistics();
}

function removeCourse(semesterId, courseId) {
    const courseRow = document.querySelector(`.course-row[data-course-id="${courseId}"]`);
    if (courseRow) {
        courseRow.remove();
    }
    
    const coursesList = document.querySelector(`.courses-list[data-semester="${semesterId}"]`);
    const remainingCourses = coursesList.querySelectorAll('.course-row');
    
    if (remainingCourses.length === 0) {
        coursesList.innerHTML = `
            <div class="empty-state" style="padding: 2rem;">
                <p style="font-size: 0.875rem;">No courses added yet. Click "Add Course" to begin.</p>
            </div>
        `;
    }
    
    calculateAll();
}

function removeSemester(semesterId) {
    const semesterCard = document.querySelector(`.semester-card[data-semester-id="${semesterId}"]`);
    if (semesterCard) {
        semesterCard.remove();
    }
    
    const remainingSemesters = document.querySelectorAll('.semester-card');
    if (remainingSemesters.length === 0) {
        if (emptyState) {
            emptyState.style.display = 'block';
        }
    }
    
    calculateAll();
}

function clearAll() {
    if (confirm('Are you sure you want to clear all semesters and courses? This action cannot be undone.')) {
        semestersContainer.innerHTML = `
            <div class="empty-state" id="emptyState">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p>No semesters added yet. Click "Add Semester" to get started!</p>
            </div>
        `;
        semesterCounter = 0;
        courseCounter = 0;
        calculateAll();
    }
}

function calculateSemesterGPA(semesterId) {
    const coursesList = document.querySelector(`.courses-list[data-semester="${semesterId}"]`);
    const courses = coursesList.querySelectorAll('.course-row');
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    courses.forEach(course => {
        const gradeSelect = course.querySelector('.course-grade');
        const creditsInput = course.querySelector('.course-credits');
        
        const grade = gradeSelect.value;
        const credits = parseFloat(creditsInput.value) || 0;
        
        if (grade && credits > 0) {
            const points = gradePoints[grade];
            totalGradePoints += points * credits;
            totalCredits += credits;
        }
    });
    
    const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    
    const semesterCard = document.querySelector(`.semester-card[data-semester-id="${semesterId}"]`);
    const gpaDisplay = semesterCard.querySelector('.semester-gpa strong');
    gpaDisplay.textContent = gpa.toFixed(2);
    
    return { gpa, totalCredits, totalGradePoints };
}

function calculateCGPA() {
    const semesters = document.querySelectorAll('.semester-card');
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    semesters.forEach(semester => {
        const semesterId = semester.dataset.semesterId;
        const semesterData = calculateSemesterGPA(semesterId);
        
        totalGradePoints += semesterData.totalGradePoints;
        totalCredits += semesterData.totalCredits;
    });
    
    const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    
    const cgpaDisplay = document.getElementById('cgpaDisplay');
    cgpaDisplay.textContent = cgpa.toFixed(2);
    
    const gradeScale = document.getElementById('gradeScale');
    gradeScale.textContent = getGradeFromCGPA(cgpa);
    
    return cgpa;
}

function getGradeFromCGPA(cgpa) {
    if (cgpa >= 3.75) return 'A / Excellent';
    if (cgpa >= 3.5) return 'A- / Very Good';
    if (cgpa >= 3.33) return 'B+ / Good';
    if (cgpa >= 3.0) return 'B / Above Average';
    if (cgpa >= 2.75) return 'B- / Average';
    if (cgpa >= 2.5) return 'C+ / Below Average';
    if (cgpa >= 2.0) return 'C / Pass';
    if (cgpa >= 1.0) return 'D / Poor';
    if (cgpa > 0) return 'F / Fail';
    return '-';
}

function updateStatistics() {
    const semesters = document.querySelectorAll('.semester-card');
    const courses = document.querySelectorAll('.course-row');
    
    let totalCredits = 0;
    courses.forEach(course => {
        const creditsInput = course.querySelector('.course-credits');
        const credits = parseFloat(creditsInput.value) || 0;
        totalCredits += credits;
    });
    
    document.getElementById('totalSemesters').textContent = semesters.length;
    document.getElementById('totalCourses').textContent = courses.length;
    document.getElementById('totalCredits').textContent = totalCredits.toFixed(1);
}

function calculateAll() {
    calculateCGPA();
    updateStatistics();
}

function loadExample() {
    if (confirm('This will clear all current data and load example semesters. Continue?')) {
        clearAll();
        
        setTimeout(() => {
            addSemester();
        setTimeout(() => {
            addCourse(1);
            setTimeout(() => {
                const course1 = document.querySelector('.course-row[data-course-id="1"]');
                course1.querySelector('.course-name').value = 'Introduction to Programming';
                course1.querySelector('.course-grade').value = 'A';
                course1.querySelector('.course-credits').value = '3';
                
                addCourse(1);
                setTimeout(() => {
                    const course2 = document.querySelector('.course-row[data-course-id="2"]');
                    course2.querySelector('.course-name').value = 'Calculus I';
                    course2.querySelector('.course-grade').value = 'B+';
                    course2.querySelector('.course-credits').value = '4';
                    
                    addCourse(1);
                    setTimeout(() => {
                        const course3 = document.querySelector('.course-row[data-course-id="3"]');
                        course3.querySelector('.course-name').value = 'English Composition';
                        course3.querySelector('.course-grade').value = 'A-';
                        course3.querySelector('.course-credits').value = '3';
                        
                        addSemester();
                        setTimeout(() => {
                            addCourse(2);
                            setTimeout(() => {
                                const course4 = document.querySelector('.course-row[data-course-id="4"]');
                                course4.querySelector('.course-name').value = 'Data Structures';
                                course4.querySelector('.course-grade').value = 'A+';
                                course4.querySelector('.course-credits').value = '3';
                                
                                addCourse(2);
                                setTimeout(() => {
                                    const course5 = document.querySelector('.course-row[data-course-id="5"]');
                                    course5.querySelector('.course-name').value = 'Physics I';
                                    course5.querySelector('.course-grade').value = 'B';
                                    course5.querySelector('.course-credits').value = '4';
                                    
                                    calculateAll();
                                }, 50);
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
    }, 100);
    }
}

calculateAll();
