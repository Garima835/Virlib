// import { createChatBotMessage } from 'react-chatbot-kit';
const data = {
  "mystery": [
    "Silent Patient", 
    "Verity",
    "Behind Closed Doors",
    "Gone Girl",
    "The Woman in the Window"
  ],
  "thriller" : [
    "The Girl on the Train",
    "Before I Go to Sleep",
    "Behind Her Eyes",
    "Big Little Lies",
    "In the Woods",
  ],
  "mythology": [
    "Circe",
    "The Song of Achilles",
    "Norse Mythology",
    "American Gods",
    "Mythos"
  ],
  "fantasy": [
    "Harry Potter",
    "Mistborn",
    "Eragon",
    "The Name of the Wind",
    "A Court of Thorns and Roses"
  ],
  "romance": [
    "Pride & Prejudice",
    "Me Before You",
    "The Notebook",
    "The Time Traveler\u2019s Wife",
    "Outlander"
  ],
  "horror": [
    "It",
    "The Haunting of Hill House",
    "Dracula",
    "The Exorcist",
    "Bird Box"
  ],
  "legends": [
    "The Once and Future King",
    "The Mists of Avalon",
    "Beowulf",
    "The King of Ys",
    "The Palace of Illusions"
  ],
  "fairytales": [
    "Stardust",
    "The Bloody Chamber",
    "East",
    "Uprooted",
    "The Hazel Wood"
  ],
  "graphicNovels": [
    "Saga",
    "Watchmen",
    "Maus",
    "Persepolis",
    "Sandman"
  ],
  "comics": [
    "Batman: Year One",
    "Spider-Man: Blue",
    "X-Men: Dark Phoenix",
    "V for Vendetta",
    "Ms. Marvel"
  ],
  "comedy": [
    "Good Omens",
    "The Hitchhikers Guide to the Galaxy",
    "The Princess Bride",
    "Bossypants",
    "Whered You Go, Bernadette"
  ],
  "adventure": [
    "The Hobbit",
    "Treasure Island",
    "The Count of Monte Cristo",
    "The Martian",
    "Life of Pi"
  ],
  "magicalRealism": [
    "One Hundred Years of Solitude",
    "Midnight's Children",
    "The House of the Spirits",
    "Like Water for Chocolate",
    "Beloved"
  ],
  "alternateHistory": [
    "The Man in the High Castle",
    "11/22/63",
    "The Yiddish Policemen's Union",
    "Fatherland",
    "The Plot Against America"
  ],
  "paranormal": [
    "The Shining",
    "The Haunting of Hill House",
    "Interview with the Vampire",
    "Mexican Gothic",
    "The Secret History"
  ],
  "fanFiction": [
    "After",
    "Fangirl",
    "The Silver Linings Playbook",
    "Carry On",
    "Months by Izzy McCall"
  ],
  "sliceOfLife": [
    "Norwegian Wood",
    "The Perks of Being a Wallflower",
    "Eleanor Oliphant Is Completely Fine",
    "A Man Called Ove",
    "Normal People"
  ],
  "science": [
    "A Brief History of Time",
    "The Selfish Gene",
    "Astrophysics for People in a Hurry",
    "The Immortal Life of Henrietta Lacks",
    "Sapiens"
  ],
  "technology": [
    "The Innovators",
    "Clean Code",
    "Hooked",
    "Code",
    "The Phoenix Project"
  ],
  "math": [
    "Fermat's Enigma",
    "The Joy of x",
    "In Pursuit of the Unknown",
    "How Not to Be Wrong",
    "The Man Who Knew Infinity"
  ],
  "engineering": [
    "Structures: Or Why Things Don't Fall Down",
    "To Engineer is Human",
    "The Design of Everyday Things",
    "Engineering and the Mind's Eye",
    "Skunk Works"
  ],
  "medical": [
    "Being Mortal",
    "The Emperor of All Maladies",
    "When Breath Becomes Air",
    "The Man Who Mistook His Wife for a Hat",
    "Complications"
  ],
  "ai_ml": [
    "Artificial Intelligence: A Guide for Thinking Humans",
    "Life 3.0",
    "Superintelligence",
    "You Look Like a Thing and I Love You",
    "The Master Algorithm"
  ],
  "law": [
    "The Nine",
    "Just Mercy",
    "The Rule of Law",
    "How to Argue & Win Every Time",
    "Letters to a Young Lawyer"
  ],
  "philosophy": [
    "Meditations",
    "Sophie's World",
    "The Republic",
    "Thus Spoke Zarathustra",
    "Critique of Pure Reason"
  ],
  "economics": [
    "Freakonomics",
    "Capital in the Twenty-First Century",
    "Thinking, Fast and Slow",
    "The Undercover Economist",
    "The Big Short"
  ],
  "history": [
    "Guns, Germs, and Steel",
    "A People's History of the United States",
    "The Silk Roads",
    "Team of Rivals",
    "SPQR: A History of Ancient Rome"
  ],
  "research": [
    "The Craft of Research",
    "How to Write a Thesis",
    "Research Design",
    "Writing Your Journal Article in Twelve Weeks",
    "The Literature Review"
  ],
  "environment": [
    "Silent Spring",
    "The Sixth Extinction",
    "This Changes Everything",
    "The Uninhabitable Earth",
    "Braiding Sweetgrass"
  ],
  "psychology": [
    "Thinking, Fast and Slow",
    "Mans Search for Meaning",
    "The Power of Habit",
    "Influence",
    "Behave"
  ],
  "education": [
    "Mindset",
    "The Element",
    "Pedagogy of the Oppressed",
    "Educated",
    "Teaching as a Subversive Activity"
  ],
  "drama": [
    "Death of a Salesman",
    "A Streetcar Named Desire",
    "The Crucible",
    "Long Day's Journey Into Night",
    "The Glass Menagerie"
  ],
  "comingOfAge": [
    "To Kill a Mockingbird",
    "The Catcher in the Rye",
    "Eleanor & Park",
    "The Outsiders",
    "Looking for Alaska"
  ],
  "memoir": [
    "Educated",
    "Becoming",
    "The Glass Castle",
    "Born a Crime",
    "When Breath Becomes Air"
  ],
  "biography": [
    "Steve Jobs",
    "Alexander Hamilton",
    "The Wright Brothers",
    "Einstein: His Life and Universe",
    "Churchill: A Life"
  ],
  "selfHelp": [
    "Atomic Habits",
    "The Subtle Art of Not Giving a F*ck",
    "How to Win Friends and Influence People",
    "The Power of Now",
    "You Are a Badass"
  ],
  "inspiration": [
    "The Alchemist",
    "Tuesdays with Morrie",
    "Daring Greatly",
    "Big Magic",
    "Awaken the Giant Within"
  ],
  "relationships": [
    "Men Are from Mars, Women Are from Venus",
    "Attached",
    "Hold Me Tight",
    "The 5 Love Languages",
    "Mating in Captivity"
  ],
  "mentalHealth": [
    "Lost Connections",
    "Reasons to Stay Alive",
    "The Body Keeps the Score",
    "Maybe You Should Talk to Someone",
    "First, We Make the Beast Beautiful"
  ],
  "faith": [
    "The Purpose Driven Life",
    "Mere Christianity",
    "The Bhagavad Gita",
    "The Quran",
    "Man's Search for Meaning"
  ],
  "pictureBooks": [
    "The Very Hungry Caterpillar",
    "Goodnight Moon",
    "Where the Wild Things Are",
    "The Snowy Day",
    "Brown Bear, Brown Bear, What Do You See?"
  ],
  "earlyReaders": [
    "Frog and Toad Are Friends",
    "Amelia Bedelia",
    "Elephant and Piggie Series",
    "Little Bear",
    "Henry and Mudge"
  ],
  "youngAdult": [
    "The Hunger Games",
    "Divergent",
    "The Fault in Our Stars",
    "City of Bones",
    "Thirteen Reasons Why"
  ],
  "middleGrade": [
    "Percy Jackson & the Olympians",
    "Wonder",
    "Holes",
    "Charlottes Web",
    "Bridge to Terabithia"
  ],
  "kidsFantasy": [
    "Howl's Moving Castle",
    "The Spiderwick Chronicles",
    "Inkheart",
    "The Chronicles of Narnia",
    "Fablehaven"
  ],
  "activityBooks": [
    "The Everything Kids Puzzle Book",
    "Highlights Hidden Pictures",
    "Brain Games for Kids",
    "My First Big Book of Mazes",
    "Logic Puzzles for Clever Kids"
  ],
  "moralStories": [
    "Panchatantra",
    "Aesops Fables",
    "Jataka Tales",
    "Moral Stories for Children",
    "Stories from Grandma"
  ],
  "photography": [
    "Humans of New York",
    "The Art of Photography",
    "Annie Leibovitz: At Work",
    "Understanding Exposure",
    "On Photography"
  ],
  "art": [
    "Ways of Seeing",
    "The Story of Art",
    "Steal Like an Artist",
    "Art & Fear",
    "The Lives of the Artists"
  ],
  "poetry": [
    "Milk and Honey",
    "The Sun and Her Flowers",
    "Leaves of Grass",
    "The Waste Land",
    "Ariel"
  ],
  "calligraphy": [
    "Modern Calligraphy",
    "Mastering Copperplate Calligraphy",
    "The Calligraphers Bible",
    "Hand Lettering 101",
    "Creative Lettering and Beyond"
  ],
  "music": [
    "This Is Your Brain on Music",
    "How Music Works",
    "Life",
    "Just Kids",
    "The Rest Is Noise"
  ],
  "design": [
    "The Design of Everyday Things",
    "Thinking with Type",
    "Don't Make Me Think",
    "Graphic Design: The New Basics",
    "How to Be a Graphic Designer Without Losing Your Soul"
  ],
  "craft": [
    "The Big-Ass Book of Crafts",
    "Martha Stewart's Encyclopedia of Crafts",
    "Craft-a-Day",
    "The Complete Book of Arts & Crafts",
    "Crafting with Cat Hair"
  ],
  "cookbooks": [
    "Salt, Fat, Acid, Heat",
    "The Joy of Cooking",
    "Plenty",
    "Indian-ish",
    "The Flavor Bible"
  ],
  "sci-fi": [
    "Dune",
    "Project Hail Mary",
    "Ender's Game",
    "The Martian",
    "Neuromancer"
  ],
  "dark-romance": [
    "Corrupt",
    "The Maddest Obsession",
    "Twist Me",
    "Ruthless People",
    "Tears of Tess"
  ],
  "rom-com": [
    "The Love Hypothesis",
    "The Hating Game",
    "Beach Read",
    "People We Meet on Vacation",
    "The Rosie Project",
  ]
}

const genre_description = {
  "mythology" : ['Stories rooted in ancient traditions, gods, and heroic legends.'],
  "fantasy" : ['Imaginative worlds with magic, mythical creatures, and epic quests.'],
  "romance" : ['Heartfelt tales of love, passion, and emotional relationships.'],
  "science" : ['Explorations of scientific discoveries, theories, and real-world facts.'],
  "technology" : ['Focus on innovation, digital trends, and futuristic concepts.'],
  "math" : ['Books that revolve around mathematical concepts, logic, or problem-solving.'],
  "engineering" : ['Stories or content centered on design, construction, and technical ingenuity.'],
  "medical" : ['Books related to medicine, healthcare, and life in the medical field.'],
  "ai" : ['Exploring artificial intelligence, machine reasoning, and smart technologies.'],
  "ml" : ['Focused on machine learning, data training, and predictive modeling.'],
  "law" : ['Legal dramas, courtroom tales, and books about justice and rights.'],
  "philosophy" : ['Deep questions about life, morality, existence, and thought.'],
  "economics" : ['Analysis of markets, money, trade, and societal behavior.'],
  "history" : ['Real events from the past, biographies, wars, and revolutions.'],
  "research" : ['In-depth studies, findings, and academic explorations.'],
  "environment" : ['Nature-focused reads on ecosystems, climate, and sustainability.'],
  "psychology" : ['Mind and behavior studies, mental processes, and emotions.'],
  "education" : ['Books that explore learning methods, systems, and pedagogy.'],
  "tragedy" : ['Emotionally intense tales marked by loss, suffering, or downfall.'],
  "drama" : ["Realistic stories centered on emotional conflict and life challenges."],
  "memoir" : ["Personal life stories written by the person who lived them."],
  "biography" : ["Life stories of famous individuals, told by someone else."],
  "self help" : ["Guides for improving personal habits, mindset, and lifestyle."],
  "inspiration" : ["Motivational reads filled with hope, success, and courage."],
  "relationships" : ["Books focused on bonds between people—romantic, familial, or platonic."],
  "mental health" : ["Exploring mental well-being, disorders, and healing journeys."],
  "faith" : ["Books that center around spirituality, religion, and belief systems."],
  "picture books" : ["Illustrated stories designed for young children."],
  "early readers" : ["Beginner books with simple text and engaging visuals."],
  "young adult" : ["Teen-centered stories often dealing with identity, love, and coming of age."],
  "middle grade" : ["Adventure and emotional growth for pre-teen readers."],
  "adventure" : ["Action-filled journeys, exploration, and thrilling experiences."],
  "fairy tales" : ["Magical stories with morals, often starring heroes and talking animals."],
  "fables" : ["Short tales with lessons, usually involving animals as characters."],
  "graphic novels" : ["Stories told through illustrated panels and dialogue."],
  "comics" : ["Serialized visual stories, often featuring superheroes or satire."],
  "poetry" : ["Artistic expression through rhythm, rhyme, and metaphor."],
  "music" : ["Books exploring sound, artists, instruments, or musical journeys."],
  "art" : ["Creative works and stories about visual expression and aesthetics."],
  "photography" : ["Visual storytelling through captured images."],
  "calligraphy" : ["Artistic writing and the beauty of stylized lettering."],
  "cooking" : ["Culinary books with recipes, flavors, and kitchen tips."],
  "diy" : ["Do-it-yourself guides on crafts, home fixes, or creative projects."],
  "design" : ["Focused on aesthetics, usability, and the creative process."],
  "style" : ["Fashion, trends, and personal expression through clothing."],
  "mystery" : ["Suspenseful tales involving puzzles, secrets, or whodunits."],
  "dark-romance" : ["Intense love stories with edgy, taboo, or dangerous themes."],
  "sci fi" : ["Futuristic or extraterrestrial tales involving science and tech."],
  "rom com" : ["Light-hearted romantic stories filled with humor and mishaps."],
  "thriller" : ["Fast-paced, edge-of-your-seat plots with high stakes and twists."],
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToBot = (message) => {
    const botMessage = this.createChatBotMessage(message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  handleGreeting = () => {
    this.addMessageToBot("I'm doing great, thanks for asking! 😊 How can I help you today?");
  };

  handleHello = () => {
    this.addMessageToBot("Hi there! 👋 What can I assist you with today?");
  };

  handleWhoAreYou = () => {
    this.addMessageToBot("I'm your friendly Virlib Assistant 🤖 here to help you with book recommendations, summaries, and more!");
  };

  handleThanks = () => {
    this.addMessageToBot("You're welcome! 📚 Let me know if you need anything else.");
  };

  handleGoodbye = () => {
    this.addMessageToBot("Goodbye! 👋 Have a great reading journey ahead.");
  };

  handleNavigation = (section) => {
    this.addMessageToBot(`📍 Taking you to the "${section}" section...`);
  };

  handleUnknown = () => {
    this.addMessageToBot("I'm not sure how to help with that yet. 🤔 Try asking about a genre, book, or recommendation.");
  };

  askGenreForRecommendation = () => {
    this.addMessageToBot("Sure! 😊 Which genre are you interested in?");
  };

  handleGenreDescription = (genre) => {
    const genreKey = genre.toLowerCase();
    const description = genre_description[genreKey];

    if (description) {
      const msg = `📚 That's a fascinating genre!\n\n${description}`;
      this.addMessageToBot(msg);
    } else {
      this.addMessageToBot(`😕 Sorry, I couldn't find a description for "${genre}". Try another genre!`);
    }
  };

  handleBookRecommendation = (genre) => {
    const genreKey = genre.toLowerCase();
    const books = data[genreKey];

    if (books && books.length > 0) {
      const msg = `📚 Here are some great ${genre} books:\n\n${books.map(book => `• ${book}`).join('\n')}`;
      this.addMessageToBot(msg);
    } else {
      this.addMessageToBot(`😕 Sorry, I couldn't find recommendations for "${genre}". Try another genre!`);
    }
  };

  handleBookGenreFinder = async (bookTitle) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(bookTitle)}`
      );
      const data = await response.json();
      const book = data.items?.[0]?.volumeInfo;

      if (!book) {
        this.addMessageToBot(`❌ Sorry, I couldn't find the book *${bookTitle}*.`);
        return;
      }

      const categoryList = book.categories || [];
      const knownSubgenres = Object.keys(genre_description);

      const matched = knownSubgenres.find((genre) =>
        categoryList.some((cat) => cat.toLowerCase().includes(genre.toLowerCase()))
      );

      const genreMatch = matched || "an uncategorized genre";
      const title = book.title || bookTitle;

      const message = `📖 The book *${title}* belongs to the **${genreMatch}** section of our library.`;
      this.addMessageToBot(message);
    } catch (error) {
      console.error("Genre Finder Error:", error);
      this.addMessageToBot("⚠️ Something went wrong while fetching book info.");
    }
  };

  handleBookSummary = async (bookName) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(bookName)}`
      );

      if (!response.ok) {
        this.addMessageToBot("❌ Google Books returned an error.");
        return;
      }

      const data = await response.json();
      const book = data.items?.[0];

      if (book?.volumeInfo?.description) {
        let summary = book.volumeInfo.description;
        let cleanedSummary = this.cleanSummary(summary);

        const nonEnglishLikely = /[áéíóúãõçñàèìòùäëïöüâêîôû]/i.test(cleanedSummary);
        if (nonEnglishLikely) {
          const translated = await this.translateToEnglish(cleanedSummary);
          cleanedSummary = translated || cleanedSummary;
        }

        const sentences = cleanedSummary.split('.').filter(Boolean);
        const formattedSummary = sentences.slice(0, 6).map(s => s.trim()).join('.\n\n') + '.';

        const finalMessage = `📖 Here's the summary for *${bookName}*:\n${formattedSummary}`;
        this.addMessageToBot(finalMessage);
      } else {
        const altSummary = await this.handleAskOpenAI(`Give a detailed book summary of "${bookName}"`);
        this.addMessageToBot(`📖 Here's an AI-generated summary for *${bookName}*:\n\n${altSummary}`);
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      this.addMessageToBot("⚠️ Oops! Something went wrong while fetching the book summary.");
    }
  };

  cleanSummary = (text) => {
    const stopPhrases = [
      "don't miss", "available now", "five star", "1 million readers",
      "kindle bestseller", "winner of", "pageturner", "film", "reviews", "twist"
    ];
    const sentences = text.split('.').map(s => s.trim());
    const summaryLines = [];

    for (let sentence of sentences) {
      if (
        sentence.length > 10 &&
        !stopPhrases.some(phrase => sentence.toLowerCase().includes(phrase))
      ) {
        summaryLines.push(sentence);
      }
    }

    return summaryLines.slice(0, 6).join('. ') + '.';
  };

  handleAskOpenAI = async (userPrompt) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt })
      });

      const data = await response.json();
      if (data.response) {
        this.addMessageToBot(data.response.trim());
      } else {
        this.addMessageToBot("❌ Sorry, I couldn't fetch a response.");
      }
    } catch (error) {
      console.error(error);
      this.addMessageToBot("⚠️ Something went wrong talking to OpenAI.");
    }
  };

  translateToEnglish = async (text) => {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Translate the following text into clear English:\n\n${text}`
        })
      });

      const data = await response.json();
      return data.response || null;
    } catch (error) {
      console.error("Translation failed:", error);
      return null;
    }
  };
}

export default ActionProvider;
