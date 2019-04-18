import { StorePoint, PointForUI } from "@/store/modules/map/types";
const createStorePointFromPointForUI = (pointForUI: PointForUI): StorePoint => {
  return {
    toDelete: pointForUI.toDelete,
    newItem: pointForUI.newItem,
    name: pointForUI.name,
    id: pointForUI.id,
    coordinates: pointForUI.coordinates,
    active: pointForUI.active
  };
};

export default createStorePointFromPointForUI;
