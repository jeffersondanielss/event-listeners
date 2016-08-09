(function( window, document ){

  'use strict';

  var btn = document.getElementById('btn');

  const addClick = () => { console.log('[btn]: clicked') }
  const addMouseover = () => { console.log('[btn]: mouseover') }

  btn.addEventListener('click', addClick, false);
  btn.addEventListener('mouseover', addMouseover, false);

})( window, document );