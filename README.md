# Portfolio — Niamat EL QASEMY

Portfolio personnel présentant mon parcours en ingénierie Géoinformation, mes projets, certifications et compétences techniques. Trilingue (FR/EN/AR avec support RTL), thème clair/sombre avec fonds animés (ciel étoilé / grille géo).

**Site en ligne :** _à venir_

## Stack technique

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) pour les animations
- [react-i18next](https://react.i18next.com/) pour l'internationalisation (FR/EN/AR)
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact

## Développement local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173` (ou le port suivant disponible).

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure

```
src/
├── components/   # Sections du site (Hero, About, Projects, Contact, ...)
├── context/      # Contexte du thème clair/sombre
├── i18n/         # Traductions FR/EN/AR
├── services/     # Envoi d'email (EmailJS)
└── assets/       # Images, captures d'écran de projets, certificats
```

## Licence

Ce projet est sous licence [MIT](./LICENSE) — libre de réutilisation avec attribution.
