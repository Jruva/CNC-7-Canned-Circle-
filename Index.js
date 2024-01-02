let c='G93'
let x="Enter the X-coordinate"
let cx =prompt(x)
let y="Enter the Y-coordinate"
let cy=prompt(y)
document.write(c+'X'+cx+'Y'+cy);


// Get output element (will be empty)
const output = document.getElementById('output');

// Create array
const strings = ['X0Y0',
'X.08Y0',
'X.08Y0.01',
'X.07Y.03 ',
'X.06Y.05 ',
'X.05Y.06',
'X.04Y.07',
'X.02Y.08',
'X0Y.08',
'X-.01Y.08',
'X-.03Y.07', 
'X-.05Y.06', 
'X-.06Y.05', 
'X-.07Y .04',
'X -.08Y.02',
'X-.08Y0',
'X-.08Y-.01',
'X -.07Y -.03',
'X-.06Y-.05',
'X-.05Y-.06',
'X -.04Y-.07',
'X-.02Y-.08',
'X0Y-.08',
'X .01Y-.08',
'X .03Y-.07',
'X .05Y-.06',
'X.06Y -.05',
'X.07Y -.04',
'X.08Y-.02'];

// Create list 
const list = document.createElement('ul');

// Append array items to list
for(let s of strings) {
  const item = document.createElement('li');
  item.textContent = s;
  list.appendChild(item); 
}

// Finally, append list to output
output.appendChild(list);



