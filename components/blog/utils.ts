export function formatBlogDate(
  isoDate: string,
  month: "short" | "long" = "long"
): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
  });
}
