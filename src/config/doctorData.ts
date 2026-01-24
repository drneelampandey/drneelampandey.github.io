// Master Configuration File
// Update all doctor information, stats, and content here

export interface DoctorData {
  // Basic Information
  name: string;
  degrees: string[];
  photo: string;
  
  // Biography
  biography: string;
  
  // Education
  education: Array<{
    degree: string;
    institution: string;
    year?: string;
  }>;
  
  // Experience
  experience: Array<{
    position: string;
    organization: string;
    duration: string;
    description?: string;
  }>;
  
  // Awards
  awards: Array<{
    title: string;
    year?: string;
    organization?: string;
  }>;
  
  // Statistics
  stats: {
    googleRating: number;
    googleReviews: number;
    yearsOfExperience: number;
    patientsTreated: number;
  };
  
  // Expertise Areas
  expertise: Array<{
    number: string;
    title: string;
    conditions: string[];
  }>;
  
  // Testimonials (from Google Reviews)
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    date?: string;
  }>;
  
  // FAQ
  faq: Array<{
    question: string;
    answer: string;
  }>;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: string;
    workingHours: {
      [key: string]: string; // e.g., "Monday": "9:00 AM - 6:00 PM"
    };
    googleMapsEmbedUrl: string;
    mapsBlurb: string;
  };
  
  // Social Media
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  
  // Why Homeopathy Content
  whyHomeopathy: {
    title: string;
    content: string;
  };
}

export const doctorData: DoctorData = {
  name: "Dr. [Doctor Name]",
  degrees: ["BHMS", "MD (Homeopathy)"],
  photo: "/doctor-photo.jpg",
  
  biography: "With over [X] years of dedicated practice in homeopathy, Dr. [Doctor Name] has helped thousands of patients achieve better health through natural, holistic treatment approaches. Specializing in chronic conditions and preventive care, the doctor combines traditional homeopathic principles with modern medical understanding.",
  
  education: [
    {
      degree: "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
      institution: "[University Name]",
      year: "20XX"
    },
    {
      degree: "MD (Homeopathy)",
      institution: "[University Name]",
      year: "20XX"
    }
  ],
  
  experience: [
    {
      position: "Senior Homeopathic Physician",
      organization: "[Clinic/Hospital Name]",
      duration: "20XX - Present",
      description: "Leading homeopathic practice with focus on chronic diseases"
    },
    {
      position: "Homeopathic Consultant",
      organization: "[Previous Organization]",
      duration: "20XX - 20XX"
    }
  ],
  
  awards: [
    {
      title: "Excellence in Homeopathic Practice",
      organization: "[Awarding Body]",
      year: "20XX"
    }
  ],
  
  stats: {
    googleRating: 4.8,
    googleReviews: 150,
    yearsOfExperience: 15,
    patientsTreated: 5000
  },
  
  expertise: [
    {
      number: "01",
      title: "Allergies & Respiratory",
      conditions: ["Asthma", "Sinusitis", "Hay fever", "Chronic cough"]
    },
    {
      number: "02",
      title: "Skin Disorders",
      conditions: ["Eczema", "Psoriasis", "Acne", "Vitiligo", "Hair loss"]
    },
    {
      number: "03",
      title: "Digestive Issues",
      conditions: ["IBS", "Acidity", "GERD", "Constipation", "Liver problems"]
    },
    {
      number: "04",
      title: "Joint & Muscle Pain",
      conditions: ["Arthritis", "Back pain", "Sciatica", "Sports injuries"]
    },
    {
      number: "05",
      title: "Mental Wellness",
      conditions: ["Anxiety", "Depression", "Insomnia", "Stress", "Migraine"]
    },
    {
      number: "06",
      title: "Pediatric Care",
      conditions: ["Growth issues", "ADHD", "Infections", "Behavioral problems"]
    }
  ],
  
  testimonials: [
    {
      name: "Patient Name",
      rating: 5,
      text: "Excellent treatment and care. Dr. [Doctor Name] helped me overcome my chronic allergy issues that I had been struggling with for years.",
      date: "2024"
    },
    {
      name: "Patient Name",
      rating: 5,
      text: "Very professional and understanding. The homeopathic approach worked wonders for my skin condition.",
      date: "2024"
    },
    {
      name: "Patient Name",
      rating: 5,
      text: "Highly recommended! The doctor takes time to understand the root cause and provides personalized treatment.",
      date: "2024"
    }
  ],
  
  faq: [
    {
      question: "What is homeopathy?",
      answer: "Homeopathy is a natural system of medicine that uses highly diluted substances to trigger the body's natural healing response. It treats the whole person, not just the symptoms."
    },
    {
      question: "How long does homeopathic treatment take?",
      answer: "Treatment duration varies depending on the condition. Acute conditions may show improvement in days to weeks, while chronic conditions may require several months of treatment."
    },
    {
      question: "Is homeopathy safe?",
      answer: "Yes, homeopathy is extremely safe with no known side effects. It is suitable for people of all ages, including infants, pregnant women, and the elderly."
    },
    {
      question: "Can homeopathy be taken with other medicines?",
      answer: "Homeopathic medicines generally do not interfere with conventional medications. However, it's important to inform your doctor about all medications you're taking."
    },
    {
      question: "Do I need to follow any diet restrictions?",
      answer: "Some homeopathic medicines may require avoiding certain foods like coffee, mint, or strong-smelling substances. Your doctor will provide specific guidance based on your treatment."
    }
  ],
  
  contact: {
    phone: "+91-XXXXXXXXXX",
    email: "doctor@example.com",
    address: "123 Clinic Street, City, State, PIN Code",
    workingHours: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 2:00 PM",
      "Sunday": "Closed"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1234567890!2d77.1234567890!3d28.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    mapsBlurb: "Visit us at our clinic. We're conveniently located with easy access and parking facilities."
  },
  
  socialMedia: {
    instagram: "https://instagram.com/doctorhandle",
    facebook: "https://facebook.com/doctorhandle",
    linkedin: "https://linkedin.com/in/doctorhandle",
    twitter: "https://twitter.com/doctorhandle"
  },
  
  whyHomeopathy: {
    title: "Why Choose Homeopathy?",
    content: "Homeopathy offers a gentle, natural approach to healing that treats the root cause of illness rather than just suppressing symptoms. It's safe for all ages, has no side effects, and works in harmony with your body's natural healing processes. Our personalized treatment plans address your unique health needs, promoting long-term wellness and vitality."
  }
};
