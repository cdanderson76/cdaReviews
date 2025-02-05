import person1 from './images/person1.jpeg';
import person2 from './images/person2.jpeg';
import person3 from './images/person3.jpeg';
import person4 from './images/person4.jpg';

export const reviews = [
    {
      id: 1,
      name: 'hilda smith',
      job: 'web developer',
      color: 'lightblue',
      image: person1,
      text: "Hi, I’m Hilda, a front-end developer with a background in graphic design. After spending a decade in the advertising industry, became interested in the technical side of web design and I decided to transition to web development.",
    },
    {
      id: 2,
      name: 'ze johnson',
      job: 'data scientist',
      color: '#dd8245',
      image: person2,
      text: 'Ze is a Data Scientist at a fintech startup, leveraging her extensive background in accounting to analyze financial trends and build predictive models. After 12 years in the accounting field, she transitioned to data science to pursue her fascination with data analytics.',
    },
    {
      id: 3,
      name: 'lukas jones',
      job: 'intern',
      color: '#e6d9ad',
      image: person3,
      text: 'Hi, I’m Lukas, an aspiring software developer based in Austin, Texas. Although I didn’t attend college, I’ve always been passionate about technology and coding. To pursue my career in tech, I took a proactive approach and used Codecademy to learn programming.',
    },
    {
      id: 4,
      name: 'tim rodd',
      job: 'senior dev',
      color: 'blue',
      image: person4,
      text: 'Hello, I’m Tim Rodd, a machine learning engineer with a background in computer science. I was inspired by the incredible advancements in AI, and using Codecademy, I learned Python and specialized in machine learning with courses on TensorFlow and Scikit-Learn.',
    },
  ];
  
  export default reviews;