<?php

namespace Pdchaudhary\PimcoreARPreviewerBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;
use Pimcore\Extension\Bundle\Traits\BundleAdminClassicTrait;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;

class PimcoreARPreviewerBundle extends AbstractPimcoreBundle  implements PimcoreBundleAdminClassicInterface
{
    use BundleAdminClassicTrait;
    use PackageVersionTrait;

    public function getJsPaths(): array
    {
        return [
            '/bundles/pimcorearpreviewer/js/pimcore/startup.js',
            '/bundles/pimcorearpreviewer/js/pimcore/arPreviewer.js',
           
          
        ];
    }

    public function getNiceName(): string
    {
        return 'Pimcore AR Previewer Bundle';
    }


 
    public function getCssPaths(): array
    {
        return [
         
        ];
    }

    public function getVersion(): string
    {
        return "2.0";
    }

    
}