const levelSelection = (e) => {
    e.preventDefault();
    var getSelectedLevel = document.querySelector('input[name="level"]:checked');
    if (getSelectedLevel != null) {
        localStorage.setItem('level', getSelectedLevel.value)
        window.location.href = "game.html"
    } else {
        alert("please select a level");
    }
}


const form = document.getElementById('form').addEventListener('submit', levelSelection)
