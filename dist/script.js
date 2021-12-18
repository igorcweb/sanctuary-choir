function activate() {
  $.each($('.selection'), function (i, selection) {
    if ($(selection).hasClass('active')) {
      $(selection).find('.fa-hand-pointer-o').addClass('d-none')
      $(selection).find('.fa-check').removeClass('d-none')
    }
  })
}

activate();

$('.selection').on('click', function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $('.selection').find('.fa-hand-pointer-o').removeClass('d-none')
  $('.selection').find('.fa-check').addClass('d-none')
  activate();
  $(".music").addClass("d-none");
  if ($(this).hasClass('a3c')) {
    $("#a3c").removeClass("d-none");
  } else if ($(this).hasClass('mp')) {
    $("#mp").removeClass("d-none");
  } else if ($(this).hasClass('mm')) {
    $("#mm").removeClass("d-none");
  } else if ($(this).hasClass('ce')) {
    $("#ce").removeClass("d-none");
  } else if ($(this).hasClass('a4c')) {
    $("#a4c").removeClass("d-none");
  } else if ($(this).hasClass('cd')) {
    $("#cd").removeClass("d-none");
  } else if ($(this).hasClass('hf')) {
    $("#hf").removeClass("d-none");
  }
  $('audio').each(function () {
    $(this)[0].pause()
    $(this)[0].currentTime = 0;
  })
})

$(document).on('mouseover', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').addClass('hover');
})

$(document).on('mouseout', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').removeClass('hover');
})

const mpDiv = $('.mp.music');

const mp = [
  {
    title: 'Penitential Act'
  },
  {
    title: 'Gloria'
  },
  {
    title: 'Holy'
  },
  {
    title: 'When We Eat This Bread'
  },
  {
    title: 'Lamb of God'
  },
]

const ceDiv = $('.ce.music');
const ce = [
  {
    title: 'Psalm 89: Forever I Will Sing'
  },
  {
    title: 'Gospel Acclamation'
  },
]

const hfDiv = $('.hf.music');
const hf = [
  {
    title: 'Psalm 128: Blest Are Those Who Love You'
  },
  {
    title: 'Gospel Acclamation'
  },
]

const mmDiv = $('.mm.music');
const mm = [
  {
    title: 'Psalm 96: Today Is Born Our Savior'
  },

]

const cdDiv = $('.cd.music');
const cd = [
  {
    title: 'Psalm 98: All the Ends of the Earth'
  },
]



const a4cDiv = $('.a4c.music');
const a4c = [
  {
    title: 'Advent Gathering Antiphon'
  },
  {
    title: 'Psalm 80: Lord, Make Us Turn to You'
  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'Emmanuel'
  },
  {
    title: 'Hail Mary: Gentle Woman'
  },
  {
    title: 'O Come, Divine Messiah!'

  }
]


function populateTracks(track, div, folder) {
  $.each(track, (i, track) => {
    let fileName = track.title
      .replaceAll(',', '')
      .replaceAll(':', '')
      .replaceAll('!', '')
      .replaceAll("’", '')
      .replaceAll(' ', '-')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .toLowerCase();
    if (track.title === 'Gospel Acclamation') {
      fileName = `gospel-acc-${folder}`
    }
    if (track.title === 'Here I Am, Lord') {
      fileName = `here-i-am-lord-ward`
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
  })
}

populateTracks(mp, mpDiv, 'missa-pacem');
populateTracks(a4c, a4cDiv, 'a4c');
populateTracks(ce, ceDiv, 'christmas-eve');
populateTracks(mm, mmDiv, 'midnight');
populateTracks(cd, cdDiv, 'christmas-day');
populateTracks(hf, hfDiv, 'holy-family');


$('.audio-control').on("play", function () {
  $(".audio-control").not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});












