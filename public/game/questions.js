const questions = [
  {
    "question": "What symbolic icon came to represent female workers during the war?",
    "answers": [
      { "text": "Rosie the Riveter", "correct": true },
      { "text": "Wendy the Welder", "correct": false },
      { "text": "Sally the Supervisor", "correct": false },
      { "text": "Betty the Boss", "correct": false }
    ]
  },
  {
    "question": "What effect did WWII have on the overall U.S. economy?",
    "answers": [
      { "text": "Boosted the economy", "correct": true },
      { "text": "Recession", "correct": false },
      { "text": "Economic downturn", "correct": false },
      { "text": "No major impact", "correct": false }
    ]
  },
  {
    "question": "How did average family income change from the late-1930s to late-1940s?",
    "answers": [
      { "text": "It nearly doubled", "correct": true },
      { "text": "It remained unchanged", "correct": false },
      { "text": "It decreased", "correct": false },
      { "text": "It tripled", "correct": false }
    ]
  },
  {
    "question": "What was the basic cargo ship used by the U.S. during WWII?",
    "answers": [
      { "text": "Liberty Ship", "correct": true },
      { "text": "Victory Ship", "correct": false },
      { "text": "Freighter", "correct": false },
      { "text": "Clipper", "correct": false }
    ]
  },
  {
    "question": "What types of units did most African-American servicemembers serve in during WWII?",
    "answers": [
      { "text": "Non-combat support units", "correct": true },
      { "text": "Infantry units", "correct": false },
      { "text": "Combat units", "correct": false },
      { "text": "Air combat units", "correct": false }
    ]
  },
  {
    "question": "What early battle in the North Africa campaign in 1942 revealed the lack of U.S. military preparation?",
    "answers": [
      { "text": "Battle of Kasserine Pass", "correct": true },
      { "text": "Battle of El Alamein", "correct": false },
      { "text": "Battle of Tobruk", "correct": false },
      { "text": "Battle of Sicily", "correct": false }
    ]
  },
  {
    "question": "What army organization, created in 1943, made women part of the Regular Army?",
    "answers": [
      { "text": "Women’s Army Corps (WAC)", "correct": true },
      { "text": "Army Nurses Corps", "correct": false },
      { "text": "Women's Naval Reserve", "correct": false },
      { "text": "Women's Combat Unit", "correct": false }
    ]
  },
  {
    "question": "What was the turning point of the war in the Pacific?",
    "answers": [
      { "text": "Battle of Midway", "correct": true },
      { "text": "Battle of Coral Sea", "correct": false },
      { "text": "Battle of Iwo Jima", "correct": false },
      { "text": "Battle of Okinawa", "correct": false }
    ]
  },
  {
    "question": "What type of critical naval vessel was not present during the Japanese attack on Pearl Harbor?",
    "answers": [
      { "text": "Aircraft carriers", "correct": true },
      { "text": "Battleships", "correct": false },
      { "text": "Destroyers", "correct": false },
      { "text": "Submarines", "correct": false }
    ]
  },
  {
    "question": "What was the significance of capturing the Mariana islands (Tinian, Guam, and Saipan)?",
    "answers": [
      { "text": "It placed B-29 bombers within range of Japan", "correct": true },
      { "text": "It cut off Japanese supplies", "correct": false },
      { "text": "It provided staging areas for invasions", "correct": false },
      { "text": "It diverted enemy resources", "correct": false }
    ]
  },
  {
    "question": "What did the Japanese do in response to the 1942 Doolittle raid?",
    "answers": [
      { "text": "Changed their war strategy", "correct": true },
      { "text": "Retreated from China", "correct": false },
      { "text": "Increased offensive attacks", "correct": false },
      { "text": "Launched a counterattack", "correct": false }
    ]
  },
  {
    "question": "Which WWI weapon was not used in WWII?",
    "answers": [
      { "text": "Poison gas", "correct": true },
      { "text": "Machine guns", "correct": false },
      { "text": "Tanks", "correct": false },
      { "text": "Artillery", "correct": false }
    ]
  },
  {
    "question": "What country did Winston Churchill call the 'soft underbelly of Europe'?",
    "answers": [
      { "text": "Italy", "correct": true },
      { "text": "France", "correct": false },
      { "text": "Germany", "correct": false },
      { "text": "Spain", "correct": false }
    ]
  },
  {
    "question": "What was Executive Order 8802?",
    "answers": [
      { "text": "FDR order banning racial discrimination on government projects", "correct": true },
      { "text": "Order to intern Japanese-Americans", "correct": false },
      { "text": "Order for war production control", "correct": false },
      { "text": "Order establishing the draft", "correct": false }
    ]
  },
  {
    "question": "What two elements were used to create atomic bombs?",
    "answers": [
      { "text": "Uranium and Plutonium", "correct": true },
      { "text": "Uranium and Thorium", "correct": false },
      { "text": "Plutonium and Neptunium", "correct": false },
      { "text": "Uranium and Lithium", "correct": false }
    ]
  },
  {
    "question": "Who became president in 1945 after FDR's death?",
    "answers": [
      { "text": "Harry S Truman", "correct": true },
      { "text": "Dwight D. Eisenhower", "correct": false },
      { "text": "Franklin D. Roosevelt Jr.", "correct": false },
      { "text": "John F. Kennedy", "correct": false }
    ]
  },
  {
    "question": "What was Executive Order 9066?",
    "answers": [
      { "text": "FDR order for Japanese-American internment", "correct": true },
      { "text": "Order to mobilize women", "correct": false },
      { "text": "Order to nationalize industries", "correct": false },
      { "text": "Order to impose rationing", "correct": false }
    ]
  },
  {
    "question": "Why was the U.S. able to mobilize quickly for WWII?",
    "answers": [
      { "text": "Passed the Selective Service Act in 1940", "correct": true },
      { "text": "Invested in nuclear research", "correct": false },
      { "text": "Implemented conscription after Pearl Harbor", "correct": false },
      { "text": "Established early military alliances", "correct": false }
    ]
  },
  {
    "question": "Which home front initiative involved controlling consumption during WWII?",
    "answers": [
      { "text": "Rationing", "correct": true },
      { "text": "Scrap drives", "correct": false },
      { "text": "War bonds", "correct": false },
      { "text": "Victory gardens", "correct": false }
    ]
  },
  {
    "question": "Which home front initiative encouraged the collection of scrap metal during WWII?",
    "answers": [
      { "text": "Scrap drives", "correct": true },
      { "text": "Rationing", "correct": false },
      { "text": "Victory gardens", "correct": false },
      { "text": "War bonds", "correct": false }
    ]
  },
  {
    "question": "Which home front initiative involved citizens growing their own food during WWII?",
    "answers": [
      { "text": "Victory gardens", "correct": true },
      { "text": "Rationing", "correct": false },
      { "text": "Scrap drives", "correct": false },
      { "text": "War bonds", "correct": false }
    ]
  },
  {
    "question": "Which home front initiative raised funds through bond sales during WWII?",
    "answers": [
      { "text": "War bonds", "correct": true },
      { "text": "Rationing", "correct": false },
      { "text": "Scrap drives", "correct": false },
      { "text": "Victory gardens", "correct": false }
    ]
  },
  {
    "question": "Which feature of Cost-Plus contracts sped up the bidding process?",
    "answers": [
      { "text": "Accelerated bidding process", "correct": true },
      { "text": "Higher profit margins", "correct": false },
      { "text": "Fixed pricing", "correct": false },
      { "text": "Extended negotiations", "correct": false }
    ]
  },
  {
    "question": "Which feature of Cost-Plus contracts provided incentives for meeting production goals?",
    "answers": [
      { "text": "Incentives for meeting production goals", "correct": true },
      { "text": "Reduced production costs", "correct": false },
      { "text": "Increased material supply", "correct": false },
      { "text": "Fixed output quotas", "correct": false }
    ]
  },
  {
    "question": "Which feature of Cost-Plus contracts encouraged companies to meet deadlines?",
    "answers": [
      { "text": "Incentives for meeting deadlines", "correct": true },
      { "text": "Extended delivery times", "correct": false },
      { "text": "Reduced labor costs", "correct": false },
      { "text": "Flexible scheduling", "correct": false }
    ]
  },
  {
    "question": "Which technology using radio waves was developed to detect enemy ships?",
    "answers": [
      { "text": "Radar", "correct": true },
      { "text": "Sonar", "correct": false },
      { "text": "Infrared sensors", "correct": false },
      { "text": "Radio direction finding", "correct": false }
    ]
  },
  {
    "question": "Which technology using sound waves was developed to detect submarines?",
    "answers": [
      { "text": "Sonar", "correct": true },
      { "text": "Radar", "correct": false },
      { "text": "Magnetic detection", "correct": false },
      { "text": "Infrared scanning", "correct": false }
    ]
  },
  {
    "question": "Which improved naval weapon was developed to combat submarines?",
    "answers": [
      { "text": "New depth charges", "correct": true },
      { "text": "Torpedoes", "correct": false },
      { "text": "Naval mines", "correct": false },
      { "text": "Anti-ship missiles", "correct": false }
    ]
  },
  {
    "question": "What group was interned in U.S. camps during the war?",
    "answers": [
      { "text": "Japanese-Americans", "correct": true },
      { "text": "Italian-Americans", "correct": false },
      { "text": "German-Americans", "correct": false },
      { "text": "Jewish-Americans", "correct": false }
    ]
  },
  {
    "question": "Which country was a member of the BIG THREE Allied nations during WWII?",
    "answers": [
      { "text": "United States", "correct": true },
      { "text": "France", "correct": false },
      { "text": "Canada", "correct": false },
      { "text": "Australia", "correct": false }
    ]
  },
  {
    "question": "Which country was a member of the BIG THREE Allied nations during WWII?",
    "answers": [
      { "text": "Soviet Union", "correct": true },
      { "text": "China", "correct": false },
      { "text": "Italy", "correct": false },
      { "text": "Brazil", "correct": false }
    ]
  },
  {
    "question": "Which country was a member of the BIG THREE Allied nations during WWII?",
    "answers": [
      { "text": "Great Britain", "correct": true },
      { "text": "India", "correct": false },
      { "text": "Mexico", "correct": false },
      { "text": "Spain", "correct": false }
    ]
  },
  {
    "question": "How did the U.S. learn about Japanese plans to attack Midway and the Coral Sea?",
    "answers": [
      { "text": "They broke the Japanese naval code", "correct": true },
      { "text": "Diplomatic channels", "correct": false },
      { "text": "Captured enemy plans", "correct": false },
      { "text": "Local informants", "correct": false }
    ]
  },
  {
    "question": "Which U.S. region saw the greatest influx of Americans during the war?",
    "answers": [
      { "text": "Sunbelt states", "correct": true },
      { "text": "Northeast", "correct": false },
      { "text": "Midwest", "correct": false },
      { "text": "Pacific Northwest", "correct": false }
    ]
  },
  {
    "question": "What convinced Japan to surrender unconditionally in August 1945?",
    "answers": [
      { "text": "Atomic bombings of Hiroshima and Nagasaki", "correct": true },
      { "text": "Soviet declaration of war", "correct": false },
      { "text": "Blockade of Japan", "correct": false },
      { "text": "Conventional bombing of Tokyo", "correct": false }
    ]
  },
  {
    "question": "Which U.S. industry produced roughly one-third of war materiel?",
    "answers": [
      { "text": "Automobile industry", "correct": true },
      { "text": "Steel industry", "correct": false },
      { "text": "Textile industry", "correct": false },
      { "text": "Shipbuilding industry", "correct": false }
    ]
  },
  {
    "question": "What was the code name for the Allied invasion of Western Europe in June 1944?",
    "answers": [
      { "text": "Operation Overlord", "correct": true },
      { "text": "Operation Torch", "correct": false },
      { "text": "Operation Market Garden", "correct": false },
      { "text": "Operation Neptune", "correct": false }
    ]
  },
  {
    "question": "What was the first peacetime draft in U.S. history?",
    "answers": [
      { "text": "Selective Service Act (1940)", "correct": true },
      { "text": "Conscription Act (1941)", "correct": false },
      { "text": "Militia Act (1939)", "correct": false },
      { "text": "Draft Act (1940)", "correct": false }
    ]
  },
  {
    "question": "How many women worked in factories during WWII?",
    "answers": [
      { "text": "2.5 million", "correct": true },
      { "text": "1 million", "correct": false },
      { "text": "3 million", "correct": false },
      { "text": "5 million", "correct": false }
    ]
  },
  {
    "question": "Why was fuel rationed on the U.S. East Coast in 1942?",
    "answers": [
      { "text": "Due to German submarine attacks on Atlantic shipping", "correct": true },
      { "text": "Shortage of oil", "correct": false },
      { "text": "Labor strikes", "correct": false },
      { "text": "High civilian demand", "correct": false }
    ]
  },
  {
    "question": "Where was the first nuclear reactor assembled?",
    "answers": [
      { "text": "University of Chicago", "correct": true },
      { "text": "Los Alamos", "correct": false },
      { "text": "Oak Ridge", "correct": false },
      { "text": "Hanford", "correct": false }
    ]
  },
  {
    "question": "Why were Allied bomber losses so high early in the war?",
    "answers": [
      { "text": "Lack of long-range fighter escorts", "correct": true },
      { "text": "Poor weather", "correct": false },
      { "text": "Inadequate training", "correct": false },
      { "text": "Faulty aircraft design", "correct": false }
    ]
  },
  {
    "question": "Which Pacific battle forced Japan onto the defensive for the remainder of WWII?",
    "answers": [
      { "text": "Battle of Midway", "correct": true },
      { "text": "Battle of Iwo Jima", "correct": false },
      { "text": "Battle of Guadalcanal", "correct": false },
      { "text": "Battle of Okinawa", "correct": false }
    ]
  },
  {
    "question": "Which figure was the scientific director of the Manhattan Project?",
    "answers": [
      { "text": "J. Robert Oppenheimer", "correct": true },
      { "text": "Albert Einstein", "correct": false },
      { "text": "Enrico Fermi", "correct": false },
      { "text": "Niels Bohr", "correct": false }
    ]
  },
  {
    "question": "Which figure was a prominent labor and civil rights leader during WWII?",
    "answers": [
      { "text": "Philip Randolph", "correct": true },
      { "text": "Martin Luther King Jr.", "correct": false },
      { "text": "Thurgood Marshall", "correct": false },
      { "text": "Malcolm X", "correct": false }
    ]
  },
  {
    "question": "Which general led U.S. forces in the Pacific?",
    "answers": [
      { "text": "Douglas MacArthur", "correct": true },
      { "text": "George Patton", "correct": false },
      { "text": "Chester Nimitz", "correct": false },
      { "text": "Omar Bradley", "correct": false }
    ]
  },
  {
    "question": "Which admiral commanded the U.S. Pacific Fleet during WWII?",
    "answers": [
      { "text": "Chester Nimitz", "correct": true },
      { "text": "Isoroku Yamamoto", "correct": false },
      { "text": "William Halsey", "correct": false },
      { "text": "John Doolittle", "correct": false }
    ]
  },
  {
    "question": "Which physicist's theories influenced nuclear development?",
    "answers": [
      { "text": "Albert Einstein", "correct": true },
      { "text": "Richard Feynman", "correct": false },
      { "text": "Max Planck", "correct": false },
      { "text": "Werner Heisenberg", "correct": false }
    ]
  },
  {
    "question": "Which project developed the atomic bomb during WWII?",
    "answers": [
      { "text": "Manhattan Project", "correct": true },
      { "text": "Project Mercury", "correct": false },
      { "text": "Project Apollo", "correct": false },
      { "text": "Project Gemini", "correct": false }
    ]
  },
  {
    "question": "What was the code name for the first nuclear test?",
    "answers": [
      { "text": "Trinity", "correct": true },
      { "text": "Operation Crossroads", "correct": false },
      { "text": "Test Zero", "correct": false },
      { "text": "Project Pluto", "correct": false }
    ]
  },
  {
    "question": "Which were the codenames for the atomic bombs dropped on Japan?",
    "answers": [
      { "text": "Little Boy & Fat Man", "correct": true },
      { "text": "Big Boy & Thin Man", "correct": false },
      { "text": "Little Man & Big Man", "correct": false },
      { "text": "Red Boy & Blue Boy", "correct": false }
    ]
  },
  {
    "question": "Which facility was key for uranium enrichment during WWII?",
    "answers": [
      { "text": "Oak Ridge", "correct": true },
      { "text": "Los Alamos", "correct": false },
      { "text": "Hanford", "correct": false },
      { "text": "Pantex", "correct": false }
    ]
  },
  {
    "question": "Which site was used for plutonium production in the Manhattan Project?",
    "answers": [
      { "text": "Hanford", "correct": true },
      { "text": "Oak Ridge", "correct": false },
      { "text": "Los Alamos", "correct": false },
      { "text": "Sandia", "correct": false }
    ]
  },
  {
    "question": "Which agency coordinated war production and resources on the U.S. home front?",
    "answers": [
      { "text": "Office of War Mobilization", "correct": true },
      { "text": "Office of Price Administration", "correct": false },
      { "text": "War Labor Board", "correct": false },
      { "text": "Office of Economic Stabilization", "correct": false }
    ]
  },
  {
    "question": "Which agency aimed to control inflation during WWII?",
    "answers": [
      { "text": "Office of Economic Stabilization", "correct": true },
      { "text": "Office of War Mobilization", "correct": false },
      { "text": "War Labor Board", "correct": false },
      { "text": "Office of Price Administration", "correct": false }
    ]
  },
  {
    "question": "Which agency was responsible for price controls during the war?",
    "answers": [
      { "text": "Office of Price Administration", "correct": true },
      { "text": "Office of Economic Stabilization", "correct": false },
      { "text": "Office of War Mobilization", "correct": false },
      { "text": "War Labor Board", "correct": false }
    ]
  },
  {
    "question": "Which board mediated labor disputes during WWII?",
    "answers": [
      { "text": "War Labor Board", "correct": true },
      { "text": "Office of Price Administration", "correct": false },
      { "text": "Office of Economic Stabilization", "correct": false },
      { "text": "Office of War Mobilization", "correct": false }
    ]
  },
  {
    "question": "Which term refers to citizen efforts to grow food during the war?",
    "answers": [
      { "text": "Victory Garden", "correct": true },
      { "text": "Scrap drives", "correct": false },
      { "text": "War bonds", "correct": false },
      { "text": "Rationing", "correct": false }
    ]
  }
];
