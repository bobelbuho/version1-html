const profilBtn = document.getElementById('profilBtn')

document.addEventListener('DOMContentLoaded', function () {
    var profilBtn = document.getElementById('profilBtn');
    var cadre = document.getElementById('cadre');
  
    profilBtn.addEventListener('click', function () {
      cadre.classList.toggle('hidden');
    });
  });
  