//document.write('app.js is loading properly');
'use strict';

function voteForProduct(event){
    console.log('voteForProduct event', event.target);
    event.preventDefault();
}
var recordVote = document.getElementById('prod1');
recordVote.addEventListener('click', voteForProduct);

recordVote = document.getElementById('prod2');
recordVote.addEventListener('click', voteForProduct);

recordVote = document.getElementById('prod3');
recordVote.addEventListener('click', voteForProduct);
