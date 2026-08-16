# Guide pour ajouter un nouveau projet

Ce guide explique comment ajouter un nouveau projet a votre portfolio.

Tous les fichiers `.json` du dossier `data/projects/` (sauf `TEMPLATE.json`)
sont charges automatiquement au build et tries par `order` au sein de leur
`tier`. Les projets `featured: true` s'affichent sur la page d'accueil ; tous
les autres atterrissent sur `/archives`, regroupes par `tier`. Il suffit de
deposer le JSON et l'image, aucun autre fichier n'a besoin d'etre modifie.

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
  "tier": "secondary",
  "order": 0
}
```

## Etape 2: Ajouter l'image

Placez votre image dans le dossier `public/`:

- Images de projet: `/public/mon-nouveau-projet.png`
- Utilisez des images de taille recommandee: 800x600 pixels

C'est tout : aucun autre fichier a modifier. `data/projects/index.js` charge
automatiquement tous les fichiers `.json` de ce dossier (sauf `TEMPLATE.json`)
au moment du build, les trie selon leur champ `order`, et les expose au site.
Ce chargement (`scripts/generate-projects-index.js`) tourne automatiquement
avant `npm run dev`, `npm run build` et `npm test`.

Si un fichier JSON est mal forme ou qu'il manque un champ obligatoire
(`id`, `title`, `description`, `image`) ou que deux projets partagent le
meme `id`, la generation echoue immediatement avec un message d'erreur
clair plutot que de casser le rendu du site en silence.

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
| `tier` | string | Categorie du projet, utilisee pour le regroupement sur `/archives` (voir ci-dessous) |
| `order` | number | Ordre d'affichage au sein de son `tier` |
| `featured` | boolean | `true` pour afficher le projet sur la page d'accueil (voir ci-dessous) |

## Le champ `featured`

Seuls les projets avec `"featured": true` apparaissent sur la page d'accueil
(`app/components/Work.jsx`). Actuellement, ce sont supplychain, bookingroom et
prompt-hub. Tous les autres projets (`featured` absent ou `false`) sont
listes sur la page `/archives` (`app/archives/ArchivesClient.jsx`), regroupes
par `tier`.

## Le champ `tier`

Controle dans quelle sous-section de la page `/archives` un projet non `featured`
apparait.

| Valeur | Effet |
| --- | --- |
| `primary` / `secondary` | Regroupes dans la section "Projets web & applicatifs" |
| `data` | Projet d'analyse de donnees, regroupe dans la section "Projets data & analyse" |
| `learning` | Projet d'apprentissage precoce, regroupe dans la section "Projets d'apprentissage" |

Dans le doute, utilisez `secondary` : c'est l'option la plus neutre pour un
nouveau projet qui n'est ni un travail phare ni un exercice d'apprentissage
precoce.

## Tips

- Utilisez des images de meme taille pour uniformiser la grille
- Gardez les descriptions courtes et percutantes
- Specifiez les technologies principales
- L'ordre d'affichage au sein d'un meme `tier` peut etre controle avec le champ `order`
