( function () {

	/**
	 * Check is empty.
	 *
	 * @param  {string} value
	 * @return {bool}
	 */
	/**
	 * Add the shortcodes downdown.
	 */
	tinymce.PluginManager.add( 'EDD_Shortcodes', function ( editor ) {
		var ed = tinymce.activeEditor;
		editor.addButton('EDD_shortcode_menu_button', {
            type: 'menubutton',
            text: 'EDD Shortcodes',
            icon: false,
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
				}
            ]
        });
	});
})();