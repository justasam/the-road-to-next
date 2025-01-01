type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "DONE" | "TODO" | "IN_PROGRESS";
};

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "First ticket",
    content: "This is the first ticket",
    status: "TODO",
  },
  {
    id: "2",
    title: "Second ticket",
    content: "This is the second ticket",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Third ticket",
    content: "This is the third ticket",
    status: "DONE",
  },
];
