import mazeRunner from "../img/mazeRunner.png"
import uFound from "../img/uFound.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"

// export let colors = ["rgb(255, 140, 66)", "rgb(88, 124, 153)"];
export let colors = ["rgb(255, 140, 66)", "rgb(60, 92, 119)"];


export const info = {
    firstName: "Avi",
    lastName: "Walia",
    initials: "aw", 
    position: "a Data Scientist and Full Stack Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📚',
            text: 'Second Year Student at the University of Toronto (St. George Campus)'
        },
        {
            emoji: '🇨🇦',
            text: 'Based in Toronto'
        },
        {
            emoji: "💼",
            text: "Full-Stack Developer Co-op at Third Eye Solutions"
        },
        {
            emoji: "📧",
            text: "av9.walia@gmail.com"
        },
    ],
    socials: [
        {
            link: "https://github.com/Avi04w",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/avi-walia-62ab7b202/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/avi.walia9/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
    ],
    
    bio: "Hello! My name is Avi Walia. I am a second-year computer science student at UoFT completing a specialist degree in data science. I most recently worked as a full-stack developer in a summer coop position at Third Eye Solutions. I love playing and watching basketball (go Raptors!!) and going on walks with my dog. ",
    skills:
        {
            proficientWith: ['Python', 'Java', 'Flask', 'SQL', 'Github', 'NumPy', 'Javascript', 'React', 'Html', 'Css'],
            exposedTo: ['GCP Firebase', 'Springboot', 'Maven', 'scikit-learn']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Basketball',
            emoji: '🏀'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Food',
            emoji: '🍕'
        },
        {
            label: 'Video Games',
            emoji: '🎮'
        }
    ],
    portfolio: [ 
        {
            title: "Maze Runner",
            description: "",
            source: "https://github.com/Avi04w/Maze",
            image: mazeRunner,
        },
        {
            title: "UFound",
            description: "",
            source: "https://github.com/Avi04w/uoft-lost-and-found",
            image: uFound
        },
    ]
}