import { Button, Input, Layout } from "antd";
import { useTranslation } from "react-i18next";
import Icon from "@ant-design/icons";
import React, { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import css from "./index.module.css";

import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  initialize,
} from "../redux/slice";
import { selectCount, selectEmojisData } from "../redux/selectors";

const { Content } = Layout;

const HeartSvg = () => (
  <svg fill="currentColor" height="1em" viewBox="0 0 1024 1024" width="1em">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const Core: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState("");
  const count = useAppSelector(selectCount);
  const emojisData = useAppSelector(selectEmojisData);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  const handleIncrementByAmount = () =>
    amount && dispatch(incrementByAmount(+amount));
  const handleDecrementByAmount = () =>
    amount && dispatch(decrementByAmount(+amount));

  return (
    <Layout className={css.layout}>
      <Content className={css.content}>
        <div className={css.title}>
          <Icon component={HeartSvg} style={{ color: "hotpink" }} />
          {t(`template`)}
        </div>
        <div className={css.contentRow}>
          <Button className={css.button} onClick={handleIncrement}>
            +
          </Button>
          <h3 className={css.count}>{count}</h3>
          <Button className={css.button} onClick={handleDecrement}>
            -
          </Button>
        </div>
        <div className={css.contentRow}>
          <Button className={css.button} onClick={handleIncrementByAmount}>
            +n
          </Button>
          <Input
            className={css.amountInput}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="n"
            value={amount}
          />
          <Button className={css.button} onClick={handleDecrementByAmount}>
            -n
          </Button>
        </div>
        {Object.keys(emojisData).map(
          (key, index) =>
            index < 1 && <img key={key} alt={key} src={emojisData[key]} />
        )}
      </Content>
    </Layout>
  );
};

export default Core;
