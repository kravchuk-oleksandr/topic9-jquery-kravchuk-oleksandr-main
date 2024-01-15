/**
В папці [task4](task4/) створіть HTML-сторінку з 6 чекбоксами. Підключіть бібліотеку **JQuery** 
та напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.
*/

$(document).ready(function () {
    $('input[type = "checkbox"]').change(function () {
        let lLength = $('input[type = "checkbox"]:checked').length;

        if (lLength === 3) {
            $('input[type="checkbox"]').not(':checked').attr('disabled', true);
        }
        else {
            $('input[type="checkbox"]').attr('disabled', false);
        }
    });
});