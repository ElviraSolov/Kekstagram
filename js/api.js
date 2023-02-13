const getData = (onSuccess) => {
    fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(!response.ok) {
        throw new Error('Не удалось отправить фото. Попробуйте еще раз');
      }
      onSuccess();
    })
    .catch((err) => {
      onFail(err.message);
  });
};

export { getData, sendData };
