jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
	function acf_repeater_toggle( obj ) {
    var $button = $(this);
    
    // If the function is called by something other than a click event (on load, for instance),
    // set $button to the object that is supplied as a parameter
    if( !$button.hasClass('field-repeater-toggle') ) {
    	$button = obj;
    }

    // Toggle Fields
    // $(this).parent().toggleClass('collapsed-repeater');

    if( $button.attr('value') == 'Collapse Fields' ) {
    	$button.attr('value', 'Expand Fields');

			// Toggle all open fields to closed
			$('.acf-flexible-content .values .layout').each(function() {
				if( $(this).attr('data-toggle') === 'open' || !$(this).attr('data-toggle') ) {
					acf.fields.flexible_content.toggle( $(this) );
				}
			});

    } else {
    	$button.attr('value', 'Collapse Fields');

    	// Toggle all closed fields to open
			$('.acf-flexible-content .values .layout').each(function() {
				if( $(this).attr('data-toggle') === 'closed' ) {
					acf.fields.flexible_content.toggle( $(this) );
				}
			});
    }
	}

	// HTML to put above each repeater instance
	$collapseButton = '<input class="button field-repeater-toggle" type="button" value="Collapse Fields" />';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		if( $( '.acf-input-table', $(this) ).hasClass('row_layout') ) {
			$(this).prepend( $collapseButton );
		}
	});

	// Collapse flexible content rows on load
	$('.field_type-flexible_content .field-repeater-toggle').each(function() {
		acf_repeater_toggle( $(this) );
	});

	// bind the click event to the toggle function
	$( '.field-repeater-toggle' ).on(
		'click',
		acf_repeater_toggle
	)

});
