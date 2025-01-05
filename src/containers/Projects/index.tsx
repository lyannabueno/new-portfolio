import Project from '../../components/Project'
import Title from '../../components/Title'

import bmi from './images/bmi-calculator.png'
import list from './images/todolist.png'
import wicked from './images/wicked-landingpage.png'
import med from './images/medshop.png'
import calculator from './images/averagecalculator.png'
import random from './images/randomdrawinggenerator.png'
import brewery from './images/alquimianaserra.png'
import disney from './images/disneyplus.png'

import { List } from './styles'

const projectData = [
  {
    image: bmi,
    title: 'BMI Calculator',
    description:
      'An informative website that calculates Body Mass Index and displays classifications and reference tables. Demonstrates the ability to combine programming logic with clear and accessible presentation.',
    link: 'https://calculadora-imc-flax-ten.vercel.app/'
  },
  {
    image: wicked,
    title: 'Wicked Film',
    description:
      'A promotional page with a countdown, synopsis, ticket options, and trailer. Showcases my ability to create immersive and visually appealing experiences with modern design.',
    link: 'https://landing-page-wicked-film.vercel.app/'
  },
  {
    image: list,
    title: 'To-do List',
    description:
      'A simple and functional task manager that allows users to add, edit, delete, and mark tasks as completed. This project highlights skills in creating intuitive interfaces focused on user productivity.',
    link: 'https://to-do-vue-peach.vercel.app/'
  },
  {
    image: random,
    title: 'Random Number Generator',
    description:
      'An application that generates random numbers based on a user-defined limit. Demonstrates skills in creating useful tools with clear logic and minimalistic design.',
    link: 'https://drawing-generator-4uag.vercel.app/'
  },
  {
    image: med,
    title: 'Med Shop',
    description:
      'A functional online store for healthcare professionals and students. This project emphasizes expertise in building e-commerce platforms and user-centered experiences.',
    link: 'https://med-shop.vercel.app/'
  },
  {
    image: disney,
    title: 'DisneyPlus Interface Clone',
    description:
      "A replication of the DisneyPlus streaming platform's design. This project reflects skills in recreating complex interfaces and delivering consistent, intuitive visual experiences.",
    link: 'https://clone-disneyplus-eight-gules.vercel.app/'
  },
  {
    image: calculator,
    title: 'School Grades Calculator',
    description:
      'A tool to calculate final averages and determine student approval status. Focuses on implementing mathematical logic with a user-friendly interface.',
    link: 'https://lya-projeto-calculadora-medias.vercel.app/'
  },
  {
    image: brewery,
    title: 'Brewery Website',
    description:
      'A website showcasing events, menus, and house specialties like craft beers. Highlights the ability to develop content-rich websites with a focus on visitor experience.',
    link: 'https://projeto-cervejaria.vercel.app/'
  }
]

const Projects = () => (
  <section>
    <Title fontSize={16}>Projects</Title>
    <List>
      {projectData.map((project, index) => (
        <li key={index}>
          <Project
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        </li>
      ))}
    </List>
  </section>
)

export default Projects
