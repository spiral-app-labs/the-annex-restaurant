export const RESTAURANT = {
  name: "The ANNEX Restaurant & Lounge",
  shortName: "The ANNEX",
  address: "2104 W Algonquin Rd, Lake in the Hills, IL 60156",
  phone: "(224) 333-0035",
  phoneHref: "tel:+12243330035",
  email: "info@annexrestaurant.com",
  openTable: "https://www.opentable.com/r/the-annex-restaurant-and-lounge-lake-in-the-hills",
  facebook: "https://facebook.com/208923612295744",
  instagram: "https://instagram.com/annexrestaurant",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.5!2d-88.3578!3d42.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1a8e9e6e8d1d%3A0x1234567890abcdef!2s2104+W+Algonquin+Rd%2C+Lake+in+the+Hills%2C+IL+60156!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  googleMapsLink: "https://maps.google.com/?q=2104+W+Algonquin+Rd,+Lake+in+the+Hills,+IL+60156",
  hours: [
    { days: "Monday – Wednesday", time: "10:00 AM – 11:00 PM" },
    { days: "Thursday – Saturday", time: "10:00 AM – 12:00 AM" },
    { days: "Sunday", time: "Closed" },
  ],
  rating: 4.8,
  reviewCount: 129,
  tagline: "Made From Scratch. Crafted With Care.",
  description: "American, Greek & Mediterranean cuisine — upscale casual dining in Lake in the Hills, IL",
};

export const REVIEWS = [
  {
    text: "What an awesome hidden gem! Love the modern decor. Creative, tasty cocktails! Great variety of food with Greek influences. Everything was delicious. Owners are super nice too!",
    author: "J.H.",
    source: "Google",
    rating: 5,
  },
  {
    text: "The food is always delicious and the restaurant has a warm clubby atmosphere. I've been there 4 times so far and can't wait to go back.",
    author: "Debra G.",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "Everything was very tasty. The roasted beet salad with salmon was so fresh and the salmon was perfectly cooked. Our saganaki appetizer was delicious too.",
    author: "Katie H.",
    source: "Google",
    rating: 5,
  },
  {
    text: "Incredible and fresh flavors that you can tell the owner takes pride in! Everything we ordered was delicious!",
    author: "Nicole K.",
    source: "Google",
    rating: 5,
  },
  {
    text: "Great food, service was attentive and great, busboys were very quick and polite. Very cute atmosphere.",
    author: "Katie",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "Food is delicious, menu is varied with a selection to fit almost any preference. Staff is friendly and responsive.",
    author: "Jim",
    source: "OpenTable",
    rating: 5,
  },
];

export const MENU_CATEGORIES = [
  {
    name: "Small Plates & Appetizers",
    description: "Begin your dining experience with our Mediterranean-inspired starters",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80",
    items: [
      { name: "Saganaki", description: "Flaming Greek cheese, pan-seared and served tableside with a squeeze of lemon", price: "$16" },
      { name: "Hummus & Pita", description: "House-made hummus with warm grilled pita, drizzled with extra virgin olive oil", price: "$14" },
      { name: "Calamari", description: "Lightly breaded and fried to golden perfection, served with marinara", price: "$17" },
      { name: "Bruschetta", description: "Toasted crostini topped with fresh tomatoes, basil, and balsamic glaze", price: "$14" },
      { name: "Charcuterie Board", description: "Curated selection of artisan meats, cheeses, olives, and house accompaniments", price: "$24" },
    ],
  },
  {
    name: "Soups & Salads",
    description: "Fresh, vibrant, and made daily",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    items: [
      { name: "Roasted Beet Salad", description: "Roasted beets, mixed greens, goat cheese, and candied walnuts with balsamic vinaigrette. Add salmon +$12", price: "$16" },
      { name: "Greek Salad", description: "Crisp romaine, tomatoes, cucumbers, kalamata olives, red onion, and feta with Greek dressing", price: "$15" },
      { name: "Caesar Salad", description: "Romaine hearts, house-made Caesar dressing, parmesan, and garlic croutons", price: "$14" },
      { name: "Soup of the Day", description: "Chef's daily selection, made fresh each morning", price: "$10" },
    ],
  },
  {
    name: "Sandwiches",
    description: "Handcrafted and served with your choice of side",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    items: [
      { name: "Philly Cheesesteak", description: "Shaved ribeye, sautéed peppers and onions, melted provolone on a hoagie roll", price: "$19" },
      { name: "ANNEX Burger", description: "Half-pound Angus patty, lettuce, tomato, onion, pickles, and ANNEX sauce on a brioche bun", price: "$18" },
      { name: "Chicken Sandwich", description: "Grilled or crispy chicken breast with fresh toppings on a toasted bun", price: "$17" },
      { name: "Club Sandwich", description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo", price: "$17" },
    ],
  },
  {
    name: "Steaks & Chops",
    description: "Premium cuts, expertly prepared",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    items: [
      { name: "Filet Mignon", description: "8oz center-cut tenderloin, the most tender cut, cooked to your preference", price: "$48" },
      { name: "Ribeye", description: "14oz bone-in ribeye, beautifully marbled and full of flavor", price: "$44" },
      { name: "NY Strip", description: "12oz New York strip with a rich, bold flavor profile", price: "$42" },
      { name: "Lamb Chops", description: "Mediterranean-seasoned lamb chops, grilled to perfection", price: "$40" },
      { name: "Mixed Grill Special", description: "Chef's selection of grilled meats with seasonal accompaniments", price: "$46" },
    ],
  },
  {
    name: "Seafood",
    description: "Fresh catches prepared with Mediterranean flair",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80",
    items: [
      { name: "Halibut", description: "Pan-seared halibut fillet with lemon-caper butter sauce", price: "$38" },
      { name: "Salmon", description: "Atlantic salmon, grilled or blackened, with seasonal vegetables", price: "$34" },
      { name: "Shrimp Scampi", description: "Jumbo shrimp sautéed in garlic, white wine, and butter over linguine", price: "$32" },
      { name: "Seafood Pasta", description: "Shrimp, calamari, and mussels tossed in a light marinara over pasta", price: "$34" },
    ],
  },
  {
    name: "Chicken",
    description: "Free-range chicken, expertly seasoned",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
    items: [
      { name: "Greek Chicken", description: "Marinated in Mediterranean herbs and spices, served with roasted potatoes. Blackened option available", price: "$28" },
      { name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara and melted mozzarella over spaghetti", price: "$26" },
      { name: "Roasted Chicken", description: "Half chicken, slow-roasted with herbs and served with seasonal sides", price: "$26" },
    ],
  },
  {
    name: "Pasta",
    description: "Fresh pasta, made with love",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    items: [
      { name: "Pasta Santorini", description: "House specialty — Mediterranean pasta with sun-dried tomatoes, olives, and feta. Add blackened chicken +$8", price: "$24" },
      { name: "Shrimp Pasta", description: "Sautéed shrimp with garlic and herbs in a light cream sauce", price: "$28" },
      { name: "Penne alla Vodka", description: "Penne in a creamy tomato-vodka sauce with a touch of basil", price: "$22" },
    ],
  },
  {
    name: "Signature Cocktails & Drinks",
    description: "Mixologist-crafted cocktails, curated wines, and local brews",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    items: [
      { name: "Signature Cocktails", description: "Our mixologist-crafted creations — ask your server for tonight's featured selections", price: "$15–$18" },
      { name: "Wine List", description: "Curated selection of reds, whites, and rosés from around the world", price: "$12–$18" },
      { name: "Beer Selection", description: "Local craft brews and imported favorites on draft and bottle", price: "$7–$10" },
      { name: "Happy Hour Specials", description: "Available select days — ask your server for current offerings", price: "" },
    ],
  },
];

export const STATS = [
  { label: "OpenTable Rating", value: 4.8, suffix: "★", prefix: "" },
  { label: "Reviews", value: 129, suffix: "+", prefix: "" },
  { label: "Established", value: 2024, suffix: "", prefix: "" },
  { label: "Menu Items", value: 40, suffix: "+", prefix: "" },
];
