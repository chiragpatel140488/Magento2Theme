var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'Magento_Swatches/js/swatch-renderer-mixin': true
            }
        },
        map: {
            '*': {
                'gallerySlider': 'Magento_Catalog/js/gallery-slider'
            }
        },
        shim: {
            'Magento_Catalog/js/gallery-slider': {
                deps: ['jquery', 'slick'], // Ensure Slick and jQuery are loaded before your init script
            }
        }
    }
};

