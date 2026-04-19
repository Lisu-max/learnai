import type { CourseContent } from "../../types";

const content: CourseContent = {
  slug: "ia-de-a-a-z",
  chapters: [
    {
      number: 1,
      title: "What is Artificial Intelligence?",
      description: "Understanding the basics of AI, its history, and how it works.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "What is Artificial Intelligence?" },
        { type: "paragraph", content: "Artificial Intelligence (AI) is a field of computer science that aims to create systems capable of performing tasks that normally require human intelligence. These tasks include speech recognition, decision-making, language translation, visual perception, and much more." },
        { type: "paragraph", content: "AI is not limited to a single algorithm or technique — it is a broad set of methods, approaches, and technologies that work together to simulate certain aspects of human cognition." },
        { type: "callout", content: "The term \"Artificial Intelligence\" was coined in 1956 at the Dartmouth Conference, organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon." },
        { type: "video", videoId: { fr: "fENw2n2FmpQ", en: "ad79nYk2keg" },
      videoDurationMinutes: 5, label: "Artificial Intelligence in 5 Minutes" },
        { type: "heading", content: "Major Milestones in AI" },
        { type: "paragraph", content: "1943: Warren McCulloch and Walter Pitts create the first mathematical model of an artificial neuron. 1950: Alan Turing publishes his landmark paper \"Computing Machinery and Intelligence\" and proposes the famous Turing Test. 1956: The Dartmouth Conference marks the official birth of AI." },
        { type: "paragraph", content: "2012: AlexNet revolutionizes computer vision. 2016: AlphaGo defeats the world champion at Go. 2017: Google publishes \"Attention Is All You Need\", introducing the Transformer architecture." },
        { type: "paragraph", content: "2022–2023: ChatGPT brings AI to the general public. 2024–2025: Multimodal models become the standard. 2026: GPT-5.4, Claude 4.6, and Gemini 3.1 reach one million context tokens. Autonomous AI agents with Computer Use transform workflows." },
        { type: "heading", content: "How Does AI Work?" },
        { type: "paragraph", content: "At its most fundamental level, AI works by using algorithms to analyze data, identify patterns, and make decisions based on those patterns." },
        { type: "paragraph", content: "Data collection is the first step: AI needs large amounts of data to learn from. Next comes training: the algorithm adjusts its parameters to minimize errors. Finally, inference: the trained model can make predictions on new data." },
        { type: "key-point", content: "AI is not \"intelligent\" in the human sense. It excels at the specific tasks it has been trained on, but it does not possess consciousness, emotions, or genuine understanding." },
        { type: "summary", items: [
          "AI is a set of techniques for simulating human intelligence",
          "The field has gone through cycles of enthusiasm and 'AI winters'",
          "In 2026, AI is integrated into virtually every sector",
          "AI works through data collection, training, and inference",
          "It excels at specific tasks but has no consciousness"
        ]},
      ],
      quiz: [
        {
          question: "In what year was the term \"Artificial Intelligence\" coined?",
          options: ["1943", "1950", "1956", "1969"],
          correctIndex: 2,
          explanation: "The term \"Artificial Intelligence\" was coined in 1956 at the Dartmouth Conference, considered the founding moment of AI as an academic discipline."
        },
        {
          question: "What event marked the democratization of AI for the general public?",
          options: ["AlphaGo's victory in 2016", "The launch of ChatGPT in 2022", "The release of GPT-5.4 in 2026", "The Dartmouth Conference in 1956"],
          correctIndex: 1,
          explanation: "ChatGPT, launched by OpenAI in late 2022, was the first AI tool to reach hundreds of millions of users and made AI accessible to the general public."
        },
        {
          question: "What is the first step in how an AI system works?",
          options: ["Inference", "Optimization", "Data collection", "Deployment"],
          correctIndex: 2,
          explanation: "Data collection is the first step. AI needs large amounts of data to learn the patterns that will allow it to make predictions."
        },
        {
          question: "In 2026, AI is capable of:",
          options: ["Feeling emotions like a human", "Being self-aware", "Excelling at specific tasks it has been trained on", "Truly understanding the meaning of words"],
          correctIndex: 2,
          explanation: "AI excels at specific tasks (text generation, image recognition, etc.) but does not possess consciousness, emotions, or genuine understanding."
        },
      ],
    },
    {
      number: 2,
      title: "The Fundamentals of Machine Learning",
      description: "Discover the 3 types of machine learning and their applications.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "What is Machine Learning?" },
        { type: "paragraph", content: "Machine Learning is a branch of AI that enables computers to learn from data without being explicitly programmed for each task. Instead of writing specific rules, you provide the system with examples and it discovers the patterns on its own." },
        { type: "paragraph", content: "It is the technology at the heart of most modern AI applications: Netflix recommendations, spam detection, facial recognition, automatic translation, and much more." },
        { type: "heading", content: "The 3 Types of Learning" },
        { type: "subheading", content: "Supervised Learning" },
        { type: "paragraph", content: "The algorithm learns from labeled examples. For instance, it is shown thousands of photos of cats and dogs, each labeled \"cat\" or \"dog\", and it learns to tell them apart. This is the most common type, used for classification, prediction, and detection." },
        { type: "subheading", content: "Unsupervised Learning" },
        { type: "paragraph", content: "The algorithm discovers hidden structures in unlabeled data. It identifies groups (clustering), anomalies, or patterns without being told what to look for. Used for customer segmentation, fraud detection, and dimensionality reduction." },
        { type: "subheading", content: "Reinforcement Learning" },
        { type: "paragraph", content: "An agent learns to make decisions by interacting with an environment. It receives positive or negative rewards based on its actions. This is what enabled AlphaGo to defeat the best Go players, and it is used for autonomous vehicles and fine-tuning LLMs (RLHF)." },
        { type: "tip", content: "To remember: Supervised = shown the answer. Unsupervised = figures it out alone. Reinforcement = learns by trial and error." },
        { type: "heading", content: "Applications of Machine Learning" },
        { type: "paragraph", content: "ML is everywhere: price prediction, medical diagnosis, spam filtering, product recommendations, automatic translation, speech recognition, autonomous driving, algorithmic trading, and ad optimization." },
        { type: "summary", items: [
          "Machine Learning allows machines to learn from data",
          "3 types: supervised (with examples), unsupervised (no labels), reinforcement (trial and error)",
          "Supervised learning is the most common",
          "ML is at the core of the majority of modern AI applications",
          "RLHF (Reinforcement Learning from Human Feedback) is used to train LLMs"
        ]},
      ],
      quiz: [
        {
          question: "What is Machine Learning?",
          options: ["A programming language", "A branch of AI that learns from data", "A type of processor", "A graphic design software"],
          correctIndex: 1,
          explanation: "Machine Learning is a branch of AI that enables systems to learn automatically from data without being explicitly programmed for each task."
        },
        {
          question: "In supervised learning, the training data is:",
          options: ["Unlabeled", "Randomly generated", "Labeled with the correct answer", "Created by the algorithm itself"],
          correctIndex: 2,
          explanation: "Supervised learning uses labeled data (with the correct answer) so that the algorithm learns to associate inputs with outputs."
        },
        {
          question: "AlphaGo defeated the world Go champion using which type of learning?",
          options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Deep learning only"],
          correctIndex: 2,
          explanation: "AlphaGo used reinforcement learning, playing millions of games against itself to learn the best strategies."
        },
        {
          question: "What does RLHF stand for?",
          options: ["Real Language High Frequency", "Reinforcement Learning from Human Feedback", "Recursive Learning for Huge Files", "Rapid Learning and High Fidelity"],
          correctIndex: 1,
          explanation: "RLHF (Reinforcement Learning from Human Feedback) is the technique used to fine-tune large language models using feedback from human evaluators."
        },
      ],
    },
    {
      number: 3,
      title: "Deep Learning Explained Simply",
      description: "Neural networks, layers, and why deep learning changed everything.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "From Biological Neurons to Artificial Neurons" },
        { type: "paragraph", content: "Deep Learning is inspired by how the human brain works. Just as our brain is made up of billions of interconnected neurons, an artificial neural network is composed of layers of mathematical \"neurons\" that process information." },
        { type: "paragraph", content: "Each artificial neuron receives inputs, multiplies them by weights, applies an activation function, and produces an output. Simple on its own, but the power emerges from combining millions of these neurons in successive layers." },
        { type: "heading", content: "The Architecture of a Neural Network" },
        { type: "paragraph", content: "A typical neural network includes: an input layer (receives raw data), hidden layers (process and transform the information), and an output layer (produces the final result)." },
        { type: "key-point", content: "The \"deep\" in \"deep learning\" refers to the number of hidden layers. The more layers there are, the more complex and abstract representations the network can learn." },
        { type: "paragraph", content: "Modern networks like GPT-5.4 can have hundreds of layers and trillions of parameters. Training requires thousands of GPUs working in parallel for weeks." },
        { type: "heading", content: "Why Deep Learning Changed Everything" },
        { type: "paragraph", content: "Three factors converged to revolutionize AI: 1) The availability of massive data (the Internet, smartphones). 2) Computing power (GPUs, TPUs). 3) Algorithmic advances (Transformers in 2017)." },
        { type: "paragraph", content: "In 2012, AlexNet demonstrated that deep learning could dominate computer vision. Since then, deep learning has successively revolutionized NLP (translation, text generation), image generation (DALL-E, Midjourney), video (Sora), and even scientific discovery (AlphaFold for proteins)." },
        { type: "callout", content: "The Transformer architecture, introduced by Google in 2017 in the paper \"Attention Is All You Need\", is the foundation of all current large language models (GPT, Claude, Gemini)." },
        { type: "video", videoId: { fr: "z-czi5DC2d4", en: "aircAruvnKk" },
      videoDurationMinutes: 19, label: "How a Neural Network Works (3Blue1Brown)" },
        { type: "summary", items: [
          "Deep Learning is inspired by the brain, using layers of artificial neurons",
          "\"Deep\" = many hidden layers for complex representations",
          "3 factors: massive data + computing power + Transformers",
          "AlexNet (2012) started the revolution; Transformers (2017) accelerated it",
          "Deep Learning powers GPT-5.4, Claude 4.6, Midjourney, Sora, and more"
        ]},
      ],
      quiz: [
        {
          question: "What inspired Deep Learning?",
          options: ["Electronic circuits", "The functioning of the human brain", "Quantum mechanics", "Genetic algorithms"],
          correctIndex: 1,
          explanation: "Deep Learning is directly inspired by the human brain, with layers of artificial neurons that mimic biological neurons."
        },
        {
          question: "What does \"deep\" mean in \"Deep Learning\"?",
          options: ["The learning is very slow", "The network uses a lot of data", "The network has many hidden layers", "The AI understands things deeply"],
          correctIndex: 2,
          explanation: "\"Deep\" refers to the number of hidden layers in the neural network. More layers allow the model to learn more abstract and complex representations."
        },
        {
          question: "Which architecture is the foundation of GPT, Claude, and Gemini?",
          options: ["CNN (Convolutional Neural Network)", "RNN (Recurrent Neural Network)", "Transformer", "GAN (Generative Adversarial Network)"],
          correctIndex: 2,
          explanation: "The Transformer architecture, introduced in 2017 by Google in \"Attention Is All You Need\", is the foundation of all current large language models."
        },
        {
          question: "What are the 3 factors that enabled the Deep Learning revolution?",
          options: ["Money + marketing + patents", "Massive data + computing power + algorithmic advances", "Internet + smartphones + social media", "Governments + universities + companies"],
          correctIndex: 1,
          explanation: "The convergence of massive data (the Internet), computing power (GPUs), and algorithmic advances (Transformers) made Deep Learning extremely powerful."
        },
      ],
    },
    {
      number: 4,
      title: "Natural Language Processing (NLP)",
      description: "How machines understand and generate human text.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "NLP: Teaching Machines to Understand Language" },
        { type: "paragraph", content: "Natural Language Processing (NLP) is the branch of AI dedicated to interaction between computers and human language. It is the technology that allows ChatGPT to understand your questions and respond to them, Google Translate to translate languages, and Siri to understand your voice commands." },
        { type: "heading", content: "The Processing Steps" },
        { type: "paragraph", content: "NLP involves several steps: tokenization (splitting text into pieces), syntactic analysis (grammar), semantic analysis (meaning), and generation (producing new text)." },
        { type: "key-point", content: "Tokenization is fundamental: it determines how the model \"sees\" your text. The word \"intelligence\" might be a single token, while a rare word may require multiple tokens." },
        { type: "heading", content: "The Evolution: From Rules to Transformers" },
        { type: "paragraph", content: "NLP has evolved from manual rule-based systems (1960–2000) to statistical methods (2000–2017), then to the Transformer era (2017–present). Pre-trained models like BERT, GPT, and Claude have revolutionized the field by learning language structures from billions of texts." },
        { type: "summary", items: [
          "NLP enables machines to understand and generate human language",
          "Steps: tokenization, syntactic analysis, semantic analysis, generation",
          "Transformers have revolutionized NLP since 2017",
          "Modern LLMs are pre-trained on billions of texts"
        ]},
      ],
      quiz: [
        {
          question: "What does NLP stand for?",
          options: ["Neural Language Processing", "Natural Language Programming", "Natural Language Processing", "Network Learning Protocol"],
          correctIndex: 2,
          explanation: "NLP stands for Natural Language Processing, the branch of AI dedicated to interaction between computers and human language."
        },
        {
          question: "What is tokenization?",
          options: ["Encrypting text for security", "Splitting text into pieces (tokens)", "Converting text to binary code", "Compressing text for storage"],
          correctIndex: 1,
          explanation: "Tokenization is the process of splitting text into pieces (tokens) that the model can process. It is the first step in NLP processing."
        },
        {
          question: "What revolution transformed NLP starting in 2017?",
          options: ["Convolutional networks", "Transformers", "SQL databases", "Cloud computing"],
          correctIndex: 1,
          explanation: "The Transformer architecture, introduced in 2017, revolutionized NLP by enabling models to process context far more effectively."
        },
        {
          question: "ChatGPT primarily uses which NLP technology?",
          options: ["Manual grammar rules", "Classical statistical methods", "A pre-trained language model (LLM)", "An electronic dictionary"],
          correctIndex: 2,
          explanation: "ChatGPT is based on a LLM (Large Language Model), a language model pre-trained on billions of texts and then fine-tuned using RLHF."
        },
      ],
    },
    {
      number: 5,
      title: "Computer Vision",
      description: "How machines analyze and understand images and videos.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "Computer Vision" },
        { type: "paragraph", content: "Computer vision allows machines to \"see\" and interpret images and videos. Facial recognition, object detection, medical imaging, autonomous vehicles — this technology is everywhere." },
        { type: "paragraph", content: "CNNs (Convolutional Neural Networks) revolutionized this field in 2012. Today, multimodal models like GPT-5.4 and Gemini 3.1 combine vision and language to analyze images and answer questions about them." },
        { type: "summary", items: [
          "Computer vision allows machines to analyze images and videos",
          "CNNs are the foundation of modern vision systems",
          "Multimodal models combine vision and language",
          "Applications: facial recognition, medical imaging, autonomous vehicles"
        ]},
      ],
      quiz: [
        {
          question: "Which type of network specializes in image analysis?",
          options: ["RNN", "CNN", "GAN", "MLP"],
          correctIndex: 1,
          explanation: "CNNs (Convolutional Neural Networks) specialize in image processing through their convolution filters that detect visual patterns."
        },
        {
          question: "What does \"multimodal\" mean for an AI model?",
          options: ["It runs on multiple computers", "It can process different types of data (text, image, audio)", "It was trained in multiple countries", "It can speak multiple languages"],
          correctIndex: 1,
          explanation: "A multimodal model can process and generate different types of data: text, images, audio, video. GPT-5.4 and Gemini 3.1 are multimodal."
        },
        {
          question: "AlexNet revolutionized computer vision in which year?",
          options: ["2006", "2012", "2017", "2020"],
          correctIndex: 1,
          explanation: "AlexNet won the ImageNet competition in 2012, demonstrating the superiority of deep learning for computer vision."
        },
        {
          question: "Which application does NOT use computer vision?",
          options: ["Facial recognition", "Text translation", "Autonomous vehicles", "Medical imaging"],
          correctIndex: 1,
          explanation: "Text translation falls under NLP (Natural Language Processing), not computer vision."
        },
      ],
    },
    {
      number: 6,
      title: "Language Models",
      description: "GPT-5.4, Claude 4.6, Gemini 3.1 — how LLMs work.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Large Language Models (LLMs)" },
        { type: "paragraph", content: "LLMs are massive neural networks trained on enormous quantities of text to predict the next word in a sequence. This seemingly simple task, repeated trillions of times, gives rise to surprising capabilities: reasoning, programming, creativity, and even a form of \"understanding\"." },
        { type: "subheading", content: "GPT-5.4 (OpenAI)" },
        { type: "paragraph", content: "Released on March 5, 2026, GPT-5.4 is available in three variants: Standard, Thinking (advanced reasoning), and Pro (maximum capability). Context window of 1.05 million tokens, native Computer Use, 33% fewer hallucinations than GPT-5.2." },
        { type: "subheading", content: "Claude 4.6 (Anthropic)" },
        { type: "paragraph", content: "Claude Opus 4.6, launched February 5, 2026, offers 1 million tokens of context, a task horizon of 14.5 hours, and the top score on the Finance Agent benchmark. Claude stands out for its precision and honesty." },
        { type: "subheading", content: "Gemini 3.1 (Google DeepMind)" },
        { type: "paragraph", content: "Gemini 3.1 Pro, released in February 2026, is natively multimodal with 1 million tokens of context and a score of 77.1% on ARC-AGI-2. Integrated across the entire Google ecosystem." },
        { type: "summary", items: [
          "LLMs predict the next word — this simplicity gives rise to complex capabilities",
          "GPT-5.4: 3 variants, native Computer Use, 1.05M tokens",
          "Claude 4.6: precision, honesty, 14.5h autonomy, 1M tokens",
          "Gemini 3.1: native multimodal, 77.1% ARC-AGI-2, Google integration",
          "All leading LLMs reached 1 million context tokens in 2026"
        ]},
      ],
      quiz: [
        {
          question: "How do LLMs primarily learn?",
          options: ["By memorizing answers", "By predicting the next word in a sequence", "By copying web pages", "By chatting with humans"],
          correctIndex: 1,
          explanation: "LLMs are trained to predict the next word in a text sequence. This task, repeated trillions of times, gives rise to reasoning and generation capabilities."
        },
        {
          question: "How many context tokens do leading LLMs support in 2026?",
          options: ["32,000", "128,000", "500,000", "1 million+"],
          correctIndex: 3,
          explanation: "As of March 2026, GPT-5.4, Claude 4.6, and Gemini 3.1 all support approximately 1 million context tokens."
        },
        {
          question: "Which model has the longest task completion horizon?",
          options: ["GPT-5.4 Pro", "Claude Opus 4.6", "Gemini 3.1 Pro", "Qwen 3.5"],
          correctIndex: 1,
          explanation: "Claude Opus 4.6 can sustain a task for 14.5 hours straight — the longest horizon of any AI model."
        },
        {
          question: "What does \"Computer Use\" mean for an LLM?",
          options: ["The model runs on a computer", "The model can control a computer like a human", "The model consumes a lot of resources", "The model only runs locally"],
          correctIndex: 1,
          explanation: "Computer Use allows the model to control a computer (click, type, browse) just like a human would, paving the way for autonomous agents."
        },
      ],
    },
    {
      number: 7,
      title: "Generative AI",
      description: "How AI creates text, images, videos, and music.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Generative AI: Creating Something New" },
        { type: "paragraph", content: "Generative AI refers to systems capable of creating new content: text, images, videos, music, code. It is the most visible and widely used form of AI in 2026." },
        { type: "subheading", content: "Text Generation" },
        { type: "paragraph", content: "LLMs like GPT-5.4 and Claude 4.6 generate text of a quality often indistinguishable from a human writer: articles, emails, code, scripts, poems, reports." },
        { type: "subheading", content: "Image Generation" },
        { type: "paragraph", content: "Midjourney V7/V8, DALL-E 3, and Stable Diffusion transform text descriptions into images. Midjourney excels in artistic aesthetics, DALL-E in embedded text, and Stable Diffusion in full control (open source)." },
        { type: "subheading", content: "Video and Audio Generation" },
        { type: "paragraph", content: "OpenAI's Sora 2 generates videos with synchronized dialogue and realistic physics. ElevenLabs produces voices indistinguishable from human voices. Suno creates complete music with vocals, instruments, and arrangement." },
        { type: "summary", items: [
          "Generative AI creates new content: text, images, videos, music",
          "Text: GPT-5.4, Claude 4.6 — professional quality",
          "Images: Midjourney V7/V8, DALL-E 3, Stable Diffusion",
          "Video: Sora 2 with dialogue and sound effects",
          "Audio: ElevenLabs (voice), Suno (complete music)"
        ]},
      ],
      quiz: [
        {
          question: "What is generative AI?",
          options: ["AI that analyzes existing data", "AI that creates new content", "AI that deletes content", "AI that sorts information"],
          correctIndex: 1,
          explanation: "Generative AI is capable of creating entirely new content — text, images, videos, music, code — from descriptions or instructions."
        },
        {
          question: "Which tool excels at generating images with embedded text?",
          options: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Sora"],
          correctIndex: 1,
          explanation: "DALL-E 3 stands out for its ability to generate readable, precise text inside images, which is useful for logos, posters, and infographics."
        },
        {
          question: "Sora 2 specializes in:",
          options: ["Text generation", "Music generation", "Video generation", "Automatic translation"],
          correctIndex: 2,
          explanation: "OpenAI's Sora 2 is a video generation model that creates clips with synchronized dialogue, sound effects, and realistic physics."
        },
        {
          question: "Which tool can create complete music with vocals?",
          options: ["ElevenLabs", "Suno", "Midjourney", "ChatGPT"],
          correctIndex: 1,
          explanation: "Suno can create complete music — melody, arrangement, instruments, and vocals — from a simple text description."
        },
      ],
    },
    {
      number: 8,
      title: "AI Agents",
      description: "Autonomous systems that plan, act, and use tools.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "What is an AI Agent?" },
        { type: "paragraph", content: "An AI agent is an autonomous system that can perceive its environment, make decisions, and act to achieve goals. Unlike a simple chatbot, an agent can plan a sequence of actions, use tools, and adapt based on results." },
        { type: "paragraph", content: "In March 2026, AI agents are transforming the workplace. Claude Opus 4.6 can sustain a task for 14.5 hours. GPT-5.4 includes native Computer Use. Tools like Claude Code and Cursor Agent handle complex programming tasks." },
        { type: "heading", content: "Agent Architecture" },
        { type: "paragraph", content: "A typical agent includes: an LLM as the \"brain\" for reasoning, a set of tools (web search, code execution, file manipulation), memory, and a planning mechanism." },
        { type: "key-point", content: "The ReAct paradigm (Reasoning + Acting): the agent alternates between thinking, acting, and observing results. This loop continues until the goal is reached." },
        { type: "paragraph", content: "The MCP (Model Context Protocol), introduced by Anthropic and adopted by the industry, standardizes how agents interact with tools and external data sources." },
        { type: "summary", items: [
          "AI agents are autonomous systems capable of planning and acting",
          "They combine an LLM, tools, memory, and a planning mechanism",
          "The ReAct paradigm alternates reasoning, action, and observation",
          "MCP standardizes interaction between agents and tools",
          "Computer Use: agents control computers like humans"
        ]},
      ],
      quiz: [
        {
          question: "What distinguishes an AI agent from a chatbot?",
          options: ["An agent is faster", "An agent can plan actions and use tools", "An agent is free", "An agent does not need the Internet"],
          correctIndex: 1,
          explanation: "An AI agent can plan a sequence of actions, use external tools (search, code, files), and adapt to results — a chatbot only responds."
        },
        {
          question: "What does ReAct mean in the context of AI agents?",
          options: ["Quick reaction", "Reasoning + Acting", "Real-time Action", "Recursive Agent Technology"],
          correctIndex: 1,
          explanation: "ReAct (Reasoning + Acting) is a paradigm where the agent alternates between Thought phases, Action phases, and Observation phases."
        },
        {
          question: "What is the MCP protocol?",
          options: ["A file format", "A standard for communication between agents and tools", "A type of processor", "A programming language"],
          correctIndex: 1,
          explanation: "MCP (Model Context Protocol), created by Anthropic, standardizes how agents interact with tools and external data sources."
        },
        {
          question: "Which model can sustain a task for 14.5 hours?",
          options: ["GPT-5.4 Pro", "Gemini 3.1 Ultra", "Claude Opus 4.6", "Qwen 3.5"],
          correctIndex: 2,
          explanation: "Claude Opus 4.6 has the longest task completion horizon on the market: 14.5 hours of autonomous execution."
        },
      ],
    },
    {
      number: 9,
      title: "AI Ethics",
      description: "Bias, transparency, privacy, deepfakes — the major ethical challenges.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "The Ethical Challenges of AI" },
        { type: "paragraph", content: "AI raises fundamental ethical questions: algorithmic bias, decision transparency, privacy, impact on employment, deepfakes, and the concentration of technological power." },
        { type: "subheading", content: "Algorithmic Bias" },
        { type: "paragraph", content: "AI systems learn from human data that contains biases. A recruitment system trained on historical data could discriminate against certain groups. The solution: diversify the data, regularly audit models, and maintain human oversight." },
        { type: "subheading", content: "Deepfakes and Misinformation" },
        { type: "paragraph", content: "Generative AI can create misleading content: fake videos, fake audio, fake images of real people. Fighting deepfakes relies on watermarking, automated detection, and public education." },
        { type: "heading", content: "Regulation in 2026" },
        { type: "paragraph", content: "The European AI Act imposes obligations based on the risk level of AI systems. The GDPR governs the processing of personal data. These regulatory frameworks aim to balance innovation with the protection of citizens." },
        { type: "summary", items: [
          "AI inherits biases present in training data",
          "Deepfakes are a growing threat to public trust",
          "The European AI Act classifies AI systems by risk level",
          "Human oversight remains essential for ethical AI",
          "Education and transparency are the best safeguards"
        ]},
      ],
      quiz: [
        {
          question: "Where do biases in AI systems come from?",
          options: ["The source code", "The training data", "The hardware", "End users"],
          correctIndex: 1,
          explanation: "Biases primarily come from training data. If the data reflects human prejudices, the model will reproduce them."
        },
        {
          question: "What is a deepfake?",
          options: ["A bug in an AI program", "A fake piece of media generated by AI", "A type of ransomware", "A data compression technique"],
          correctIndex: 1,
          explanation: "A deepfake is a fake piece of media (video, audio, image) generated by AI, realistic enough to deceive viewers."
        },
        {
          question: "What does the European AI Act regulate?",
          options: ["The prices of AI tools", "The risk level of AI systems", "The speed of processors", "Technology patents"],
          correctIndex: 1,
          explanation: "The European AI Act classifies AI systems by risk level (minimal, limited, high, unacceptable) and imposes proportional obligations."
        },
        {
          question: "What is the best safeguard against AI bias?",
          options: ["Banning AI", "Diversifying data and regularly auditing models", "Only using open-source models", "Not using personal data"],
          correctIndex: 1,
          explanation: "Diversifying training data, regularly auditing models, and maintaining human oversight are the recommended practices."
        },
      ],
    },
    {
      number: 10,
      title: "AI in Everyday Life",
      description: "How AI is transforming healthcare, education, finance, and transportation.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "AI in Daily Life" },
        { type: "paragraph", content: "AI is already everywhere in our daily lives, often without us realizing it: content recommendations, voice assistants, GPS navigation, spam filtering, instant translation, and facial recognition to unlock your phone." },
        { type: "paragraph", content: "In healthcare, AI detects cancers earlier than doctors. In education, it personalizes learning. In finance, it detects fraud in real time. In transportation, it optimizes routes and is developing autonomous vehicles." },
        { type: "summary", items: [
          "AI is present in most of our daily interactions",
          "Healthcare: early diagnosis, drug discovery",
          "Education: personalized learning, 24/7 AI tutors",
          "Finance: fraud detection, algorithmic trading",
          "Transportation: optimized navigation, autonomous vehicles"
        ]},
      ],
      quiz: [
        {
          question: "In which field can AI detect diseases earlier than doctors?",
          options: ["Education", "Finance", "Healthcare", "Transportation"],
          correctIndex: 2,
          explanation: "In healthcare, AI can detect certain cancers in medical images with greater accuracy than human doctors."
        },
        {
          question: "How is AI used in finance?",
          options: ["To print banknotes", "To detect fraud in real time", "To count coins", "To design ATMs"],
          correctIndex: 1,
          explanation: "AI analyzes transactions in real time to detect suspicious patterns and prevent banking fraud."
        },
        {
          question: "Which AI technology is used to unlock your phone?",
          options: ["NLP", "Computer vision (facial recognition)", "Reinforcement learning", "Text generation"],
          correctIndex: 1,
          explanation: "Facial recognition uses computer vision to analyze your facial features and unlock the device."
        },
        {
          question: "How does AI improve education?",
          options: ["By replacing teachers", "By personalizing learning for each student", "By eliminating exams", "By automating enrollment"],
          correctIndex: 1,
          explanation: "AI personalizes learning paths, identifies each student's gaps, and provides tutors available 24/7."
        },
      ],
    },
    {
      number: 11,
      title: "Getting Started with AI: A Practical Guide",
      description: "Concrete first steps for using AI in your daily life.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Where to Begin?" },
        { type: "paragraph", content: "You don't need any technical skills to start using AI. Modern tools are designed to be accessible to everyone. Here is a recommended path for getting started." },
        { type: "subheading", content: "Step 1: Try the Chatbots" },
        { type: "paragraph", content: "Start with ChatGPT (free) or Claude (free). Ask questions, ask for help drafting an email, summarize an article, or explore a topic that interests you. The goal is to get comfortable with the interaction." },
        { type: "subheading", content: "Step 2: Identify Your Needs" },
        { type: "paragraph", content: "Which repetitive tasks could you automate? Writing, research, translation, data analysis, visual creation? AI is an accelerator — it amplifies what you already do." },
        { type: "subheading", content: "Step 3: Experiment" },
        { type: "paragraph", content: "Try Midjourney for images, Suno for music, Perplexity for research. Each tool has its strengths. Experimentation is the best way to learn." },
        { type: "tip", content: "Start with the free versions of each tool. You don't need to spend a single cent to discover the power of AI." },
        { type: "summary", items: [
          "No technical skills required to get started",
          "Step 1: try ChatGPT or Claude for free",
          "Step 2: identify your repetitive tasks to automate",
          "Step 3: experiment with different specialized tools",
          "Free versions are enough to get started"
        ]},
      ],
      quiz: [
        {
          question: "What is the best first step to discover AI?",
          options: ["Buy a premium subscription", "Learn to code in Python", "Try ChatGPT or Claude for free", "Read research papers"],
          correctIndex: 2,
          explanation: "The best first step is simply to try ChatGPT or Claude in their free version, asking questions and exploring the possibilities."
        },
        {
          question: "Do you need to know how to program to use AI?",
          options: ["Yes, it is essential", "No, modern tools are accessible to everyone", "Only for advanced tools", "You need to know Python at a minimum"],
          correctIndex: 1,
          explanation: "Modern AI tools are designed to be used in natural language, with no programming skills required."
        },
        {
          question: "Which tool is recommended for information research?",
          options: ["Midjourney", "Suno", "Perplexity", "ElevenLabs"],
          correctIndex: 2,
          explanation: "Perplexity AI is an AI-powered search engine that provides detailed, sourced answers, ideal for research."
        },
        {
          question: "Why is experimentation important with AI?",
          options: ["To find bugs", "Because each tool has its strengths and you need to find the ones that suit you", "To publish research papers", "To become a programmer"],
          correctIndex: 1,
          explanation: "Each AI tool has its strengths and weaknesses. Experimentation allows you to discover which ones best match your needs."
        },
      ],
    },
    {
      number: 12,
      title: "The Future of AI",
      description: "AGI, trends for 2026–2030, careers, and how to prepare.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Toward Artificial General Intelligence (AGI)" },
        { type: "paragraph", content: "AGI — an AI capable of understanding and performing any human intellectual task — remains the holy grail of research. In 2026, we are getting closer but have not yet reached it. Current LLMs show impressive capabilities but still have limitations." },
        { type: "heading", content: "Trends for 2026–2030" },
        { type: "paragraph", content: "Multimodal models are already the standard. Autonomous AI agents with Computer Use are transforming workflows. Compact models like Qwen 3.5 9B rival models 13 times larger. On-device AI is growing thanks to NPUs (AMD Ryzen AI 400, Apple Neural Engine)." },
        { type: "heading", content: "Careers in AI" },
        { type: "paragraph", content: "The most in-demand roles: ML engineer, data scientist, prompt engineer, AI architect, AI transformation consultant. But beyond specialized roles, mastery of AI tools has become a valuable cross-functional skill in every profession." },
        { type: "tip", content: "You don't need to become an AI specialist to benefit from it. Learning to use AI tools effectively can significantly boost your productivity and your value in the job market." },
        { type: "summary", items: [
          "AGI remains a major research goal but has not yet been achieved",
          "Trends: autonomous agents, compact models, on-device AI",
          "AI careers are numerous and well-compensated",
          "Mastery of AI tools is a valuable cross-functional skill",
          "Continuous learning is the key to success in the age of AI"
        ]},
      ],
      quiz: [
        {
          question: "What does AGI stand for?",
          options: ["Artificial General Intelligence", "Advanced GPU Infrastructure", "Automated Google Integration", "Applied Gradient Iteration"],
          correctIndex: 0,
          explanation: "AGI stands for Artificial General Intelligence — a hypothetical AI capable of performing any human intellectual task."
        },
        {
          question: "What is a major AI trend in 2026?",
          options: ["AI replaces all jobs", "Compact models rival large models", "AI is no longer used", "Costs are increasing"],
          correctIndex: 1,
          explanation: "Compact models like Qwen 3.5 9B rival models 13 times larger, democratizing access to high-performance AI."
        },
        {
          question: "Which role is directly linked to AI?",
          options: ["Plumber", "Prompt engineer", "Pharmacist", "Building architect"],
          correctIndex: 1,
          explanation: "A prompt engineer is a role directly tied to AI, specializing in crafting optimized prompts to get the best results from AI models."
        },
        {
          question: "What is the key to success in the age of AI?",
          options: ["Avoiding AI", "Memorizing formulas", "Continuous learning and adaptability", "Having the best hardware"],
          correctIndex: 2,
          explanation: "AI evolves very rapidly. Continuous learning and adaptability are the most valuable skills for staying relevant."
        },
      ],
    },
  ],
};

export default content;
