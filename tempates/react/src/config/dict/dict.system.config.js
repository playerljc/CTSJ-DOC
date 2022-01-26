import 'moment/locale/zh-cn';
import 'moment/locale/en-ca';
import 'moment/locale/pt';

import { Dict } from '@baifendian/adhere';

export default {
  initStatic() {
    // 系统的字体
    Dict.handlers.SystemFontFamily = () => '"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体"';
  },
  initRemote() {
    Dict.handlers.SystemAuthorized = () => Promise.resolve([]);
  },
};
