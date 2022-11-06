import { useQuery } from "@tanstack/react-query";
import { URL } from "../constants";
import { get } from "../functions";
import type { Member } from "../types";

export const useMember = (id?: number) => {
  const { data: members, ...rest } = useQuery({
    queryKey: [URL.MEMBER],
    queryFn: () => get<Member[]>("/members"),
  });
  const member = members?.find((member) => member.id === id);
  return { members, member, ...rest };
};
