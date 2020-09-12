<template>
  <div id="container" class="clearfix">
    <header>
      <h1><a href="/index.html">Myriam Tousignant</a></h1>
    </header>    
    <div id="header">
      <div class="inside clearfix">

        <div id="mainNav" class="clearfix">
          <div class="menu-menu-principal-container">
            <ul id="menu-menu-principal" class="">
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/">Accueil</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/projects/">Projets</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/livres-artiste">Livres d'artiste</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/publications/">Publications</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/biographie-demarche-2/">Biographie &amp; démarche</a></li>
							<li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/presse-2/">Presse</a></li>
            </ul>
          </div>
        </div>	

        <div class="navbar">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="mini-nav-button-line"></span>
            <span class="mini-nav-button-line"></span>
            <span class="mini-nav-button-line"></span>
          </button>
          <div class="nav-collapse collapse">	
            <div class="menu-menu-principal-container">
              <ul id="menu-menu-principal-1" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/">Accueil</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/projects/">Projets</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/livres-artiste">Livres d'artiste</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/publications/">Publications</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/biographie-demarche-2/">Biographie &amp; démarche</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="/presse-2/">Presse</a></li>
              </ul>
            </div>
          </div><!-- end of .nav-collapse -->
        </div><!-- end of .navbar -->	

      </div>	
    </div>    
    <div id="main" class="clearfix">
      <div id="pageHead">
				<h1>Presse</h1>
			</div>
      <PressList :links="links"></PressList>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            links: [
                { 
                    id: 1, 
                    href: "https://www.youtube.com/watch?v=IJMwHNDeqhY&feature=youtu.be&fbclid=IwAR0j26NjH0tb-DW1U2ih10zyjfmEjQbRPISS5efTtfsnvE1bcDHwrfeoQOY", 
                    text: "Les fenêtres qui parlent, une rencontre entre une œuvre et un lieu, Parcours en art public éphémère à Longueuil, du 12 au 23 août 2020",
                    icon: "/img/web.png"
                },
                { 
                    id: 2, 
                    href: "https://www.lecourrierdusud.ca/poesie-dans-la-ville-fenetres-sur-la-culture-locale/", 
                    text: "Poésie dans la ville: fenêtres sur la culture locale",
                    icon: "/img/web.png"
                },
                {
                    id: 3, 
                    href: "https://ericbolduc.xyz/2020/07/03/myriam-tousignant-pour-passer-au-travers/", 
                    text: "Myriam Tousignant — Pour passer au travers",
                    icon: "/img/web.png"
                },
                {
                    id: 4, 
                    href: "https://youtu.be/HluwZCaxuVQ", 
                    text: "\"Myriam Tousignant / Pour passer au travers\" (version intégrale), Entrevue menée par Éric Bolduc, Consultant en communications et développement, mordu d'art",
                    icon: "/img/pdf.png"
                },
                {
                    id: 5, 
                    href: "/wp-content/uploads/2013/05/memoire-myriam-tousignant.pdf", 
                    text: "Mémoire de création, Portraits de femmes, liens sacrés",
                    icon: "/img/pdf.png"
                },							
                {
                    id: 6, 
                    href: "/wp-content/uploads/2013/05/commmtousignant2.pdf", 
                    text: "Communiqué de presse Le Bestiaire 30/30/30",
                    icon: "/img/pdf.png"
                },
                                            {
                    id: 7, 
                    href: "/wp-content/uploads/2013/05/15-1_cartonlecorpspicturalcaravanserail2009.pdf", 
                    text: "Le corps pictural, carton invitation",
                    icon: "/img/pdf.png"
                }		
            ]
        }
    }
}
</script>