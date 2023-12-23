import List from "@/components/common/List";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr] min-h-screen">
      <Navbar />
      <List />
    </div>
  );
}
