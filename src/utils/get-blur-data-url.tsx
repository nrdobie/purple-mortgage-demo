import { getPlaiceholder } from "plaiceholder";

export default async function getBlurDataUrl(src: string) {
  const image = await fetch(src);

  const arrayBuffer = await image.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  const { base64 } = await getPlaiceholder(buffer, { size: 10 });

  return base64;
}
