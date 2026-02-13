import Image from "next/image";

export default function SvgHoverEffect({ text }: { text: string }) {

  return (
    <div className="row">
      <div className="hover-underline">{text}</div>
    </div>
  );
}