import React, { useEffect, useState } from "react";
import { tc7URLT, tc9URLT, tc11URLT, zxcURLT } from "../../config";
import { adapter } from "../../tools";
import "../Today/index.css";

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

function Tommorow() {
  const [tc7, setTc7] = useState<tcData[]>([]);
  const [tc9, setTc9] = useState<tcData[]>([]);
  const [tc11, setTc11] = useState<tcData[]>([]);
  const [zxc, setZxc] = useState<zxcData[]>([]);
  const [dataNoon, setDataNoon] = useState<tcMenu>([]);
  const [dataNight, setDataNight] = useState<tcMenu>([]);
  const [dataZxcNight, setDataZxcNight] = useState<zxcMenu>([]);
  const [dataZxcNoon, setDataZxcNoon] = useState<zxcMenu>([]);

  async function getData(url: string) {
    let res = await fetch(url);
    let data = res.json();
    return data;
  }
  useEffect(() => {
    getData(tc11URLT).then((data) => setTc11(data));
    getData(tc9URLT).then((data) => setTc9(data));
    getData(tc7URLT).then((data) => setTc7(data));
    getData(zxcURLT).then((data) => setZxc(data));
  }, []);

  useEffect(() => {
    if (tc11.length && tc7.length && tc9.length) {
      let result = adapter(tc7, tc9, tc11, zxc);
      const { dataNoon, dataNight, dataZxcNight, dataZxcNoon } = result;
      setDataNoon(dataNoon);
      setDataNight(dataNight);
      setDataZxcNight(dataZxcNight);
      setDataZxcNoon(dataZxcNoon);
    }
  }, [tc11, tc7, tc9, zxc]);

  const isRender =
    dataNoon.length &&
    dataNight.length &&
    dataZxcNight.length &&
    dataZxcNoon.length;

  return (
    <>
      {isRender ? (
        <div>
          <div className="wrap">
            <div className="title">
              <span className="big">套餐</span>
              <span className="small">（中餐）</span>
            </div>
            <div className="menu">
              <div className="item border">
                <div className="name">{dataNoon[0].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNoon[0].菜品2}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNoon[0].菜品3}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <span className="price">11元</span>
              </div>
              <div className="item border">
                <div className="name">{dataNoon[1].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNoon[1].菜品2}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNoon[1].菜品3}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <span className="price">9元</span>
              </div>
              <div className="item">
                <div className="name">{dataNoon[2].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item">
                <div className="name">{dataNoon[2].菜品2}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item"></div>
              <div className="item">
                <span className="price">7元</span>
              </div>
            </div>
          </div>
          {/* 套餐晚餐 */}
          <div className="wrap">
            <div className="title">
              <span className="big">套餐</span>
              <span className="small">（晚餐）</span>
            </div>
            <div className="menu">
              <div className="item border">
                <div className="name">{dataNight[0].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNight[0].菜品2}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNight[0].菜品3}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <span className="price">11元</span>
              </div>
              <div className="item border">
                <div className="name">{dataNight[1].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNight[1].菜品2}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <div className="name">{dataNight[1].菜品3}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item border">
                <span className="price">9元</span>
              </div>
              <div className="item">
                <div className="name">{dataNight[2].菜品1}</div>
                <div className="isMeat">荤菜</div>
              </div>

              <div className="item">
                <div className="name">{dataNight[2].菜品2}</div>
                <div className="isMeat">素菜</div>
              </div>
              <div className="item"></div>
              <div className="item">
                <span className="price">7元</span>
              </div>
            </div>
          </div>
          {/* 自选餐午餐 */}
          <div className="title">
            <span className="big">自选餐</span>
            <span className="small">（中餐）</span>
          </div>
          <div className="zxc-menu">
            {dataZxcNoon.map((item) => {
              return (
                <div className="zxc-item" key={item.key}>
                  <div className="info">
                    <div className="name">{item.菜名}</div>
                    <div className="isMeat">{item.荤菜 ? "荤菜" : "素菜"}</div>
                  </div>
                  <div className="price">{item.单价}元</div>
                </div>
              );
            })}
          </div>
          {/* 自选餐晚餐 */}
          <div className="title">
            <span className="big">自选餐</span>
            <span className="small">（晚餐）</span>
          </div>
          <div className="zxc-menu">
            {dataZxcNight.map((item) => {
              return (
                <div className="zxc-item" key={item.key}>
                  <div className="info">
                    <div className="name">{item.菜名}</div>
                    <div className="isMeat">{item.荤菜 ? "荤菜" : "素菜"}</div>
                  </div>
                  <div className="price">{item.单价}元</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* 套餐午餐 */}

      {/* 自选餐晚餐 */}
    </>
  );
}

export default Tommorow;
