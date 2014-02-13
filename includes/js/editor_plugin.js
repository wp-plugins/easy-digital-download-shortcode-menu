(
	function(){

		tinymce.create(
			"tinymce.plugins.EDD_Shortcodes",
			{
				init: function(d,e) {
				
				},
				createControl:function(d,e)
				{

					var ed = tinymce.activeEditor;
					

					if(d=="EDD_shortcode_menu_button"){

						d=e.createMenuButton( "EDD_shortcode_menu_button",{
							title: 'Insert Shortcodes',
							
							//icons: false
							});

							var a=this;d.onRenderMenu.add(function(c,b){
								
								//c=b.addMenu({title : 'Store Shortcodes'});

									b.add({title : 'Downloads', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[downloads]');
                                        }});

									b.add({title : 'Download Discounts', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[download_discounts]');
                                        }});

                                     b.add({title : 'Price', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[edd_price]');
                                        }});
									
                                     b.add({title : 'Purchase Link', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[purchase_link]');
                                        }});

                                     b.add({title : 'Purchase Collection', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[purchase_collection]');
                                        }});                               
                                        

									b.addSeparator();
									
                                     b.add({title : 'Download Cart', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[download_cart]');
                                        }});

                                     b.add({title : 'Download Checkout', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[download_checkout]');
                                        }});

									b.addSeparator();

                                     b.add({title : 'Login', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[edd_login]');
                                        }});

                                     b.add({title : 'Profile Editor', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[edd_profile_editor]');
                                        }});
                                    
                                    b.addSeparator();
                                                                           
                                    b.add({title : 'Download History', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[download_history]');
                                        }});
                                        
                                    b.add({title : 'Purchase History', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[purchase_history]');
                                        }});

                                    b.add({title : 'Receipt', onclick : function() {
                                                tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[edd_receipt]');
                                        }});  

                                /*        
								a.addImmediate(b, ed.add('Order tracking'),"[EDD_shortcode_order_tracking]" );
								a.addImmediate(b, ed.getLang('Price Button'), '[add_to_cart id="" sku=""]');
								a.addImmediate(b, ed.getLang('EDD_shortcode.product_by_sku'), '[product id="" sku=""]');
								a.addImmediate(b, ed.getLang('EDD_shortcode.products_by_sku'), '[products ids="" skus=""]');
								a.addImmediate(b, ed.getLang('EDD_shortcode.product_categories'), '[product_categories number=""]');
								a.addImmediate(b, ed.getLang('EDD_shortcode.products_by_cat_slug'), '[product_category category="" per_page="12" columns="4" orderby="date" order="desc"]');

								b.addSeparator();

								a.addImmediate(b, ed.getLang('EDD_shortcode.recent_products'), '[recent_products per_page="12" columns="4" orderby="date" order="desc"]');
								a.addImmediate(b, ed.getLang('EDD_shortcode.featured_products'), '[featured_products per_page="12" columns="4" orderby="date" order="desc"]');

								b.addSeparator();

								a.addImmediate(b, ed.getLang('EDD_shortcode.shop_messages'), '[EDD_shortcode_messages]');

								b.addSeparator();

								c=b.addMenu({title:ed.getLang('EDD_shortcode.pages')});
										a.addImmediate(c, ed.getLang('EDD_shortcode.cart'),"[EDD_shortcode_cart]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.checkout'),"[EDD_shortcode_checkout]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.my_account'),"[EDD_shortcode_my_account]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.edit_address'),"[EDD_shortcode_edit_address]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.change_password'),"[EDD_shortcode_change_password]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.view_order'),"[EDD_shortcode_view_order]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.pay'),"[EDD_shortcode_pay]" );
										a.addImmediate(c, ed.getLang('EDD_shortcode.thankyou'),"[EDD_shortcode_thankyou]" );
								*/

							});
						return d

					} // End IF Statement

					return null
				},

				addImmediate:function(d,e,a){d.add({title:e,onclick:function(){tinyMCE.activeEditor.execCommand( "mceInsertContent",false,a)}})}

			}
		);

		tinymce.PluginManager.add( "EDD_Shortcodes", tinymce.plugins.EDD_Shortcodes);
	}
)();