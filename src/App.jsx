import Random from "./components/Random"
import Tag from "./components/Tag";
export default function App() {

  return <div className=" relative w-full h-screen flex  flex-col background">
  <h1 className=" absolute bg-white rounded-sm">Random GIF</h1>
  <div>
    <Random/>
    <Tag/>
  </div>
  </div>;

}
