import Button from "./Button";
import "./styles.css";

export default function ButtonGroup({ items }) {
  return (
    <div className="button-group">
      {items.map((x) => (
        <Button key={x} item={x}></Button>
      ))}{" "}
    </div>
  );
}
