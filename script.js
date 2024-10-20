var btnOpen = document.getElementById('btnOpen');
var btnCheck = document.getElementById('btnCheck');
var btnClose = document.getElementById('btnClose');

// modal 창을 감춤
var closeRtn = function () {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
};

// modal 창을 보여줌
btnOpen.onclick = function () {
  var modal = document.getElementById('modal');
  modal.style.display = 'block';
};

btnCheck.onclick = closeRtn;
btnClose.onclick = closeRtn;
