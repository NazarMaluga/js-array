function getTopScoringStudents(students) {
  const topScorers = [];
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topScorers.push(students[i].name);
    }
  }
  
  return topScorers;
}

function getAverageAge(students) {
  let totalAge = 0;

  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }

  return totalAge / students.length;
}

function addStudent(students, student) {
  students.push(student);
  return students; 
}

function removeStudentByName(students, name) {
  const updatedStudents = [];
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]);
    }
  }
  
  return updatedStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
