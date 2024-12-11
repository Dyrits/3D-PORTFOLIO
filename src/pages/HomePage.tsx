import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";

export default function HomePage() {
  return (
    <section className={"relative h-screen w-full"}>
      {/*<div className={"absolute w-full top-28 left-0 right0 z-10 flex items-center justify-center"}>*/}
      {/*</div>*/}
      <Canvas 
        className={"h-screen w-full bg-transparent"}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={ <Loader/> }>
          <ambientLight intensity={ 0.5 }/>
          <directionalLight position={ [10, 10, 5] } intensity={ 1 }/>
          <Island/>
        </Suspense>
      </Canvas>
    </section>
  );
}