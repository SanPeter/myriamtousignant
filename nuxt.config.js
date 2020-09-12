export default {
  components: true,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Artiste, peintre en art contemporain' },
      {
        name: 'keywords',
        content:
          'Myriam Tousignant, artiste, peintre, peinture, art conteporain, vidéo, animation, Myriam,  Tousignant, expositions, exposition, UQÀM, myriam, myriam tousignant, tousignant',
      },
    ],
    link: [
      { rel: 'shortcut icon', href: '/img/favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Condensed:regular,italic,bold,bolditalic',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:regular,italic,bold,bolditalic',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Droid+Serif:regular,bold',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/main.css',
        media: 'screen',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/infinitythemetrust/css/prettyPhoto.css?ver=3.1.2',
        media: 'all',
        id: 'pretty_photo-css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/infinitythemetrust/css/flexslider.css?ver=1.7',
        media: 'all',
        id: 'slideshow-css',
      },
    ],
    script: [
      { src: '/js/jquery/jquery.js?ver=1.8.3' },
      { src: '/js/oilandsugar.js' },
    ],
    style: [
      {
        type: 'text/css',
        media: 'screen',
        cssText: `
            h1, h2, h3, h4, h5, h6 { font-family: Roboto Condensed }
    		body {
                font-family: Roboto
                border-top:0;
                background-color:#fff;
                color:#515151;
            }            
            .projectNav a:hover { background-color: #d68017 }
            #filterNav .selected { color: #d68017!important }

            #mainNav ul a, #mainNav ul li.sfHover ul a { color: #7b7b7b !important }
            #mainNav ul li.current a,
            #mainNav ul li.current-cat a,
            #mainNav ul li.current_page_item a,
            #mainNav ul li.current-menu-item a,
            #mainNav ul li.current-post-ancestor a,
            #mainNav ul li.current_page_parent a,
            #mainNav ul li.current-category-parent a,
            #mainNav ul li.current-category-ancestor a,
            #mainNav ul li.current-portfolio-ancestor a,
            #mainNav ul li.current-projects-ancestor a {
                color: #d68017 !important	
            }

            #mainNav ul li.sfHover a,
            #mainNav ul li a:hover,
            #mainNav ul li:hover {
                color: #d68017 !important	
            }            
            #mainNav ul li.sfHover ul a:hover { color: #d68017 !important }	
            a { color: #d68017 }
            a:hover {color: #bf6a15 }
            
            .project h2 {
                font-size: 1em;
                line-height: .7em;
                padding: 0;
                margin-bottom: 0;
                display: block;
                }       
        `,
      },
    ],
  },
}
