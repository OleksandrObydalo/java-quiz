import { createApp, ref, computed } from 'vue';

createApp({
    setup() {
        const questions = ref([
            {
                question: "Что такое Java?",
                answer: "Java — это объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems. Он широко используется для создания кроссплатформенных приложений благодаря виртуальной машине JVM.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JVM?",
                answer: "JVM (Java Virtual Machine) — это виртуальная машина, которая выполняет байт-код Java. Она обеспечивает независимость выполнения Java-программ от конкретной операционной системы.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие есть основные принципы ООП в Java?",
                answer: "Основные принципы ООП: инкапсуляция, наследование, полиморфизм и абстракция. Эти принципы позволяют строить гибкие и масштабируемые приложения.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое инкапсуляция?",
                answer: "Инкапсуляция — это принцип ООП, при котором данные класса скрываются от внешнего доступа и к ним можно обращаться только через методы (геттеры и сеттеры).",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое наследование?",
                answer: "Наследование позволяет одному классу (дочернему) перенимать свойства и методы другого класса (родительского), что способствует повторному использованию кода.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое полиморфизм?",
                answer: "Полиморфизм — это возможность объектов с одинаковым интерфейсом вести себя по-разному в зависимости от конкретной реализации.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое абстракция?",
                answer: "Абстракция — это принцип ООП, при котором описываются только значимые характеристики объекта, скрывая детали реализации.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между интерфейсом и абстрактным классом?",
                answer: "Интерфейс определяет только поведение (методы без реализации), а абстрактный класс может содержать как реализованные, так и абстрактные методы. Интерфейс используется для задания контракта, а абстрактный класс — для частичной реализации.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое перегрузка (overloading) и переопределение (overriding) методов?",
                answer: "Перегрузка — это определение нескольких методов с одинаковым именем, но разными параметрами. Переопределение — это изменение реализации метода в подклассе.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое конструктор в Java?",
                answer: "Конструктор — это специальный метод, вызываемый при создании объекта. Он используется для инициализации полей класса.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие типы данных существуют в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие типы данных существуют в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между примитивными типами и объектами?",
                answer: "Это один из ключевых вопросов по теме Java: "В чем разница между примитивными типами и объектами?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое автоупаковка (autoboxing) и распаковка (unboxing)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое автоупаковка (autoboxing) и распаковка (unboxing)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое статические переменные и методы?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое статические переменные и методы?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое final, finally и finalize?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое final, finally и finalize?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое сериализация в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое сериализация в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Как работает оператор equals?",
                answer: "Это один из ключевых вопросов по теме Java: "Как работает оператор equals?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между == и equals()?",
                answer: "Это один из ключевых вопросов по теме Java: "В чем разница между == и equals()?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Для чего нужен метод hashCode()?",
                answer: "Это один из ключевых вопросов по теме Java: "Для чего нужен метод hashCode()?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Collections Framework?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Collections Framework?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие основные интерфейсы входят в Collections Framework?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие основные интерфейсы входят в Collections Framework?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между ArrayList и LinkedList?",
                answer: "Это один из ключевых вопросов по теме Java: "В чем разница между ArrayList и LinkedList?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между HashMap и HashTable?",
                answer: "Это один из ключевых вопросов по теме Java: "В чем разница между HashMap и HashTable?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Java Generics?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Java Generics?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое многопоточность в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое многопоточность в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие способы создания потоков вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие способы создания потоков вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое синхронизация потоков?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое синхронизация потоков?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое deadlock?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое deadlock?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое wait(), notify() и notifyAll()?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое wait(), notify() и notifyAll()?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Thread Pool в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Thread Pool в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое исключения в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое исключения в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие типы исключений вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие типы исключений вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "В чем разница между Checked и Unchecked исключениями?",
                answer: "Это один из ключевых вопросов по теме Java: "В чем разница между Checked и Unchecked исключениями?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое конструкция try-catch-finally?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое конструкция try-catch-finally?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое try-with-resources?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое try-with-resources?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JDBC?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое JDBC?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие основные компоненты JDBC вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие основные компоненты JDBC вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое PreparedStatement?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое PreparedStatement?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое транзакции в JDBC?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое транзакции в JDBC?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Maven?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Maven?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Gradle?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Gradle?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Spring Framework?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Spring Framework?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Dependency Injection?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Dependency Injection?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Inversion of Control?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Inversion of Control?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Spring Bean?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Spring Bean?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Каковы основные способы конфигурации Spring?",
                answer: "Это один из ключевых вопросов по теме Java: "Каковы основные способы конфигурации Spring?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Spring Boot?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Spring Boot?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое аннотации в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое аннотации в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое лямбда-выражения в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое лямбда-выражения в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Stream API?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Stream API?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Optional в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Optional в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое логирование и какие библиотеки для этого используются?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое логирование и какие библиотеки для этого используются?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JUnit?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое JUnit?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Mockito?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Mockito?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое REST API?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое REST API?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие HTTP методы вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие HTTP методы вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JSON?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое JSON?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое сериализация и десериализация JSON?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое сериализация и десериализация JSON?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Hibernate?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Hibernate?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JPA?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое JPA?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое ORM?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое ORM?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие стратегии маппинга в Hibernate вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие стратегии маппинга в Hibernate вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое HQL?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое HQL?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Criteria API?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Criteria API?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие типы связей в Hibernate вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие типы связей в Hibernate вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое кэш первого и второго уровня в Hibernate?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое кэш первого и второго уровня в Hibernate?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое lazy loading и eager loading?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое lazy loading и eager loading?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое микросервисы?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое микросервисы?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Docker?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Docker?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое CI/CD?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое CI/CD?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Git?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Git?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие основные команды Git вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие основные команды Git вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое ветвление в Git?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое ветвление в Git?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое pull request?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое pull request?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое merge конфликты и как их разрешать?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое merge конфликты и как их разрешать?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое модификаторы доступа в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое модификаторы доступа в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое immutable объекты?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое immutable объекты?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие основные паттерны проектирования вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие основные паттерны проектирования вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Singleton?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Singleton?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Factory?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Factory?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Builder?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Builder?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Observer?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Observer?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Strategy?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Strategy?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Decorator?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Decorator?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое SOLID принципы?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое SOLID принципы?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что означает принцип единственной ответственности (SRP)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что означает принцип единственной ответственности (SRP)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что означает принцип открытости/закрытости (OCP)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что означает принцип открытости/закрытости (OCP)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что означает принцип подстановки Лисков (LSP)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что означает принцип подстановки Лисков (LSP)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что означает принцип разделения интерфейсов (ISP)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что означает принцип разделения интерфейсов (ISP)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что означает принцип инверсии зависимостей (DIP)?",
                answer: "Это один из ключевых вопросов по теме Java: "Что означает принцип инверсии зависимостей (DIP)?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое рефлексия в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое рефлексия в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое сборка мусора в Java?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое сборка мусора в Java?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое WeakReference, SoftReference и PhantomReference?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое WeakReference, SoftReference и PhantomReference?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Java Memory Model?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Java Memory Model?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие структуры данных вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие структуры данных вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое Big O Notation?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое Big O Notation?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Какие алгоритмы сортировки вы знаете?",
                answer: "Это один из ключевых вопросов по теме Java: "Какие алгоритмы сортировки вы знаете?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое SQL инъекции и как их предотвратить?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое SQL инъекции и как их предотвратить?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое XSS атаки?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое XSS атаки?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое CSRF атаки?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое CSRF атаки?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое JWT?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое JWT?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое OAuth?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое OAuth?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            },
            {
                question: "Что такое сложность алгоритмов и как её оценивать?",
                answer: "Это один из ключевых вопросов по теме Java: "Что такое сложность алгоритмов и как её оценивать?". Ответ должен включать основные определения, примеры и практическое применение в коде.",
                isSimple: false,
                needsReview: false,
                showAnswer: false
            }
        ]);

        const filter = ref('all');

        const filteredQuestions = computed(() => {
            if (filter.value === 'all') {
                return questions.value;
            } else if (filter.value === 'simple') {
                return questions.value.filter(q => q.isSimple);
            } else if (filter.value === 'review') {
                return questions.value.filter(q => q.needsReview);
            }
            return questions.value;
        });

        const stats = computed(() => {
            return {
                simpleCount: questions.value.filter(q => q.isSimple).length,
                reviewCount: questions.value.filter(q => q.needsReview).length
            };
        });

        const toggleSimple = (index) => {
            questions.value[index].isSimple = !questions.value[index].isSimple;
            saveToLocalStorage();
        };

        const toggleReview = (index) => {
            questions.value[index].needsReview = !questions.value[index].needsReview;
            saveToLocalStorage();
        };

        
        const toggleAnswer = (index) => {
            questions.value[index].showAnswer = !questions.value[index].showAnswer;
        };
    

const saveToLocalStorage = () => {
            localStorage.setItem('javaQuestions', JSON.stringify(questions.value));
        };

        const loadFromLocalStorage = () => {
            const savedQuestions = localStorage.getItem('javaQuestions');
            if (savedQuestions) {
                questions.value = JSON.parse(savedQuestions);
            }
        };

        // Загрузка данных при инициализации
        loadFromLocalStorage();

        return {
            questions,
                        filteredQuestions,
            stats,
            toggleSimple,
            toggleReview,
            toggleAnswer,
            filter,
            filteredQuestions,
            stats,
            toggleSimple,
            toggleReview
        };
    }
}).mount('#app');

