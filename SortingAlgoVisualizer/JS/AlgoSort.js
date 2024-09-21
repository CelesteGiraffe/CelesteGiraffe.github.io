import { Canvas } from "./Canvas.js";
import { SortingUtils } from "./SortingUtils.js";

export class AlgoSort {
  constructor(size, s, height) {
    this.canvas = new Canvas(size, s, height);
    this.util = new SortingUtils(this.canvas);
  }

  start() {
    this.canvas.setup();
  }

  newArray() {
    this.canvas.clear();
    this.canvas.setup();
  }

  clear() {
    this.canvas.clear();
  }

  reset() {
    this.canvas.resetGraph();
  }

  async quickSort() {
    let array = this.canvas.array;
    await this.util.quickSortRecursion(array, 0, array.length - 1);
  }

  async bubbleSort() {
    let array = this.canvas.array;
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          this.util.swap(i, i + 1, array);
          isSorted = false;
          await this.util.sleep();
          this.canvas.clear();
          this.canvas.drawGraph(array);
        }
      }
      counter++;
    }
  }

  async insertionSort() {
    let array = this.canvas.array;
    let i, key, j;
    for (i = 1; i < array.length; i++) {
      key = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
      array[j + 1] = key;
    }
  }

  async heapSort() {
    let array = this.canvas.array;
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.maxHeap(array, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
      this.util.swap(0, i, array);
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
      this.maxHeap(array, i, 0);
    }
  }

  maxHeap(array, n, m) {
    let largest = m;
    let l = 2 * m + 1;
    let r = 2 * m + 2;
    if (l < n && array[l] > array[largest]) {
      largest = l;
    }
    if (r < n && array[r] > array[largest]) {
      largest = r;
    }
    if (largest != m) {
      this.util.swap(m, largest, array);
      this.maxHeap(array, n, largest);
    }
  }

  async mergeSort() {
    let array = this.canvas.array;
    await this.mergeSortRecursion(array, 0, array.length - 1);
  }

  async mergeSortRecursion(array, left, right) {
    if (left >= right) {
      return;
    }
    const middle = Math.floor((left + right) / 2);
    await this.mergeSortRecursion(array, left, middle);
    await this.mergeSortRecursion(array, middle + 1, right);
    await this.merge(array, left, middle, right);
  }

  async merge(array, left, middle, right) {
    const leftArray = array.slice(left, middle + 1);
    const rightArray = array.slice(middle + 1, right + 1);
    let i = 0,
      j = 0,
      k = left;

    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      k++;
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
    }

    while (i < leftArray.length) {
      array[k] = leftArray[i];
      i++;
      k++;
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
    }

    while (j < rightArray.length) {
      array[k] = rightArray[j];
      j++;
      k++;
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
    }
  }

  async functioningSortTestAlgo() {
    let array = this.canvas.array;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          this.util.swap(j, j + 1, array);
          await this.util.sleep();
          this.canvas.clear();
          this.canvas.drawGraph(array);
        }
      }
    }
  }
}
