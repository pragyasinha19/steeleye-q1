import styles from "./ListRow.module.css";

const ListCell = ({
  children,
  setSelectedOrderDetails,
  row,
  setSelectedOrderTimeStamps,
  timestamps,
}) => {
  const handleClick = () => {
    const id = row["&id"];
    setSelectedOrderDetails(row);
    const matches = timestamps.filter((ts) => ts["&id"] === id);
    setSelectedOrderTimeStamps(matches[0].timestamps);
  };
  return (
    <tr className={styles.cell} onClick={handleClick}>
      {children}
    </tr>
  );
};

export default ListCell;
