//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = new Map();
    this.addedStudents = new Set();
  }
  
  roster() {
    const result = [];
    
    const grades = Array.from(this.students.keys()).sort((a, b) => a - b);
    
    for (const grade of grades) {
      const studentsInGrade = this.students.get(grade);
      result.push(...studentsInGrade);
    }
    
    return result;
  }

  add(name, grade) {
    if (this.addedStudents.has(name)) {
      return false;
    }

    if (!this.students.has(grade)) {
      this.students.set(grade, []);
    }

    this.students.get(grade).push(name);
    this.addedStudents.add(name);
    
    this.students.get(grade).sort();

    return true;
  }

  grade(grade) {
    if (!this.students.has(grade)) {
      return [];
    }
    
    return [...this.students.get(grade)];
  }
}
