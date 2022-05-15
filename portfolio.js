function showHome(){
    document.getElementById("hometext").innerHTML = ` <h3>Hi, I'm Govind.</h3>
    <h1>Designer. Product Person.</h1>
    <p>
      Multidisciplinary designer who hacks at, makes and occasionally breaks
      things.
    </p>
    <p>Product Design Director on the team behind matrix.org.</p>
    <p>Less moody in real life. ✌️</p>
    <style>
    .context{
        color: #bfbfbf;
    }
    .section-div-one {
        padding: 120px 29% 165px 0px;
    }
    
    .section-div-one h3{
        font-family: 'Roboto Flex', sans-serif;
        font-size: 2vw;
        font-weight: 500;
        margin-bottom: 30px;
    }
    .section-div-one h1{
        font-family: 'Radio Canada', sans-serif;
        font-size: 4vw;
        font-weight: 600;
        margin-bottom: 30px;
    }
    .section-div-one p{
        /* font-family: 'Radio Canada', sans-serif; */
        font-size: 130%;
        font-weight: 400;
        margin-bottom: 20px;
        color: #bfbfbf;
    }
    </style>`
}

function showAbout(){
    document.getElementById("hometext").innerHTML = `<div class="section-div-two" id="abouttext">
    <h1>I build value by design.</h1>
    <p>I’m Govind Gupta, but you can just call me Govind.</p>
    <p>Originally hailing from the UK 🇬🇧 for the last decade or so I’ve been honing my skills in design, production and management roles building products for the web, mobile, games and, more recently, VR & AR.</p>
    <p>I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</p>
    <p>I’ve worked with small, agile teams on skunkworks projects and larger development teams with product lifecycles spanning multiple years.</p>
    <p>Depending on the team, resources and deliverables I’ve worn many hats over the years - holding titles like Product Designer, UI Designer, UX Designer, Front-end Developer, Growth Lead, Producer, Product Manager & Product Owner.</p>
    <p>I also occasionally give talks on design and product development.</p>
    <p>Have an interesting project? Let's talk.</p>
    </div>
    <style>
    .section-div-two {
        padding: 0px 34% 165px 0px;
    }
    .section-div-two h1{
        font-family: 'Roboto', sans-serif;
        font-size: 4vw;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .section-div-two p{
        font-size: 130%;
        font-weight: 300;
        margin-bottom: 20px;
        color: #bfbfbf;
    }
    </style>`
}

function showWork(){
    document.getElementById("hometext").innerHTML = `
    <div class="section-div-three">
    <h1>From e-commerce platforms to virtual worlds.</h1>
    <p>Mostly a trip down memory lane. To be expanded one day.</p>
    </div>
    <style>
    .section-div-three {
        padding: 0px 34% 165px 0px;
    }
    .section-div-three h1{
        font-family: 'Roboto', sans-serif;
        font-size: 4vw;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .section-div-three p{
        font-size: 130%;
        font-weight: 300;
        margin-bottom: 20px;
        color: #bfbfbf;
    }
    </style>
    `
}