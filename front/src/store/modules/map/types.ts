export type Coordinates = {
  lng: number;
  lat: number;
};

export type MapState = {
  initialPointList: StorePoint[];
  currentPointList: StorePoint[];
  tempId: number;
  activePoint: StorePoint | null;
  mapboxActions: any;
  isDebugMode: boolean;
  modal: ModalState;
};

export type FetchedPoint = {
  coordinates: Coordinates;
  name: string;
  id: number | null;
  active: boolean;
};

export type StorePoint = {
  coordinates: Coordinates;
  name: string;
  id: number | null;
  active: boolean;
  // 以下フェッチ後に追加
  toDelete: boolean;
  newItem: {
    isNew: boolean;
    tempId: number | null;
  };
};

export type PointForUI = {
  coordinates: Coordinates;
  name: string;
  id: number | null;
  active: boolean;
  // 以下フェッチ後に追加
  toDelete: boolean;
  newItem: {
    isNew: boolean;
    tempId: number;
  };
  // 以下 getter で演算時に付与される Property
  updated: boolean;
};

export type Modal = {
  isOpen: boolean;
  targetPoint: PointForUI | null;
};

type ModalState = {
  nameEdit: Modal;
};
