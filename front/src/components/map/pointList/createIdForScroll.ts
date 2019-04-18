import { PointForUI, StorePoint } from "@/store/modules/map/types";

const createIdForScroll = (point: PointForUI | StorePoint): string => {
  if (point.newItem.isNew) {
    return point.newItem.tempId + "new";
  }
  return String(point.id);
};

export default createIdForScroll;
