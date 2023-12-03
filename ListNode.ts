class ListNode<T> {
    val: T;
    key: (string | number);
    next: ListNode<T> | null;
    prev: ListNode<T> | null;

    constructor(key: (string | number), val: T) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }

    addNodeToList(head: ListNode<T>, node: ListNode<T>) {
        let headNext = head.next as ListNode<T>;

        node.next = headNext;
        headNext.prev = node;
        head.next = node;
        node.prev = head;
    }

    deleteNodeFromList(node: ListNode<T>) {
        let nextNode = node.next as ListNode<T>;
        let prevNode = node.prev as ListNode<T>;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;
    }
}