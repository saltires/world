const fg = require('fast-glob');
 
(async () => {
    const entries = await fg('**',{ dot: true });
    console.log(entries)
})()

