module.exports = (plop) => {
  plop.setGenerator('day', {
    description: 'Add a day',
    prompts: [
      {
        type: 'input',
        name: 'day',
        message: 'day of advent code',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'days/{{ day }}',
        templateFiles: 'template/**/*',
      },
    ],
  });
};
