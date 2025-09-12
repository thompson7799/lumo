export interface Section {
  id: number;
  title: string;
  description: string;
  note: string;
  startDate: string;
  endDate: string;
  hours: number;
  totalHours: number;
  isPinned: boolean;
}