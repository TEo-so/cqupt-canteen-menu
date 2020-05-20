interface tcData {
  key: number;
  中餐: boolean;
  菜品1: string;
  菜品2: string;
  菜品3: string;
}

type tcMenu = tcData[];

interface zxcData {
  key: number;
  菜名: string;
  单价: number;
  中餐: boolean;
  荤菜: boolean;
}

type zxcMenu = zxcData[];

let dataNoon: tcMenu = [];
let dataNight: tcMenu = [];
let dataZxcNoon: zxcMenu = [];
let dataZxcNight: zxcMenu = [];
const reg = /([()][^(/]+)$/;

export function adapter(
  tc7: tcData[],
  tc9: tcData[],
  tc11: tcData[],
  zxc: zxcData[]
) {
  if (dataZxcNight || dataZxcNoon || dataNight || dataNoon) {
    dataNoon = [];
    dataZxcNight = [];
    dataNight = [];
    dataZxcNoon = [];
  }

  if (tc11.length && tc7.length && tc9.length) {
    tc11.forEach((item, index) => {
      item.key = index;
      item.菜品1 = item.菜品1.replace(reg, "");
      item.菜品2 = item.菜品2.replace(reg, "");
      item.菜品3 = item.菜品3.replace(/素菜/, "");
      if (item.中餐) {
        dataNoon.push(item);
      } else {
        dataNight.push(item);
      }
    });

    tc9.forEach((item, index) => {
      item.key = index;
      item.菜品1 = item.菜品1.replace(reg, "");
      item.菜品2 = item.菜品2.replace(reg, "");
      item.菜品3 = item.菜品3.replace(reg, "");
      if (item.中餐) {
        dataNoon.push(item);
      } else {
        dataNight.push(item);
      }
    });

    tc7.forEach((item, index) => {
      item.key = index;
      item.菜品1 = item.菜品1.replace(reg, "");
      item.菜品2 = item.菜品2.replace(reg, "");
      if (item.中餐) {
        dataNoon.push(item);
      } else {
        dataNight.push(item);
      }
    });
    tc9.forEach((item, index) => {
      item.key = index;
      item.菜品1 = item.菜品1.replace(reg, "");
      item.菜品2 = item.菜品2.replace(reg, "");
      item.菜品3 = item.菜品3.replace(reg, "");
      if (item.中餐) {
        dataNoon.push(item);
      } else {
        dataNight.push(item);
      }
    });

    zxc.forEach((item, index) => {
      item.key = index;
      if (item.中餐) {
        dataZxcNoon.push(item);
      } else {
        dataZxcNight.push(item);
      }
    });
  }
  console.log(dataZxcNight);
  return { dataNoon, dataNight, dataZxcNight, dataZxcNoon };
}
