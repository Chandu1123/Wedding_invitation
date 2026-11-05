/**
 * ============================================================================
 * CENTRAL WEDDING INVITATION CONFIGURATION
 * File: src/data/weddingConfig.js
 * ============================================================================
 * You can customize ALL wedding details, names, dates, venues, timeline events,
 * and messages right here without modifying any React components.
 */

export const weddingConfig = {
  // --------------------------------------------------------------------------
  // 1. COUPLE INFORMATION
  // --------------------------------------------------------------------------
  couple: {
    // Groom Details
    groom: {
      firstName: "Chandu",
      fullName: "Sarithala Chandu",
      title: "Groom",
      fatherName: "Mr. Sarithala",
      motherName: "Mrs. Sarithala",
      familyTitle: "Sarithala Family",
      about: "Beloved son entering this blessed union with prayers and devotion.",
    },

    // Bride Details
    bride: {
      firstName: "Kulsum",
      fullName: "Vuluvalapalli Kulsum",
      title: "Bride",
      fatherName: "Janab Vuluvalapalli",
      motherName: "Begum Vuluvalapalli",
      familyTitle: "Vuluvalapalli Family",
      about: "Beloved daughter embarking upon this sacred journey of faith and companionship.",
    },

    // Monogram & Display Settings
    monogram: "C & K",
    order: "groom-first", // "groom-first" or "bride-first"
  },

  // --------------------------------------------------------------------------
  // 2. ISLAMIC GREETINGS & OPENING
  // --------------------------------------------------------------------------
  islamicGreeting: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahTranslation: "In the Name of Allah, the Most Gracious, the Most Merciful",
    salamArabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    salamTransliteration: "Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh",
    salamTranslation: "May the peace, mercy, and blessings of Allah be upon you",
    headerBadge: "Nikah & Walima Invitation",
    invitationSubtitle: "A Sacred Covenant of Love, Faith & Togetherness",
  },

  // --------------------------------------------------------------------------
  // 3. FAMILY INVITATION INVOCATION
  // --------------------------------------------------------------------------
  familyInvitation: {
    leadText:
      "With the grace of Almighty Allah (SWT) and the cherished blessings of our elders and families, we cordially invite you to honor us with your gracious presence and heartfelt prayers on the joyous and blessed wedding celebration of our beloved children",
    groomParentsLine: "Son of Mr. & Mrs. Sarithala",
    brideParentsLine: "Daughter of Mr. & Mrs. Vuluvalapalli",
    closingHospitality:
      "Your esteemed presence and prayers are our most treasured gift. Please join us in making this milestone an unforgettable celebration.",
  },

  // --------------------------------------------------------------------------
  // 4. DATE & TIME
  // --------------------------------------------------------------------------
  dateTime: {
    // Human-readable labels
    dayOfWeek: "Sunday",
    dayOfMonth: 20,
    monthName: "December",
    monthNumber: 12, // 1 to 12
    year: 2026,
    formattedDate: "Sunday, 20 December 2026",
    ceremonyTime: "11:00 AM Onwards",
    receptionTime: "7:00 PM Onwards",

    // ISO 8601 target for the live countdown calculation
    // Format: "YYYY-MM-DDTHH:mm:ss+Timezone" (e.g. +05:30 for IST)
    targetIsoDateTime: "2026-12-20T11:00:00+05:30",
  },

  // --------------------------------------------------------------------------
  // 5. VENUE & LOCATION
  // --------------------------------------------------------------------------
  location: {
    venueName: "The Royal Emerald Palace & Convention Centre",
    hallName: "Grand Al-Mihrab Ballroom",
    addressLine1: "Banquets Boulevard, Royal Palace Grounds",
    cityStateZip: "Hyderabad, Telangana - 500001",
    landmark: "Opposite Grand Royal Garden Gate 3",
    // Google Maps interactive navigation link
    googleMapsUrl: "https://maps.google.com/?q=Grand+Ballroom+Convention+Centre",
    // Embedded map iframe source (optional)
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.32483861208!2d78.4746!3d17.3616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a93b5%3A0x6b637b3f9!2sHyderabad!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  },

  // --------------------------------------------------------------------------
  // 6. WEDDING PROGRAMME / TIMELINE
  // --------------------------------------------------------------------------
  programme: [
    {
      id: "nikah",
      time: "11:30 AM",
      title: "Sacred Nikah Ceremony",
      arabicBadge: "النكاح",
      description:
        "The solemnization of the Islamic marriage contract in the presence of esteemed witnesses, elders, and families, blessed with supplications.",
      icon: "ring",
    },
    {
      id: "celebration",
      time: "01:00 PM",
      title: "Wedding Celebrations & Congratulatory Greetings",
      arabicBadge: "التهاني والتبريكات",
      description:
        "Joyous greetings, traditional welcoming rituals, photo moments with the newlywed couple, and family felicitations.",
      icon: "sparkles",
    },
    {
      id: "walima",
      time: "07:30 PM",
      title: "Royal Walima Feast & Dinner",
      arabicBadge: "وليمة العرس",
      description:
        "An opulent banquet dinner hosted in honor of the wedding, featuring traditional culinary delicacies and royal hospitality.",
      icon: "utensils",
    },
  ],

  // --------------------------------------------------------------------------
  // 7. QURANIC VERSE & ISLAMIC DUA
  // --------------------------------------------------------------------------
  quranicVerse: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    transliteration:
      "Wa min ayatihi an khalaqa lakum min anfusikum azwajan litaskunu ilayha wa ja'ala baynakum mawaddatan wa rahmah.",
    english:
      "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”",
    reference: "Surah Ar-Rum (30:21)",
  },

  sunnahDua: {
    arabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration:
      "Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fee khayr.",
    english:
      "“May Allah bless you both, shower His blessings upon you, and unite you both in goodness and harmony.”",
    reference: "Prophetic Sunnah (Sunan Abi Dawud & Jami` at-Tirmidhi)",
  },

  // --------------------------------------------------------------------------
  // 8. SOCIAL SHARING & WHATSAPP
  // --------------------------------------------------------------------------
  sharing: {
    whatsappShareText:
      "✨ *Bismillahir Rahmanir Raheem* ✨\n\nAssalamu Alaikum!\n\nWe joyfully invite you and your family to celebrate the blessed Wedding Ceremony of:\n\n🤵 *Sarithala Chandu* \n   & \n👰 *Vuluvalapalli Kulsum*\n\n📅 Date: Sunday, 20 December 2026\n🕌 Venue: The Royal Emerald Palace & Convention Centre\n\nKindly view the full interactive invitation, schedule & venue map here:\n",
    shareTitle: "Royal Wedding Invitation | Sarithala Chandu & Vuluvalapalli Kulsum",
  },

  // --------------------------------------------------------------------------
  // 9. BACKGROUND MUSIC
  // --------------------------------------------------------------------------
  music: {
    enabled: true,
    title: "Melody of Serenity (Soothing Oriental Oud)",
    // Custom audio file path (place mp3 in public/audio/wedding-melody.mp3)
    audioFilePath: "./audio/wedding-melody.mp3",
    // When true, uses built-in ambient harmonic synthesizer if mp3 is not present
    enableSynthesizerFallback: true,
  },
};

export default weddingConfig;
