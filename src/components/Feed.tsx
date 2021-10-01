import React, { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { db } from "../firebase";
import TweetInput from "./TweetInput";

const Feed: React.FC = () => {
  return (
    <div className={styles.feed}>
      <TweetInput />
    </div>
  );
};

export default Feed;
