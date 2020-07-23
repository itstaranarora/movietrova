import React from "react";
import Card from "../Card/Card";
import styles from "./Result.module.css";

const Result = ({ data }) => {
  return (
    <section className={styles.cardContainer}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Result;
