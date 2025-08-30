# Unified5K

## Getting Started

### Prerequisites
Before starting, ensure the following are installed:
- Expo

### Phone Setup (Dev Build)
- **Android (physical):** https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=development-build  
- **iOS (physical):** https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build  

---

### app.json (Expo account linking tip)
After logging into your Expo account on your local computer, check your `app.json`.  
If it contains a previous Expo project link, comment or remove the `eas.projectId` block before re-initializing:

```json
{
  "expo": {
    "extra": {
      // remove this block if it points to someone else’s account
      // "eas": {
      //   "projectId": "07392021-0dbd-462b-8b25-518d398b9f51"
      // }
    }
  }
}
```

### Initialize New Project Link
After cleaning up `app.json`, run these commands:

#### Log in to your Expo account if you haven't already
```
eas login
```

#### Initialize a new EAS project for your account
```
eas init
```

#### Configure build targets (Android/iOS or both)
```
eas build:configure
```

### Running the Application Locally

Frontend

Navigate to the frontend directory:
```
cd unified5k
```

Install dependencies:
```
npm install
```

Start the development server:
```
npx expo start
```

Or alternatives:
```
npx expo start --dev-client --clear
```
