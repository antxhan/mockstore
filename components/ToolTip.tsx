export default function ToolTip({ text }: { text: string }) {
  return (
    <span className="toolTip noselect invisible text-center group-hover:visible group-focus:visible">
      {text}
    </span>
  );
}
