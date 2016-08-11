(function( window, document ){

  'use strict';

  var btn = document.getElementById('btn');
  var content = document.getElementById('content');

  const addClick = () => { console.log('[btn]: clicked') }
  const addMouseover = () => { console.log('[btn]: mouseover') }
  const addMouseOut = () => { console.log('[contnt]: mouseout') }

  btn.addEventListener('click', addClick, false);
  btn.addEventListener('mouseover', addMouseover, false);
  content.addEventListener('mouseout', addMouseOut, false);

})( window, document );