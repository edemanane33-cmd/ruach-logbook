Ruach Filled Ministries — Vercel-ready Digital Logbook
Generated: 2025-10-23T19:01:10.027798 UTC

How to deploy on Vercel (quick):
1. Go to https://vercel.com and sign up / log in.
2. From the dashboard click "New Project". Choose "Import Git Repository" (recommended) or use "Deploy" -> "Upload" if available.
   - If using GitHub: create a repo and push the folder contents, then import the repo.
   - If uploading: upload the ZIP and deploy.
3. Ensure `vercel.json` is present at the repo root. No build command is required.
4. After deployment open the provided domain. The registration form is at /register.html and admin at /admin.html.

Firebase:
The project is pre-configured to use your Firebase Realtime Database:
https://ruach-filled-ministries-f74b9-default-rtdb.europe-west1.firebasedatabase.app

Admin:
Username: admin
Password: Ruach2020

Notes:
- The admin dashboard hides attendee names by default; use Export CSV to download the data.
- Clear All will permanently remove all records from the Firebase 'attendance' node.
- If you wish to change the Firebase project, open firebase.js and replace the config block.
