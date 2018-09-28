ngapp.controller('workflowModalController', function($scope, workflowService) {
    $scope.module = workflowService.getModules();

    // scope functions
    $scope.selectModule = function(module) {
        $scope.module = module.name;
        $scope.workflows = module.workflows.map(name => {
            return workflowService.getWorkflow(name);
        });
    };

    $scope.selectWorkflow = function(workflow) {
        $scope.workflow = workflow.name;
        $scope.model = {};
        $scope.stages = workflow.stages.map((stage, index) => ({
            ...stage,
            available: index === 0
        }));
        $scope.stageIndex = 0;
    };

    $scope.selectStage = function(index) {
        if (!$scope.stages[index].available ||
            $scope.stageIndex === index) return;
        $scope.stageIndex = index;
    };

    $scope.previousStage = function() {
        if ($scope.stageIndex === 0) return;
        $scope.stageIndex = $scope.stageIndex - 1;
    };

    $scope.nextStage = function() {
        if ($scope.stageIndex >= $scope.stages.length) return;
        $scope.stageIndex = $scope.stageIndex + 1;
    };

    $scope.finish = function() {
        $scope.workflow.finish();
    };

    $scope.loadView = function() {
        if (!$scope.stage || typeof $scope.stage.view !== 'string') return;
        let view = workflowService.getView($scope.stage.view);
        Object.assign($scope.stage.view, view);
    };

    $scope.$on('nextStage', $scope.nextStage);

    $scope.$on('startSubflow', (e, workflow) => {
        $scope.model[workflow.model] = {};
        workflow.stages.forEach(stage => {
            $scope.stages.push({
                ...stage,
                available: false
            });
        });
        $scope.nextStage();
    });

    $scope.$watch('stageIndex', () => {
        let maxStageIndex = $scope.stages.length - 1;
        $scope.stage = $scope.stages[$scope.stageIndex];
        $scope.stage.available = true;
        $scope.showPrevious = $scope.stageIndex > 0;
        $scope.showNext = $scope.stageIndex < maxStageIndex;
        $scope.showFinish = $scope.stageIndex === maxStageIndex;
        $scope.nextEnabled = true;
        $scope.loadView();
    });
});