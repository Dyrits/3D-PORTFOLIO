import { Group } from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as animated } from "@react-spring/three";

import island from "../assets/3d-models/island.glb";

type Props = JSX.IntrinsicElements["group"];

export default function Island(props: Props) {
  const reference = useRef<Group>(null);
  const { nodes, materials } = useGLTF(island) as any;
  console.log(nodes, materials);
  return (
    <animated.group { ...props } ref={reference}>
      <mesh
        geometry={ nodes.polySurface944_tree_body_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.polySurface945_tree1_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.polySurface946_tree2_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.polySurface947_tree1_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.polySurface948_tree_body_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.polySurface949_tree_body_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
      <mesh
        geometry={ nodes.pCube11_rocks1_0.geometry }
        material={ materials.PaletteMaterial001 }
      />
    </animated.group>
  );
}
