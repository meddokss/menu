

Я предлагаю как первый этап собеседования сделать небольшое тестовое задание.
Результаты тестового задания залейте на github.com, в README.md напишите шаги как запустить и проверить его.

Само задание состоит в том, чтобы сделать выпадающее меню без использования каких-то JavaScript библиотек ИЛИ с использованием React.js.
Вот требования к выпадающему меню:
Задание
1. Выпадающее меню должно корректно работать в браузерах ИЕ10+, Edge, Chrome, Firefox
2. Ширина и длина выпадающего меню должно подстраиваться под контент те если контент шире то меню шире, а если больше опций, то меню длиннее
3. Меню должно открываться вниз, под объектом, на который кликнули, если внизу недостаточно места, то меню должно автоматически открываться вверх, если вверху недостаточно место, то меню должно автоматически открываться влево, если слева недостаточно места то меню, должно открыться справа.


Мои комментарии
1. Количество пунктов главного меню может быть изменено в массиве меню - menuItems.
2. Количество пунктов выпрадающего subMenu - может быть изменено в массиве меню - menuItems. Пункты subMenu могут быть разными - для разных пунктов главного меню.
3. Выпрадающие пункты subMenu - только у элементов, для которых они заданиы в массиве.
4. При клике на другой пункт меню - предыдущее открытое - закрывается.
5. Ссылки href для перехода - соответствуют названиям пунктов меню.
6. Если с пунктом меню по соседству есть пункт - то открывать выпадающее меню будет открываться вверх/вниз.



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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

