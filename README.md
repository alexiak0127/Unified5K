# AdaptX - Unified5K Mobile Appplication

Throughout 2025, our team has been developing **Unified5K**, a mobile app supporting AdaptX’s inclusive 5K race series and adaptive sports expo. The app is designed to make community fitness more accessible by helping participants discover events, track race details, and engage with sponsors and vendors. It also streamlines donations and sponsorship management, creating a stronger connection between AdaptX, its community, and corporate partners.

---

### Description
Unified5K is a **React Native + Expo** application for event discovery, race information, donations, and sponsor engagement. It centralizes event schedules, provides race cards with start times and locations, highlights community and corporate sponsorship opportunities, and integrates sponsor/vendor inquiries through an in-app modal. The app ensures participants, spectators, and partners have a smooth, mobile-first experience that prioritizes accessibility and community engagement.

---

## Key Features

- **Tabbed navigation**: Home, Media, Resources, Donation, Profile  
- **Race Results & Tracking (Race Cards)**: Supports searching and filtering  
- **Race Details**: Descriptor, image carousel, and donation progress  
- **Donation Page – Sponsor Tiers**: Collapsible sections with summaries + “Learn more” links  
- **Sponsor/Vendor Inquiry**: In-app modal (mailto) to contact AdaptX  
- **User Profiles**: Includes race history and stats  
- **Social Feed**: Blog posts  
- **Account Authentication**: Login and account creation with email + password  

---

## Technical Architecture

### Tech Stack
- **Frontend**: React Native + Expo, NativeWind (Tailwind v3)  
- **Backend**: Firebase  
- **Database**: Firebase Firestore  
- **Deployment**: TBD  
- **Other Tools**: [Figma](https://www.figma.com/design/sMEvDVTnccQDVJz52j8yCF/Unified5k-Wireframes?node-id=104-833&p=f&t=VqN2u39CbGvyDc3l-0) (design), [GitHub](https://github.com/alexiak0127/Unified5K) (version control)  

---

## Getting Started

### Prerequisites
Before starting, ensure the following are installed:
- Expo

### Phone Setup (Dev Build)
- **Android (physical):** https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=development-build  
- **iOS (physical):** https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build  

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

---

## Directory Structure

```bash
unified5k/
├── app/                     # Screens & routes (Expo Router)
│   ├── index.tsx            # Home page
│   ├── donation.tsx         # Donation page
│   ├── sponsor-tiers.tsx    # Sponsorship tiers page
│   ├── profile.tsx          # User profile page
│   ├── media.tsx            # Media page
│   ├── race_details.tsx     # Race details page
│   ├── resources.tsx        # Resources page
│   ├── register.tsx         # Registration page
│   ├── login.tsx            # Login page
│   ├── _layout.tsx
│   └── …                    # Add more
│
├── components/              # Reusable UI components
│   ├── profile/ 
│   │   ├── CollapsibleSection.tsx #Collapsible Section in profile page 
│   ├── Header.tsx           # App header with logo
│   ├── RaceCard.tsx         # Race card component
│   ├── SponsorModal.tsx     # Modal for sponsor/vendor inquiries
│   ├── SearchBar.tsx        # Search Bar in the landing page
│   ├── ArticleCard.tsx      # Article cards
│   ├── HeroSection.tsx      # Top banner for the home page to find races
│   ├── BlogPostCard.tsx     # For blog post page (scrollable list of cards)
│   ├── FilterTabs.tsx       # Filter options
│   ├── Descriptor.tsx       # Race details (time, location, and address)
│   ├── ImageCarousel.tsx    # Images of the race
│   └── ...                      # Add more
│
├── assets/                  # Static assets (images, icons, fonts)
│   ├── fonts/
│   │   ├── Poppins-Medium.ttf
│   │   ├── Poppins-Regular.ttf
│   │   ├── Poppins-SemiBold.ttf
│   │   ├── SpaceMono-Regular.ttf
│   ├── images/
│   │   ├── raceimage1.jpg
│   │   ├── raceimage2.jpg
│   │   ├── raceimage3.jpg
│   │   ├── raceimage4.jpg
│   │   ├── corporate-sponsor-option-image.jpg
│   │   ├── adaptive-icon.png
│   │   ├── icon.png
│   │   ├── splash-icon.png
│   │   ├── unified-5k-logo.png
│   │   ├── logo.png
│   │   ├── partial-react-logo.png
│   │   ├── react-logo.png
│   │   ├── react-logo@2x.png
│   │   ├── react-logo@3x.png
│   │   ├── favicon.png
│   │   └── profile-placeholder.jpg
│
├── package.json             # Project dependencies & scripts
├── app.json                 # Expo project config
├── babel.config.js          # Babel setup for NativeWind / Expo
├── tailwind.config.js       # TailwindCSS (NativeWind) styles
├── tsconfig.json            # TypeScript configuration
├── GoogleService-Info.plist # Firebase API key for iOS
├── google-services.json     # Firebase API key for Android
├── eas.json                 # Expo cloud development setup
├── metro.config.js          # NativeWind config
├── nativewind-env.d.ts      # NativeWind env variables
└── README.md                # Project documentation
```

## Future Work 
- **Authentication Improvements**: Refine sign-in and sign-up flows, including proper redirect after login/registration. Enhance registration to sync Authentication users with a Firestore Users collection for persistent profile data. 
- **Database Integration**: Connect Firestore to fetch and display user-specific and race-related data throughout the app.  
- **Frontend Refinements**: Polish UI/UX for smoother navigation, responsive styling, and accessibility improvements.  
- **Deployment**: Prepare and configure production builds for both iOS and Android via Expo EAS.
- **RunSignUp API Integration**: Complete the connection between the frontend and RunSignUp API. Replace the temporary affiliate key with OAuth-based authentication and extend functionality to fetch event-level data (e.g., donation amounts, race times) for more detailed Race Details pages. 

