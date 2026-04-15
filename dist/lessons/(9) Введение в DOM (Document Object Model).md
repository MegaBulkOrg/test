# Урок 9 — Введение в DOM (Document Object Model)

## **Простое объяснение**

DOM — это представление HTML-страницы в виде структуры, с которой можно работать через JavaScript.

👉 JS может:

* находить элементы
* менять текст
* менять стили
* реагировать на действия пользователя

---

## **Аналогия**

HTML — это документ
DOM — это «дерево элементов»

```id="k3m8qx"
Страница
 ├─ Заголовок
 ├─ Кнопка
 └─ Текст
```

---

## **1. Пример HTML**

```html
<h1 id="title">Привет</h1>
<button id="btn">Нажми</button>
```

---

## **2. Получение элемента**

```javascript id="d8p2zt"
let title = document.getElementById("title");
```

---

## **3. Изменение текста**

```javascript id="m5k9wx"
title.textContent = "Новый текст";
```

---

## **4. Работа с кнопкой**

```javascript id="q1r7nb"
let btn = document.getElementById("btn");

btn.onclick = function() {
  console.log("Кнопка нажата");
};
```

---

## **5. Изменение стиля**

```javascript id="z3v6mt"
title.style.color = "red";
```

---

## **6. Поиск элементов**

### По классу

```javascript id="c8n2pq"
document.getElementsByClassName("item");
```

---

### Современный способ

```javascript id="y4t9ks"
document.querySelector("#title");
document.querySelectorAll(".item");
```

---

## **7. Добавление элементов**

```javascript id="h2m7df"
let div = document.createElement("div");

div.textContent = "Новый элемент";

document.body.appendChild(div);
```

---

## **8. Удаление элементов**

```javascript id="r9k1xp"
div.remove();
```

---

## **9. События (важно)**

```javascript id="w6p3zn"
btn.addEventListener("click", function() {
  alert("Нажали кнопку");
});
```

---

## **10. Когда используется DOM**

✔ кнопки
✔ формы
✔ интерфейсы
✔ веб-приложения

---

## **11. Практические кейсы**

### Пример 1 — изменение текста

```javascript id="t2q8xm"
let title = document.getElementById("title");
title.textContent = "Добро пожаловать";
```

---

### Пример 2 — кнопка

```javascript id="n7v4kp"
btn.addEventListener("click", function() {
  title.textContent = "Клик!";
});
```

---

### Пример 3 — динамический элемент

```javascript id="b5r9wd"
let p = document.createElement("p");
p.textContent = "Новый текст";

document.body.appendChild(p);
```

---

## **Практика**

### Задание 1

Создайте HTML с заголовком и получите его через JS

---

### Задание 2

Измените текст заголовка

---

### Задание 3

Создайте кнопку и обработайте клик

---

### Задание 4

Добавьте новый элемент на страницу

---

### Задание 5

Измените цвет текста

---

## **Разбор (пример)**

```javascript id="x4m2rq"
let title = document.getElementById("title");

title.textContent = "Новый текст";
```

---

## **Типовые ошибки**

| Ошибка                     | Причина               |
| -------------------------- | --------------------- |
| элемент не найден          | неправильный id       |
| JS запускается раньше HTML | скрипт не внизу       |
| забыли `#` или `.`         | ошибка в selector     |
| работа с null              | элемент не существует |

---

## **Контроль**

Вы должны уметь:

✔ находить элементы
✔ изменять содержимое
✔ работать с событиями
✔ добавлять элементы

---

## **Контрольные вопросы**

1. Что такое DOM?
2. Как получить элемент по id?
3. Чем `querySelector` лучше?
4. Что делает `addEventListener`?

---

## **Краткий вывод**

* DOM — это мост между HTML и JavaScript
* Позволяет управлять страницей
* Основа всех веб-приложений