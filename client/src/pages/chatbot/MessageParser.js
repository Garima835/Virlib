class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.knownGenres = [
      "mythology", "fantasy", "romance", "science", "technology", "math", "engineering",
      "medical", "ai", "ml", "law", "philosophy", "economics", "history", "research",
      "environment", "psychology", "education", "tragedy", "drama", "memoir", "biography",
      "self-help", "inspiration", "relationships", "mental health", "faith",
      "picture books", "early readers", "young adult", "middle grade", "adventure",
      "fairy tales", "fables", "graphic novels", "comics", "poetry", "music",
      "art", "photography", "calligraphy", "cooking", "diy", "design", "style", 
      "mystery", "dark-romance", "sci-fi", "rom-com", "thriller"
    ];
  }

  parse(message) {
    const lower = message.toLowerCase();
    const matchedGenre = this.knownGenres.find(genre => lower.includes(genre));

    // ----- Book Genre Location -----
    if (
      lower.includes("where can i find the book") ||
      lower.includes("to which genre does") ||
      lower.includes("which genre does") ||
      lower.includes("genre of") ||
      lower.includes("book belongs to")
    ) {
      const bookMatch = message.match(/(?:book|find the book|genre does)(.*)/i);
      const bookTitle = bookMatch?.[1]?.trim().replace(/\?$/, "");

      if (bookTitle) {
        this.actionProvider.handleBookGenreFinder(bookTitle);
      } else {
        this.actionProvider.addMessageToBot("📚 Please tell me the book title you'd like to locate.");
      }
      return;
    }

    // ----- Genre Description -----
    if (
      (lower.includes("describe") || lower.includes("tell me about") || lower.includes("genre")) &&
      matchedGenre
    ) {
      this.actionProvider.handleGenreDescription(matchedGenre);
      return;
    }

    // ----- Book Summary -----
    if (
      (lower.includes("summary") || lower.includes("about book") || lower.includes("tell me about") || lower.includes("describe")) &&
      !this.knownGenres.includes(lower.trim()) // avoid genre-only messages
    ) {
      const bookMatch = lower.match(/(?:summary of|about book|tell me about|describe) (.+)/i);
      if (bookMatch && bookMatch[1]) {
        const bookName = bookMatch[1].trim().replace(/\?$/, "");
        this.actionProvider.handleBookSummary(bookName);
      } else {
        this.actionProvider.addMessageToBot("📘 Please tell me which book you'd like a summary for.");
      }
      return;
    }

    // ----- Book Recommendation -----
    if (lower.includes("recommend") || lower.includes("suggest")) {
      if (matchedGenre) {
        this.actionProvider.handleBookRecommendation(matchedGenre);
      } else {
        this.actionProvider.askGenreForRecommendation();
      }
      return;
    }

    // ----- Casual Small Talk -----
    if (lower.includes("how are you")) {
      this.actionProvider.handleGreeting();
      return;
    }

    if (lower.includes("who are you")) {
      this.actionProvider.handleWhoAreYou();
      return;
    }

    if (lower.includes("hello") || lower.includes("hi")) {
      this.actionProvider.handleHello();
      return;
    }

    if (lower.includes("thank you") || lower.includes("thanks")) {
      this.actionProvider.handleThanks();
      return;
    }

    if (lower.includes("bye")) {
      this.actionProvider.handleGoodbye();
      return;
    }

    // ----- Direct Genre Typing -----
    if (matchedGenre && lower.trim() === matchedGenre) {
      this.actionProvider.handleBookRecommendation(matchedGenre);
      return;
    }

    // ----- Navigation Requests -----
    if (lower.includes("take me to")) {
      const sectionMatch = lower.match(/take me to (\w+)/);
      if (sectionMatch) {
        this.actionProvider.handleNavigation(sectionMatch[1]);
      } else {
        this.actionProvider.addMessageToBot("🔍 Please specify where you want to go.");
      }
      return;
    }

    // ----- Fallback -----
    this.actionProvider.handleUnknown();
  }
}

export default MessageParser;
