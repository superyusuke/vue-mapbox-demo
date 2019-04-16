type Coordinates = {
  lng: number;
  lat: number;
};

export type MapState = {
  pointList: FetchedPoint[];
};

export type FetchedPoint = {
  coordinates: Coordinates;
  name: string;
  id: number;
  active: boolean;
};

export type StorePoint = {
  coordinates: Coordinates;
  name: string;
  id: number;
  active: boolean;
  // 以下フェッチ後に追加
  toDelete: boolean;
  newItem: {
    isNew: boolean;
    tempId: number;
  };
};

export type PointForUI = {
  coordinates: Coordinates;
  name: string;
  id: number;
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
