enum ConsoleType {
  default = "Default",
  success = "Success",
  info = "Info",
  danger = "Danger",
  warning = "Warning",
}

// 设置默认样式
const setLabelStyle = (colorStr: string) => {
  return `
          color:#fff;
          background:${colorStr};
          padding: 5px;
          font-size:14px;
          border-radius:5px;
          line-height:1.2em;
          margin-bottom:5px;
          margin-right:10px;
      `;
};
const setContentStyle = (colorStr: string) => {
  return `
          background: ${colorStr};
          padding: 4px 5px;
          font-size: 14px;
          line-height:1.2em;
          border-radius:5px;
      `;
};
const setTableHeaderStyle = (colorStr: string = "#b4b6b6") => {
  return `
          background: ${colorStr};
          border-right: 1px solid #c9c9c9;
          margin-right: 10px;
          color: #FFFFFF;
          padding: 4px 5px;
          font-size: 14px;
          line-height:1.2em;
          border-radius:5px;
      `;
};

// 控制台日志打印
class Console {
  constructor() {}

  log(typeName: ConsoleType, value: string) {
    this[typeName](value);
  }

  success(value: any, name: String = "成功") {
    console.log(
      `%c${name}%c${value}`,
      setLabelStyle("#1daf5f"),
      setContentStyle("#afe3c7")
    );
    if (typeof value === "object") {
      console.log(value);
    }
  }
  info(value, name: String = "信息") {
    console.log(
      `%c${name}%c${value}`,
      setLabelStyle("#b4b6b6"),
      setContentStyle("#e5e5e5")
    );
  }
  warning(value, name: String = "告警") {
    console.log(
      `%c${name}%c${value}`,
      setLabelStyle("#e49728"),
      setContentStyle("#f5dab3")
    );
  }
  error(value, name: String = "错误") {
    console.log(
      `%c${name}%c${value}`,
      setLabelStyle("#ff6767"),
      setContentStyle("#ffc9c9")
    );
  }
  primary(value, name: String = "普通") {
    console.log(
      `%c${name}%c${value}`,
      setLabelStyle("#177ce4"),
      setContentStyle("#add1f5")
    );
  }

  table(
    tableName: String = "Table",
    rows: any[] | object[],
    colKeys: String[]
  ) {
    const createRow = (name, values) => {
      let string = `%c${name}`;
      let stringColors: String[] = [setTableHeaderStyle()];
      values.forEach((value) => {
        string += `%c${value}`;
        stringColors.push(setTableHeaderStyle());
      });
      console.log(string, ...stringColors);
    };

    console.group(`TableGroup-${tableName}`);
    if (rows instanceof Array) {
      let keys =
        Array.isArray(colKeys) && colKeys.length > 0
          ? colKeys
          : Object.keys(rows[0]);
      createRow("Keys", keys);

      rows.forEach((item, index) => {
        createRow(
          `Row${index}`,
          keys.map((key) => item[key as any])
        );
      });
    } else if (Object.prototype.toString.call(rows).indexOf("Object") >= 0) {
      let keys =
        Array.isArray(colKeys) && colKeys.length > 0
          ? colKeys
          : Object.keys(rows);
      createRow(`Keys`, ["values"]);
      keys.forEach((key, index) => {
        createRow(key, [rows[key as any]]);
      });
    }
    console.log(rows);
    console.groupEnd();
  }

  clear() {
    console.clear();
  }
  debug() {
    console.debug();
  }
}

(window as any).cs = new Console();
