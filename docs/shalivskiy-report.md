# Підсумковий індивідуальний звіт **Шалівського Ярослава**

## 1. Процент робіт виконаних розробником по звітам

| № | Назва звіту          | Вклад розробника у % |
| - | -------------------- | -------------------- |
| 1 | Пропозиція проекту   | 15                   |
| 2 | Менеджмент проекту   | 25                   |
| 3 | Розробка вимог       | 25                   |
| 4 | Проектування системи | 25                   |
| 5 | Тестування системи   | 25                   |

## 2. Процент робіт виконаних розробником по звітам

Відсоток написаного мною коду в фінальній версії продукту становить 20%.

## 3. Опис особистого внеску в розробку системи

### Проектування

Проектування модуля інтеграції з Нова Пошта API.
Проектування  API замовлень і доставки товару.

### Розробка

1. Розробка сервісів інтеграції з Нова Пошта API.
  - Сервіс створення доставки
  - Сервіс отримання інформації доставки
  - Сервіс отримання ціни доставки
  - Сервіс отримання очікуваної дати доставки
  - Сервіс отримання міст у яких можлива доставка
  - Сервіс отримання пунктів доставки
2. Розробка API замовлень і доставки товару.
3. Парсинг тестовових даних та наповнення бази даних.

 
### Менеджмент

Налагодження комунікації між учасниками проекту, вирішення проблем, ризиків, організація зустрічей, оформлення звітів і розподілення пріоритетів реалізації.

## 4. Опис алгоритмів та опанованих технологій/систем

При написанні модуля я використовував фреймворк Django. Я познайомився з Django REST Framework який дозволив зменшити об’єм коду при написанні API контролера. Також я опанував можливості інтеграції з сервісом Нова Пошта і реалізував потрібний функціонал. Під час проектування і імплементації API використовувалась специфікація Swagger/OpenAPI яка дозволила стоврити зрозумілий, легко модифікуємий і зручний опис API. Більш того специфікація Swagger/OpenAPI дала можливість автоматичної генерації клієнтських програм колегам по команді.
 

## 5. Складнощі при виконанні проекту

При виконанні проекту здійснилося декілька ризиків.

1. **Часовий ризик:** не вистачило часу для реалізації невеликої частини функціоналу, а саме переводу оплати з рахунку користувача на рахунок організації.
2. **Ризик інтеграції:** після детального аналізу можливостей API Нова Пошта виявилось, що без підписання контракту з організацією неможливо використовувати сервіс автоматичного створення накладних. Відповідно зникла можливість відслідковувати реальний товар. Для тестової версії мною був реалізований тестовий модуль для генерації статусу доставки товару і створення замовлення.