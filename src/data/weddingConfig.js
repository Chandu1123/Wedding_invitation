/**
 * ============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION
 * File: src/data/weddingConfig.js
 * Couple: Groom Sarithala Chandu & Bride Vuluvalapalli Kulsum
 * Venue: Hindupur, Andhra Pradesh (No dates/times announced as of now)
 * ============================================================================
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: {
      firstName: "Chandu",
      fullName: "Sarithala Chandu",
      title: "The Groom",
      familyTitle: "Sarithala Family",
      about: "With the blessings of elders & Almighty Allah",
    },
    bride: {
      firstName: "Kulsum",
      fullName: "Vuluvalapalli Kulsum",
      title: "The Bride",
      familyTitle: "Vuluvalapalli Family",
      about: "With the blessings of elders & Almighty Allah",
    },
    monogram: "C & K",
    order: "groom-first",
  },

  // Venue is strictly Hindupur
  location: {
    venueName: "Hindupur",
    city: "Hindupur",
    district: "Sri Sathya Sai District",
    state: "Andhra Pradesh",
    country: "India",
    venueTitle: "Hindupur, Andhra Pradesh",
    addressLine1: "Hindupur",
    addressLine2: "Sri Sathya Sai District, Andhra Pradesh 515201",
    fullAddress: "Hindupur, Sri Sathya Sai District, Andhra Pradesh, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hindupur+Andhra+Pradesh",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62057.29177119045!2d77.4589!3d13.8283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1480f2d4e6db5%3A0x6a19f2a2491a2e7c!2sHindupur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin",
    navigationHint: "Tap to open navigation directions to Hindupur in Google Maps",
  },

  // Date & Time Status: No date or time mentioned as of now
  dateTimeStatus: {
    isAnnounced: false,
    announcementTitle: "Date & Time Announcement",
    announcementBadge: "To Be Announced Soon",
    note: "Dates and timings will be announced soon (Insha'Allah)",
    subtext: "With heartfelt prayers to Almighty Allah, the auspicious date and muhurtham for the Nikah ceremony will be finalized and shared with all family & friends shortly.",
  },

  // Safe fallback dateTime object for legacy scroll components
  dateTime: {
    isAnnounced: false,
    formattedDate: "Dates to be announced soon (Insha'Allah)",
    dayOfWeek: "Soon Insha'Allah",
    dayOfMonth: "--",
    monthName: "Date TBA",
    year: "2026",
    ceremonyTime: "To be announced",
    receptionTime: "To be announced",
    targetIsoDateTime: null,
  },

  // Islamic Greetings & Calligraphy
  islamicGreeting: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahTranslation: "In the Name of Allah, the Most Gracious, the Most Merciful",
    salamArabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    salamTransliteration: "Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh",
    salamTranslation: "May the peace, mercy, and blessings of Allah be upon you",
  },

  // Family Invitation Wording
  familyInvitation: {
    badgeText: "Royal Family Invitation",
    leadText:
      "With the infinite blessings of Almighty Allah (SWT) and the cherished affection of our elders, we cordially invite you and your family to join us in celebrating the holy wedding of our beloved children.",
    groomParentsLine: "Beloved Son of Mr. & Mrs. Sarithala",
    brideParentsLine: "Beloved Daughter of Mr. & Mrs. Vuluvalapalli",
    groomFamilyTitle: "Sarithala Family",
    brideFamilyTitle: "Vuluvalapalli Family",
    closingNote:
      "Your gracious presence, love, and heartfelt prayers are our greatest blessings as they embark on this sacred journey together.",
    rsvpContacts: [
      { name: "Sarithala Family", role: "Groom's Family", location: "Hindupur" },
      { name: "Vuluvalapalli Family", role: "Bride's Family", location: "Hindupur" },
    ],
  },

  // Islamic Duas & Quranic Verses
  dua: {
    verseBadge: "Holy Qur'an — Surah Ar-Rum (30:21)",
    arabicVerse:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    verseTranslation:
      "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”",
    verseReference: "Surah Ar-Rum • Verse 21",

    propheticDuaBadge: "Prophetic Sunnah Wedding Dua",
    propheticDuaArabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    propheticDuaTransliteration:
      "Barakallahu lakuma wa baraka 'alaykuma wa jama'a baynakuma fee khayr.",
    propheticDuaTranslation:
      "“May Allah bless you both, shower His blessings upon you, and unite you both in goodness and harmony.”",
    propheticDuaReference: "(Sunan Abi Dawud 2130, Jami` at-Tirmidhi 1091)",
  },

  // Social & WhatsApp Sharing
  sharing: {
    whatsappMessage:
      "✨ *Bismillahir Rahmanir Raheem* ✨\n\nAssalamu Alaikum!\n\nWith the blessings of Allah (SWT), we cordially invite you and your family to the blessed Wedding of:\n\n🤵 *Sarithala Chandu*\n       & \n👰 *Vuluvalapalli Kulsum*\n\n📍 Venue: *Hindupur, Andhra Pradesh*\n📅 Dates & Timings: *To be announced soon (Insha'Allah)*\n\nPlease view our luxury digital wedding invitation here:\n",
    shareTitle: "Wedding Invitation | Sarithala Chandu & Vuluvalapalli Kulsum",
    shareDescription: "Luxury Islamic Wedding Invitation for Sarithala Chandu and Vuluvalapalli Kulsum in Hindupur.",
  },

  // Music Settings
  music: {
    enabled: true,
    title: "Sacred Islamic Wedding Melody",
    audioFilePath: "./audio/wedding-melody.mp3",
    enableSynthesizerFallback: true,
  },
};

export default weddingConfig;
