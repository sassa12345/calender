// ...existing code...

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] はIPv6 localhostアドレスです。
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 はIPv4 localhostアドレスです。
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$/
    )
);

// ...existing code...

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URLを持つサービスワーカーを構成します。
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // サービスワーカーは異なるオリジンでは動作しません。
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // これはlocalhostで実行されているので、サービスワーカーをチェックします。
        checkValidServiceWorker(swUrl, config);

        // サービスワーカーが見つからない場合、追加のログを出力します。
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'このウェブアプリはキャッシュファーストで提供されます。'
          );
        });
      } else {
        // localhostでない場合、サービスワーカーを登録します。
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // 新しいコンテンツが利用可能です。
              console.log('新しいコンテンツが利用可能です。');
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // コンテンツがキャッシュされました。
              console.log('コンテンツがキャッシュされました。');
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('サービスワーカーの登録中にエラーが発生しました:', error);
    });
}

// ...existing code...
