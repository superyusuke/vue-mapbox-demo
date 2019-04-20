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

const colorAndOpacity = (point: PointForUI, isActive: boolean) => {
  const color = colorChanger(point, isActive);
  const transitionTime = "0.2s";

  return css`
    box-sizing: content-box;
    position: absolute;
    top: 40%;
    left: 50%;
    border-radius: 50%;
    border: 8px solid ${color};
    width: 8px;
    height: 8px;
    transition: border ${transitionTime}, opacity ${transitionTime};
    box-shadow: 6px 10px 5px -1px rgba(0, 0, 0, 0.32);
    &:hover {
      opacity: 0.8;
    }

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      bottom: -30px;
      left: -6px;
      border: 10px solid transparent;
      border-top: 17px solid ${color};
      transition: border-top ${transitionTime};
    }
  `;
};

export default colorAndOpacity;
