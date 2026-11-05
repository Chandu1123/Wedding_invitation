# 🌙 Royal Muslim Wedding Invitation

An opulent, culturally rich, and fully responsive Islamic Wedding Invitation web application built with **React**, **Vite**, **HTML5**, and modern **CSS3**.

Featuring a **Royal Emerald Green & Antique Gold** aesthetic, traditional Islamic geometric patterns, animated golden crescent moon & stars, swaying Fanous lanterns, authentic Quranic verses, prophetic wedding duas, live real-time countdown, interactive timeline, Google Maps directions, WhatsApp invitation sharing, and ambient background music.

---

## 💍 Bride & Groom

- **Groom:** Sarithala Chandu
- **Bride:** Vuluvalapalli Kulsum
- **Wedding Date:** Sunday, 20 December 2026
- **Venue:** The Royal Emerald Palace & Convention Centre (Grand Al-Mihrab Ballroom)

---

## ✨ Features & Architecture

1. **Royal Welcome Screen (`OpeningScreen.jsx`)**
   - Sacred *Bismillahir Rahmanir Raheem* Arabic calligraphy with golden aura.
   - Animated golden crescent moon and twinkling stardust particles.
   - Swaying traditional golden Fanous lanterns with warm flickering flames.
   - "Open Wedding Invitation" button with gold light shimmer effect.

2. **Islamic Salutation & Greeting (`IslamicGreeting.jsx`)**
   - *Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh* with English translation.
   - Cordial invitation invocation from the elders and families.

3. **Bride & Groom Presentation (`CoupleSection.jsx`)**
   - Large royal serif typography with ornamental Islamic Mihrab frame.
   - Gold decorative divider with central *Qubool Hai* medallion.
   - Parents' names and lineage honors.

4. **Prominent Wedding Details (`WeddingDetails.jsx`)**
   - Clean, high-contrast cards for Date, Timings (Nikah & Walima), and Venue.
   - Quick action link to navigate via Google Maps.

5. **Live Real-Time Countdown (`Countdown.jsx`)**
   - Live ticking Days, Hours, Minutes, and Seconds until the ceremony.
   - Automatic calculation based on configurable ISO date and timezone.
   - Auspicious celebration banner when the wedding time arrives.

6. **Wedding Programme Timeline (`WeddingTimeline.jsx`)**
   - Interactive timeline detailing the order of events:
     1. Sacred Nikah Ceremony
     2. Wedding Celebrations & Felicitations
     3. Royal Walima Feast & Dinner
   - Completely configurable via `src/data/weddingConfig.js`.

7. **Authentic Islamic Dua & Quranic Verse (`DuaSection.jsx`)**
   - **Surah Ar-Rum (30:21)** with Arabic text, transliteration, and translation.
   - **Prophetic Wedding Blessing Dua**:
     *“Barakallahu lakuma wa baraka 'alaykuma wa jama'a baynakuma fee khayr”* (Sunan Abi Dawud & Tirmidhi).

8. **Family Invitation (`FamilyInvitation.jsx`)**
   - Warm message welcoming guests on behalf of both the Sarithala and Vuluvalapalli families.

9. **Venue Location & Google Maps Navigation (`LocationSection.jsx`)**
   - Venue address, landmark notes, and embedded Google Maps preview.
   - 1-click **Get Directions** button opening directly in Google Maps.

10. **WhatsApp Social Sharing & Calendar Save (`ShareButton.jsx`)**
    - 1-click WhatsApp sharing with pre-formatted invitation message & link.
    - Copy link to clipboard with instant confirmation toast.
    - Add to Calendar (`.ics` file download) compatible with Apple Calendar, Google Calendar, and Outlook.

11. **Ambient Background Audio (`MusicPlayer.jsx`)**
    - Elegant floating audio player badge with soundwave animation.
    - Muted by default; initiates seamlessly upon the user opening the invitation.
    - Built-in Web Audio API soothing oriental ambient melody synthesizer (works offline and without any external MP3 file).
    - Supports custom MP3 files placed in `public/audio/wedding-melody.mp3`.

---

## 🛠️ Project Structure

```
Wedding_invitation/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD deployment
├── public/
│   ├── audio/
│   │   └── README.txt          # Instructions for custom MP3 audio
│   ├── images/
│   └── favicon.svg             # Islamic crescent and star favicon
├── src/
│   ├── components/
│   │   ├── OpeningScreen.jsx   # Welcome screen & opening ceremony
│   │   ├── IslamicGreeting.jsx # Bismillah & Assalamu Alaikum
│   │   ├── CoupleSection.jsx   # Bride & groom spotlight
│   │   ├── WeddingDetails.jsx  # Date, time & venue cards
│   │   ├── Countdown.jsx       # Real-time ticking countdown
│   │   ├── WeddingTimeline.jsx # Wedding programme & schedule
│   │   ├── DuaSection.jsx      # Quranic verse & authentic wedding dua
│   │   ├── FamilyInvitation.jsx# Family names & cordially invited by
│   │   ├── LocationSection.jsx # Venue address & Google Maps
│   │   ├── ShareButton.jsx     # WhatsApp sharing & Calendar .ics
│   │   ├── MusicPlayer.jsx     # Floating background music player
│   │   └── IslamicOrnaments.jsx# Handcrafted Islamic SVGs & ornaments
│   ├── data/
│   │   └── weddingConfig.js    # ⭐ CENTRAL WEDDING CONFIGURATION FILE
│   ├── styles/
│   │   ├── global.css          # Design tokens, reset, typography & colors
│   │   └── invitation.css      # Luxury styles, animations, keyframes & responsive layout
│   ├── App.jsx                 # Master application view
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with SEO metadata
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Documentation
```

---

## ⚙️ How to Customize Wedding Details

All details are controlled by a single configuration file:
👉 **`src/data/weddingConfig.js`**

To change bride and groom names, event dates, timings, venues, or messages, simply edit `src/data/weddingConfig.js`. You do **not** need to touch any component code.

```javascript
// Example snippet from src/data/weddingConfig.js:
export const weddingConfig = {
  couple: {
    groom: {
      fullName: "Sarithala Chandu",
      fatherName: "Mr. Sarithala",
      motherName: "Mrs. Sarithala",
    },
    bride: {
      fullName: "Vuluvalapalli Kulsum",
      fatherName: "Janab Vuluvalapalli",
      motherName: "Begum Vuluvalapalli",
    },
  },
  dateTime: {
    formattedDate: "Sunday, 20 December 2026",
    ceremonyTime: "11:00 AM Onwards",
    targetIsoDateTime: "2026-12-20T11:00:00+05:30",
  },
  location: {
    venueName: "The Royal Emerald Palace & Convention Centre",
    addressLine1: "Banquets Boulevard, Royal Palace Grounds",
    cityStateZip: "Hyderabad, Telangana - 500001",
    googleMapsUrl: "https://maps.google.com/?q=Grand+Ballroom+Convention+Centre",
  },
  // ... and more!
};
```

---

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chandu1123/Wedding_invitation.git
   cd Wedding_invitation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended & Instant)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select **`Wedding_invitation`**.
3. Framework Preset will automatically detect **Vite**.
4. Click **Deploy**.
5. Every time you push changes to GitHub, Vercel will automatically re-deploy your website!

### Option 2: GitHub Pages (Automated via GitHub Actions)
This repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Go to your repository on GitHub: `https://github.com/Chandu1123/Wedding_invitation`.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Any push to the `main` branch will automatically build and publish the website live!

---

## 🤲 Islamic Du'a for the Couple

> **بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ**  
> *“May Allah bless you both, shower His blessings upon you, and unite you both in goodness.”*
