import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

type askAgentDto = {
  question: string;
};

const RagAnswerSchema = z.object({
  answer: z.string(),
});

export function useGetRagAnswer() {
  const {mutate,isError,isPending} = useMutation({
    mutationFn: async (data: askAgentDto) => {
        console.log(data)
      const resp = await axios.post("api/ask", data);
      if (resp.status != 200) {
        throw new Error("error, try again later");
      }
      const parsed = RagAnswerSchema.safeParse(resp.data);
      if (!parsed.success) {
        throw new Error("error, try again later");
      }
      return parsed.data.answer
    }
  })
  return {mutate,isError,isPending}
}
