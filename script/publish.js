const { spawn } = require('child_process');

const packageJSON = require('../package.json');

const runtimePath = process.cwd();

function isWin32() {
  return process.platform === 'win32';
}

/**
 * createTag
 * @description - 根据package.json中的version创建tag
 */
function createTag() {
  return new Promise((resolve) => {
    const cmd = 'git';

    const tagName = `v${packageJSON.version}`;

    console.log(`create ${tagName} tag`);

    let handler = spawn(cmd, ['tag', tagName], {
      cwd: runtimePath,
      encoding: 'utf-8',
    });

    handler.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    handler.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    handler.on('close', () => {
      console.log(`push ${tagName} tag origin`);

      handler = spawn(cmd, ['push', 'origin', tagName], {
        cwd: runtimePath,
        encoding: 'utf-8',
      });

      handler.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      handler.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
      });

      handler.on('close', () => {
        console.log(`push ${tagName} tag origin finish`);
        resolve();
      });
    });
  });
}

/**
 * publish
 * @description - 发布到npm
 * @return {Promise<unknown>}
 */
function publish() {
  return new Promise((resolve) => {
    const cmd = isWin32() ? 'npm.cmd' : 'npm';

    console.log('publish npm');
    const handler = spawn(cmd, ['publish', '--access=public'], {
      cwd: runtimePath,
      encoding: 'utf-8',
    });

    handler.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    handler.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    handler.on('close', (code) => {
      console.log(`close：${code}`);
      console.log('publish npm finish');
      resolve();
    });
  });
}

/**
 * archive
 * @description 归档zip文件
 * @return {Promise<unknown>}
 */
function archive() {
  return new Promise((resolve) => {
    const cmd = isWin32() ? 'npm.cmd' : 'npm';

    console.log('create archive');

    const handler = spawn(cmd, ['run', 'archive'], {
      cwd: runtimePath,
      encoding: 'utf-8',
    });

    handler.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    handler.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    handler.on('close', (code) => {
      console.log(`close：${code}`);
      console.log('create archive finish');
      resolve();
    });
  });
}

archive().then(() => {
  createTag().then(() => {
    // publish().then(() => {
    //   process.exit();
    // });
  });
});
