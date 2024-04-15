/* eslint-disable max-len */
import img1 from '../assets/images/case_img_1.png';
import img2 from '../assets/images/case_img_2.png';
import img3 from '../assets/images/case_img_3.png';

// service -> mobile development page
import IoS from '../assets/images/MobileDevelopmentPages/IoS.png';
import Android from '../assets/images/MobileDevelopmentPages/Android.png';
// service -> mobile development page -> language icons
import { ReactComponent as JavaIcon } from '../assets/images/MobileDevelopmentPages/JAVA.svg';
import { ReactComponent as KotlinIcon } from '../assets/images/MobileDevelopmentPages/Kotlin.svg';
import { ReactComponent as SwiftIcon } from '../assets/images/MobileDevelopmentPages/Swift.svg';
import { ReactComponent as ObjectIcon } from '../assets/images/MobileDevelopmentPages/Object.svg';
import { ReactComponent as FireIcon } from '../assets/images/MobileDevelopmentPages/FireBase.svg';
import { ReactComponent as SQLIcon } from '../assets/images/MobileDevelopmentPages/SQLite.svg';
import { ReactComponent as RealmIcon } from '../assets/images/MobileDevelopmentPages/Realme.svg';
import { ReactComponent as CoreIcon } from '../assets/images/MobileDevelopmentPages/CoreData.svg';
import { ReactComponent as RoboIcon } from '../assets/images/MobileDevelopmentPages/Robo.svg';
import { ReactComponent as RXIcon } from '../assets/images/MobileDevelopmentPages/RXJAva.svg';
import { ReactComponent as JUIcon } from '../assets/images/MobileDevelopmentPages/JUnit.svg';
import { ReactComponent as MockIcon } from '../assets/images/MobileDevelopmentPages/Mok.svg';
import { ReactComponent as EspressoICon } from '../assets/images/MobileDevelopmentPages/Espresso.svg';
import { ReactComponent as CocoaIcon } from '../assets/images/MobileDevelopmentPages/Cocoa.svg';
import { ReactComponent as SocketIcon } from '../assets/images/MobileDevelopmentPages/Socket.svg';
import { ReactComponent as AlamoIcon } from '../assets/images/MobileDevelopmentPages/Alamo.svg';
import { ReactComponent as MoyaIcon } from '../assets/images/MobileDevelopmentPages/Moya.svg';
import { ReactComponent as FabricIcon } from '../assets/images/IoSBuild/fabric.svg';
import { ReactComponent as FastLaneIcon } from '../assets/images/IoSBuild/fastlane.svg';
import { ReactComponent as AngularIcon } from '../assets/images/Angular.svg';
import { ReactComponent as ReactIcon } from '../assets/images/reactThin.svg';
import { ReactComponent as JavascriptIcon } from '../assets/images/JavaScript.svg';
import { ReactComponent as HtmlIcon } from '../assets/images/HTML5.svg';
import { ReactComponent as CssIcon } from '../assets/images/CSS.svg';
import { ReactComponent as LessIcon } from '../assets/images/Less.svg';
import { ReactComponent as SassIcon } from '../assets/images/Sass.svg';
import { ReactComponent as PHPIcon } from '../assets/images/php.svg';
import { ReactComponent as CICON } from '../assets/images/C#.svg';
import { ReactComponent as NodeJSIcon } from '../assets/images/JS.svg';
import { ReactComponent as ExpressIcon } from '../assets/images/express.svg';
import { ReactComponent as LaravelIcon } from '../assets/images/laravel.svg';
import { ReactComponent as YII2Icon } from '../assets/images/YII2.svg';
// import { ReactComponent as SymfonyIcon } from '../assets/images/Symfony.svg';
// import { ReactComponent as ASPIcon } from '../assets/images/ASP.svg';
import { ReactComponent as OpenCartIcon } from '../assets/images/opencart.svg';
import { ReactComponent as WordPressIcon } from '../assets/images/wordpress.svg';
import { ReactComponent as JoomlaIcon } from '../assets/images/joomla.svg';
import { ReactComponent as MySQLIcon } from '../assets/images/mySQL.svg';
import { ReactComponent as PostSQLIcon } from '../assets/images/PostgreSQL.svg';
import { ReactComponent as MongoDBIcon } from '../assets/images/MongoDB.svg';
import { ReactComponent as ElasticSearchIcon } from '../assets/images/Elasticsearch.svg';
import { ReactComponent as RedisIcon } from '../assets/images/Redis.svg';
// web development section
import { ReactComponent as CoreReactIcon } from '../assets/images/FrontEndPage/React.svg';
import { ReactComponent as CoreAngular } from '../assets/images/FrontEndPage/Angular.svg';
import { ReactComponent as CoreVue } from '../assets/images/FrontEndPage/VueJS.svg';
import img6 from './../assets/images/investmentImg.png';
import img7 from './../assets/images/loram.png';

export const CaseStudyContent = [
  {
    title: 'Micro-investment platform',
    info: 'A turnkey solution htmlFor managing micro-investments and savings htmlFor the Middle East market',
    image: img1,
  },
  {
    title: 'TMS htmlFor logistics company',
    info: 'Transportation management system with automatic route planning module.',
    image: img2,
  },
  {
    title: 'Video-on-demand platform',
    info: 'A large online video streaming service offering thousands of movies and TV series.',
    image: img3,
  },
];

// ===========Service page================

export const softwareDevelopmentArrowContent = [
  {
    heading: 'First contact',
    id: '01',
    content:
      'After you leave a request on our website, it goes straight to our manager. After processing it, the manager contacts you within 24 hours to schedule a meeting htmlFor a more detailed conversation about the project. You describe your project requirements and business goals. After that, our specialist can provide you with rough estimate.',
    listItem: [
      {
        listItemName: 'Business development manager',
      },
    ],
  },
  {
    heading: 'Discovery phase',
    id: '02',
    content:
      'The main goal of our discovery phase is to collect your requirements—platforms you want to cover, features to include, third-party services to integrate (like Stripe or Google Maps), and more. With a Solution Architect, we design architecture from the ground up to make sure it goes along with your business goals from the early stages.',
    listItem: [
      {
        listItemName: 'Business development manager',
      },
    ],
  },
  {
    heading: 'UI/UX design',
    id: '03',
    content:
      'Our UI/UX designers create wireframes, a style guide, and prepare all the screens and their possible conditions. If you approve our work, the UI/UX designer handles the project over to developers. We prepare a style guide containing all the information designers and developers may need, including colors, gradients, and typography.',
    listItem: [
      {
        listItemName: 'Sales Manager',
      },
      {
        listItemName: 'Business Analyst',
      },
      {
        listItemName: 'Project Manager',
      },
      {
        listItemName: 'Solution Architect ',
      },
      {
        listItemName: 'QA Engineers ',
      },
    ],
  },
  {
    heading: 'Development process',
    id: '04',
    content:
      'The development team implements the required features. Depending on the project, you can cooperate with various tech experts like iOS, Android, or web developers (front-end and back-end). We create software in sprints — 2-week periods during which a development team has to complete a discussed amount of work.',
    listItem: [
      {
        listItemName: 'UI/UX Designers',
      },
      {
        listItemName: 'QA Engineers',
      },
    ],
  },
  {
    heading: 'Quality assurance',
    id: '05',
    content:
      'Developers implement features by sprints, while QA engineers test the product to find bugs. They test both back end and front end and create reports htmlFor software developers to fix issues. QA engineers take part in the project till release. That’s because their role here is to check the functionality developed during each sprint.',
    listItem: [
      {
        listItemName: 'Software Developers',
      },
    ],
  },
  {
    heading: 'Deployment',
    id: '06',
    content:
      'Before launching the project, QA engineers perform regression testing to ensure that everything works correctly. We help with the app release on AppStore or Google Play. In case of the web project, we move it to the live server on the release day. Once you’re satisfied with the result, the team passes all project materials to you.',
    listItem: [
      {
        listItemName: 'Software Developers',
      },
      {
        listItemName: 'QA Engineers',
      },
    ],
  },
  {
    heading: 'Support and maintenance',
    id: '07',
    content:
      'Our cooperation doesn’t end when the software is live. We can continue working on the software to add various tweaks based on feedback from users and maintain your solution with improvements and new features. Project maintenance stands htmlFor bug fixing, stability and performance improvements, and code optimization.',
    listItem: [
      {
        listItemName: 'Project Manager',
      },
      {
        listItemName: 'Developers',
      },
      {
        listItemName: 'QA engineers',
      },
      {
        listItemName: 'DevOps engineers',
      },
    ],
  },
];

// =========service ----> mobile development page======================
export const IosAndroidDetails = [
  {
    img: IoS,
    information: 'Fully functional applications for all Apple devices',
  },
  {
    img: Android,
    information: 'Sophisticated applications for Android-powered devices',
  },
];
export const customDetails = [
  {
    id: '01',
    info: 'On-demand taxi apps usually consist of two separate in-app roles or apps: Driver’s and Passenger’s. Besides basic functionality, taxi apps require map APIs (Google Maps, MapKit), payment gateways (Stripe, PayPal), and in-app calling feature integration (Twilio, Bandwith).',
    hours: '2200 hours',
    hrsInfo: 'Average development time',
    months: '6 months',
    monthInfo: 'Average project length',
  },
  {
    id: '02',
    info: 'When creating media streaming apps, we take care of seamless content delivery and work with trustful media processing platforms (Livestream, Brightcove). Streaming apps also require data storage (Cassandra, MySQL), geolocation (Google Maps, MapKit), etc.',
    hours: '2300 hours',
    hrsInfo: 'Average development time',
    months: '7 months',
    monthInfo: 'Average project length',
  },
  {
    id: '03',
    info: 'Booking apps have to be data-driven and feature-rich to meet users expectations. They should have a robust search engine (Elastic Search), flexible push notifications (Amazon SNS, Firebase Cloud Messaging), payment gateways (Stripe, Braintree), etc.',
    hours: '1800 hours',
    hrsInfo: 'Average development time',
    months: '4 months',
    monthInfo: 'Average project length',
  },
  {
    id: '04',
    info: 'Delivery applications usually consist of two separate apps: for customers and for couriers. Must-have features for delivery apps are geolocation (Google Maps, MapKit), email messaging (SendGrid), payments (Braintree, Stripe), analytics (Mixpanel), and others.',
    hours: '2500 hours',
    hrsInfo: 'Average development time',
    months: '7 months',
    monthInfo: 'Average project length',
  },
  {
    id: '05',
    info: 'Our engineers build any type of fitness applications: from nutrition to personal workout and activity tracking apps tailored to Android and iOS. Main features can be sync with native health services (HealthKit, GoogleFit), geolocation (Google Maps, MapKit), etc.',
    hours: '1800 hours',
    hrsInfo: 'Average development time',
    months: '4 months',
    monthInfo: 'Average project length',
  },
  {
    id: '06',
    info: 'Marketplace apps usually act as intermediaries between two parties: buyer and seller of goods or services. These solutions should be lightning-fast and have robust analytics powered with machine learning (Amazon ML).',
    hours: '1500 hours',
    hrsInfo: 'Average development time',
    months: '4 months',
    monthInfo: 'Average project length',
  },
];
// Tech Stack
export const Languages = {
  headingIcons: [
    {
      id: '01',
      heading: 'Java',
      langIcon: <JavaIcon />,
    },
    {
      id: '02',
      heading: 'Kotlin',
      langIcon: <KotlinIcon />,
    },
    {
      id: '03',
      heading: 'Swift',
      langIcon: <SwiftIcon />,
    },
    {
      id: '04',
      heading: 'Objective-C',
      langIcon: <ObjectIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Java',
      info: 'This general-purpose language can be applied for numerous tasks, including Android app development. The main advantages of Java are portability, scalability, and excellent performance, making it a perfect language for developing complex enterprise applications requiring room for growth.',
      itemDivision: '3B',
      deviceLang: 'devices run Java',
      percentage: '30%',
      performer: 'more performant',
    },
    {
      id: '02',
      subHeading: 'Kotlin',
      info: 'The new open-source programming language that Google uses to replace Java for building Android apps. It has clear syntax and can be compiled to JavaScript or JVM bytecode easily. Due to integration with all Java frameworks and libraries, the app development process goes faster and gives developers more tools to build native Android apps.',
      itemDivision: '30%',
      deviceLang: 'More maintainable functionality',
      percentage: '2.08%',
      performer: 'of all app downloads in Google Play',
    },
    {
      id: '03',
      subHeading: 'Swift',
      info: 'Swift is a robust programming language backed by Apple that allows creating top-notch and fast applications for all Apple operating systems. Safety, simplicity, and permanent performance enhancements make iOS app development with Swift an ideal solution for building iOS apps of any complexity.',
      itemDivision: '2.6x',
      deviceLang: 'faster than Objective-C',
      percentage: '8.4x',
      performer: 'faster than Python',
    },
    {
      id: '04',
      subHeading: 'Objective-C',
      info: 'This object-oriented programming language has been actively using for iOS app development for over 30 years. This fact alone makes Objective-C reliable as millions of lines of code are written on it. In addition, this code is backward compatible with C and C++ languages.',
      itemDivision: '2M+',
      deviceLang: 'apps built',
      percentage: '30%',
      performer: 'apps built',
    },
  ],
};
export const Databases = {
  headingIcons: [
    {
      id: '01',
      heading: 'Firebase',
      langIcon: <FireIcon />,
    },
    {
      id: '02',
      heading: 'SQLite',
      langIcon: <SQLIcon />,
    },
    {
      id: '03',
      heading: 'Realm',
      langIcon: <RealmIcon />,
    },
    {
      id: '04',
      heading: 'CoreData',
      langIcon: <CoreIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Firebase',
      info: 'This Backend-as-a-Service platform frees developers from such backend work as managing servers and writing APIs and lets them focus on building the top-notch user experience. Being almost an all-in-one backend solution, Firebase helps to speed up the iOS native app development.',
      itemDivision: '1M+',
      deviceLang: 'developers use Firebase',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
    {
      id: '02',
      subHeading: 'SQLite',
      info: 'It is a lightweight database geared toward getting rid of server-client architecture and storing all the app data directly on a mobile device. This DB is based on files, so it provides a wide range of capabilities for developers. Since SQLite doesn’t send requests to the server, it is much more powerful and faster.',
      itemDivision: '11th',
      deviceLang: 'top database',
      percentage: '35%',
      performer: 'Faster Than The Filesystem',
    },
    {
      id: '03',
      subHeading: 'Realm',
      info: 'Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.',
      itemDivision: '+30%',
      deviceLang: 'app performance',
      percentage: '75,921',
      performer: 'apps worldwide',
    },
    {
      id: '04',
      subHeading: 'CoreData',
      info: 'CoreData framework makes it possible to speed up the iOS application development process. CoreData simplifies memory management since developers load into memory only those objects they use at the moment. Integrating sorting of objects and optional automatic validation of property values help the app work with a database.',
      itemDivision: '30%',
      deviceLang: 'data loading',
      percentage: '+40%',
      performer: 'developers’ efficiency',
    },
  ],
};
export const Frameworks = {
  headingIcons: [
    {
      id: '01',
      heading: 'Roboelectric',
      langIcon: <RoboIcon />,
    },
    {
      id: '02',
      heading: 'RxJava',
      langIcon: <RXIcon />,
    },
    {
      id: '03',
      heading: 'JUnit',
      langIcon: <JUIcon />,
    },
    {
      id: '04',
      heading: 'Mockito',
      langIcon: <MockIcon />,
    },
    {
      id: '05',
      heading: 'Espresso',
      langIcon: <EspressoICon />,
    },
    {
      id: '06',
      heading: 'ReactiveCocoa',
      langIcon: <CocoaIcon />,
    },
    {
      id: '07',
      heading: 'Socket.io',
      langIcon: <SocketIcon />,
    },
    {
      id: '08',
      heading: 'Alamofire',
      langIcon: <AlamoIcon />,
    },
    {
      id: '09',
      heading: 'Moya',
      langIcon: <MoyaIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Roboelectric',
      info: 'This open-source Android unit test framework allows QA specialists to launch tests for Android apps via local JVM. This Android app test type is similar to black-box testing, and the test can become more efficient for refactoring, and the apps behavior can be tested as well. The framework makes the testing process faster.',
      itemDivision: '30%',
      deviceLang: 'Faster testing process',
      percentage: '40%',
      performer: 'Higher efficiency',
    },
    {
      id: '02',
      subHeading: 'RxJava',
      info: 'RxJava is a specific implementation of reactive programming for Java and Android, an open-source library with Observer patterns and iterator patterns that help build good software with front-end and back-end parts. It offers developers intuitiveness, extensions, quick reaction to any changes.',
      itemDivision: '20%',
      deviceLang: 'Faster compilation',
      percentage: '10%',
      performer: 'Faster performance',
    },
    {
      id: '03',
      subHeading: 'JUnit',
      info: 'JUnit is an open-source unit testing framework in the Java language. It provides an incredible opportunity to write code and test it simultaneously! This framework can create test suites step by step to trace all possible side effects thoroughly. Thus, it is mighty, and its graphical interface makes the whole testing process simpler.',
      itemDivision: '+30%',
      deviceLang: 'Faster testing',
      percentage: '+40%',
      performer: 'improved bug detection',
    },
    {
      id: '04',
      subHeading: 'Mockito',
      info: 'It is a mocking framework for effective unit testing of Java applications. This tool facilitates creating mock objects and allows programmers to verify the system`s behavior under test without establishing expectations beforehand. As a result, you will get a simpler test code that is much easier to read and edit.',
      itemDivision: '7.2K',
      deviceLang: 'stars on GitHub',
      percentage: '25%',
      performer: 'faster testing process',
    },
    {
      id: '05',
      subHeading: 'Espresso',
      info: 'Espresso is an automation tool created by Google. This framework is used to write concise and reliable UI tests and has many advantages for developers and QA engineers, so it dramatically accelerates the development process. It is easy to use within popular IDEs and provides useful testing annotations and assertions.',
      itemDivision: '7.2K',
      deviceLang: 'stars on GitHub',
      percentage: '25%',
      performer: 'faster testing process',
    },
    {
      id: '06',
      subHeading: 'ReactiveCocoa',
      info: 'ReactiveCocoa is a framework that allows using reactive functional programming techniques for custom iOS application development. It offers bindings and reactive extensions for the Cocoa Touch framework to make code much shorter. Tailored to Swift, the framework defines the interface for events, making it easier to filter and compose them.',
      itemDivision: '20%',
      deviceLang: 'faster development',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
    {
      id: '07',
      subHeading: 'Socket.io',
      info: 'Socket.io framework enables real-time data exchange and communication. It improves and accelerates the integration of chats and video chats to iOS apps. Socket.io has many automated processes for easy communication feature integration. Flexible and simple customization helps iOS app development agency implement their task faster.',
      itemDivision: '191k+',
      deviceLang: 'devices run Java',
      percentage: '40%',
      performer: 'more performant',
    },
    {
      id: '08',
      subHeading: 'Alamofire',
      info: 'Alamofire is a well-tested and reliable library for all Apple platforms. It’s designed for working with HTTP requests. Alamofire significantly boosts developer productivity because it simplifies a number of routine tasks for iOS application development companies. It makes the code cleaner that helps to decrease the possibility of bugs.',
      itemDivision: '-20%',
      deviceLang: 'bugs occurrence',
      percentage: '10%',
      performer: 'faster development',
    },
    {
      id: '09',
      subHeading: 'Moya',
      info: 'Moya is a network abstraction library to work with network data and for quick project integration with RESTful API. Moya allows the iOS application development company to focus on main application features and speed up the implementation of networking data. Using Moya, developers extract network responses to perform unit tests efficiently.',
      itemDivision: '40%',
      deviceLang: 'faster API manager integration',
      percentage: '30%',
      performer: 'development time optimization',
    },
  ],
};

// IoSAppContent

export const AppIoSContentLanguages = {
  headingIcons: [
    {
      id: '01',
      heading: 'Swift',
      langIcon: <SwiftIcon />,
    },
    {
      id: '02',
      heading: 'Objective-C',
      langIcon: <ObjectIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Swift',
      info: 'Swift is a robust programming language backed by Apple that allows creating top-notch and fast applications for all Apple operating systems. Safety, simplicity, and permanent performance enhancements make iOS app development with Swift an ideal solution for building iOS apps of any complexity.',
      itemDivision: '2.6x',
      deviceLang: 'faster than Objective-C',
      percentage: '8.4x',
      performer: 'faster than Python',
    },
    {
      id: '02',
      subHeading: 'Objective-C',
      info: 'This object-oriented programming language has been actively using for iOS app development for over 30 years. This fact alone makes Objective-C reliable as millions of lines of code are written on it. In addition, this code is backward compatible with C and C++ languages.',
      itemDivision: '2M+',
      deviceLang: 'apps built',
      percentage: '30%',
      performer: 'apps built',
    },
  ],
};
export const AppIoSContentDatabases = {
  headingIcons: [
    {
      id: '01',
      heading: 'CoreData',
      langIcon: <CoreIcon />,
    },
    {
      id: '02',
      heading: 'Realm',
      langIcon: <RealmIcon />,
    },
    {
      id: '03',
      heading: 'Firebase',
      langIcon: <FireIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'CoreData',
      info: 'CoreData framework makes it possible to speed up the iOS application development process. CoreData simplifies memory management since developers load into memory only those objects they use at the moment. Integrating sorting of objects and optional automatic validation of property values help the app work with a database.',
      itemDivision: '30%',
      deviceLang: 'data loading',
      percentage: '+40%',
      performer: 'developers’ efficiency',
    },
    {
      id: '02',
      subHeading: 'Realm',
      info: 'Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.',
      itemDivision: '+30%',
      deviceLang: 'app performance',
      percentage: '75,921',
      performer: 'apps worldwide',
    },
    {
      id: '03',
      subHeading: 'Firebase',
      info: 'This Backend-as-a-Service platform frees developers from such backend work as managing servers and writing APIs and lets them focus on building the top-notch user experience. Being almost an all-in-one backend solution, Firebase helps to speed up the iOS native app development.',
      itemDivision: '1M+',
      deviceLang: 'developers use Firebase',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
  ],
};
export const AppIoSContentFRP = {
  headingIcons: [
    {
      id: '01',
      heading: 'RxSwift',
      langIcon: <SwiftIcon />,
    },
    {
      id: '02',
      heading: 'ReactiveCocoa',
      langIcon: <CocoaIcon />,
    },
    {
      id: '03',
      heading: 'Alamofire',
      langIcon: <AlamoIcon />,
    },
    {
      id: '04',
      heading: 'Moya',
      langIcon: <MoyaIcon />,
    },
    {
      id: '05',
      heading: 'Socket.io',
      langIcon: <SocketIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'RxSwift',
      info: 'RxSwift library is based on top of Swift and simplifies the development of dynamic apps for iOS engineers. Among the main advantages of this library are asynchrony, clean code, architecture, etc. All it results in faster and more efficient iOS application development services and problem-solving.',
      itemDivision: '14k+',
      deviceLang: 'stars on GitHub',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
    {
      id: '02',
      subHeading: 'ReactiveCocoa',
      info: 'ReactiveCocoa is a framework that allows using reactive functional programming techniques for custom iOS application development. It offers bindings and reactive extensions for the Cocoa Touch framework to make code much shorter. Tailored to Swift, the framework defines the interface for events, making it easier to filter and compose them.',
      itemDivision: '20%',
      deviceLang: 'faster development',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
    {
      id: '03',
      subHeading: 'Alamofire',
      info: 'Alamofire is a well-tested and reliable library for all Apple platforms. It’s designed for working with HTTP requests. Alamofire significantly boosts developer productivity because it simplifies a number of routine tasks for iOS application development companies. It makes the code cleaner that helps to decrease the possibility of bugs.',
      itemDivision: '-20%',
      deviceLang: 'bugs occurrence',
      percentage: '10%',
      performer: 'faster development',
    },
    {
      id: '04',
      subHeading: 'Moya',
      info: 'Moya is a network abstraction library to work with network data and for quick project integration with RESTful API. Moya allows the iOS application development company to focus on main application features and speed up the implementation of networking data. Using Moya, developers extract network responses to perform unit tests efficiently.',
      itemDivision: '40%',
      deviceLang: 'faster API manager integration',
      percentage: '30%',
      performer: 'development time optimization',
    },
    {
      id: '05',
      subHeading: 'Socket.io',
      info: 'Socket.io framework enables real-time data exchange and communication. It improves and accelerates the integration of chats and video chats to iOS apps. Socket.io has many automated processes for easy communication feature integration. Flexible and simple customization helps iOS app development agency implement their task faster.',
      itemDivision: '191k+',
      deviceLang: 'websites worldwide',
      percentage: '40%',
      performer: 'faster chat integration',
    },
  ],
};
export const AppIoSContentCD = {
  headingIcons: [
    {
      id: '01',
      heading: 'Fabric',
      langIcon: <FabricIcon />,
    },
    {
      id: '02',
      heading: 'Fastlane',
      langIcon: <FastLaneIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Fabric',
      info: 'This platform provides developers with smart solutions, helping them provide better iOS development services. Fabric facilitates dealing with crash reporting, deployment, beta distribution, and more. Put simply, this tool saves precious time and gives developers more control over their apps.',
      itemDivision: '580K',
      deviceLang: 'developers use Fabric',
      percentage: '10%',
      performer: 'efficiency increase',
    },
    {
      id: '02',
      subHeading: 'Fastlane',
      info: 'Fastlane facilitates the process of iOS apps deployment. This tool uploads a beta version of the app to the selected beta service. It automates the entire app store deployment process: Fastlane generates localized screenshots, uploads metadata, stores code signings, and automatically submits new versions of the iOS app.',
      itemDivision: '65%',
      deviceLang: 'faster deployment process',
      percentage: '30%',
      performer: 'faster unit testing',
    },
  ],
};

export const AppAndroidContentLanguages = {
  headingIcons: [
    {
      id: '01',
      heading: 'Java',
      langIcon: <JavaIcon />,
    },
    {
      id: '02',
      heading: 'Kotlin',
      langIcon: <KotlinIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Java',
      info: 'This general-purpose language can be applied for numerous tasks, including Android app development. The main advantages of Java are portability, scalability, and excellent performance, making it a perfect language for developing complex enterprise applications requiring room for growth.',
      itemDivision: '3B',
      deviceLang: 'devices run Java',
      percentage: '30%',
      performer: 'more performant',
    },
    {
      id: '02',
      subHeading: 'Kotlin',
      info: 'The new open-source programming language that Google uses to replace Java for building Android apps. It has clear syntax and can be compiled to JavaScript or JVM bytecode easily. Due to integration with all Java frameworks and libraries, the app development process goes faster and gives developers more tools to build native Android apps.',
      itemDivision: '30%',
      deviceLang: 'More maintainable functionality',
      percentage: '2.08%',
      performer: 'of all app downloads in Google Play',
    },
  ],
};
export const AppAndroidContentDatabases = {
  headingIcons: [
    {
      id: '01',
      heading: 'Firebase',
      langIcon: <FireIcon />,
    },
    {
      id: '02',
      heading: 'SQLite',
      langIcon: <SQLIcon />,
    },
    {
      id: '03',
      heading: 'Realm',
      langIcon: <RealmIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Firebase',
      info: 'This Backend-as-a-Service platform frees developers from such backend work as managing servers and writing APIs and lets them focus on building the top-notch user experience. Being almost an all-in-one backend solution, Firebase helps to speed up the iOS native app development.',
      itemDivision: '1M+',
      deviceLang: 'developers use Firebase',
      percentage: '+30%',
      performer: 'developers’ efficiency',
    },
    {
      id: '02',
      subHeading: 'SQLite',
      info: 'It is a lightweight database geared toward getting rid of server-client architecture and storing all the app data directly on a mobile device. This DB is based on files, so it provides a wide range of capabilities for developers. Since SQLite doesn’t send requests to the server, it is much more powerful and faster.',
      itemDivision: '11th',
      deviceLang: 'top database',
      percentage: '35%',
      performer: 'Faster Than The Filesystem',
    },
    {
      id: '03',
      subHeading: 'Realm',
      info: 'Realm is a popular mobile database for every iOS app development platform and also for Android. It’s incredibly rapid (much more rapid than SQLite), cross-platform, thread-safe, and has an easy-to-use API. The developers call it a contemporary and reliable substitute for the native Apple’s databases.',
      itemDivision: '+30%',
      deviceLang: 'app performance',
      percentage: '75,921',
      performer: 'apps worldwide',
    },
  ],
};
export const AppAndroidContentFrameworks = {
  headingIcons: [
    {
      id: '01',
      heading: 'Roboelectric',
      langIcon: <RoboIcon />,
    },
    {
      id: '02',
      heading: 'RxJava',
      langIcon: <RXIcon />,
    },
    {
      id: '03',
      heading: 'JUnit',
      langIcon: <JUIcon />,
    },
    {
      id: '04',
      heading: 'Mockito',
      langIcon: <MockIcon />,
    },
    {
      id: '05',
      heading: 'Espresso',
      langIcon: <EspressoICon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'Roboelectric',
      info: 'This open-source Android unit test framework allows QA specialists to launch tests for Android apps via local JVM. This Android app test type is similar to black-box testing, and the test can become more efficient for refactoring, and the app`s behavior can be tested as well. The framework makes the testing process faster.',
      itemDivision: '30%',
      deviceLang: 'Faster testing process',
      percentage: '40%',
      performer: 'Higher efficiency',
    },
    {
      id: '02',
      subHeading: 'RxJava',
      info: 'RxJava is a specific implementation of reactive programming for Java and Android, an open-source library with Observer patterns and iterator patterns that help build good software with front-end and back-end parts. It offers developers intuitiveness, extensions, quick reaction to any changes.',
      itemDivision: '20%',
      deviceLang: 'Faster compilation',
      percentage: '10%',
      performer: 'Faster performance',
    },
    {
      id: '03',
      subHeading: 'JUnit',
      info: 'JUnit is an open-source unit testing framework in the Java language. It provides an incredible opportunity to write code and test it simultaneously! This framework can create test suites step by step to trace all possible side effects thoroughly. Thus, it is mighty, and its graphical interface makes the whole testing process simpler.',
      itemDivision: '+30%',
      deviceLang: 'Faster testing',
      percentage: '+40%',
      performer: 'improved bug detection',
    },
    {
      id: '04',
      subHeading: 'Mockito',
      info: 'It is a mocking framework for effective unit testing of Java applications. This tool facilitates creating mock objects and allows programmers to verify the systems behavior under test without establishing expectations beforehand. As a result, you will get a simpler test code that is much easier to read and edit.',
      itemDivision: '7.2K',
      deviceLang: 'stars on GitHub',
      percentage: '25%',
      performer: 'faster testing process',
    },
    {
      id: '05',
      subHeading: 'Espresso',
      info: 'Espresso is an automation tool created by Google. This framework is used to write concise and reliable UI tests and has many advantages for developers and QA engineers, so it dramatically accelerates the development process. It is easy to use within popular IDEs and provides useful testing annotations and assertions.',
      itemDivision: '7.2K',
      deviceLang: 'stars on GitHub',
      percentage: '25%',
      performer: 'faster testing process',
    },
  ],
};

// technologies content
export const WebTechFront = {
  headingIcons: [
    {
      id: '01',
      heading: 'AngularJS',
      langIcon: <AngularIcon />,
    },
    {
      id: '02',
      heading: 'React',
      langIcon: <ReactIcon />,
    },
    {
      id: '03',
      heading: 'Javascript',
      langIcon: <JavascriptIcon />,
    },
    {
      id: '04',
      heading: 'HTML5',
      langIcon: <HtmlIcon />,
    },
    {
      id: '05',
      heading: 'CSS',
      langIcon: <CssIcon />,
    },
    {
      id: '06',
      heading: 'Less',
      langIcon: <LessIcon />,
    },
    {
      id: '07',
      heading: 'Sass',
      langIcon: <SassIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'AngularJS',
      info: 'This framework is perfect for creating video streaming apps, user-generated content portals, and social apps. It’s a time-saving tool that lets developers write less code and achieve greater functionality based on the MVC architecture.',
      itemDivision: '2.5',
      deviceLang: 'Websites',
      percentage: '20%',
      performer: 'Faster delivery',
    },
    {
      id: '02',
      subHeading: 'React',
      info: 'Advanced JS library for building UI with the ability to reuse system components, which significantly boosts productivity and facilitates further maintenance. React helps build high-load apps with stable code and continuous app performance.',
      itemDivision: 'SEO',
      deviceLang: 'Friendly',
      percentage: '20%',
      performer: 'Faster delivery',
    },
    {
      id: '03',
      subHeading: 'Javascript',
      info: 'A programming language that makes it possible to turn static pages into interactive ones. Using JavaScript, it is possible to create dynamically updated content and animate images. JavaScript is very popular since it is an easy-to-use language and it is supported by almost all browsers.',
      itemDivision: '92%',
      deviceLang: 'of websites',
      percentage: '40%',
      performer: 'more efficient',
    },
    {
      id: '04',
      subHeading: 'HTML5',
      info: 'In general, HTML stands for Hypertext Markup Language used together with CSS to markup and tailor the look of pages. The fifth is the latest version of HTML, containing many enhancements that allow dealing with more engineering aspects.',
      itemDivision: '74%',
      deviceLang: 'switched to it',
      percentage: '#1',
      performer: 'choice for web apps',
    },
    {
      id: '05',
      subHeading: 'CSS',
      info: 'Cascading Style Sheets define how HTML elements will be displayed on a page. CSS is used to recreate user interfaces composed by designers. Put simply, the button you see on a website is an HTML element, but it was colored and centered by means of CSS.',
      itemDivision: '96%',
      deviceLang: 'websites worldwide',
      percentage: '#1',
      performer: 'choice for web apps',
    },
    {
      id: '06',
      subHeading: 'LESS',
      info: 'A CSS pre-processor that provides CSS with dynamic capabilities. This compiler is easy to use, possible to use variables. It can be used on the client’s side, new classes can be integrated. LESS simplifies the workflow process, gives developers more flexibility.',
      itemDivision: '30%',
      deviceLang: 'faster web development',
      percentage: '155k+',
      performer: 'websites',
    },
    {
      id: '07',
      subHeading: 'SASS',
      info: 'SASS is a CSS pre-processor that lets us make writing CSS much more powerful by using variables, loops, and other functionalities. Sass helps us write clean, easy, and less CSS in a programming construct. It is stable, robust, elegant and compatible with all versions of CSS.',
      itemDivision: '30%',
      deviceLang: 'faster coding',
      percentage: '65%',
      performer: 'of developersuse SASS',
    },
  ],
};
export const WebTechBack = {
  headingIcons: [
    {
      id: '01',
      heading: 'PHP',
      langIcon: <PHPIcon />,
    },
    {
      id: '02',
      heading: 'C#',
      langIcon: <CICON />,
    },
    {
      id: '03',
      heading: 'NodeJS',
      langIcon: <NodeJSIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'PHP',
      info: 'The abbreviation of PHP stands for Personal Home Page. Originally, it was designed as a simple scripting language and then evolved into something more over time. Nowadays, this programming language is widely used for server-side programming.',
      itemDivision: '79%',
      deviceLang: 'websites worldwide',
      percentage: '4th',
      performer: 'place in PYPL Index',
    },
    {
      id: '02',
      subHeading: 'C#',
      info: 'An object-oriented language that allows developers to create various secure and reliable apps that run on .Net Framework. It is considered to be one of the most powerful and demanded languages. A unique language that is used to build native Windows apps, mobile apps, REST APIs, and other software.',
      itemDivision: '4th',
      deviceLang: 'most popular language',
      percentage: '40%',
      performer: 'faster development',
    },
    {
      id: '03',
      subHeading: 'NodeJS',
      info: 'NodeJS is an event-driven technology for creating real-time web applications. Node.js is perfect for creating data-heavy solutions as it is capable of handling traffic spikes. NodeJS has successfully applied for various website application development services.',
      itemDivision: '10%',
      deviceLang: 'faster MVP delivery',
      percentage: '20%',
      performer: 'higher performance',
    },
  ],
};
export const WebTechFrameworks = {
  headingIcons: [
    {
      id: '01',
      heading: 'Express.js',
      langIcon: <ExpressIcon />,
    },
    {
      id: '02',
      heading: 'Laravel',
      langIcon: <LaravelIcon />,
    },
    {
      id: '03',
      heading: 'YII2',
      langIcon: <YII2Icon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'PHP',
      info: 'The abbreviation of PHP stands for "Personal Home Page." Originally, it was designed as a simple scripting language and then evolved into something more over time. Nowadays, this programming language is widely used for server-side programming.',
      itemDivision: '79%',
      deviceLang: 'websites worldwide',
      percentage: '4th',
      performer: 'place in PYPL Index',
    },
    {
      id: '02',
      subHeading: 'C#',
      info: 'An object-oriented language that allows developers to create various secure and reliable apps that run on .Net Framework. It is considered to be one of the most powerful and demanded languages. A unique language that is used to build native Windows apps, mobile apps, REST APIs, and other software.',
      itemDivision: '4th',
      deviceLang: 'most popular language',
      percentage: '40%',
      performer: 'faster development',
    },
    {
      id: '03',
      subHeading: 'NodeJS',
      info: 'NodeJS is an event-driven technology for creating real-time web applications. Node.js is perfect for creating data-heavy solutions as it is capable of handling traffic spikes. NodeJS has successfully applied for various website application development services.',
      itemDivision: '10%',
      deviceLang: 'faster MVP delivery',
      percentage: '20%',
      performer: 'higher performance',
    },
  ],
};
export const WebTechCMS = {
  headingIcons: [
    {
      id: '01',
      heading: 'OpenCart',
      langIcon: <OpenCartIcon />,
    },
    {
      id: '02',
      heading: 'WordPress',
      langIcon: <WordPressIcon />,
    },
    {
      id: '03',
      heading: 'Joomla',
      langIcon: <JoomlaIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'PHP',
      info: 'The abbreviation of PHP stands for "Personal Home Page." Originally, it was designed as a simple scripting language and then evolved into something more over time. Nowadays, this programming language is widely used for server-side programming.',
      itemDivision: '79%',
      deviceLang: 'websites worldwide',
      percentage: '4th',
      performer: 'place in PYPL Index',
    },
    {
      id: '02',
      subHeading: 'C#',
      info: 'An object-oriented language that allows developers to create various secure and reliable apps that run on .Net Framework. It is considered to be one of the most powerful and demanded languages. A unique language that is used to build native Windows apps, mobile apps, REST APIs, and other software.',
      itemDivision: '4th',
      deviceLang: 'most popular language',
      percentage: '40%',
      performer: 'faster development',
    },
    {
      id: '03',
      subHeading: 'NodeJS',
      info: 'NodeJS is an event-driven technology for creating real-time web applications. Node.js is perfect for creating data-heavy solutions as it is capable of handling traffic spikes. NodeJS has successfully applied for various website application development services.',
      itemDivision: '10%',
      deviceLang: 'faster MVP delivery',
      percentage: '20%',
      performer: 'higher performance',
    },
  ],
};
export const WebTechDatabases = {
  headingIcons: [
    {
      id: '01',
      heading: 'MySQL',
      langIcon: <MySQLIcon />,
    },
    {
      id: '02',
      heading: 'PostgreSQL',
      langIcon: <PostSQLIcon />,
    },
    {
      id: '03',
      heading: 'MongoDB',
      langIcon: <MongoDBIcon />,
    },
    {
      id: '04',
      heading: 'Elasticsearch',
      langIcon: <ElasticSearchIcon />,
    },
    {
      id: '05',
      heading: 'Redis',
      langIcon: <RedisIcon />,
    },
  ],
  information: [
    {
      id: '01',
      subHeading: 'PHP',
      info: 'The abbreviation of PHP stands for "Personal Home Page." Originally, it was designed as a simple scripting language and then evolved into something more over time. Nowadays, this programming language is widely used for server-side programming.',
      itemDivision: '79%',
      deviceLang: 'websites worldwide',
      percentage: '4th',
      performer: 'place in PYPL Index',
    },
    {
      id: '02',
      subHeading: 'C#',
      info: 'An object-oriented language that allows developers to create various secure and reliable apps that run on .Net Framework. It is considered to be one of the most powerful and demanded languages. A unique language that is used to build native Windows apps, mobile apps, REST APIs, and other software.',
      itemDivision: '4th',
      deviceLang: 'most popular language',
      percentage: '40%',
      performer: 'faster development',
    },
    {
      id: '03',
      subHeading: 'NodeJS',
      info: 'NodeJS is an event-driven technology for creating real-time web applications. Node.js is perfect for creating data-heavy solutions as it is capable of handling traffic spikes. NodeJS has successfully applied for various website application development services.',
      itemDivision: '10%',
      deviceLang: 'faster MVP delivery',
      percentage: '20%',
      performer: 'higher performance',
    },
  ],
};
// technologies advance app
export const WebAdvanceAppContent = [
  {
    heading: 'Media Expertise',
    listItem1: 'Live Streaming and OTT delivery',
    listItem2: 'Video Processing',
    listItem3: 'Content Distribution Networks',
    listItem4: 'Web RTC, FFMPEG, Wowza, DRM',
  },
  {
    heading: 'Blockchain Solutions',
    listItem1: 'Frameworks: Ethereum, Hyperledger, R3 Corda',
    listItem2: ' Smart contracts using PoW consensus',
    listItem3: 'Byzantine fault-tolerant (BFT) algorithms',
  },
  {
    heading: 'AWS Development Expertise',
    listItem1: 'EC2 / S3 / Lambda / Elastic Beanstalk',
    listItem2: 'Sealing and Security',
    listItem3: 'Horizontal / Vertical Scaling',
    listItem4: 'Serverless Architecture',
    listItem5: '',
  },

  {
    heading: 'Progressive web apps',
    listItem1: 'React / Angular',
    listItem2: 'Offline connectivity (Cache API)',
    listItem3: 'PRPL Pattern',
    listItem4: 'HTTP/2 + Server Push',
    listItem5: '',
  },
  {
    heading: 'E-commerce Expertise',
    listItem1: 'AWS/Azure + .Net, JS, TypeScript',
    listItem2: 'B2B and B2C business models',
    listItem3: 'Payment Gateways (Stripe, Braintree, Adyen, PayPal)',
    listItem4: '',
    listItem5: '',
  },
  {
    heading: 'Big Data',
    listItem1: 'Big data architecture design',
    listItem2: 'Apache Spark and Hadoop',
    listItem3: 'HDFS, Hive, Pig, Impala, Oozie',
    listItem4: 'EMR, Redshift',
    listItem5: '',
  },
];

// ===frontEnd development page
export const FrontENdDevSectionContent = [
  {
    title: 'Custom Front End Web Development',
    info: 'As part of front-end development services, we create the software from scratch and enrich the functionality of products already used in business, offering appropriate solutions to unlock the potential of your growth.',
    buttonName: 'Get Consultation',
  },
  {
    title: 'Single Page Apps Development',
    info: 'We create SPA solutions that help create a flexible, scalable experience and demonstrate unparalleled fluidity and speed in operation so that users have the best emotions from interacting with your software product.',
    buttonName: 'Leave a request',
  },
  {
    title: 'Progressive Web Apps Development',
    info: 'A thoughtful approach to PWA technologies and deep engineering expertise help us create mobile versions of web solutions that guarantee users a native-like experience and flawless interaction on a wide range of devices',
    buttonName: 'Order an estimate',
  },
  {
    title: 'Legacy software modernization',
    info: 'Our engineering and analytical teams will carefully select approaches and tech tools, study your processes and technologies in use to give your software new superpowers with chosen front end development service.',
    buttonName: 'Share your idea',
  },
];
export const FrontEndCaseStudyContent = [
  {
    title: 'Micro-investment platform',
    info: 'A turnkey solution htmlFor managing micro-investments and savings htmlFor the Middle East market',
    image: img1,
  },
  {
    title: 'TMS htmlFor logistics company',
    info: 'Transportation management system with automatic route planning module.',
    image: img2,
  },
];
export const FronEndCoreContent = [
  {
    coreImage: <CoreReactIcon />,
    heading: 'React.js',
    info: 'The benefits of front-end development service for a clear user interface, efficient processing of large data loads, and better software performance. Our frontend team has been working with this framework for a long time and knows how to reveal all its advantages in the delivered product.',
    ListOne: 'Easy-to-scale solutions',
    ListTwo: 'High search engine visibility',
    ListThree: 'Development resources saving',
  },
  {
    coreImage: <CoreAngular />,
    heading: 'Angular',
    info: 'Power, flexibility, and great visual impact for your enterprise software, corporate web portals and applications, and other large-scale solutions. One of the advantages of this framework (that our team actively uses) is convenience at the stage of Quality Assurance and post-release support.',
    ListOne: 'Fewer costs to build an MVP',
    ListTwo: 'Faster delivery for large projects',
    ListThree: 'Software testing stage optimization',
  },
  {
    coreImage: <CoreVue />,
    heading: 'Vue.js',
    info: 'By taking advantage of emerging technologies, you can get a cost-effective software solution with huge potential and up-to-dateness. This framework is suitable for resource-intensive applications with rich UI, as well as for fast and convenient integrations.',
    ListOne: 'Fits projects of different sizes',
    ListTwo: 'Wide range of functionality options',
    ListThree: 'Flexibility in architecture and design',
  },
];
// FrontendServices
export const FrontEndServices = [
  {
    heading: '92% of the company are senior and middle-level engineers',
    info: 'We constantly deepen the teams` expertise,providing customers with certified software engineers who can solve complicated tasks.',
  },
  {
    heading: 'An integrated approach to your project',
    info: 'We offer tech and business analytics services to select the best development approach and implement your idea quickly',
  },
  {
    heading: 'Quality, regardless of the project type and scope',
    info: 'We consistently fulfill our obligations and ensure the quality of delivery when developing large-scale or lightweight software in any industry',
  },
  {
    heading: ' Fast involvement: from 1 day',
    info: "The pool of frontend developers is always available: our customers don't spend time on recruitment,  getting software engineers even during 24 hours",
  },
];

// ===BackEnd development page
export const BackEndDevSectionContent = [
  {
    title: 'Custom Back End Web Development',
    info: 'As part of front-end development services, we create the software from scratch and enrich the functionality of products already used in business, offering appropriate solutions to unlock the potential of your growth.',
    buttonName: 'Get Consultation',
  },
  {
    title: 'Mobile Apps’ Back End Building',
    info: 'We create mobile solutions for various platforms: our apps demonstrate reliability, power, fault tolerance, and cost-effectiveness with a thoughtful approach to architecture, integrations, and technologies',
    buttonName: 'Leave a request',
  },
  {
    title: 'Software Cloud Enhancement',
    info: 'A thoughtful approach to PWA technologies and deep engineering expertise help us create mobile versions of web solutions that guarantee users a native-like experience and flawless interaction on a wide range of devices',
    buttonName: 'Order an estimate',
  },
  {
    title: 'Legacy Backend Modernization',
    info: 'Our solution architects and engineering team will carefully select technology tools, study your processes and software in use to open up the potential of your product with chosen back end development service.',
    buttonName: 'Share your idea',
  },
];
export const BackEndCaseStudyContent = [
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
export const BackEndCoreContent = [
  {
    coreImage: <CoreReactIcon />,
    heading: 'Node.js',
    info: 'Node.js is a server environment based on the V8 JavaScript engine. It is excellent for building cross-platform apps as well as websites and backend API services, ensuring outstanding performance, adaptiveness, and time to market for your software.',
    ListOne: 'Performant, scalable backend',
    ListTwo: 'Robust and fast real-time apps',
    ListThree: 'Development resources savingBetter response and loading time',
  },
  {
    coreImage: <CoreAngular />,
    heading: '.NET',
    info: '.NET is Microsoft`s framework allowing you to create a broad spectrum of software: from mobile apps to the Internet of Things solutions. This platform ensures development speed, simplicity in modifying applications, and ease in deploying the product.',
    ListOne: 'Secure and reliable software',
    ListTwo: 'Interoperability and code reusing',
    ListThree: 'Interoperability and code reusing',
  },
];
// BackEndendServices
export const BackEndServices = [
  {
    heading: '92% of the company are senior and middle-level engineers',
    info: 'We constantly deepen the teams` expertise,providing customers with certified software engineers who can solve complicated tasks',
  },
  {
    heading: 'An integrated approach to your project',
    info: 'We offer tech and business analytics services to select the best development approach and implement your idea quickly',
  },
  {
    heading: 'Quality, regardless of the project type and scope',
    info: 'We consistently fulfill our obligations and ensure the quality of delivery when developing large-scale or lightweight software in any industry',
  },
  {
    heading: 'Fast involvement: from 1 day',
    // eslint-disable-next-line max-len
    info: 'The pool of frontend developers is always available:our customers do not spend time on recruitment getting software engineers even during 24 hours.',
  },
];
// crossplatform

export const crosssolutioncard = [
  {
    img: img6,
    name: 'Micro-investment platform',
    info: 'Creation of a Cross-Platform App to Manage Micro-Investments and Savings',
    list1: 'A micro-investing application is built from scratch',
    list2:
      'The solution is compliant with local FinTech legislation (namely SAMA)',
    list3: 'Any sensitive data is kept black-boxed and securely protected',
    list4: 'KYC verification with liveness detection is implemented',
  },
  {
    img: img7,
    name: 'Telemedicine Solutions with Patient Portal and EMR',
    info: 'Creation of a SaaS for Booking and Managing Online Medical Appointments',
    list1:
      'Development of the SaaS for providing and receiving telecare services',
    list2:
      'Providing 24/7 online access to video and audio consultations of general practitioners and clinicians',
    list3: 'Creation of an online appointment booking functionality',
    list4:
      'Compliance with the requirements of GDPR and UK healthcare regulators (CQC and MHRA)',
  },
];
