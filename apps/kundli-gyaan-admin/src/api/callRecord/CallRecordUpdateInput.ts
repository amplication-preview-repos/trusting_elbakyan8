import { AstrologerWhereUniqueInput } from "../astrologer/AstrologerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CallRecordUpdateInput = {
  astrologer?: AstrologerWhereUniqueInput | null;
  callEnd?: Date | null;
  callStart?: Date | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
