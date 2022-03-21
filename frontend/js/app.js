const app = {
    init: function() {

        // On appelle la méthode s'occupant d'ajouter les EventListener sur les éléments déjà dans le DOM
        app.addAllEventListeners();

        // On appelle la méthode s'occupant de charger tous les jeux vidéo
        app.loadVideoGames();
    },

    addAllEventListeners: function() {
        // On récupère l'élément <select> des jeux vidéo
        const selectVideoGameElement = document.querySelector('.form-control');
        // On ajoute l'écouteur pour l'event "change", et on l'attache à la méthode app.handleVideogameSelected
        selectVideoGameElement.addEventListener('change', app.handleVideogameSelected);
        // On récupère le bouton pour ajouter un jeu vidéo
        const addVideogameButtonElement = document.getElementById('btnAddVideogame');
        // On ajoute l'écouteur pour l'event "click"
        addVideogameButtonElement.addEventListener('click', app.handleClickToAddVideogame);
        // On récupère le bouton pour valider l'ajout d'un jeu vidéo
        const validateVideogameButtonElement = document.querySelector('.validebtn');
        // On ajoute l'écouteur pour l'event "click"
        validateVideogameButtonElement.addEventListener('click', app.handleClickToValidateVideogame);
    },

    handleVideogameSelected: function(evt) {
        //j'empêche le rechargement de la page
        evt.preventDefault();

        // Récupérer la valeur du <select> (id du videogame)
        const videogameID = document.querySelector('#videogameId').value;

        // je vide ma div d'une éventuelle review déjà présente dedans
        document.querySelector('#review').innerHTML = "";

        // charger les données pour ce videogame
        // je définis d'abord mes options
        const fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
        // je fais l'appel à mon API et je définis les promesses de réponses
        fetch("http://localhost:8080/videogames/" + videogameID + "/reviews", fetchOptions)
        .then(function(response) {return response.json()})
        .then(app.handleReviewsJson);
    },

    handleClickToAddVideogame: function(evt) {
        // https://getbootstrap.com/docs/4.4/components/modal/#modalshow
        // jQuery obligatoire ici
        $('#addVideogameModal').modal('show');
    },

    handleClickToValidateVideogame: function(evt) {
        evt.preventDefault();

        // je récupère les données des champs d'ajout
        const titleInputValue  = document.querySelector("#inputName").value;
        const editorInputValue = document.querySelector("#inputEditor").value;

        // je crée un tableau qui récupère toutes les données à envoyer dans mon fetch
        const data = {
            name   : titleInputValue,
            editor : editorInputValue,
        }

        // On prépare les entêtes HTTP (headers) de la requête
        // afin de spécifier que les données sont en JSON
        const httpHeaders = new Headers();
        httpHeaders.append("Content-Type", "application/json");

        // On va créer un objet de configuration pour fetch
        const fetchOptions = {
            method  : "POST",
            mode    : "cors",
            cache   : "no-cache",      
            headers : httpHeaders,    
            body    : JSON.stringify(data)
        };

        // je peux déclencher mon appel à l'API
        fetch("http://localhost:8080/videogames", fetchOptions)
        .then(function(response) {
            // On vérifie le code réponse
            if(response.status == 201) {
                // Je renvoie une promesse d'interprétation du JSON (au prochain then())
                alert("Le jeu vidéo a bien été ajouté !");
                return response.json();
            } else {
                // J'affiche une alert si l'API me dit que ça merdouille
                alert(response.status + " : " + response.statusText);
            }
        });

        // je cache la popup
        $('#addVideogameModal').modal('hide');
    },

    loadVideoGames: function() {
        // charger les données pour ce videogame
        // je définis d'abord mes options
        const fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };
        // je fais l'appel à mon API et je définis les promesses de réponses
        fetch("http://localhost:8080/videogames", fetchOptions)
        .then(function(response) {return response.json()})
        .then(app.handleVideogamesJson);
    },

    handleReviewsJson: function(json) {
        for (const review of json) {
            console.log(json);
            // Dupliquer la template #reviewTemplate et personnaliser son contenu avec les données
            // je sélectionne également la div dans laquelle je vais insérer mon template dupliqué
            const selectDivElement = document.querySelector('#review');
            const templateElement = document.querySelector("#reviewTemplate");
            const reviewCloneElement = templateElement.content.cloneNode(true);
            // je récupère le premier élément du template, ainsi que ses enfants
            const newDivElement = reviewCloneElement.firstElementChild;
            // Ajouter dans le DOM
            selectDivElement.prepend(newDivElement);

            // j'ajoute le contenu dans mes éléments
            document.querySelector('.reviewVideogame').textContent   = review.title;
            document.querySelector('.reviewText').textContent        = review.text;
            document.querySelector('.reviewEditor').textContent      = review.videogame.editor;
            document.querySelector('.reviewPlatform').textContent    = review.platform.name;
            document.querySelector('.reviewAuthor').textContent      = review.author;
            document.querySelector('.reviewPublication').textContent = review.publication_date;
            document.querySelector('.reviewDisplay').textContent     = review.display_note;
            document.querySelector('.reviewGameplay').textContent    = review.gameplay_note;
            document.querySelector('.reviewScenario').textContent    = review.scenario_note;
            document.querySelector('.reviewLifetime').textContent    = review.lifetime_note;
        }
    },

    handleVideogamesJson: function(json) {
        // je crée une boucle qui va créer une balise option pour chaque vidéogame
        for (const videogame of json) {
            //je sélectionne mon seclect pour lui fournir les options
            const selectElement = document.querySelector(".form-control");
            // je crée une balise option pour chaque entrée du tableau json
            const optionElement = document.createElement("option");
            optionElement.value = videogame.id;
            optionElement.textContent = videogame.name;
            selectElement.append(optionElement);
        }
    },
};

document.addEventListener('DOMContentLoaded', app.init);