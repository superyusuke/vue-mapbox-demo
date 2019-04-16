import { StorePoint, PointForUI } from "@/store/modules/map/types";
import { cloneDeep, isEqual } from "lodash";
const pointForUICreator = ({
  initialPointList,
  currentPointList
}: {
  initialPointList: StorePoint[];
  currentPointList: StorePoint[];
}): PointForUI => {
  // ここで差分を検出するアルゴリズムを書く

  // fixme ちょっと書き方がわからなかったので、TypeScript 的には雑
  const pointListForUI: any = cloneDeep(currentPointList);
  // current の要素全てにアクセスし、
  currentPointList.forEach(currentPoint => {
    // id が一致する initialPoint を見つける
    const correspondingInitialPoint = initialPointList.find(initialPoint => {
      return initialPoint.id === currentPoint.id;
    });
    // 対応する UI 用の point を見つける
    const correspondingPointForUI = pointListForUI.find((pointForUI: any) => {
      return pointForUI.id === currentPoint.id;
    });

    // そもそも correspondingInitialPoint がない
    // => つまり新規のポイント場合
    if (!correspondingInitialPoint) {
      correspondingPointForUI.updated = true;
      return;
    }

    // 内容が同じかどうかをチェックする
    const isUpdated = isEqual(currentPoint, correspondingInitialPoint);
    // 変更された状態かどうかを値として保持する
    correspondingPointForUI.updated = !isUpdated;
  });
  return pointListForUI;
};

export default pointForUICreator;
