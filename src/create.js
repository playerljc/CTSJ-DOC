const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');
const fse = require('fs-extra');
const rimraf = require('rimraf');
const AdmZip = require('adm-zip');

const Util = require('./util');

// 运行脚本的路径
const runtimePath = process.cwd();
const contextPath = path.join(__dirname, '../');
const log = console.log;

let templateType;
let directoryPath;
let client;

/**
 * createProjectFolder - 在目标目录中新建项目目录
 */
function createProjectFolder() {
  if (fs.existsSync(directoryPath)) {
    rimraf.sync(directoryPath);
  }

  fs.mkdirSync(directoryPath);
  log(chalk.blue('create project directory complete'));
}

/**
 * copyTemplateToProject - 模板复制到项目目录
 */
function copyTemplateToProject() {
  const zipName = `${templateType}.zip`;
  const targetZipPath = path.join(directoryPath, zipName);
  fse.copySync(path.join(contextPath, 'archive', zipName), targetZipPath);

  // 解压
  const unzip = new AdmZip(targetZipPath);
  unzip.extractAllTo(directoryPath, true);

  // 删除压缩包
  rimraf.sync(targetZipPath);
  log(chalk.blue('copy template completed'));
}

/**
 * run - 运行
 */
function run() {
  npmInstall().then(() => {
    log(chalk.blue('安装依赖包完成'));
    npmRunStartApp().then(() => {
      log(chalk.blue('启动完成'));
    });
  });
}

function npmInstall() {
  return new Promise((resolve) => {
    // 执行install
    const iproc = spawn(Util.isWin32() ? `${client}.cmd` : client, ['install'], {
      cwd: directoryPath,
      encoding: 'utf-8',
    });

    iproc.stdout.on('data', (data) => {
      log(chalk.green(`stdout: ${data}`));
    });

    iproc.stderr.on('data', (data) => {
      log(chalk.red(`stderr: ${data}`));
    });

    iproc.on('close', (code) => {
      log(chalk.yellow(`install：${code}`));
      resolve();
    });
  });
}

function npmRunStartApp() {
  return new Promise((resolve) => {
    // 执行npm run startapp
    const sproc = spawn(Util.isWin32() ? `npm.cmd` : 'npm', ['run', 'startapp'], {
      cwd: directoryPath,
      encoding: 'utf-8',
    });

    sproc.stdout.on('data', (data) => {
      log(chalk.green(`stdout: ${data}`));
    });

    sproc.stderr.on('data', (data) => {
      log(chalk.red(`stderr: ${data}`));
    });

    sproc.on('close', (code) => {
      log(chalk.yellow(`run startapp：${code}`));
      resolve();
    });
  });
}

/**
 * exec
 * @return {IterableIterator<void>}
 * @constructor
 */
function* Iterator() {
  yield createProjectFolder();
  yield copyTemplateToProject();
  // yield run();
}

module.exports = function (entry) {
  const { type, directory, npmClient } = entry;

  templateType = type || 'react';

  client = npmClient || 'yarn';

  // 指定了目录
  if (directory) {
    // 是绝对路径
    if (path.isAbsolute(directory)) {
      directoryPath = directory;
    }
    // 是相对路径(程序运行目录/srcPath)
    else {
      directoryPath = path.join(runtimePath, directory);
    }
  }
  // 没有指定了目录
  else {
    directoryPath = path.join(runtimePath, `${new Date().getTime()}`);
  }

  const it = Iterator();
  for (const p of it);
};
