ngapp.run(function(workflowService) {
    let modelTileSelectController = function($scope) {
        $scope.tiles = $scope.model.tiles();
        $scope.$parent.nextEnabled = false;

        $scope.selectTile = function(tile) {
            tile.selected = true;
            let workflowKey = $scope.workflow.model,
                modelKey = $scope.stage.model;
            $scope.model[workflowKey][modelKey] = tile.value || tile.label;
            $scope.$parent.nextEnabled = true;
        };
    };

    workflowService.addView('modelTileSelect', {
        templateUrl: `${moduleUrl}/partials/modelTileSelect.html`,
        controller: modelTileSelectController
    })
});