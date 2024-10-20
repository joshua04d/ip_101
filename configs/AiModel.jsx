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
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

