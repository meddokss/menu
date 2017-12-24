

Я предлагаю как первый этап собеседования сделать небольшое тестовое задание.
Результаты тестового задания залейте на github.com, в README.md напишите шаги как запустить и проверить его.

Само задание состоит в том, чтобы сделать выпадающее меню без использования каких-то JavaScript библиотек ИЛИ с использованием React.js.
Вот требования к выпадающему меню:
Задание
1. Выпадающее меню должно корректно работать в браузерах ИЕ10+, Edge, Chrome, Firefox
2. Ширина и длина выпадающего меню должно подстраиваться под контент те если контент шире то меню шире, а если больше опций, то меню длиннее
3. Меню должно открываться вниз, под объектом, на который кликнули, если внизу недостаточно места, то меню должно автоматически открываться вверх, если вверху недостаточно место, то меню должно автоматически открываться влево, если слева недостаточно места то меню, должно открыться справа.


Мои комментарии:<br>
Проверка:<br>

Перемещение пункта меню по горизонтали для проверки <br>
В файле App.scss для класса App задаю свойству align-items : flex-end, center, flex-start;<br>
.App {
    align-items: center;
}<br>

1. Количество пунктов главного меню может быть изменено в массиве меню - menuItems.
2. Количество пунктов выпрадающего subMenu - может быть изменено в массиве меню - menuItems. Пункты subMenu могут быть разными - для разных пунктов главного меню.
3. Выпрадающие пункты subMenu - только у элементов, для которых они заданы в массиве.
4. При клике на другой пункт меню - предыдущее открытое - закрывается.
5. Ссылки href для перехода - соответствуют названиям пунктов меню.
6. Если с пунктом меню по соседству есть пункт - то выпадающее меню будет открываться вверх/вниз.
7. Если слева/справа нет места - subMenu открываетяс с противоположной стороны.
8. Если сверху досточно места - subMenu меню открывается по центру, если нет - в один уровень с главным пунктом меню.




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.



