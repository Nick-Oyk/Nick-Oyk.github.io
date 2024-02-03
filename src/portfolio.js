const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nick-oyk.github.io',
  title: 'NOYK.'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nicholas Ooi Yu Khai',
  role: 'Software Engineer',
  description:
    'I am a software engineer with knowledgeable skills in modern-day technologies and experience using Frontend and Backend Technology stacks, focusing on Nodejs and Reactjs.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/ooi-yu-khai-3a1930193/',
    github: 'https://github.com/Nick-Oyk'
  }
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Setel EV Charging',
    description:
      'The production-ready Backend EV Charging service enables users to charge with multiple vendors, including JomCharge and ChargeNGo, through the Setel app. Built on Nest JS, it leverages MongoDB as its database and is deployed on AWS using Kubernetes and ArgoCD for efficient management and scalability. This comprehensive solution seamlessly integrates various charging vendors, providing users with a convenient and reliable platform for EV charging needs. With robust technology stack and deployment infrastructure, it ensures optimal performance and scalability for evolving user demands in the electric vehicle charging ecosystem.      ',
    stack: ['NestJs', 'React', 'MongoDB', 'AWS', 'Kubernetes', 'ArgoCD'],
    livePreview: 'https://www.setel.com/ev-charging'
  },
  {
    name: 'Micro-service Architecture test ',
    description:
      'The Microservice Architecture Test Application is a versatile platform for evaluating microservices-based systems. It offers comprehensive testing for service communication, fault tolerance, scalability, and resilience. With modular architecture and real-time monitoring, it provides developers insights to optimize deployments for reliability and efficiency in production environments.',
    stack: ['NestJs', 'MongoDB', 'Kubernetes', 'Docker', 'Postgresql'],
    sourceCode: 'https://github.com/Nick-Oyk/Micro-service-Architecture-Test'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'AWS',
  'Kubernetes',
  'Gitops',
  'NestJs',
  'ArgoCD'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nicholasoyk@gmail.com'
}

export { header, about, projects, skills, contact }
