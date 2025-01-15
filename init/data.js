const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
        title: "Luxury Penthouse with Skyline Views",
        description:
          "Enjoy the height of luxury in this spacious penthouse, offering breathtaking city skyline views.",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVudGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
      },
      {
        title: "Charming Cottage by the Lake",
        description:
          "Relax in this quaint lakeside cottage. Ideal for fishing, kayaking, or simply enjoying the serene water views.",
        image:
          "https://images.unsplash.com/photo-1529059997568-3e307d038bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
      },
      {
        title: "Tropical Island Bungalow",
        description:
          "Stay in this private bungalow surrounded by lush tropical gardens and pristine beaches.",
        image:
          "https://images.unsplash.com/photo-1574169208507-8437617485c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1800,
        location: "Bora Bora",
        country: "French Polynesia",
      },
      {
        title: "Rustic Farmhouse Stay",
        description:
          "Escape the hustle and bustle in this rustic farmhouse, complete with modern amenities and farm-to-table dining.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161ef09d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm1ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 700,
        location: "Provence",
        country: "France",
      },
      {
        title: "Modern Desert Oasis",
        description:
          "Find peace and tranquility in this sleek, modern home nestled in the desert landscape.",
        image:
          "https://images.unsplash.com/photo-1550418290-a8d86ad674d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzZXJ0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1300,
        location: "Sedona",
        country: "United States",
      },
      {
        title: "Enchanting Castle Stay",
        description:
          "Step back in time with a stay in this stunning historic castle, offering majestic views and luxurious accommodations.",
        image:
          "https://images.unsplash.com/photo-1568564323843-6f1f44a56317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 3000,
        location: "Edinburgh",
        country: "Scotland",
      },
        {
    title: "Cozy Alpine Chalet",
    description:
      "Nestled in the heart of the Alps, this cozy chalet is perfect for skiing, hiking, or simply enjoying the mountain views.",
    image:
      "https://images.unsplash.com/photo-1542317854-4dded46d15b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFsYXNrYW4lMjBjaGFsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Modern Urban Loft",
    description:
      "Experience city life in style with this sleek, modern loft, located in the heart of downtown.",
    image:
      "https://images.unsplash.com/photo-1542314833-b1f47b3cb0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Private Safari Lodge",
    description:
      "Immerse yourself in the beauty of the savannah with this private lodge, offering unparalleled views of local wildlife.",
    image:
      "https://images.unsplash.com/photo-1566377363992-a6a92856922a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Historic Downtown Apartment",
    description:
      "Stay in this beautifully restored historic apartment, blending vintage charm with modern comfort.",
    image:
      "https://images.unsplash.com/photo-1560185127-dc0a040b3e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvd250b3duJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Secluded Jungle Treehouse",
    description:
      "Reconnect with nature in this unique treehouse surrounded by lush rainforest, offering peace and adventure in equal measure.",
    image:
      "https://images.unsplash.com/photo-1557744816-6f4f8f9046f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZWhvdXNlJTIwanVuZ2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Lavish Mediterranean Villa",
    description:
      "Soak up the sun and Mediterranean charm in this luxurious villa featuring a private pool and stunning coastal views.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Japanese Ryokan Retreat",
    description:
      "Experience traditional Japanese hospitality with a stay in this serene ryokan, complete with a hot spring bath.",
    image:
      "https://images.unsplash.com/photo-1557278353-fbfc095f679f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anlwYW4lMjByeW9rYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Overwater Bungalow Paradise",
    description:
      "Stay right above the turquoise waters in this stunning overwater bungalow, offering direct access to the ocean.",
    image:
      "https://images.unsplash.com/photo-1517167682507-65c7c694d76d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3ZlcndhdGVyJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Cozy Alpine Chalet",
    description:
      "Nestled in the heart of the Alps, this cozy chalet is perfect for skiing, hiking, or simply enjoying the mountain views.",
    image:
      "https://images.unsplash.com/photo-1542317854-4dded46d15b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFsYXNrYW4lMjBjaGFsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Modern Urban Loft",
    description:
      "Experience city life in style with this sleek, modern loft, located in the heart of downtown.",
    image:
      "https://images.unsplash.com/photo-1542314833-b1f47b3cb0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Private Safari Lodge",
    description:
      "Immerse yourself in the beauty of the savannah with this private lodge, offering unparalleled views of local wildlife.",
    image:
      "https://images.unsplash.com/photo-1566377363992-a6a92856922a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Historic Downtown Apartment",
    description:
      "Stay in this beautifully restored historic apartment, blending vintage charm with modern comfort.",
    image:
      "https://images.unsplash.com/photo-1560185127-dc0a040b3e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvd250b3duJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Secluded Jungle Treehouse",
    description:
      "Reconnect with nature in this unique treehouse surrounded by lush rainforest, offering peace and adventure in equal measure.",
    image:
      "https://images.unsplash.com/photo-1557744816-6f4f8f9046f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZWhvdXNlJTIwanVuZ2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Lavish Mediterranean Villa",
    description:
      "Soak up the sun and Mediterranean charm in this luxurious villa featuring a private pool and stunning coastal views.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Japanese Ryokan Retreat",
    description:
      "Experience traditional Japanese hospitality with a stay in this serene ryokan, complete with a hot spring bath.",
    image:
      "https://images.unsplash.com/photo-1557278353-fbfc095f679f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anlwYW4lMjByeW9rYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Overwater Bungalow Paradise",
    description:
      "Stay right above the turquoise waters in this stunning overwater bungalow, offering direct access to the ocean.",
    image:
      "https://images.unsplash.com/photo-1517167682507-65c7c694d76d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3ZlcndhdGVyJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  },
];
  
  module.exports = { data: sampleListings };