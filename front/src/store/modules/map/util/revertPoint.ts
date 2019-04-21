import { StorePoint, PointForUI } from "@/store/modules/map/types";

const revertPoint = ({
  targetPoint,
  currentPointList,
  initialPointList
}: {
  targetPoint: PointForUI;
  currentPointList: StorePoint[];
  initialPointList: StorePoint[];
}): StorePoint[] => {
  const targetId = targetPoint.id;
  const targetInitialPoint = initialPointList.find(
    point => point.id === targetId
  );
  return currentPointList.map(point => {
    if (point.id === targetId) {
      return targetInitialPoint;
    }
    return point;
  }) as StorePoint[];
};

export default revertPoint;
