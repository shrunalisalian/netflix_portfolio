// Chat GPT optmised 
// Static data customized to match Shrunali's resume & portfolio

import { ProfileBanner, ContactMe, TimelineItem, Project, Publication, Skill, WorkPermit, AcademicCoursework } from '../types';

export const staticProfileBanner: ProfileBanner = {
    backgroundImage: { 
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' 
    },
    headline: 'Shrunali Salian – Software Engineer AI/ML ',
    resumeLink: { url: '/Shrunali_Salian_SDE.pdf' },
    linkedinLink: 'https://www.linkedin.com/in/shrunali-salian/',
    profileSummary: `Software Engineer specializing in AI/ML systems, with expertise in deep learning pipelines, computer vision, and production ML infrastructure. Led American Sign Language recognition at Tatum Robotics (40% accuracy improvement), optimized multimodal AI systems at Auxi.ai, and accelerated motion analysis at Northeastern University. Passionate about building accessible, impactful technology that bridges research and real-world applications.`
  };
  

export const staticContactMe: ContactMe = {
  profilePicture: { url: '/profile.jpeg'},
  name: 'Shrunali Salian',
  title: 'Software Engineer – AI/ML',
  summary: 'I design and deploy intelligent systems across computer vision, NLP, and generative AI. My work spans assistive robotics, multimodal AI, and ML infrastructure, combining research and engineering to create scalable, production-ready solutions.',
  companyUniversity: 'Northeastern University',
  linkedinLink: 'https://linkedin.com/in/shrunali-salian',
  email: 'shrunali.salian@gmail.com',
  phoneNumber: '+1 (510) 738-4769'
};

export const staticTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Ernst & Young',
    title: 'Machine Learning Engineer',
    techStack: 'PyTorch, Hugging Face, vLLM, Triton, FSDP, GRPO',
    summaryPoints: [
      'Built a forkable, enterprise-wide LLM post-training platform (synthetic data, SFT, GRPO, deployment), scaled with single-node multi-GPU FSDP and vLLM rollouts, adopted by client teams for tool-filtering and regulatory models.',
      'Led RLHF alignment via GRPO reinforcement learning atop SFT, optimizing a parameter-free logsumexp BCE objective against preference signals on edge cases, with a causal LM regularizer preserving interpretability and auditability.',
      'Implemented automated failure analysis and eval gating between SFT and GRPO stages, tuning precision/recall tradeoffs per business requirement and blocking misaligned checkpoints before costly multi-GPU RL training runs.'
    ],
    dateRange: 'Jan 2026 – Present'
  },
  {
    timelineType: 'work',
    name: 'Tatum Robotics',
    title: 'Machine Learning Engineer',
    techStack: 'PyTorch, Squeezeformer, Transformers, CNNs',
    summaryPoints: [
      'Engineered a real-time ASL fingerspelling system using a Squeezeformer encoder with dual Transformer decoders over 3D pose-landmark sequences, achieving 40% accuracy gains over baseline models on continuous motion.',
      'Represented spatiotemporal landmark trajectories as structured, image-like tensors and applied CNN layers across frames to capture fine-grained hand geometry, enabling sequence-to-sequence transcription of continuous physical gestures.',
      'Applied targeted data augmentation strategies to regularize training on sparse landmark sequences, improving model robustness to variation in signer style, signing speed, and camera distance.'
    ],
    dateRange: 'May 2024 – Aug 2025'
  },
  {
    timelineType: 'work',
    name: 'Augmented Cognition Lab (NEU)',
    title: 'Research Project Assistant',
    techStack: 'YOLO, MediaPipe, PyTorch',
    summaryPoints: [
      'Built a multi-stage, perception pipeline fusing hierarchical YOLO-based person detection, MediaPipe hand-tracking, and raw video streams to analyze stimulus-response motor behavior in infants from multi-sensor clinical data.',
      'Fine-tuned models for kinematic analysis of infant motor development; translated multi-modal pose and video signals into structured diagnostic features for expert clinical review with Boston hospital partners.',
      'Addressed extreme class imbalance in sparse, sensitive clinical motion data using targeted augmentation strategies and custom loss design; optimized GPU throughput and pipeline efficiency across a multi-node cluster.'
    ],
    dateRange: 'Aug 2023 – Dec 2023'
  },
  {
    timelineType: 'work',
    name: 'Auxi.ai',
    title: 'Machine Learning Engineer',
    techStack: 'PyTorch, Hugging Face, Stable Diffusion, LoRA',
    summaryPoints: [
      'Conducted R&D on image segmentation and object detection architectures for visual scene understanding; reproduced SOTA baselines, benchmarked model variants, and documented failure modes to guide future architecture decisions.',
      'Prototyped image synthesis pipelines with Stable Diffusion for design workflows, tuning guidance scale, iterative prompt engineering, and LoRA fine-tuning to produce layout-aware, spatially-grounded visual generation outputs reliably.'
    ],
    dateRange: 'May 2023 – Sep 2023'
  },
  {
    timelineType: 'work',
    name: 'Media.net',
    title: 'Data Analyst',
    techStack: 'SQL, Python, Tableau',
    summaryPoints: [
      'Developed predictive models to optimize ad-unit placement and sizing for tier-1 American publishers; analyzed high-dimensional traffic data to forecast revenue potential and maximize ad yield by 11%.',
      'Led rigorous A/B testing and statistical analysis to validate placement strategies; built automated SQL/Python pipelines to monitor KPIs and improve revenue tracking accuracy by 25% with engineering-ready reporting.'
    ],
    dateRange: 'Jun 2019 – Jun 2020'
  },
  {
    timelineType: 'education',
    name: 'Northeastern University, Boston',
    title: 'M.S. in Data Analytics',
    techStack: 'NLP, Computer Vision, Deep Learning, Data Mining, DBMS',
    summaryPoints: [
      'Master of Science in Data Analytics, May 2024.',
      'Coursework in Natural Language Processing, Computer Vision, Deep Learning, Data Mining, and DBMS.'
    ],
    dateRange: 'May 2024'
  },
  {
    timelineType: 'education',
    name: 'University of Mumbai',
    title: 'B.E. in Computer Engineering',
    techStack: 'C++, Data Structures, Algorithms, Operating Systems, AI, ML',
    summaryPoints: [
      'Bachelor of Engineering in Computer Engineering, May 2019.',
      'Coursework in Analysis of Algorithms, Data Structures, Operating Systems, Artificial Intelligence, and ML.'
    ],
    dateRange: 'May 2019'
  }
];

export const staticProjects: Project[] = [
    {
      title: 'ASL Fingerspelling Recognition – Tatum Robotics',
      description: 'Deep learning pipeline for American Sign Language recognition, improving accuracy by 40%. Deployed in assistive robotics for DeafBlind accessibility with monitoring loops for stable releases.',
      techUsed: 'PyTorch, TensorFlow, Python, SQL, Tableau',
      image: { url: '/tr.jpg' },
      
    },
    {
      title: 'Multimodal AI Systems – Auxi.ai',
      description: 'Optimized inference pipelines for multimodal AI, built NLP classifiers with Hugging Face, and implemented safe image manipulation workflows with Stable Diffusion.',
      techUsed: 'PyTorch Lightning, TensorFlow Serving, Hugging Face, Stable Diffusion',
      image: { url: '/img-seg.png' },
      
    },
    {
      title: 'Motion Analysis – NEU Lab',
      description: 'GPU-accelerated motion analysis system with XGBoost and Random Forests, boosting accuracy from 30% → 72% and cutting runtime by 65%.',
      techUsed: 'CUDA, PyTorch, XGBoost, Statsmodels',
      image: { url: '/aclab.jpg' },
      
    },
    {
      title: 'Spotify Data Visualization',
      description: 'Analyzed Spotify music trends: user behavior and track characteristics, generating insights on streaming patterns.',
      techUsed: 'Python, SQL, Data Visualization, HTML',
      image: { url: '/spotify.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/spotify-data-visualization'
    },
    {
      title: 'Instagram Anomaly Detection & Forecasting',
      description: 'Forecasted Instagram engagement growth using anomaly detection and SQL-driven insights for social media strategy.',
      techUsed: 'Python, Jupyter, SQL, Forecasting Models',
      image: { url: '/insta.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/Instagram-Anomaly-Detection-Growth-Forecasting'
    },
    {
      title: 'TikTok E-Commerce Influencer Insights',
      description: 'Analyzed influencer engagement, audience impact, and e-commerce growth driving social commerce metrics.',
      techUsed: 'Python, Pandas, Jupyter, SQL',
      image: { url: '/tiktok.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/TikTok-E-commerce-Influencer-Insights'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Implemented a recommendation engine analyzing streaming content trends and personalization strategies.',
      techUsed: 'Python, Recommender Systems, Pandas',
      image: { url: '/netflix.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/movie-recommendation-system'
    },
    {
      title: 'Goodreads Book Analysis – SQL',
      description: 'Explored global reading trends via queries on ratings, author popularity, and user behavior.',
      techUsed: 'SQL, Data Analytics, Jupyter',
      image: { url: '/goodreads.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/Goodreads-Book-Analysis-SQL'
    },
    {
      title: 'Hogwarts-GPT',
      description: 'Built a fun generative AI project that creates Harry Potter-style stories using GPT, blending creativity and storytelling.',
      techUsed: 'Python, NLP, GPT, Transformers',
      image: { url: '/hp.jpg' },
      githubLink: 'https://github.com/shrunalisalian/hogwarts-gpt'
    },
    {
      title: 'TF–IDF Search Engine',
      description: 'Information retrieval system with tokenization, stemming, TF–IDF vectors, and cosine similarity, enhanced with learning-to-rank.',
      techUsed: 'Python, scikit-learn, NLP',
      image: { url: '/search.jpg' },
      githubLink: 'https://github.com/shrunalisalian/TF--IDF-vector-space-search-engine',
      status: 'coming-soon'
    },
    {
      title: 'DBDB – Dog Bed Database',
      description: 'Persistent Python key–value store with append-only storage, atomic commits, and multi-reader/one-writer concurrency.',
      techUsed: 'Python, Systems Programming, Storage',
      image: { url: '/db.jpg' },
      githubLink: 'https://github.com/shrunalisalian/DBDB-Dog-Bed-Database-',
      status: 'coming-soon'
    },
    {
      title: 'Fine-Tuning BERT for Multi-Label Classification',
      description: 'Fine-tuned BERT to handle multi-label text classification, implemented imbalance handling, and evaluated with F1 metrics.',
      techUsed: 'Python, Hugging Face Transformers, PyTorch',
      image: { url: '/bert.jpeg' },
      githubLink: 'https://github.com/shrunalisalian/Fine-Tuning-BERT-for-Multi-Label-Text-Classification'
    }
  ];
  

export const staticPublications: Publication[] = [
  {
    title: 'Abnormality Detection in Mammogram using Convolutional Neural Networks',
    authors: 'Shrunali Salian, Mathew Jose, Pranav Medhi, Shainila Mulla',
    publishedDate: '2022-12-04',
    link: 'https://archive.org/details/abnormal_detection_mammogram_cnn',
    iconName: 'research',
    description: 'Research exploring the application of convolutional neural networks (CNN) to develop a computer-aided detection system for mammograms, aiming to facilitate direct communication between patients and doctors and improve the speed and accuracy of breast cancer diagnosis.'
  }
];

/*
export const staticSkills: Skill[] = [
  { name: 'Python', category: 'Language', description: 'Data pipelines, deep learning, backend development', icon: 'python' },
  { name: 'C++', category: 'Language', description: 'Algorithms, system design, performance optimization', icon: 'cpp' },
  { name: 'JavaScript/TypeScript', category: 'Language', description: 'Full-stack development with React/Node.js', icon: 'typescript' },
  { name: 'PyTorch', category: 'ML/AI', description: 'Deep learning training & inference optimization', icon: 'pytorch' },
  { name: 'TensorFlow', category: 'ML/AI', description: 'Model development, serving, and monitoring', icon: 'tensorflow' },
  { name: 'Hugging Face', category: 'ML/AI', description: 'NLP classifiers, transformers, and fine-tuning', icon: 'huggingface' },
  { name: 'Stable Diffusion', category: 'ML/AI', description: 'Generative AI for safe text-to-image workflows', icon: 'ai' },
  { name: 'Docker & Kubernetes', category: 'Cloud/DevOps', description: 'Containerization, orchestration, and CI/CD pipelines', icon: 'docker' },
  { name: 'AWS/GCP', category: 'Cloud/DevOps', description: 'Cloud services, serverless functions, and deployment', icon: 'aws' },
  { name: 'SQL & Tableau', category: 'Data', description: 'Analytics pipelines, dashboards, and experiments', icon: 'database' }
];
*/


export const staticSkills: Skill[] = [
  // 🟦 Languages & Systems
  { name: 'Python', category: 'Languages & Systems', description: 'Data pipelines, ML, backend development, scripting', icon: 'python' },
  { name: 'C++14/17/20', category: 'Languages & Systems', description: 'Algorithms, system design, high-performance computing', icon: 'cpp' },
  { name: 'JavaScript', category: 'Languages & Systems', description: 'Full-stack development with React and Node.js', icon: 'typescript' },
  { name: 'Golang', category: 'Languages & Systems', description: 'System-level services and backend APIs', icon: 'golang' },
  { name: 'Shell Scripting', category: 'Languages & Systems', description: 'Automation, tooling, and Linux system workflows', icon: 'bash' },

  // 🤖 AI/ML & Data Science
  { name: 'PyTorch', category: 'AI/ML & Data Science', description: 'Deep learning training and inference optimization', icon: 'pytorch' },
  { name: 'TensorFlow', category: 'AI/ML & Data Science', description: 'Model development, serving, and monitoring', icon: 'tensorflow' },
  { name: 'Hugging Face', category: 'AI/ML & Data Science', description: 'NLP, transformers, and fine-tuned classifiers', icon: 'huggingface' },
  { name: 'Computer Vision', category: 'AI/ML & Data Science', description: 'ASL recognition, motion analysis, 3D reconstruction', icon: 'vision' },
  { name: 'NLP', category: 'AI/ML & Data Science', description: 'Text classification, transformers, multimodal AI', icon: 'nlp' },
  { name: 'CUDA', category: 'AI/ML & Data Science', description: 'GPU acceleration, profiling, and inference optimization', icon: 'cuda' },

  // ☁️ MLOps & Cloud
  { name: 'Docker & Kubernetes', category: 'MLOps & Cloud', description: 'Containerization, orchestration, CI/CD pipelines', icon: 'docker' },
  { name: 'TensorFlow Serving', category: 'MLOps & Cloud', description: 'Scalable model serving and deployment', icon: 'tensorflow' },
  { name: 'AWS', category: 'MLOps & Cloud', description: 'Lambda, ECS, S3, monitoring & serverless deployments', icon: 'aws' },
  { name: 'GCP', category: 'MLOps & Cloud', description: 'Data pipelines, cloud services, and ML workflows', icon: 'gcp' },
  { name: 'Monitoring & Logging', category: 'MLOps & Cloud', description: 'Metrics, tracing, and production guardrails', icon: 'monitoring' },

  // 📊 Data & Experimentation
  { name: 'SQL', category: 'Data & Experimentation', description: 'Relational queries, ETL pipelines, and data ops', icon: 'database' },
  { name: 'Tableau', category: 'Data & Experimentation', description: 'Interactive dashboards and analytics reporting', icon: 'tableau' },
  { name: 'A/B Testing', category: 'Data & Experimentation', description: 'Experiment design, guardrails, effect sizes, confidence intervals', icon: 'abtesting' },
  { name: 'SciPy / Statsmodels', category: 'Data & Experimentation', description: 'Statistical modeling, regression, and experiments', icon: 'stats' },

  // ⚙️ Core CS & Architecture
  { name: 'Data Structures', category: 'Core CS & Architecture', description: 'Problem solving, optimization, coding interviews', icon: 'algorithms' },
  { name: 'System Design', category: 'Core CS & Architecture', description: 'Distributed systems, scalability, microservices', icon: 'systemdesign' },
  { name: 'Algorithms', category: 'Core CS & Architecture', description: 'Design and analysis of efficient algorithms for search, sorting, graph traversal, and dynamic programming', icon: 'algorithms' },
  { name: 'ROS', category: 'Core CS & Architecture', description: 'Robotics middleware, sensor fusion, real-time systems', icon: 'ros' }
];


export const staticWorkPermit: WorkPermit = {
  visaStatus: 'Authorized to work in the U.S.',
  expiryDate: new Date('2027-07-08'),
  summary: 'Currently on F1 STEM OPT, authorized to work in the United States until 2027',
  additionalInfo: 'Open to relocation, remote work, and international opportunities'
}

export const staticAcademicCoursework: AcademicCoursework[] = [
  { title: 'Object Oriented Programming', description: 'Advanced programming concepts, design patterns, and software architecture principles', category: 'Programming', icon: 'code' },
  { title: 'Data Structures & Algorithms', description: 'Core algorithms, complexity analysis, and problem-solving techniques', category: 'Computer Science', icon: 'algorithm' },
  { title: 'Software Engineering', description: 'Software development lifecycle, project management, and best practices', category: 'Engineering', icon: 'engineering' },
  { title: 'Artificial Intelligence', description: 'AI fundamentals, search algorithms, knowledge representation, and reasoning', category: 'AI/ML', icon: 'ai' },
  { title: 'Machine Learning', description: 'Supervised/unsupervised learning, neural networks, and model evaluation', category: 'AI/ML', icon: 'ml' },
  { title: 'Advanced Database Management', description: 'Database design, optimization, distributed systems, and NoSQL', category: 'Database', icon: 'database' },
  { title: 'Natural Language Processing', description: 'Text processing, language models, sentiment analysis, and transformers', category: 'AI/ML', icon: 'nlp' },
  { title: 'Computer Vision', description: 'Image processing, feature detection, object recognition, and deep learning', category: 'AI/ML', icon: 'vision' },
  { title: 'Data Mining', description: 'Pattern discovery, clustering, association rules, and big data analytics', category: 'Data Science', icon: 'mining' },
  { title: 'Data Science', description: 'Statistical analysis, visualization, predictive modeling, and insights', category: 'Data Science', icon: 'datascience' },
  { title: 'Human Machine Interaction', description: 'User interface design, usability testing, and human-computer interaction principles', category: 'Systems', icon: 'interaction' },
  { title: 'Parallel and Distributed Systems', description: 'Concurrent programming, distributed algorithms, and system scalability', category: 'Systems', icon: 'parallel' },
  { title: 'Digital Signal Processing', description: 'Signal analysis, filtering, and digital signal processing algorithms', category: 'Systems', icon: 'signal' },
  { title: 'Distributed Databases', description: 'Database replication, consistency models, and distributed transaction management', category: 'Database', icon: 'distributed' },
  { title: 'Operating Systems', description: 'Process management, memory allocation, file systems, and system programming', category: 'Systems', icon: 'os' }
];
