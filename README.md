TP React Hooks - Application de Gestion de Produits
Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

Installation et configuration initiale
Cloner le dépôt :
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
Créer votre propre dépôt sur Github et changer le remote :
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
Installer les dépendances :
npm install
Lancer l'application :
npm start
Instructions pour le TP
Pour chaque exercice :

Lisez attentivement l'énoncé

Implémentez la solution

Testez votre implémentation (pensez à faire des copies d'écran)

Mettez à jour la section correspondante dans ce README avec :

Une brève explication de votre solution

Des captures d'écran montrant le fonctionnement

Les difficultés rencontrées et comment vous les avez résolues

Commitez vos changements avec un message descriptif

Exercice 1 : État et Effets

Objectif : Implémenter une recherche en temps réel

1.1 Modifier le composant ProductSearch pour utiliser la recherche

J'adapte le composant de recherche pour qu'il s'appuie sur l'état local pour obtenir les entrées de l'utilisateur. 
Donc, à chaque pression de touche, l'état est actualisé et j'active une fonction onSearch pour trier les articles.

1.2 Implémenter le debounce sur la recherche

Voici ce que j'ai réalisé : 

J'ai conçu un hook personnalisé useDebounce qui retarde la mise à jour de la valeur servant à filtrer
en respectant un certain temps d'attente. 
Cela permet d'éviter l'appel trop fréquent à la fonction onSearch.

1.3 Documenter votre solution ici
Votre réponse pour l'exercice 1 :
<img src="Captures/Ex1.1.png">

<img src="Captures/Ex1.2.1.png">

<img src="Captures/Ex1.2.1.png">

Exercice 2 : Context et Internationalisation
Objectif : Gérer les préférences de langue

2.1 Créer le LanguageContext

Je mets en place un contexte pour gérer la langue de l'application. 
Ce cadre offre un accès à la langue dans chacun de mes éléments.

2.2 Ajouter le sélecteur de langue

Je développe un composant LanguageSelector qui offre à l'utilisateur la possibilité de changer de langue. 
Ce composant exploite le LanguageContext.

2.3 Documenter votre solution ici

Votre réponse pour l'exercice 2 :

<img src="Captures/Ex2.1.png">

Exercice 3 : Hooks Personnalisés
Objectif : Créer des hooks réutilisables
3.1 Créer le hook useDebounce
3.2 Créer le hook useLocalStorage
3.3 Documenter votre solution ici

Votre réponse pour l'exercice 3 :

### (Déjà couvert dans 1.2 et 2.1)

J’ai déjà présenté le hook `useDebounce` et le hook `useLocalStorage` (voir ci-dessous).

<img src="Captures/Ex3.1.png">

<img src="Captures/Ex3.2.png">

Exercice 4 : Gestion Asynchrone et Pagination
Objectif : Gérer le chargement et la pagination

4.1 Ajouter le bouton de rechargement

Dans mon hook useProductSearch, j'ai ajouté une fonction reload qui fait appel de nouveau à la méthode de récupération des produits.

4.2 Implémenter la pagination

J'ai inséré des états pour contrôler la pagination (currentPage, totalPages) 
et mis en place des fonctions pour se déplacer entre les pages (previousPage et nextPage).

4.3 Documenter votre solution 

Votre réponse pour l'exercice 4 :

<img src="Captures/Ex4.png" alt="">

Rendu
Ajoutez l'URL de votre dépôt Github dans Classroom et envoyer la réponse dès le démarage de votre projet.
Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
Le README.md doit être à jour avec vos réponses et captures d'écran.
Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
