# Guide pour ajouter un nouveau projet

Ce guide explique comment ajouter un nouveau projet a votre portfolio.

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
  "order": 0
}
```

## Etape 2: Mettre a jour l'index

Ajoutez votre projet dans `data/projects/index.js`:

```javascript
import monNouveauProjet from './mon-nouveau-projet.json';

export const projects = [
  covidAlert,
  landingTrip,
  monNouveauProjet,
];
```

## Etape 3: Ajouter l'image

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
| `order` | number | Ordre d'affichage |

## Tips

- Utilisez des images de meme taille pour uniformiser la grille
- Gardez les descriptions courtes et percutantes
- Specifiez les technologies principales
- L'ordre d'affichage peut etre controle avec le champ `order`
