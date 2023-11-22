
# TP : Création d'un Formulaire PDF Interactif avec NodeJS

Ce TP vous guide à travers le processus de création d'un formulaire PDF interactif en utilisant NodeJS et la bibliothèque `pdf-lib`.

## Objectif

L'objectif de ce TP est de vous familiariser avec la génération de documents PDF interactifs en programmation NodeJS. Vous apprendrez à ajouter différents types de champs de formulaire tels que des champs de texte, des cases à cocher, et des listes déroulantes.


## Installation

1. Clonez ou téléchargez ce projet sur votre machine.
2. Naviguez vers le dossier du projet via le terminal.
3. Exécutez `npm install pdf-lib` pour installer la bibliothèque nécessaire.

## Structure du Projet

- `createForm.js` : Script principal qui contient la logique de création du formulaire PDF.
- `package.json` : Fichier de configuration Node.js, listant les dépendances du projet.

## Exécution du Script

1. Dans le terminal, naviguez vers le dossier du projet.
2. Exécutez le script en tapant `node createForm.js`.
3. Le script générera un fichier `formulaire_interactif.pdf` dans le dossier du projet.

## Contenu du Script

Le script contient plusieurs parties :

- **Initialisation du Document PDF** : Crée un nouveau document PDF et prépare le formulaire.
- **Ajout de Texte** : Ajoute un titre et une description au document.
- **Création de Champs Interactifs** : Ajoute divers champs interactifs au formulaire.
- **Enregistrement du Formulaire** : Enregistre le formulaire et écrit le fichier PDF sur le disque.

## Test du Formulaire

Ouvrez le fichier `formulaire_interactif.pdf` avec un lecteur PDF pour tester les fonctionnalités interactives du formulaire.

---

Bonne chance et amusez-vous bien avec la création de formulaires PDF interactifs !
