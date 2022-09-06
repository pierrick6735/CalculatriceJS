//DOM
const touches = [...document.querySelectorAll('.bouton')];
//je récupère dans un nouveau tableau les valeurs dataset.key de mon 1er tableau 
const listeKeyCode = touches.map(element => element.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) => {
    if(listeKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Erreur : ' + e.message)
} )