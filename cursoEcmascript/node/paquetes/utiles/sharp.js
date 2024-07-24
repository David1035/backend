const sharp = require('sharp');

sharp('./img2.png')
    .resize(80)
    .toFile('resized.png')