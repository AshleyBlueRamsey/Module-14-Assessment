const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentsByScore", () => {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
     ];

     it("should return students partitioned into two arrays based on score", () => {
        const expected = [
            [
                { name: "Morgan Sutton", score: 7.4 },
            ],
            [
                { name: "Leo Yeon-Joo", score: 8.9 },
                { name: "Natalee Vargas", score: 9.2 },
            ],
        ];
        const actual = partitionStudentsByScore(students, 8);
        expect(actual).to.eql(expected);
    });

    it("should return an array of two empty arrays if the student list is empty", () => {
      const students = [];
      const expected = [[], []];
      const actual = partitionStudentsByScore(students, 0);
      expect(actual).to.eql(expected);
    });
    it("should put all students into first array if the scores are appropriate", () => {
        const expected = [
            [
                { name: "Leo Yeon-Joo", score: 8.9 },
                { name: "Morgan Sutton", score: 7.4 },
                { name: "Natalee Vargas", score: 9.2 },
            ],
            [],
        ];
        const actual = partitionStudentsByScore(students, 9.5);
        expect(actual).to.eql(expected);
    });
  
  it("should put all students into second array if the scores are appropriate", () => {
    const expected = [
      [],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2},
      ],
    ];
    const actual = partitionStudentsByScore(students, 4);
    expect(actual).to.eql(expected);
  });

});

