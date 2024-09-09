import { AstrologerWhereInput } from "./AstrologerWhereInput";
import { AstrologerOrderByInput } from "./AstrologerOrderByInput";

export type AstrologerFindManyArgs = {
  where?: AstrologerWhereInput;
  orderBy?: Array<AstrologerOrderByInput>;
  skip?: number;
  take?: number;
};
