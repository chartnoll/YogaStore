var person = {
  firstName : 'Jack',
  secondName : 'Sparrow',
  age : 10,
  ageInDays : function() {
    return person.age * 365;
    },
  printageInDays : function() {
    console.log('I am ' + person.age * 365 + ' days old');
    }
  };


person.speak = function() { console.log (person.ageInDays() / 30) };

console.log(person);

console.log('Hello' + person.firstName + person.secondName);

person.speak = function() { console.log (person.age * 12) };

person.speak();

person.ageInDays();

//var group = [person];
//group.person;

//group[1].firstName = 'Henry';
//group[1].secondName = 'Devil';

//console.log(group);
