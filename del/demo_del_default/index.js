const del = require('del');

(async () => {
    // 删除文件
    const deletedFilePaths = await del(['bar/**/*.txt']);
    // 删除目录
    const deletedDirectoryPaths = await del(['foo']);
 
    console.log('Deleted files:\n', deletedFilePaths.join('\n'));
    console.log('\n\n');
    console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
})();