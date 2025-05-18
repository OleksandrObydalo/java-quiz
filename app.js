import { createApp, ref, computed } from 'vue';
import { answers } from './answers.js';

createApp({
    setup() {
        const questions = ref([
            {
                question: "Что такое Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[0]
            },
            {
                question: "Что такое JVM?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[1]
            },
            {
                question: "Какие есть основные принципы ООП в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[2]
            },
            {
                question: "Что такое инкапсуляция?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[3]
            },
            {
                question: "Что такое наследование?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[4]
            },
            {
                question: "Что такое полиморфизм?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[5]
            },
            {
                question: "Что такое абстракция?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[6]
            },
            {
                question: "В чем разница между интерфейсом и абстрактным классом?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[7]
            },
            {
                question: "Что такое перегрузка (overloading) и переопределение (overriding) методов?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[8]
            },
            {
                question: "Что такое конструктор в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[9]
            },
            {
                question: "Какие типы данных существуют в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[10]
            },
            {
                question: "В чем разница между примитивными типами и объектами?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[11]
            },
            {
                question: "Что такое автоупаковка (autoboxing) и распаковка (unboxing)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[12]
            },
            {
                question: "Что такое статические переменные и методы?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[13]
            },
            {
                question: "Что такое final, finally и finalize?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[14]
            },
            {
                question: "Что такое сериализация в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[15]
            },
            {
                question: "Как работает оператор equals?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[16]
            },
            {
                question: "В чем разница между == и equals()?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[17]
            },
            {
                question: "Для чего нужен метод hashCode()?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[18]
            },
            {
                question: "Что такое Collections Framework?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[19]
            },
            {
                question: "Какие основные интерфейсы входят в Collections Framework?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[20]
            },
            {
                question: "В чем разница между ArrayList и LinkedList?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[21]
            },
            {
                question: "В чем разница между HashMap и HashTable?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[22]
            },
            {
                question: "Что такое Java Generics?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[23]
            },
            {
                question: "Что такое многопоточность в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[24]
            },
            {
                question: "Какие способы создания потоков вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[25]
            },
            {
                question: "Что такое синхронизация потоков?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[26]
            },
            {
                question: "Что такое deadlock?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[27]
            },
            {
                question: "Что такое wait(), notify() и notifyAll()?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[28]
            },
            {
                question: "Что такое Thread Pool в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[29]
            },
            {
                question: "Что такое исключения в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[30]
            },
            {
                question: "Какие типы исключений вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[31]
            },
            {
                question: "В чем разница между Checked и Unchecked исключениями?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[32]
            },
            {
                question: "Что такое конструкция try-catch-finally?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[33]
            },
            {
                question: "Что такое try-with-resources?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[34]
            },
            {
                question: "Что такое JDBC?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[35]
            },
            {
                question: "Какие основные компоненты JDBC вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[36]
            },
            {
                question: "Что такое PreparedStatement?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[37]
            },
            {
                question: "Что такое транзакции в JDBC?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[38]
            },
            {
                question: "Что такое Maven?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[39]
            },
            {
                question: "Что такое Gradle?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[40]
            },
            {
                question: "Что такое Spring Framework?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[41]
            },
            {
                question: "Что такое Dependency Injection?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[42]
            },
            {
                question: "Что такое Inversion of Control?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[43]
            },
            {
                question: "Что такое Spring Bean?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[44]
            },
            {
                question: "Каковы основные способы конфигурации Spring?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[45]
            },
            {
                question: "Что такое Spring Boot?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[46]
            },
            {
                question: "Что такое аннотации в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[47]
            },
            {
                question: "Что такое лямбда-выражения в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[48]
            },
            {
                question: "Что такое Stream API?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[49]
            },
            {
                question: "Что такое Optional в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[50]
            },
            {
                question: "Что такое логирование и какие библиотеки для этого используются?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[51]
            },
            {
                question: "Что такое JUnit?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[52]
            },
            {
                question: "Что такое Mockito?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[53]
            },
            {
                question: "Что такое REST API?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[54]
            },
            {
                question: "Какие HTTP методы вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[55]
            },
            {
                question: "Что такое JSON?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[56]
            },
            {
                question: "Что такое сериализация и десериализация JSON?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[57]
            },
            {
                question: "Что такое Hibernate?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[58]
            },
            {
                question: "Что такое JPA?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[59]
            },
            {
                question: "Что такое ORM?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[60]
            },
            {
                question: "Какие стратегии маппинга в Hibernate вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[61]
            },
            {
                question: "Что такое HQL?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[62]
            },
            {
                question: "Что такое Criteria API?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[63]
            },
            {
                question: "Какие типы связей в Hibernate вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[64]
            },
            {
                question: "Что такое кэш первого и второго уровня в Hibernate?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[65]
            },
            {
                question: "Что такое lazy loading и eager loading?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[66]
            },
            {
                question: "Что такое микросервисы?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[67]
            },
            {
                question: "Что такое Docker?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[68]
            },
            {
                question: "Что такое CI/CD?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[69]
            },
            {
                question: "Что такое Git?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[70]
            },
            {
                question: "Какие основные команды Git вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[71]
            },
            {
                question: "Что такое ветвление в Git?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[72]
            },
            {
                question: "Что такое pull request?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[73]
            },
            {
                question: "Что такое merge конфликты и как их разрешать?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[74]
            },
            {
                question: "Что такое модификаторы доступа в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[75]
            },
            {
                question: "Что такое immutable объекты?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[76]
            },
            {
                question: "Какие основные паттерны проектирования вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[77]
            },
            {
                question: "Что такое Singleton?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[78]
            },
            {
                question: "Что такое Factory?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[79]
            },
            {
                question: "Что такое Builder?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[80]
            },
            {
                question: "Что такое Observer?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[81]
            },
            {
                question: "Что такое Strategy?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[82]
            },
            {
                question: "Что такое Decorator?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[83]
            },
            {
                question: "Что такое SOLID принципы?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[84]
            },
            {
                question: "Что означает принцип единственной ответственности (SRP)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[85]
            },
            {
                question: "Что означает принцип открытости/закрытости (OCP)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[86]
            },
            {
                question: "Что означает принцип подстановки Лисков (LSP)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[87]
            },
            {
                question: "Что означает принцип разделения интерфейсов (ISP)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[88]
            },
            {
                question: "Что означает принцип инверсии зависимостей (DIP)?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[89]
            },
            {
                question: "Что такое рефлексия в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[90]
            },
            {
                question: "Что такое сборка мусора в Java?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[91]
            },
            {
                question: "Что такое WeakReference, SoftReference и PhantomReference?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[92]
            },
            {
                question: "Что такое Java Memory Model?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[93]
            },
            {
                question: "Какие структуры данных вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[94]
            },
            {
                question: "Что такое Big O Notation?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[95]
            },
            {
                question: "Какие алгоритмы сортировки вы знаете?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[96]
            },
            {
                question: "Что такое SQL инъекции и как их предотвратить?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[97]
            },
            {
                question: "Что такое XSS атаки?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[98]
            },
            {
                question: "Что такое CSRF атаки?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[99]
            },
            {
                question: "Что такое JWT?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[100]
            },
            {
                question: "Что такое OAuth?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[101]
            },
            {
                question: "Что такое сложность алгоритмов и как её оценивать?",
                isSimple: false,
                needsReview: false,
                showAnswer: false,
                answer: answers[102]
            }
        ]);

        // Adding answers to all questions
        questions.value.forEach((question, index) => {
            if (!question.answer && answers[index]) {
                question.answer = answers[index];
            }
            if (!question.hasOwnProperty('showAnswer')) {
                question.showAnswer = false;
            }
        });

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
            // Only save the state, not the answers (to save space)
            const stateToSave = questions.value.map(q => ({
                isSimple: q.isSimple,
                needsReview: q.needsReview
            }));
            localStorage.setItem('javaQuestions', JSON.stringify(stateToSave));
        };

        const loadFromLocalStorage = () => {
            const savedQuestions = localStorage.getItem('javaQuestions');
            if (savedQuestions) {
                const savedState = JSON.parse(savedQuestions);
                // Merge saved state with current questions
                savedState.forEach((state, index) => {
                    if (index < questions.value.length) {
                        questions.value[index].isSimple = state.isSimple;
                        questions.value[index].needsReview = state.needsReview;
                    }
                });
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
            toggleReview,
            toggleAnswer
        };
    }
}).mount('#app');