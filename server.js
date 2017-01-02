var fs = require('fs');

var content = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. In adipisci sint reiciendis, corrupti, soluta nisi numquam officiis vero magni illo eaque doloremque eveniet quo nesciunt! Non nesciunt, nemo ut necessitatibus?
`;

fs.writeFile('test.txt', content.trim(), (error, file) => {
    console.log('File created');
});
