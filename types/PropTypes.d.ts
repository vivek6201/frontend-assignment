export interface TicketType {
  id: string;
  title: string;
  priority: number;
  tag: string[];
  userId: string;
  status: string;
}

export interface UserType {
  available: boolean;
  id: string;
  name: string;
}

export interface ApiDataType {
  tickets: TicketType[];
  users: UserType[];
}
