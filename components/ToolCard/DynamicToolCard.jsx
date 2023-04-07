import dynamic from "next/dynamic";

const DynamicToolCard = dynamic(() => import("./ToolCard"), {
  ssr: false,
});

export default DynamicToolCard;
