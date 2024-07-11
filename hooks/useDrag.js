import * as animate from "@pixi/animate";
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
      switchDragClass(ref, "remove");

      const [archive] = e.dataTransfer.files;

      const reader = new FileReader();
      const zipUnpacker = new JSZip();
      reader.onload = unpack;
      reader.readAsArrayBuffer(archive);

      async function unpack(e) {
        const {files} = await zipUnpacker.loadAsync(e.target.result);
        const jsFile = await Object.entries(files).find(([key]) => key.includes(".js"))[1].async("text");
        const parsedJsFile = window.data = {exports: null};
        eval(`(function (module) {
          ${jsFile}
        })(window.data)`);

        async function unpackJson([key, value]) {
          const necessaryFile = await files[value].async("text");
          const necessaryFileBlob = new Blob([necessaryFile], {type: "text/plain"});
          parsedJsFile.exports.assets[key] = URL.createObjectURL(necessaryFileBlob);
        }

        await Promise.all(Object.entries(parsedJsFile.exports.assets).map(unpackJson));
      }

    },
    onDragLeave: e => {
      e.preventDefault();
      switchDragClass(ref, "remove");
    },
    ref
  };
};
