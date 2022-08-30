import express from 'express';
import { renderToString } from 'vue/server-renderer';
import { createApp } from './app.js';

const server = express();

server.get('/', (req, res) => {
  // const app = createApp();

  // renderToString(app).then((html) => {
  //   console.log('html', html);

  //   res.send(`
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <title>Vue SSR Example</title>
  //       <script type="importmap">
  //         {
  //           "imports": {
  //             "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
  //           }
  //         }
  //       </script>
  //       // 服务返回的 HMTL，包括 client.js
  //       <script type="module" src="/client.js"></script>
  //     </head>
  //     <body>
  //       // <div id="app">${html}</div>
  //       <div id="app"></div>
  //     </body>
  //   </html>
  //   `);
  // });

  // ## 也可以仅仅发送一个 HTML 模板，所有逻辑交由 client.js 实现
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Vue SSR Example</title>
      <script type="importmap">
        {
          "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
          }
        }
      </script>
      // 服务返回的 HMTL，包括 client.js
      <script type="module" src="/client.js"></script>
    </head>
    <body>
      <div id="app">hello</div>
    </body>
  </html>
  `);
});

server.use(express.static('.'));

server.listen(3000, () => {
  console.log('ready');
});
