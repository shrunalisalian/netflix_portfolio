// Chat GPT optmised 
// Static data customized to match Shrunali's resume & portfolio

import { ProfileBanner, ContactMe, TimelineItem, Project, Publication, Skill, WorkPermit } from '../types';

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
    name: 'Tatum Robotics',
    title: 'Software Engineer – Machine Learning',
    techStack: 'PyTorch, TensorFlow, SQL, Tableau, Python',
    summaryPoints: [
      'Developed ASL recognition models with 40% accuracy improvement. ',
      'Built QA/monitoring loops for production ML deployments.  ',
      'Partnered cross-functionally to design KPIs, alerting, and data pipelines'
    ],
    dateRange: 'May 2024 – Aug 2025'
  },
  {
    timelineType: 'work',
    name: 'Auxi.ai',
    title: 'Software Engineer – AI/ML',
    techStack: 'PyTorch Lightning, TensorFlow Serving, Hugging Face, Stable Diffusion ',
    summaryPoints: [
      'Optimized real-time inference latency-throughput trade-offs. ',
      'Built image segmentation classifiers with Hugging Face and experiment tracking. ',
      'Developed safe image manipulation workflows with Stable Diffusion. '
    ],
    dateRange: 'May 2023 – Sep 2023'
  },
  {
    timelineType: 'work',
    name: 'Augmented Cognition Lab (NEU)',
    title: 'Research Project Assistant',
    techStack: 'Random Forest, XGBoost, CUDA, PyTorch',
    summaryPoints: [
      'Engineered motion analysis models improving accuracy from 30% → 72%. ',
      'Reduced runtime by 65% using CUDA optimization and PyTorch data loaders. ',
      'Led A/B validation with SciPy and Statsmodels for experimental results. '
    ],
    dateRange: 'Aug 2023 – Dec 2023'
  },
  {
    timelineType: 'work',
    name: 'Media.net',
    title: 'Data Analyst',
    techStack: 'SQL, Python, Tableau',
    summaryPoints: [
      'Automated dashboards and pipelines to improve ad revenue tracking by 25%.  ',
      'Designed A/B tests and delivered engineering-ready insights.  ',
      'Partnered with engineering to optimize targeting strategies.  '
    ],
    dateRange: 'Jun 2019 – Jun 2020'
  },
  {
    timelineType: 'education',
    name: 'Northeastern University, Boston',
    title: 'M.S. in Data Analytics Engineering',
    techStack: 'NLP, Computer Vision, Data Mining, Databases',
    summaryPoints: [
      'Specialized in AI/ML systems, computer vision, and data science. ',
      'Coursework in NLP, CV, ML, Database Management. '
    ],
    dateRange: '2022 – 2024'
  },
  {
    timelineType: 'education',
    name: 'University of Mumbai',
    title: 'B.E. in Computer Engineering',
    techStack: 'C++, Data Structures, Algorithms, Software Engineering',
    summaryPoints: [
      'Graduated with strong foundation in algorithms and systems. ',
      'Active in coding competitions and academic projects. '
    ],
    dateRange: '2015 – 2019'
  }
];

export const staticProjects: Project[] = [
    {
      title: 'ASL Fingerspelling Recognition – Tatum Robotics',
      description: 'Deep learning pipeline for American Sign Language recognition, improving accuracy by 40%. Deployed in assistive robotics for DeafBlind accessibility with monitoring loops for stable releases.',
      techUsed: 'PyTorch, TensorFlow, Python, SQL, Tableau',
      image: { url: '/tr.jpg' },
      githubLink: 'https://github.com/shrunalisalian/asl-recognition'
    },
    {
      title: 'Multimodal AI Systems – Auxi.ai',
      description: 'Optimized inference pipelines for multimodal AI, built NLP classifiers with Hugging Face, and implemented safe image manipulation workflows with Stable Diffusion.',
      techUsed: 'PyTorch Lightning, TensorFlow Serving, Hugging Face, Stable Diffusion',
      image: { url: '/img-seg.png' },
      githubLink: 'https://github.com/shrunalisalian/multimodal-ai-systems'
    },
    {
      title: 'Motion Analysis – NEU Lab',
      description: 'GPU-accelerated motion analysis system with XGBoost and Random Forests, boosting accuracy from 30% → 72% and cutting runtime by 65%.',
      techUsed: 'CUDA, PyTorch, XGBoost, Statsmodels',
      image: { url: '/aclab.jpg' },
      githubLink: 'https://github.com/shrunalisalian/motion-analysis-neu'
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
