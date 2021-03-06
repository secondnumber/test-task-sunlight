const KEYS = {
  person: 'person'
};

export function InsertPersonFromLS(data) {
  let person = GetPersonFromLS();
  person[0] = data;
  console.log(person);
  localStorage.setItem(KEYS.person, JSON.stringify(person));
}

export function GetPersonFromLS() {
  if (localStorage.getItem(KEYS.person) === null)
    localStorage.setItem(KEYS.person, JSON.stringify([
      {fullName: "Иванова Анна Михайловна", email: "ivanova@mail.ru", phone: ""}
    ]));
  return JSON.parse(localStorage.getItem(KEYS.person));
}
