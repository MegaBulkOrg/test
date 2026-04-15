declare module "virtual:lessons-manifest" {
  const lessons: {
    content: string;
    fileName: string;
    order: number;
    slug: string;
    title: string;
    url: string;
  }[];

  export default lessons;
}
