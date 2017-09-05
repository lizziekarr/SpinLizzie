(function(){

var $w = $(window),
    $b = $(document.body),
    $t = TweenMax,
    letters = ["S", "P", "I", "N", " ", "L", "I", "Z", "Z", "I", "E"],
    letter,
    signIn,
    enterPW,
    logInPage,
    mainPage,
    password,
    header,
    bio,
    video,
    nav = [],
    width = $w.width();

function init(){
  //create logInPage element
  logInPage = $(document.createElement("div"));
  $t.set(logInPage, {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'url("./assets/TileEmbossed.jpg")',
    backgroundPosition: "left center",
    backgroundSize: "cover"
  });
  $b.append(logInPage);
  //heading spins in
  for (a=0; a<letters.length; a++) {
    var letter = $(document.createElement("h1"));
    var l_data = letters[a];
    $t.set(letter, {opacity: 0});
    $t.to(letter, .6, {display: "inline-block",
                       color: "#2f2",
                       x: width / 12 * a,
                       y: 200,
                       margin: 15,
                       rotation: 360,
                       opacity: 1,
                       delay: a*.2});
    letter.html(l_data);
    nav.push(letter);
    logInPage.append(letter);
  }
  //hide iframe
  video = $(document.querySelector("iframe"));
  $t.set(video, {display: "none"});
  //sign in enters next

  //create form
  signIn = $(document.createElement("div"));
  signIn.type = "form";
  $t.from(signIn, 2, {opacity: 0, delay: 2});
  logInPage.append(signIn);

  //create Input
  enterPW = $(document.createElement("input"));
  enterPW.type = "password";
  enterPW.value = "";
  enterPW.addClass("password");
  $t.to(enterPW, 2, {
    borderRadius: 5,
    color: "#ccc",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 2,
    width: width / 2,
    x: width / 4,
    height: 100,
    y: 400
    });
  enterPW.on("keyup", Enter);
  signIn.append(enterPW);
  nav.push(enterPW);
}

init();

function Enter(event){
  width = $w.width();
  if (event.keyCode === 13 && event.target.value==='MissBroadway101') {
       $t.set(logInPage, {display: "none"});
       //create mainPage element
       mainPage = $(document.createElement("div"));
       $b.append(mainPage);
       //create header
       header = $(document.createElement("div"));
       header.html("DJ ZEPH + LIZZIE KARR");
       $t.set(header, {
         color: "#2f2",
         fontSize: 48,
         textAlign: "center",
         y: "-100",
         opacity: 0
       });
       $t.to(header, 1, {
         opacity: 1,
         y: 0
       });
       mainPage.append(header);
       //create bio
       bio = $(document.createElement("div"));
       bio.html("Lizzie Karr and DJ Zeph met in Oakland in 2012. Lizzie was in production on her first songwriter album 'Bones' and Zeph was knee deep in a project with drummer Max McVeety.  After a couple years of friendship and music-sharing, the two said 'screw it' and decided to pair their wildly different musical styles.  Lizzie brought her husky voice, instrumentals, and imaginative songwriting style.  Zeph brought creative samples and heavy beats. Miss Broadway is the first of 7 tracks that will be released in the coming year.");
       $t.set(bio, {
         color: "#555",
         width: width / 2,
         x: 400,
         y: 20,
         fontSize: 16,
         opacity: 0
       });
       $t.to(bio, 1, {
         opacity: 0,
         x: 200,
         delay: 1
       });
       mainPage.append(bio);
       nav.push(bio);
       //create media element
       $t.set(video, {display: "block"});
       mainPage.append(video);

  }
}

function handleResize() {
  width = $w.width();
  for(var a = 0 ; a < nav.length ; a++) {
    var n = nav[a];
    switch(n){
      case enterPW: console.log('pw');
                    $t.set(n, {x: width / 4, width: width/2});
                    break;
      case bio: $t.set(n, {width: width / 2});
                break;
      default: $t.set(n, {x: width / 12 * a});
    }

  }
}

$w.on("resize", handleResize);




})();
