import React from 'react';
import { Typography } from 'antd';

import Playground from '@/lib/Playground';
import ScrollFooterPanel from '@/lib/ScrollFooterPanel';

import styles from './introduction.less';

const { Title, Paragraph, Text } = Typography;

class Introduction extends React.Component {
  render() {
    return (
      <ScrollFooterPanel>
        <div className={styles.Wrap}>
          <Typography>
            <Title level={2}>概述</Title>
            <Paragraph>
              <Text>总体的介绍</Text>
            </Paragraph>
            <Title level={2}>兼容</Title>
            <Paragraph>
              <ul>
                <li>- 支持react16.x | 17.x</li>
                <li>- 支持antd4.x</li>
                <li>- 支持国际化</li>
                <li>- 支持修改主题</li>
                <li>- 支持动态引入(babel-plugin-import)</li>
              </ul>
            </Paragraph>
            <Title level={2}>安装</Title>
            <Paragraph>
              <code>npm i @baifendian/adhere --save</code>
            </Paragraph>
          </Typography>

          <Typography className={styles.Margin}>
            <Title level={2}>按需加载</Title>
            <Paragraph>
              需要在webpack构建中加入如下配置,如果进行了按需加载，则就不需要单独引入
              <code>@baifendian/adhere/lib/index.less</code>和<code>antd/dist/antd.less</code>
              <br />
              如果没有进行按需加载则需要单独引入<code>@baifendian/adhere/lib/index.less</code>和
              <code>antd/dist/antd.less</code>
              <p style={{ color: 'red' }}>
                注：如果对antd进行了按需加载在应该在webpack的babel-loader的include中加入adhere路径
                <code>include.push(/@baifendian[\\/]adhere/)</code>
              </p>
            </Paragraph>
            <Playground
              mode="code"
              scope={{ React }}
              expand
              codeText={`
  [
    'import',
    {
      libraryName: '@baifendian/adhere',
      transformToDefaultImport: true,
      style: true,
    },
    'adhere',
  ],
  [
    'import',
    {
      libraryName: 'antd',
      style: true,
    },
    'ant',
  ],
              `}
            />
          </Typography>
        </div>
      </ScrollFooterPanel>
    );
  }
}

export default Introduction;
