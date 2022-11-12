function partitionStudentsByScore(students, score) {
  if(students.length === 0) {
    return [[], []]
  };
  let result = [];
  const array1 = students.filter((student) => student.score <= score);
  const array2 = students.filter((student) => student.score > score);
  result.push(array1, array2);
  return result;

};

module.exports = partitionStudentsByScore;
