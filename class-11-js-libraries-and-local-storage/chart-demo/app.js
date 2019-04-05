'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['coding', 'guitar', 'kids', 'skateboarding'],
        datasets: [{
            label: 'Votes for My Fav Things',
            data: [3, 10, 9, 4],
            backgroundColor: ['#000000', '#444444', '#888888', '#f3f3f3']
        }]
    },
    options: {}
});