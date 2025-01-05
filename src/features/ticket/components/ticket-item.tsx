import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const renderDetailButton = () => {
    if (isDetail) return null;

    return (
      <Link
        prefetch
        href={ticketPath(ticket.id)}
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    );
  };

  const renderDeleteButton = () => {
    if (!isDetail) return null;

    return (
      <form action={deleteTicket.bind(null, ticket.id)}>
        <Button variant="outline" size="icon">
          <LucideTrash className="h-4 w-4" />
        </Button>
      </form>
    );
  };

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <h3 className="truncate">{ticket.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx("hitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {renderDetailButton()}
        {renderDeleteButton()}
      </div>
    </div>
  );
};

export { TicketItem };
