<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/*--------------------------------------------------------------------------------------------------------*/

add_action('init', 'EDD_shortcode_menu_add_button');

function EDD_shortcode_menu_add_button() {
	
	if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}

		if ( 'true' == get_user_option( 'rich_editing' ) ) {
			add_filter( 'mce_external_plugins','EDD_shortcode_menu_add_tinymce_plugin' );
			add_filter( 'mce_buttons','EDD_shortcode_menu_register_button' );
		}

 //    if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) return;
 //    if ( get_user_option('rich_editing') == 'true') :
//         add_filter('mce_external_plugins', 'EDD_shortcode_menu_add_tinymce_plugin');
 //        add_filter('mce_buttons', 'EDD_shortcode_menu_register_button');
//     endif;
}

function EDD_shortcode_menu_register_button($buttons) {
     array_push($buttons, "|", "EDD_shortcode_menu_button");
     return $buttons;
}

function EDD_shortcode_menu_add_tinymce_plugin($plugin_array) {
	$url = plugins_url(__file__);
	//$plugin_array['EDD_Shortcodes'] = plugins_url('./js/editor_plugin.js',__file__);
	$plugin_array['EDD_Shortcodes'] = plugins_url('./js/editor.js',__file__);
	return $plugin_array;
}

//load css to post editor to show the button

function edd_shortcode_menu_css($hook) {

   if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
    wp_enqueue_style( 'edd_shortcode_menu_style', plugin_dir_url( __FILE__ ) . '/css/edd_shortcode_menu.css' );
 	}
    
}
add_action( 'admin_enqueue_scripts', 'edd_shortcode_menu_css' );

function EDD_shortcode_get_version() {
	$plugin_data = get_plugin_data( EDD_shortcode_PLUGIN_FILE );
	$plugin_version = $plugin_data['Version'];
	return $plugin_version;
}

?>