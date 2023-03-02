# Init project
* SHIFT + ALT + F - это автоматическое выравнивание

Компонент это функция которая возвращает jsx
Построение компонентов происходит через главный компонент App (В основном)
А далее уже рендерим сам App который включает все остальные компоненты
Копонент также позволяют дробить приложение на семантические блоки
Если не нужно возвращать div, а нужен просто текст тогда используем ФРАГМЕНТ и это пустые ковычки <>something</>

При export не default нужно при импорте включать компонент в скобки {Component}

Props - это объект который всегда существует в компоненты в независимости от того указали мы его или нет
По сути он выполняет те же функции, что и Class, смесь Class и аргементов при вызове функций 
То есть в этот объект мы записываем props свойство, например props.name, указываем его в JSX, а уже при объявлении компонента указываем необходимое значение место самого props
В качетсве props можем передавать все что угодно (функции, объекты)
ПРИ ПЕРЕДАЧИ АТРИБУТА В ВЫЗОВ КОМПОНЕНТА МЫ ДОБАВЛЯЕМ В ОБЪЕКТ PROPS ЭТОГО КОМПОНЕНТА КЛЮЧ-ЗНАЧЕНИЕ И МОЖЕМ УЖЕ ВНУТРИ САМОЙ ФУНКЦИИ КОМПОНЕНТА ИСПОЛЬЗОВАТЬ САМ ОБЪЕКТ PROPS

Идентификатор key указывается для оптимизации рендеринга. 
React опирается на эти значения и понимает был ли изменен элемент или нет и ели не был тоа не изменяет уже отрисованный элемент.

Данные первичны, компоненты вторично и на основе данных выдает jsx

Подьем состояния это прием для управления несколькими компонентами с одинаковой логикой и которые должны работать друг с другом. Суть подхода в том чтобы поднять состояние до ближайшего родителя и управлять из родительского компонента. При необходимости можно создавать функции в родительском компоненте и передавать ее через атрибут в дочернии.

Styled components - способ стилизации компонентов через jsx без использования css
Для использования нужно испортировать элемент на страницу
Можно наследовать стили от прошлого элемента импортом и в скобках для style() сделать переназначение
При помощи as можно изменить один элемент на другой, например кнопку на див
Стилизовать можно и вложенные элементы сразу при создании общего компонента 
В таких компонентах можно использовать props и задавать условия и от условиям компонент будет получать стилизацию

Class field это создание свойств без конструктора

Все обновления и удаления компонентов в реакт размещаются в определеннх местах (хуках)
Например все обновления должны происходить в componentDidMount