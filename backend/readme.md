# Backend

Tu trouveras ici le code source de la partie backend du projet : l' **API**.

Ce code est basé sur le micro-framework _Lumen_.

Pour lancer le serveur Web pour la partie backend :  
`php -S 0.0.0.0:8080 -t backend/public`

## Code actuel

Le code fourni contient déjà quelques fonctionnalités.

- certains _Models_ sont fournis (mais à compléter)
- certains _Controllers_ sont fournis (mais à compléter)
- 3 routes sont configurées
- les endpoints #3, #6 et #12 sont déjà en place
- une fois le dépôt cloné, n'oublie pas le fichier `.env` :wink:

## Documents

- les [endpoints](../docs/api.md) de l'API
- le [code _MoCoDo_](../docs/game-reviews.mcd) du MCD du projet
- le [MCD (svg)](../docs/game-reviews.svg) du projet
- l'[import](../docs/import.sql) de la base de données
- un [workspace Insomnia](../docs/Insomnia_import_game-reviews.json) avec tous les endpoints de l'API
  - dans Insomnia, créer un Workspace et le nommer "S07-game-reviews"
  - puis importer en [cliquant sur ce bouton](../docs/insomnia_button_to_import.png)
  - puis en sélectionnant le fichier json
  - ensuite, dans la partie de gauche devrait apparaitre [plusieurs requêtes](../docs/insomnia_requests_imported.png)
