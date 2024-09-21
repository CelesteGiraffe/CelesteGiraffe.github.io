export class SortingUtils {
  constructor(c) {
    this.c = c;
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, SortingUtils.waitTime));
  }

  swap(leftIndex, rightIndex, items) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  async quickSortRecursion(array, start, end) {
    if (start >= end) {
      return;
    }
    let index = await this.quickSortPartition(array, start, end);
    await Promise.all([
      this.quickSortRecursion(array, start, index - 1),
      this.quickSortRecursion(array, index + 1, end),
    ]);
  }

  async quickSortPartition(array, start, end) {
    var pivotIndex = start;
    var pivotValue = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        this.swap(i, pivotIndex, array);
        await this.sleep();
        this.c.clear();
        this.c.drawGraph(array);
        pivotIndex++;
      }
    }
    this.swap(pivotIndex, end, array);
    this.c.clear();
    this.c.drawGraph(array);
    return pivotIndex;
  }
}

SortingUtils.waitTime = 5;
