export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  category:
    | "powersource"
    | "anniversary"
    | "retreat"
    | "campus"
    | "singles"
    | "baptism"
    | "general";
  image: string;
  featured?: boolean;
  registrationRequired?: boolean;
  capacity?: number;
  price?: string;
  organizer: string;
  contact?: {
    email?: string;
    phone?: string;
  };
}

export const eventCategories = {
  powersource: {
    name: "Powersource Events",
    color: "from-rpf-purple to-rpf-blue",
    icon: "⚡",
    description: "High-energy worship and revival experiences",
  },
  anniversary: {
    name: "Anniversary Celebrations",
    color: "from-rpf-gold to-rpf-red",
    icon: "🎉",
    description: "Celebrating milestones in our ministry journey",
  },
  retreat: {
    name: "Retreats",
    color: "from-rpf-blue to-rpf-purple",
    icon: "🏔️",
    description: "Spiritual renewal and deeper connection with God",
  },
  campus: {
    name: "Finding Jesus on Campus",
    color: "from-rpf-red to-rpf-gold",
    icon: "🎓",
    description: "University outreach and student ministry",
  },
  singles: {
    name: "Singles Day",
    color: "from-rpf-purple to-rpf-red",
    icon: "💝",
    description: "Fellowship and encouragement for single believers",
  },
  baptism: {
    name: "Baptism Ceremonies",
    color: "from-rpf-blue to-rpf-gold",
    icon: "💧",
    description: "Celebrating new life in Christ through baptism",
  },
  general: {
    name: "General Events",
    color: "from-gray-600 to-gray-800",
    icon: "📅",
    description: "Community gatherings and special services",
  },
};

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Powersource Revival Night",
    description:
      "Experience the power of God in an atmosphere of worship, prayer, and sound doctrine. Join us for a night of transformation and spiritual breakthrough.",
    date: "2025-01-15",
    time: "19:00",
    endTime: "21:30",
    location: "RPF Europe - London",
    category: "powersource",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "admin@rpfeurope.com",
      phone: "020 335 52829",
    },
  },
  {
    id: "2",
    title: "10th Anniversary Celebration",
    description:
      "Celebrating a decade of revival, transformation, and God's faithfulness. Join us for testimonies, worship, and a special anniversary service.",
    date: "2025-02-20",
    time: "10:00",
    endTime: "13:00",
    location: "RPF Europe - London",
    category: "anniversary",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: true,
    capacity: 500,
    organizer: "RPF Europe Leadership",
    contact: {
      email: "events@rpfeurope.com",
    },
  },
  {
    id: "3",
    title: "Winter Spiritual Retreat",
    description:
      "A weekend of spiritual renewal, deep worship, and fellowship in the beautiful countryside. Disconnect from the world and connect with God.",
    date: "2025-03-07",
    time: "18:00",
    endTime: "2025-03-09T15:00",
    location: "Countryside Retreat Center, Surrey",
    category: "retreat",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: true,
    capacity: 80,
    price: "£120 (includes accommodation & meals)",
    organizer: "RPF Retreat Ministry",
    contact: {
      email: "retreats@rpfeurope.com",
      phone: "020 335 52829",
    },
  },
  {
    id: "4",
    title: "Finding Jesus on Campus - University Outreach",
    description:
      "Join us as we reach out to students across London universities with the gospel of Jesus Christ. Evangelism training and campus visits included.",
    date: "2025-01-25",
    time: "14:00",
    endTime: "18:00",
    location: "Various London Universities",
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: true,
    organizer: "RPF Campus Ministry",
    contact: {
      email: "campus@rpfeurope.com",
    },
  },
  {
    id: "5",
    title: "Singles Day Fellowship",
    description:
      "A special day of fellowship, encouragement, and teaching for single believers. Discover God's purpose for your season of singleness.",
    date: "2025-02-14",
    time: "15:00",
    endTime: "19:00",
    location: "RPF Europe - London",
    category: "singles",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: true,
    capacity: 100,
    organizer: "RPF Singles Ministry",
    contact: {
      email: "singles@rpfeurope.com",
    },
  },
  {
    id: "6",
    title: "Baptism Service",
    description:
      "Witness and celebrate as new believers take their next step of faith through water baptism. A powerful testimony of transformation.",
    date: "2025-01-26",
    time: "11:00",
    endTime: "13:00",
    location: "RPF Europe - London",
    category: "baptism",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "baptism@rpfeurope.com",
    },
  },
  {
    id: "7",
    title: "Powersource Youth Night",
    description:
      "High-energy worship and powerful teaching designed specifically for young people. Experience God in a fresh and dynamic way.",
    date: "2025-02-07",
    time: "18:30",
    endTime: "21:00",
    location: "RPF Europe - London",
    category: "powersource",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: false,
    organizer: "RPF Youth Ministry",
    contact: {
      email: "youth@rpfeurope.com",
    },
  },
  {
    id: "8",
    title: "Campus Revival Week",
    description:
      "A week-long series of events across university campuses, bringing revival and transformation to students through powerful worship and teaching.",
    date: "2025-03-17",
    time: "12:00",
    endTime: "2025-03-21T20:00",
    location: "Multiple University Campuses",
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: true,
    organizer: "RPF Campus Ministry",
    contact: {
      email: "campus@rpfeurope.com",
    },
  },
];

// Helper functions
export const getEventsByMonth = (year: number, month: number): Event[] => {
  return eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });
};

export const getUpcomingEvents = (limit?: number): Event[] => {
  const now = new Date();
  const upcoming = eventsData
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getFeaturedEvents = (): Event[] => {
  return eventsData.filter((event) => event.featured);
};

export const getEventsByCategory = (category: string): Event[] => {
  return eventsData.filter((event) => event.category === category);
};
// Additional events for a more complete calendar
const additionalEvents: Event[] = [
  {
    id: "9",
    title: "Monthly Baptism Ceremony",
    description:
      "Join us as we celebrate new life in Christ through water baptism. A beautiful ceremony of faith and commitment.",
    date: "2025-01-12",
    time: "11:00",
    endTime: "12:30",
    location: "RPF Europe - London",
    category: "baptism",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "baptism@rpfeurope.com",
    },
  },
  {
    id: "10",
    title: "New Year Prayer & Fasting",
    description:
      "Start the year with prayer, fasting, and seeking God's face. Join us for 21 days of spiritual discipline and breakthrough.",
    date: "2025-01-01",
    time: "06:00",
    endTime: "2025-01-21T20:00",
    location: "RPF Europe - London",
    category: "general",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: true,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "prayer@rpfeurope.com",
    },
  },
  {
    id: "11",
    title: "Women's Conference 2025",
    description:
      "A powerful conference for women of faith. Experience worship, teaching, and fellowship designed specifically for women in ministry.",
    date: "2025-03-08",
    time: "09:00",
    endTime: "17:00",
    location: "RPF Europe - London",
    category: "general",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: true,
    capacity: 200,
    price: "£25",
    organizer: "RPF Women's Ministry",
    contact: {
      email: "women@rpfeurope.com",
    },
  },
  {
    id: "12",
    title: "Easter Celebration Service",
    description:
      "Celebrate the resurrection of Jesus Christ with powerful worship, communion, and a message of hope and new life.",
    date: "2025-04-20",
    time: "10:00",
    endTime: "12:30",
    location: "RPF Europe - London",
    category: "general",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "admin@rpfeurope.com",
    },
  },
  {
    id: "13",
    title: "Spring Baptism Service",
    description:
      "Another opportunity for new believers to declare their faith through baptism. Witness the joy of transformation.",
    date: "2025-03-30",
    time: "11:00",
    endTime: "13:00",
    location: "RPF Europe - London",
    category: "baptism",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "baptism@rpfeurope.com",
    },
  },
  {
    id: "14",
    title: "University of London Outreach",
    description:
      "Focused outreach to University of London campuses. Join us in sharing the gospel with students and faculty.",
    date: "2025-02-28",
    time: "13:00",
    endTime: "17:00",
    location: "University of London Campuses",
    category: "campus",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationRequired: true,
    organizer: "RPF Campus Ministry",
    contact: {
      email: "campus@rpfeurope.com",
    },
  },
  {
    id: "15",
    title: "Powersource Healing Service",
    description:
      "A special service focused on divine healing and miracles. Come expecting God to move in supernatural ways.",
    date: "2025-03-28",
    time: "19:00",
    endTime: "21:30",
    location: "RPF Europe - London",
    category: "powersource",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    registrationRequired: false,
    organizer: "Pastor Austin E-Ben",
    contact: {
      email: "healing@rpfeurope.com",
    },
  },
];

// Merge additional events with the main events array
eventsData.push(...additionalEvents);
