import { useRef } from "react";

class LRUCache<T> extends ListNode<T> {
  private cache: Record<string | number, ListNode<T>>;
  private capacity: number;
  private head: ListNode<T>;
  private tail: ListNode<T>;

  constructor(cap: number) {
    super(-1, {} as T);
    this.cache = {};
    this.capacity = cap;
    this.head = new ListNode<T>(-1, {} as T);
    this.tail = new ListNode<T>(-1, {} as T);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public get(key: string | number) {
    if (this.cache[key]) {
      let val = this.cache[key].val;
      this.deleteNodeFromList(this.cache[key]);
      this.addNodeToList(this.head, new ListNode<T>(key, val));
      this.cache[key] = this.head.next as ListNode<T>;
      return val;
    }
    return null;
  }

  public put(key: string | number, val: T) {
    if (this.cache[key]) {
      this.deleteNodeFromList(this.cache[key]);
      this.addNodeToList(this.head, new ListNode<T>(key, val));
      this.cache[key] = this.head.next as ListNode<T>;
    } else {
      if (Object.keys(this.cache).length >= this.capacity && this.tail.prev) {
        delete this.cache[this.tail.prev.key];
        this.deleteNodeFromList(this.tail.prev);
      }
      this.addNodeToList(this.head, new ListNode<T>(key, val));
      this.cache[key] = this.head.next as ListNode<T>;
    }
  }
  public getCachedData(): (string | number)[] {
    const arr = new Array();
    let tmp = this.head.next as ListNode<T>;
    while (tmp.next != null) {
      arr.push(tmp.key);
      tmp = tmp.next;
    }
    return arr;
  }
}

export const useLRUCache = <T>(cap: number) => {
  const lruRef = useRef(new LRUCache<T>(cap));
  return {
    get: (key: string | number): T | null => lruRef.current.get(key),
    put: (key: string | number, val: T): void => lruRef.current.put(key, val),
    getCachedData: (): (string | number)[] => lruRef.current.getCachedData(),
  };
};
