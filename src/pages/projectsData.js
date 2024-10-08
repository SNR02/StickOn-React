import CGCoverImg from '../assets/project-page-assets/Content-Generator/cover.png'
import CGSS1 from '../assets/project-page-assets/Content-Generator/ss1.jpeg';
import CGSS2 from '../assets/project-page-assets/Content-Generator/ss2.jpeg';
import CGSS3 from '../assets/project-page-assets/Content-Generator/ss3.jpeg';

import OSCoverImg from '../assets/project-page-assets/OneShop/cover.png'
import OSSS1 from '../assets/project-page-assets/OneShop/ss1.png';
import OSSS2 from '../assets/project-page-assets/OneShop/ss2.png';
import OSSS3 from '../assets/project-page-assets/OneShop/ss3.png';

import VDACoverImg from '../assets/project-page-assets/Vda/cover.png'
import VDASS1 from '../assets/project-page-assets/Vda/ss1.png';
import VDASS2 from '../assets/project-page-assets/Vda/ss2.png';
import VDASS3 from '../assets/project-page-assets/Vda/ss3.png';

import VCCoverImg from '../assets/project-page-assets/VidConnect/cover.png'
import VCSS1 from '../assets/project-page-assets/VidConnect/ss1.png';
import VCSS2 from '../assets/project-page-assets/VidConnect/ss2.png';
import VCSS3 from '../assets/project-page-assets/VidConnect/ss3.png';

import WTCoverImg from '../assets/project-page-assets/WebTalk/cover.png'
import WTSS1 from '../assets/project-page-assets/WebTalk/ss1.png';
import WTSS2 from '../assets/project-page-assets/WebTalk/ss2.png';
import WTSS3 from '../assets/project-page-assets/WebTalk/ss3.png';

let projectsData = [
    {
        title:"Content Generator",
        coverImg:CGCoverImg,
        techStack:["Node.js", "Express.js", "HTML", "CSS"],
        challenge:"The idea behind the Content Generator project is to build a web application that empowers users to create high-quality, personalized text and images using AI-based tools. The challenge lies in designing a platform that is both user-friendly and versatile, catering to a wide range of content creation needs such as marketing, storytelling, and more. The system must allow users to generate text and images efficiently based on specific prompts, saving them valuable time and resources.",
        solution:"The Content Generator application was developed with a focus on streamlining the content creation process. By integrating the Gemini API for text generation and an AI Text to Image Generator API for image creation, the app enables users to produce tailored content for various use cases.\n We identified key content creation requirements and designed a robust system that can handle multiple text categories, such as blog posts, social media updates, emails, and advertisements. For visuals, the image generation feature offers similar flexibility, allowing users to generate custom images for marketing materials or social media posts based on their preferences.",
        featuresImplemented:"Text Generation: Users can generate content across multiple categories (e.g., blog posts, emails, social media updates) using prompts tailored to their requirements. Additional fields like tone, target audience, keywords, and text length can further customize the generated content to meet specific needs.\nImage Generation: The application leverages AI to generate visually appealing images based on user inputs, catering to various categories such as marketing and social media. This feature allows users to quickly produce custom visuals without needing graphic design skills.",
        results:"The result is a highly functional system that automates both text and image creation processes, enabling users to quickly and effortlessly produce high-quality content tailored to their needs. The application enhances productivity by offering a streamlined experience, reducing the effort typically required for manual content creation.",
        screenshots:[CGSS1, CGSS2, CGSS3],
        videoLink:"https://res.cloudinary.com/dmoilyzxm/video/upload/v1728019200/366760948-3c4669d2-c8a4-4d99-9ed6-89bed56187ad_juqfje.mp4",
        liveLink:"https://content-generator-static.onrender.com/",
    },
    {
        title:"OneShop",
        coverImg:OSCoverImg,
        techStack:["React", "Spring", "MongoDB"],
        challenge:"The concept behind OneShop was to provide users with a platform where they could easily search for products from major e-commerce sites, view only genuine reviews, and compare prices. The goal was to ensure users make well-informed purchasing decisions by filtering out fake reviews and presenting authentic product information. Moreover, users needed the convenience of comparing prices and ratings between Amazon and Flipkart in one place, with the option to quickly navigate to the respective store.\nTo achieve this, the system had to efficiently gather data from both platforms while filtering the reviews for authenticity and making the process seamless for the user.",
        solution:"The OneShop platform was developed to provide users with a simple yet powerful product search and comparison experience. A centralized search bar allows users to search for products from both Amazon and Flipkart, with recent searches saved in local storage for quick access.\nOnce a search is initiated, the results are displayed in a user-friendly manner, showing products from both platforms side by side. Each product card includes essential information such as the product image, actual and adjusted ratings (filtered from fake reviews), pricing details (both discount and original prices), and a store logo to easily identify the source. A 'Buy Now' button redirects users directly to the respective platform for a seamless purchasing experience.\nA Recently Viewed section is also available, allowing users to easily revisit products they have previously considered. This feature stores products users have clicked on and displays them under the search bar for quick access.",
        featuresImplemented:"Search Functionality: A universal search bar allows users to search for any product from Amazon and Flipkart. Recent searches are saved and displayed for fast and easy access.\nSearch Results Display: Products from both Amazon and Flipkart are presented with key details like product images, ratings (both actual and adjusted after filtering fake reviews), and pricing information. A 'Buy Now' button is available for direct navigation to the platform.\nProduct Cards: Each card includes comprehensive product details, such as actual and adjusted ratings, prices, store logos (Amazon/Flipkart), and a link to purchase the product from the respective platform.\nRecently Viewed Products: Products that users click on are saved and displayed under the search bar, enabling quick access to items they have already explored.",
        results:"The feature to remove fake reviews is under development, and once completed, it will ensure that only legitimate reviews are considered in the adjusted ratings. This will enhance the accuracy and reliability of product recommendations on the platform.",
        screenshots:[OSSS1, OSSS2, OSSS3],
        videoLink:"https://res.cloudinary.com/dmoilyzxm/video/upload/v1727976406/2024-09-12_12-33-21_melg5l.mp4",
        liveLink:"",
    },
    {
        title:"Virtual Document Assistant",
        coverImg:VDACoverImg,
        techStack:["Node.js", 'Express.js', "LangChain"],
        challenge:"The challenge of Virtual Document Assistant (VDA) was to create an application that allows users to efficiently search through multiple documents for specific answers to their questions. Manually sifting through files to find relevant information can be a time-consuming and tiring process. The goal was to develop an AI-powered assistant that could quickly understand the content of various document types and provide accurate answers, including page references, based on the uploaded files.",
        solution:"The Virtual Document Assistant was built to offer users a seamless experience in interacting with their documents. Users can upload files in different formats such as PDF, CSV, DOC, and DOCX, either individually or in bulk. Once the documents are uploaded, the AI-powered assistant can process and understand the content. Users can then ask questions, and the assistant will retrieve the most relevant answers from the documents, citing page numbers for easy reference.\nThe application supports querying across multiple documents, ensuring that answers can be provided from all available sources without the need to switch between files manually. This allows for a more efficient information retrieval process, significantly reducing the time and effort required to find specific answers.",
        featuresImplemented:"Multi-format File Support: The system supports various file types such as PDF, CSV, DOC, and DOCX, allowing users to upload documents in their preferred format.\nMultiple File Upload: Users can upload multiple documents at once, enabling the assistant to pull information from various sources during a query.\nAI-based Querying: Users can ask questions related to the content of the uploaded documents, and the AI assistant retrieves answers from the documents, providing page numbers to help users locate the exact information.\nMultiple Document Search: The assistant can analyze and respond to queries using content from multiple documents simultaneously, making the search process more efficient.",
        results:"The Virtual Document Assistant successfully automates the process of document analysis and question-answering, saving users time and effort when searching for specific information. By supporting multiple file formats and allowing for queries across numerous documents, VDA significantly enhances document management and retrieval processes, making it easier for users to get the answers they need without manually scanning through pages of content.",
        screenshots:[VDASS1, VDASS2, VDASS3],
        videoLink:"",
        liveLink:"https://virtual-document-assistant-1.onrender.com/home.html",
    },
    {
        title:"VidConnect",
        coverImg:VCCoverImg,
        techStack:["React", "Node.js", "Express.js", "HeadlessUI"],
        challenge:"The goal was to create a real-time web chat application integrated with video conferencing, leveraging VideoSDK to ensure smooth, low-latency communication. The app needed to offer a variety of features such as screen sharing, text chat, hand-raising, and cloud recording while maintaining a seamless user experience for both audio and video communication.",
        solution:"The WebChat application was built using VideoSDK, which provided a flexible and scalable solution for real-time video conferencing. The app allows users to join meetings, interact through video and text, share their screens, and store meeting recordings in the cloud. VideoSDK's APIs ensured high-quality audio and video streaming, as well as low latency, making the app suitable for virtual meetings and remote collaborations.\nWe designed a user-friendly interface, starting from a joining screen where users could select their media devices and enter a meeting. Features like chat messaging, hand-raising, and cloud recording were seamlessly integrated to enhance interactivity and accessibility. Additionally, a floating screen option was implemented to allow multitasking during meetings.",
        featuresImplemented:"Joining Screen: Users can select their preferred microphone, camera, and speaker from a dropdown list of available devices. A meeting code is auto-generated, and by entering their name and clicking 'Join Meeting' multiple participants can join using the same code.\nChat Interface: During meetings, users can send and receive real-time text messages through an integrated chat interface, ensuring effective communication alongside video calls.\nRaise Hand Feature: The hand-raising functionality enables users to signal their intention to speak, helping organize conversations and avoid interruptions during meetings.\nScreen Sharing: Users can share their screens, allowing them to present slides, documents, or other content to all meeting participants.\nCloud Recording: The application supports cloud-based meeting recording, allowing users to revisit discussions later and store important conversations for future reference.\nFloating Screen: A floating small screen feature allows users to minimize the video meeting window while keeping it visible, enabling multitasking and browsing without leaving the call.",
        results:"The WebChat application successfully integrates real-time video conferencing with advanced features like screen sharing, chat, and cloud recording. The use of VideoSDK ensured low latency, high-quality communication, and reliable performance. The app's intuitive interface and multitasking capabilities, such as the floating screen, provide an efficient and versatile platform for virtual meetings and remote collaboration.",
        screenshots:[VCSS1, VCSS2, VCSS3],
        videoLink:"",
        liveLink:"https://web-chat-video-sdk.vercel.app/",
    },
    {
        title:"WebTalk",
        coverImg:WTCoverImg,
        techStack:["Javascript", "Socket.Io", "Agora Web Sdk", "WebRTC"],
        challenge:"The WebChat Application aimed to provide a seamless, web-based video conferencing experience, allowing users to interact in real-time via video, audio, and text. The challenge was to create an efficient system where users could join or create rooms, engage in meetings, and utilize features such as screen sharing, hand raising, and chat messaging. Ensuring high-quality video and audio streaming while maintaining responsiveness across devices was also a critical requirement.",
        solution:"The WebChat Application was developed using WebRTC technology combined with Agora's Web SDK and JavaScript to facilitate real-time communication. The app allows users to either create or join video conferencing rooms, participate in audio and video streams, and use additional functionalities like text chat and screen sharing. We focused on creating a user-friendly and responsive interface to ensure a smooth experience across various device sizes.\nEach room allows multiple participants to join, providing features like raising hands during meetings, sending and receiving chat messages, and sharing screens. The 'leave and rejoin' functionality ensures that users can reconnect to the same room without losing their preferences or settings.",
        featuresImplemented:"Room Creation and Joining: Users can either create a new room or join an existing one by simply entering their name and the room name.Video and Audio Streaming: The application allows seamless video and audio streaming through the user’s camera and microphone, ensuring high-quality real-time communication.\nScreen Sharing: Users can share their screens with other participants, enhancing collaboration during meetings.\nRaise Hand Functionality: Participants can raise and lower their hands to signal their intention to speak or ask a question during the meeting.\nText Chat: A real-time chat feature enables users to send and receive text messages within the room.\nResponsive User Interface: The user interface is designed to be responsive and adaptable to different screen sizes, ensuring usability across devices.\nLeave and Rejoin: Users can leave and rejoin a room without losing their previous settings or preferences, maintaining continuity in their communication experience.",
        results:"The WebChat Application successfully delivers a versatile and robust video conferencing platform. With features like real-time video and audio streaming, screen sharing, and hand-raising, users can engage effectively in virtual meetings. The responsive design ensures the application works across various devices, enhancing accessibility and convenience. Overall, the application streamlines the communication process, making virtual meetings more interactive and user-friendly.",
        screenshots:[WTSS1, WTSS2, WTSS3],
        videoLink:"",
        liveLink:"https://web-rtc-js-app.vercel.app/lobby.html",
    },
]

export default projectsData;