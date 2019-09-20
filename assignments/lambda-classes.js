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
    this.favSubjects.forEach(subj => {
      console.log(`One of ${this.name}'s favorite subjects is ${subj}.`)
   });
  }
  
  PRAssignment(subject) {
    return `${this.name} submitted a pull request for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName,
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel} @channel that the time for standup has arrived!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

const adam = new Student({
  name: 'Adam',
  age: 41,
  location: 'Columbia, MO, USA',
  previousBackground: 'Insurance',
  className: 'WEB24FT',
  favSubjects: ['CSS', 'JavaScript']
});

const spidey = new Student({
  name: 'Peter',
  age: 17,
  location: 'New York, NY',
  previousBackground: 'Biology Student',
  className: 'Bio 434',
  favSubjects: ['Biology', 'Criminal Justice', 'Sarcasm']
});

const tony = new Instructor({
  name: 'Tony',
  age: 42,
  location: 'New York, NY',
  specialty: 'Electrical Engineering',
  favLanguage: 'billionaire',
  catchPhrase: 'Jarvis!'
});

const bruce = new Instructor({
  name: 'Bruce',
  age: 40,
  location: 'Planet Hulk',
  specialty: 'Nuclear Physics',
  favLanguage: 'English',
  catchPhrase: 'Hulk Smash!'
});

const thanos = new ProjectManager({
  name: 'Thanos',
  age: 5435,
  location: 'Titan',
  specialty: 'Genocide',
  favLanguage: 'Violence',
  catchPhrase: 'Perfectly balanced...as all things should be.',
  gradClassName: 'CS45',
  favInstructor: bruce
});

const galactus = new ProjectManager({
  name: 'Galactus',
  age: 345345,
  location: 'The Cosmic Egg',
  specialty: 'Consuming Planets',
  favLanguage: 'Heralds',
  catchPhrase: 'There does not exist a mortal who can stand before Galactus.',
  gradClassName: 'WEB2PT',
  favInstructor: tony
});

console.log(adam.speak());
console.log(adam.age, adam.location);
console.log(adam.PRAssignment('JavaScript'));
console.log(adam.sprintChallenge('React'));
adam.listsSubjects();

console.log(spidey.speak());
console.log(spidey.age, spidey.location);
spidey.listsSubjects();

console.log(tony.speak());
console.log(tony.favLanguage);
console.log(tony.grade(adam, `Quantum Mechanics`));

console.log(bruce.speak());
console.log(bruce.grade(spidey, 'biology'));
console.log(bruce.demo('nuclear safety'));

console.log(galactus.speak());
console.log(galactus.catchPhrase);
console.log(galactus.demo('destruction'));
console.log(galactus.specialty);
console.log(galactus.debugsCode(spidey, 'witty retorts'));
console.log(galactus.favInstructor.catchPhrase);

console.log(thanos.speak());
console.log(thanos.debugsCode(adam, 'reality'));
console.log(thanos.catchPhrase);
console.log(thanos.standUp('Web24'));
console.log(thanos.favInstructor.name);
