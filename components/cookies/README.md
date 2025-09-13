# Barre de Cookies RGPD Compliant

Cette implémentation fournit une solution complète de gestion des cookies conforme au RGPD pour le portfolio d'Alexandre Bourdois.

## Fonctionnalités

### ✅ Conformité RGPD

- Consentement explicite requis avant l'utilisation de cookies non essentiels
- Possibilité de personnaliser les préférences de cookies
- Gestion granulaire des différents types de cookies
- Sauvegarde des préférences dans le localStorage
- Possibilité de modifier les préférences à tout moment

### 🍪 Types de cookies gérés

1. **Cookies nécessaires** (toujours activés)

   - Session, sécurité, préférences de base
   - Ne peuvent pas être désactivés

2. **Cookies d'analyse** (optionnels)

   - Google Analytics
   - Collecte anonyme de données de trafic

### 🎨 Design et UX

- Interface moderne et cohérente avec le design du site
- Animations fluides avec Framer Motion
- Responsive design (mobile et desktop)
- Mode sombre intégré
- Internationalisation (FR/EN)

## Composants

### `CookieConsent.tsx`

Barre de consentement principale qui s'affiche en bas de page pour les nouveaux visiteurs.

**Fonctionnalités :**

- Affichage conditionnel (seulement si pas de consentement)
- Boutons "Tout accepter", "Nécessaires uniquement", "Personnaliser"
- Interface de personnalisation des préférences
- Animations d'entrée/sortie

### `CookieSettings.tsx`

Composant de paramètres accessible depuis le header pour modifier les préférences.

**Fonctionnalités :**

- Sheet modal avec paramètres détaillés
- Toggles pour chaque type de cookie
- Bouton de réinitialisation
- Sauvegarde automatique des préférences

### `PrivacyPolicy.tsx`

Page de politique de confidentialité détaillée.

**Contenu :**

- Explication des types de cookies
- Droits des utilisateurs (RGPD)
- Informations de contact
- Dernière mise à jour automatique

## Hooks

### `use-cookie-consent.ts`

Hook personnalisé pour la gestion centralisée des préférences de cookies.

**API :**

```typescript
const {
  preferences, // État actuel des préférences
  isLoaded, // État de chargement
  updatePreferences, // Mettre à jour les préférences
  acceptAll, // Accepter tous les cookies
  acceptNecessary, // Accepter seulement les nécessaires
  hasConsent, // Vérifier si l'utilisateur a donné son consentement
  clearConsent, // Effacer le consentement
} = useCookieConsent();
```

## Intégration Google Analytics

### `GoogleAnalytics.tsx`

Composant qui gère l'intégration conditionnelle de Google Analytics basée sur le consentement.

**Fonctionnalités :**

- Chargement conditionnel des scripts
- Configuration du consentement gtag
- Désactivation automatique si non consenti

## Traductions

Les textes sont gérés via next-intl dans :

- `messages/fr.json` - Version française
- `messages/en.json` - Version anglaise

### Clés de traduction

```json
{
  "cookies": {
    "title": "Gestion des cookies",
    "description": "...",
    "acceptAll": "Tout accepter",
    "acceptNecessary": "Nécessaires uniquement",
    "customize": "Personnaliser",
    "necessary": { "title": "...", "description": "..." },
    "analytics": { "title": "...", "description": "..." }
  }
}
```

## Utilisation

### Installation automatique

La barre de cookies est automatiquement intégrée dans le layout principal (`app/[locale]/layout.tsx`).

### Accès aux paramètres

Les utilisateurs peuvent modifier leurs préférences via :

1. Le bouton "Paramètres" dans la barre de cookies
2. Le bouton "Paramètres des cookies" dans le header
3. La page de politique de confidentialité (`/privacy`)

### Personnalisation

Pour ajouter de nouveaux types de cookies :

1. Étendre l'interface `CookiePreferences` dans `use-cookie-consent.ts`
2. Ajouter les traductions dans les fichiers de messages
3. Mettre à jour les composants d'interface
4. Modifier la logique d'application des préférences

## Conformité RGPD

Cette implémentation respecte les exigences du RGPD :

- ✅ **Consentement explicite** : L'utilisateur doit cliquer pour accepter
- ✅ **Granularité** : Choix par type de cookie
- ✅ **Facilité de retrait** : Bouton de paramètres toujours accessible
- ✅ **Transparence** : Politique de confidentialité détaillée
- ✅ **Minimisation** : Seuls les cookies nécessaires sont activés par défaut
- ✅ **Sauvegarde des préférences** : Persistance dans le localStorage

## Tests

Pour tester l'implémentation :

1. **Nouveau visiteur** : La barre s'affiche automatiquement
2. **Consentement** : Tester les différents boutons d'acceptation
3. **Modification** : Utiliser le bouton de paramètres dans le header
4. **Réinitialisation** : Tester le bouton de réinitialisation
5. **Analytics** : Vérifier que Google Analytics respecte les préférences

## Maintenance

- Vérifier régulièrement la conformité avec les évolutions du RGPD
- Mettre à jour les traductions si nécessaire
- Tester l'intégration avec de nouveaux outils d'analyse
- Documenter les changements dans la politique de confidentialité
