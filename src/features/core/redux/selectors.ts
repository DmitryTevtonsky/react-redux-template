import { RootState } from "store/root-reducer";

const selectCount = (state: RootState): number => state.core.count;
const selectEmojisData = (state: RootState): Record<string, string> =>
  state.core.emojisData;

export { selectCount, selectEmojisData };
