d3.select('h1').style('color', 'blue')
.attr('id', 'heading')
.text('Updated hello')

d3.select('body').append('p')
.text('a new paragraph')

d3.select('body').append('p')
.text('I am a student in the PI+ program at KJHS.')

d3.selectAll('p').style('color', 'red')
