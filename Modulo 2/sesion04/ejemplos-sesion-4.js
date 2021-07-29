
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

const ageJohn = calculateAge(1995);

console.log(ageJohn);

function yearsUntilRetirement(year, name) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1995, 'John Doe');

const whatDoYouDo = function(job, name) {
  switch (job) {
    case 'developer':
      return name + ' develops cool apps.';
    case 'designer':
      return name + ' designs awesome websites.';
    default:
      return name + ' does something else.'
  }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));

(function(lastName) {
  const firstName = "John";
  console.log(`${firstName} ${lastName}`);
})('Doe');
