// Define your components
const TopComponent = {
    template: `
    <header>
        <section id="heading">
            <h2>Erik Mateos Morcillo</h2>
            <h3>Videogame programmer</h3>
        </section>
        <section id="nav-bar" class="col-sm-12">
            <ul>
            <li v-for="link in navLinks">
            <a @click.prevent="setCurrentComponent(link.component)">{{ link.label }}</a>
            </li>
            </ul>
        </section>
    </header>
    `,
    data() {
        return {
            navLinks: [
                { href: "#About_Me", label: "👨 About Me", component: 'InnerBodyComponent' },
                { href: "#current_projects", label: "🎮 Main Games", component: 'RecentProjects' },
                { href: "#games", label: "👾Other games I contributed", component: 'GamesComponent' },
                { href: "#other_projects", label: "🚀 Other Projects", component: 'ProjectsComponent' },
                { href: "#knowledge_tech", label: "💻 Skills", component: 'KnowledgeTechComponent' }
            ],
            currentComponent: 'InnerBodyComponent'
        }
    },
    methods: {
        setCurrentComponent(component) {
            this.$emit('current-component-changed', component);
        }
    }
}

const InnerBodyComponent = {
    data() {
        return {
            About_Me: [
                {
                    img: "/img/others/Erik.jpg",
                    alt: "Erik Portrait",
                    paragraph: "I am a passionate videogame developer who began his programming journey at the age of 16, exploring languages like Pascal, Python, and C++. This early exposure ignited my love for coding, prompting me to pursue further skills in Java, Android, and SQL during vocational training. During the final project, I discovered a newfound passion for game programming. This led me to specialize in Video Game Development and Design at ESNE, where I showcased two games at the Big Conference in 2022 convention and graduating in 2023."
                },
                "My strengths lie in patience, resilience, and commitment to taking on significant challenges, a valuable team player and inventive mind in the field."
            ]
        };
    },
    template:
    `
        <div id="cover_page">
            <section id="About_Me">
            <h2 id="title_letters_left">👋 About Me</h2>
            <div class="emptydiv"></div>
                <div id="imgcontainer">
                    <img id="portrait" :src="About_Me[0].img" :alt="About_Me[0].alt" />
                </div>
                <p>{{ About_Me[0].paragraph }}</p>
                <p v-for="(paragraph, index) in About_Me.slice(1)" :key="index">{{ paragraph }}</p>
            </section>
        </div>
    `
}
const GamesComponent = {
    data() {
        return {
            games: [
                {
                    img: "./img/games/lost_frequency.png",
                    alt: "Lost Frequency",
                    description: "A Rogue-like shooter where you wake up in a spaceship infested with alien creatures.",
                    url: "https://hexaworks.itch.io/lost-frequency"
                },
                {
                    img: "./img/games/pax_keepers.png",
                    alt: "Pax Keepers",
                    description: "A board game where you compete with other players as superheroes, reach max level before the other players while you defend the city from elemental monsters."
                },
                {
                    img: "./img/games/save_the_penguins.png",
                    alt: "Save the Penguins",
                    description: "A 3D clicker game where you try to refrain the melting of the polar ice caps generating eco points and spending them on eco-friendly tools to save the penguins from the global warming."
                },
                {
                    img: "./img/games/fui_leyenda.png",
                    alt: "Fui Leyenda",
                    description: "\"Who am I? Where am I?\" Our protagonist, Nera, asks from a den. Help her to remember her heroic past and  find out what she is doing there.",
                    url: "https://melero.itch.io/fui-leyenda"
                },
                {
                    img: "./img/games/joy'sticking_around.png",
                    alt: "Joy'stincking Around",
                    description: "Up to four mini games in which you must play with a friend sharing the same controller but each one with a different joystick. Have a great time with this innovative mechanic and compete to be the best!",
                    url: "https://eliaessinh.itch.io/joysticking-around"
                },
            ]
        };
    },
    template: `
    <section id="games">
    <h2 id="title_letters_left">Games I Contributed</h2>
    <div class="emptydiv"></div>
    <div id="carouselGames" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselGames" data-slide-to="0" class="active"></li>
            <li data-target="#carouselGames" data-slide-to="1"></li>
            <li data-target="#carouselGames" data-slide-to="2"></li>
            <li data-target="#carouselGames" data-slide-to="3"></li>
            <li data-target="#carouselGames" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(game, index) in games" :class="{ 'carousel-item': true, 'active': index === 0 }">
            <a :href="game.url" target="_blank">
            <img :src="game.img" :alt="game.alt">
            </a>
                <p>{{ game.description }}</p>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselGames" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselGames" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>
    `
}


const RecentProjects = {
    data() {
        return {
            games: [
                {
                    type: "video",
                    src: "/video/Live Gameplay.mp4",
                    link: {
                        url: "https://blut-studios.itch.io/",
                        text: "Live"
                    },
                    descriptionStart: "is a first person psychological horror game where you play as a streamer who lost his friend in an abandoned mansion where you must interact with your chat to solve puzzles and avoid being killed by a childish entity.",
                    descriptionEnd: "was made in Unreal Engine 4.",
                    role: "In this game I was dedicated to program all the core Gameplay and the chat integration with Twitch using its API. I also programmed the interaction with the objects and the inventory system. As well as directing and managing the team alongside my producer, creating the version control and part of the map ambience.",
                },
                {
                    type: "video",
                    src: "/video/Nuwa gameplay.mp4",
                    link: {
                        url: "https://ayeayearts.itch.io/nuwa",
                        text: "Nüwa"
                    },
                    descriptionStart: "is a multiplayer asymmetric co-op where two players who embody the Traveler and Nüwa, will have to cooperate to repair the firmament, solving different puzzles making use of their unique abilities, and taking into account their physical limitations.",
                    descriptionEnd: "was made in Unity.",
                    role: "I was in charge of the whole multiplayer and replication part of the game, as well as the interactions with the objects and the puzzles. Sometimes I also helped with the core gameplay mechanics of the character and the dragon. Also created the version control for the team.",
                },
                {
                    type: "image",
                    src: "/img/games/HBC.png",
                    url: "https://blindbrainworks.itch.io/horrors-beyond-comprenhension",
                    description: "Horrors Beyond Comprenhension: Nikola Tesla was one of the greatest inventors in history. What fewer people know is that he built only two Tesla towers, which, according to the scientist himself, were too powerful. Made in Unreal Engine 4",
                    role: "I programmed all the events the inventory system and the puzzles of the game as you needed to repair the lighthouse with some tools. I also programmed all the ambience, rain, thunder and some other behaviours, the most funny one was a Tesla bust that would follow you based on where you are, always looking at you."
                },
                {
                    type: "slider",
                    images: [
                        { src: "/img/games/Bloodmask.png"},
                        { src: "/img/games/Agoris_2_23.jpg" },
                        { src: "/img/games/Vial_bloodmask5.jpg" }
                    ],
                    description: "A dark fantasy RPG set in a world cyclically wiped clean by the fearsome Blood Dragon. Players navigate the remnants of fallen civilizations, uncovering secrets and relics, all while managing their own life essence through the Mask Affinity System. Bond with masks that offer unique abilities but drain your life force, interact with various factions, and ultimately face the Blood Dragon in an epic showdown. An enthralling mix of traditional RPG mechanics and innovative gameplay elements. Crafted with Unreal Engine 5",
                    role: "This is a huge project and still being developed, I am the Game Director collaborating with a team of 8 gamedevs, managing the team and the tasks and reasure we are all in the same page, as well as programming of course."
                }
            ]
        };
    },
    template: `
    <section id="current_projects">
    <div v-for="(game, index) in games" :key="index" class="game-slot">
        <template v-if="game.type === 'video'">
        <video class="media" controls>
            <source :src="game.src" type="video/mp4">
        </video>
        <p>
            <a v-if="game.link" :href="game.link.url" target="_blank">{{ game.link.text }}</a>
            {{ game.descriptionStart }}
            <a v-if="game.link" :href="game.link.url" target="_blank">{{ game.link.text }}</a>
            {{ game.descriptionEnd }}
            <br>
            <strong>Role: </strong> {{ game.role }}
        </p>
        </template>
        <template v-else-if="game.type === 'image'">
        <a :href="game.url" target="_blank">
            <img class="media" :src="game.src" :alt="'Image of ' + game.description">
        </a>
            <p>{{ game.description }}
            <br>
            <strong>Role: </strong> {{ game.role }}
            </p>
        </template>
        <template v-else-if="game.type === 'slider'">
        <h2>Bloodmask</h2>
        <div class="media carousel slide" :class="{ 'last-slider': index === games.length - 1 }" id="carouselExampleIndicators" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div v-for="(image, imgIndex) in game.images" :class="{ 'carousel-item': true, 'active': imgIndex === 0 }">
                    <img class="d-block w-100" :src="image.src" :alt="'Image ' + (imgIndex + 1) + ' of ' + game.description">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i class="carousel-control-prev-icon fas fa-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i class="carousel-control-next-icon fas fa-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <p>{{ game.description }}
        <br>
        <strong>Role: </strong> {{ game.role }}
        </p>
    </template>
    </div>
</section>
    `
}


const ProjectsComponent = {
    data() {
        return {
            project: {
                imageUrl: '/img/games/Avatar.Webcam_Logotype_Purple_2212.1.png',
                link: 'https://www.avatar.webcam/',
                description: 'Avatar.Webcam is a VTubbing app that allows you to use your webcam to track your face and use it as an avatar in any application that supports webcam input without needing OBS as it installs a virtual camera.',
                role: 'During my time at the company CryptoAvatars I was the only programmer of the project for the first 4 months and it was a great challenge as I had to learn a lot of new things like how to use the webcam the blendshapes, how to use the face tracking and how to create a virtual camera and how each library interacted with each other. I also had to learn how to use the OBS API to create a plugin for it and how to use the OBS virtual camera API to create a virtual camera.'
            }
        }
    },
    template: `
    <section id="projects">
        <div class="project">
            <div class="image-container">
                <a :href="project.link" target="_blank">
                    <img class="image-frame" :src="project.imageUrl" alt="Project image" />
                </a>
            </div>
            <div class="project-description">
                <p>{{ project.description }}</p>
                <p><strong>My Role: </strong>{{ project.role }}</p>
            </div>
        </div>
    </section>
    `
}



const KnowledgeTechComponent = {
    data() {
        return {
            programmingLanguages: {
                title: 'Coding Languages 🖥️',
                skills: 'C#, Modern C++, C, JavaScript, Java, Python, Go, Pascal'
            },
            gameTechnologies: {
                title: 'Gaming Tech ⚙️',
                skills: 'Unreal Engine 4/5, OpenGL, Unity 3D, Godot 4, SDL, SFML2, Bullet, Box2D'
            },
            gameConcepts: {
                title: 'Gaming Principles 🧠',
                skills: 'Game Engine Architecture and design patterns, Networking for Games, rendering pipeline, basic Physics/Collisions'
            },
            attitude: {
                title: 'Mindset 💡',
                skills: 'Adaptive Learning, Visionary bigger picture enthusiast, Diligent, Imaginative, Collaborative Team Player, Inquisitive'
            },
            others: {
                title: 'Miscellaneous Tools 🧰',
                skills: 'Perforce, Git, SVN, Android, CMake, MySQL, HTML, CSS, jQuery, Linux, POSIX, LaTeX'
            },
            others: {
                title: 'Collaborative Tools 🛠️ ',
                skills: 'Confluence, Jira, Trello, Notion, Slack'
            },
        }
    },
    template: `
    <section id="knowledge_tech">
        <div v-for="(section, key) in this.$data" :key="key" class="tech-section">
            <h3 class="section-title">{{ section.title }}</h3>
            <p class="section-skills">{{ section.skills }}</p>
        </div>
    </section>
    `
}



const FooterStyleComponent = {
    template: `
      <footer id="footer">
        <div class="footer-content">
          <p>Erik Mateos Morcillo</p>
          <p>28033 Madrid</p>
          <div class="icons">
            <a href="https://github.com/Kiremate/" target="_blank" title="git">
            <img class="social-icon" src="./img/others/github-logo.png" alt="GitHub">
            </a>
            <a href="https://www.linkedin.com/in/bloodmask/" target="_blank" title="LinkedIn">
            <img class="social-icon" src="./img/others/linkedin-logo.png" alt="LinkedIn">
            </a>
            <a href="https://bloodmask-official.itch.io/" target="_blank" title="Itch.io">
            <img class="social-icon" src="./img/others/ItchioLogo.png" alt="Itch.io">
            </a>
          </div>
          <p>Email: {{ mail }}</p>
          <p>Phone: {{ phone }}</p>
        </div>
      </footer>
    `,
    data() {
      return {
        mail: 'kiremate@hotmail.com',
        phone: '+34 630 491 605',
      };
    },
  };


  const Layout = {
    template: `
    <div>
    <TopComponent @current-component-changed="updateCurrentComponent"></TopComponent>
    <component :is="currentComponent"></component>
    <FooterStyleComponent></FooterStyleComponent>
    </div>
    `,
    components: {
        TopComponent,
        InnerBodyComponent,
        GamesComponent,
        ProjectsComponent,
        RecentProjects,
        KnowledgeTechComponent,
        FooterStyleComponent
    },
    data() {
        return {
            currentComponent: 'InnerBodyComponent'
        };
    },
    methods: {
        updateCurrentComponent(component) {
            this.currentComponent = component;
        }
    }
}

// Create and mount the Vue app
Vue.createApp(Layout).mount('#app')
