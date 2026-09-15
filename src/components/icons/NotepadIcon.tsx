export default function NotepadIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/images/icons/AboutMe.png"
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