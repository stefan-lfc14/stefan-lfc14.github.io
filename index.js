d3.select('h1').style('color', 'blue')
.attr('id', 'heading')
.text('Updated hello')

d3.select('body').append('p')
.text('a new paragraph')