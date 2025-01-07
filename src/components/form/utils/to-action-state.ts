import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    // if validation with Zod fails, we return the first error message
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // If another error instance, e.g. a database error, we return the error message
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
  } else {
    // If we don't know what the error is, we return a generic error message
    return {
      status: "ERROR",
      message: "An unknown error occurred",
      fieldErrors: {},
      payload: formData,
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
  };
};
