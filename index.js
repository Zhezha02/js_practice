function Relative (nameOfRelative, age, sex, isMarried, favouriteColor ) {
  this.age = age;
  if(isNaN(age)){
    this.age = +prompt(`Введите возраст члена семьи ${nameOfRelative} числом!!!`)
  }
  
  this.sex = sex;
  this.isMarried = (isMarried === '+' ? true : false);
  this.favouriteColor = favouriteColor;
}

function Family () {
  let relativesNumber = +prompt('Сколько у вас членов семьи?');
  while (isNaN(relativesNumber)) {
    relativesNumber = +prompt('Не верно, введите числом количество родственников!');
  }

  for (let i = 0; i < relativesNumber ; i++) {
    const nameOfRelative = prompt('Введите имя родственника');
    const age = +prompt(`Введите возраст члена семьи ${nameOfRelative}`);
    const sex = prompt(`Введите пол члена семьи ${nameOfRelative}`);
    const isMarried = prompt(`Женат(а) ли член семьи ${nameOfRelative} (+, -)`);
    const favouriteColor = prompt(`Введите любимый цвет члена семьи ${nameOfRelative}`);

     this[nameOfRelative] = new Relative (nameOfRelative, age, sex, isMarried, favouriteColor);
  }
}
const family = new Family();
