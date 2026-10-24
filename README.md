# Piscine Créative – refonte du site

## Structure
- `index.html` : page principale (SEO, schema.org LocalBusiness + FAQPage)
- `css/style.css` : styles (thème clair/sombre automatique, animations)
- `js/main.js` : animations au scroll, en-tête réduit, formulaire (mailto)
- `images/` : logo et photos (remplacer par les originaux haute résolution)
- `robots.txt`, `sitemap.xml` : à garder à la racine du site

## Tester en local
Ouvrir `index.html` dans le navigateur, ou utiliser l'extension VS Code « Live Server ».

## Avant la mise en ligne
- Préciser la zone d'intervention (actuellement « province de Liège »).
- Ajouter avis clients et tarifs si souhaité.
- Remplacer les photos par les originaux (les images fournies font 740 px de large pour deux d'entre elles).
- Le formulaire ouvre la messagerie du visiteur (mailto). Pour un envoi direct, prévoir un service de formulaire ou un script serveur.
- Vérifier le domaine dans `index.html` (canonical, og:url, og:image), `robots.txt` et `sitemap.xml`.
- Après mise en ligne : créer/optimiser la fiche Google Business Profile et soumettre le sitemap dans Google Search Console.
