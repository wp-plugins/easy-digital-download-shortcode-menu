<?php 

/**
 * Plugin Name: EDD Shortcode Menu
 * Plugin URI: http://www.honeycombdesignstudio.com
 * Description: Insert EDD shortcodes from TinyMCE.
 * Author: Jonah Brown
 * Author URI: http://www.honeycombdesignstudio.co
 * Version: 2.1
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

include_once( EDD_Shortcode_PLUGIN_DIR .'includes/functions.php' );
require_once( EDD_Shortcode_PLUGIN_DIR .'includes/edd-Shortcode_updater.php');


?>