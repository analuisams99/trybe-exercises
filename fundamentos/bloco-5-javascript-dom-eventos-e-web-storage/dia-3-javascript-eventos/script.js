function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25 ];

  const day = document.querySelector('#days');
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const day2 = dezDaysList[i];
    const dayNumbers = document.createElement('li');
    dayNumbers.innerHTML = day2;

    dayNumbers.className = 'day';

    if (holidays.includes(day2) ) {
      dayNumbers.classList.add('holiday');
    } 
    if (fridays.includes(day2)) {
      dayNumbers.classList.add('friday');
    }

    day.appendChild(dayNumbers);
  }
}
createDaysOfTheMonth();

function createHolidaysButton(title) {
  const btn = document.createElement('BUTTON');
  btn.innerHTML = title;
  btn.id = 'btn-holiday';

  const btnContainer = document.querySelector('.buttons-container');
  btnContainer.appendChild(btn); 
}

createHolidaysButton('Feriados')