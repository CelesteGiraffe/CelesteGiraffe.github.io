import { AlgoSort } from "./AlgoSort.js";

var algoSort = new AlgoSort(120, "AlgoDisplay", 650);
var algoSortSmall = new AlgoSort(27, "sAlgoDisplay", 395);

// Event listeners for the main canvas
document
  .getElementById("reset")
  .addEventListener("click", algoSort.reset.bind(algoSort));
document
  .getElementById("newArray")
  .addEventListener("click", algoSort.newArray.bind(algoSort));
document
  .getElementById("quick")
  .addEventListener("click", algoSort.quickSort.bind(algoSort));
document
  .getElementById("bubble")
  .addEventListener("click", algoSort.bubbleSort.bind(algoSort));
document
  .getElementById("insertion")
  .addEventListener("click", algoSort.insertionSort.bind(algoSort));
document
  .getElementById("heap")
  .addEventListener("click", algoSort.heapSort.bind(algoSort));
document
  .getElementById("merge")
  .addEventListener("click", algoSort.mergeSort.bind(algoSort));
document
  .getElementById("test")
  .addEventListener("click", algoSort.functioningSortTestAlgo.bind(algoSort));

// Event listeners for the small canvas
document
  .getElementById("sreset")
  .addEventListener("click", algoSortSmall.reset.bind(algoSortSmall));
document
  .getElementById("snewArray")
  .addEventListener("click", algoSortSmall.newArray.bind(algoSortSmall));
document
  .getElementById("squick")
  .addEventListener("click", algoSortSmall.quickSort.bind(algoSortSmall));
document
  .getElementById("sbubble")
  .addEventListener("click", algoSortSmall.bubbleSort.bind(algoSortSmall));
document
  .getElementById("sinsertion")
  .addEventListener("click", algoSortSmall.insertionSort.bind(algoSortSmall));
document
  .getElementById("sheap")
  .addEventListener("click", algoSortSmall.heapSort.bind(algoSortSmall));
document
  .getElementById("smerge")
  .addEventListener("click", algoSortSmall.mergeSort.bind(algoSortSmall));
document
  .getElementById("stest")
  .addEventListener(
    "click",
    algoSortSmall.functioningSortTestAlgo.bind(algoSortSmall)
  );
