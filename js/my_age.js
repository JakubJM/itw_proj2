function calc_age(date_of_birth) {
    const today = new Date(); //dnesni datum
    const birth = new Date(date_of_birth);
    
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();

    //kontrola, jestli jsem uz mel tenhle rok narozeniny
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  //moje datum narozeni (formát RRRR-MM-DD)
  const myBirthday = "2005-09-18"; 

  //vlozeni vypocitaneho veku do html
  document.getElementById("my_age").innerText = calc_age(myBirthday);