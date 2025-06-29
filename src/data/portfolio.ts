import { PortfolioProject, Filter } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    category: 'CV',
    href: '/vids/K-means_V1.mp4',
    imageUrl: '/img/bunny.bmp',
    title: 'K-Means Algorithm for Unsupervised Learning',
    description: 'Enhancing image understanding through the extraction of meaningful patterns from data, improving visual comprehension.'
  },
  {
    category: 'CV',
    href: '/vids/Hurricane.mp4',
    imageUrl: '/img/damage_no_damage.png',
    title: 'CNN for Hurricane Damage Classification',
    description: 'Utilized Convolutional Neural Networks for classifying the existence of hurricane damage. This advanced model provides nuanced insights, aiding disaster response planning by allocating resources more precisely based on detected severity levels in the visual data.'
  },
  {
    category: 'CV',
    href: '/vids/PanoramicStich_1.mp4',
    imageUrl: '/img/ImageStitching.png',
    title: 'Panoramic Image Stitching',
    description: 'Implemented homographies with Scikit libraries for panoramic image stitching, seamlessly blending visual elements. This technique enhances the creation of panoramic images, ensuring a cohesive and visually pleasing result by aligning and combining multiple images through geometric transformations.'
  },
  {
    category: 'Nengo',
    href: '/vids/Real-Time Online Learning with PES Rule.mp4',
    imageUrl: '/img/nengo/RTRL.png',
    title: 'Real-Time Online Learning with PES Rule',
    description: 'Executed in the Neural Engineering Framework, the project enables adaptive connection weight adjustments, demonstrating effective online learning. It dynamically masters the square function, aligning output closely with input after initial seconds. Rigorous testing includes systematic variations of hyperparameters, such as functions, learning rates, and training times.'
  },
  {
    category: 'RL',
    href: '/vids/CartpoleRenforcementLearning_1.mp4',
    imageUrl: '/img/RL_CartPole.png',
    title: 'Tackling CartPole with OpenAI Gym',
    description: 'Designed a resilient reinforcement learning model for CartPole-v1 in OpenAI Gym. Implemented a Proximal Policy Optimization (PPO) algorithm to train the agent in maintaining optimal balance on the cart-mounted pole.'
  },
  {
    category: 'Nengo',
    href: '/vids/ParlovDog.mp4',
    imageUrl: '/img/nengo/classical_conditioning.png',
    title: 'Pavlov\'s Dog Conditional Stimulus Simulation',
    description: 'Utilized Nengo simulation, applying PBS learning rule for dynamic stimuli-response weight adjustments. Successfully replicated Pavlovian behavior, offering nuanced insights. Demonstrated "neurons that fire together wire together" principle, showcasing emergent neural connectivity patterns.'
  },
  {
    category: 'Nengo',
    href: '/vids/Accumulate-to-Threshold Decision Making Model.mp4',
    imageUrl: '/img/nengo/accumulator.png',
    title: 'Decision Making Model with Nengo Neural Simulator',
    description: 'Utilized Nengo 3.2.0 to simulate a neuro accumulator, integrating input functions. Implemented synaptic connections for binary decisions, assessing diverse ensembles to capture biological relevance in decision-making.'
  },
  {
    category: 'CV',
    href: '/vids/Django_Object_detection_1.mp4',
    imageUrl: '/img/DJ+TF-obj-det.png',
    title: 'Django+TensorFL Hub:Object Detection',
    description: 'Developed a robust Django web application and seamlessly integrated TensorFlow Hub\'s Inception ResNet V2 model, enhancing capabilities in image analysis and object detection.'
  },
  {
    category: 'AWS',
    href: '/pdfs/WildRydeReport.pdf',
    imageUrl: '/img/wildrydes-architecture.jpeg',
    title: 'Wild Rydes',
    description: 'SERVERLESS! Perform version control in the deployment code of static webpage, used AWS amplify to host the static webpage frontend and DynamoDB hold user data. Utilized tools: Codecommit, DynamoDB, Amplify, AWS CLI, AWS API gateway, Cognito'
  },
  {
    category: 'AWS',
    href: '/pdfs/DevSecOpsReport.pdf',
    imageUrl: '/img/TrendMicroControlPanel.png',
    title: 'Trend Micro One',
    description: 'Security + DevOps. Used Trend Micro to add security checks and block targeted attacks on the site. It can visualise attacks in the cloud infrastructure.'
  },
  {
    category: 'AWS',
    href: '/#',
    imageUrl: '/img/DevSecOps.JPG',
    title: 'DevSecOps',
    description: ''
  },
  {
    category: 'AWS',
    href: 'https://catalog.us-east-1.prod.workshops.aws/v2/workshops/44d3e2a0-ec6f-44df-9397-bcfdf129cadf/en-US/',
    imageUrl: 'img/devmlops.png',
    title: 'DEVMLOPS',
    description: 'DevOps + Machine Learning'
  },
  {
    category: 'SWE',
    href: 'https://github.com/codejedi-ai/Nationstate-LLM',
    imageUrl: 'img/Nationstates-LLM.png',
    title: 'Analyze progressive bias in the GPT-4 model: Nationstates-LLM',
    description: 'Utilized the nationstates API to access data and make decisions in the game. Drafted a virtual nation constitution, enabling GPT-4 to read and select the most appropriate decision according to my constitution. Evaluation revealed minimal progressive bias, affirming GPT-4\'s alignment to constitutional values.'
  },
  {
    category: 'SWE',
    href: 'https://github.com/codejedi-ai/GMM-Segmentation',
    imageUrl: 'img/SegmanticPic.png',
    title: 'GMM-Segmentation',
    description: 'Implemented the Gaussian mixture model (GMM) for image segmentation, effectively distinguishing foreground and background. This segmentation facilitated the identification of prominent features, thereby enhancing overall image comprehension and visual understanding.'
  }
];

export const portfolioFilters: Filter[] = [
  { id: 'all', label: 'All', cssClass: '*', active: true },
  { id: 'Nengo', label: 'Neuroscience', cssClass: '.Nengo' },
  { id: 'RL', label: 'Reinforcement Learning', cssClass: '.RL' },
  { id: 'CV', label: 'Computer Vision', cssClass: '.CV' },
  { id: 'SWE', label: 'Software Developments', cssClass: '.SWE' },
  { id: 'AWS', label: 'AWS', cssClass: '.AWS' }
];