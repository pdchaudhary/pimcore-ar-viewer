# pimcore-ar-viewer
A tool for previewing 3D Augmented Reality (AR) models directly within the Pimcore platform. Supports formats like GLB, USDZ, and OBJ, allowing users to interact with models in real-time.

## Coming Soon

- **AR Asset Editor**: Allow users to edit AR assets (3D models, textures) directly in Pimcore. This could include features like resizing, repositioning, or adding textures, providing a more robust AR asset management solution..

  For more information about our Package and its benefits, contact us at pdchaudhary1998@gmail.com.

# Overview

```bash
composer require pdchaudhary/pimcore-ar-viewer
```
Make sure the bundle is enabled in the config/bundles.php file. The following lines should be added:

```php
// ...
return [
    // ...
    Pdchaudhary\PimcoreARPreviewerBundle\PimcoreARPreviewerBundle::class => ['all' => true]
    // ...
];
```
Install the assets:
```bash
php bin/console assets:install
```

![demo-ar](https://github.com/user-attachments/assets/7ece3a2b-69be-4ea0-9f01-03bd8703fbeb)


# Supported File Types

- GLB (GLTF Binary Format): A common format for 3D models, widely supported across various AR platforms.
- USDZ: A file format used for 3D models and AR content, particularly on iOS devices.
- OBJ: A widely-used 3D model format supported by most 3D applications.
- FBX: Another widely-supported 3D model format, often used for animation.



