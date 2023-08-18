// const urlEntry = require('./urlSchema')
// const sha256 = require('sha256')

// function getShortendURLfromOriginalURL(originalURL) {
//     return sha256(originalURL).slice(0, 5)
// }

// async function getSHORTurl(originalURL) {
//     const url = await urlEntry.findOne({ originalURL: originalURL })
//     return url
// }


// function URLaddTable(originalURL) {
//     getSHORTurl(originalURL).then((isExisted) => {
//         if (isExisted === null) {
//             shortendURL = getShortendURLfromOriginalURL(originalURL)
//             const newURLentry = new urlEntry({
//                 originalURL: originalURL,
//                 shortURL: shortendURL
//             })
//             newURLentry.save();
//         }
//     })
// }

// async function getSHORTurlObject(shortendURL) {
//     const originalURL = await urlEntry.findOne({ shortURL: shortendURL })
//     return originalURL
// }

// module.exports = { URLaddTable, getSHORTurl, getSHORTurlObject }


const urlEntry = require('./urlSchema');
const sha256 = require('sha256');

function getShortendURLfromOriginalURL(originalURL) {
    return sha256(originalURL).slice(0, 5);
}

async function getSHORTurl(originalURL) {
    const url = await urlEntry.findOne({ originalURL: originalURL });
    return url;
}

async function URLaddTable(originalURL) {
    try {
        const existingURL = await getSHORTurl(originalURL);

        if (!existingURL) {
            const shortendURL = getShortendURLfromOriginalURL(originalURL);
            const newURLentry = new urlEntry({
                originalURL: originalURL,
                shortURL: shortendURL
            });
            await newURLentry.save();
        }
    } catch (error) {
        console.error('Error adding URL to the database:', error);
    }
}

async function getSHORTurlObject(shortendURL) {
    const originalURL = await urlEntry.findOne({ shortURL: shortendURL });
    return originalURL;
}

module.exports = { URLaddTable, getSHORTurl, getSHORTurlObject };
