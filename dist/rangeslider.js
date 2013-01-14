/*! Rangeslider - v0.1.0 - 2013-01-14
* https://github.com/seltar/rangeslider
* Copyright (c) 2013 Yonas Sandbæk - yonas.sandbaek@creuna.no - 
* Licensed MIT */

;(function ( $, window, document, undefined ) {
    
    // Create the defaults once
    var pluginName = 'rangeslider', 
        defaults = {
        };

    // The plugin constructor
    function Rangeslider( element, options ) {
        // set default values
        this._name = pluginName;
        this._defaults = $[pluginName].defaults;

        // set the element and options
        this.element = element;
        this.$el = $(this.element);
        this.options = $.extend( {}, this._defaults, options) ;
        
        // initialize plugin
        this.init();

    }

    Rangeslider.prototype.init = function () {
      var self = this;
    };

    // Singleton wrapper with command options
    $.fn[pluginName] = function ( options, args ) {
      if(typeof options === "string")
      {
        return this.each(function () {
          // get the plugin, if it exists
          var plugin = $.data(this, 'plugin_' + pluginName);

          // check if the string is an available function
          if (plugin && typeof plugin[options] === "function"){
            if(typeof args === "array"){
              plugin[options].apply(plugin, args);
            }else{
              plugin[options].call(plugin, args);
            }
          }
        });
      }else{
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Rangeslider( this, options ));
            }
        });
      }
    };

    // globalize the defaults
    $[pluginName] = { defaults: defaults };

})( jQuery, window, document );