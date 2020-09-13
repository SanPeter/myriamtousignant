import React from "react"
import { Helmet } from "react-helmet"
import PressItem from "../components/press-item"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Myriam Tousignant</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="shortcut icon" href="/img/favicon.png" />

        <meta
          property="og:url"
          content="http://myriamtousignant.com/presse-2"
        ></meta>
        <meta property="og:title" content="Presse"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="Artiste, peintre en art contemporain"
        ></meta>
        <meta
          name="description"
          content="Artiste, peintre en art contemporain"
        />
        <meta
          name="keywords"
          content="Myriam Tousignant, artiste, peintre, peinture, art conteporain, vidéo, animation, Myriam,  Tousignant, expositions, exposition, UQÀM, myriam, myriam tousignant, tousignant"
        />
        <link rel="canonical" href="http://myriamtousignant.com/presse-2" />

        <link
          rel="alternate"
          type="application/rss+xml"
          title="Myriam Tousignant RSS Feed"
          href="/feed/"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Myriam Tousignant Atom Feed"
          href="/feed/atom/"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:regular,italic,bold,bolditalic"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:regular,italic,bold,bolditalic"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Droid+Serif:regular,bold"
        />

        <style type="text/css" media="screen">
          {`
          h1, h2, h3, h4, h5, h6 { font-family: 'Roboto Condensed'; }
        
          body { font-family: 'Roboto'; }
          body {border-top: 5px solid #d68017;}
          .projectNav a:hover { background-color: #d68017; }
          #filterNav .selected { color: #d68017!important;}
        
          #mainNav ul a, #mainNav ul li.sfHover ul a { color: #7b7b7b !important;	}
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
            color: #d68017 !important;		
          }
          #mainNav ul li.sfHover a,
          #mainNav ul li a:hover,
          #mainNav ul li:hover {
            color: #d68017 !important;	
          }
          #mainNav ul li.sfHover ul a:hover { color: #d68017 !important;}	
        
          a { color: #d68017;}
          a:hover {color: #bf6a15;}
          .button, #searchsubmit, input[type="submit"] {background-color: #515151 !important;}
          .button:hover, #searchsubmit:hover, input[type="submit"]:hover {background-color: #717171 !important;}
          body {
          border-top:0;
          background-color:#fff;
          color:#515151;
          }
          
          input[type="text"], textarea {
          background-color: #fff;
          background: #fff;
          font-family:inherit;
          -webkit-border-radius: 0px;
          -moz-border-radius: 0px;
          border-radius: 0px;
          color:inherit;
          border: 1px solid #cdcdcd;
          padding:5px;
          margin: 10px 0!important;
          }
          
          label {
          font-family:inherit;
          font-size: .75em;
          }
          
          a.button, #footer a.button, #searchsubmit, input[type="submit"] {
          -webkit-border-radius: 0px;
          -moz-border-radius: 0px;
          border-radius: 0px;
          font-size: 1.2em;
          padding: 5px 12px;
          font-family: 'Roboto Condensed';
          font-weight:normal;
          }
          
          #sideWidgets .widgetBox h3, #footer .widgetBox h3 {
          font-size:1.5em;
          }
          
          #content #filterNav {
          display:none;
          }
          
          .project h2 {
          font-size: 1em;
          line-height: .7em;
          padding: 0;
          margin-bottom: 0;
          display: block;
          }
        `}
        </style>
      </Helmet>

      <div id="container" className="clearfix">
        <header>
          <h1>
            <a href="/index.html">Myriam Tousignant</a>
          </h1>
        </header>
        <div id="header">
          <div className="inside clearfix">
            <div id="mainNav" className="clearfix">
              <div className="menu-menu-principal-container">
                <ul id="menu-menu-principal" className="">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/">Accueil</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/projects/">Projets</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/livres-artiste">Livres d'artiste</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/publications/">Publications</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/biographie-demarche-2/">Biographie & démarche</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="/presse-2/">Presse</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="navbar">
              <button
                type="button"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
              >
                <span className="mini-nav-button-line"></span>
                <span className="mini-nav-button-line"></span>
                <span className="mini-nav-button-line"></span>
              </button>
              <div className="nav-collapse collapse">
                <div className="menu-menu-principal-container">
                  <ul id="menu-menu-principal-1" className="menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/">Accueil</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/projects/">Projets</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/livres-artiste">Livres d'artiste</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/publications/">Publications</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/biographie-demarche-2/">
                        Biographie & démarche
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                      <a href="/presse-2/">Presse</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main" className="clearfix">
          <div id="pageHead">
            <h1>Presse</h1>
          </div>
          <div id="content" className="clearfix">
            <PressItem
              href="https://www.youtube.com/watch?v=IJMwHNDeqhY&feature=youtu.be&fbclid=IwAR0j26NjH0tb-DW1U2ih10zyjfmEjQbRPISS5efTtfsnvE1bcDHwrfeoQOY"
              text="Les fenêtres qui parlent, une rencontre entre une œuvre et un lieu, parcours en art public éphémère à Longueuil, du 12 au 23 août 2020."
              icon="/img/web.png"
            ></PressItem>

            <PressItem
              href="https://www.lecourrierdusud.ca/poesie-dans-la-ville-fenetres-sur-la-culture-locale/"
              text="Poésie dans la ville: fenêtres sur la culture locale"
              icon="/img/web.png"
            ></PressItem>

            <PressItem
              href="https://ericbolduc.xyz/2020/07/03/myriam-tousignant-pour-passer-au-travers/"
              text="Myriam Tousignant — Pour passer au travers"
              icon="/img/web.png"
            ></PressItem>

            <PressItem
              href="https://youtu.be/HluwZCaxuVQ"
              text='"Myriam Tousignant / Pour passer au travers" (version intégrale), Entrevue menée par Éric Bolduc, Consultant en communications et développement, mordu d&apos;art'
              icon="/img/web.png"
            ></PressItem>

            <PressItem
              href="/wp-content/uploads/2013/05/memoire-myriam-tousignant.pdf"
              text="Mémoire de création, Portraits de femmes, liens sacrés"
              icon="/img/pdf.png"
            ></PressItem>

            <PressItem
              href="/wp-content/uploads/2013/05/commmtousignant2.pdf"
              text="Communiqué de presse Le Bestiaire 30/30/30"
              icon="/img/pdf.png"
            ></PressItem>

            <PressItem
              href="/wp-content/uploads/2013/05/15-1_cartonlecorpspicturalcaravanserail2009.pdf"
              text="Le corps pictural, carton invitation"
              icon="/img/pdf.png"
            ></PressItem>
          </div>
        </div>
        <div id="footer">
          <div className="main clearfix"></div>
          <div className="secondary clearfix">
            <div className="left">
              <p>© 2020 Myriam Tousignant Tous Droits Réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
