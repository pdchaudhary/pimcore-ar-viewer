/*
 * This source file is available under  GNU General Public License version 3 (GPLv3)
 *
 * Full copyright and license information is available in LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Asioso GmbH (https://www.asioso.com)
 *
 */

pimcore.registerNS("pdchaudhary.element.arPreviewer");
pdchaudhary.element.arPreviewer = Class.create({

    initialize: function (element) {

        this.element = element;

    },


    getLayout: function () {

        if (this.layout == null) {

            this.previewContainerId = 'ar-panel-id' + this.element.id;
            var layoutConf = {
                tabConfig: {
                    tooltip: 'AR Model Viewer'
                },
                title: 'AR Model Viewer',
                id: 'ar-panel' + this.element.id,
                items: [
                    {
                      
                        region: "center",
                        id: 'ar-view-container', // Unique ID to target the container
                        html: `
                            <model-viewer 
                             style="width: 100%; height: 100%; max-width: 800px; max-height: 600px;display:flex;margin: 50px auto;" 
                                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" 
                                src="`+this.element.data.url+`" 
                                ar 
                                shadow-intensity="1" 
                                camera-controls 
                                touch-action="pan-y">
                            </model-viewer>
                        `,
                        listeners: {
                            afterrender: function () {
                                // Dynamically add the script tag for model-viewer
                                var script = document.createElement('script');
                                script.type = 'module';
                                script.src = '/bundles/pimcorearpreviewer/js/pimcore/model-viewer.min.js';
                                document.head.appendChild(script);
                            }
                        },
                        border: false
                    }
                ],
                layout: "border",
                iconCls: 'pimcore_material_icon_view pimcore_material_icon',
            };

            this.layout = new Ext.Panel(layoutConf);

            this.layout.on("activate", function () {
          //      this.layout = new Ext.Panel(layoutConf);
            }.bind(this));

        }

        return this.layout;


    },


    initPreviewAr:function(){

        Ext.get(this.previewContainerId).setHtml(`<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
                            <model-viewer
                                alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" 
                                src="/NeilArmstrong.glb" 
                                ar 
                                shadow-intensity="1" 
                                camera-controls 
                                touch-action="pan-y">
                            </model-viewer>`);
    }

   


   

   


});