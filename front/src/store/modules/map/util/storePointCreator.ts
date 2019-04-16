import { FetchedPoint, StorePoint } from "@/store/modules/map/types";

const storePointCreator = (fetchedPoint: FetchedPoint): StorePoint => {
  return {
    coordinates: fetchedPoint.coordinates,
    active: fetchedPoint.active,
    id: fetchedPoint.id,
    name: fetchedPoint.name,
    newItem: { isNew: false, tempId: null },
    toDelete: false
  };
};

export default storePointCreator;
