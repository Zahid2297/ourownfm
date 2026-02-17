import DomeGallery from "../../../components/DomeGallery";

// Load all images from the five asset folders via Vite glob (second arg must be object literal)
const electricalModules = import.meta.glob(
  "../../../assets/ELECTRICAL/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const fireFightingModules = import.meta.glob(
  "../../../assets/FIRE FIGHTING/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const generalModules = import.meta.glob(
  "../../../assets/GENERAL AND MANAGEMENT/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const hvacModules = import.meta.glob(
  "../../../assets/HVAC/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const plumbingModules = import.meta.glob(
  "../../../assets/PLUMBING/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const toImages = (modules) =>
  Object.values(modules).map((m) => {
    const src = typeof m === "string" ? m : m?.default ?? "";
    return { src, alt: "" };
  });

const GALLERY_IMAGES = [
  ...toImages(electricalModules),
  ...toImages(fireFightingModules),
  ...toImages(generalModules),
  ...toImages(hvacModules),
  ...toImages(plumbingModules),
].filter((img) => img.src);

const DomeGallerySection = () => {
  return (
    <section
      id="gallery"
      className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-items-center tw-place-content-center tw-overflow-hidden tw-bg-black tw-pt-8"
    >
      <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-6">
        Gallery
      </h3>
      <div style={{ width: "100%", height: "80vh", minHeight: "400px" }}>
        <DomeGallery
          images={GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES : undefined}
          fit={0.8}
          minRadius={750}
          maxVerticalRotationDeg={0}
          segments={25}
          dragDampening={5}
          grayscale={false}
          dragSensitivity={20}
        />
      </div>
    </section>
  );
};

export default DomeGallerySection;
