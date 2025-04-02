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
  } else if ($(this).hasClass("ps")) {
    $("#ps").removeClass("d-none");
  } else if ($(this).hasClass("easter")) {
    $("#easter").removeClass("d-none");
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

const psDiv = $(".ps.music");

const ps = [
  {
    title: "All Glory Laud and Honor",
  },
  {
    title: "Psalm 22: My God, My God",
  },
  {
    title: "Only This I Want",
  },
  {
    title: "Lift High the Cross",
  },
];

const easterDiv = $(".easter.music");

const easter = [
  {
    title: "Christ the Lord Is Risen Today",
  },
  {
    title: "Song over the Waters",
  },
  {
    title: "Psalm 118: This Is the Day the Lord Has Made",
  },
  {
    title: "Christ the Lord",
  },
  {
    title: "O Sacrament Most Holy",
  },
  {
    title: "Jesus Christ Is Risen Today",
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
populateTracks(ps, psDiv, "palm-sunday");
populateTracks(easter, easterDiv, "easter-sunday");

$(".audio-control").on("play", function () {
  $(".audio-control")
    .not(this)
    .each(function (index, audio) {
      audio.pause();
      audio.currentTime = 0;
    });
});
