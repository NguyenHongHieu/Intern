document.getElementById("submit").onclick = function() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('submit'));
    document.getElementById('container').appendChild(fragment);
}