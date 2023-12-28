type Project = {
  name: String
  description: String
  techStacks: String
  link?: String
}
export const projects: Project[] = [
  {
    name: 'Decidou',
    description: 'A web application I built to help people make decisions!',
    techStacks: 'React.js, Firebase, Tailwind CSS',
    link: 'https://decidou-decision-maker.web.app/'
  },

  {
    name: 'My Portfolio Website',
    description: 'This website, also the very first website I built!',
    techStacks: 'React.js, SCSS',
    link: 'https://github.com/Kelleou/kelleou'
  },

  {
    name: 'PetPal',
    description: 'CSC309 course project, a pet adoption website that connects pet seekers and shelters',
    techStacks: 'React.js, Django, Django REST Framework',
    link: 'https://github.com/Kelleou/CSC309-PetPal'
  },
  {
    name: 'Focus Coach',
    description: 'CSC301 course project, a mobile application that help users improve productivity by blocking distracting apps',
    techStacks: 'React Native, Node & Express.js, MongoDB',
  },
  {
    name: 'Tournament Bracket Manager',
    description: 'CSC207 course project, a java application that help users improve productivity',
    techStacks: 'Java',
    link: 'https://github.com/CSC207-2022F-UofT/course-project-group65'
  },
  {
    name: 'Correlation Analysis on COVID-19 and Unemployment Rate',
    description: 'CSC110 course project, uses Pandas library to analyze datasets on unemployment statistics',
    techStacks: 'Python, Pandas',
    link: 'https://github.com/Kelleou/Correlation-between-unemployment-and-Covid-19',
  },
]
