<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Pushpa_clinic
 * @since Twenty Thirteen 1.0
 */



get_header(); ?>

<style>
	.header_area {
	    background-color: var(--ss-primary);
	}
	.page-content img {
	    margin-top: 10rem;
	    max-width: 151rem;
	    height: 50rem;
	    margin: 10rem auto 0rem;
	    display: flex;
	}

	@media screen and (max-width:767px) {
		.page-content img {
		    max-width: inherit;
		    height: auto;
		    margin: 6rem auto 0rem;
		    width: 100%;
	}
	.header_area {
	    padding-bottom: 2rem;
	}
}
</style>

	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">

			<div class="page-wrapper">
				<div class="page-content">
					<!-- <h2><?php _e( 'This is somewhat embarrassing, isn&rsquo;t it?', 'pushpa' ); ?></h2>
					<p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'pushpa' ); ?></p>

					<?php get_search_form(); ?> -->
					<img src="<?php bloginfo('template_directory'); ?>/images/404.png" alt="404">
				</div><!-- .page-content -->
			</div><!-- .page-wrapper -->

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>