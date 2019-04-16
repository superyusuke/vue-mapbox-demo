import { StorePoint, PointForUI } from "@/store/modules/map/types";
const pointForUICreator = ({
  initialPointList,
  currentPointList
}: {
  initialPointList: StorePoint[];
  currentPointList: StorePoint[];
}): PointForUI => {
  // ここで差分を検出するアルゴリズムを書く
  return "";
};

export default pointForUICreator;
