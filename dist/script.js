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
  if ($(this).hasClass('otb29')) {
    $("#otb29").removeClass("d-none");
  } else if ($(this).hasClass('mp')) {
    $("#mp").removeClass("d-none");
  } else if ($(this).hasClass('otb28')) {
    $("#otb28").removeClass("d-none");
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

const otb29Div = $('.otb29.music');
const otb29 = [
  {
    title: 'There’s a Wideness in God’s Mercy'

  },
  {
    title: 'Psalm 33: Lord, Let Your Mercy Be on Us'

  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'Unless a Grain of Wheat'

  },

  {
    title: 'You Satisfy a Hungry Heart'

  },
  {
    title: 'Go Make of All Disciples'

  },
]

const otb28Div = $('.otb28.music');
const otb28 = [
  {
    title: 'O God, Our Help in Ages Past'
  },
  {
    title: 'Psalm 90: Fill Us with Your Love'
  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'Eye Has Not Seen'
  },

  {
    title: 'We Remember'
  },
  {
    title: 'Holy God, We Praise Thy Name'
  },
]

function populateTracks(track, div, folder) {
  $.each(track, (i, track) => {
    let fileName = track.title
      .replaceAll(',', '')
      .replaceAll(':', '')
      .replaceAll('!', '')
      .replaceAll("’", '')
      .replaceAll(' ', '-')
      .toLowerCase();
    if (track.title === 'Gospel Acclamation') {
      fileName = `gospel-acc-${folder}`
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
populateTracks(otb29, otb29Div, 'otb-29');
populateTracks(otb28, otb28Div, 'otb-28');

$('.audio-control').on("play", function () {
  $(".audio-control").not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});












