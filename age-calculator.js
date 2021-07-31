const ageCalculator = function(name,yearOfBirth,currentYear) {
  const age =  currentYear  - yearOfBirth
  return (name + ' is ' + age + ' years old.');
}


ageCalculator('Suzie', 1989, 2021);
ageCalculator('Jack', 2009, 2021);
ageCalculator('Ali', 2021, 2021);
