const selectimg = document.querySelectorAll('.monimage');
const popup = document.querySelector('.popupfilm');
const close = document.querySelector('.popupclose');
const text = document.querySelector('.popuptext');
const synopsis = [
    "Atteint d'une maladie du sang rare, le biochimiste Michael Morbius tente de se soigner. Il est déterminé à sauver les nombreuses autres victimes de cette malade, mais il s'infecte accidentellement avec une forme de vampirisme.",
    "Sonic veut maintenant prouver qu'il a l'étoffe d'un véritable héros. Un défi de taille se présente à lui quand le Dr Robotnik refait son apparition. Accompagné de son nouveau complice Knuckles, ils est en quête d'une émeraude dont le pouvoir permettrait de détruire l'humanité toute entière.",
    "Le milliardaire et justicier masqué Batman explore la corruption qui sévit à Gotham et notamment comment elle pourrait être liée à sa propre famille, les Wayne, à qui il doit toute sa fortune. En parallèle, il enquête sur les meurtres d'un tueur en série qui se fait connaître sous le nom de Sphinx et sème des énigmes cruelles sur son passage.",
    "Le chasseur de trésors Victor Sully Sullivan recrute Nathan Drake pour l'aider à récupérer une fortune vieille de 500 ans amassée par l'explorateur Ferdinand Magellan. Ce qui commence comme un cambriolage devient rapidement une course de globe-trotters pour atteindre le prix avant que l'impitoyable Santiago Moncada ne puisse mettre la main dessus.",
    "Alors que Mathieu Sapin écrit quelques pages de BD à l'occasion du quarantième anniversaire de l'élection de François Mitterrand, il se tourne pour connaître la petite histoire dans la grande vers les figures de l'ombre du Parti Socialiste, au premier rang desquelles Julien Dray, le « Baron Noir ».",
    "Prédateur indispensable à l'équilibre de la forêt, sa présence demeure néanmoins fragile dans un milieu largement accaparé par les humains.S'il est rarissime de croiser ce discret félin il est exceptionnel de découvrir son quotidien en milieu naturel.",
    "Au coeur des hauts plateaux tibétains, le photographe Vincent Munier entraîne l'écrivain Sylvain Tesson dans sa quête de la panthère des neiges. Il l'initie à l'art délicat de l'affût, à la lecture des traces et à la patience nécessaire pour entrevoir les bêtes.",
    "Après avoir déménagé dans une petite ville, une mère et ses deux enfants commencent à découvrir leur lien avec les Ghostbusters d'origine et l'héritage secret légué par leur grand-père.",
    "À l'approche de Noël, tout le monde se presse pour réunir de quoi manger malgré le froid. La malice et l'imagination seront au rendez-vous chez les animaux de la forêt pour célébrer l'hiver comme il se doit ! Quatre contes de Noël pour apprendre à partager en toute amitié !",
    "En lice pour représenter lItalie à lOscar du meilleur film étranger en 2021, *Gianfranco Rosi*, réalisateur notamment du très acclamé documentaire *Fuocoammare*, signe une nouvelle uvre crépusculaire, filmée durant trois ans le long des frontières des conflits au Moyen-Orient. Un documentaire qui explore dans un silence assourdissant le récit dune violence infinie.",
    "Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt la Désolation à bord d'un véhicule militaire piloté par l'Imperator Furiosa. Ils fuient la Citadelle où sévit le terrible Immortan Joe qui s'est fait voler un objet irremplaçable.",
    "James Bond n'est plus en service et profite d'une vie tranquille en Jamaïque. Mais son répit est de courte durée car l'agent de la CIA Felix Leiter fait son retour pour lui demander son aide. Sa mission, qui est de secourir un scientifique kidnappé, va se révéler plus traître que prévu, et mener 007 sur la piste d'un méchant possédant une nouvelle technologie particulièrement dangereuse.",]
selectimg.forEach((data) => {
    data.ondragstart = () => {
        return false;
    };
    data.addEventListener("click", () => {
        var data_id = data.childNodes[0].className.split('img')[1];
        console.log(data_id)
        // console.log(data.childNodes[0].className)
        var film = document.createElement("div");
        film.classList.add()
        popup.style.display = 'flex'
        var img = document.querySelector('.popupimg')
        img.src = data.childNodes[0].className + '.jpg'
        text.innerHTML = synopsis[data_id - 1]
        img.ondragstart = () => {
            return false;
        };
    })
})

close.addEventListener('click', () => {
    popup.style.display = 'none';

})
var popcorn = document.querySelector('.movingpopcorn')
popcorn.ondragstart = () => {
    return false;
};