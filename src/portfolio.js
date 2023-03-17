const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Septian Librianto',
  role: 'DevOps Engineer',
  description:
    'Google Associate Cloud Engineer Certified As a Devops Engineer Job Role with 2 year of hands-on experience supporting, optimizing, and automating mission-critical deployments in automated services. Leveraged configuration management, CI/CD, and critical DevOps processes. Specialized Build monitoring system infrastructure, System Logs using Prometheus, Promtail, Loki & Grafana.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/septian-librianto-355b6a241/',
    github: 'https://github.com/SadeQ232',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pinang Connect',
    description:
      'Im as DevOps Engineer in this project',
    livePreview: 'https://pre-prod-pinang-connect.bankraya.co.id/',
  },
  {
    name: 'Bank Raya Whistleblowing System',
    description:
      'Im as DevOps Engineer in this project',
    livePreview: 'https://whistleblowing.bankraya.co.id/',
  },
  {
    name: 'Website Bank Raya',
    description:
      'Im as DevOps Engineer in this project',
    livePreview: 'https://bankraya.co.id',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Associate Cloud Engineer',
  'Digital Transformation with Google Cloud',
  'Alibaba Cloud',
  'Cloud Architecture',
  'Implement DevOps in Google Cloud',
  'Terraform',
  'Kubernetes',
  'Asible',
  'Git',
  'CI/CD',
  'Linux',
  'Windows Server',
  'Docker',
  'Googke Kubernetes Engine(GKE)',
  'Prometheus',
  'Grafana',
  'Zabbix',
  'gitlab-ci',
  'Google Cloud Platform',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'septian.librianto@mail.com',
}

export { header, about, projects, skills, contact }
