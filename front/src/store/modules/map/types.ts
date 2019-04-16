type Coordinates = {
  lng: number;
  lat: number;
};

export type Point = {
  coordinates: Coordinates;
  name: string;
  id: number;
};

export type MapState = {
  pointList: Point[];
};
