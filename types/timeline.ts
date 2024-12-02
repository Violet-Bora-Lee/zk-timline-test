export interface TimelineItem {
  title: string;
  date: string;
  description: string;
  link?: string;
}

export interface TimelineProps {
  data: TimelineItem[];
}

export interface TimelineItemProps extends TimelineItem {
  isLeft: boolean;
  marginTop: string;
}