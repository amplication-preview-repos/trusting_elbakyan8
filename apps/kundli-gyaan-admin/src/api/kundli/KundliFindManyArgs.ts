import { KundliWhereInput } from "./KundliWhereInput";
import { KundliOrderByInput } from "./KundliOrderByInput";

export type KundliFindManyArgs = {
  where?: KundliWhereInput;
  orderBy?: Array<KundliOrderByInput>;
  skip?: number;
  take?: number;
};
