function NoopSpanContextImp() {
};
NoopSpanContextImp.prototype.setBaggageItem = function (key, value) {
};
NoopSpanContextImp.prototype.getBaggageItem = function (key) {
};

function NoopSpanImp() {
};
NoopSpanImp.prototype.tracer = function () {
    return null;
};
NoopSpanImp.prototype.context = function () {
    return null;
};
NoopSpanImp.prototype.setOperationName = function (name) {
};
NoopSpanImp.prototype.setTag = function (key, value) {
};
NoopSpanImp.prototype.addTags = function (keyValuePairs) {
};
NoopSpanImp.prototype.log = function (fields) {
};
NoopSpanImp.prototype.finish = function (finishTime) {
};

function NoopTracerImp() {
};
NoopTracerImp.prototype.setInterface = function (inf) {
};
NoopTracerImp.prototype.startSpan = function (fields) {
    return new NoopSpanImp();
};
NoopTracerImp.prototype.inject = function (span, format, carrier) {
};
NoopTracerImp.prototype.extract = function (format, carrier) {
    return new NoopSpanImp();
};

module.exports = NoopTracerImp;
