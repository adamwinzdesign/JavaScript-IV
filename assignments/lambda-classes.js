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
  grade(student, subject) {
    return `${student.name} gets a perfect score in ${subject}!`
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground,
    this.className = attr.className,
    this.favSubjects = attr.favSubjects
  }
  listsSubjects() {
    return `${this.name}'s favorite subjects are ${this.favSubjects}.`
  }
  PRAssignment(student, subject) {
    return `${this.name} submitted a pull request for ${this.subject}`
  }
  sprintChallenge(subject) {
    return `${student.name} has begun a sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName,
    this.favInstructor = attr.favInstructor
  }
  standUp(name, channel) {
    return `${name} announces to ${channel}@channel that the time for standup has arrived!`
  }
  debugsCode(student, subject) {
    return `${name} debugs ${student.name}'s code on ${subject}.`
  }
}