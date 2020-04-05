function deleteContentListener() {
  $('#deleteContent').click(function (e) {
    var id;
    var oldNavName = $('#content').val();
    $.each($('nav a'), function (index, link) {
      if ((oldNavName = link.innerHTML)) {
        id = link.id;
      }
    });

    PRACTICE_SERVICE.deleteContent(id, displayData);
  });
}

function addNavListener() {
  $('nav a').click(function (e) {
    var id = e.currentTarget.id;
    var newNavName = $('#updateContent').val();

    PRACTICE_SERVICE.updateContent(id, newNavName, displayData);
  });
}

function displayData(addData) {
  var container = '<nav>';
  addData.forEach(function (doc) {
    var id = doc.id;
    var rawData = doc.data();
    container += `<a href="#" id="${id}">$
    {rawData.navName</a>`;
  });
  container += '</nav>';
  $('.showData').html(container);
  addNavListener();
  deleteContentListener();
}

function init() {
  $('.getData').click(function (e) {
    PRACTICE_SERVICE.getAllData(displayData);
  });

  $('#addData').click(function (e) {
    e.preventDefault();
    let nName = $('#nav-input').val().trim().toLowerCase();

    if (nName != '') {
      PRACTICE_SERVICE.checkPages(nName, alertUser);
      $('#nav-input').val('');
    } else {
      alert('add name');
    }
  });

  $('#checkPages').click(function (e) {
    e.preventDefault();
    console.log('check pages');
    PRACTICE_SERVICE.checkPages('products');
  });
}

$(document).ready(function () {
  alert('alert');
  PRACTICE_SERVICE.initFirebase();
});
