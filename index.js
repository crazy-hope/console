var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ConsoleType;
(function (ConsoleType) {
    ConsoleType["default"] = "Default";
    ConsoleType["success"] = "Success";
    ConsoleType["info"] = "Info";
    ConsoleType["danger"] = "Danger";
    ConsoleType["warning"] = "Warning";
})(ConsoleType || (ConsoleType = {}));
// 设置默认样式
var setLabelStyle = function (colorStr) {
    return "\n          color:#fff;\n          background:".concat(colorStr, ";\n          padding: 5px;\n          font-size:14px;\n          border-radius:5px;\n          line-height:1.2em;\n          margin-bottom:5px;\n          margin-right:10px;\n      ");
};
var setContentStyle = function (colorStr) {
    return "\n          background: ".concat(colorStr, ";\n          padding: 4px 5px;\n          font-size: 14px;\n          line-height:1.2em;\n          border-radius:5px;\n      ");
};
var setTableHeaderStyle = function (colorStr) {
    if (colorStr === void 0) { colorStr = "#b4b6b6"; }
    return "\n          background: ".concat(colorStr, ";\n          border-right: 1px solid #c9c9c9;\n          margin-right: 10px;\n          color: #FFFFFF;\n          padding: 4px 5px;\n          font-size: 14px;\n          line-height:1.2em;\n          border-radius:5px;\n      ");
};
// 控制台日志打印
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.prototype.log = function (typeName, value) {
        this[typeName](value);
    };
    Console.prototype.success = function (value, name) {
        if (name === void 0) { name = "成功"; }
        console.log("%c".concat(name, "%c").concat(value), setLabelStyle("#1daf5f"), setContentStyle("#afe3c7"));
        if (typeof value === "object") {
            console.log(value);
        }
    };
    Console.prototype.info = function (value, name) {
        if (name === void 0) { name = "信息"; }
        console.log("%c".concat(name, "%c").concat(value), setLabelStyle("#b4b6b6"), setContentStyle("#e5e5e5"));
    };
    Console.prototype.warning = function (value, name) {
        if (name === void 0) { name = "告警"; }
        console.log("%c".concat(name, "%c").concat(value), setLabelStyle("#e49728"), setContentStyle("#f5dab3"));
    };
    Console.prototype.error = function (value, name) {
        if (name === void 0) { name = "错误"; }
        console.log("%c".concat(name, "%c").concat(value), setLabelStyle("#ff6767"), setContentStyle("#ffc9c9"));
    };
    Console.prototype.primary = function (value, name) {
        if (name === void 0) { name = "普通"; }
        console.log("%c".concat(name, "%c").concat(value), setLabelStyle("#177ce4"), setContentStyle("#add1f5"));
    };
    Console.prototype.table = function (tableName, rows, colKeys) {
        if (tableName === void 0) { tableName = "Table"; }
        var createRow = function (name, values) {
            var string = "%c".concat(name);
            var stringColors = [setTableHeaderStyle()];
            values.forEach(function (value) {
                string += "%c".concat(value);
                stringColors.push(setTableHeaderStyle());
            });
            console.log.apply(console, __spreadArray([string], stringColors, false));
        };
        console.group("TableGroup-".concat(tableName));
        if (rows instanceof Array) {
            var keys_1 = Array.isArray(colKeys) && colKeys.length > 0
                ? colKeys
                : Object.keys(rows[0]);
            createRow("Keys", keys_1);
            rows.forEach(function (item, index) {
                createRow("Row".concat(index), keys_1.map(function (key) { return item[key]; }));
            });
        }
        else if (Object.prototype.toString.call(rows).indexOf("Object") >= 0) {
            var keys = Array.isArray(colKeys) && colKeys.length > 0
                ? colKeys
                : Object.keys(rows);
            createRow("Keys", ["values"]);
            keys.forEach(function (key, index) {
                createRow(key, [rows[key]]);
            });
        }
        console.log(rows);
        console.groupEnd();
    };
    Console.prototype.clear = function () {
        console.clear();
    };
    Console.prototype.debug = function () {
        console.debug();
    };
    return Console;
}());
window.cs = new Console();
