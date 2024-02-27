import "./treeView.css";
import MenuList from "./MenuList";

export default function TreeView({ menu = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
    </div>
  );
}
