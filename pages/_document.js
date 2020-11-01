import Document, { Html, Head, Main, NextScript } from 'next/document'
const fetch = require('node-fetch')

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    // const Instafeed = {
    //   "url": `https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js`
    // }
    const options = {
      method: 'GET',
      headers: {
        get: 'konstunge',
        target: "instafeed-container",
        resolution: 'low_resolution',
        accessToken: 'IGQVJYVDRVX0hqUjU1NEpsMk9ITjMyNWZABZAXZAsa0k2d2R6NGN1ak5GUzA0WUc4ajQ0ZAE84UnJ0LWFoNkFIS2ZAhSGpHbk1wbkg1VXRTSFl2cXVsc0gtdUFYUzhJeVh2UThsMmNpTWFrdXloMUQ1Y1A3cwZDZD'
      },
      // body: 'https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js'
    }
    // fetch('https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js', options)
    //   .then(console.log('res: ', options)
    //   )
    // const userFeed = new Instafeed({options})
    // userFeed.run()
    return (
      <Html>
        <Head />
        <body>
          <div id='instafeed-container'></div>
        {/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '774796920028868',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v8.0'
    })
  };
</script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
     */}
  {/* <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script> */}
	
  {/* <script type="text/javascript">
	  const userFeed = new Instafeed({
      get: 'konstunge',
      target: "instafeed-container",
        resolution: 'low_resolution',
      accessToken: 'IGQVJYVDRVX0hqUjU1NEpsMk9ITjMyNWZABZAXZAsa0k2d2R6NGN1ak5GUzA0WUc4ajQ0ZAE84UnJ0LWFoNkFIS2ZAhSGpHbk1wbkg1VXRTSFl2cXVsc0gtdUFYUzhJeVh2UThsMmNpTWFrdXloMUQ1Y1A3cwZDZD'
    })
	userFeed.run();
	</script> */}
            {/* {userFeed () = new Instafeed({
              get: 'konstunge',
              target: "instafeed-container",
                resolution: 'low_resolution',
              accessToken: 'IGQVJYVDRVX0hqUjU1NEpsMk9ITjMyNWZABZAXZAsa0k2d2R6NGN1ak5GUzA0WUc4ajQ0ZAE84UnJ0LWFoNkFIS2ZAhSGpHbk1wbkg1VXRTSFl2cXVsc0gtdUFYUzhJeVh2UThsMmNpTWFrdXloMUQ1Y1A3cwZDZD'
            })} */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
