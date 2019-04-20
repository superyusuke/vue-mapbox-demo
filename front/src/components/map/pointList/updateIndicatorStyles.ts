import { css } from "emotion";
import { PointForUI } from "@/store/modules/map/types";

const colorChanger = (point: PointForUI, isActive: boolean) => {
  if (point.newItem.isNew) {
    return isActive ? "#FF0F0F" : "#f8999a";
  }

  if (point.updated) {
    return isActive ? "#FF8000" : "#facc99";
  }

  if (point.active) {
    return isActive ? "#448aff" : "#cde6ff";
  } else {
    return isActive ? "#999999" : "#cccccc";
  }
};

const updateIndicatorStyles = (point: PointForUI, isActive: boolean) => {
  const backgroundColor = colorChanger(point, isActive);
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px 0 0;
    transition: background-color 0.5s;
    background: ${backgroundColor};
  `;
};

export default updateIndicatorStyles;
