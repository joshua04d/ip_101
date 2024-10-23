const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_CLERK_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course Tutorial on Following details with field as Course Name, Description, Along with Chapter Name, About, Duration: Category: 'Programming', Topic: Python , Level: Basic, Duration: 1 hours, NoOfChapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This course provides a comprehensive introduction to Python programming for beginners. Learn the fundamentals of Python syntax, data types, control flow, and functions. Build your foundational knowledge to write simple Python programs.\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Introduction to Python\",\n      \"about\": \"Understanding what Python is, its history, and why it's a popular choice for programming.\",\n      \"duration\": \"15 minutes\",\n      \"category\": \"Programming\",\n      \"topic\": \"Python\",\n      \"level\": \"Basic\"\n    },\n    {\n      \"chapterName\": \"Setting up your Python Environment\",\n      \"about\": \"Installing Python, choosing an IDE or text editor, and running your first Python program.\",\n      \"duration\": \"20 minutes\",\n      \"category\": \"Programming\",\n      \"topic\": \"Python\",\n      \"level\": \"Basic\"\n    },\n    {\n      \"chapterName\": \"Python Basics: Variables, Data Types, and Operators\",\n      \"about\": \"Learning about variables, different data types (integers, floats, strings, booleans), and using basic operators.\",\n      \"duration\": \"25 minutes\",\n      \"category\": \"Programming\",\n      \"topic\": \"Python\",\n      \"level\": \"Basic\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements and Loops\",\n      \"about\": \"Understanding how to control the flow of your program using if-else statements and for/while loops.\",\n      \"duration\": \"20 minutes\",\n      \"category\": \"Programming\",\n      \"topic\": \"Python\",\n      \"level\": \"Basic\"\n    },\n    {\n      \"chapterName\": \"Functions and Modules\",\n      \"about\": \"Defining functions to organize your code, reusing code blocks, and using built-in and custom modules.\",\n      \"duration\": \"20 minutes\",\n      \"category\": \"Programming\",\n      \"topic\": \"Python\",\n      \"level\": \"Basic\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  


    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in detail on Topic: Beginner's Guide to Dance - Exploring Rhythm and Timing in JSON format with list of array with fields as title, description in detail, Code Example (Code field in <precode> format) if applicable."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Understanding Rhythm\",\n    \"description\": \"Rhythm is the foundation of dance. It's the pattern of sounds and silences in music, creating a pulse or beat. Understanding rhythm involves recognizing these patterns and moving your body in sync with them.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Counting the Beat\",\n    \"description\": \"Most music is divided into measures, with a specific number of beats in each measure.  To count the beat, listen for the underlying pulse and count out loud. Common time signatures (the way beats are organized) are 4/4 (four beats per measure) and 3/4 (three beats per measure).\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Feeling the Downbeat\",\n    \"description\": \"The downbeat is the first beat of each measure. It's usually the strongest beat and often marked by a stronger accent in the music.  Feel the downbeat and let it guide your movement.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Learning Basic Rhythmic Patterns\",\n    \"description\": \"There are many rhythmic patterns in dance. Start with simple ones like: \\n\\n* **Step-Step-Step-Step:**  Move one foot at a time, stepping on every beat. \\n* **Step-Touch-Step-Touch:**  Step on the first and third beat, then touch your other foot on the second and fourth beat. \\n* **Step-Ball-Change:** Step on the first beat, rise onto the ball of your foot on the second, and change your weight to the other foot on the third beat.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Timing in Dance\",\n    \"description\": \"Timing is the ability to coordinate your movements with the music. It's about executing steps and movements at the right time in the musical phrase. Good timing is essential for making your dancing look smooth and controlled.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Practice with Counting and Clapping\",\n    \"description\": \"Practice counting the beats in different songs and clap along to the rhythm. This helps you internalize the beat and develop your timing.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Using Visual Cues\",\n    \"description\": \"Many dance instructors use visual cues, such as arm gestures or specific footwork patterns, to help you understand and execute the correct timing.  Pay attention to these cues and practice following them.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Rhythm and Timing Exercises\",\n    \"description\": \"Here are some exercises to improve your rhythm and timing: \\n\\n* **Marching in Place:**  March in place, counting the beats out loud. This helps you feel the downbeat and the rhythm of the music. \\n* **Stepping to a Metronome:**  Use a metronome to practice moving your feet at a specific tempo. This improves your accuracy and consistency in your timing. \\n* **Improvisational Movement:**  Experiment with different movement patterns while staying in time with the music. This develops your creativity and rhythm.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Remember: Rhythm is Fun!\",\n    \"description\": \"Rhythm is a powerful element in dance. It allows you to express your individuality and connect with the music in a unique way. Embrace the challenge of understanding rhythm and timing, and enjoy the journey of learning to dance!\",\n    \"code\": \"\"\n  }\n]\n```"},
          ],
        },
      ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

