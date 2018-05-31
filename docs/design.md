# Project d**esign**

## 1. Структурування системи

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527459419500_Screenshot_20180528_011645.png)

## 2. Моделювання управління

### 2.1 Модель управління серверної частини

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527188945742_Screenshot_20180524_220851.png)

### 2.2 Модель управління Web-клієнту

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A87A4D3FA0916DF33E074F20A0DFBA7EC48A024E13093A601962CCBE8B30C3AD_1527460062116_Untitled+Diagram+1.svg)

WEB-клієнт побудований на базі патерну проектування MVP. у ролі моделі виступає сховище данних. Воно займається збереженням і обробкою данних згідно з діями користувача. Увесь стан додатку являє собою чисту функцію від попереднього стану та поточної дії. Таким чином будь який стан додатку може бути описаний початковим станом та послідовністю дій. Функція, що займається зміною стану називається ред’юсером. В редьюсер поступають дії, що задані заздалегідь. Він при цьому може змінити стан, або залишити його незмінним. Зміна даних відбувається імутабельно. 
Всі асинхронні операції оброблюються окремо спеціальними функціями - генераторами. Асинхронно виконуються запити до API та таймери різного типу.
До інтерфейсу користувача дані поступають через ряд функцій, що спочкатку формують потрібні дані зі стану, форматують їх у кінцевий вигляд. Далі, через презентаційні компоненти інформація виводиться користувачеві.
Усі дії користувача проходять до контейнерів, що мають доступ до сховища і викликають зміну стану.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A87A4D3FA0916DF33E074F20A0DFBA7EC48A024E13093A601962CCBE8B30C3AD_1527538366565_Untitled+Diagram+4.svg)

Кожна модель може бути зв’язана із будь яким представленням і навпаки. У той час як вигляд може мати зв’язок лише з одним представленням. Таким чином представлення відповідає за надання даних з усіх отрібних моделей до вигляду. Вигляд не займается обробкою і форматуванням даних зовсім.

### 2.3 Модель управління Android додатку

![Структура модуля додатку](https://d2mxuefqeaa7sj.cloudfront.net/s_D30A39A76CD97880872C7450CC4DB0D753E7DA46624F313C8EEA4E7714DA4680_1527369152285_se-shop-android-arch+3.png)

Android додаток складається з модулів, які описують роботу окремого екрану додатку.

1. Presenter(презентер) - компонент модуля, якій відповідає за обробку подій користувацького інтерфейсу та підготовку до відображення даних з Intaractor’а. Є основною основною частиною шаблона проектування [MVP](https://uk.wikipedia.org/wiki/Model-View-Presenter)
[](https://github.com/Arello-Mobile/Moxy)
2. Interactor(інтерактор) - компонент модуля, який реалізує сценарії використання додатку за допомогою бізнес моделей(entities). Усі дані та події надходять у вигляді реактивних потоків.
3. Router(роутер) - компонент модуля, який являє собою абстракцію над навігацією Android framework’a. Взаємодія з компонентами платформи реалізується завдяки шаблона проектування [Команда](https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)) Таким чином досягається можливість навігації за відсутності платформа-залежних компонентів.
4. Repository(репозиторій) - компонент модуля, який являє собою [шлюз](http://design-pattern.ru/patterns/gateway.html) до різних джерел даних, таких як
  - мережа
  - база даних
  - оперативна пам’ять
  - інші
5. UI thread - поток для роботи з користувацьким інтерфейсом. Обробляються всі дії відображення даних та користувацькі події. Не має блокуватися.
6. Worker thread - один з фонових потоків. Слугує для уникнення блокування UI потоку.

## 3. Модульна декомпозиція

### 3.1 Модульна декомпозиція Web-клієнту

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A87A4D3FA0916DF33E074F20A0DFBA7EC48A024E13093A601962CCBE8B30C3AD_1527537751587_Untitled+Diagram+2.svg)

Компонента діаграма додатку.
Компоненти мають деревовидну структуру. Контейнери під’єднуються до сховища напряму.

### 3.2 Модульна декомпозиція Android додатку

![Структурна діаграмма Android додатку](https://d2mxuefqeaa7sj.cloudfront.net/s_D30A39A76CD97880872C7450CC4DB0D753E7DA46624F313C8EEA4E7714DA4680_1527542922145_module-decompose.png)

Android додаток складається з набору екранів які мають життєвий цикл. Кожен екран може бути вкладений в інший тим самим встановивши залежність життєвих циклів. Кожному екрану надаються залежності - об’єкти необхідні для функціонування екрану. Набір залежностей, екранів та зв’язків між ними утворюють граф залежностей. 

### 3.3 Структура бази даних зі зв’язками

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527458838341_Screenshot_20180528_010639.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527458976730_Screenshot_20180528_010930.png)



## 4. Специфікація інтерфейсів

### 4.1 Товари

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457798880_Screenshot_20180528_004949.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457916384_Screenshot_20180528_005145.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527453379630_Screenshot_20180527_233609.png)



![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527453347813_Screenshot_20180527_233540.png)

### 4.2 Замовлення

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527454642306_Screenshot_20180527_235714.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527453417390_Screenshot_20180527_233650.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527453503672_Screenshot_20180527_233815.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527453552712_Screenshot_20180527_233906.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527454559972_Screenshot_20180527_235547.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527454678978_Screenshot_20180527_235752.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527454896635_Screenshot_20180528_000126.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527454939298_Screenshot_20180528_000212.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527455077895_Screenshot_20180528_000430.png)

### 4.3 Користувач

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457102175_Screenshot_20180528_003812.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457474792_Screenshot_20180528_004426.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457439091_Screenshot_20180528_004350.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457504549_Screenshot_20180528_004456.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457588303_Screenshot_20180528_004617.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9B49B802F618CBB52DEB4ADD78773B2216645E5EBA081A2E3A9DFEC9F514EEDC_1527457406421_Screenshot_20180528_004317.png)

