import mazeRunner from "../img/mazeRunner.png"
import uFound from "../img/uFound.png"
import spotifyManager from "../img/spotify.png"
import cineMatch from "../img/cinematch.png"

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
            proficientWith: ['Python', 'Java', 'SQL', 'Pandas', 'HTML/CSS', 'Javascript', 'React', 'NumPy', 'Flask', 'Git'],
            exposedTo: ['scikit-learn', 'GCP Firebase', 'Spring Boot', 'Apache Maven']
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
            title: "Spotify Manager",
            description: "I created a spotify spoof that allows users to control their Spotify playback on any device. The app will detect any device that you are logged in to and your current playback will be displayed on the player. It makes requests to the Spotify API such as pause, play, skip, etc., using OkHttp and uses the OAuth 2.0 Authentication Code Flow to authenticate users and access their Spotify accounts. I created this app using Java and the GUI was made with Java Swing. Something else about me is that this is my favourite song!",
            source: "https://github.com/Avi04w/SpotifyManager",
            image: spotifyManager,
        },
        {
            title: "CineMatch",
            description: "This web app takes a person's movie watch history (can be downloaded from streaming services such as Netflix) and recommends similar movies to watch. I built the movies recommendation algorithm using machine learning tools in Python (NumPy, pandas, and scikit-learn) and the front end was created using ReactJS and HTML/CSS. The movie recommendation data was sent from Python to the front end using Flask as I created my own API to accomplish this. Each movie is assigned a sequence of numbers based on their title, genre, and description, and are treated as vectors. The similarities between each movie are computed using the cosine similarity function and assigned a value to be compared altogether.",
            source: "https://github.com/Avi04w/Cinematch",
            image: cineMatch,
        },
        {
            title: "UFound",
            description: "This is a React JavaScript web application. It is an online lost and found for Uoft Students. If users find a lost item on campus, they can create a posting with an image of the item along with the location of where they found it. The information is stored using a NoSQL document database, Google FireStore.",
            source: "https://github.com/Avi04w/uoft-lost-and-found",
            image: uFound
        },
        {
            title: "Maze Runner",
            description: "This is a Python game I created that creates mazes for you to solve. It does this using graphs and nodes and uses a recursion and DFS algorithm to find the solution if you cannot find it. The front end is programmed using the PyGame library.",
            source: "https://github.com/Avi04w/Maze",
            image: mazeRunner,
        },
    ]
}