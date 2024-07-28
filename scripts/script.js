var HappyLocalize = {
    "ajax_url": "https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php",
    "nonce": "8d55001887"
};
var elementorFrontendConfig = {
    "environmentMode": {
        "edit": false,
        "wpPreview": false,
        "isScriptDebug": false
    },
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        "pinIt": "Pin it",
        "download": "Download",
        "downloadImage": "Download image",
        "fullscreen": "Fullscreen",
        "zoom": "Zoom",
        "share": "Share",
        "playVideo": "Play Video",
        "previous": "Previous",
        "next": "Next",
        "close": "Close"
    },
    "is_rtl": false,
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    },
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "Mobile",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            },
            "mobile_extra": {
                "label": "Mobile Extra",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": false
            },
            "tablet": {
                "label": "Tablet",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "tablet_extra": {
                "label": "Tablet Extra",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": false
            },
            "laptop": {
                "label": "Laptop",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": false
            },
            "widescreen": {
                "label": "Widescreen",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": false
            }
        }
    },
    "version": "3.4.8",
    "is_static": false,
    "experimentalFeatures": {
        "e_dom_optimization": true,
        "e_optimized_assets_loading": true,
        "a11y_improvements": true,
        "e_import_export": true,
        "theme_builder_v2": true,
        "landing-pages": true,
        "elements-color-picker": true,
        "admin-top-bar": true,
        "form-submissions": true
    },
    "urls": {
        "assets": "https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor\/assets\/"
    },
    "settings": {
        "page": [],
        "editorPreferences": []
    },
    "kit": {
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "global_image_lightbox": "yes",
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description"
    },
    "post": {
        "id": 21460,
        "title": "Tamal%20Sen%20%E2%80%93%20Just%20another%20WordPress%20site",
        "excerpt": "",
        "featuredImage": "https:\/\/tamalsen.dev\/wp-content\/uploads\/2021\/11\/tamalsen.dev-link-preview-1024x536.jpg"
    }
};

!function(t) {
    var e = function(t, e, a) {
        var s;
        return function() {
            var i = this
              , l = arguments
              , n = function() {
                s = null,
                a || t.apply(i, l)
            }
              , o = a && !s;
            clearTimeout(s),
            s = setTimeout(n, e),
            o && t.apply(i, l)
        }
    };
    t(window).on("elementor/frontend/init", function() {
        var t, a = elementorModules.frontend.handlers.Base;
        t = a.extend({
            bindEvents: function() {
                this.run()
            },
            getDefaultSettings: function() {
                return {
                    direction: "alternate",
                    easing: "easeInOutSine",
                    loop: !0,
                    targets: this.findElement(".elementor-widget-container").get(0)
                }
            },
            onElementChange: e(function(t) {
                -1 !== t.indexOf("ha_floating") && (this.anime && this.anime.restart(),
                this.run())
            }, 400),
            getFxVal: function(t) {
                return this.getElementSettings("ha_floating_fx_" + t)
            },
            run: function() {
                var t = this.getDefaultSettings();
                this.getFxVal("translate_toggle") && ((this.getFxVal("translate_x.size") || this.getFxVal("translate_x.sizes.to")) && (t.translateX = {
                    value: [this.getFxVal("translate_x.sizes.from") || 0, this.getFxVal("translate_x.size") || this.getFxVal("translate_x.sizes.to")],
                    duration: this.getFxVal("translate_duration.size"),
                    delay: this.getFxVal("translate_delay.size") || 0
                }),
                (this.getFxVal("translate_y.size") || this.getFxVal("translate_y.sizes.to")) && (t.translateY = {
                    value: [this.getFxVal("translate_y.sizes.from") || 0, this.getFxVal("translate_y.size") || this.getFxVal("translate_y.sizes.to")],
                    duration: this.getFxVal("translate_duration.size"),
                    delay: this.getFxVal("translate_delay.size") || 0
                })),
                this.getFxVal("rotate_toggle") && ((this.getFxVal("rotate_x.size") || this.getFxVal("rotate_x.sizes.to")) && (t.rotateX = {
                    value: [this.getFxVal("rotate_x.sizes.from") || 0, this.getFxVal("rotate_x.size") || this.getFxVal("rotate_x.sizes.to")],
                    duration: this.getFxVal("rotate_duration.size"),
                    delay: this.getFxVal("rotate_delay.size") || 0
                }),
                (this.getFxVal("rotate_y.size") || this.getFxVal("rotate_y.sizes.to")) && (t.rotateY = {
                    value: [this.getFxVal("rotate_y.sizes.from") || 0, this.getFxVal("rotate_y.size") || this.getFxVal("rotate_y.sizes.to")],
                    duration: this.getFxVal("rotate_duration.size"),
                    delay: this.getFxVal("rotate_delay.size") || 0
                }),
                (this.getFxVal("rotate_z.size") || this.getFxVal("rotate_z.sizes.to")) && (t.rotateZ = {
                    value: [this.getFxVal("rotate_z.sizes.from") || 0, this.getFxVal("rotate_z.size") || this.getFxVal("rotate_z.sizes.to")],
                    duration: this.getFxVal("rotate_duration.size"),
                    delay: this.getFxVal("rotate_delay.size") || 0
                })),
                this.getFxVal("scale_toggle") && ((this.getFxVal("scale_x.size") || this.getFxVal("scale_x.sizes.to")) && (t.scaleX = {
                    value: [this.getFxVal("scale_x.sizes.from") || 0, this.getFxVal("scale_x.size") || this.getFxVal("scale_x.sizes.to")],
                    duration: this.getFxVal("scale_duration.size"),
                    delay: this.getFxVal("scale_delay.size") || 0
                }),
                (this.getFxVal("scale_y.size") || this.getFxVal("scale_y.sizes.to")) && (t.scaleY = {
                    value: [this.getFxVal("scale_y.sizes.from") || 0, this.getFxVal("scale_y.size") || this.getFxVal("scale_y.sizes.to")],
                    duration: this.getFxVal("scale_duration.size"),
                    delay: this.getFxVal("scale_delay.size") || 0
                })),
                (this.getFxVal("translate_toggle") || this.getFxVal("rotate_toggle") || this.getFxVal("scale_toggle")) && (this.findElement(".elementor-widget-container").css("will-change", "transform"),
                this.anime = window.anime && window.anime(t))
            }
        }),
        elementorFrontend.hooks.addAction("frontend/element_ready/widget", function(e) {
            elementorFrontend.elementsHandler.addHandler(t, {
                $element: e
            })
        })
    })
}(jQuery);

var ohioVariables = {
    "url": "https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php",
    "view_cart": "View Cart",
    "add_to_cart_message": "has been added to the cart",
    "subscribe_popup_enable": "",
    "notification_enable": ""
};

var ElementorProFrontendConfig = {
    "ajaxurl": "https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php",
    "nonce": "8bb61288e4",
    "urls": {
        "assets": "https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor-pro\/assets\/",
        "rest": "https:\/\/tamalsen.dev\/wp-json\/"
    },
    "i18n": {
        "toc_no_headings_found": "No headings were found on this page."
    },
    "shareButtonsNetworks": {
        "facebook": {
            "title": "Facebook",
            "has_counter": true
        },
        "twitter": {
            "title": "Twitter"
        },
        "linkedin": {
            "title": "LinkedIn",
            "has_counter": true
        },
        "pinterest": {
            "title": "Pinterest",
            "has_counter": true
        },
        "reddit": {
            "title": "Reddit",
            "has_counter": true
        },
        "vk": {
            "title": "VK",
            "has_counter": true
        },
        "odnoklassniki": {
            "title": "OK",
            "has_counter": true
        },
        "tumblr": {
            "title": "Tumblr"
        },
        "digg": {
            "title": "Digg"
        },
        "skype": {
            "title": "Skype"
        },
        "stumbleupon": {
            "title": "StumbleUpon",
            "has_counter": true
        },
        "mix": {
            "title": "Mix"
        },
        "telegram": {
            "title": "Telegram"
        },
        "pocket": {
            "title": "Pocket",
            "has_counter": true
        },
        "xing": {
            "title": "XING",
            "has_counter": true
        },
        "whatsapp": {
            "title": "WhatsApp"
        },
        "email": {
            "title": "Email"
        },
        "print": {
            "title": "Print"
        }
    },
    "facebook_sdk": {
        "lang": "en_US",
        "app_id": ""
    },
    "lottie": {
        "defaultAnimationUrl": "https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"
    }
};
