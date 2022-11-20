const NAMES = [
  'Полина',
  'Максим',
  'Кира',
  'Мария',
  'Арина',
  'Варвара',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Угадайте, где я?',
  'Выходные, пожалуйста, не покидайте меня. #relax #отдых',
  'Разбираю свою жизнь, как Мари Кондо. #осознанность',
  'Соскучились?',
  'Мечты сбываются, только если ты идешь им навстречу. #мечта #цель',
  'А почему бы и да!',
  'Твори, вдохновляйся, мечтай.',
  'Что это, если не любовь? #love',
  'Самая большая ошибка, которую вы можете совершить, – это бояться ошибаться.',
  'Привет.',
];

// const COMMENT_LENGTH = 140;
// const HASHTAG_LENGTH = 20;
const POSTS_COUNT = 25;

//Функция,  возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b = 0) {
  if (isNaN(a)) {
    return 'Ошибка! Первый параметр должен быть числом';
  }

  // Чтобы убедиться, что пользователь не передал дробные значения,
  // для нижнюю границу диапазона мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Функция для проверки максимальной длины строки
function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}

// eslint-disable-next-line no-console
console.log(checkStringLength('это строка', 9));

//Функция, берет рандомный элемент из указанного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Конструктор по созданию поста
const createPost = (id) => {
  return {
    id,
    url: 'photos/' + id + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 5)}, createComment),
  };
};

//Конструктор по созданию комментария
const createComment = (id) => {
  return {
    id,
    avatar: 'img/avatar-' + getRandomPositiveInteger(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

//Функция для создания и возвращения массива из 25 сгенерированных объектов
const getPosts = () => {
  const posts = Array.from({length: POSTS_COUNT}, createPost);
  return(posts);
};

// eslint-disable-next-line no-console
console.log(getPosts());
