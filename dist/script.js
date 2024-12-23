function activate() {
  $.each($(".selection"), function (i, selection) {
    if ($(selection).hasClass("active")) {
      $(selection).find(".fa-hand-pointer-o").addClass("d-none");
      $(selection).find(".fa-check").removeClass("d-none");
    }
  });
}

activate();

$(".selection").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".selection").find(".fa-hand-pointer-o").removeClass("d-none");
  $(".selection").find(".fa-check").addClass("d-none");
  activate();
  $(".music").addClass("d-none");
  if ($(this).hasClass("mp")) {
    $("#mp").removeClass("d-none");
  } else if ($(this).hasClass("mmg")) {
    $("#mmg").removeClass("d-none");
  } else if ($(this).hasClass("hf")) {
    $("#hf").removeClass("d-none");
  } else if ($(this).hasClass("epiphany")) {
    $("#epiphany").removeClass("d-none");
  }
  $("audio").each(function () {
    $(this)[0].pause();
    $(this)[0].currentTime = 0;
  });
});

$(document).on("mouseover", ".selection", function () {
  $(this).find(".fa-hand-pointer-o").addClass("hover");
});

$(document).on("mouseout", ".selection", function () {
  $(this).find(".fa-hand-pointer-o").removeClass("hover");
});

const mpDiv = $(".mp.music");

const mp = [
  {
    title: "Penitential Act",
  },
  {
    title: "Gloria",
  },
  {
    title: "Holy",
  },
  {
    title: "When We Eat This Bread",
  },
  {
    title: "Lamb of God",
  },
];

const hfDiv = $(".hf.music");

const hf = [
  { title: "Once in Royal David’s City" },
  { title: "Psalm 128: Blest Are Those Who Love You" },
  { title: "Gospel Acclamation" },
  { title: "What Child Is This" },
  { title: "Child of Mercy" },
  { title: "Angels We Have Heard on High" },
];

const epiphanyDiv = $(".epiphany.music");
const epiphany = [
  { title: "Epiphany Carol" },
  { title: "Psalm 72: Lord, Every Nation" },
  { title: "Gospel Acclamation" },
  { title: "The First Nowell" },
  { title: "We Three Kings of Orient Are" },
  { title: "Song of Thankfulness and Praise" },
];

const mmgDiv = $(".mmg.music");

const mmg = [
  { title: "Hark! the Herald Angels Sing" },
  { title: "Psalm 67: May God Bless Us in His Mercy" },
  { title: "Gospel Acclamation" },
  { title: "I Sing a Maid" },
  { title: "Child of Mercy" },
  { title: "Sing of Mary, Pure and Lowly" },
];

// const mlDiv = $('.ml.music');
// const ml = [
//   {
//     title: 'Kyrie',
//   },
//   {
//     title: 'Holy',
//   },
//   {
//     title: 'Save Us Savior',
//   },
//   {
//     title: 'Lamb of God',
//   },
// ]

const aa1Div = $(".aa1.music");
const aa1 = [
  {
    title: "The King Shall Come When Morning Dawns",
  },
  {
    title: "Psalm 122: Let Us Go Rejoicing",
  },
  {
    title: "Gospel Acclamation",
  },
  {
    title: "Bread of Life",
  },
  {
    title: "Creator of the Stars of Night",
  },

  {
    title: "Awake! Awake, and Greet New Morn",
  },
];

function populateTracks(track, div, folder) {
  $.each(track, (i, track) => {
    let fileName = track.title
      .replaceAll(",", "")
      .replaceAll(":", "")
      .replaceAll("!", "")
      .replaceAll("’", "")
      .replaceAll(" ", "-")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .toLowerCase();
    if (track.title === "Gospel Acclamation") {
      fileName = `gospel-acc-${folder}`;
    }
    if (track.title === "Here I Am, Lord") {
      fileName = `here-i-am-lord-ward`;
    }
    const file = `./audio/${folder}/${fileName}.m4a`;
    $(div).append(`
    <div class="mb-4">
      <h4 class="ms-4 ms-sm-2">
        ${track.title}
      </h4>
      <audio controls title="${track.title}" class="audio-control mb-2">
        <source src="${file}" />
        Your browser does not support the audio element.
      </audio>
    </div>
    `);
  });
}

// populateTracks(aa1, aa1Div, "aa1");
populateTracks(mp, mpDiv, "missa-pacem");
populateTracks(hf, hfDiv, "holy-family");
populateTracks(mmg, mmgDiv, "mary-mother-of-god");
populateTracks(epiphany, epiphanyDiv, "epiphany");

$(".audio-control").on("play", function () {
  $(".audio-control")
    .not(this)
    .each(function (index, audio) {
      audio.pause();
      audio.currentTime = 0;
    });
});
