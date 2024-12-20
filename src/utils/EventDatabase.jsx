const eventdb = [
    {
      id: 1,
      heading: "Epic Comic Con",
      date: { year: 2023, month: "July" },
      location: "Mumbai, India",
      description:
        "Experience the most anticipated gathering of comic enthusiasts! Epic Comic Con invites you to immerse yourself in a realm where heroes and villains collide. Unveil exclusive collectibles, join panels with renowned artists, and witness legendary cosplayers bring your favorite characters to life. Whether you're a seasoned comic collector or just starting your journey, this event guarantees an epic adventure!",
      img: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29taWNzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      heading: "Fantasy Gaming Expo",
      date: { year: 2024, month: "May" },
      location: "Delhi, India",
      description:
        "Embark on a journey through fantastical realms at the Fantasy Gaming Expo! Delve into an immersive gaming experience that transcends reality. From tabletop adventures to cutting-edge VR simulations, this expo celebrates the essence of fantasy in gaming. Unleash your strategic prowess, forge alliances, and discover a world where every move shapes the destiny of kingdoms!",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      heading: "Cosplay Carnival",
      date: { year: 2023, month: "September" },
      location: "Bangalore, India",
      description:
        "Welcome to the Cosplay Carnival, where creativity knows no bounds! Embrace the art of transformation as cosplayers from across galaxies gather to showcase their craftsmanship. Unleash your alter ego, don your meticulously crafted costumes, and strut into a world where fantasy meets reality. With contests, workshops, and a vibrant community, this carnival invites you to step into a realm of endless possibilities!",
      img: "https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      heading: "Sci-Fi Symposium",
      date: { year: 2024, month: "March" },
      location: "Hyderabad, India",
      description:
        "Dive into the future at the Sci-Fi Symposium, a convergence of cutting-edge ideas and futuristic visions! Explore the technological marvels reshaping our world, engage with visionary speakers, and ponder the possibilities of tomorrow. From AI advancements to interstellar exploration, this symposium ignites curiosity and fuels the imagination. Join us on this journey to unravel the mysteries of science fiction!",
      img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
      {
        id: 5,
        heading: "Global Tech Summit",
        date: { year: 2024, month: "June" },
        location: "San Francisco, USA",
        description:
          "Join the brightest minds in technology at the Global Tech Summit! Explore groundbreaking innovations, network with industry leaders, and participate in hands-on workshops. From AI and blockchain to space tech and robotics, this summit is your gateway to shaping the future of technology.",
        img: "https://images.unsplash.com/photo-1504297437423-aca75f8013ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 6,
        heading: "Vintage Music Festival",
        date: { year: 2023, month: "November" },
        location: "Nashville, USA",
        description:
          "Step back in time at the Vintage Music Festival, a celebration of classic tunes and timeless melodies. Relive the golden era with live performances, vinyl record fairs, and retro-themed workshops. Whether you're a music aficionado or simply love nostalgia, this festival strikes all the right chords!",
        img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        heading: "Art and Culture Fair",
        date: { year: 2024, month: "February" },
        location: "Paris, France",
        description:
          "Immerse yourself in the beauty of creativity at the Art and Culture Fair. This event brings together artists, sculptors, and performers from around the world to showcase their masterpieces. Stroll through galleries, attend live art demonstrations, and celebrate the diverse expressions of culture and art.",
        img: "https://images.unsplash.com/photo-1483377542676-3f77904d4e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww",
      },
      {
        id: 8,
        heading: "Culinary World Expo",
        date: { year: 2023, month: "October" },
        location: "Tokyo, Japan",
        description:
          "Savor the flavors of the world at the Culinary World Expo! This gastronomic extravaganza features renowned chefs, cooking competitions, and exotic cuisines. Expand your palate with tastings, learn the secrets of culinary arts, and discover the global trends shaping the future of food.",
        img: "https://images.unsplash.com/photo-1543352634-956f61c6f632?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        heading: "Marathon of the Ages",
        date: { year: 2024, month: "April" },
        location: "London, UK",
        description:
          "Test your endurance and join runners from around the globe at the Marathon of the Ages. With routes winding through historical landmarks and modern marvels, this event combines physical challenge with cultural discovery. Whether you're an elite runner or a casual participant, this marathon offers a memorable experience!",
        img: "https://images.unsplash.com/photo-1526218626217-d8a9f2c908d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
  
    
  ];
  
  export default eventdb;