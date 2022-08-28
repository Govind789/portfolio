function showHome(){
    document.getElementById("hometext").innerHTML = `
    <h3>Hi, I'm Govind.</h3>
    <h1>Designer. Product Person.</h1>
    <p>
        Multidisciplinary frontend developer ,who build websites with the help of basic computer languages Html, Css, JavaScript.
    </p>
    <p>Always ready for better opprtunities</p>
    <p>Less moody in real life. ✌️</p>
    <style>
    .context{
        color: #bfbfbf;
    }
    .section-div-one {
        padding: 120px 20% 165px 0px;
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
    @media (max-width: 800px) {   
        .fa-bars:before {
            content: "\f0c9";
        }
    }
    @media  (max-width: 706px) {
        .fa-bars:before {
            content: "\f0c9";
        }
        
        .checkbtn{
            display: block;
            background-color: black;
            width: 100vw;
            text-align: center;
        }
        ul{
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 45px;
            left: -400%;
            text-align: center;
            transition: transform 400ms ease 0s;
        }
        
        .header-div-one ul li a{
            font-size: 20px;
        }
        a:hover,a.active{
            background: none;
            color: #e67e22;
        }
        #check:checked ~ ul {
            left: 0;
            background: #2c3e50;
            display: block;
            line-height: 90px;
            height: 100vh;
        }
        body{
            background-image:url(16515627454271.png);
            background-repeat:no-repeat;
            background-attachment: fixed; 
            background-size: cover;
            height: calc(100vh - 0px);
            font-size: 2vh;
        }
        .section-div-one p{
            font-size: 130%;
            font-weight: 400;
            margin-bottom: 20px;
            color: #e1d2d2;
        }
        .section-div-one h1{
            font-family: 'Radio Canada', sans-serif;
            font-size: 250%;
            font-weight: 600;
            margin-bottom: 30px;
        }
        .section-div-one h3 {
            font-family: 'Roboto Flex', sans-serif;
            font-size: 200%;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .section-div-one {
            padding: 120px 0% 165px 0px;
        }
    }
    </style>`
}

function showAbout(){
    document.getElementById("hometext").innerHTML = `
    <div class="section-div-two" id="abouttext">
    <h1>I build value by design.</h1>
    <p>I’m Govind Gupta, but you can just call me Govind.</p>
    <p>Originally hailing from the UttarPradesh for the last decade or so I’ve been honing my skills in design, production and management roles building products for the web, mobile, games and, more recently,A Health Management System.</p>
    <p>I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</p>
    <p>I’ve worked during my graduation time with the basic computer languages and made small projects.</p>
    <p>Depending on the Myself, resources and deliverables I’ve learned many things giving my best.</p>
    <p>I also occasionally give talks on design and product development.</p>
    <p>Have an interesting project? Let's talk.</p>
    </div>
    <style>
    .section-div-two {
        padding: 0px 17% 165px 0px;
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
    @media (max-width: 800px) {   
        .section-div-one {
            padding: 120px 0% 165px 0px;
        }
    
        .fa-bars:before {
            content: "\f0c9";
        }
    }
    @media  (max-width: 706px){
        .section-div-one {
            padding: 120px 0% 165px 0px;
        }
        .fa-bars:before {
            content: "\f0c9";
        }
        #check:checked ~ ul {
            left: 0;
            background: #2c3e50;
            display: block;
            line-height: 90px;
            height: 100vh;
        }
        .section-div-two p {
            font-size: 130%;
            font-weight: 300;
            margin-bottom: 20px;
            color: #e1d2d2;
        }
        .section-div-two h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 300%;
            font-weight: 700;
            margin-bottom: 30px;
        }
    }
    </style>`
}

function showWork(){
    document.getElementById("hometext").innerHTML = `
    <div class="section-div-three">
    <h1>Web Developer.</h1>
    <p>Mostly a trip down memory lane. To be expanded one day.</p>
    <p>1. I Have made this portfolio using Html, Css, JavaScript.</p>
    <p>Link to the Website: <a href="https://govind789.github.io/portfolio/">PORTFOLIO</a></p>

    <p>2. I Have made a Basic Calculator using Html, Css, JavaScript.</p>
    <p>Link to the Website: <a href="https://govind789.github.io/Calculator/"> CALCULATOR</a></p>

    <p>3. I Have a Random Password Generator using Html, Css, JavaScript.</p>
    <p>Link to the Website: <a href="https://govind789.github.io/random-password/"> RANDOM PASSWORD GENERATOR</a></p>

    <p>4. I Have made a Weather App using Html, Css, JavaScript.</p>
    <p>Link to the Website: <a href="https://govind789.github.io/weather-app/"> WEATHER APP </a></p>

    
    <p>5. I Have made a Health Management System using Python.</p>
    <p>Link to the Repository: <a href="https://github.com/Govind789/Health-Management-System.git"> HEALTH MANAGEMENT SYSTEM </a></p>

    <p>6. I Have made a Find Number Game using Python.</p>
    <p>Link to the Repository: <a href="https://github.com/Govind789/find-the-number.git"> FIND THE NUMBER </a></p>

    </div>
    <style>
    .section-div-three {
        padding: 0px 17% 165px 0px;
    }
    .section-div-three h1{
        font-family: 'Roboto', sans-serif;
        font-size: 4vw;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .section-div-three p{
        text-decoration: none;
        font-size: 130%;
        font-weight: 300;
        margin-bottom: 20px;
        color: #bfbfbf;
        display: inline-block;
    }
    .section-div-three span{
        float: left;
        font-size: 130%;
        font-weight: 300;
        margin-bottom: 20px;
        color: #bfbfbf;
    }
    @media (max-width: 800px) {   
        .fa-bars:before {
            content: "\f0c9";
        }
        .section-div-one {
            padding: 120px 0% 165px 0px;
        }
    }
    @media  (max-width: 706px) {
        .fa-bars:before {
            content: "\f0c9";
        }
        .section-div-one {
            padding: 120px 0% 165px 0px;
        }
        .checkbtn{
            display: block;
            background-color: black;
            width: 100vw;
            text-align: center;
        }
        ul{
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 45px;
            left: -400%;
            text-align: center;
            transition: transform 400ms ease 0s;
        }
        a:hover,a.active{
            background: none;
            color: #e67e22;
    
        }
        #check:checked ~ ul {
            left: 0;
            background: #2c3e50;
            display: block;
            line-height: 90px;
            height: 100vh;
        }
        body{
            background-image:url(16515627454271.png);
            background-repeat:no-repeat;
            background-attachment: fixed; 
            background-size: cover;
            height: calc(100vh - 0px);
            font-size: 2vh;
        }
        .section-div-three h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 300%;
            font-weight: 700;
            margin-bottom: 30px;
        }
        .section-div-three p {
            text-decoration: none;
            font-size: 130%;
            font-weight: 300;
            margin-bottom: 20px;
            color: #e1d2d2;
            display: inline-block;
        }
    }
    </style>
    `
}

function showContact(){
    document.getElementById("hometext").innerHTML = `
    <div class="section-div-four" id="abouttext">
    <h1>LET'S TALK</h1>
    <p>Get in touch via the form below, or by emailing <a href = "mailto: gvgupta789@gmail.com">Hello@Govind</a></p>
    <form class="formname">
        <label for="fname">Name:</label>
        <input type="text" id="fname" name="fname" class="form-input w-input" placeholder="Enter your name"><br><br>
        <label for="lname">Email Address:</label>
        <input type="email" id="mail" name="mail" class="form-input w-input" placeholder="Enter your email address"><br><br>
        <label for="lname">Message:</label>
        <textarea id="Message-2" placeholder="Enter your message" maxlength="5000" required class="form-input form-message w-input"></textarea>
        <input type="submit" value="Submit" class="form-submit w-button">
    </form>
    </div>
    <style>
    *{
        -webkit-box-sizing: border-box; 
        -moz-box-sizing: border-box;
    }
    .section-div-one {
        padding: 120px 17% 165px 0px;
    }
    .section-div-four {
        padding: 0px 0% 165px 0px;
    }
    .section-div-four h1{
        font-family: 'Roboto', sans-serif;
        font-size: 4vw;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .section-div-four p{
        font-size: 130%;
        font-weight: 300;
        margin-bottom: 20px;
        color: #bfbfbf;
    }
    a:link, a:visited {
        color: white;
        text-decoration: none;
        cursor: auto;
      }
    a:active,a:hover{
        background: none;
        color: #e67e22;
        text-decoration:none;
    }
    .formname-input{
        max-width: 650px;
        border-style: none;
        border-width: 1px;
        border-color: hsla(0,0%,100%,0);
        border-radius: 10px;
        color: #fff;
    }
    .w-input, .w-select {
        display: block;
        width: 100%;
        height: 38px;
        padding: 8px 12px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        vertical-align: middle;
        background-color: #fff;
        border: 1px solid #ccc;
    }
    .form-input {
        max-width: 650px;
        border-style: none;
        border-width: 1px;
        border-color: hsla(0,0%,100%,0);
        border-radius: 10px;
        color: #fff;
    }
    .form-input, .form-submit, .form-success {
        background-color: rgba(27,27,27,.91);
    }
    .form-submit {
        min-height: 48px;
        min-width: 118px;
        margin-top: 10px;
        border-radius: 12px;
        color: #f0860c;
        font-size: 18px;
        font-weight: 500;
    }
    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }
    .header-div-one ul{
        list-style: none;
        display: float;
        height: 45px;
        width: 156%;
        background-color: rgba(12, 9, 9, 0.938);
    }
    
    @media (max-width: 800px) {
        .fa-bars:before {
            content: "\f0c9";
        }
    }
    @media  (max-width: 706px) {
        .fa-bars:before {
            content: "\f0c9";
        }
        .checkbtn{
            display: block;
            background-color: black;
            width: 100vw;
            text-align: center;
        }
        ul{
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 45px;
            left: -400%;
            text-align: center;
            transition: transform 400ms ease 0s;
        }
        #check:checked ~ ul {
            left: 0;
            background: #2c3e50;
            display: block;
            line-height: 90px;
            height: 100vh;
        }
        body{
            background-image:url(16515627454271.png);
            background-repeat:no-repeat;
            background-attachment: fixed; 
            background-size: cover;
            height: calc(100vh - 0px);
            font-size: 2vh;
        }
        .section-div-four p {
            font-size: 100%;
            font-weight: 300;
            margin-bottom: 20px;
            color: #e1d2d2;
        }
        .section-div-four h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 300%;
            font-weight: 700;
            margin-bottom: 30px;
        }
    }
    </style>`
}
