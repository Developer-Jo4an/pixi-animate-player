import {useRef} from "react";
import JSZip from "jszip";

const SORT_ORDER = [".js", ".json", ".txt", ".png"];
const TYPES = {frames: "frames", shapes: "shapes"};

const switchDragClass = (ref, action) => {
  const baseClass = ref.current.classList[0];
  const baseClassChild = ref.current.children[0].classList[0];
  ref.current.classList[action](`${baseClass}_dragging`);
  ref.current.children[0].classList[action](`${baseClassChild}_dragging`);
};

export const useDrag = () => {
  const ref = useRef();

  return {
    onDragOver: e => {
      e.preventDefault();
      switchDragClass(ref, "add");
    },
    onDrop: e => {
      e.preventDefault();
      const [archive] = e.dataTransfer.files;

      const reader = new FileReader();
      const zipUnpacker = new JSZip();
      reader.onload = unpack;
      reader.readAsArrayBuffer(archive);

      async function unpack(e) {
        const {files} = await zipUnpacker.loadAsync(e.target.result);

        const jsFile = await Object.entries(files).find(([key]) => key.includes(".js"))[1].async("text");

        /*const sortedFiles = Object.entries(files).reduce((acc, [key, value], index, arr) => {
          const ext = SORT_ORDER.find(ext => key.endsWith(ext))?.slice(1);
          if (!ext) return acc;
          if (!acc[ext]) acc[ext] = [];
          acc[ext].push(value);
          if (index === arr.length - 1)
            return {...acc, type: acc.hasOwnProperty("txt") ? TYPES.shapes : TYPES.frames};
          return acc;
        }, {});
        debugger
        const converted = await Object.entries(sortedFiles).reduce(async (accPromise, [key, array]) => {
          const acc = await accPromise;
          if (key === "type") return {...acc, [key]: array};
          const convertedArray = await Promise.all(array.map(value => value.async("text")));
          return {...acc, [key]: convertedArray};
        }, Promise.resolve({}));

        if (converted === TYPES.frames) {

        }

        if (converted === TYPES.shapes) {

        }*/
      }

    },
    onDragLeave: e => {
      e.preventDefault();
      switchDragClass(ref, "remove");
    },
    ref
  };
};
