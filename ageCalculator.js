const age = '1999-03-30'

const DOB = new Date(age)
const age = this.calculateAge(DOB) 
  
function calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
}
