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
  if ($(this).hasClass('otb25')) {
    $("#otb25").removeClass("d-none");
  } else if ($(this).hasClass('mp')) {
    $("#mp").removeClass("d-none");
  } else if ($(this).hasClass('otb26')) {
    $("#otb26").removeClass("d-none");
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
    title: 'Penitential Act',
    file: './audio/misa-pacem/penitential-act.m4a'
  },
  {
    title: 'Gloria',
    file: './audio/misa-pacem/gloria.m4a'
  },
  {
    title: 'Holy',
    file: './audio/misa-pacem/holy.m4a'
  },
  {
    title: 'When We Eat This Bread',
    file: './audio/misa-pacem/when-we-eat-this-bread.m4a'
  },
  {
    title: 'Lamb of God',
    file: './audio/misa-pacem/lamb-of-god.m4a'
  },
]

const otb25Div = $('.otb25.music');
const otb25 = [
  {
    title: 'Christ, Be Our Light!',
    file: './audio/otb-25/christ-be-our-light.m4a'
  },
  {
    title: 'Psalm 54: The Lord Upholds My Life',
    file: './audio/otb-25/psalm-54-the-lord-upholds-my-life.m4a'
  },
  {
    title: 'Gospel Acclamation',
    file: './audio/otb-25/gospel-acc-otb25.m4a'
  },
  {
    title: 'Be Not Afraid',
    file: './audio/otb-25/be-not-afraid.m4a'
  },

  {
    title: 'Make of Our Hands a Throne',
    file: './audio/otb-25/make-of-our-hands-a-throne.m4a'
  },
  {
    title: 'We Are Called',
    file: './audio/otb-25/we-are-called.m4a'
  },
]

const otb26Div = $('.otb26.music');
const otb26 = [
  {
    title: 'As a Fire Is Meant for Burning',
    file: './audio/otb-26/as-a-fire-is-mean-for-burning.m4a'
  },
  {
    title: 'Psalm 19: The Precepts of the Lord',
    file: './audio/otb-26/psalm-19-the-precepts-of-the-lord.m4a'
  },
  {
    title: 'Gospel Acclamation',
    file: './audio/otb-26/gospel-acc-otb26.m4a'
  },
  {
    title: 'Set Your Heart on the Higher Gifts',
    file: './audio/otb-26/set-your-heart-on-the-higher-gifts.m4a'
  },

  {
    title: 'One Communion of Love',
    file: './audio/otb-26/one-communion-of-love.m4a'
  },
  {
    title: 'Go Make of All Disciples',
    file: './audio/otb-26/go-make-of-all-disciples.m4a'
  },
]

function populateTracks(track, div) {
  $.each(track, (i, track) => {
    $(div).append(`
    <div class="mb-4">
      <h4 class="ms-4 ms-sm-2">
        ${track.title}
      </h4>
      <audio controls title="${track.title}" class="audio-control mb-2">
        <source src="${track.file}" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
    `);
  })
}

populateTracks(mp, mpDiv);
populateTracks(otb25, otb25Div);
populateTracks(otb26, otb26Div);

$('.audio-control').on("play", function () {
  $(".audio-control").not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});












