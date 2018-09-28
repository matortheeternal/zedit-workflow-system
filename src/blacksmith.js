/* global ngapp, xelib, moduleUrl */
ngapp.run(function(workflowService) {
    workflowService.addModule({
        name: 'Blacksmith',
        games: [xelib.gmTES5, xelib.gmSSE],
        workflows: [
            'Make a Weapon', 'Make an Armor', 'Make a Shield',
            'Make a Weapon Set, Make an Armor Set',
            'Make Crafting Recipes', 'Make Tempering Recipes',
            'Make Breakdown Recipes', 'Make an Armor Pack',
            'Make a Weapon Pack'
        ]
    });
});