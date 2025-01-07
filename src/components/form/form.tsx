import { toast } from "sonner";

import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

const Form = ({ action, actionState, children }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState: newActionState }) => {
      if (newActionState.message) {
        toast.success(newActionState.message);
      }
    },
    onError: ({ actionState: newActionState }) => {
      if (newActionState.message) {
        toast.error(newActionState.message);
      }
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};
export { Form };
