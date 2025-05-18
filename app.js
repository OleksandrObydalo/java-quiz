import { createApp, ref, computed } from 'vue';

createApp({
    setup() {
        const questions = ref([
            {
                question: "Что такое Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JVM?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие есть основные принципы ООП в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое инкапсуляция?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое наследование?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое полиморфизм?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое абстракция?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между интерфейсом и абстрактным классом?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое перегрузка (overloading) и переопределение (overriding) методов?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое конструктор в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие типы данных существуют в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между примитивными типами и объектами?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое автоупаковка (autoboxing) и распаковка (unboxing)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое статические переменные и методы?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое final, finally и finalize?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое сериализация в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Как работает оператор equals?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между == и equals()?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Для чего нужен метод hashCode()?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Collections Framework?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие основные интерфейсы входят в Collections Framework?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между ArrayList и LinkedList?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между HashMap и HashTable?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Java Generics?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое многопоточность в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие способы создания потоков вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое синхронизация потоков?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое deadlock?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое wait(), notify() и notifyAll()?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Thread Pool в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое исключения в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие типы исключений вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "В чем разница между Checked и Unchecked исключениями?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое конструкция try-catch-finally?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое try-with-resources?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JDBC?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие основные компоненты JDBC вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое PreparedStatement?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое транзакции в JDBC?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Maven?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Gradle?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Spring Framework?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Dependency Injection?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Inversion of Control?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Spring Bean?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Каковы основные способы конфигурации Spring?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Spring Boot?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое аннотации в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое лямбда-выражения в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Stream API?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Optional в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое логирование и какие библиотеки для этого используются?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JUnit?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Mockito?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое REST API?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие HTTP методы вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JSON?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое сериализация и десериализация JSON?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Hibernate?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JPA?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое ORM?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие стратегии маппинга в Hibernate вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое HQL?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Criteria API?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие типы связей в Hibernate вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое кэш первого и второго уровня в Hibernate?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое lazy loading и eager loading?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое микросервисы?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Docker?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое CI/CD?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Git?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие основные команды Git вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое ветвление в Git?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое pull request?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое merge конфликты и как их разрешать?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое модификаторы доступа в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое immutable объекты?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие основные паттерны проектирования вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Singleton?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Factory?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Builder?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Observer?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Strategy?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Decorator?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое SOLID принципы?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что означает принцип единственной ответственности (SRP)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что означает принцип открытости/закрытости (OCP)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что означает принцип подстановки Лисков (LSP)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что означает принцип разделения интерфейсов (ISP)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что означает принцип инверсии зависимостей (DIP)?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое рефлексия в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое сборка мусора в Java?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое WeakReference, SoftReference и PhantomReference?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Java Memory Model?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие структуры данных вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое Big O Notation?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Какие алгоритмы сортировки вы знаете?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое SQL инъекции и как их предотвратить?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое XSS атаки?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое CSRF атаки?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое JWT?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое OAuth?",
                isSimple: false,
                needsReview: false
            },
            {
                question: "Что такое сложность алгоритмов и как её оценивать?",
                isSimple: false,
                needsReview: false
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
            filter,
            filteredQuestions,
            stats,
            toggleSimple,
            toggleReview
        };
    }
}).mount('#app');

