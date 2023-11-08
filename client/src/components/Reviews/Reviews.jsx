import React, { useState, useEffect } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Button from "../ui/Button/Button";
import * as FileSaver from "file-saver";

const Reviews = () => {
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    const filePath = "/img/практика2.2.xlsx";
    const name = filePath.split("/").pop();
    setFileName(name);
  }, []);

  const handleDownload = () => {
    const filePath = "/img/практика2.2.xlsx";
    const blob = new Blob([], { type: "application/octet-stream" });
    FileSaver.saveAs(blob, filePath);

  };

  return (
    <div className={styles.form_block}>
      <div className={styles.form_block_1}>
        <h1>Формирование отчета</h1>
        {fileName &&
        <div className="execel">
          <img style={{width: '40px', height: '40px'}} src="/img/excel.png" alt="" />
          <p>Файл: {fileName}</p>
        </div>
        }
      </div>
      <Button onClick={handleDownload} style={{ marginTop: "50px" }}>Загрузить отчет</Button>
    </div>
  );
};

export default Reviews;
