export default function BriefcaseIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/images/icons/Experience.png"
      alt=""
      width={size}
      height={size}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        display: "block",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
}