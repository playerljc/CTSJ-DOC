const create = require('./create');

module.exports = {
  // 创建一个工程
  create: {
    alias: 'create project',
    description: 'create project',
    options: [
      {
        // 类型
        command: '-t --type <name>',
        description: 'type [react | vue]',
      },
      {
        // npmClient
        command: '-n --npmClient <name>',
        description: 'npmClient [yarn | npm]',
      },
      {
        // 工程目录
        command: '-d --directory <path>',
        description: 'project directory',
      },
    ],
    action: (entry) => {
      create(entry);
    },
  },
};
