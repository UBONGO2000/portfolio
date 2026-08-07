# Guide pour ajouter un nouveau projet

Ce guide explique comment ajouter un nouveau projet a votre portfolio.

Tous les fichiers `.json` du dossier `data/projects/` (sauf `TEMPLATE.json`)
sont charges automatiquement au build, groupes par `tier` puis tries par
`order` au sein de chaque groupe. Il suffit de deposer le JSON et l'image,
aucun autre fichier n'a besoin d'etre modifie.

## Etape 1: Creer le fichier JSON

1. Copiez le fichier template dans le dossier `data/projects/`

2. Creez un nouveau fichier `mon-nouveau-projet.json` avec la structure suivante:

```json
{
  "id": "mon-nouveau-projet",
  "title": "Mon Nouveau Projet",
  "description": "Une courte description du projet",
  "image": "/nom-de-limage.png",
  "github": "https://github.com/votre-username/votre-repo",
  "demo": "https://votre-demo.vercel.app/",
  "technologies": ["React", "Next.js", "Tailwind CSS", "Node.js"],
  "fullDescription": {
    "fr": "Description complete en francais...",
    "en": "Full description in English..."
  },
  "features": {
    "fr": ["Fonctionnalite 1", "Fonctionnalite 2", "Fonctionnalite 3"],
    "en": ["Feature 1", "Feature 2", "Feature 3"]
  },
  "challenges": {
    "fr": "Description du defi releve en francais...",
    "en": "Description of challenges faced in English..."
  },
  "order": 0,
  "tier": "secondary"
}
```

## Etape 2: Ajouter l'image

Placez votre image dans le dossier `public/`:

- Images de projet: `/public/mon-nouveau-projet.png`
- Utilisez des images de taille recommandee: 800x600 pixels

## Description des champs

| Champ | Type | Description |
| --- | --- | --- |
| `id` | string | Identifiant unique |
| `title` | string | Titre du projet |
| `description` | string | Description courte |
| `image` | string | Chemin vers l'image |
| `github` | string | URL GitHub (optionnel) |
| `demo` | string | URL demo (optionnel) |
| `technologies` | string[] | Technologies utilisees |
| `fullDescription` | object | Descriptions FR/EN |
| `features` | object | Liste fonctionnalites FR/EN |
| `challenges` | object | Defis FR/EN |
| `order` | number | Ordre d'affichage au sein de son `tier` |
| `tier` | string | Niveau de mise en avant sur la page d'accueil (voir ci-dessous) |

## Le champ `tier`

Le champ `tier` controle ou et comment le projet apparait sur la page d'accueil.
Il est obligatoire - le build echoue avec une erreur claire si absent ou invalide.
Valeurs possibles :

| Valeur | Effet |
| --- | --- |
| `primary` | Projet phare, affiche en premier dans la grille principale |
| `secondary` | Projet correct mais moins abouti, affiche apres les `primary` dans la meme grille |
| `data` | Projet d'analyse de donnees, regroupe dans sa propre sous-section "Projets data & analyse" |
| `learning` | Premier projet d'apprentissage (HTML/CSS/JS basique), place dans le bloc repliable "Voir plus de projets" |

Dans le doute, utilisez `secondary` : c'est l'option la plus neutre pour un
nouveau projet qui n'est ni un travail phare ni un exercice d'apprentissage
precoce.

## Tips

- Utilisez des images de meme taille pour uniformiser la grille
- Gardez les descriptions courtes et percutantes
- Specifiez les technologies principales
- L'ordre d'affichage au sein d'un meme `tier` peut etre controle avec le champ `order`
