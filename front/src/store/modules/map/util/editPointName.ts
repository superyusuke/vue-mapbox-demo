import { StorePoint, PointForUI } from "@/store/modules/map/types";

const makeNewPoint = ({
  point,
  newName
}: {
  point: StorePoint;
  newName: string;
}): StorePoint => {
  return { ...point, ...{ name: newName } };
};

const editPointName = ({
  currentPointList,
  targetPoint,
  newName
}: {
  currentPointList: StorePoint[];
  targetPoint: PointForUI;
  newName: string;
}) => {
  return currentPointList.map(point => {
    // 新規ポイントの場合
    if (point.newItem.isNew) {
      if (point.newItem.tempId === targetPoint.newItem.tempId) {
        return makeNewPoint({ point, newName });
      }
    }

    // 既存ポイントの場合
    if (!point.newItem.isNew) {
      if (point.id === targetPoint.id) {
        return makeNewPoint({ point, newName });
      }
    }
    return point;
  });
};

export default editPointName;
