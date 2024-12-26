
pimcore.registerNS("pimcore.plugin.PimcoreARPreviewerBundlePlugin");

pimcore.plugin.PimcoreARPreviewerBundlePlugin = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.postOpenAsset, this.postOpenAsset.bind(this));
    },

    postOpenAsset: function (e, type) {
     
            var { asset, type } = e.detail;
            const SUPPORTED_MIME_TYPES = [
                // GLTF and GLB
                'model/gltf+json',     // .gltf
                'model/gltf-binary',   // .glb
            
                // OBJ (Wavefront)
                'model/obj',           // .obj
            
                // STL (Stereolithography)
                'model/stl',           // .stl
            
                // 3MF (3D Manufacturing Format)
                'model/3mf',           // .3mf
            
                // VRML (Virtual Reality Modeling Language)
                'model/vrml',          // .wrl
            
                // Collada
                'model/vnd.collada+xml', // .dae
            
                // Autodesk FBX (Experimental, not widely supported in `<model-viewer>`)
                'application/octet-stream', // .fbx
            
                // PLY (Polygon File Format)
                'model/ply',           // .ply
            
                // USD (Universal Scene Description)
                'application/usd',       // .usd
                'application/usdz+zip',  // .usdz (optimized for AR in iOS)
            
                // X3D
                'model/x3d+xml',        // .x3d
                'model/x3d+binary',     // .x3db
                'model/x3d+vrml'        // .x3dv
            ];
     
            if(type == "unknown" && SUPPORTED_MIME_TYPES.includes(asset.data.mimetype)){
                
                asset.tabbar.insert(0, new pdchaudhary.element.arPreviewer(asset, "asset").getLayout());

            }
            

      
        
    },
});

var pimcoreARPreviewerBundlePlugin = new pimcore.plugin.PimcoreARPreviewerBundlePlugin();