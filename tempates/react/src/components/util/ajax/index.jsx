import React, { useRef, useState } from 'react';
import { Button, Progress, Avatar } from 'antd';

import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `get`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'get',
            info: 'get',
          },
        },
        codeText: `
  import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';

  const k007Ajax = new Ajax('http://k007-dev.baifendian.com');

  k007Ajax
    .get({
      path:
        '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
      loading: {
        show: true,
      },
    })
    .then((res) => {
      if (res) {
        if (res.data.code === 200) {
          alert(JSON.stringify(res.data.data));
        }

        res.hideIndicator();
      }
    });
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              k007Ajax
                .get({
                  path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
                  loading: {
                    show: true,
                  },
                })
                .then((res) => {
                  if (res) {
                    if (res.data.code === 200) {
                      alert(JSON.stringify(res.data.data));
                    }

                    res.hideIndicator();
                  }
                });
            }}
          >
            call
          </Button>
        ),
      },
      {
        id: `p2`,
        name: `post`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'post',
            info: 'post',
          },
        },
        codeText: `
  import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';

  const k007Ajax = new Ajax('http://k007-dev.baifendian.com');

  k007Ajax
    .post({
      path: '/api/controlledObject/facade/fq/queryList',
      data: [
        {
          resource: '12345678',
          type: '101',
          uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
        },
        { resource: '', type: '103', uuid: '562096255732281344' },
      ],
      loading: {
        show: true,
      },
    })
    .then((res) => {
      if (res) {
        if (res.data.code === 200) {
          alert(JSON.stringify(res.data.data));
        }

        res.hideIndicator();
      }
    });
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              k007Ajax
                .post({
                  path: '/api/controlledObject/facade/fq/queryList',
                  data: [
                    {
                      resource: '12345678',
                      type: '101',
                      uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
                    },
                    { resource: '', type: '103', uuid: '562096255732281344' },
                  ],
                  loading: {
                    show: true,
                  },
                })
                .then((res) => {
                  if (res) {
                    if (res.data.code === 200) {
                      alert(JSON.stringify(res.data.data));
                    }

                    res.hideIndicator();
                  }
                });
            }}
          >
            call
          </Button>
        ),
      },
      {
        id: `p3`,
        name: `upload`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'upload',
            info: 'upload',
          },
        },
        codeText: `
  import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';

  const k007Ajax = new Ajax('http://k007-dev.baifendian.com');

  <form encType="multipart/form-data" method="post" ref={uploadFormFef}>
    <div>
      <Avatar shape="square" size="large" icon={img ? <img src={img} alt="" /> : null} />

      <Space />

      <input
        type="file"
        ref={uploadRef}
        onChange={() => {
          const file = uploadRef.current.files[0];

          const { size } = file;

          const reader = new FileReader();
          reader.onload = (e) => {
            setImg(e.target.result);
          };

          reader.readAsDataURL(file);

          k007Ajax
            .post({
              path: '/api/personControl/monitorPerson/image/upload',
              data: {
                form: uploadFormFef.current,
                data: {
                  file,
                },
              },
              loading: {
                show: true,
              },
              onProgress: (e) => {
                setPercent((e.loaded / size) * 100);
              },
              onLoadend: () => {
                setPercent(100);
              },
            })
            .then((res) => {
              setPercent(100);

              if (res) {
                if (res.data.code === 200) {
                  alert(JSON.stringify(res.data.data));
                }

                res.hideIndicator();
              }
            });
        }}
      />

      <Space />

      <Progress percent={percent} />
    </div>
  </form>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <form encType="multipart/form-data" method="post" ref={uploadFormFef}>
            <div>
              <Avatar shape="square" size="large" icon={img ? <img src={img} alt="" /> : null} />

              <Space />

              <input
                type="file"
                ref={uploadRef}
                onChange={() => {
                  const file = uploadRef.current.files[0];

                  const { size } = file;

                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setImg(e.target.result);
                  };

                  reader.readAsDataURL(file);

                  k007Ajax
                    .post({
                      path: '/api/personControl/monitorPerson/image/upload',
                      data: {
                        form: uploadFormFef.current,
                        data: {
                          file,
                        },
                      },
                      loading: {
                        show: true,
                      },
                      onProgress: (e) => {
                        setPercent((e.loaded / size) * 100);
                      },
                      onLoadend: () => {
                        setPercent(100);
                      },
                    })
                    .then((res) => {
                      setPercent(100);

                      if (res) {
                        if (res.data.code === 200) {
                          alert(JSON.stringify(res.data.data));
                        }

                        res.hideIndicator();
                      }
                    });
                }}
              />

              <Space />

              <Progress percent={percent} />
            </div>
          </form>
        ),
      },
      {
        id: `p4`,
        name: `PromiseAll`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'PromiseAll',
            info: 'PromiseAll',
          },
        },
        codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('???????????????');

        resolve();
      });
    }}
  >
    <a>??????</a>
  </DelConfirm>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const globalIndicator = GlobalIndicator.show();

              Promise.all([
                k007Ajax.get({
                  path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
                }),
                k007Ajax.get({
                  path: '/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10',
                }),
                k007Ajax.post({
                  path: '/api/controlledObject/facade/fq/queryList',
                  data: [
                    {
                      resource: '12345678',
                      type: '101',
                      uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
                    },
                    { resource: '', type: '103', uuid: '562096255732281344' },
                  ],
                }),
              ])
                .then((res) => {
                  GlobalIndicator.hide(globalIndicator);
                  alert(JSON.stringify(res));
                })
                .catch(() => {
                  GlobalIndicator.hide(globalIndicator);
                });
            }}
          >
            call
          </Button>
        ),
      },
    ];
  }

  const uploadFormFef = useRef();
  const uploadRef = useRef();

  const [img, setImg] = useState(null);
  const [percent, setPercent] = useState(0);

  return (
    <PlayGroundPage>
      <Section title="Ajax" />

      <CodeBoxSection title="????????????" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ISendArg',
            data: [
              {
                params: 'path',
                desc: '???????????????(???????????????)',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'headers',
                desc: '????????????',
                type: 'Object<key,value>',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '???????????????',
                type: '{form?: HTMLFormElement;data: object;} | object',
                defaultVal: '',
              },
              {
                params: 'mock',
                desc: '????????????mock??????',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'loading',
                desc: 'loading?????????',
                type: '{show:boolean;text:string;el:HtmlElement}',
                defaultVal: '',
              },
              {
                params: 'onBeforeResponse',
                desc: '??????????????????????????????key',
                type: '() => {}',
                defaultVal: '',
              },
              {
                params: 'dataKey',
                desc: '????????????',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'messageKey',
                desc: '????????????',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'codeKey',
                desc: '??????code??????',
                type: 'number | string',
                defaultVal: '',
              },
              {
                params: 'codeSuccess',
                desc: '??????code????????????',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'showWarn',
                desc: '???code?????????200?????????????????????message???warn',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'onTimeout',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadsStart',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onProgress',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAbort',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onError',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoad',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadend',
                desc: '????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'timeout',
                desc: '????????????',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'withCredentials',
                desc: '???????????????????????????',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'interceptor',
                desc: '?????????',
                type: 'Function({status,statusText,response,responseText})',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'onTimeout',
                desc: '????????????????????????????????????????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadsStart',
                desc: '??????????????????????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onProgress',
                desc: '??????????????????????????????????????????????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAbort',
                desc: '??? request ?????????????????????????????????????????? XMLHttpRequest.abort() ???',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onError',
                desc: '??? request ?????????????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoad',
                desc: 'XMLHttpRequest???????????????????????????',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onLoadend',
                desc: '?????????????????????, ?????????????????? ( load) ???????????? (abort ??? error)',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'timeout',
                desc: '????????????',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'withCredentials',
                desc: '???????????????????????????',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'interceptor',
                desc: '?????????????????????',
                type: 'Function({status,statusText,response,responseText})',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '??????',
            data: [
              {
                name: 'constructor',
                desc: '????????????',
                modifier: 'public',
                params: [
                  {
                    name: 'baseURL',
                    desc: '????????????',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'systemManagerBaseURL',
                    desc: '????????????BaseURL',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: '??????',
                    type: 'IConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Ajax',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: 'get??????',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'post',
                desc: 'post??????',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'path',
                desc: 'path??????',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'put',
                desc: 'put??????',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'delete',
                desc: 'delete??????',
                modifier: 'public',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: 'ISendArg',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
