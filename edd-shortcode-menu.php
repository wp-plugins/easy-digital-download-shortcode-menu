<?php 

/**
 * Plugin Name: EDD Shortcode Menu
 * Plugin URI: http://www.honeycombdesignstudio.com
 * Description: This plugin activates a TinyMCE button, when clicked on, shows a dropdown of shortcodes you can insert into any post type. It sure beats having to remember them all.
 * Author: Jonah Brown
 * Author URI: http://www.honeycombdesignstudio.com
 * Version: 2.2.2
 *
 * Copyright 2013  Leonard's Ego Pty. Ltd.  (email : freedoms@leonardsego.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @package     EDD Shortcode Menu
 * @author      Jonah Brown
 * @since       1.0
 */


// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

        // Plugin Folder Path
        if ( ! defined( 'EDD_shortcode_PLUGIN_DIR' ) )
            define( 'EDD_Shortcode_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

        // Plugin Folder URL
        if ( ! defined( 'EDD_shortcode_PLUGIN_URL' ) )
            define( 'EDD_shortcode_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

        // Plugin Root File
        if ( ! defined( 'EDD_shortcode_PLUGIN_FILE' ) )
            define( 'EDD_shortcode_PLUGIN_FILE', __FILE__ );



// EDD_Recurring
if ( !class_exists( 'Easy_Digital_Downloads' ) ){

	
	if( is_admin() ) {
		include_once( EDD_Shortcode_PLUGIN_DIR .'includes/functions.php' );

	}
}

add_action('admin_notices', 'EDD_shortcode_menu_showAdminMessages');

function EDD_shortcode_menu_showAdminMessages()
{
	$plugin_messages = array();

	include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

	// Download the Yoast WordPress SEO plugin
	if(!is_plugin_active( 'easy-digital-downloads/easy-digital-downloads.php' ))
	{
		$plugin_messages[] = 'This theme requires you to install the Easy Digital Downloads plugin, <a href="http://wordpress.org/plugins/easy-digital-downloads/">download it from here</a>.';
	}


	if(count($plugin_messages) > 0)
	{
		echo '<div id="message" class="error">';

			foreach($plugin_messages as $message)
			{
				echo '<p><strong>'.$message.'</strong></p>';
			}

		echo '</div>';
	}
}
?>