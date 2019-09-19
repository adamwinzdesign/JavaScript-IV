// CODE here for your Lambda Classes
// Person first - name, age, location, speak()
// Instructor - extends Person, also has specialty, favLanguage, catchPhrase, demo(subject), grade(student, subject)
// Student - extends Person, also has previousBackground, className, favSubjects, listsSubjects(), PRAssignment(), sprintChallenge()
// PM - extends Instructors - gradClassName, favInstructor, standUp(), debugsCode()

class Person {
  constructor(attr) {
    this.name = attr.name,
    this.age = attr.age,
    this.location = attr.location
  }
  speak() {
    return `Hello, my name is ${this.name} and I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty,
    this.favLanguage = attr.favLanguage,
    this.catchPhrase = attr.catchPhrase
  } 
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
}
