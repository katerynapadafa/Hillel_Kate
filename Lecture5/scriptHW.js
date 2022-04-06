const students = [{
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

const studentMarks = getStudentMark();
getAverageStudentMark(studentMarks);
getAverageGroupMark(students);

function getStudentMark(studentIndex) {
    studentIndex = +prompt('Enter student index');
    return students[studentIndex].marks;
};

function getAverageStudentMark(studentMarks) {
    const averageStudentMark = Math.round(studentMarks.reduce((acc, val) => acc + val) / studentMarks.length);
    alert(`Average student mark: ${averageStudentMark}`);
};

function getAverageGroupMark(students) {
    const groupMarksArray = students.map((el) => el.marks).flat();
    const averageGroupMark = groupMarksArray.reduce((acc, val) => acc + val) / groupMarksArray.length;
    alert(`Average group mark: ${averageGroupMark}`);
};