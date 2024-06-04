export interface ScreeningRoomInterface {
  id: number;
  name: string;
  seats: SeatInterface[];
}

export interface SeatInterface {
  id: number;
  row: string;
  column: string;
  isFree: boolean;
}
