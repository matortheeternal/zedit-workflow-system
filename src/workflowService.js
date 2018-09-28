ngapp.service('workflowService', function() {
    let modules = {},
        workflows = {},
        views = {};

    this.addModule = function(name, module) {
        modules[name] = module;
    };

    this.getModules = () => modules;

    this.addWorkflow = function(name, workflow) {
        workflows[name] = workflow;
    };

    this.getWorkflow = name => workflows[name];

    this.addView = function(name, view) {
        views[name] = view;
    };

    this.getView = name => views[name];
});