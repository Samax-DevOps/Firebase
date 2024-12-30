# Deploying a Next.js App to Firebase

This guide walks you through deploying a Next.js application to Firebase Hosting. Follow the steps below to set up and deploy your app successfully.

---

## Step 1: Create and Write Your Next.js App

This guide assumes you already have a Next.js app. If not, you can create one using the following command:

```bash
npx create-next-app@latest .
```

---

## Step 2: Make a Copy of Your App's Code

If it's your first time deploying, it's a good idea to keep a backup of your app without Firebase configurations. Here are a few ways to store a copy:

- Save it as a `.zip` file on your computer.
- Upload it to a GitHub repository.

---

## Step 3: Create a Firebase Project and Web App

### Firebase Structure Overview

A Firebase project can include multiple assets, such as databases, applications (Android, iOS, web), and more.

### Steps to Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Create a new project:
   - Choose a project name.
   - Decide whether to enable Google Analytics (optional for test apps).
3. (Optional) Set up billing by switching from the Spark (free) plan to Blaze (pay-as-you-go). No charges will occur unless you have significant usage.
4. Add a web app to your project:
   - Name your web app.
   - Enable Firebase Hosting (check the box).

---

## Step 4: Add Firebase to Your App

### Install Firebase SDK

1. Run the following command to install the Firebase SDK:
   ```bash
   npm install firebase
   ```
2. Add the unique Firebase script (provided in step 2 of the Firebase setup) to a script file or a separate `.js` file in your `app` folder.

### Install Firebase CLI

1. Install the Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```bash
   firebase login
   ```
   Follow the link in the terminal to log in with your Google account.
3. Verify your Firebase projects:
   ```bash
   firebase projects:list
   ```
   Ensure your Firebase project is listed.

---

## Step 5: Integrate Your Next.js App with Firebase

1. Enable Firebase web frameworks:
   ```bash
   firebase experiments:enable webframeworks
   ```
2. Initialize Firebase Hosting:
   ```bash
   firebase init hosting
   ```
   Respond to the terminal prompts:
   - **You are initializing within an existing Firebase project directory:** `Yes`
   - **Detected an existing Next.js codebase in the current directory, should we use this?** `Yes`
   - **In which region would you like to host server-side content, if applicable?** Choose your preferred region (e.g., `europe-west1`).
   - **Set up automatic builds and deploys with GitHub?** `No` (this is outside the scope of this guide).

   You should see the message: **"Firebase initialization complete!"**

3. Deploy your app:
   ```bash
   firebase deploy
   ```
   After deployment, you should see **"Deploy complete!"** in the terminal along with a link to your app.

---

## Troubleshooting

### Error: Running Scripts is Disabled

If you encounter a script execution error during initialization, run the following command:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

For more details, refer to this [Stack Overflow solution](https://stackoverflow.com/questions/60594178/firebase-cannot-be-loading-because-running-scripts-is-disabled-on-this-system).

---

## Deploying Again?

For subsequent deployments, you only need to run the following commands:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
firebase experiments:enable webframeworks
firebase deploy
```

---

Congratulations! You have successfully deployed your Next.js app to Firebase Hosting.
