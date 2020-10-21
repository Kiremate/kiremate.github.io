Vue.component('top', {
    template: `
<header>
    <section id="heading">
        <h2>Erik Mateos Morcillo
        <h3>Gamedev programmer</h3></h2>
    </section>
    <section id="nav-bar" class="col-sm-12">
        <ul>
            <li>
                <a href="#biography">Biography</a>
            </li>
            <li>
                <a href="#games">Games I contributed</a>
            </li>
            <li>
            <a href="#other_projects">Other Projects</a>
            </li>
            <li>
                <a href="#current_projects">Current Projects</a>
            </li>
            <li>
                <a href="#knowledge_tech">Programs I am familiar with</a>
            </li>
            
        </ul>
    </section>
</header>
    `
})

Vue.component('inner_body', {
    template: `

    <div id="cover_page" class="col-sm-6">
        <section id="biography">
        <h2 id="title_letters_left">Biography</h2>
        <div class="emptydiv"></div>
        <div>
                <img id="portrait" src="./img/others/Erik.jpg" alt="portrait">
        </div>
        <div id="portrait-text">
                Since childhood I was always interested in programming thanks to how much my father liked it and that was what made me start doing small things with code with him until I was 10 years old. After that I became interested in design, since I had friends who drew very well and always tried to capture ideas with silly drawings that I would like and they recreated what I showed them. With 17 years I went to a couple of programming courses in which I learned to use Construct 2 and a little bit of Unity. Finally, I finished at ESNE (University School of Design, Innovation and Technology), where I am training continuing with what I have already learned. Here, apart from still liking programming and design, I have developed a certain interest in production, since I find it a certain attraction to organize documents and excels.
        </div>
       
         </section>

        <section id="games">
        <h2 id="title_letters_left">Games I Contributed</h2>
        <div class="emptydiv"></div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
<div class="carousel-inner">
    <div class="carousel-item active">
      
        <img src="./img/games/lost_frequency.png" alt="Lost Frequency">
        <p>A Rogue-like shooter where you wake up in a spaceship infested with alien creatures.</p>
        
    </div>

    <div class="carousel-item">
   
        <img src="./img/games/pax_keepers.png"" alt="Pax Keepers">
         <p>A board game where you compete with other players as superheroes, reach max level before the other players while you defend the city from elemental monsters.</p>
        
    </div>

    <div class="carousel-item">
       
            <img src="./img/games/save_the_penguins.png" alt="Save the Penguins">
         <p>A 3D clicker game where you try to refrain the melting of the polar ice caps generating eco points and spending them on eco-friendly tools to save the penguins from the global warming.</p>
      
    </div>

    <div class="carousel-item">
       
            <img src="./img/games/fui_leyenda.png" alt="Fui Leyenda">
            <p>"Who am I? Where am I?" Our protagonist, Nera, asks from a den. Help her to remember her heroic past and  find out what she is doing there.</p>
        
    </div>

    <div class="carousel-item">
        
        <img src="./img/games/joy'sticking_around.png" alt="Joy'stincking Around">
        <p>Up to four mini games in which you must play with a friend sharing the same controller but each one with a different joystick. Have a great time with this innovative mechanic and compete to be the best!</p>
        
    </div>
    

</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
    </section>
    
    <section id="other_projects">
    <h2 id="title_letters_left">Other Projects</h2>
    <div class="emptydiv"></div>
    <div>
    <figure>
    <p>I have worked along another teammate on a private ethereum network in which you could create an account, deploy contracts, mine ether and perform transactions
    in order to learn how this technology works on a secure environment.<img src="./img/others/others.png" alt="Joy'stincking Around"></p>
    </figure>
    </div>
    </section>

    
    <section id="current_projects">
    <h2 id="title_letters_left">Current Projects</h2>
    <div class="emptydiv"></div>
    <figure>
            <img src="./img/games/Bloodmask.png" alt="Bloodmask">
    </figure>
    <p>Currently working on a single player adventure rpg campaign in a devastated medieval world. 
    Inspired by the Dark Souls series atmosphere and the engaging gameplay of the Pokemon series.</p>
    <p>I am also currently researching a way to incorporate the blockchain technology in videogames with a different and innovative aproach (just like <a href="https://cryptozombies.io/">cryptozombies</a> did).</p>
    </section>

    <section id="knowledge_tech">
    <h2 id="title_letters_left">What I know</h2>
    <div class="emptydiv"></div>
    <p> <i>Quick summary of the software I have worked with.</i></p>
    </section>

    <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="8"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="9"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="10"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="11"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="12"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="13"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="14"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="15"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="16"></li>
    </ol>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="./img/tech/c%23.png" alt="1 slide">
    </div>

    <div class="carousel-item">
        <img src="./img/tech/c++.png" alt="2 slide">
    </div>

    <div class="carousel-item">
        <img src="./img/tech/csshtmljs.png" alt="3 slide">
    </div>

    <div class="carousel-item">
        <img src="./img/tech/docker-logo.png" alt="4 slide">
    </div>

    <div class="carousel-item">
        <img src="./img/tech/ethereum.png" alt="5 slide">
    </div>
    
    <div class="carousel-item">
    <img src="./img/tech/java.png" alt="6 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/jquery-logo.png" alt="7 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/lua.png" alt="8 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/mongodb-logo.png" alt="9 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/mysql.png" alt="10 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/nginx.png" alt="11 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/nodejs-logo.png" alt="12 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/python.png" alt="13 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/solidity-logo.png" alt="14 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/swagger-logo.png" alt="15 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/unityl.png" alt="16 slide">
    </div>

    <div class="carousel-item">
    <img src="./img/tech/vuejs-log.png" alt="17 slide">
    </div>

</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>

</div>


    `
})

Vue.component('bottom', {
    template: `
<footer>
<div>
            <p>Erik Mateos Morcillo</p>
            <p>28033 Madrid</p>
        </div>
        <div>
        <a href="https://github.com/Kiremate/" target="_blank" title="git">
        <i class="fab fa-linkedin"></i>
        </a>
            <a href="https://www.linkedin.com/in/erik-mateos-57102b162/" target="_blank" title="Link">
                <i class="fab fa-linkedin"></i>
                </a>
            <a href="https://www.google.com/intl/es/gmail/about/" target="_blank" title="My mail is: kiremate@hotmail.com">
                <i class="fas fa-envelope"></i> 
                </a>
                <a href="https://bloodmask-official.itch.io/" target="_blank" title="Take a look"><i class="fab fa-itch-io"></i> 
                </a>
        </div>
</footer>
    `
})

var app = new Vue({
    el: '#port'
});

