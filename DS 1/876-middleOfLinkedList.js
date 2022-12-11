function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let depth = nodeDepth(head);
    
    for (let i = 0; i < Math.floor(depth / 2); i++) {
        head = head.next;
    }
    return head;
};

// Auxiliary function to get the node depth
var nodeDepth = function(head) {
    let i = 0;
    while (head.next !== null) {
        head = head.next;
        i++;
    }
    return i+1;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(head));