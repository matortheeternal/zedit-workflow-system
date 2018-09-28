ngapp.run(function(workflowService, skyrimWeaponService) {
    let {getWeaponTypes} = skyrimWeaponService;

    workflowService.addWorkflow({
        name: 'Make a Weapon',
        games: [xelib.gmTES5, xelib.gmSSE],
        stages: [{
            name: 'Select Plugin',
            view: 'pluginSelector'
        }, {
            name: 'Select a Weapon Type',
            view: 'modelTileSelect',
            model: 'weaponType',
            tiles: () => {
                return getWeaponTypes().map(weaponType => ({
                    image: `${moduleUrl}/resources/images/${weaponType}.png`,
                    label: weaponType
                }));
            }
        }, {
            name: 'Set Weapon Attributes',
            view: 'setWeaponAttributes'
        }, {
            name: 'Select Options',
            view: 'optionSelector',
            options: [{
                image: `${moduleUrl}/resources/images/craftable.png`,
                label: 'Craftable',
                stage: 'Construction Recipes'
            }, {
                image: `${moduleUrl}/resources/images/temperable.png`,
                label: 'Temperable',
                stage: 'Tempering Recipes'
            }, {
                image: `${moduleUrl}/resources/images/destructible.png`,
                label: 'Destructible',
                stage: 'Breakdown Recipes'
            }, {
                image: `${moduleUrl}/resources/images/enchantable.png`,
                label: 'Enchantable',
                stage: 'Enchanted Variants'
            }]
        }, {
            name: 'Construction Recipes',
            view: 'setConstructionOptions',
            optional: true
        }, {
            name: 'Tempering Recipes',
            view: 'setTemperingOptions',
            optional: true
        }, {
            name: 'Breakdown Recipes',
            view: 'setBreakdownOptions',
            optional: true
        }, {
            name: 'Enchanted Variants',
            view: 'setEnchantingOptions',
            optional: true
        }, {
            name: 'Review',
            view: 'reviewWeapon'
        }]
    });
});