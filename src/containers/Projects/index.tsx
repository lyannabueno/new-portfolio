import Project from '../../components/Project'
import Title from '../../components/Title'

import bmi from './images/systems/bmi-calculator.png'
import list from './images/systems/todolist.png'
import wicked from './images/systems/wicked-landingpage.png'
import med from './images/systems/medshop.png'
import calculator from './images/systems/averagecalculator.png'
import brewery from './images/systems/alquimianaserra.png'
import disney from './images/systems/disneyplus.png'
import university from './images/systems/universitypage.png'
import dealership from './images/systems/ebacmotors.png'

import html from './images/technologies/html.png'
import css from './images/technologies/css.png'
import sass from './images/technologies/sass.png'
import less from './images/technologies/less.png'
import js from './images/technologies/javascript.png'
import bootstrap from './images/technologies/bootstrap.png'
import react from './images/technologies/react.png'
import vue from './images/technologies/vue.png'
import grunt from './images/technologies/grunt.png'
import gulp from './images/technologies/gulp.png'
import jquery from './images/technologies/jquery.png'
import parcel from './images/technologies/parcel.png'

import { List } from './styles'

const projectData = [
  {
    image: bmi,
    title: 'BMI Calculator',
    description:
      'An informative website that calculates Body Mass Index and displays classifications and reference tables. Demonstrates the ability to combine programming logic with clear and accessible presentation.',
    link: 'https://calculadora-imc-flax-ten.vercel.app/',
    skills: [
      { image: react, name: 'React.js' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' }
    ]
  },
  {
    image: list,
    title: 'Task Manager',
    description:
      'A simple and functional task manager that allows users to add, edit, delete, and mark tasks as completed. This project highlights skills in creating intuitive interfaces focused on user productivity.',
    link: 'https://to-do-vue-peach.vercel.app/',
    skills: [
      { image: vue, name: 'Vue.js' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' }
    ]
  },
  {
    image: wicked,
    title: 'Promotional Page',
    description:
      'A promotional page with a countdown, synopsis, ticket options, and trailer. Showcases my ability to create immersive and visually appealing experiences with modern design.',
    link: 'https://landing-page-wicked-film.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' },
      { image: parcel, name: 'Parcel' }
    ]
  },
  {
    image: disney,
    title: 'DisneyPlus',
    description:
      "A replication of the DisneyPlus streaming platform's design. This project reflects skills in recreating complex interfaces and delivering consistent, intuitive visual experiences.",
    link: 'https://clone-disneyplus-eight-gules.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: sass, name: 'SASS' },
      { image: js, name: 'JavaScript' },
      { image: gulp, name: 'Gulp', id: 'gulp' }
    ]
  },
  {
    image: university,
    title: 'University Website',
    description:
      'A university-inspired website providing key information about courses, infrastructure, and student experiences for prospective and current students, faculty, and researchers.',
    link: 'https://university-page-chi.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: less, name: 'LESS', id: 'less' },
      { image: js, name: 'JavaScript' },
      { image: grunt, name: 'Grunt', id: 'grunt' },
      { image: jquery, name: 'jQuery', id: 'jquery' }
    ]
  },
  {
    image: med,
    title: 'Online Store',
    description:
      'A functional online store for healthcare professionals and students. This project emphasizes expertise in building e-commerce platforms and user-centered experiences.',
    link: 'https://med-shop.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' },
      { image: bootstrap, name: 'BootStrap' },
      { image: jquery, name: 'jQuery', id: 'jquery' }
    ]
  },
  {
    image: brewery,
    title: 'Event Website',
    description:
      'A website showcasing events, menus, and house specialties like craft beers. Highlights the ability to develop content-rich websites with a focus on visitor experience.',
    link: 'https://projeto-cervejaria.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' },
      { image: bootstrap, name: 'BootStrap' },
      { image: jquery, name: 'jQuery', id: 'jquery' }
    ]
  },
  {
    image: dealership,
    title: 'Dealership',
    description:
      'This project is a car dealership, where cars are classified into current highlights and promotions. To obtain a vehicle or to ask more questions, you can communicate with the owner through the Contact tab.',
    link: 'https://projeto-carros-seven.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' },
      { image: jquery, name: 'jQuery', id: 'jquery' }
    ]
  },
  {
    image: calculator,
    title: 'Grade Calculator',
    description:
      'A tool to calculate final averages and determine student approval status. Focuses on implementing mathematical logic with a user-friendly interface.',
    link: 'https://lya-projeto-calculadora-medias.vercel.app/',
    skills: [
      { image: html, name: 'HTML5' },
      { image: css, name: 'CSS3' },
      { image: js, name: 'JavaScript' }
    ]
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
            skills={project.skills}
          />
        </li>
      ))}
    </List>
  </section>
)

export default Projects
