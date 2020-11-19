<?php
//change file javascript
function jsScript()
{
    wp_register_script('script', get_template_directory_uri() . '/script.js', array(), '1.0.0');
    wp_enqueue_script('script');
}

//init function for change files js
add_action('init', 'jsScript');
?>