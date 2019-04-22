import { StorePoint, PointForUI } from "@/store/modules/map/types";
const editPointName = ({
  currentPointList,
  point
}: {
  currentPointList: StorePoint[];
  point: PointForUI;
}) => {
  return currentPointList;
};

export default editPointName;
