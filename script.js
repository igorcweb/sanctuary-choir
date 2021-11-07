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
  if ($(this).hasClass('otb33')) {
    $("#otb33").removeClass("d-none");
  } else if ($(this).hasClass('mp')) {
    $("#mp").removeClass("d-none");
  } else if ($(this).hasClass('ctk')) {
    $("#ctk").removeClass("d-none");
  } else if ($(this).hasClass('otb32')) {
    $("#otb32").removeClass("d-none");
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

const otb32Div = $('.otb32.music');
const otb32 = [
  {
    title: 'Christ Be Our Light'
  },
  {
    title: 'Psalm 146: Praise the Lord, My Soul'
  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'What You Have Done for Me'
  },

  {
    title: 'These Alone Are Enough'
  },
  {
    title: 'Go Make of All Disciples'
  },
]

const ctkDiv = $('.ctk.music');
const ctk = [
  {
    title: 'To Jesus Christ, Our Sovereign King'

  },
  {
    title: 'Psalm 93: The Lord Is King'

  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'Behold the Lamb'

  },

  {
    title: 'O Sacrament Most Holy'

  },
  {
    title: 'Rejoice, the Lord Is King!'

  },
]



const otb33Div = $('.otb33.music');
const otb33 = [
  {
    title: 'All Creatures of Our God and King	'

  },
  {
    title: 'Psalm 16: You Are My Inheritance'

  },
  {
    title: 'Gospel Acclamation'
  },
  {
    title: 'Only This I Want'
  },

  {
    title: 'Blessed Assurance'
  },
  {
    title: 'Holy God We Praise Thy Name'

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
populateTracks(otb33, otb33Div, 'otb-33');
populateTracks(otb32, otb32Div, 'otb-32');
populateTracks(ctk, ctkDiv, 'ctk');

$('.audio-control').on("play", function () {
  $(".audio-control").not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});












