window.onload = function() {

  let form = document.getElementById('name-form');
  form.onsubmit = function(event) {
    event.preventDefault();
    let result = document.getElementById('result');
    let name = form.fullName.value
    this.reset();

    const url = 'https://api.github.com/users/'+name+'/repos';

    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
    const primaryLanguages = data.map(function(language) {
      return language.language;
    })

    function countLanguages(language, count) {
      language[count] = (++language[count] || 1);
      return language;
    }

    const primaryLanguageCount = primaryLanguages.reduce(countLanguages, {});

    let arrCount = Object.values(primaryLanguageCount);
    let largestCount = Math.max.apply(Math, arrCount);

    for (let value in primaryLanguageCount) {
      let key = primaryLanguageCount[value];
      if (key == largestCount) {
        let faveLanguage = document.getElementById('faveLanguage');
        faveLanguage.innerHTML = value;
      }
    }
  });
};
}
