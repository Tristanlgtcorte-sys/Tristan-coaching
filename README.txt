TRISTAN COACHING - Site statique
--------------------------------

Contenu:
- index.html
- styles.css
- script.js
- assets/ (logo.png, packs.jpg, testimonial.jpg)

REMPLACER LES IMAGES:
- Remplace assets/logo.png par ton logo (réutilise le même nom ou modifie le HTML).
- Remplace assets/packs.jpg et assets/testimonial.jpg par d'autres visuels si besoin.

AJOUTER UN TÉMOIGNAGE:
- Dans index.html, section id="temoignages", copie-colle un bloc <div class="testimonial">...</div>
- Exemple:
  <div class="testimonial">
    <div class="quote-header">Nom, âge — durée</div>
    <p>Texte du témoignage...</p>
  </div>

CONTACT / FORMULAIRE:
- Par défaut le formulaire ouvre le client mail (mailto). Si tu veux que les messages arrivent directement
  via le formulaire, inscris-toi sur https://formspree.io/ (gratuit) et récupère ton FORM_ID.
- Remplace la constante 'endpoint' dans script.js par:
    https://formspree.io/f/YOUR_FORM_ID
  et (optionnel) change l'attribut form.action dans index.html pour POST to that endpoint.

DÉPLOYER SUR VERCEL (très simple):
Option A (compte GitHub) :
  1. Crée un repo GitHub et pousse ces fichiers.
  2. Connecte-toi sur https://vercel.com/ et choisis "New Project" -> import from GitHub -> sélectionne le repo -> Deploy.
  3. Ton site sera en ligne en quelques secondes. Pour un domaine personnalisé, ajoute ton domaine dans Vercel et suis les instructions.

Option B (upload direct) :
  1. Sur Vercel, clique "New Project" -> "Import" -> "Upload" et glisse le dossier.
  2. Déploye. Pas besoin de Git.

DOMAINE PERSONNALISÉ:
- Achète 'tristancoaching.fr' (OVH, Gandi, Namecheap ... ~10€/an).
- Dans Vercel, ajoute le domaine et suis les instructions (c'est guidé, il suffit de copier-coller les records DNS chez le registrar).

SEO de base:
- Les meta tags dans index.html (title, description, keywords) sont déjà présents.
- Pour apparaître mieux sur Google, crée aussi une fiche Google Business Profile (gratuit) avec ton adresse Propriano.

SUPPORT:
- Si tu veux, je peux faire le déploiement pour toi: il me faudra uniquement que tu me crées un compte Vercel et me donnes accès (ou que tu me partages un lien d'invitation). Autre option: je te guide pas-à-pas par message.

Bonne utilisation !
