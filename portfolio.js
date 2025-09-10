function addAchievement() {
    const input = document.getElementById('new-achievement');
    const value = input.value.trim();

    if(value !== "") {
        const ul = document.getElementById('achievement-list');
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter an achievement!");
    }
}