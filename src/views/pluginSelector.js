ngapp.run(function(workflowService) {
    let pluginSelectorController = function($scope) {
        $scope.model.plugin = 'New File.esp';
    };

    workflowService.addView('pluginSelector', {
        templateUrl: `${moduleUrl}/partials/pluginSelector.html`,
        controller: pluginSelectorController
    })
});