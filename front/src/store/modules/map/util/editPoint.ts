import { StorePoint } from "@/store/modules/map/types";

import cloneDeep from "lodash/cloneDeep";

const changePoint = (
  currentPointList: StorePoint[],
  newPoint: StorePoint
): StorePoint[] => {
  const cloneCurrentPointList: StorePoint[] = cloneDeep(currentPointList);
  return cloneCurrentPointList.map(point => {
    // 既存のポイントの場合（フェッチした時に存在する）
    if (!point.newItem.isNew) {
      if (point.id === newPoint.id) {
        return newPoint;
      }
      return point;
    }
    // 新規ポイントの場合（フェッチした時に存在しない）
    if (point.newItem.tempId === newPoint.newItem.tempId) {
      return newPoint;
    }
    return point;
  });
};

export default changePoint;
