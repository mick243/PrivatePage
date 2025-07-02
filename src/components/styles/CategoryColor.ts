export type CategoryName = "front-end" | "back-end" | "full-stack" | string;

export function getCategoryColor(category: CategoryName): string {
  switch (category) {
    case "front-end":
      return "#FF4ED9";
    case "back-end":
      return "#52FF77";
    case "full-stack":
      return "#25D0FF";
    default:
      return "#FFFFFF";
  }
}
