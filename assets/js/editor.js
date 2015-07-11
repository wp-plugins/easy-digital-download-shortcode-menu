/*global tinymce */
( function () {

	/**
	 * Check is empty.
	 *
	 * @param  {string} value
	 * @return {bool}
	 */
	function wcShortcodesIsEmpty( value ) {
		value = value.toString();

		if ( 0 !== value.length ) {
			return false;
		}

		return true;
	}

	/**
	 * Add the shortcodes downdown.
	 */
	tinymce.PluginManager.add( 'easy-digital-download-shortcode-menu', function ( editor ) {
		var ed = tinymce.activeEditor;
		editor.addButton( 'EDD_shortcode_menu_button', {
			text: ed('Easy Digital Download' ),
			icon: 'EDD_shortcode_menu_button',
			type: 'menubutton',
			menu: [
						
				{
					text: 'Download',
					onclick: function () {
						editor.insertContent( '[download]' );
					}
				},
				{
					text: 'Download Discounts',
					onclick: function () {
						editor.insertContent( '[download_discounts]' );
					}
				},
				{
					text: 'Price',
					onclick: function () {
						editor.insertContent( '[edd_price]' );
					}
				},
				{
					text: 'Purchase Link',
					onclick: function () {
						editor.insertContent( '[purchase_link]' );
					}
				},
				{
					text: 'Purchase Collection',
					onclick: function () {
						editor.insertContent( '[purchase_collection]' );
					}
				},
				{
					text: 'Cart',
					onclick: function () {
						editor.insertContent( '[download_cart]' );
					}
				},
				{
					text: 'Checkout',
					onclick: function () {
						editor.insertContent( '[download_checkout]' );
					}
				},
				{
					text: 'Login',
					onclick: function () {
						editor.insertContent( '[edd_login]' );
					}
				},
				{
					text: 'Profile Editor',
					onclick: function () {
						editor.insertContent( '[edd_profile_editor]' );
					}
				},
				{
					text: 'Download History',
					onclick: function () {
						editor.insertContent( '[download_history]' );
					}
				},
				{
					text: 'Receipt',
					onclick: function () {
						editor.insertContent( '[edd_receipt]' );
					}
				}
			]
		});
	});
})();
