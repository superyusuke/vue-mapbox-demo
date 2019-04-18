import { PointForUI } from "@/store/modules/map/types";

const createIdForScroll = (point: PointForUI): string => {
  if (point.newItem.isNew) {
    return point.newItem.tempId + "new";
  }
  return String(point.id);
};

export default createIdForScroll;
