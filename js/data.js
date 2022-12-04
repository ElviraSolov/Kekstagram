import { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator } from './util.js';

// const COMMENT_LENGTH = 140;
// const HASHTAG_LENGTH = 20;
const POSTS_COUNT = 25;

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

const generateCommentId = createIdGenerator();
const generatePostId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

function createPost() {
  const postId = generatePostId();
  return {
    id: postId,
    url: `photos/${  postId  }.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from(
      {length: getRandomPositiveInteger(0, 6)}, createComment
    ),
  };
}

const getPosts = () => {
  const posts = Array.from(
    {length: POSTS_COUNT}, createPost
  );
  return(posts);
};

export { getPosts };
