# Setting Up the Admin Dashboard

The site's admin panel (`/admin`) lets you add, edit, and delete **services** and
**portfolio pieces** without touching any code. It's powered by [Firebase](https://firebase.google.com)
(Authentication + Firestore + Storage), which is free for a small business site.

Until you complete this setup, the site works fine for visitors — it just falls
back to the sample services/portfolio bundled in the code, and `/admin` shows a
"not configured yet" message instead of a login form.

## 1. Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and click **Add project**.
2. Name it (e.g. `midnight-plans`) and follow the prompts (Google Analytics is optional).
3. Once created, click the **Web** icon (`</>`) to register a web app — no need to set up Hosting.
4. Copy the `firebaseConfig` values shown — you'll need them in step 5.

## 2. Enable Email/Password sign-in

1. In the left sidebar: **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable **Email/Password**.
3. Under the **Users** tab, click **Add user** and create your own admin login
   (the email + password you'll use to sign in at `/admin`).

## 3. Create the Firestore database

1. **Build → Firestore Database → Create database**.
2. Choose **Production mode**, pick a region close to Ottawa (e.g. `northamerica-northeast1`), and create it.
3. Go to the **Rules** tab and replace the rules with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /services/{docId} {
         allow read: if true;
         allow write: if request.auth != null;
       }
       match /portfolio/{docId} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

   This lets anyone view services/portfolio (needed for the public site) but only
   a signed-in admin can add, edit, or delete them.

4. Click **Publish**.

## 4. Create Storage (for uploaded images)

1. **Build → Storage → Get started**, same region as Firestore.
2. Go to the **Rules** tab and replace the rules with:

   ```
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

3. Click **Publish**.

## 5. Add your config to the site

1. In the project root, copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Paste the values from step 1's `firebaseConfig` into `.env`:

   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

3. Restart the dev server (`npm run dev`) so Vite picks up the new env vars.

## 6. Log in

Visit `/admin`, sign in with the user you created in step 2, and you'll land on
the dashboard where you can manage **Services** and **Portfolio**.

## Deploying

`.env` is gitignored on purpose — it's never committed. When deploying (Netlify,
Vercel, GitHub Pages, etc.), add the same six `VITE_FIREBASE_*` variables in your
host's environment variable settings so the production build has them too.
