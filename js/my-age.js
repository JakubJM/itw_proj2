// Funkce pro vypocet veku podle data narozeni
function calc_age(date_of_birth) {
  const today = new Date(); // dnesni datum
  const birth = new Date(date_of_birth); // datum narozeni

  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();

  // Kontrola jestli uz  tenhle ro probehly narozeniny
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Moje datum narozeni (format RRRR-MM-DD)
const myBirthday = "2005-09-18";

// Vlozi vypocitany vek do HTML
document.getElementById("myAge").innerText = calc_age(myBirthday);