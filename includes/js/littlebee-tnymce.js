(function(){	
	//button shortcode
	tinymce.create('tinymce.plugins.beebtn', {
		init: function(ed, url) {
			ed.addButton('beebtn', {
				title: 'Button Shortcode',
				image: url + '/tiny-btn-01.png',
				onclick: function() {
					ed.selection.setContent('[button align="" color="" size="" link=""]' + ed.selection.getContent() + '[/button]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('beebtn', tinymce.plugins.beebtn);
	//grab code
	tinymce.create('tinymce.plugins.grabcode', {
		init: function(ed, url) {
			ed.addButton('grabcode', {
				title: 'Grab Code',
				image: url + '/tiny-btn-04.png',
				onclick: function() {
					//ed.execCommand('mceInsertContent', false, '[grabcode]');
					var width = jQuery(window).width(400),
						H = jQuery(window).height(200),
						W = (720 < width) ? 720 : width;
					W = W - 80;
					H = H - 200;
					tb_show('Grabcode Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=mygrabcode-form');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('grabcode', tinymce.plugins.grabcode);
	// executes this when the DOM is ready
	// creates a form to be displayed everytime the button is clicked
	// you should achieve this using AJAX instead of direct html code like this
	var form = jQuery('<div id="mygrabcode-form"><table id="mygrabcode-table" class="form-table">\
					<tr>\
						<th><label for="mygrabcode-weburl">Website URL</label></th>\
						<td><input size="50" type="text" id="mygrabcode-weburl" name="weburl" value="http://" /><br />\
						<small>URL for image to link to.</small></td>\
					</tr>\
					<tr>\
						<th><label for="mygrabcode-imgurl">Image URL</label></th>\
						<td><input size="50" type="text" name="imgurl" id="mygrabcode-imgurl" value="http://" /><br />\
						<small>The image URL.</small>\
					</tr>\
					<tr>\
						<th><label for="mygrabcode-imgalt">Alternate Text for image(For SEO).</label></th>\
						<td><input size="50"type="text" name="imgalt" id="mygrabcode-imgalt" value="" /><br />\
					</tr>\
					<tr>\
						<th><label for="mygrabcode-imgsize">Image Size</label></th>\
						<td><input size="20"type="text" name="imgsize" id="mygrabcode-imgsize" value="" /><br />\
						<small>The size of the image without px. If blank it defaults to 150.</small>\
					</tr>\
				</table>\
				<p class="submit">\
					<input type="button" id="mygrabcode-submit" class="button-primary" value="Insert My Grabcode" name="submit" />\
				</p>\
				</div>');
	var table = form.find('table');
	form.appendTo('body').hide();
	// handles the click event of the submit button
	form.find('#mygrabcode-submit').click(function() {
		// defines the options and their default values
		// again, this is not the most elegant way to do this
		// but well, this gets the job done nonetheless
		var options = {
			'weburl': 'http://',
			'imgurl': 'http://',
			'imgsize': ''
		};
		var shortcode = '[grabcode';
		for (var index in options) {
			var value = table.find('#mygrabcode-' + index).val();
			// attaches the attribute to the shortcode only if it's different from the default value
			if (value !== options[index]) shortcode += ' ' + index + '="' + value + '"';
		}
		shortcode += ']';
		// inserts the shortcode into the active editor
		tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
		// closes Thickbox
		tb_remove();
	});
	//recipe button
	tinymce.create('tinymce.plugins.recipebutton', {
		init: function(ed, url) {
			ed.addButton('recipebutton', {
				title: 'Recipe Shortcode',
				image: url + '/tiny-btn-05.png',
				onclick: function() {
					ed.selection.setContent('[recipe id=""]' + ed.selection.getContent() + '[/recipe]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('recipebutton', tinymce.plugins.recipebutton);
	//beebtn
	tinymce.create('tinymce.plugins.beebutton', {
		init: function(ed, url) {
			ed.addButton('beebutton', {
				title: 'Button Shortcode',
				image: url + '/tiny-btn-01.png',
				onclick: function() {
					ed.selection.setContent('[button align="" color="" size="" link=""]' + ed.selection.getContent() + '[/button]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('beebutton', tinymce.plugins.beebutton);
	//toggle
	tinymce.create('tinymce.plugins.beetoggle', {
		init: function(ed, url) {
			ed.addButton('beetoggle', {
				title: 'Button Shortcode',
				image: url + '/tiny-btn-03.png',
				onclick: function() {
					ed.selection.setContent('[toggle title=""]' + ed.selection.getContent() + '[/toggle]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('beetoggle', tinymce.plugins.beetoggle); /*Callout Button*/
	tinymce.create('tinymce.plugins.calloutbutton', {
		init: function(ed, url) {
			ed.addButton('calloutbutton', {
				title: 'Callout Shortcode',
				image: url + '/tiny-btn-06.png',
				onclick: function() {
					ed.selection.setContent('[callout]' + ed.selection.getContent() + '[/callout]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('calloutbutton', tinymce.plugins.calloutbutton); /*quote Button*/
	tinymce.create('tinymce.plugins.quotebutton', {
		init: function(ed, url) {
			ed.addButton('quotebutton', {
				title: 'Quote Shortcode',
				image: url + '/tiny-btn-07.png',
				onclick: function() {
					ed.selection.setContent('[quote]' + ed.selection.getContent() + '[/quote]');
				}
			});
		},
		createControl: function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('quotebutton', tinymce.plugins.quotebutton);
	
})();