const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');

const templatesPath = path.join(__dirname, '../', 'tempates');

const outputArchivePath = path.join(__dirname, '../', 'archive');

/**
 * createZip
 * @description - 创建zip
 * @param zip zip对象
 * @param rootPath 根路径
 */
function createZip(zip, rootPath) {
  const result = fs.readdirSync(rootPath);

  result.forEach((item) => {
    if (['node_modules', '.idea'].includes(item)) return;

    const stat = fs.statSync(path.join(rootPath, item));

    if (stat.isDirectory()) {
      zip.addLocalFolder(path.join(rootPath, item), path.join(item));
    }

    if (stat.isFile()) {
      zip.addLocalFile(path.join(rootPath, item));
    }
  });
}

function createArchiveZip() {
  const dirs = fs.readdirSync(templatesPath);

  dirs.forEach((dirName) => {
    const dirPath = path.join(templatesPath, dirName);

    const zip = new AdmZip();

    createZip(zip, dirPath);

    zip.writeZip(path.join(outputArchivePath, `${dirName}.zip`));
  });
}

createArchiveZip();
