// QUIZ DATA STRUCTURE

// We Define the quiz questions organized by 10 levels.
// Each level is an array of question objects.
const quizLevels = [
    // Level 1: General Knowledge
    [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars",
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific",
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            answer: "7",
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Banana", "Avocado", "Peas", "Cucumber"],
            answer: "Avocado",
        }
    ],
    // Level 2: Mathematics
    [
        {
            question: "What is 15% of 200?",
            options: ["30", "15", "45", "20"],
            answer: "30",
        },
        {
            question: "If x + 7 = 15, what is x?",
            options: ["7", "8", "9", "10"],
            answer: "8",
        },
        {
            question: "What is 3/5 as a decimal?",
            options: ["0.6", "0.35", "0.06", "0.3"],
            answer: "0.6",
        },
        {
            question: "Solve: 2³ × 4 ÷ 2",
            options: ["8", "16", "32", "4"],
            answer: "16",
        },
        {
            question: "What is the next number: 2, 4, 8, 16, ...?",
            options: ["24", "32", "28", "20"],
            answer: "32",
        }
    ],
    // Level 3: Government & History
    [
        {
            question: "Who was the first US President?",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            answer: "George Washington",
        },
        {
            question: "In which year did WWII end?",
            options: ["1943", "1945", "1947", "1950"],
            answer: "1945",
        },
        {
            question: "Which civilization built the pyramids?",
            options: ["Roman", "Greek", "Egyptian", "Mayan"],
            answer: "Egyptian",
        },
        {
            question: "What is the supreme US law?",
            options: ["Declaration of Independence", "Bill of Rights", "Constitution", "Magna Carta"],
            answer: "Constitution",
        },
        {
            question: "Who wrote 'I Have a Dream'?",
            options: ["Malcolm X", "Martin Luther King Jr.", "Barack Obama", "Rosa Parks"],
            answer: "Martin Luther King Jr.",
        }
    ],
    // Level 4: Science
    [
        {
            question: "What gas do plants absorb?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide",
        },
        {
            question: "Chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            answer: "H2O",
        },
        {
            question: "Largest human organ?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            answer: "Skin",
        },
        {
            question: "Planet with most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn",
        },
        {
            question: "Process for plant food?",
            options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
            answer: "Photosynthesis",
        }
    ],
    // Level 5: Geography
    [
        {
            question: "Home to Great Barrier Reef?",
            options: ["Brazil", "Australia", "Mexico", "Indonesia"],
            answer: "Australia",
        },
        {
            question: "Mount Everest location?",
            options: ["Andes", "Alps", "Rockies", "Himalayas"],
            answer: "Himalayas",
        },
        {
            question: "Capital of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            answer: "Ottawa",
        },
        {
            question: "Largest desert?",
            options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
            answer: "Sahara",
        },
        {
            question: "River through London?",
            options: ["Thames", "Seine", "Danube", "Rhine"],
            answer: "Thames",
        }
    ],
    // Level 6: Literature
    [
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            answer: "William Shakespeare",
        },
        {
            question: "Bilbo Baggins is a?",
            options: ["Dwarf", "Elf", "Hobbit", "Wizard"],
            answer: "Hobbit",
        },
        {
            question: "Creator of Sherlock Holmes?",
            options: ["Agatha Christie", "Arthur Conan Doyle", "Charles Dickens", "J.K. Rowling"],
            answer: "Arthur Conan Doyle",
        },
        {
            question: "First Harry Potter book?",
            options: ["Chamber of Secrets", "Goblet of Fire", "Sorcerer's Stone", "Prisoner of Azkaban"],
            answer: "Sorcerer's Stone",
        },
        {
            question: "Author of 'To Kill a Mockingbird'?",
            options: ["J.D. Salinger", "Harper Lee", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee",
        }
    ],
    // Level 7: Sports
    [
        {
            question: "Where can you score a home run?",
            options: ["Basketball", "Baseball", "Soccer", "Tennis"],
            answer: "Baseball",
        },
        {
            question: "Basketball players per team?",
            options: ["5", "6", "7", "11"],
            answer: "5",
        },
        {
            question: "2022 FIFA World Cup winner?",
            options: ["France", "Brazil", "Argentina", "Germany"],
            answer: "Argentina",
        },
        {
            question: "Maximum snooker break?",
            options: ["100", "147", "155", "180"],
            answer: "147",
        },
        {
            question: "Zero score in tennis?",
            options: ["Nil", "Zero", "Love", "Null"],
            answer: "Love",
        }
    ],
    // Level 8: Entertainment
    [
        {
            question: "Director of 'Inception'?",
            options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
            answer: "Christopher Nolan",
        },
        {
            question: "Most Grammy awards?",
            options: ["Beyoncé", "Taylor Swift", "Michael Jackson", "Georg Solti"],
            answer: "Beyoncé",
        },
        {
            question: "First animated feature?",
            options: ["Cinderella", "Snow White", "Bambi", "Pinocchio"],
            answer: "Snow White",
        },
        {
            question: "Actor for Iron Man?",
            options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            answer: "Robert Downey Jr.",
        },
        {
            question: "Coffee shop in Friends?",
            options: ["Central Perk", "Coffee Bean", "Central Coffee", "Perk Central"],
            answer: "Central Perk",
        }
    ],
    // Level 9: Technology
    [
        {
            question: "iPhone creator?",
            options: ["Samsung", "Microsoft", "Apple", "Google"],
            answer: "Apple",
        },
        {
            question: "CPU stands for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"],
            answer: "Central Processing Unit",
        },
        {
            question: "NOT a programming language?",
            options: ["Python", "JavaScript", "HTML", "Java"],
            answer: "HTML",
        },
        {
            question: "WWW invented year?",
            options: ["1985", "1989", "1995", "2000"],
            answer: "1989",
        },
        {
            question: "URL stands for?",
            options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Resource Link", "Universal Reference Locator"],
            answer: "Uniform Resource Locator",
        }
    ],
    // Level 10: Mixed Challenge
    [
        {
            question: "Smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2",
        },
        {
            question: "Atomic number 1 element?",
            options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
            answer: "Hydrogen",
        },
        {
            question: "Painter of 'Starry Night'?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dali", "Claude Monet"],
            answer: "Vincent van Gogh",
        },
        {
            question: "Currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Rupee"],
            answer: "Yen",
        },
        {
            question: "Bones in human body?",
            options: ["206", "250", "180", "300"],
            answer: "206",
        }
    ]
     // Level +: Bonus Question
 [
        {
            question: "Who is the GOAT of football?",
            options: ["Edson Arantes do Nascimento", "Diego Maradona", "Lionel Andre Messi", "Cristiano Ronaldo"],
            answer: "Lionel Andre Messi",
        },
        {
            question: "Who is the GOAT of sports?",
            options: ["Michael Jordan", "Muhammad Ali", "Lionel Andre Messi", "Michael Phillips"],
            answer: "Lionel Andre Messi",
        }
    ]
    // Level 11: Art & Artists
[
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which art movement is Salvador Dalí associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
        answer: "Surrealism"
    },
    {
        question: "What is the primary medium of Andy Warhol's famous Marilyn Monroe series?",
        options: ["Oil painting", "Watercolor", "Silkscreen printing", "Charcoal"],
        answer: "Silkscreen printing"
    },
    {
        question: "Which museum houses Van Gogh's 'Starry Night'?",
        options: ["The Louvre", "Tate Modern", "Museum of Modern Art", "Rijksmuseum"],
        answer: "Museum of Modern Art"
    },
    {
        question: "What ancient structure is featured in Claude Monet's 'Rouen Cathedral' series?",
        options: ["Parthenon", "Notre Dame", "Rouen Cathedral", "St. Peter's Basilica"],
        answer: "Rouen Cathedral"
    }
],
// Level 12: World Cuisine
[
    {
        question: "Which country is the origin of sushi?",
        options: ["China", "Thailand", "Korea", "Japan"],
        answer: "Japan"
    },
    {
        question: "What is the main ingredient in traditional hummus?",
        options: ["Lentils", "Chickpeas", "Eggplant", "Yogurt"],
        answer: "Chickpeas"
    },
    {
        question: "Paella is a traditional dish from which country?",
        options: ["Italy", "Mexico", "Spain", "Portugal"],
        answer: "Spain"
    },
    {
        question: "What type of food is 'bibimbap'?",
        options: ["Noodle soup", "Rice bowl", "Stuffed dumplings", "Barbecue meat"],
        answer: "Rice bowl"
    },
    {
        question: "Which country is famous for its croissants?",
        options: ["Germany", "Austria", "Belgium", "France"],
        answer: "France"
    }
],
// Level 13: Environmental Science
[
    {
        question: "What is the primary greenhouse gas emitted through human activities?",
        options: ["Methane", "Nitrous oxide", "Carbon dioxide", "Chlorofluorocarbons"],
        answer: "Carbon dioxide"
    },
    {
        question: "Which ecosystem has the highest biodiversity?",
        options: ["Coral reefs", "Tropical rainforests", "Grasslands", "Tundra"],
        answer: "Tropical rainforests"
    },
    {
        question: "What process describes the gradual warming of Earth's climate?",
        options: ["Ozone depletion", "Desertification", "Global warming", "Acidification"],
        answer: "Global warming"
    },
    {
        question: "Which renewable energy source uses heat from within the Earth?",
        options: ["Solar", "Hydroelectric", "Geothermal", "Biomass"],
        answer: "Geothermal"
    },
    {
        question: "What percentage of Earth's surface is covered by water?",
        options: ["50%", "61%", "71%", "81%"],
        answer: "71%"
    }
],
// Level 14: Music
[
    {
        question: "Who composed 'The Four Seasons'?",
        options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
        answer: "Vivaldi"
    },
    {
        question: "Which instrument has pedals, strings, and a soundboard?",
        options: ["Violin", "Harp", "Piano", "Cello"],
        answer: "Piano"
    },
    {
        question: "What genre of music originated in Jamaica in the late 1960s?",
        options: ["Salsa", "Reggae", "Jazz", "Blues"],
        answer: "Reggae"
    },
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"],
        answer: "Michael Jackson"
    },
    {
        question: "Which band included members John Lennon and Paul McCartney?",
        options: ["The Rolling Stones", "The Who", "The Beatles", "Queen"],
        answer: "The Beatles"
    }
],
// Level 15: Mythology
[
    {
        question: "Who is the king of the gods in Greek mythology?",
        options: ["Poseidon", "Hades", "Apollo", "Zeus"],
        answer: "Zeus"
    },
    {
        question: "What creature has the head of a human and body of a lion?",
        options: ["Minotaur", "Sphinx", "Griffin", "Centaur"],
        answer: "Sphinx"
    },
    {
        question: "Who is the Norse god of thunder?",
        options: ["Odin", "Loki", "Thor", "Balder"],
        answer: "Thor"
    },
    {
        question: "In Egyptian mythology, who is the god of the afterlife?",
        options: ["Ra", "Anubis", "Horus", "Osiris"],
        answer: "Osiris"
    },
    {
        question: "What legendary sword was pulled from a stone by King Arthur?",
        options: ["Excalibur", "Durandal", "Joyeuse", "Gram"],
        answer: "Excalibur"
    }
]
// Level 16: Nigerian History
[
    {
        question: "In what year did Nigeria gain independence from Britain?",
        options: ["1957", "1960", "1963", "1970"],
        answer: "1960"
    },
    {
        question: "Who was Nigeria's first President?",
        options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Tafawa Balewa", "Yakubu Gowon"],
        answer: "Nnamdi Azikiwe"
    },
    {
        question: "Which ancient Nigerian kingdom was famous for its bronze artworks?",
        options: ["Oyo Empire", "Benin Kingdom", "Kanem-Bornu", "Sokoto Caliphate"],
        answer: "Benin Kingdom"
    },
    {
        question: "What was the capital of Nigeria before it was moved to Abuja?",
        options: ["Ibadan", "Kano", "Port Harcourt", "Lagos"],
        answer: "Lagos"
    },
    {
        question: "Which Nigerian won the Nobel Prize in Literature?",
        options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Adichie", "Ben Okri"],
        answer: "Wole Soyinka"
    }
],
// Level 17: Soccer History
[
    {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Italy", "Brazil", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "Who is the all-time top scorer in the UEFA Champions League?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Raúl"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which African country first reached the World Cup quarterfinals?",
        options: ["Nigeria", "Cameroon", "Senegal", "Ghana"],
        answer: "Cameroon"
    },
    {
        question: "Who won the first African Cup of Nations tournament?",
        options: ["Egypt", "Ghana", "Ethiopia", "Sudan"],
        answer: "Egypt"
    },
    {
        question: "Which Nigerian player won the African Footballer of the Year award three times?",
        options: ["Jay-Jay Okocha", "Nwankwo Kanu", "Rashidi Yekini", "Sunday Oliseh"],
        answer: "Jay-Jay Okocha"
    }
],
// Level 18: Nigerian Cuisine
[
    {
        question: "What is the main ingredient in 'Eba'?",
        options: ["Yam", "Cassava", "Plantain", "Corn"],
        answer: "Cassava"
    },
    {
        question: "Which soup is traditionally served with 'Amala' in Yoruba cuisine?",
        options: ["Egusi", "Ogbono", "Ewedu", "Banga"],
        answer: "Ewedu"
    },
    {
        question: "What is 'Suya'?",
        options: ["Spiced peanut snack", "Grilled meat skewers", "Bean pudding", "Fried plantains"],
        answer: "Grilled meat skewers"
    },
    {
        question: "Which of these is a traditional Igbo dish made from pounded yam?",
        options: ["Fufu", "Iyan", "Semo", "Akpu"],
        answer: "Akpu"
    },
    {
        question: "What is the primary ingredient in 'Moi Moi'?",
        options: ["Rice", "Beans", "Corn", "Wheat"],
        answer: "Beans"
    }
],
// Level 19: Plant Botany (Part 1)
[
    {
        question: "What is the botanical name for maize?",
        options: ["Oryza sativa", "Zea mays", "Triticum aestivum", "Hordeum vulgare"],
        answer: "Zea mays"
    },
    {
        question: "What is the scientific name for the African oil palm?",
        options: ["Elaeis guineensis", "Cocos nucifera", "Phoenix dactylifera", "Borassus aethiopum"],
        answer: "Elaeis guineensis"
    },
    {
        question: "Which of these is the botanical name for rice?",
        options: ["Avena sativa", "Secale cereale", "Oryza sativa", "Sorghum bicolor"],
        answer: "Oryza sativa"
    },
    {
        question: "What is the scientific name for the baobab tree?",
        options: ["Adansonia digitata", "Khaya senegalensis", "Parkia biglobosa", "Vitellaria paradoxa"],
        answer: "Adansonia digitata"
    },
    {
        question: "Which plant is known scientifically as Manihot esculenta?",
        options: ["Sweet Potato", "Yam", "Cassava", "Cocoyam"],
        answer: "Cassava"
    }
],
// Level 20: Plant Botany (Part 2)
[
    {
        question: "What is the botanical name for the neem tree?",
        options: ["Azadirachta indica", "Moringa oleifera", "Aloe vera", "Ocimum gratissimum"],
        answer: "Azadirachta indica"
    },
    {
        question: "Which plant is known as Ocimum basilicum?",
        options: ["Spinach", "Basil", "Mint", "Parsley"],
        answer: "Basil"
    },
    {
        question: "What is the scientific name for the African locust bean?",
        options: ["Tamarindus indica", "Parkia biglobosa", "Vitellaria paradoxa", "Detarium microcarpum"],
        answer: "Parkia biglobosa"
    },
    {
        question: "Which of these is the botanical name for the shea tree?",
        options: ["Allanblackia floribunda", "Irvingia gabonensis", "Vitellaria paradoxa", "Cola nitida"],
        answer: "Vitellaria paradoxa"
    },
    {
        question: "What is the botanical name for the plant commonly known as 'bitter leaf'?",
        options: ["Vernonia amygdalina", "Gongronema latifolium", "Ocimum gratissimum", "Moringa oleifera"],
        answer: "Vernonia amygdalina"
    }
],
// Level 21: African Geography
[
    {
        question: "Which African country is the most populous?",
        options: ["South Africa", "Egypt", "Nigeria", "Ethiopia"],
        answer: "Nigeria"
    },
    {
        question: "What is the largest desert in Africa?",
        options: ["Kalahari", "Namib", "Sahara", "Danakil"],
        answer: "Sahara"
    },
    {
        question: "Which river is the longest in Africa?",
        options: ["Congo", "Niger", "Zambezi", "Nile"],
        answer: "Nile"
    },
    {
        question: "Which African country was never colonized?",
        options: ["Ethiopia", "Liberia", "Ghana", "Kenya"],
        answer: "Ethiopia"
    },
    {
        question: "What is the capital city of Senegal?",
        options: ["Bamako", "Dakar", "Conakry", "Abidjan"],
        answer: "Dakar"
    }
]
// Level 22: Country Flags
[
    {
        question: "🇳🇬 Which country's flag is this?",
        options: ["Ghana", "Nigeria", "Ethiopia", "Cameroon"],
        answer: "Nigeria"
    },
    {
        question: "🇨🇳 Which country's flag is this?",
        options: ["Japan", "South Korea", "China", "Vietnam"],
        answer: "China"
    },
    {
        question: "🇧🇷 Which country's flag is this?",
        options: ["Argentina", "Brazil", "Colombia", "Peru"],
        answer: "Brazil"
    },
    {
        question: "🇮🇳 Which country's flag is this?",
        options: ["Pakistan", "Bangladesh", "India", "Sri Lanka"],
        answer: "India"
    },
    {
        question: "🇿🇦 Which country's flag is this?",
        options: ["Kenya", "South Africa", "Zimbabwe", "Botswana"],
        answer: "South Africa"
    }
],
// Level 23: Advanced Mathematics
[
    {
        question: "Solve for x: 3ˣ + 3ˣ⁺¹ = 36",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "What is the derivative of ln(x² + 1)?",
        options: ["1/(x² + 1)", "2x/(x² + 1)", "2x", "x/(x² + 1)"],
        answer: "2x/(x² + 1)"
    },
    {
        question: "If a circle has equation x² + y² - 6x + 4y - 12 = 0, what is its radius?",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "What is ∫(2x cos(x²)) dx?",
        options: ["sin(x²) + C", "cos(x²) + C", "x sin(x²) + C", "2sin(x²) + C"],
        answer: "sin(x²) + C"
    },
    {
        question: "What is the probability of getting at least one head in 3 coin tosses?",
        options: ["1/8", "3/8", "7/8", "5/8"],
        answer: "7/8"
    }
],
// Level 24: History of Scientists
[
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        answer: "Alexander Fleming"
    },
    {
        question: "Who formulated the theory of relativity?",
        options: ["Niels Bohr", "Albert Einstein", "Isaac Newton", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    {
        question: "Who discovered radium and polonium?",
        options: ["Rosalind Franklin", "Maria Goeppert-Mayer", "Marie Curie", "Lise Meitner"],
        answer: "Marie Curie"
    },
    {
        question: "Who is known as the father of modern chemistry?",
        options: ["Antoine Lavoisier", "Dmitri Mendeleev", "John Dalton", "Robert Boyle"],
        answer: "Antoine Lavoisier"
    },
    {
        question: "Who discovered the double helix structure of DNA?",
        options: ["James Watson & Francis Crick", "Rosalind Franklin", "Gregor Mendel", "Barbara McClintock"],
        answer: "James Watson & Francis Crick"
    }
],
// Level 25: Inventors History
[
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Joseph Swan"],
        answer: "Thomas Edison"
    },
    {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "Who invented the printing press?",
        options: ["Benjamin Franklin", "Johannes Gutenberg", "Leonardo da Vinci", "James Watt"],
        answer: "Johannes Gutenberg"
    },
    {
        question: "Who invented the first practical airplane?",
        options: ["Wright Brothers", "Henry Ford", "Leonardo da Vinci", "Amelia Earhart"],
        answer: "Wright Brothers"
    }
],
// Level 26: Guinness World Records
[
    {
        question: "Who holds the record for most Olympic gold medals?",
        options: ["Usain Bolt", "Larisa Latynina", "Michael Phelps", "Carl Lewis"],
        answer: "Michael Phelps"
    },
    {
        question: "What is the best-selling book series of all time?",
        options: ["Harry Potter", "The Lord of the Rings", "Goosebumps", "Percy Jackson"],
        answer: "Harry Potter"
    },
    {
        question: "Which movie has the highest box office earnings?",
        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
        answer: "Avatar"
    },
    {
        question: "Who is the youngest Nobel Prize laureate?",
        options: ["Malala Yousafzai", "Lawrence Bragg", "Werner Heisenberg", "Tsung-Dao Lee"],
        answer: "Malala Yousafzai"
    },
    {
        question: "What is the tallest building in the world?",
        options: ["Shanghai Tower", "Burj Khalifa", "Merdeka 118", "Petronas Towers"],
        answer: "Burj Khalifa"
    }
],
// Level 27: Basketball History
[
    {
        question: "Who has the most career points in NBA history?",
        options: ["Kareem Abdul-Jabbar", "LeBron James", "Michael Jordan", "Kobe Bryant"],
        answer: "LeBron James"
    },
    {
        question: "Which team won the first NBA championship?",
        options: ["Boston Celtics", "Minneapolis Lakers", "Philadelphia Warriors", "New York Knicks"],
        answer: "Philadelphia Warriors"
    },
    {
        question: "Who is known as 'The Greek Freak'?",
        options: ["Nikola Jokić", "Giannis Antetokounmpo", "Luka Dončić", "Dirk Nowitzki"],
        answer: "Giannis Antetokounmpo"
    },
    {
        question: "How many NBA championships did Michael Jordan win?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "Which player has the most career triple-doubles?",
        options: ["Magic Johnson", "Russell Westbrook", "Jason Kidd", "LeBron James"],
        answer: "Russell Westbrook"
    }
],
// Level 28: World Landmarks
[
    {
        question: "In which city would you find the Taj Mahal?",
        options: ["Delhi", "Agra", "Mumbai", "Jaipur"],
        answer: "Agra"
    },
    {
        question: "Which ancient wonder is located in Giza, Egypt?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid", "Lighthouse of Alexandria"],
        answer: "Great Pyramid"
    },
    {
        question: "Where is the Christ the Redeemer statue located?",
        options: ["Buenos Aires", "Rio de Janeiro", "Sao Paulo", "Lima"],
        answer: "Rio de Janeiro"
    },
    {
        question: "In which country would you find the ancient city of Petra?",
        options: ["Egypt", "Jordan", "Israel", "Turkey"],
        answer: "Jordan"
    },
    {
        question: "Where is the Acropolis located?",
        options: ["Rome", "Istanbul", "Athens", "Cairo"],
        answer: "Athens"
    }
],
// Level 29: Space Exploration
[
    {
        question: "Who was the first human in space?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
        answer: "Yuri Gagarin"
    },
    {
        question: "Which was the first artificial Earth satellite?",
        options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Telstar 1"],
        answer: "Sputnik 1"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Sombrero", "Milky Way", "Pinwheel"],
        answer: "Milky Way"
    },
    {
        question: "Which spacecraft has traveled farthest from Earth?",
        options: ["Voyager 1", "Pioneer 10", "New Horizons", "Voyager 2"],
        answer: "Voyager 1"
    }
]

    // Level 30: Sports Legends (Bonus Round)
    [
        {
            question: "Who holds the record for most career assists in football history?",
            options: ["Lionel Messi", "Thomas Müller", "Cristiano Ronaldo", "Luis Suárez"],
            answer: "Lionel Messi",
            fact: "Messi has over 350 career assists - more than any player in football history"
        },
        {
            question: "Which athlete has won the most Olympic gold medals?",
            options: ["Usain Bolt", "Carl Lewis", "Larisa Latynina", "Michael Phelps"],
            answer: "Michael Phelps",
            fact: "Phelps won 23 Olympic gold medals and 28 total medals - both all-time records"
        },
        {
            question: "Who has won the most Grand Slam singles titles in tennis history?",
            options: ["Novak Djokovic", "Rafael Nadal", "Margaret Court", "Serena Williams"],
            answer: "Novak Djokovic",
            fact: "Djokovic holds the record with 24 Grand Slam singles titles"
        },
        {
            question: "Who is the only footballer to win 8 Ballon d'Or awards?",
            options: ["Cristiano Ronaldo", "Johan Cruyff", "Michel Platini", "Lionel Messi"],
            answer: "Lionel Messi",
            fact: "Messi has won a record 8 Ballon d'Or awards (2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023)"
        },
        {
            question: "Who is widely considered the greatest team sports athlete of all time?",
            options: ["Michael Jordan", "Pelé", "Tom Brady", "Lionel Messi"],
            answer: "Lionel Messi",
            fact: "Messi is the most decorated footballer in history with 44 trophies and the only player to win Golden Ball at two World Cups"
        }
    ]
    // Level 31: African History (Challenging Periods)
[
    {
        question: "Which European country controlled the Congo Free State during its brutal rubber exploitation period?",
        options: ["France", "Germany", "Belgium", "Portugal"],
        answer: "Belgium"
    },
    {
        question: "What was the name of the apartheid-era prison where Nelson Mandela was held for 18 years?",
        options: ["Alcatraz", "Robben Island", "Pollsmoor", "Bastille"],
        answer: "Robben Island"
    },
    {
        question: "Which African kingdom resisted European colonization for over 70 years in the 'Scramble for Africa'?",
        options: ["Ashanti", "Zulu", "Ethiopia", "Dahomey"],
        answer: "Ethiopia"
    },
    {
        question: "What was the transatlantic slave trade's triangular route pattern?",
        options: ["Europe-Africa-Americas", "Africa-Asia-Europe", "Americas-Europe-Asia", "Africa-Europe-Asia"],
        answer: "Europe-Africa-Americas"
    },
    {
        question: "Which leader organized the 1945 Fifth Pan-African Congress that accelerated decolonization?",
        options: ["Kwame Nkrumah", "Jomo Kenyatta", "Julius Nyerere", "George Padmore"],
        answer: "George Padmore"
    }
],

// Level 32: European Cuisines
[
    {
        question: "What is the main ingredient in Spanish paella?",
        options: ["Pasta", "Potatoes", "Rice", "Couscous"],
        answer: "Rice"
    },
    {
        question: "Which country is famous for moussaka?",
        options: ["Italy", "Turkey", "Greece", "Lebanon"],
        answer: "Greece"
    },
    {
        question: "What is 'Wiener Schnitzel' traditionally made from in Austria?",
        options: ["Pork", "Chicken", "Veal", "Turkey"],
        answer: "Veal"
    },
    {
        question: "Which French dish features snails cooked with garlic butter?",
        options: ["Bouillabaisse", "Escargot", "Coq au Vin", "Ratatouille"],
        answer: "Escargot"
    },
    {
        question: "What is the primary ingredient in authentic Italian risotto?",
        options: ["Arborio rice", "Basmati rice", "Jasmine rice", "Brown rice"],
        answer: "Arborio rice"
    }
],

// Level 33: Film Mysteries & Intrigues
[
    {
        question: "In 'The Usual Suspects', who is revealed to be Keyser Söze?",
        options: ["Dean Keaton", "Roger Kint", "Fred Fenster", "Todd Hockney"],
        answer: "Roger Kint"
    },
    {
        question: "What is the spinning top's significance at the end of 'Inception'?",
        options: ["It reveals the dream state", "It's Cobb's wedding token", "It controls time", "It's a weapon"],
        answer: "It reveals the dream state"
    },
    {
        question: "In 'Shutter Island', what is Teddy Daniels' real identity?",
        options: ["Andrew Laeddis", "George Noyce", "Dr. Cawley", "Chuck Aule"],
        answer: "Andrew Laeddis"
    },
    {
        question: "What object does the Dude's rug tie together in 'The Big Lebowski'?",
        options: ["The plot", "The room", "His identity", "Nihilism theme"],
        answer: "The room"
    },
    {
        question: "What is the true nature of the 'monster' in 'Get Out'?",
        options: ["Alien", "Psychological", "Body-snatching cult", "Government experiment"],
        answer: "Body-snatching cult"
    }
],

// Level 34: Obscure Inventions & Discoveries
[
    {
        question: "Who invented the first wearable hearing aid in 1898?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Miller Reese Hutchison", "Nikola Tesla"],
        answer: "Miller Reese Hutchison"
    },
    {
        question: "What did African inventor Arthur Zang create in 2012?",
        options: ["Mobile payment system", "Cardiopad", "Water purification device", "Solar fridge"],
        answer: "Cardiopad"
    },
    {
        question: "Which civilization first developed concrete?",
        options: ["Romans", "Egyptians", "Mayans", "Chinese"],
        answer: "Romans"
    },
    {
        question: "What unexpected discovery came from the Hubble Space Telescope's initial flaw?",
        options: ["Dark energy", "Exoplanets", "Galaxy formation", "Black holes"],
        answer: "Dark energy"
    },
    {
        question: "Who discovered the first antibiotic before penicillin?",
        options: ["Louis Pasteur", "Paul Ehrlich", "Alexander Fleming", "Selman Waksman"],
        answer: "Paul Ehrlich"
    }
],

// Level 35: Current Affairs (2022-2023)
[
    {
        question: "What year did Russia launch its full-scale invasion of Ukraine?",
        options: ["2014", "2020", "2021", "2022"],
        answer: "2022"
    },
    {
        question: "What is the name of the Palestinian militant group that attacked Israel in October 2023?",
        options: ["Hezbollah", "Hamas", "Fatah", "Islamic Jihad"],
        answer: "Hamas"
    },
    {
        question: "Which country joined NATO in 2023 despite Turkish and Hungarian objections?",
        options: ["Ukraine", "Sweden", "Finland", "Georgia"],
        answer: "Finland"
    },
    {
        question: "What major climate agreement was finalized at COP27 in Egypt?",
        options: ["Loss and damage fund", "Coal phase-out", "Carbon tax", "Methane reduction"],
        answer: "Loss and damage fund"
    },
    {
        question: "Which African country experienced a coup in Niger in July 2023?",
        options: ["Mali", "Burkina Faso", "Guinea", "Niger"],
        answer: "Niger"
    }
],

// Level 36: Sea Animal Mysteries
[
    {
        question: "How do electric eels generate electricity?",
        options: ["Chemical cells", "Muscle contractions", "Specialized organs", "Bioluminescence"],
        answer: "Specialized organs"
    },
    {
        question: "What is the lifespan of the immortal jellyfish?",
        options: ["5 years", "25 years", "Biologically immortal", "100 years"],
        answer: "Biologically immortal"
    },
    {
        question: "How deep can Cuvier's beaked whales dive?",
        options: ["1km", "2km", "3km", "4km"],
        answer: "3km"
    },
    {
        question: "What percentage of an octopus's neurons are in its arms?",
        options: ["30%", "50%", "60%", "70%"],
        answer: "60%"
    },
    {
        question: "How do mantis shrimp strike with bullet-like speed?",
        options: ["Spring-loaded arms", "Hydraulic pressure", "Elastic energy", "Muscle power"],
        answer: "Spring-loaded arms"
    }
],

// Level 37: Animal Kingdom Wonders
[
    {
        question: "Which animal has the strongest bite force?",
        options: ["Lion", "Saltwater crocodile", "Hippopotamus", "Great white shark"],
        answer: "Saltwater crocodile"
    },
    {
        question: "How do honeybees communicate food locations?",
        options: ["Pheromones", "Waggle dance", "Ultrasonic sounds", "Visual signals"],
        answer: "Waggle dance"
    },
    {
        question: "What is unique about the platypus?",
        options: ["Lays eggs", "Glows in UV", "Three hearts", "Changes gender"],
        answer: "Lays eggs"
    },
    {
        question: "Which bird has the largest wingspan?",
        options: ["Albatross", "Condor", "Pelican", "Eagle"],
        answer: "Albatross"
    },
    {
        question: "How do chameleons change color?",
        options: ["Pigment cells", "Reflective crystals", "Blood flow", "Special feathers"],
        answer: "Reflective crystals"
    }
],

// Level 38: Economics & Business
[
    {
        question: "What does GDP stand for?",
        options: ["General Development Plan", "Gross Domestic Product", "Global Development Percentage", "Goods Distribution Process"],
        answer: "Gross Domestic Product"
    },
    {
        question: "Which economist developed 'invisible hand' theory?",
        options: ["John Maynard Keynes", "Karl Marx", "Adam Smith", "Milton Friedman"],
        answer: "Adam Smith"
    },
    {
        question: "What is stagflation?",
        options: ["High inflation + high growth", "Low inflation + recession", "High inflation + stagnation", "Deflation + growth"],
        answer: "High inflation + stagnation"
    },
    {
        question: "Which company pioneered just-in-time manufacturing?",
        options: ["Toyota", "Ford", "Samsung", "General Electric"],
        answer: "Toyota"
    },
    {
        question: "What does IPO stand for?",
        options: ["International Profit Organization", "Initial Public Offering", "Investment Portfolio Option", "Interim Purchase Order"],
        answer: "Initial Public Offering"
    }
],

// Level 39: Advanced World Geography
[
    {
        question: "What is the capital of Bhutan?",
        options: ["Kathmandu", "Thimphu", "Dhaka", "Male"],
        answer: "Thimphu"
    },
    {
        question: "Which country has the most time zones?",
        options: ["USA", "Russia", "China", "France"],
        answer: "France"
    },
    {
        question: "What is the world's largest landlocked country?",
        options: ["Mongolia", "Kazakhstan", "Chad", "Bolivia"],
        answer: "Kazakhstan"
    },
    {
        question: "Which river flows through the most countries?",
        options: ["Nile", "Amazon", "Danube", "Niger"],
        answer: "Danube"
    },
    {
        question: "What is the deepest point in Earth's oceans?",
        options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"],
        answer: "Mariana Trench"
    }
],

// Level 40: Advanced Flags Challenge
[
    {
        question: "🇱🇷 Which country has this flag?",
        options: ["Liberia", "United States", "Malaysia", "Cuba"],
        answer: "Liberia"
    },
    {
        question: "🇲🇳 Identify this flag:",
        options: ["Japan", "South Korea", "Mongolia", "Bhutan"],
        answer: "Mongolia"
    },
    {
        question: "🇹🇹 Which nation uses this flag?",
        options: ["Bahamas", "Trinidad and Tobago", "Guyana", "Jamaica"],
        answer: "Trinidad and Tobago"
    },
    {
        question: "🇸🇨 Flag identification:",
        options: ["Seychelles", "Mauritius", "Comoros", "Madagascar"],
        answer: "Seychelles"
    },
    {
        question: "🇧🇹 Identify this flag:",
        options: ["Tibet", "Bhutan", "Nepal", "Laos"],
        answer: "Bhutan"
    }
],

// Level 41: Complex Biology
[
    {
        question: "What is the function of the Golgi apparatus?",
        options: ["Energy production", "Protein modification", "DNA replication", "Waste disposal"],
        answer: "Protein modification"
    },
    {
        question: "Which process creates ATP without oxygen?",
        options: ["Glycolysis", "Krebs cycle", "Electron transport", "Photosynthesis"],
        answer: "Glycolysis"
    },
    {
        question: "What is epigenetics?",
        options: ["Study of epidemics", "Gene sequencing", "Heritable phenotype changes", "Ancient DNA"],
        answer: "Heritable phenotype changes"
    },
    {
        question: "Which enzyme unzips DNA?",
        options: ["Ligase", "Polymerase", "Helicase", "Primase"],
        answer: "Helicase"
    },
    {
        question: "What is CRISPR used for?",
        options: ["Protein synthesis", "Gene editing", "Cell imaging", "DNA sequencing"],
        answer: "Gene editing"
    }
],

// Level 42: Wrestling History
[
    {
        question: "Who ended The Undertaker's WrestleMania streak?",
        options: ["Brock Lesnar", "Roman Reigns", "Triple H", "John Cena"],
        answer: "Brock Lesnar"
    },
    {
        question: "Which wrestler used the 'People's Elbow'?",
        options: ["Stone Cold", "The Rock", "Hulk Hogan", "John Cena"],
        answer: "The Rock"
    },
    {
        question: "What was Hulk Hogan's original finishing move?",
        options: ["Leg drop", "Atomic leg drop", "Axe bomber", "Big boot"],
        answer: "Atomic leg drop"
    },
    {
        question: "Which promotion did Sting join after leaving WCW?",
        options: ["WWE", "ECW", "TNA", "AEW"],
        answer: "TNA"
    },
    {
        question: "Who founded All Elite Wrestling?",
        options: ["Vince McMahon", "Tony Khan", "Paul Heyman", "Eric Bischoff"],
        answer: "Tony Khan"
    }
],

// Level 43: Anime General Knowledge
[
    {
        question: "What is the most watched anime series of all time?",
        options: ["Naruto", "Dragon Ball", "One Piece", "Attack on Titan"],
        answer: "One Piece"
    },
    {
        question: "Which studio produced 'Spirited Away'?",
        options: ["Toei", "Bones", "Studio Ghibli", "Madhouse"],
        answer: "Studio Ghibli"
    },
    {
        question: "What does 'shonen' anime target?",
        options: ["Young boys", "Teen girls", "Adult men", "Children"],
        answer: "Young boys"
    },
    {
        question: "Who created 'Neon Genesis Evangelion'?",
        options: ["Hayao Miyazaki", "Masashi Kishimoto", "Hideaki Anno", "Eiichiro Oda"],
        answer: "Hideaki Anno"
    },
    {
        question: "What is the longest running anime series?",
        options: ["One Piece", "Detective Conan", "Sazae-san", "Doraemon"],
        answer: "Sazae-san"
    }
],

// Level 44: DC Universe
[
    {
        question: "What is Batman's real name?",
        options: ["Clark Kent", "Bruce Banner", "Bruce Wayne", "Barry Allen"],
        answer: "Bruce Wayne"
    },
    {
        question: "Who is the fastest man alive in DC?",
        options: ["Superman", "The Flash", "Green Lantern", "Shazam"],
        answer: "The Flash"
    },
    {
        question: "What is Wonder Woman's weapon called?",
        options: ["Lasso of Truth", "Magic Sword", "Golden Mace", "Invisible Shield"],
        answer: "Lasso of Truth"
    },
    {
        question: "Which villain is Batman's archenemy?",
        options: ["Joker", "Lex Luthor", "Reverse Flash", "Darkseid"],
        answer: "Joker"
    },
    {
        question: "What planet is Superman from?",
        options: ["Mars", "Krypton", "Oa", "Apokolips"],
        answer: "Krypton"
    }
],

// Level 45: Marvel Universe
[
    {
        question: "What metal makes Wolverine's claws?",
        options: ["Vibranium", "Adamantium", "Uru", "Promethium"],
        answer: "Adamantium"
    },
    {
        question: "Who is Tony Stark's AI assistant?",
        options: ["Ultron", "Vision", "J.A.R.V.I.S.", "F.R.I.D.A.Y."],
        answer: "J.A.R.V.I.S."
    },
    {
        question: "What is Captain America's shield made of?",
        options: ["Adamantium", "Carbonadium", "Vibranium", "Promethium"],
        answer: "Vibranium"
    },
    {
        question: "Which infinity stone is in Vision's forehead?",
        options: ["Time", "Mind", "Soul", "Reality"],
        answer: "Mind"
    },
    {
        question: "Who was the first Marvel superhero?",
        options: ["Captain America", "Human Torch", "Namor", "Spider-Man"],
        answer: "Human Torch"
    }
],

// Level 46: Dragon Ball Universe
[
    {
        question: "What is Goku's original Saiyan name?",
        options: ["Bardock", "Vegeta", "Kakarot", "Raditz"],
        answer: "Kakarot"
    },
    {
        question: "How many dragon balls are needed to summon Shenron?",
        options: ["3", "5", "7", "10"],
        answer: "7"
    },
    {
        question: "Who is the first villain to destroy Earth?",
        options: ["Frieza", "Cell", "Majin Buu", "Beerus"],
        answer: "Majin Buu"
    },
    {
        question: "What is Vegeta's brother's name?",
        options: ["Nappa", "Raditz", "Tarble", "Broly"],
        answer: "Tarble"
    },
    {
        question: "Who trained Gohan during the Cell Games?",
        options: ["Goku", "Piccolo", "Vegeta", "Whis"],
        answer: "Piccolo"
    }
],

// Level 47: Nigerian Football History
[
    {
        question: "Who scored Nigeria's first World Cup goal?",
        options: ["Rashidi Yekini", "Daniel Amokachi", "Jay-Jay Okocha", "Finidi George"],
        answer: "Rashidi Yekini"
    },
    {
        question: "Which year did Nigeria win Olympic football gold?",
        options: ["1994", "1996", "2000", "2004"],
        answer: "1996"
    },
    {
        question: "Who is Nigeria's all-time top scorer?",
        options: ["Yakubu Aiyegbeni", "Nwankwo Kanu", "Rashidi Yekini", "Obafemi Martins"],
        answer: "Rashidi Yekini"
    },
    {
        question: "Which Nigerian won African Footballer of the Year three times?",
        options: ["Jay-Jay Okocha", "Vincent Enyeama", "Nwankwo Kanu", "Rashidi Yekini"],
        answer: "Jay-Jay Okocha"
    },
    {
        question: "Who captained Nigeria to 2013 AFCON victory?",
        options: ["Joseph Yobo", "John Obi Mikel", "Vincent Enyeama", "Austin Okocha"],
        answer: "Joseph Yobo"
    }
],

// Level 48: Extreme Sports Challenges
[
    {
        question: "What is the highest score possible in Olympic gymnastics?",
        options: ["10.0", "15.0", "20.0", "No limit"],
        answer: "No limit"
    },
    {
        question: "Who landed the first 1080° skateboard spin?",
        options: ["Tony Hawk", "Rodney Mullen", "Tom Schaar", "Nyjah Huston"],
        answer: "Tom Schaar"
    },
    {
        question: "What is 'free solo' in rock climbing?",
        options: ["Climbing without ropes", "Speed climbing", "Bouldering", "Indoor climbing"],
        answer: "Climbing without ropes"
    },
    {
        question: "Which surfer holds most world titles?",
        options: ["Kelly Slater", "Mick Fanning", "John John Florence", "Gabriel Medina"],
        answer: "Kelly Slater"
    },
    {
        question: "What is the world record for longest basketball shot?",
        options: ["84 feet", "100 feet", "127 feet", "157 feet"],
        answer: "127 feet"
    }
],

// Level 49: Digital Revolution
[
    {
        question: "What year was the iPhone first released?",
        options: ["2005", "2007", "2009", "2011"],
        answer: "2007"
    },
    {
        question: "Who created the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What does NFT stand for?",
        options: ["Network File Transfer", "Non-Fungible Token", "New Financial Technology", "Network Function Terminal"],
        answer: "Non-Fungible Token"
    },
    {
        question: "Which company developed ChatGPT?",
        options: ["Google", "OpenAI", "Microsoft", "Meta"],
        answer: "OpenAI"
    },
    {
        question: "What is the most used social media platform?",
        options: ["Facebook", "YouTube", "Instagram", "TikTok"],
        answer: "Facebook"
    }
],

// Level 50: Ultimate Bonus Round
[
    {
        question: "Who won the 2022 FIFA World Cup?",
        options: ["France", "Croatia", "Morocco", "Argentina"],
        answer: "Argentina",
        fact: "Lionel Messi finally won the World Cup with Argentina in Qatar 2022"
    },
    {
        question: "What is the highest-grossing anime film of all time?",
        options: ["Your Name", "Spirited Away", "Demon Slayer: Mugen Train", "Howl's Moving Castle"],
        answer: "Demon Slayer: Mugen Train",
        fact: "Demon Slayer: Mugen Train earned over $500 million worldwide"
    },
    {
        question: "Which manga has sold the most copies?",
        options: ["Dragon Ball", "One Piece", "Naruto", "Attack on Titan"],
        answer: "One Piece",
        fact: "One Piece has sold over 500 million copies worldwide"
    },
    {
        question: "Who is considered the 'father' of the Big Three anime?",
        options: ["Hayao Miyazaki", "Akira Toriyama", "Masashi Kishimoto", "Eiichiro Oda"],
        answer: "Akira Toriyama",
        fact: "Toriyama's Dragon Ball inspired the creators of One Piece, Naruto, and Bleach"
    },
    {
        question: "Who scored the winning goal in the 2022 World Cup final?",
        options: ["Lionel Messi", "Kylian Mbappé", "Ángel Di María", "Emiliano Martínez"],
        answer: "Lionel Messi",
        fact: "Messi scored twice in the final including the decisive goal in extra time"
    }
]

// Level 51: Ancient Civilizations
[
    {
        question: "Which civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        answer: "Inca"
    },
    {
        question: "What writing system did ancient Egyptians use?",
        options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Linear B"],
        answer: "Hieroglyphics"
    },
    {
        question: "Which wonder was in Babylon?",
        options: ["Colossus", "Lighthouse", "Hanging Gardens", "Pyramids"],
        answer: "Hanging Gardens"
    },
    {
        question: "What was the primary trade of Phoenicians?",
        options: ["Silk", "Purple dye", "Spices", "Gold"],
        answer: "Purple dye"
    },
    {
        question: "Who founded Rome according to legend?",
        options: ["Julius Caesar", "Romulus", "Augustus", "Cincinnatus"],
        answer: "Romulus"
    }
],

// Level 52: World Literature Classics
[
    {
        question: "Who wrote 'Crime and Punishment'?",
        options: ["Tolstoy", "Dostoevsky", "Chekhov", "Pushkin"],
        answer: "Dostoevsky"
    },
    {
        question: "What is the setting of 'One Hundred Years of Solitude'?",
        options: ["Macondo", "Yoknapatawpha", "Comala", "Santa Maria"],
        answer: "Macondo"
    },
    {
        question: "Who created Sherlock Holmes?",
        options: ["Agatha Christie", "Arthur Conan Doyle", "Wilkie Collins", "Edgar Wallace"],
        answer: "Arthur Conan Doyle"
    },
    {
        question: "Which Shakespeare play features Prospero?",
        options: ["Macbeth", "Hamlet", "The Tempest", "King Lear"],
        answer: "The Tempest"
    },
    {
        question: "What African novel begins 'Okonkwo was well known throughout the nine villages'?",
        options: ["Things Fall Apart", "Half of a Yellow Sun", "So Long a Letter", "The Beautyful Ones"],
        answer: "Things Fall Apart"
    }
],

// Level 53: Music Theory & History
[
    {
        question: "How many beats does a whole note get in 4/4 time?",
        options: ["1", "2", "3", "4"],
        answer: "4"
    },
    {
        question: "Which period came after Baroque?",
        options: ["Renaissance", "Classical", "Romantic", "Modern"],
        answer: "Classical"
    },
    {
        question: "What is the 'blue note' in blues music?",
        options: ["Flattened third", "Sharp fifth", "Natural seventh", "Raised fourth"],
        answer: "Flattened third"
    },
    {
        question: "Who composed 'The Rite of Spring'?",
        options: ["Stravinsky", "Debussy", "Schoenberg", "Bartók"],
        answer: "Stravinsky"
    },
    {
        question: "What instrument did Miles Davis famously play?",
        options: ["Saxophone", "Piano", "Trumpet", "Double bass"],
        answer: "Trumpet"
    }
],

// Level 54: Astronomy Wonders
[
    {
        question: "What is a light-year?",
        options: ["Time measurement", "Distance measurement", "Light intensity", "Telescope power"],
        answer: "Distance measurement"
    },
    {
        question: "Which planet has diamond rain?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        answer: "Neptune"
    },
    {
        question: "What causes a supernova?",
        options: ["Black hole collision", "Star explosion", "Planet formation", "Asteroid impact"],
        answer: "Star explosion"
    },
    {
        question: "Which galaxy will collide with Milky Way?",
        options: ["Andromeda", "Triangulum", "Sombrero", "Centaurus A"],
        answer: "Andromeda"
    },
    {
        question: "What is at the center of our galaxy?",
        options: ["Supernova", "Quasar", "Black hole", "Neutron star"],
        answer: "Black hole"
    }
],

// Level 55: Human Psychology
[
    {
        question: "What is cognitive dissonance?",
        options: ["Memory loss", "Conflicting beliefs", "Sensory overload", "Learned helplessness"],
        answer: "Conflicting beliefs"
    },
    {
        question: "Who pioneered behaviorism?",
        options: ["Freud", "Pavlov", "Skinner", "Watson"],
        answer: "Watson"
    },
    {
        question: "What does IQ stand for?",
        options: ["Intellectual Quotient", "Intelligence Quotient", "Intuition Quality", "Inquiry Quantity"],
        answer: "Intelligence Quotient"
    },
    {
        question: "Which part of brain controls emotions?",
        options: ["Cerebellum", "Amygdala", "Hippocampus", "Frontal lobe"],
        answer: "Amygdala"
    },
    {
        question: "What is the Hawthorne effect?",
        options: ["Placebo response", "Observer influence", "Cognitive bias", "Group conformity"],
        answer: "Observer influence"
    }
],

// Level 56: World Religions
[
    {
        question: "What is the holy book of Sikhism?",
        options: ["Vedas", "Guru Granth Sahib", "Tripitaka", "Adi Granth"],
        answer: "Guru Granth Sahib"
    },
    {
        question: "Where did Buddhism originate?",
        options: ["China", "India", "Tibet", "Japan"],
        answer: "India"
    },
    {
        question: "What is the Shabbat?",
        options: ["Jewish New Year", "Day of Atonement", "Sabbath", "Passover"],
        answer: "Sabbath"
    },
    {
        question: "Which prophet founded Islam?",
        options: ["Moses", "Jesus", "Muhammad", "Abraham"],
        answer: "Muhammad"
    },
    {
        question: "What is karma in Hinduism?",
        options: ["Divine being", "Life force", "Moral consequence", "Enlightenment"],
        answer: "Moral consequence"
    }
],

// Level 57: Famous Paintings & Artists
[
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Picasso", "Dali", "Magritte", "Miro"],
        answer: "Dali"
    },
    {
        question: "What is the subject of Vermeer's 'Girl with a Pearl Earring'?",
        options: ["His wife", "His daughter", "Unknown", "Mistress"],
        answer: "Unknown"
    },
    {
        question: "Which artist cut off his ear?",
        options: ["Picasso", "Monet", "Van Gogh", "Gauguin"],
        answer: "Van Gogh"
    },
    {
        question: "Where is the Sistine Chapel?",
        options: ["Florence", "Milan", "Venice", "Vatican City"],
        answer: "Vatican City"
    },
    {
        question: "Who created 'The Thinker'?",
        options: ["Michelangelo", "Donatello", "Rodin", "Bernini"],
        answer: "Rodin"
    }
],

// Level 58: Periodic Table Elements
[
    {
        question: "Which element has atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen"
    },
    {
        question: "What is the symbol for gold?",
        options: ["Go", "Gl", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Which element is liquid at room temperature?",
        options: ["Bromine", "Mercury", "Gallium", "All of these"],
        answer: "All of these"
    },
    {
        question: "What group are noble gases?",
        options: ["Group 1", "Group 8", "Group 18", "Group 2"],
        answer: "Group 18"
    },
    {
        question: "Which element makes up 78% of air?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Argon"],
        answer: "Nitrogen"
    }
],

// Level 59: Computer Science
[
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which language uses 'print'?",
        options: ["Java", "C++", "Python", "JavaScript"],
        answer: "Python"
    },
    {
        question: "What is a blockchain?",
        options: ["Encryption method", "Distributed ledger", "Cloud storage", "Programming framework"],
        answer: "Distributed ledger"
    },
    {
        question: "Which company created Java?",
        options: ["Microsoft", "Sun Microsystems", "IBM", "Oracle"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does API stand for?",
        options: ["Automated Program Interface", "Application Programming Interface", "Advanced Program Integration", "Applied Process Interface"],
        answer: "Application Programming Interface"
    }
],

// Level 60: Environmental Issues
[
    {
        question: "What is the main cause of ocean acidification?",
        options: ["Plastic waste", "CO2 absorption", "Oil spills", "Sewage"],
        answer: "CO2 absorption"
    },
    {
        question: "Which gas is primarily responsible for ozone depletion?",
        options: ["CO2", "CFCs", "Methane", "Nitrous oxide"],
        answer: "CFCs"
    },
    {
        question: "What percentage of plastic is recycled globally?",
        options: ["5%", "9%", "15%", "20%"],
        answer: "9%"
    },
    {
        question: "Which ecosystem is most threatened by palm oil?",
        options: ["Amazon", "Congo Basin", "Borneo Rainforest", "Great Barrier Reef"],
        answer: "Borneo Rainforest"
    },
    {
        question: "What is the Great Pacific Garbage Patch?",
        options: ["Island of trash", "Plastic soup", "Oil slick", "Coral graveyard"],
        answer: "Plastic soup"
    }
],

// Level 61: Human Rights Movements
[
    {
        question: "Who started #MeToo movement?",
        options: ["Tarana Burke", "Alyssa Milano", "Rose McGowan", "Gloria Steinem"],
        answer: "Tarana Burke"
    },
    {
        question: "Where did Arab Spring begin?",
        options: ["Egypt", "Libya", "Tunisia", "Syria"],
        answer: "Tunisia"
    },
    {
        question: "Who founded Black Lives Matter?",
        options: ["Patrisse Cullors, Alicia Garza, Opal Tometi", "Angela Davis, Cornel West", "Ta-Nehisi Coates, Ibram Kendi", "Beyoncé, Kendrick Lamar"],
        answer: "Patrisse Cullors, Alicia Garza, Opal Tometi"
    },
    {
        question: "Which movement ended apartheid?",
        options: ["Civil Disobedience", "Anti-Apartheid Movement", "Umkhonto we Sizwe", "Truth and Reconciliation"],
        answer: "Anti-Apartheid Movement"
    },
    {
        question: "What year was same-sex marriage legalized in US?",
        options: ["2012", "2015", "2017", "2020"],
        answer: "2015"
    }
],

// Level 62: Medical Breakthroughs
[
    {
        question: "Who discovered blood types?",
        options: ["Alexander Fleming", "Louis Pasteur", "Karl Landsteiner", "Robert Koch"],
        answer: "Karl Landsteiner"
    },
    {
        question: "What was the first antibiotic?",
        options: ["Aspirin", "Penicillin", "Streptomycin", "Morphine"],
        answer: "Penicillin"
    },
    {
        question: "When was first successful organ transplant?",
        options: ["1954", "1967", "1982", "1998"],
        answer: "1954"
    },
    {
        question: "What does mRNA vaccine target?",
        options: ["Bacteria", "Virus spike protein", "DNA", "Immune cells"],
        answer: "Virus spike protein"
    },
    {
        question: "Who developed polio vaccine?",
        options: ["Salk", "Sabin", "Both", "Jenner"],
        answer: "Both"
    }
],

// Level 63: African Wildlife
[
    {
        question: "What is Africa's fastest land animal?",
        options: ["Lion", "Cheetah", "Leopard", "Wildebeest"],
        answer: "Cheetah"
    },
    {
        question: "Which ape is found only in Africa?",
        options: ["Orangutan", "Gorilla", "Gibbon", "Chimpanzee"],
        answer: "Gorilla"
    },
    {
        question: "How do giraffes fight?",
        options: ["Kicking", "Biting", "Necking", "Horn jabbing"],
        answer: "Necking"
    },
    {
        question: "What is the 'Big Five'?",
        options: ["Lion, leopard, rhino, elephant, buffalo", "Cheetah, giraffe, hippo, zebra, hyena", "Gorilla, chimpanzee, mandrill, baboon, colobus", "Meerkat, aardvark, pangolin, porcupine, honey badger"],
        answer: "Lion, leopard, rhino, elephant, buffalo"
    },
    {
        question: "Which bird is the world's largest?",
        options: ["Eagle", "Albatross", "Ostrich", "Shoebill"],
        answer: "Ostrich"
    }
],

// Level 64: Oceanography
[
    {
        question: "What is the deepest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Where is Mariana Trench?",
        options: ["Atlantic", "Indian", "Pacific", "Southern"],
        answer: "Pacific"
    },
    {
        question: "What causes tides?",
        options: ["Moon gravity", "Sun gravity", "Earth rotation", "All of these"],
        answer: "All of these"
    },
    {
        question: "What is El Niño?",
        options: ["Ocean current", "Wind pattern", "Warm phase", "Storm system"],
        answer: "Warm phase"
    },
    {
        question: "Which ocean has the most islands?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    }
],

// Level 65: Political Theories
[
    {
        question: "Who wrote 'The Communist Manifesto'?",
        options: ["Lenin", "Stalin", "Marx & Engels", "Trotsky"],
        answer: "Marx & Engels"
    },
    {
        question: "What is realpolitik?",
        options: ["Practical politics", "Moral governance", "Revolutionary theory", "Economic policy"],
        answer: "Practical politics"
    },
    {
        question: "Who developed social contract theory?",
        options: ["Hobbes, Locke, Rousseau", "Plato, Aristotle", "Machiavelli", "Adam Smith"],
        answer: "Hobbes, Locke, Rousseau"
    },
    {
        question: "What is anarchism?",
        options: ["Rule by elite", "No government", "Direct democracy", "Military rule"],
        answer: "No government"
    },
    {
        question: "Who wrote 'The Prince'?",
        options: ["Plato", "Machiavelli", "Sun Tzu", "Thomas More"],
        answer: "Machiavelli"
    }
],

// Level 66: Architectural Wonders
[
    {
        question: "Where is the Sagrada Familia?",
        options: ["Rome", "Barcelona", "Paris", "Florence"],
        answer: "Barcelona"
    },
    {
        question: "Who designed Sydney Opera House?",
        options: ["Frank Lloyd Wright", "Jørn Utzon", "Zaha Hadid", "I.M. Pei"],
        answer: "Jørn Utzon"
    },
    {
        question: "What is the Burj Khalifa's height?",
        options: ["828m", "634m", "601m", "541m"],
        answer: "828m"
    },
    {
        question: "Which ancient structure is in Jordan?",
        options: ["Petra", "Palmyra", "Ephesus", "Machu Picchu"],
        answer: "Petra"
    },
    {
        question: "What style is Taj Mahal?",
        options: ["Mughal", "Ottoman", "Persian", "Indo-Islamic"],
        answer: "Mughal"
    }
],

// Level 67: Famous Explorers
[
    {
        question: "Who first circumnavigated the globe?",
        options: ["Columbus", "Magellan", "Cook", "Drake"],
        answer: "Magellan"
    },
    {
        question: "Which explorer reached India by sea?",
        options: ["Dias", "Columbus", "Da Gama", "Cabot"],
        answer: "Da Gama"
    },
    {
        question: "Who mapped the Pacific?",
        options: ["Cook", "Magellan", "Drake", "Shackleton"],
        answer: "Cook"
    },
    {
        question: "Which African explorer searched for Nile source?",
        options: ["Livingstone", "Stanley", "Burton", "Speke"],
        answer: "Livingstone"
    },
    {
        question: "Who first reached South Pole?",
        options: ["Scott", "Amundsen", "Shackleton", "Hillary"],
        answer: "Amundsen"
    }
],

// Level 68: Culinary Techniques
[
    {
        question: "What is sous-vide?",
        options: ["Vacuum sealing", "Slow cooking", "Pressure cooking", "Flash frying"],
        answer: "Vacuum sealing"
    },
    {
        question: "What does 'mise en place' mean?",
        options: ["Cleaning up", "Everything in place", "Final plating", "Knife skills"],
        answer: "Everything in place"
    },
    {
        question: "What is molecular gastronomy?",
        options: ["Food chemistry", "Organic cooking", "Slow food", "Foraging"],
        answer: "Food chemistry"
    },
    {
        question: "Which knife is most versatile?",
        options: ["Paring", "Boning", "Chef's", "Serrated"],
        answer: "Chef's"
    },
    {
        question: "What is deglazing?",
        options: ["Removing fat", "Adding liquid to pan", "Clarifying butter", "Tenderizing meat"],
        answer: "Adding liquid to pan"
    }
],

// Level 69: Linguistics
[
    {
        question: "How many official UN languages?",
        options: ["4", "5", "6", "7"],
        answer: "6"
    },
    {
        question: "Which language has most native speakers?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "What is a pidgin language?",
        options: ["Simplified communication", "Ancient language", "Sign language", "Computer language"],
        answer: "Simplified communication"
    },
    {
        question: "Which language uses logograms?",
        options: ["Korean", "Japanese", "Chinese", "Thai"],
        answer: "Chinese"
    },
    {
        question: "What is IPA?",
        options: ["Language association", "Phonetic alphabet", "Linguistic theory", "Grammar system"],
        answer: "Phonetic alphabet"
    }
],

// Level 70: Robotics & AI
[
    {
        question: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Algorithmic Integration", "Advanced Interface"],
        answer: "Artificial Intelligence"
    },
    {
        question: "Which company created Sophia robot?",
        options: ["Boston Dynamics", "Hanson Robotics", "Tesla", "Sony"],
        answer: "Hanson Robotics"
    },
    {
        question: "What is machine learning?",
        options: ["Robotics programming", "AI that learns patterns", "Neural networks", "Computer vision"],
        answer: "AI that learns patterns"
    },
    {
        question: "Which AI beat Go champion?",
        options: ["Watson", "Deep Blue", "AlphaGo", "GPT-3"],
        answer: "AlphaGo"
    },
    {
        question: "What is singularity?",
        options: ["AI self-improvement point", "Quantum computing", "Robot consciousness", "Human-AI merging"],
        answer: "AI self-improvement point"
    }
],

// Level 71: Viral Internet Phenomena
[
    {
        question: "What was first viral video?",
        options: ["Charlie Bit My Finger", "Gangnam Style", "Baby Shark", "Numa Numa"],
        answer: "Numa Numa"
    },
    {
        question: "Which app popularized short videos?",
        options: ["Instagram", "Snapchat", "TikTok", "Vine"],
        answer: "Vine"
    },
    {
        question: "What is 'Rickrolling'?",
        options: ["Prank call", "Unexpected Rick Astley", "Trolling technique", "Dance trend"],
        answer: "Unexpected Rick Astley"
    },
    {
        question: "Which meme features distracted boyfriend?",
        options: ["Woman yelling at cat", "Drake hotline bling", "Two buttons", "Man looking back"],
        answer: "Man looking back"
    },
    {
        question: "What cryptocurrency became meme stock?",
        options: ["Bitcoin", "Ethereum", "Dogecoin", "Cardano"],
        answer: "Dogecoin"
    }
],

// Level 72: Sustainable Energy
[
    {
        question: "What is most efficient renewable?",
        options: ["Wind", "Hydroelectric", "Solar", "Geothermal"],
        answer: "Hydroelectric"
    },
    {
        question: "Which country leads in wind power?",
        options: ["USA", "China", "Germany", "India"],
        answer: "China"
    },
    {
        question: "What is green hydrogen?",
        options: ["Hydrogen from water", "Hydrogen from gas", "Hydrogen from biomass", "Hydrogen from solar"],
        answer: "Hydrogen from water"
    },
    {
        question: "What percentage of global energy is renewable?",
        options: ["10%", "20%", "30%", "40%"],
        answer: "30%"
    },
    {
        question: "Which battery type dominates EVs?",
        options: ["Lead-acid", "Nickel-metal", "Lithium-ion", "Solid-state"],
        answer: "Lithium-ion"
    }
],

// Level 73: Space Missions
[
    {
        question: "Who was first woman in space?",
        options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Christa McAuliffe"],
        answer: "Valentina Tereshkova"
    },
    {
        question: "Which probe left solar system?",
        options: ["Pioneer 10", "Voyager 1", "New Horizons", "Cassini"],
        answer: "Voyager 1"
    },
    {
        question: "What year did humans land on moon?",
        options: ["1967", "1969", "1971", "1973"],
        answer: "1969"
    },
    {
        question: "Which rover found water on Mars?",
        options: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
        answer: "Curiosity"
    },
    {
        question: "What is James Webb's specialty?",
        options: ["X-rays", "Infrared", "Ultraviolet", "Radio waves"],
        answer: "Infrared"
    }
],

// Level 74: Future Technologies
[
    {
        question: "What is quantum computing advantage?",
        options: ["Speed", "Parallelism", "AI integration", "Energy efficiency"],
        answer: "Parallelism"
    },
    {
        question: "What does CRISPR edit?",
        options: ["Proteins", "RNA", "DNA", "Cells"],
        answer: "DNA"
    },
    {
        question: "What is neuralink?",
        options: ["AI chip", "Brain interface", "Quantum computer", "Robotic limb"],
        answer: "Brain interface"
    },
    {
        question: "Which technology enables metaverse?",
        options: ["VR", "Blockchain", "5G", "All of these"],
        answer: "All of these"
    },
    {
        question: "What is fusion power's fuel?",
        options: ["Uranium", "Hydrogen", "Plutonium", "Deuterium-tritium"],
        answer: "Deuterium-tritium"
    }
]
];

// DOM ELEMENTS 

const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const levelIndicator = document.getElementById('level-indicator');
const questionCounterElement = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMessage = document.getElementById('feedback-message');
const correctAnswerDisplay = document.getElementById('correct-answer-display');
const correctAnswerValue = document.getElementById('correct-answer-value');
const nextBtn = document.getElementById('next-btn');
const nextLevelBtn = document.getElementById('next-level-btn'); // Button for next level
const finalScoreMessage = document.getElementById('final-score-message');
const levelReachedMessage = document.getElementById('level-reached-message');
const restartBtn = document.getElementById('restart-btn');

// TIMER ELEMENTS: Added for the new timer functionality
const timeLeftElement = document.getElementById('time-left'); // Displays remaining time
const timerContainer = document.getElementById('timer-container'); // Container for styling

// POPUP ELEMENTS
const levelCompletePopup = document.getElementById('level-complete-popup');
const levelCompleteMessage = document.getElementById('level-complete-message');
const levelScoreDisplay = document.getElementById('level-score-display');
const continueBtn = document.getElementById('continue-btn');
const popupHeading = levelCompletePopup.querySelector('h2');

// QUIZ STATE VARIABLES

let currentLevel = 0; // Tracks the current quiz level (0-indexed)
let currentQuestionIndex = 0; // Tracks the current question within the shuffled level array
let score = 0; // Total score across all levels
let levelScore = 0; // Score for the current level
let shuffledLevelQuestions = []; // Stores the shuffled questions for the current level

// TIMER STATE VARIABLES: Added for timer functionality
let timer; // Reference to the timer interval
let timeLeft; // Current time remaining for the question

// HELPER FUNCTIONS

// Utility function to shuffle an array randomly using the Fisher-Yates algorithm.
function shuffleArray(array) { // The array to shuffle.
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;// The shuffled array.
}

// Hides all main screen containers and then displays the specified one.
function showScreen(screenToShow) { //The DOM element of the screen to display.
    welcomeScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');

    welcomeScreen.classList.remove('active');
    questionScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active'); // Add active for CSS animations
}

// Resets the feedback area styling and content.
function resetFeedbackArea() {
    feedbackArea.classList.remove('correct-feedback', 'incorrect-feedback');
    feedbackMessage.textContent = '';
    correctAnswerDisplay.classList.add('hidden');
    correctAnswerValue.textContent = '';
}

// Resets the styling of all option buttons.
function resetOptionButtons() {
    Array.from(optionsContainer.children).forEach(button => {
        button.classList.remove('selected-correct', 'selected-incorrect', 'correct-answer-highlight');
        button.disabled = false; // Re-enable buttons for the next question
    });
}

// POPUP FUNCTIONS
function showLevelCompletePopup(isSuccess, message, scoreText) {
    if (isSuccess) {
        popupHeading.textContent = "Level Complete!";
        popupHeading.style.color = '#28a745';
    } else {
        popupHeading.textContent = "Level Failed";
        popupHeading.style.color = '#dc3545';
    }
    
    levelCompleteMessage.textContent = message;
    levelScoreDisplay.textContent = scoreText;
    
    levelCompletePopup.classList.remove('hidden');
    levelCompletePopup.classList.add('active');
}

function hideLevelCompletePopup() {
    levelCompletePopup.classList.remove('active');
    levelCompletePopup.classList.add('hidden');
}

// TIMER FUNCTIONS: Added for the new timer feature

// Starts the 30-second timer for the current question
function startTimer() {
    timeLeft = 30; // Set initial time to 30 seconds
    timeLeftElement.textContent = timeLeft; // Update display
    timerContainer.classList.remove('timer-warning', 'timer-critical'); // Reset timer styles
    
    // Create interval to update timer every second
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        
        // Visual warnings for low time
        if (timeLeft <= 10) {
            timerContainer.classList.add('timer-critical'); // Critical (red) styling
        } else if (timeLeft <= 15) {
            timerContainer.classList.add('timer-warning'); // Warning (yellow) styling
        }
        
        // Handle when time runs out
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            timeUp(); // Process timeout
        }
    }, 1000);
}

// Stops the timer
function stopTimer() {
    clearInterval(timer); // Clear the timer interval
}

// Handles when time runs out for a question
function timeUp() {
    // Disable all option buttons
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });
    
    const currentQuestion = shuffledLevelQuestions[currentQuestionIndex];
    feedbackMessage.textContent = 'Time is up!';
    feedbackArea.classList.add('incorrect-feedback');
    feedbackArea.classList.remove('hidden');
    correctAnswerDisplay.classList.remove('hidden');
    correctAnswerValue.textContent = currentQuestion.answer;
    
    // Highlight the correct answer
    Array.from(optionsContainer.children).forEach(button => {
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct-answer-highlight');
        }
    });
    
    // Show appropriate next button
    if (currentQuestionIndex < shuffledLevelQuestions.length - 1) {
        nextBtn.classList.remove('hidden'); // Show "Next Question"
    } else {
        nextLevelBtn.classList.remove('hidden'); // Show "Proceed to Next Level"
    }
}

// QUIZ FLOW FUNCTIONS

function startQuiz() {
    currentLevel = 0;
    score = 0;
    levelScore = 0; // Reset level score for the very beginning
    loadLevel(); // Start loading the first level
    showScreen(questionScreen);
}

function loadLevel() {
    // Get the questions for the current level. If no more levels, assume quiz is over.
    if (currentLevel >= quizLevels.length) {
        showResults();
        return;
    }

    // Shuffle the questions for the current level to ensure randomness and non-repetition.
    shuffledLevelQuestions = shuffleArray([...quizLevels[currentLevel]]);
    currentQuestionIndex = 0; // Reset question index for the new level
    levelScore = 0; // Reset score for the new level

    levelIndicator.textContent = `Level ${currentLevel + 1}`;
    loadQuestion(); // Load the first question of the new level
}

// Displays the current question and its options on the screen.
function loadQuestion() {
    resetFeedbackArea();
    resetOptionButtons();

    nextBtn.classList.add('hidden'); // Hide "Next Question" button
    nextLevelBtn.classList.add('hidden'); // Hide "Next Level" button

    // Start timer for this question
    startTimer();

    const currentQuestion = shuffledLevelQuestions[currentQuestionIndex];
    if (!currentQuestion) {
        // This should ideally not happen if loadLevel logic is correct,
        // but it's a safeguard for when all questions in a level are exhausted.
        checkLevelCompletion();
        return;
    }

    questionCounterElement.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledLevelQuestions.length}`;
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ''; // Clear previous options

    // Create buttons for each option and attach click listeners
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            stopTimer(); // Stop timer when answer is selected
            handleAnswerSelection(option, currentQuestion.answer, button);
        });
        optionsContainer.appendChild(button);
    });
}

// Handles the user's selection of an answer.
// Checks correctness, updates score, provides feedback, and prepares for next step.
function handleAnswerSelection(selectedOption, correctAnswer, clickedButton) {
    // Disable all option buttons immediately after an answer is selected
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    feedbackArea.classList.remove('hidden'); // Ensure feedback area is visible

    if (selectedOption === correctAnswer) {
        feedbackMessage.textContent = 'Correct!';
        feedbackArea.classList.add('correct-feedback');
        clickedButton.classList.add('selected-correct');
        score++;      // Increment total score
        levelScore++; // Increment current level's score
    } else {
        feedbackMessage.textContent = 'Incorrect.';
        feedbackArea.classList.add('incorrect-feedback');
        clickedButton.classList.add('selected-incorrect');
        correctAnswerDisplay.classList.remove('hidden');
        correctAnswerValue.textContent = correctAnswer;

        // Highlight the correct answer among the options
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct-answer-highlight');
            }
        });
    }

    // Determine which button to show next (Next Question or Next Level)
    if (currentQuestionIndex < shuffledLevelQuestions.length - 1) {
        nextBtn.classList.remove('hidden'); // Show "Next Question"
    } else {
        // All questions in the current level have been answered
        nextLevelBtn.classList.remove('hidden'); // Show "Proceed to Next Level"
    }
}

// Proceeds to the next question within the current level.
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Checks if the user has completed all questions in the current level.
// If so, proceeds to the next level or shows results if all levels are done.
function checkLevelCompletion() {
    // Check if the user passed the level through the threshold set
    const passingThreshold = 0.5;
    const requiredCorrect = Math.ceil(shuffledLevelQuestions.length * passingThreshold);
    const totalQuestions = shuffledLevelQuestions.length;

    if (levelScore >= requiredCorrect) {
        // Show popup for passed level
        const message = `Congratulations! You passed Level ${currentLevel + 1}.`;
        const scoreText = `You scored ${levelScore}/${totalQuestions} in this level.`;
        showLevelCompletePopup(true, message, scoreText);
    } else {
        // Show popup for failed level
        const message = `You didn't pass Level ${currentLevel + 1}.`;
        const scoreText = `You scored ${levelScore}/${totalQuestions} and needed ${requiredCorrect}.`;
        showLevelCompletePopup(false, message, scoreText);
    }
}

// Continue to next level after popup
function proceedAfterPopup() {
    hideLevelCompletePopup();
    
    const passingThreshold = 0.5;
    const requiredCorrect = Math.ceil(shuffledLevelQuestions.length * passingThreshold);
    
    if (levelScore >= requiredCorrect) {
        currentLevel++; // Move to the next level
        if (currentLevel < quizLevels.length) {
            loadLevel(); // Load the next level's questions
        } else {
            // All levels completed
            showResults();
        }
    } else {
        // User failed the level
        showResults(false); // Show results, indicating failure
    }
}

// Displays the final results screen.
function showResults(passedAllLevels = true) {
    showScreen(resultsScreen);

    // Calculate total possible questions
    const totalQuestions = quizLevels.reduce((total, level) => total + level.length, 0);
    finalScoreMessage.textContent = `Your total score: ${score} out of ${totalQuestions} questions.`;

    if (passedAllLevels && currentLevel >= quizLevels.length) {
        levelReachedMessage.textContent = "Congratulations! You've completed all levels!";
        levelReachedMessage.style.color = 'green';
    } else if (currentLevel < quizLevels.length) {
        levelReachedMessage.textContent = `You reached Level ${currentLevel + 1}. Better luck next time!`;
        levelReachedMessage.style.color = 'red';
    } else {
        // This case handles explicit failure from checkLevelCompletion for the last level
        levelReachedMessage.textContent = `You completed Level ${currentLevel} but did not pass.`;
        levelReachedMessage.style.color = 'red';
    }
}

// EVENT LISTENERS

// Event listener for the "Start Quiz" button on the welcome screen.
startBtn.addEventListener('click', startQuiz);

// Event listener for the "Next Question" button on the question screen.
nextBtn.addEventListener('click', nextQuestion);

// Event listener for the "Proceed to Next Level" button.
nextLevelBtn.addEventListener('click', checkLevelCompletion);

// Event listener for the "Restart Quiz" button on the results screen.
restartBtn.addEventListener('click', startQuiz);

// Event listener for the "Continue" button in the popup
continueBtn.addEventListener('click', proceedAfterPopup);

// INITIALIZATION

// Initially display the welcome screen when the page loads.
showScreen(welcomeScreen);