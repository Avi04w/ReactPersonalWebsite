// import mazeRunner from "../img/mazeRunner.png"
import twitter from "../img/twitter.png"
// import uFound from "../img/uFound.png"
import torontosubway from "../img/TorontoSubwayPic.png"
// import spotifyManager from "../img/spotify.png"
import music from "../img/music.png"
import cineMatch from "../img/cinematch.png"

// export let colors = ["rgb(255, 140, 66)", "rgb(88, 124, 153)"];
export let colors = ["rgb(255, 140, 66)", "rgb(60, 92, 119)"];


export const info = {
    firstName: "Avi",
    lastName: "Walia",
    initials: "aw", 
    position: "a Data Scientist and Software Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: "💼",
            text: "Software Development Engineer at Amazon"
        },
        {
            emoji: '🍁',
            text: 'Based in Toronto'
        },
        {
            emoji: '📚',
            text: 'Honours Bachelor of Science in Data Science, University of Toronto'
        },
        {
            emoji: "📧",
            text: "avi.walia@mail.utoronto.ca"
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
    
    bio: "Hello! My name is Avi Walia. I am a Software Development Engineer at Amazon. I recently graduated as a computer science student at the University of Toronto, completing a specialist degree in data science. I love playing and watching basketball (go Raptors!!) and going on walks with my dog. ",
    skills:
        {
            proficientWith: ['Python', 'SQL', 'R', 'Javascript', 'AWS', 'Java', 'React', 'Pandas', 'NumPy', 'scikit-learn', 'Git', 'Flask', 'HTML/CSS', 'C'],
            exposedTo: []
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
            title: "Toronto Subway Delay Analysis",
            description: "The Toronto Transit Commission (TTC) subway system is a critical part of Toronto’s public transportation network, servicing over a million riders daily across multiple lines. However, subway delays have been a persistent issue, impacting the efficiency and reliability of the service. Understanding the primary causes of these delays and how they vary by time of day and across different subway lines is essential for improving service quality and enhancing passenger experience." +
                "This study aims to investigate the following questions: " +
                '"What are the primary causes of subway delays in Toronto and how do these delays vary by subway line/station?" and ' +
                '"Can we estimate the duration of subway delays across Toronto’s TTC system based on different predictors?" ',
            source: "https://github.com/Avi04w/TorontoSubwayDelayAnalysis",
            website: "https://avi04w.github.io/TorontoSubwayDelayAnalysis/",
            image: torontosubway
        },
        {
            title: "The Evolution of Sound",
            description: "This project is an interactive data story built in D3.js that explores how the sound of music has evolved over the past several decades. The objective was to present a compelling narrative through data, combining analytical methods with intuitive visual design to highlight shifts in musical characteristics over time. The analysis focuses on key audio features such as acousticness, energy, and speechiness, revealing how trends have changed across eras. Dimensionality reduction techniques, including Principal Component Analysis (PCA), were applied to uncover underlying structure and relationships within the data. These insights were translated into interactive, visually engaging graphics, enabling users to explore patterns and better understand the progression of modern music.",
            source: "https://github.com/Avi04w/Evolution_of_Sound",
            website: "https://avi04w.github.io/Evolution_of_Sound/",
            image: music
        },
        {
            title: "Twitter Data Analysis",
            description: "This project performs a trend analysis on recent tweets mentioning Toronto using an unsupervised learning approach. Tweets were collected via the Tweepy library and the Twitter API, then cleaned and preprocessed using Pandas and NLTK to standardize text and remove noise. Latent Dirichlet Allocation (LDA) was applied to uncover latent thematic structures within the corpus, enabling the identification of key discussion topics across thousands of tweets. Model performance was evaluated using coherence scores to ensure that extracted topics were both interpretable and semantically meaningful. The final output provides a structured view of prevailing social media conversations, highlighting dominant themes and patterns in real time.",
            source: "https://github.com/Avi04w/Twitter-Analysis",
            image: twitter,
        },
        // {
        //     title: "Spotify Manager",
        //     description: "I created a spotify spoof that allows users to control their Spotify playback on any device. The app will detect any device that you are logged in to and your current playback will be displayed on the player. It makes requests to the Spotify API such as pause, play, skip, etc., using OkHttp and uses the OAuth 2.0 Authentication Code Flow to authenticate users and access their Spotify accounts. I created this app using Java and the GUI was made with Java Swing. Something else about me is that this is my favourite song!",
        //     source: "https://github.com/Avi04w/SpotifyManager",
        //     image: spotifyManager,
        // },
        {
            title: "CineMatch",
            description: "This web app takes a person's movie watch history (can be downloaded from streaming services such as Netflix) and recommends similar movies to watch. I built the movies recommendation algorithm using machine learning tools in Python (NumPy, pandas, and scikit-learn) and the front end was created using ReactJS and HTML/CSS. The movie recommendation data was sent from Python to the front end using Flask as I created my own API to accomplish this. Each movie is assigned a sequence of numbers based on their title, genre, and description, and are treated as vectors. The similarities between each movie are computed using the cosine similarity function and assigned a value to be compared altogether.",
            source: "https://github.com/Avi04w/Cinematch",
            image: cineMatch,
        },

        // {
        //     title: "UFound",
        //     description: "This is a React JavaScript web application. It is an online lost and found for Uoft Students. If users find a lost item on campus, they can create a posting with an image of the item along with the location of where they found it. The information is stored using a NoSQL document database, Google FireStore.",
        //     source: "https://github.com/Avi04w/uoft-lost-and-found",
        //     image: uFound
        // },
    ]
}