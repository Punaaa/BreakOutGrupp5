$.getJSON('/json/highscore.json', function(data) {
  HighscoreTranslation(data, 'sv');
});

function HighscoreTranslation(translation, language){
  let lang = language;
  let titles = translation.title;
  for(let title of titles[lang]){
    $('.highscore-title').empty().append(title.text);
  }
  
  let thead = $('thead').empty();
  let tbody = $('tbody').empty();
  let tr = $('<tr/>');

  let rankTitles = translation.ranktitle;
  for(let rankTitle of rankTitles[lang]){
    tr.append('<th scope="col">' + rankTitle.text + '</th>');
  }

  let scoreTitles = translation.scoretitle;
  for(let scoreTitle of scoreTitles[lang]){
    tr.append('<th scope="col">' + scoreTitle.text + '</th>');
  }

  let nameTitles = translation.nametitle;
  for(let nameTitle of nameTitles[lang]){
    tr.append('<th scope="col">' + nameTitle.text + '</th>');
  }

  thead.append(tr);

  let ranks = translation.rank;
  let i = 0;
  for(let rank of ranks[lang]){
    let tr = $('<tr/>');
    tr.append('<th scope="row">' + rank.text + '</th>');
    let highscores = translation.highscore;
    tr.append('<td>' + highscores[i].score + '</td>');
    tr.append('<td>' + highscores[i].name + '</td>');
    tbody.append(tr);
    i++;
  }
}

$('.sweFlag').click(function() {
  $.getJSON('/json/highscore.json', function(data) {
    HighscoreTranslation(data, 'sv');
  });
})

$('.britFlag').click(function() {
  $.getJSON('/json/highscore.json', function(data) {
    HighscoreTranslation(data, 'en');
  });
})