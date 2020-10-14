var navScroll = document.querySelector(".newheader");
window.onscroll = function () {
  if (window.pageYOffset >= 50) {
    navScroll.classList.remove("newheader");
    navScroll.classList.add("header");
  } else {
    navScroll.classList.add("newheader");
    navScroll.classList.remove("header");
  }
};

function showvid() {
  document.querySelector(".video").classList.remove("dnone");
  document.querySelector(".thumb").classList.add("dnone");
}

function showvid2() {
  document.querySelector(".video").classList.remove("dnone");
  document.querySelector(".thumb").classList.add("dnone");
}

let title = document.getElementById("name");
let subtitle = document.getElementById("subhead");
let image = document.getElementById("preview");
let infotxt = document.getElementById("desc");
let vidbtn = document.getElementById("vidbtn");
let more = document.getElementById("more");
let avail = document.getElementById("avail");
let content = document.getElementById("right");

function displaycontent() {
  title.innerHTML = `FOUR SEASONS RESORT <br> <span>Bora Bora</span>`;
  image.src =
    "https://assets.hotelplan.com/content/TH/00/128/526/hotel/de/leadimage/547000.jpg";

  content.innerHTML = `<h3 id="subhead">LIFE IS BETTER OVER WATER</h3>
      <p id="desc">Imagine sinking your toes into white-sand beaches, stopping for a dip in a crystal-clear lagoon,
      and sippingChampagne while gazing at an expanse of shimmering stars. The newly enhanced Four Seasons Resort Bora Bora
      invites you to stop imagining and let us make your holiday dreams come true.<br><br>
      Those lucky enough to have travelled to Bora Bora aren’t likely to forget the magic of staying over the
      water. From the lapping of turquoise water below to the pink glow of the island sunset, life over water is
      an experience.The Resort's newly refreshed overwater bungalow suites offer a modern
      Polynesian blend of luxury, comfort and design.
      </p>
      <div class="btngroup">
          <button><a id="avail"
                  href="https://www.fourseasons.com/borabora/offers/stay_longer_fourth_night_free_with_breakfast//">Check
                  Availability</a></button>
          <button><a id="more" href="https://www.fourseasons.com/borabora/">Discover More</a></button>
          <button id="vidbtn" onclick="showvid()"></button></div>`;
}

function showcontent() {
  title.innerHTML = `LOKHA UBUD RESORT <br> <span>Bali</span>`;
  image.src =
    "https://www.thelokhaubud.com/wp-content/uploads/2017/04/gallery-entrance2.jpg";

  content.innerHTML = `<h3 id="subhead">REDISCOVER NATURE'S BEAUTY</h3>
    <p id="desc">The Lokha Ubud Resort, Villas and Spa is a charming hotel located in the traditional Balinese village of Keliki on the outskirts of cultural Ubud. It has been designed to embrace the natural beauty of the surrounding environment. <br><br>The Lokha Ubud  Resort, Villas and Spa anticipates the needs of seasoned travellers with a collection of 16 luxury villas, 52 rooms and lifestyle facilities in a relaxed resort setting.
     Overlooking a scenic ridge known as Bukit Cinta, which was once a secluded courting spot for young Balinese lovers. The Lokha Ubud Resort, Villas and Spa is the ultimate Bali hotel where guests can stay in style and reconnect with nature away from the hectic pace of mainstream tourism.
    </p>
    <div class="btngroup">
        <button><a id="avail"
                href="https://www.thelokhaubud.com/room-packages/">Check
                Availability</a></button>
        <button><a id="more" href="https://www.thelokhaubud.com/">Discover More</a></button></div>`;
}

function showcontentthree() {
  title.innerHTML = `CASA PALOPA <br> <span>Guatemala</span>`;
  image.src =
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/a1/8e/f2/casa-palopo.jpg";

  content.innerHTML = `<h3 id="subhead">PARADISE FOUND</h3>
      <p id="desc">Personalized service, fine dining and eco-friendly activities in an incomparable setting. Casa Palopó, loaded with antiques, brightly painted walls, exquisite furnishings, artifacts and art; submerges guests into Guatemala’s rich culture without stepping outside.<br><br>Casa Palopo is a private property in the year 2000 and a boutique hotel, in order to share with you this wonderful place, style with colonial style and details of contemporary style.
        We reflect a blend of our indigenous brand, with the elegance and good quality of Guatemalan designers. This is plasma in the contemporary and local art that is appreciated around the hotel with a private collection of works.
      </p>
      <div class="btngroup">
          <button><a id="avail"
                  href="https://gc.synxis.com/rez.aspx?Hotel=69987&Chain=8565&template=Responsive_PALO&shell=RBE_PALO&locale=en-US&adult=2">Check
                  Availability</a></button>
          <button><a id="more" href="https://www.casapalopo.com/en">Discover More</a></button>
          </div>`;
}

var imagesArray = [
  {
    id: "Anantara Al Jabal Al Akhdar Resort, Oman",
    src:
      "https://media.cntraveler.com/photos/5f68161d68f371240312a111/master/w_1600%2Cc_limit/Anantara-Al-Jabal-Al-Akhdar-Resort.jpg",
    link: "https://www.anantara.com/de/jabal-akhdar",
  },
  {
    id: "Kamalame Cay, Bahamas",
    src:
      "https://media.cntraveler.com/photos/5df114c1a6574e0008a09b45/master/w_1600%2Cc_limit/Kamalame-Cay_2019_ROCKHOUSE-EXTERIOR.jpg",
    link: "https://www.kamalame.com/the-resort",
  },
  {
    id: "andBeyond Phinda Private Reserve, South Africa",
    src:
      "https://media.cntraveler.com/photos/5ad7981718e93c3d9795d537/master/w_1600%2Cc_limit/andBeyond-Phinda-Private-Game-Reserve_Phinda-Rock-Lodge-_courtesy-andBeyond.com_2018_Guest-area-views-at-Phinda-Rock-Lodge-(3).jpg",
    link:
      "https://www.andbeyond.com/destinations/africa/south-africa/kwazulu-natal/phinda-private-game-reserve/",
  },
];

$("#shuffle").click(function () {
  var randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
  $("h5").text(randomImage.id);
  document.getElementById("shuffleimg").src = randomImage.src;
  document.getElementById("shufflelink").href = randomImage.link;
  document.getElementById("shufflelink").innerText = "DISCOVER THIS PROPERTY >";
});
