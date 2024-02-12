import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageProps, getImageProps } from "next/image";
import { useMemo } from "react";

export type HeroImageProps = {
  src: string | StaticImport;
  darkSrc?: string | StaticImport;
};

const COMMON_IMAGE_PROPS = {
  sizes: "100vw",
  alt: "",
  placeholder: "blur",
  fill: true,
  style: {
    objectFit: "cover",
    objectPosition: "left center",
  },
} satisfies Partial<ImageProps>;

export default function HeroImage(props: HeroImageProps) {
  const { lightSrcSet, imgProps } = useMemo(() => {
    const {
      props: { srcSet: lightSrcSet, ...rest },
    } = getImageProps({ ...COMMON_IMAGE_PROPS, src: props.src });

    return { lightSrcSet, imgProps: rest };
  }, [props.src]);

  const { darkSrcSet } = useMemo(() => {
    if (!props.darkSrc)
      return {
        darkSrcSet: undefined,
      };

    const {
      props: { srcSet: darkSrcSet },
    } = getImageProps({ ...COMMON_IMAGE_PROPS, src: props.darkSrc });

    return { darkSrcSet };
  }, [props.darkSrc]);

  return (
    <picture>
      {darkSrcSet && (
        <source
          srcSet={darkSrcSet}
          media="(prefers-color-scheme: dark)"
        />
      )}
      <source
        srcSet={lightSrcSet}
        media="(prefers-color-scheme: light)"
      />
      <img
        {...imgProps}
        alt=""
      />
    </picture>
  );
}
