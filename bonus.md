# Bonus :rainbow:

## #1 Reviews complètes

- actuellement, il manque des informations dans chaque review affichée :thinking:
- modifier le code côté _Backend_ du _Endpoint_ pour ajouter ces informations dans la réponse
  - le code nécessaire dans _VideogameController_ est déjà en place
  - mais il manque la configuration des _relations_ nécessaires
  - regarde du côté de [la doc Eloquent à propos des _Relationships_](https://laravel.com/docs/5.8/eloquent-relationships) :muscle:
- modifier le code côté _Frontend_ pour utiliser ces nouvelles informations et les ajouter dans le DOM

## #2 Un peu de UX

Actuellement, sauf si tu l'as déjà mis en place par toi même, une fois l'ajout d'un jeu vidéo effectué, l'utilisateur doit actuellement recharger la page pour voir le jeu vidéo ajouté :angry:

Donc on va ajouter un peu de code côté _Frontend_ :relieved:

- après la réponse de succès de l'ajout
- récupérer les données envoyées en réponse
- fermer la fenêtre _Modal_ si ce n'est pas déjà fait
- ajouter l'`<option>` dans le menu déroulant à partir des données reçues
