import img1 from '../assets/images/case_img_1.png';
import img2 from '../assets/images/case_img_2.png';
import img3 from '../assets/images/case_img_3.png';

// landing page
export const CaseStudyContent = [
  {
    breadCrumbsOne: 'Under NDA',
    breadCrumbsTwo: 'FinTech',
    country: 'Country',
    tech: 'Core tech',
    techName: 'Flutter, React JS,.NET',
    countryName: 'Saudi Arabia',
    title: 'Micro-investment platform',
    info: 'A turnkey solution htmlFor managing micro-investments and savings htmlFor the Middle East market',
    image: img1,
  },
  {
    breadCrumbsOne: 'Under NDA',
    breadCrumbsTwo: 'FinTech',
    country: 'Country',
    countryName: 'Saudi Arabia',
    tech: 'Core tech',
    techName: 'Flutter, React JS,.NET',
    title: 'TMS htmlFor logistics company',
    info: 'Transportation management system with automatic route planning module.',
    image: img2,
  },
  {
    breadCrumbsOne: 'Under NDA',
    breadCrumbsTwo: 'FinTech',
    country: 'Country',
    countryName: 'Saudi Arabia',
    tech: 'Core tech',
    techName: 'Flutter, React JS,.NET',
    title: 'Video-on-demand platform',
    info: 'A large online video streaming service offering thousands of movies and TV series.',
    image: img3,
  },
];
// FrontEnd Page
export const FrontEndCaseStudyData = [
  {
    title: 'Telemedicine Solutions with Patient Portal and EMR',
    info: 'Creation of a SaaS for Booking and Managing Online Medical Appointments',
    image: img1,
    listOne:
      'Development of the SaaS for providing and receiving telecare services',
    listTwo:
      'Providing 24/7 online access to video and audio consultations of general practitioners and clinicians',
    listThree: 'Creation of an online appointment booking functionality',
    listForth:
      'Compliance with the requirements of GDPR and UK healthcare regulators (CQC and MHRA)',
  },
  {
    title: 'eBanking software system',
    info: 'Building of an Online Services Ecosystem for European Investment Bank',
    image: img2,
    listOne:
      'Creation of new software to simplify investment and account opening',
    listTwo: 'Maintaining and improving of the existing banking system',
    listThree: 'Meeting the investment banking regulation (FMIA)',
    listForth: 'Improvement of the UX for sign-up and digital account opening',
  },
];
export const featurecrm = [
  {
    img: img1,
    title: 'CRM modernization for a microfinance company',
    infos: [
      {
        name: 'Challenge:',
        info: 'A Canadian microfinance company hired us to rewrite the outdated CRM system from scratch using a modern tech stack as the old software couldn’t cope with the growing business needs. High scalability was the main requirement for the project.',
      },
      {
        name: 'How we solved it:',
        info: 'In three months, we completely rebuilt all СRM features using React.js and connected it with a powerful backend based on Node.js. We ensured required scalability by linking the CRM with Amazon S3 and Amazon EC2 cloud services.',
      },
    ],
    links: [
      {
        header: 'Core tech stack:',
        contant: 'React.js, Node.js, Amazon S3, Amazon EC2',
      },
      {
        header: 'Team:',
        contant: '5 members',
      },
      {
        header: 'Duration:',
        contant: '3 months',
      },
    ],
  },
  {
    img: img2,
    title: 'Brand new CRM for organizing weddings',
    infos: [
      {
        name: 'Challenge:',
        info: 'Create a CRM system for the Hawaiian market to connect wedding agencies and various contractors (florists, decorators, and so on). The required features were document template editor, Stripe and Paypal payments, and full-fledged e-mail client.',
      },
      {
        name: 'How we solved it:',
        info: 'We’ve made a C# powered CRM with MySQL databases, and a front-end part built with Angular. The entire CRM infrastructure was provided by the AWS cloud service. At the client’s demand, we introduced DocuSign for the signature of digital documents.',
      },
    ],
    links: [
      {
        header: 'Core tech stack:',
        contant: 'C#, Angular, MySQL, Amazon S3, Amazon EC2, Docusing',
      },
      {
        header: 'Team:',
        contant: '6 members',
      },
      {
        header: 'Duration:',
        contant: '8 months',
      },
    ],
  },
];
