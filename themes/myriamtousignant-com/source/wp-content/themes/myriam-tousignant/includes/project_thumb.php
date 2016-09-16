<?php
$lightbox_media = ""; 
$lightbox_img = get_post_meta($post->ID, "_ttrust_lightbox_img_value", true); 
$lightbox_video = get_post_meta($post->ID, "_ttrust_lightbox_video_value", true); 			
if ($lightbox_img || $lightbox_video) : 
	$lightbox_media = ($lightbox_video != "") ? $lightbox_video : $lightbox_img; 
endif; 			
?>

<div class="project <?php echo $p; ?>" id="project-<?php echo $post->post_name;?>">
	<?php if($lightbox_media) : ?>						
		<a href="<?php echo $lightbox_media; ?>" rel="prettyPhoto" title="">			
	<?php else : ?>
		<a href="<?php the_permalink(); ?>" rel="bookmark" >
	<?php endif; ?>
	<?php if( has_post_thumbnail() ) {
	 the_post_thumbnail(); 
	} else { ?>
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/placeholder_projets.png"/>
	<?php } ?>
	<div class="outerwrap">
	<div class="centerer">
	<span class="title">
		<span>
			<?php the_title(); ?>
		</span>
	</span>
	</div>
	</div>
	</a>																																
</div>