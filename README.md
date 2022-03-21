# Parcours S07 :fire:

On souhaite mettre en place un site permettant de consulter et d'effectuer des **critiques de jeux vidéo**.

## Objectifs

- charger la liste des jeux vidéo dans le menu déroulant
- afficher les reviews après sélection d'un jeu vidéo dans ce menu déroulant
- ajouter un jeu vidéo
- le tout sans jamais recharger la page

## Avant de commencer

Pendant la saison 7, nous avons codé dans 2 dépôts (_front_ et _back_) séparés mais aujourd'hui, pour le parcours, le front et le back sont réunis dans le même dépôt :fearful:  
**Pas de panique**, car tout est bien rangé à sa place. :relieved:

### Le code front est dans le répertoire `frontend`

- On y trouve :
  - un fichier `index.html` qui sera la seule page d'accès au site
  - un répertoire `js` qui contient un fichier `app.js` qui contiendra le module chargé de coder l'application (il n'est pas nécessaire de splitter l'application en plusieurs fichiers/modules)
- [Plus de détails ici](frontend/readme.md)

### Le code back est dans le répertoire `backend`

- On y trouve :
  - une installation de _Lumen_ à finaliser :warning:  
    - installation des dépendances à faire depuis le répertoire `backend`
    - création du fichier de configuration Lumen utile notamment pour l'accès à la base de données
  - une partie du code back déjà en place avec des routes, des contrôleurs et des modèles, à vous de compléter ce code de départ :muscle: 
- [Plus de détails ici](backend/readme.md)

## Étapes

### #0 Base de données :floppy_disk:

Créer une base de données nommée `game-reviews` et importer tables et données (fichier docs/import.sql) :tada:

Dans ce dossier docs/ il y a aussi pas mal de documents intéressants à regarder avant de te lancer.

### #1 Afficher les reviews :eye:

<details><summary>Démo</summary>

![screenshot_afficher_reviews](img/display_reviews.gif)

</details>

#### Backend

Il n'y a rien à faire, le endpoint pour récupérer les reviews est déjà en place.  
Tu peux le tester avec _Insomnia_.

> Une configuration pour Insomnia est fournie dans docs/Insomnia_import_game-reviews.json, que tu peux importer dans le logiciel.

#### Frontend

- lorsque l'internaute sélectionne un jeu vidéo du menu déroulant
- récupérer l'id du jeu vidéo
- effectuer une requête HTTP (Ajax) sur le bon endpoint de l'API, afin de récupérer les reviews de ce jeu vidéo
- une fois la réponse reçue
  - pour chaque review
    - cloner la template
    - personnaliser les éléments clonés avec les données reçues
    - les données reçues ne contiennent pas l'éditeur, ni la plate-forme. Ce n'est pas grave, on va faire sans, on s'en occupera en **bonus**
    - ajouter les éléments dans le DOM

### #2 Charger les jeux vidéo :camel:

#### Backend

- créer la route, le _Controller_ et le _Model_ (si nécessaire)
- dans la méthode de _Controller_
  - récupérer tous les enregistrements de la table _videogames_
  - retourner une réponse HTTP avec le code 200, et le JSON
  - jetter un :eye: sur le _ReviewController_ peut être utile :wink:
- tester avec _Insomnia_

#### Frontend

- supprimer du code HTML les balises `<option>` du menu déroulant (sauf la première)
- compléter la méthode `app.loadVideoGames()` fournie
- effectuer une requête HTTP (xhr) sur le bon endpoint de l'API
- une fois la réponse reçue,
  - pour chaque jeu vidéo
  - ajouter un élément `<option>` dans le menu déroulant

### #3 Ajouter un jeu vidéo :heavy_plus_sign:

#### Backend

- créer la route, le _Controller_ et le _Model_ (si nécessaire)
- dans la méthode de _Controller_
  - récupérer toutes les données
  - créer un enregistrement dans la base de données
- tester avec _Insomnia_
- oui je sais, on a vu plus précis comme énoncé... mais bon, c'est mieux que rien non ?

#### Frontend

- lors de la soumission du formulaire
- récupérer toutes les données du formulaire
- effectuer une requête HTTP (xhr/fetch) sur le bon endpoint de l'API, et avec les données
- une fois la réponse reçue et selon la réponse reçue
  - afficher un message de succès
  - afficher un message d'échec

## Bonus :rainbow:

[Par ici](bonus.md) les bonus !
